# Theme Support for Dashboard Pages - Implementation Guide

## Overview
This guide explains how to add theme support to all dashboard pages so that glass cards and text properly adapt between light and dark modes.

## What's Been Updated

### ✅ Completed Pages:
1. **app/partner/dashboard/page.tsx** - Main Dashboard
   - StatCard component with theme colors
   - TableRow component with theme colors  
   - Headings and text with dynamic colors
   - Glass cards adapt to theme

2. **components/partner/layout/Navbar.tsx** - Navigation bar
3. **components/partner/layout/Sidebar.tsx** - Side navigation
4. **app/partner/dashboard/layout.tsx** - Layout wrapper
5. **app/partner/dashboard/settings/page.tsx** - Settings page (already had custom styling)

### 🔄 Needs Updates:
1. **app/partner/dashboard/venues/page.tsx** - Partially updated (imports added)
2. **app/partner/dashboard/courts/page.tsx** - Not yet updated
3. **app/partner/dashboard/matches/page.tsx** - Not yet updated
4. **app/partner/dashboard/events/page.tsx** - Not yet updated
5. **app/partner/dashboard/classes/page.tsx** - Not yet updated

## Standard Pattern for Each Page

### 1. Add Imports

```typescript
import { useTheme } from '@/components/partner/layout/ThemeProvider'
import { getThemeColors, themeColors } from '@/lib/theme-colors'
```

### 2. Initialize Theme in Component

```typescript
export default function YourPage() {
  const { theme } = useTheme()
  const colors = getThemeColors(theme)
  
  // ...rest of component
}
```

### 3. Update Glass Card Backgrounds

**Before:**
```typescript
style={{
  background: 'rgba(69, 104, 130, 0.1)',
  border: '1px solid rgba(69, 104, 130, 0.2)',
}}
```

**After:**
```typescript
style={{
  background: theme === 'dark' ? 'rgba(69, 104, 130, 0.1)' : 'rgba(255, 255, 255, 0.9)',
  border: `1px solid ${colors.cardBorder}`,
}}
```

### 4. Update Text Colors

**Before:**
```typescript
className="text-white"           // Headings
className="text-gray-400"        // Secondary text
className="text-gray-500"        // Tertiary text
```

**After:**
```typescript
style={{ color: colors.text }}              // Headings
style={{ color: colors.textSecondary }}     // Secondary text
style={{ color: colors.textTertiary }}      // Tertiary text
```

### 5. Update Borders

**Before:**
```typescript
style={{ borderBottom: '1px solid rgba(69, 104, 130, 0.2)' }}
```

**After:**
```typescript
style={{ borderBottom: `1px solid ${colors.border}` }}
```

### 6. Keep Accent Color

**Important:** The accent blue (`#456882`) should stay the same in both themes!

```typescript
// Use this for buttons, active states, icons
style={{ background: themeColors.accent }}
style={{ color: themeColors.accent }}
```

## Quick Reference - Color Mappings

| Element | Dark Mode | Light Mode | Use |
|---------|-----------|------------|-----|
| **Glass Card BG** | `rgba(69, 104, 130, 0.1)` | `rgba(255, 255, 255, 0.9)` | `theme === 'dark' ? ... : ...` |
| **Card Border** | `rgba(69, 104, 130, 0.2)` | `rgba(69, 104, 130, 0.15)` | `colors.cardBorder` |
| **Heading Text** | `#ffffff` | `#111827` | `colors.text` |
| **Body Text** | `#9ca3af` | `#4b5563` | `colors.textSecondary` |
| **Muted Text** | `#6b7280` | `#6b7280` | `colors.textTertiary` |
| **Accent Blue** | `#456882` | `#456882` | `themeColors.accent` |
| **Hover BG** | `rgba(255, 255, 255, 0.05)` | `rgba(69, 104, 130, 0.05)` | `colors.hover` |

## Common Components to Update

### Stat Cards
```typescript
<div style={{
  background: theme === 'dark' ? 'rgba(69, 104, 130, 0.1)' : 'rgba(255, 255, 255, 0.9)',
  border: `1px solid ${colors.cardBorder}`,
}}>
  <h3 style={{ color: colors.text }}>Title</h3>
  <p style={{ color: colors.textSecondary }}>Description</p>
</div>
```

### Tables
```typescript
<table>
  <thead>
    <tr style={{ borderBottom: `1px solid ${colors.border}` }}>
      <th style={{ color: colors.textSecondary }}>Column</th>
    </tr>
  </thead>
  <tbody>
    <tr 
      style={{ borderBottom: `1px solid ${colors.borderLight}` }}
      onMouseEnter={(e) => e.currentTarget.style.background = colors.hover}
      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
    >
      <td style={{ color: colors.textSecondary }}>Data</td>
    </tr>
  </tbody>
</table>
```

### Buttons
```typescript
// Primary button (keeps accent color)
<button style={{
  background: themeColors.accent,
  color: '#ffffff'
}}>
  Action
</button>

// Secondary button
<button style={{
  background: theme === 'dark' ? 'rgba(69, 104, 130, 0.2)' : 'rgba(69, 104, 130, 0.1)',
  color: colors.text
}}>
  Action
</button>
```

## Batch Update Script (Optional)

For faster updates, you can use find-and-replace:

1. **Find:** `className="text-white"`
   **Replace:** `style={{ color: colors.text }}`

2. **Find:** `className="text-gray-400"`
   **Replace:** `style={{ color: colors.textSecondary }}`

3. **Find:** `background: 'rgba(69, 104, 130, 0.1)'`
   **Replace:** `background: theme === 'dark' ? 'rgba(69, 104, 130, 0.1)' : 'rgba(255, 255, 255, 0.9)'`

4. **Find:** `border: '1px solid rgba(69, 104, 130, 0.2)'`
   **Replace:** `border: \`1px solid \${colors.cardBorder}\``

## Testing Checklist

For each updated page, verify:

- [ ] Page loads without errors
- [ ] Text is readable in dark mode (white/light gray)
- [ ] Text is readable in light mode (black/dark gray)
- [ ] Glass cards have white background in light mode
- [ ] Glass cards have semi-transparent background in dark mode
- [ ] Accent blue color stays consistent in both themes
- [ ] Hover states work correctly
- [ ] Borders are visible in both themes
- [ ] No layout shifts when switching themes
- [ ] Icons maintain proper colors
- [ ] Buttons use accent color correctly

## Priority Order for Updates

1. **High Priority:** Pages with data tables and cards
   - Venues ✅ (imports added)
   - Courts
   - Matches

2. **Medium Priority:** Pages with lists
   - Events
   - Classes

3. **Low Priority:** Modal/overlay components (inherit from parent)

## Notes

- Settings page already has custom theme handling built-in
- Dashboard layout provides base background color
- Navbar and Sidebar are fully theme-aware
- New components should use theme colors from the start
- Consider creating reusable card components for consistency

## Example: Complete Venue Card

```typescript
<motion.div
  className="rounded-3xl p-6"
  style={{
    background: theme === 'dark' ? 'rgba(69, 104, 130, 0.1)' : 'rgba(255, 255, 255, 0.9)',
    border: `1px solid ${colors.cardBorder}`,
    backdropFilter: 'blur(20px)'
  }}
  whileHover={{ y: -4, scale: 1.02 }}
>
  {/* Header */}
  <div className="flex items-start justify-between mb-4">
    <div>
      <h3 className="text-xl font-bold" style={{ color: colors.text }}>
        Venue Name
      </h3>
      <p className="text-sm" style={{ color: colors.textSecondary }}>
        Location
      </p>
    </div>
    <div className="p-3 rounded-2xl" style={{
      background: theme === 'dark' ? 'rgba(69, 104, 130, 0.2)' : 'rgba(69, 104, 130, 0.1)'
    }}>
      <Building2 className="h-6 w-6" style={{ color: themeColors.accent }} />
    </div>
  </div>

  {/* Stats */}
  <div className="grid grid-cols-2 gap-4">
    <div>
      <p className="text-xs" style={{ color: colors.textTertiary }}>Courts</p>
      <p className="text-2xl font-bold" style={{ color: colors.text }}>12</p>
    </div>
    <div>
      <p className="text-xs" style={{ color: colors.textTertiary }}>Revenue</p>
      <p className="text-2xl font-bold" style={{ color: colors.text }}>$15k</p>
    </div>
  </div>

  {/* Action Button */}
  <button
    className="w-full mt-4 px-4 py-3 rounded-xl font-bold text-white"
    style={{ background: themeColors.accent }}
  >
    View Details
  </button>
</motion.div>
```

## Summary

The theme system is now implemented in the core layout. Each content page needs to:
1. Import theme hooks
2. Replace hardcoded colors with theme-aware colors
3. Test in both light and dark modes

This ensures a consistent, professional appearance across all lighting conditions while maintaining brand identity through the accent color.

