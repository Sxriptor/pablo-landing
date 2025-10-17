# ✅ Partner Signup 500 Error - SOLUTION

## 🎯 The Real Problem

Your database has ONE trigger (`handle_new_user()`) that runs for ALL signups:
- **Mobile app signups** → Creates profile + 6 other tables (user_preferences, user_sport_profiles, etc.)
- **Partner signups** → Also tries to create all those tables → **FAILS** → 500 error

Partner signups only need a profile, not all the mobile app tables.

## 🔧 The Solution

**Option 1: Smart Trigger (Recommended)**
Modify the trigger to detect partner signups and only create what's needed.

**Option 2: Separate Databases**
Use different Supabase projects for mobile app and partner portal (more expensive).

We're going with **Option 1** ✅

## 🚀 Quick Fix (5 minutes)

### Step 1: Run the SQL Fix
1. Open **Supabase Dashboard** → SQL Editor
2. Copy/paste contents of: `sql/fix-trigger-for-both-mobile-and-partner.sql`
3. Click **"Run"**
4. Wait for: `✅ Fix applied successfully!`

### Step 2: Test
1. Go to `/partner/entry`
2. Click "Sign Up"
3. Fill in the form
4. Should work! ✅

## 📝 What the Fix Does

### 1. Updates the Trigger
The `handle_new_user()` trigger now:

```sql
-- Detects if this is a partner signup
-- Partner signups send 'company_name', mobile app doesn't
is_partner_signup := (metadata->>'company_name') IS NOT NULL

IF is_partner_signup THEN
  -- Only create profile
ELSE
  -- Create profile + all mobile app tables
END IF
```

### 2. Simple Detection
Partner signups are detected by the presence of `company_name` in metadata:

```typescript
await supabase.auth.signUp({
  email,
  password,
  options: {
    data: {
      full_name: fullName,
      company_name: companyName,  // 👈 Presence indicates partner signup
    }
  }
})
```

**Why this works:**
- Partner website sends `company_name` ✅
- Mobile app doesn't send `company_name` ✅
- No need for special flags

### 3. Graceful Error Handling
Even if a table doesn't exist, signup won't fail:

```sql
BEGIN
  INSERT INTO user_preferences...
EXCEPTION
  WHEN undefined_table THEN
    -- Just skip it, don't fail
END;
```

## ✨ Benefits

| Benefit | Details |
|---------|---------|
| ✅ No breaking changes | Mobile app continues to work exactly as before |
| ✅ Partner signups work | Only creates what partners need |
| ✅ Graceful failures | Missing tables won't break signup |
| ✅ One database | No need for separate Supabase projects |
| ✅ Future-proof | Easy to add more signup types |

## 🧪 Testing

### Test Partner Signup
```bash
1. Go to /partner/entry
2. Click "Sign Up"
3. Enter:
   - Full Name: "John Doe"
   - Company: "Test Venue"
   - Email: "test@example.com"
   - Password: "securepassword123"
4. Click "CREATE ACCOUNT"
5. Should see: "Account created successfully!"
```

### Verify in Database
```sql
-- Check the new user's profile
SELECT id, username, full_name, partner 
FROM profiles 
WHERE email = 'test@example.com';

-- Should show: partner = true

-- Check NO mobile app tables were created
SELECT COUNT(*) FROM user_preferences WHERE user_id = '...';
-- Should be 0 for partner signups
```

### Test Mobile App Still Works
```bash
1. Open your mobile app
2. Sign up a new user
3. Should create all the usual tables
4. App should work normally
```

## 📊 Signup Flow Comparison

### Before (Broken)
```
Partner Signup → handle_new_user() → 
  Create profile ✅
  Create user_preferences ❌ (fails)
  → 500 ERROR
```

### After (Fixed)
```
Partner Signup → handle_new_user() → 
  Detects is_partner=true
  Create profile ✅
  Skip mobile tables
  → SUCCESS ✅
```

## 🔍 Troubleshooting

### Still getting 500 error?

**1. Check if partner column exists:**
```sql
SELECT column_name FROM information_schema.columns 
WHERE table_name = 'profiles' AND column_name = 'partner';
```
If empty, the SQL didn't run correctly.

**2. Check if metadata is passed:**
Open browser console during signup, look for the signup request:
```json
{
  "email": "test@example.com",
  "password": "...",
  "options": {
    "data": {
      "full_name": "John Doe",
      "company_name": "Test Venue"  // 👈 Presence indicates partner signup
    }
  }
}
```

**3. Check Supabase logs:**
Dashboard → Logs → Database
Look for notices like:
- `✅ Profile created for user...`
- `ℹ️  Partner signup detected - skipping mobile app tables`

**4. Verify trigger was updated:**
```sql
SELECT prosrc FROM pg_proc 
WHERE proname = 'handle_new_user';
```
Should contain `company_name` detection logic in the code.

### Profile not created?

Check RLS policy on profiles table:
```sql
-- Should allow authenticated users to insert their own profile
SELECT * FROM pg_policies 
WHERE tablename = 'profiles' 
AND policyname LIKE '%insert%';
```

### Application not saving?

Check partner_applications table RLS:
```sql
SELECT * FROM pg_policies 
WHERE tablename = 'partner_applications';
```

## 📋 Files Modified

| File | What Changed |
|------|--------------|
| `sql/fix-trigger-for-both-mobile-and-partner.sql` | ⭐ **RUN THIS** - Updates trigger |
| `app/partner/entry/page.tsx` | Adds `is_partner: true` to signup |

## 🎯 Next Steps

After signup works:
1. ✅ Test the full application flow
2. ✅ Test partner sign-in
3. ✅ Verify mobile app still works
4. ✅ Create admin panel for approving applications
5. ✅ Add email notifications

## 💡 Understanding the Pattern

This pattern (detecting signup type by metadata presence) can be used for other signup types:

```typescript
// Coach signup - send coach_bio
{ full_name: "...", coach_bio: "..." }

// Venue manager - send venue_name
{ full_name: "...", venue_name: "..." }

// Student signup - send school_name
{ full_name: "...", school_name: "..." }
```

Then in the trigger:
```sql
IF metadata->>'company_name' IS NOT NULL THEN
  -- Partner signup
ELSIF metadata->>'coach_bio' IS NOT NULL THEN
  -- Coach signup
ELSIF metadata->>'venue_name' IS NOT NULL THEN
  -- Venue manager
ELSE
  -- Regular mobile user
END IF;
```

## 📞 Support

If you're still stuck:
1. Check Supabase logs (Dashboard → Logs → Database)
2. Check browser console (F12 → Console)
3. Verify environment variables in `.env.local`
4. Make sure you ran the SQL script completely

---

**Last Updated:** After understanding that mobile app tables exist and are needed for mobile signups only.

