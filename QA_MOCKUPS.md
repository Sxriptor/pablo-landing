# Phone Mockups QA & Testing Guide

## Overview
This document outlines the testing procedures for the responsive phone mockups on the homepage.

## Key Requirements
✅ Each mockup maintains 9:16 aspect ratio (phone-like proportions)
✅ No distortion or stretching on any screen size
✅ Side-by-side with overlap on desktop
✅ Stacks vertically on mobile/tablet
✅ No cropping of essential content
✅ Subtle animations and transforms
✅ Accessible and performant

## Testing Checklist

### 1. Desktop Testing (≥1440px)
- [ ] Three mockups display side-by-side
- [ ] Left mockup rotated ~-12 degrees
- [ ] Center mockup larger (scale 1.15-1.18)
- [ ] Right mockup rotated ~12 degrees
- [ ] Mockups overlap slightly (negative margins)
- [ ] All content visible without cropping
- [ ] Aspect ratio maintained (9:16)
- [ ] Smooth floating animations
- [ ] No distortion when resizing window

### 2. Laptop Testing (1024px - 1366px)
- [ ] Mockups scale down proportionally
- [ ] Side-by-side layout maintained
- [ ] Rotations slightly reduced
- [ ] No horizontal scrolling
- [ ] Content remains readable
- [ ] Aspect ratio preserved

### 3. Tablet Testing (~768px)
- [ ] Mockups begin to stack or remain close
- [ ] Transforms reduced or removed
- [ ] Adequate spacing between mockups
- [ ] No overflow issues
- [ ] Touch targets appropriately sized
- [ ] Aspect ratio maintained

### 4. Mobile Testing (≤768px)
- [ ] Mockups stack vertically
- [ ] Centered alignment
- [ ] No rotation transforms
- [ ] Full mockup content visible
- [ ] Appropriate sizing (not too large/small)
- [ ] No horizontal scrolling
- [ ] Aspect ratio preserved
- [ ] Smooth scrolling

### 5. Specific Device Testing

#### iPhone SE (375x667)
- [ ] Mockups render correctly
- [ ] Text is readable
- [ ] No layout issues
- [ ] Proper spacing

#### iPhone 12/14 (390x844)
- [ ] Mockups render correctly
- [ ] Optimal sizing
- [ ] No overflow

#### iPad (768x1024)
- [ ] Transition to tablet layout works
- [ ] Mockups appropriately sized
- [ ] Good use of space

#### Common Android Sizes
- [ ] Samsung Galaxy S21 (360x800)
- [ ] Pixel 5 (393x851)
- [ ] OnePlus 9 (412x915)

### 6. Performance Testing
- [ ] No console errors or warnings
- [ ] Smooth animations (60fps)
- [ ] No layout shift (CLS < 0.1)
- [ ] Images load efficiently
- [ ] No memory leaks
- [ ] GPU acceleration working (check DevTools)

### 7. Accessibility Testing
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AA (4.5:1)
- [ ] Screen reader compatible
- [ ] Reduced motion respected
- [ ] Touch targets ≥44x44px

### 8. Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### 9. Visual Regression Testing
- [ ] Compare screenshots across breakpoints
- [ ] Verify no unexpected changes
- [ ] Check hover states
- [ ] Verify animation timing

### 10. Edge Cases
- [ ] Very wide screens (>2560px)
- [ ] Very narrow screens (<320px)
- [ ] Landscape orientation on mobile
- [ ] Zoom levels (50%, 100%, 200%)
- [ ] High DPI displays (Retina)

## Testing Tools

### Chrome DevTools
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test different device presets
4. Use responsive mode to test custom sizes
5. Check Network tab for image loading
6. Monitor Performance tab for FPS

### Lighthouse Audit
1. Run Lighthouse in DevTools
2. Check Performance score
3. Verify Accessibility score
4. Review Best Practices
5. Check for CLS issues

### Manual Testing Steps
```bash
# 1. Start development server
npm run dev

# 2. Open in browser
http://localhost:3000

# 3. Test responsive behavior
- Resize browser window slowly
- Test at each major breakpoint
- Verify smooth transitions

# 4. Test animations
- Observe floating animations
- Check hover effects
- Verify no jank or stuttering

# 5. Test on real devices
- Use BrowserStack or similar
- Test on actual phones/tablets
- Verify touch interactions
```

## Common Issues & Solutions

### Issue: Mockups appear distorted
**Solution**: Verify `aspect-ratio: 9/16` is applied and `object-fit: contain` is used

### Issue: Content is cropped
**Solution**: Check that container has proper height and no `overflow: hidden` on critical content

### Issue: Layout shifts on load
**Solution**: Ensure aspect ratio is defined before images load

### Issue: Animations are janky
**Solution**: Verify `will-change`, `backface-visibility: hidden`, and `transform: translate3d(0,0,0)` are applied

### Issue: Horizontal scrolling on mobile
**Solution**: Add `overflow-x: hidden` to parent containers and verify no fixed widths exceed viewport

## Acceptance Criteria

All tests must pass before merging:
- ✅ No visual distortion on any screen size
- ✅ Aspect ratio maintained (9:16) across all breakpoints
- ✅ No cropping of essential content
- ✅ Smooth animations (60fps)
- ✅ No console errors or warnings
- ✅ Lighthouse Performance score ≥90
- ✅ Lighthouse Accessibility score ≥95
- ✅ CLS score < 0.1
- ✅ Works on all major browsers
- ✅ Works on all tested devices

## Sign-off

- [ ] Developer tested locally
- [ ] QA team verified
- [ ] Design team approved
- [ ] Accessibility review passed
- [ ] Performance benchmarks met

## Notes
- Images should be served at appropriate sizes (use srcset)
- Consider lazy loading for below-the-fold content
- Monitor real user metrics after deployment
