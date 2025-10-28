# Brand Guide - Reverie Network

## Brand Identity

**Reverie Network** represents the convergence of dreams and technology, where imagination becomes reality through high-performance blockchain infrastructure.

### Brand Name
**REVERIE** - Evokes a state of dreamy contemplation, creative thinking, and limitless possibility.

### Tagline Options
- "The Dream Computer"
- "Where Imagination Becomes Reality"
- "What do you envision when you close your eyes?"

## Visual Identity

### Logo

The Reverie logo consists of a bold "R" lettermark within a gradient square.

**Logo Formats:**
- Primary: Gradient box with white "R"
- Text: "REVERIE" in bold sans-serif
- Combined: Logo mark + text

**Usage Guidelines:**
- Minimum size: 32px width
- Clear space: 8px on all sides
- Do not distort or rotate
- Do not change colors arbitrarily

### Color Palette

#### Primary Colors

**Deep Space** (Background)
- HEX: `#0a0a0f`
- RGB: `10, 10, 15`
- Use: Primary background, dark sections

**Pure Black**
- HEX: `#000000`
- RGB: `0, 0, 0`
- Use: Overlays, footer background

**Pure White**
- HEX: `#ffffff`
- RGB: `255, 255, 255`
- Use: Text, icons, high contrast elements

#### Gradient Colors

**Primary Gradient** (Blue to Purple)
- Start: `#4a90e2` (Celestial Blue)
- End: `#9b59b6` (Mystic Purple)
- Use: Buttons, accents, emphasis

**Extended Gradients:**

Blue to Cyan:
- Start: `#4a90e2`
- End: `#06b6d4`

Purple to Pink:
- Start: `#9b59b6`
- End: `#ec4899`

Blue via Purple to Pink:
- Start: `#60a5fa`
- Mid: `#a855f7`
- End: `#ec4899`

Yellow to Orange:
- Start: `#facc15`
- End: `#f97316`

Green to Emerald:
- Start: `#10b981`
- End: `#059669`

#### Accent Colors

**Celestial Blue**
- HEX: `#4a90e2`
- RGB: `74, 144, 226`
- Opacity Variants: 100%, 80%, 60%, 40%, 20%, 10%, 5%

**Mystic Purple**
- HEX: `#9b59b6`
- RGB: `155, 89, 182`
- Opacity Variants: 100%, 80%, 60%, 40%, 20%, 10%, 5%

**Ethereal Cyan**
- HEX: `#06b6d4`
- RGB: `6, 182, 212`
- Use: Information, highlights

**Dream Pink**
- HEX: `#ec4899`
- RGB: `236, 72, 153`
- Use: Special features, accents

**Status Green**
- HEX: `#10b981`
- RGB: `16, 185, 129`
- Use: Success states, live indicators

#### White Opacity Scale

For overlays, borders, and subtle backgrounds:
- 100%: `rgba(255, 255, 255, 1)`
- 80%: `rgba(255, 255, 255, 0.8)`
- 60%: `rgba(255, 255, 255, 0.6)`
- 40%: `rgba(255, 255, 255, 0.4)`
- 20%: `rgba(255, 255, 255, 0.2)`
- 10%: `rgba(255, 255, 255, 0.1)`
- 5%: `rgba(255, 255, 255, 0.05)`

## Typography

### Font Stack

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
```

### Type Scale

**Display (Hero Headings)**
- Desktop: 96px / 6rem (text-8xl)
- Tablet: 72px / 4.5rem (text-7xl)
- Mobile: 48px / 3rem (text-5xl)
- Weight: Bold (700)
- Line Height: 1.1

**Heading 1**
- Desktop: 60px / 3.75rem (text-6xl)
- Tablet: 48px / 3rem (text-5xl)
- Mobile: 36px / 2.25rem (text-4xl)
- Weight: Bold (700)
- Line Height: 1.2

**Heading 2**
- Desktop: 48px / 3rem (text-5xl)
- Tablet: 36px / 2.25rem (text-4xl)
- Mobile: 30px / 1.875rem (text-3xl)
- Weight: Bold (700)
- Line Height: 1.2

**Heading 3**
- Size: 30px / 1.875rem (text-3xl)
- Weight: Bold (700)
- Line Height: 1.3

**Heading 4**
- Size: 24px / 1.5rem (text-2xl)
- Weight: Semibold (600)
- Line Height: 1.4

**Body Large**
- Size: 20px / 1.25rem (text-xl)
- Weight: Normal (400)
- Line Height: 1.6

**Body**
- Size: 16px / 1rem (text-base)
- Weight: Normal (400)
- Line Height: 1.6

**Body Small**
- Size: 14px / 0.875rem (text-sm)
- Weight: Normal (400)
- Line Height: 1.5

**Caption**
- Size: 12px / 0.75rem (text-xs)
- Weight: Normal (400)
- Line Height: 1.4

## Spacing System

Based on 8px grid:

- `xs`: 4px / 0.25rem
- `sm`: 8px / 0.5rem
- `md`: 16px / 1rem
- `lg`: 24px / 1.5rem
- `xl`: 32px / 2rem
- `2xl`: 48px / 3rem
- `3xl`: 64px / 4rem
- `4xl`: 96px / 6rem
- `5xl`: 128px / 8rem

## Component Styles

### Buttons

**Primary Button**
- Background: Gradient (blue to purple)
- Text: White
- Padding: 16px 32px (py-4 px-8)
- Border Radius: 8px (rounded-lg)
- Font Size: 18px (text-lg)
- Font Weight: 600
- Hover: Scale 1.05
- Shadow: `shadow-lg shadow-blue-500/30`

**Secondary Button**
- Background: `rgba(255, 255, 255, 0.1)`
- Backdrop Blur: Yes
- Text: White
- Padding: 16px 32px
- Border: 1px solid `rgba(255, 255, 255, 0.2)`
- Border Radius: 8px
- Hover: Background `rgba(255, 255, 255, 0.2)`

### Cards

**Feature Card**
- Background: `rgba(255, 255, 255, 0.05)`
- Backdrop Blur: Yes
- Border: 1px solid `rgba(255, 255, 255, 0.1)`
- Border Radius: 16px (rounded-2xl)
- Padding: 32px (p-8)
- Hover: Background `rgba(255, 255, 255, 0.1)`, Transform scale(1.02)

### Navigation

**Header**
- Background: `rgba(0, 0, 0, 0.4)`
- Backdrop Blur: Large
- Border Bottom: 1px solid `rgba(255, 255, 255, 0.1)`
- Height: 64px

### Effects

**Glass Morphism**
- Background: `rgba(255, 255, 255, 0.05)` to `0.1`
- Backdrop Filter: `blur(12px)`
- Border: `1px solid rgba(255, 255, 255, 0.1)`

**Glow Effect**
- Text Shadow: `0 0 40px rgba(74, 144, 226, 0.5)`
- Box Shadow: `0 0 60px rgba(74, 144, 226, 0.3)`

**Gradient Overlay**
- Opacity: 10% to 20%
- Blur: 48px to 96px (blur-3xl)

## Animation Guidelines

### Timing

**Instant**: 100ms - Microinteractions
**Fast**: 200ms - Hover states, dropdowns
**Normal**: 300ms - Most transitions
**Slow**: 600ms - Section reveals
**Very Slow**: 1000ms+ - Hero animations

### Easing

- **Ease Out**: Most animations (smooth deceleration)
- **Ease In Out**: Two-way transitions
- **Spring**: Playful, organic motion (Framer Motion)

### Motion Principles

1. **Purposeful**: Every animation has a reason
2. **Smooth**: No jarring or abrupt movements
3. **Consistent**: Similar elements move similarly
4. **Respectful**: Honor `prefers-reduced-motion`

## Usage Examples

### Gradient Text
```css
background: linear-gradient(to right, #4a90e2, #9b59b6);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

### Glass Card
```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 16px;
```

### Glow Button
```css
background: linear-gradient(to right, #4a90e2, #9b59b6);
box-shadow: 0 20px 40px rgba(74, 144, 226, 0.3);
transition: transform 0.3s ease-out;

&:hover {
  transform: scale(1.05);
}
```

## Accessibility

### Color Contrast

All text must meet WCAG AA standards:
- Normal text: 4.5:1 contrast ratio
- Large text (18px+): 3:1 contrast ratio
- Interactive elements: Sufficient contrast in all states

### Focus States

All interactive elements must have visible focus indicators:
- Outline: 2px solid with accent color
- Offset: 2px
- Border Radius: Match element

## Brand Voice

**Tone**: Innovative, visionary, accessible, empowering
**Personality**: Forward-thinking, dreamy yet technical, inclusive
**Language**: Clear, inspirational, avoids overly technical jargon

### Messaging Principles

1. **Dream-focused**: Emphasize imagination and possibility
2. **Performance-driven**: Highlight speed and efficiency
3. **Accessible**: Everyone can build and create
4. **Future-oriented**: Building tomorrow's experiences

## Don'ts

- Don't use purple/indigo hues outside the brand gradient
- Don't distort the logo
- Don't use low-contrast text
- Don't animate excessively
- Don't ignore reduced motion preferences
- Don't use colors inconsistent with the palette
