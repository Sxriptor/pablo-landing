-- =====================================================
-- FIX TRIGGER TO HANDLE BOTH MOBILE APP & PARTNER SIGNUPS
-- This updates the existing handle_new_user() trigger to:
-- 1. Always create the profile (required for both)
-- 2. Try to create mobile app rows (gracefully fail if tables don't exist)
-- 3. Never fail the entire signup due to optional table inserts
-- =====================================================

-- =====================================================
-- 1. ADD PARTNER COLUMN TO PROFILES (if missing)
-- =====================================================

DO $$ 
BEGIN
    IF NOT EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public' 
        AND table_name = 'profiles' 
        AND column_name = 'partner'
    ) THEN
        ALTER TABLE profiles ADD COLUMN partner BOOLEAN DEFAULT false;
        CREATE INDEX IF NOT EXISTS idx_profiles_partner ON profiles(partner);
        RAISE NOTICE '✅ Added partner column to profiles table';
    ELSE
        RAISE NOTICE '✓ partner column already exists';
    END IF;
END $$;

-- =====================================================
-- 2. REPLACE THE TRIGGER FUNCTION
-- =====================================================

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
DECLARE
    user_skill_level TEXT;
    user_preferred_sport TEXT;
    is_partner_signup BOOLEAN;
BEGIN
    -- Detect if this is a partner signup
    -- Partner signups send 'company_name' in metadata, mobile app doesn't
    is_partner_signup := (NEW.raw_user_meta_data->>'company_name') IS NOT NULL;
    
    -- Get skill level and preferred sport from metadata
    user_skill_level := COALESCE(NEW.raw_user_meta_data->>'skill_level', 'Beginner');
    user_preferred_sport := COALESCE(NEW.raw_user_meta_data->>'preferred_sport', 'padel');
    
    -- ===== ALWAYS CREATE PROFILE (required for both mobile & partner) =====
    BEGIN
        INSERT INTO public.profiles (
            id, 
            username, 
            full_name, 
            first_name, 
            last_name, 
            preferred_sport,
            partner
        )
        VALUES (
            NEW.id,
            COALESCE(NEW.raw_user_meta_data->>'username', split_part(NEW.email, '@', 1)),
            COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
            COALESCE(NEW.raw_user_meta_data->>'first_name', ''),
            COALESCE(NEW.raw_user_meta_data->>'last_name', ''),
            user_preferred_sport,
            false  -- Always start as false, will be set to true when application is approved
        )
        ON CONFLICT (id) DO NOTHING;
        
        IF is_partner_signup THEN
            RAISE NOTICE '✅ Profile created for partner signup (user %)', NEW.id;
        ELSE
            RAISE NOTICE '✅ Profile created for mobile app user %', NEW.id;
        END IF;
    EXCEPTION
        WHEN OTHERS THEN
            RAISE WARNING '⚠️  Failed to create profile for user %: %', NEW.id, SQLERRM;
            -- Don't fail - continue anyway
    END;
    
    -- ===== MOBILE APP TABLES (only if NOT partner signup) =====
    IF NOT is_partner_signup THEN
        -- Try to create user preferences
        BEGIN
            INSERT INTO public.user_preferences (user_id, theme, language)
            VALUES (
                NEW.id,
                COALESCE(NEW.raw_user_meta_data->>'theme', 'light'),
                COALESCE(NEW.raw_user_meta_data->>'language', 'en')
            );
            RAISE NOTICE '✅ User preferences created';
        EXCEPTION
            WHEN undefined_table THEN
                RAISE NOTICE 'ℹ️  Skipping user_preferences (table does not exist)';
            WHEN OTHERS THEN
                RAISE WARNING '⚠️  Failed to create user preferences: %', SQLERRM;
        END;
        
        -- Try to create user sport profile
        BEGIN
            INSERT INTO public.user_sport_profiles (user_id, sport_id, skill_level, preferred_position)
            VALUES (
                NEW.id,
                user_preferred_sport,
                user_skill_level,
                COALESCE(NEW.raw_user_meta_data->>'preferred_position', 'Any')
            );
            RAISE NOTICE '✅ User sport profile created';
        EXCEPTION
            WHEN undefined_table THEN
                RAISE NOTICE 'ℹ️  Skipping user_sport_profiles (table does not exist)';
            WHEN OTHERS THEN
                RAISE WARNING '⚠️  Failed to create user sport profile: %', SQLERRM;
        END;
        
        -- Try to create user sport stats
        BEGIN
            INSERT INTO public.user_sport_stats (user_id, sport_id)
            VALUES (NEW.id, user_preferred_sport);
            RAISE NOTICE '✅ User sport stats created';
        EXCEPTION
            WHEN undefined_table THEN
                RAISE NOTICE 'ℹ️  Skipping user_sport_stats (table does not exist)';
            WHEN OTHERS THEN
                RAISE WARNING '⚠️  Failed to create user sport stats: %', SQLERRM;
        END;
        
        -- Try to create leaderboard entries
        BEGIN
            INSERT INTO public.leaderboard (user_id, region, period, rank, points)
            VALUES 
                (NEW.id, 'global', 'all_time', NULL, 0),
                (NEW.id, 'global', 'monthly', NULL, 0),
                (NEW.id, 'global', 'weekly', NULL, 0);
            RAISE NOTICE '✅ Leaderboard entries created';
        EXCEPTION
            WHEN undefined_table THEN
                RAISE NOTICE 'ℹ️  Skipping leaderboard (table does not exist)';
            WHEN OTHERS THEN
                RAISE WARNING '⚠️  Failed to create leaderboard entries: %', SQLERRM;
        END;
        
        -- Try to create user friends record
        BEGIN
            INSERT INTO public.user_friends (user_id)
            VALUES (NEW.id);
            RAISE NOTICE '✅ User friends record created';
        EXCEPTION
            WHEN undefined_table THEN
                RAISE NOTICE 'ℹ️  Skipping user_friends (table does not exist)';
            WHEN OTHERS THEN
                RAISE WARNING '⚠️  Failed to create user friends record: %', SQLERRM;
        END;
        
        -- Try to create welcome notification
        BEGIN
            INSERT INTO public.notifications (user_id, type, title, message)
            VALUES (
                NEW.id,
                'match_invite',
                'Welcome to PlayCircle!',
                'Welcome to PlayCircle! Complete your profile and start finding matches in your area.'
            );
            RAISE NOTICE '✅ Welcome notification created';
        EXCEPTION
            WHEN undefined_table THEN
                RAISE NOTICE 'ℹ️  Skipping notifications (table does not exist)';
            WHEN OTHERS THEN
                RAISE WARNING '⚠️  Failed to create welcome notification: %', SQLERRM;
        END;
    ELSE
        RAISE NOTICE 'ℹ️  Partner signup detected - skipping mobile app tables';
    END IF;
    
    RETURN NEW;
EXCEPTION
    WHEN OTHERS THEN
        -- Log the error but NEVER fail the signup
        RAISE WARNING '⚠️  Error in handle_new_user for user %: %', NEW.id, SQLERRM;
        RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Verify the trigger exists
DO $$
DECLARE
    trigger_exists BOOLEAN;
BEGIN
    SELECT EXISTS (
        SELECT 1 FROM pg_trigger 
        WHERE tgname = 'on_auth_user_created'
    ) INTO trigger_exists;
    
    IF NOT trigger_exists THEN
        -- Create the trigger if it doesn't exist
        CREATE TRIGGER on_auth_user_created
            AFTER INSERT ON auth.users
            FOR EACH ROW 
            EXECUTE FUNCTION public.handle_new_user();
        RAISE NOTICE '✅ Trigger created';
    ELSE
        RAISE NOTICE '✅ Trigger already exists and has been updated';
    END IF;
END $$;

-- =====================================================
-- 3. CREATE PARTNER TABLES (if they don't exist)
-- =====================================================

-- Create partners table
CREATE TABLE IF NOT EXISTS partners (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    company_name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone TEXT,
    address TEXT,
    logo_url TEXT,
    website TEXT,
    description TEXT,
    status TEXT DEFAULT 'approved' CHECK (status IN ('pending', 'approved', 'rejected', 'suspended')),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    business_type TEXT,
    contact_person TEXT,
    tax_id TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT partners_email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

CREATE INDEX IF NOT EXISTS idx_partners_user_id ON partners(user_id);
ALTER TABLE partners ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Partners can view own record" ON partners;
CREATE POLICY "Partners can view own record"
    ON partners FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Partners can update own record" ON partners;
CREATE POLICY "Partners can update own record"
    ON partners FOR UPDATE USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);

-- Create partner_applications table
CREATE TABLE IF NOT EXISTS partner_applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    company_name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    contact_person TEXT NOT NULL,
    business_type TEXT NOT NULL CHECK (business_type IN ('venue', 'club', 'academy', 'other')),
    description TEXT NOT NULL,
    website TEXT,
    address TEXT,
    city TEXT,
    state TEXT,
    postal_code TEXT,
    country TEXT DEFAULT 'USA',
    years_in_business INTEGER,
    number_of_courts INTEGER,
    sports_offered TEXT[],
    estimated_monthly_bookings INTEGER,
    current_booking_system TEXT,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'under_review')),
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    reviewed_at TIMESTAMP WITH TIME ZONE,
    reviewed_by UUID REFERENCES auth.users(id),
    rejection_reason TEXT,
    admin_notes TEXT,
    business_license_url TEXT,
    insurance_certificate_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    CONSTRAINT applications_one_per_user UNIQUE (user_id)
);

CREATE INDEX IF NOT EXISTS idx_applications_user_id ON partner_applications(user_id);
ALTER TABLE partner_applications ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own application" ON partner_applications;
CREATE POLICY "Users can view own application"
    ON partner_applications FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can create own application" ON partner_applications;
CREATE POLICY "Users can create own application"
    ON partner_applications FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own pending application" ON partner_applications;
CREATE POLICY "Users can update own pending application"
    ON partner_applications FOR UPDATE
    USING (auth.uid() = user_id AND status = 'pending')
    WITH CHECK (auth.uid() = user_id AND status = 'pending');

-- =====================================================
-- 4. APPLICATION APPROVAL TRIGGER
-- =====================================================

-- Function to update partners table when application is approved
CREATE OR REPLACE FUNCTION update_partner_from_application()
RETURNS TRIGGER AS $$
BEGIN
    -- When application is approved, update the partners table with application data
    IF NEW.status = 'approved' AND OLD.status != 'approved' THEN
        -- Build full address
        UPDATE partners
        SET 
            phone = NEW.phone,
            address = CONCAT_WS(', ', 
                NEW.address, 
                NEW.city, 
                NEW.state, 
                NEW.postal_code,
                CASE WHEN NEW.country != 'USA' THEN NEW.country ELSE NULL END
            ),
            website = NEW.website,
            description = NEW.description,
            business_type = NEW.business_type,
            contact_person = NEW.contact_person,
            updated_at = NOW()
        WHERE user_id = NEW.user_id;
        
        RAISE NOTICE '✅ Partners table updated with application data for user %', NEW.user_id;
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for application approval
DROP TRIGGER IF EXISTS on_application_approved ON partner_applications;
CREATE TRIGGER on_application_approved
    AFTER UPDATE OF status ON partner_applications
    FOR EACH ROW
    WHEN (NEW.status = 'approved' AND OLD.status IS DISTINCT FROM NEW.status)
    EXECUTE FUNCTION update_partner_from_application();

-- =====================================================
-- 5. GRANT PERMISSIONS
-- =====================================================

GRANT SELECT, INSERT, UPDATE ON partners TO authenticated;
GRANT SELECT, INSERT, UPDATE ON partner_applications TO authenticated;

-- =====================================================
-- SUCCESS MESSAGE
-- =====================================================

DO $$
BEGIN
    RAISE NOTICE '====================================';
    RAISE NOTICE '✅ Fix applied successfully!';
    RAISE NOTICE '====================================';
    RAISE NOTICE 'The trigger now handles:';
    RAISE NOTICE '  ✓ Mobile app signups (creates all tables)';
    RAISE NOTICE '  ✓ Partner signups (creates only profile)';
    RAISE NOTICE '  ✓ Graceful failures (never breaks signup)';
    RAISE NOTICE '';
    RAISE NOTICE 'Test partner signup at: /partner/entry';
    RAISE NOTICE '====================================';
END $$;

