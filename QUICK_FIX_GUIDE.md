# 🚀 Quick Fix Guide - Partner Signup 500 Error

## ⚡ Fast Solution (5 minutes)

### 1️⃣ Open Supabase SQL Editor
Go to: https://app.supabase.com → Your Project → SQL Editor

### 2️⃣ Run This File
Copy and paste the contents of: **`sql/fix-trigger-for-both-mobile-and-partner.sql`**

### 3️⃣ Click "Run"
Wait for the success message: `✅ Fix applied successfully!`

### 4️⃣ Test Signup
Go to: `/partner/entry` and create an account

---

## 🎯 The Problem

Your database trigger tries to create mobile app tables for ALL signups:
- **Mobile app** → ✅ Creates profile + 6 other tables (works fine)
- **Partner signup** → ❌ Tries to create same tables → 500 error

Partners only need a profile, not mobile app tables!

---

## ✅ What This Fixes

| Issue | Solution |
|-------|----------|
| 500 error on signup | Trigger now detects partner signups |
| Mobile app tables | Only created for mobile signups |
| Partner signups | Only creates profile |
| Graceful failures | Missing tables won't break signup |
| Mobile app still works | Detects signup type automatically |

---

## 📋 Files Changed

### Created:
- ⭐ `sql/fix-trigger-for-both-mobile-and-partner.sql` - **USE THIS ONE!**
- ✅ `SOLUTION_PARTNER_SIGNUP.md` - Complete documentation
- ✅ `QUICK_FIX_GUIDE.md` - This file

### Modified:
- ✅ `app/partner/entry/page.tsx` - Already sends `company_name` in metadata
- ✅ Database trigger - Detects signup type and creates appropriate tables

### How It Works:
1. Partner signup sends `company_name` in metadata
2. Trigger checks if `company_name` exists
3. If yes → only creates profile (partner signup)
4. If no → creates profile + all mobile app tables (mobile signup)

---

## 🧪 Test Checklist

After running the SQL:

- [ ] Can create account at `/partner/entry`
- [ ] Receives success message after signup
- [ ] Can sign in with new credentials
- [ ] Sees "Application Pending" overlay
- [ ] Can fill out application form
- [ ] Can sign out and sign back in

---

## 🆘 Still Not Working?

### Check Database Logs
Supabase Dashboard → Logs → Database

Look for errors containing:
- `profiles`
- `partner_applications`
- `handle_new_user`

### Check Browser Console
Press F12 → Console tab

Look for errors from:
- `supabase`
- `partner/entry`

### Verify Environment Variables
Check `.env.local` has:
```
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

---

## 💡 Quick Debug Commands

### Check if tables exist:
```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('profiles', 'partners', 'partner_applications');
```

### Check if trigger exists:
```sql
SELECT tgname, tgenabled 
FROM pg_trigger 
WHERE tgname = 'on_auth_user_created';
```

### View recent signups:
```sql
SELECT id, email, created_at 
FROM auth.users 
ORDER BY created_at DESC 
LIMIT 5;
```

### View profiles:
```sql
SELECT id, username, full_name, partner 
FROM profiles 
ORDER BY created_at DESC 
LIMIT 5;
```

---

## 🎯 Expected Flow After Fix

1. User fills signup form → **Creates auth.users record**
2. Trigger fires → **Creates profiles record**
3. Frontend creates application → **Creates partner_applications record**
4. Success message shown → **User can sign in**
5. Sign in successful → **Shows application status overlay**

---

## 📞 Need Help?

If you're still stuck, check:
1. Supabase project is running
2. Database is accessible
3. Environment variables are correct
4. No firewall blocking Supabase

