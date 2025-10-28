# Architecture Documentation

## Overview

Reverie Network is a modern single-page application built with React, TypeScript, and Vite. The architecture emphasizes performance, accessibility, and maintainability.

## Technology Choices

### Core Framework
- **React 18**: For component-based UI with concurrent features
- **TypeScript**: Type safety and improved developer experience
- **Vite**: Fast build tool with HMR and optimized production builds

### Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Custom CSS**: For animations and global styles

### 3D Graphics
- **Three.js**: WebGL library for 3D rendering
- **Custom Implementation**: Hand-crafted 3D scene without React Three Fiber to maintain full control

### Animations
- **Framer Motion**: Declarative animations with scroll integration
- **GSAP**: High-performance timeline-based animations (installed for future use)
- **CSS Animations**: For simple transitions and hover effects

## Project Structure

```
src/
├── components/
│   ├── WebGLExperience.tsx    # 3D interactive scene
│   ├── Navigation.tsx          # Header navigation with dropdowns
│   ├── HeroSection.tsx         # Hero with animated text
│   ├── TechnologySection.tsx   # Feature cards with scroll animations
│   ├── StatsSection.tsx        # Animated counters and metrics
│   ├── EcosystemSection.tsx    # Ecosystem overview cards
│   └── Footer.tsx              # Site footer with links
├── App.tsx                     # Main app component
├── main.tsx                    # React entry point
├── index.css                   # Global styles and Tailwind
└── vite-env.d.ts              # Type definitions
```

## Component Architecture

### WebGLExperience
- Renders 3D scene using Three.js
- Implements drag-to-rotate interaction
- Includes blinking animation for creature eyes
- Handles window resizing and cleanup
- Touch-enabled for mobile devices

### Navigation
- Sticky header with backdrop blur
- Dropdown menus on desktop
- Mobile hamburger menu
- Smooth transitions with Framer Motion

### HeroSection
- Parallax scroll effects
- Animated text with gradient
- Rotating phrases
- Scroll indicator

### TechnologySection
- Scroll-triggered animations
- Feature cards with hover effects
- Gradient overlays
- Icon integration

### StatsSection
- Animated counters using Framer Motion
- Progress bars with transitions
- Real-time status indicators
- Responsive grid layout

### EcosystemSection
- Card-based layout
- Hover animations
- Gradient backgrounds
- Call-to-action buttons

### Footer
- Multi-column layout
- Social media links
- Legal and company information
- Responsive design

## Data Flow

The application uses a simple, props-based data flow:

1. **Static Data**: Most content is defined within components
2. **State Management**: Local React state for UI interactions
3. **No Global State**: Simple architecture without Redux/Context
4. **Event Handling**: Direct event handlers for interactions

## Performance Optimizations

### Code Splitting
- Lazy loading of WebGLExperience component
- Dynamic imports for heavy dependencies

### Asset Optimization
- SVG favicon for scalability
- Lazy loading of images (when added)
- Compressed builds with Vite

### Runtime Performance
- RequestAnimationFrame for animations
- Efficient Three.js scene management
- Debounced scroll handlers (via Framer Motion)
- Reduced motion support via CSS media query

### Bundle Optimization
- Tree shaking via Vite
- Minification in production
- Modern ES modules

## Accessibility Features

### Semantic HTML
- Proper heading hierarchy
- Semantic sectioning elements
- ARIA labels where needed

### Keyboard Navigation
- Focusable interactive elements
- Visible focus states
- Tab order management

### Screen Readers
- Alt text for images
- ARIA labels for icons
- Semantic structure

### Reduced Motion
- Respects `prefers-reduced-motion`
- Disables animations when requested
- Maintains functionality without animations

## Browser Compatibility

### Target Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Polyfills
- None required for target browsers
- Modern JavaScript features used

### Fallbacks
- WebGL detection (future enhancement)
- CSS Grid with flexbox fallback
- Modern CSS features with vendor prefixes

## Build Configuration

### Vite Configuration
- TypeScript support
- React plugin with Fast Refresh
- PostCSS for Tailwind
- Build optimizations

### TypeScript Configuration
- Strict mode enabled
- Path aliases (if needed)
- Type checking for all files

### ESLint Configuration
- React recommended rules
- TypeScript integration
- Hooks rules
- Refresh rules

## Deployment Considerations

### Static Hosting
- Single-page application
- Client-side routing (if added)
- Build output in `dist/`

### Environment Variables
- None currently required
- `.env.example` for future use

### CDN Optimization
- All assets bundled
- Cacheable static files
- Compressed output

## Future Enhancements

### Potential Additions
- React Router for multi-page navigation
- Content Management System integration
- Analytics integration
- i18n for internationalization
- Progressive Web App features

### Performance Monitoring
- Web Vitals tracking
- Error boundary implementation
- Performance budgets
- Lighthouse CI integration
