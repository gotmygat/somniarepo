# Interactions Documentation

## Overview

This document details all interactive elements, animations, and behaviors implemented in the Reverie Network site.

## 3D WebGL Experience

### Implementation
- **Library**: Three.js (vanilla, no React wrapper)
- **File**: `src/components/WebGLExperience.tsx`

### Features

#### 3D Creature
- **Geometry**: Spherical body with wings, eyes, and pupils
- **Materials**: Phong materials with emissive properties
- **Animation**: Continuous rotation on Y-axis (0.003 rad/frame)

#### Drag-to-Rotate Interaction
- **Mouse**: Click and drag to rotate creature
- **Touch**: Single-finger drag on mobile devices
- **Implementation**:
  - Tracks mouse/touch position delta
  - Applies rotation to creature on X and Y axes
  - Rotation speed: 0.01 rad per pixel moved

#### Blinking Animation
- **Timing**: Every 180 frames (~3 seconds at 60fps)
- **Duration**: 150ms
- **Effect**: Eyes scale to 10% on Y-axis, then return to 100%
- **Implementation**: SetTimeout for smooth timing

#### Wing Animation
- **Type**: Oscillating rotation
- **Function**: Sine wave based on timestamp
- **Range**: ±0.3 radians from base angle
- **Speed**: 0.003 multiplier on time

#### Particle System
- **Count**: 100 particles
- **Distribution**: Random within 20x20x20 unit cube
- **Animation**: Vertical oscillation using sine wave
- **Group Rotation**: Continuous Y-axis rotation (0.001 rad/frame)

### Performance Optimizations
- **Pixel Ratio**: Capped at 2x for performance
- **Cleanup**: Proper disposal of renderer and event listeners
- **Frame Management**: Single RequestAnimationFrame loop

### Responsive Behavior
- **Window Resize**: Automatic camera and renderer update
- **Viewport Adaptation**: Maintains aspect ratio
- **Mobile**: Touch events fully supported

### Accessibility
- **Loading State**: Visual indicator during initialization
- **Fallback**: Could add WebGL detection (future enhancement)

## Scroll-Driven Animations

### Implementation
- **Library**: Framer Motion
- **Hook**: `useScroll` with viewport offsets

### Hero Section

#### Parallax Fade
- **Element**: Entire hero content
- **Trigger**: Scroll position
- **Effect**: Opacity fades from 1 to 0 over 500px scroll
- **Formula**: `opacity = max(0, 1 - scrollY / 500)`

#### Scroll Indicator
- **Animation**: Vertical bounce (0 → 10px → 0)
- **Duration**: 2 seconds
- **Repeat**: Infinite
- **Element**: Mouse icon with moving dot inside

#### Text Rotation
- **Elements**: Three phrases rotate every 4 seconds
- **Transition**: Fade in/out with Y-axis movement
- **Duration**: 800ms per transition

### Technology Section

#### Scroll Progress Animation
- **Target**: Section element
- **Range**: Start when enters viewport, end when leaves
- **Effects**:
  - Opacity: 0 → 1 → 1 → 0
  - Scale: 0.8 → 1 → 1 → 0.8
- **Implementation**: `useTransform` with scroll progress

#### Feature Cards
- **Trigger**: `whileInView` with `once: true`
- **Initial State**: Opacity 0, Y offset +30px
- **Final State**: Opacity 1, Y offset 0
- **Stagger**: 100ms delay per card (index * 0.1)
- **Duration**: 600ms

#### Hover Effects
- **Scale**: 1.02 (2% increase)
- **Y Offset**: -5px
- **Gradient Opacity**: 0 → 10%
- **Icon Scale**: 1.1 (10% increase)
- **Duration**: 300ms

### Stats Section

#### Animated Counters
- **Library**: Framer Motion `useMotionValue` and `animate`
- **Duration**: 2 seconds
- **Easing**: Ease out
- **Format**: Localized numbers with suffixes

**Counter Implementation:**
```typescript
const count = useMotionValue(0);
const rounded = useTransform(count, (latest) => Math.round(latest));
animate(count, finalValue, { duration: 2, ease: 'easeOut' });
```

#### Progress Bars
- **Initial**: Width 0%
- **Animate**: Width to target percentage
- **Duration**: 1 second
- **Stagger**: 200ms per bar
- **Easing**: Ease out

### Ecosystem Section

#### Card Entrance
- **Type**: Fade up with stagger
- **Initial**: Opacity 0, Y +30px
- **Delay**: 100ms per card
- **Duration**: 600ms

#### Gradient Blobs
- **Idle**: Opacity 10%, blur 48px
- **Hover**: Opacity 20%
- **Transition**: 500ms
- **Position**: Top-right corner of card

### Call-to-Action Sections

#### Button Hover
- **Effect**: Scale 1.05
- **Duration**: 300ms
- **Easing**: Ease out
- **Shadow**: Animated glow increase

## Navigation

### Desktop Dropdown

#### Interaction
- **Trigger**: Mouse enter/leave
- **State Management**: React useState
- **Animation Library**: Framer Motion AnimatePresence

#### Dropdown Animation
- **Initial**: Opacity 0, Y -10px
- **Animate**: Opacity 1, Y 0
- **Exit**: Opacity 0, Y -10px
- **Duration**: 200ms

#### Menu Items
- **Hover**: Text color white/70 → white
- **Background**: Transparent → white/5%
- **Transition**: 300ms

### Mobile Menu

#### Toggle Animation
- **Type**: Height expand/collapse
- **Initial**: Opacity 0, height 0
- **Animate**: Opacity 1, height auto
- **Exit**: Opacity 0, height 0
- **Duration**: 300ms

#### Icon Transition
- **States**: Menu icon ↔ X icon
- **Duration**: Instant (icon swap)

## Button Interactions

### Primary Buttons
- **Idle**: Gradient background, shadow
- **Hover**: Scale 1.05, increased shadow
- **Active**: Scale 0.98
- **Duration**: 300ms
- **Easing**: Ease out

### Secondary Buttons
- **Idle**: Glass background (white/10)
- **Hover**: Background white/20
- **Duration**: 300ms

### Icon Buttons
- **Hover**: Color change, scale 1.1
- **Duration**: 200ms

## Card Hover Effects

### Feature Cards
- **Background**: white/5 → white/10
- **Scale**: 1 → 1.02
- **Y Offset**: 0 → -5px
- **Icon Scale**: 1 → 1.1
- **Gradient Overlay**: Opacity 0 → 10%

### Ecosystem Cards
- **Background**: white/5 → white/10
- **Gradient Blob**: Opacity 10% → 20%
- **Duration**: 300ms

## Accessibility Features

### Reduced Motion Support

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Keyboard Navigation
- All interactive elements are keyboard accessible
- Focus states with visible outlines
- Proper tab order maintained

### Screen Reader Support
- ARIA labels for icon buttons
- Semantic HTML structure
- Alt text for images (when added)

## Performance Considerations

### Lazy Loading
- WebGLExperience loaded via React.lazy
- Suspense boundary with fallback
- Reduces initial bundle size

### Animation Performance
- Use CSS transforms (GPU-accelerated)
- RequestAnimationFrame for smooth 60fps
- Framer Motion uses optimized transform properties
- Avoid layout thrashing

### Scroll Performance
- Framer Motion handles scroll efficiently
- Passive event listeners where possible
- Debounced resize handlers

## Browser Compatibility

### WebGL
- **Support**: Chrome 56+, Firefox 51+, Safari 13+, Edge 79+
- **Fallback**: Loading state remains (future: add WebGL detection)

### CSS Features
- **Backdrop Filter**: Chrome 76+, Safari 9+ (prefixed)
- **CSS Grid**: All modern browsers
- **Custom Properties**: All modern browsers

### JavaScript Features
- **ES6+**: Transpiled by Vite
- **Optional Chaining**: Supported in target browsers
- **Async/Await**: Supported in target browsers

## Future Enhancements

### Potential Additions
1. **Parallax Scrolling**: More depth layers
2. **WebGL Shaders**: Custom shader effects
3. **Lottie Animations**: Vector animations for icons
4. **Intersection Observer**: More efficient scroll detection
5. **Page Transitions**: Route change animations
6. **Gesture Support**: Pinch-to-zoom, swipe navigation
7. **Sound Effects**: Optional audio feedback
8. **Dark/Light Mode**: Theme toggle animation

### Performance Improvements
1. **Virtual Scrolling**: For long lists
2. **Image Optimization**: WebP/AVIF support
3. **Code Splitting**: Route-based splitting
4. **Prefetching**: Anticipate user navigation
5. **Service Worker**: Offline support and caching

## Testing Interactions

### Manual Testing Checklist
- [ ] WebGL scene loads and animates
- [ ] Drag-to-rotate works (mouse and touch)
- [ ] Creature blinks periodically
- [ ] Wings animate continuously
- [ ] Scroll animations trigger correctly
- [ ] Dropdown menus open/close
- [ ] Mobile menu toggles
- [ ] Buttons respond to hover
- [ ] Cards animate on hover
- [ ] Counter animations run
- [ ] Progress bars animate
- [ ] Reduced motion is respected
- [ ] Keyboard navigation works
- [ ] Touch interactions work on mobile
- [ ] Resize handles properly

### Automated Testing
Currently no automated tests implemented. Potential tools:
- **Playwright**: E2E interaction testing
- **Jest + Testing Library**: Component testing
- **Vitest**: Unit testing for animation logic
- **Lighthouse CI**: Performance testing

## Debugging Tips

### WebGL Issues
- Check browser console for WebGL errors
- Verify WebGL context creation
- Test in different browsers
- Check for GPU driver issues

### Animation Issues
- Use React DevTools to check re-renders
- Use Framer Motion DevTools (future)
- Check browser FPS in DevTools Performance tab
- Verify scroll event listeners

### Performance Issues
- Use Lighthouse for performance audit
- Check bundle size with `npm run build`
- Use Chrome DevTools Performance tab
- Monitor memory usage in long sessions
