-- =====================================================
-- PARTNER APPLICATION EMAIL NOTIFICATION TRIGGER
-- Sends webhook to Next.js API when a new application is submitted
-- =====================================================

-- Function to call webhook when partner application is inserted
create or replace function notify_partner_application_submitted()
returns trigger as $$
declare
  webhook_url text;
  payload jsonb;
begin
  -- Construct the webhook URL (update this with your actual domain)
  webhook_url := 'https://playcircleapp.com/api/webhooks/partner-application';

  -- Build the payload
  payload := jsonb_build_object(
    'type', 'partner_application.submitted',
    'record', jsonb_build_object(
      'id', new.id,
      'company_name', new.company_name,
      'email', new.email,
      'contact_person', new.contact_person,
      'business_type', new.business_type,
      'submitted_at', new.submitted_at
    )
  );

  -- Make HTTP request to webhook
  perform
    net.http_post(
      url := webhook_url,
      headers := jsonb_build_object(
        'Content-Type', 'application/json'
      ),
      body := payload
    );

  return new;
end;
$$ language plpgsql security definer;

-- Create trigger on partner_applications insert
drop trigger if exists on_partner_application_submitted on partner_applications;
create trigger on_partner_application_submitted
  after insert on partner_applications
  for each row
  execute function notify_partner_application_submitted();

-- =====================================================
-- COMMENTS
-- =====================================================

comment on function notify_partner_application_submitted() is 'Sends webhook notification when a new partner application is submitted';
comment on trigger on_partner_application_submitted on partner_applications is 'Triggers email notification to admins when partner application is created';

-- =====================================================
-- INSTRUCTIONS
-- =====================================================
--
-- IMPORTANT: Update the webhook_url in the function above with your actual domain
--
-- For local development, use: http://localhost:3000/api/webhooks/partner-application
-- For production, use: https://your-actual-domain.com/api/webhooks/partner-application
--
-- This trigger requires Supabase's pg_net extension to be enabled.
-- The pg_net extension allows making HTTP requests from PostgreSQL.
-- It should be enabled by default on Supabase projects.
--
