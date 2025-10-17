# Database Freeze Trigger Implementation Guide

## Overview
Implemented a comprehensive database-level security trigger that prevents any updates to user data when an account is frozen (`is_frozen = true`). This provides defense-in-depth security by enforcing the freeze at the database level, not just in the application.

## Files Created

### 1. `sql/prevent_updates_when_frozen.sql`
Complete SQL migration that creates triggers to prevent updates when account is frozen.

## How It Works

### Database Trigger Function: `check_account_frozen()`

The trigger function:
1. **Checks if account is frozen** - Queries the `profiles` table to get `is_frozen` status
2. **Allows unfreezing** - Special exception to allow changing `is_frozen` from `true` to `false`
3. **Blocks all other updates** - Raises an exception preventing any other database updates
4. **Returns clear error message** - "Cannot update data while account is frozen. Please unfreeze your account first."

### Trigger Logic

```sql
IF account is frozen:
  IF trying to unfreeze (is_frozen: true → false):
    ALLOW the operation
  ELSE:
    BLOCK the operation with error message
ELSE:
  ALLOW the operation
```

### Tables Protected

The trigger is currently active on:
- ✅ **profiles** - User profile information
- ✅ **partners** - Partner company information

**Optional tables** (commented out, can be enabled):
- venues
- courts  
- matches
- events
- classes

## Frontend Integration

### Updated Save Functions

All save functions now include:

1. **Pre-check before database call:**
```typescript
if (isFrozen) {
  setMessage({ type: 'error', text: 'Cannot save changes while account is frozen...' })
  return
}
```

2. **Error handling for trigger exceptions:**
```typescript
if (error.message?.includes('frozen')) {
  setMessage({ type: 'error', text: 'Cannot update data while account is frozen...' })
}
```

### Visual Indicators

**Blue Warning Banners** appear on:
- Company Info tab
- Account tab
- Notifications tab

**Edit Button Styling:**
- Normal: Blue background (`bg-[#456882]`)
- Frozen: Gray disabled look (`bg-neutral-700 text-neutral-400 cursor-not-allowed`)
- Clicking when frozen shows error message

**Security Tab:**
- Freeze card changes to blue theme when frozen
- Shows "⚠️ Your account is currently frozen" badge
- Button changes from "Freeze Account" (orange) to "Unfreeze Account" (blue)

## Installation Instructions

### Step 1: Run the migrations (in order)

```sql
-- First, add the freeze columns to profiles table
-- Run: sql/add_account_freeze_column.sql
```

```sql
-- Then, create the triggers to enforce freeze at database level
-- Run: sql/prevent_updates_when_frozen.sql
```

### Step 2: Test the functionality

1. **Test Freezing:**
   - Go to Settings → Security tab
   - Click "Freeze Account"
   - Confirm the action
   - Verify account is frozen in Supabase
   - Verify button changes to "Unfreeze Account"

2. **Test Edit Prevention:**
   - Try to edit Company Info → Should show error
   - Try to edit Account Settings → Should show error
   - Try to edit Notifications → Should show error
   - Verify blue warning banners appear

3. **Test Database Trigger:**
   - While frozen, try to update directly in Supabase
   - Should receive error: "Cannot update data while account is frozen"

4. **Test Unfreezing:**
   - Go to Settings → Security tab
   - Click "Unfreeze Account"
   - Confirm the action
   - Verify account is unfrozen
   - Try editing data → Should work normally

## Security Benefits

### Defense in Depth
- **Application Level:** Frontend checks prevent unnecessary API calls
- **Database Level:** Trigger ensures no updates even if bypassed in app
- **API Level:** Error handling provides clear feedback

### Attack Prevention
- Prevents API manipulation while account is frozen
- Prevents direct database updates via SQL
- Blocks all update attempts except unfreezing

### User Control
- Users can freeze their own accounts instantly
- Users can unfreeze at any time
- No admin intervention required

## Technical Details

### Trigger Behavior

**BEFORE UPDATE Trigger:**
- Fires before any update to protected tables
- Checks frozen status before allowing update
- Only fires when data actually changes (`OLD.* IS DISTINCT FROM NEW.*`)

**Special Cases Allowed:**
- Unfreezing the account (changing `is_frozen` from `true` to `false`)
- Updating `frozen_at` timestamp when unfreezing

**All Other Updates Blocked:**
- Profile information
- Company information
- Notification settings
- Any other user-controlled data

### Error Messages

**User-Friendly:**
```
Cannot update data while account is frozen. Please unfreeze your account first.
```

**Database Exception:**
```sql
RAISE EXCEPTION 'Cannot update data while account is frozen. Please unfreeze your account first.';
```

## Adding Triggers to More Tables

To protect additional tables (venues, courts, etc.), uncomment and customize:

```sql
-- Example for venues table
DROP TRIGGER IF EXISTS prevent_frozen_venue_updates ON venues;

CREATE TRIGGER prevent_frozen_venue_updates
    BEFORE UPDATE ON venues
    FOR EACH ROW
    WHEN (OLD.* IS DISTINCT FROM NEW.*)
    EXECUTE FUNCTION check_account_frozen();
```

**Important:** Update the `check_account_frozen()` function to handle the new table's user_id column:

```sql
IF TG_TABLE_NAME = 'venues' THEN
    user_id_to_check := NEW.partner_id; -- or whatever links to user
ELSIF ...
```

## Troubleshooting

### Issue: Can't unfreeze account
**Solution:** Check the trigger logic - unfreezing should always be allowed

### Issue: Trigger blocks legitimate updates
**Solution:** Verify the special case logic in the trigger function

### Issue: Error messages not showing
**Solution:** Check error handling in save functions includes `error.message?.includes('frozen')`

### Issue: Frozen state not persisting
**Solution:** Verify `is_frozen` and `frozen_at` columns exist in profiles table

## Database Schema

### Profiles Table Columns
```sql
is_frozen BOOLEAN DEFAULT false
frozen_at TIMESTAMP WITH TIME ZONE
```

### Indexes
```sql
CREATE INDEX idx_profiles_is_frozen ON profiles(is_frozen);
```

## Future Enhancements

1. **Audit Logging:** Track freeze/unfreeze events
2. **Auto-unfreeze:** Schedule automatic unfreeze after certain period
3. **Admin Override:** Allow admins to freeze/unfreeze accounts
4. **Email Notifications:** Notify users when account is frozen/unfrozen
5. **Freeze Reason:** Add optional reason field for why account was frozen
6. **Partial Freeze:** Allow certain operations while frozen (e.g., viewing data)

## Testing Checklist

- [ ] Run both SQL migrations successfully
- [ ] Freeze account from Security tab
- [ ] Verify frozen status in Supabase
- [ ] Try to edit Company Info (should fail)
- [ ] Try to edit Account Settings (should fail)
- [ ] Try to edit Notifications (should fail)
- [ ] Verify warning banners appear
- [ ] Verify Edit buttons are disabled/grayed out
- [ ] Try to update via Supabase directly (should fail)
- [ ] Unfreeze account from Security tab
- [ ] Verify editing works again after unfreeze
- [ ] Check error messages are user-friendly

## Summary

This implementation provides robust account freezing functionality with:
- ✅ Database-level enforcement via triggers
- ✅ Application-level validation
- ✅ Clear visual indicators
- ✅ User-friendly error messages
- ✅ Self-service freeze/unfreeze
- ✅ Defense against API manipulation
- ✅ Easy to extend to more tables

The frozen account feature is now production-ready with comprehensive security at multiple levels.

