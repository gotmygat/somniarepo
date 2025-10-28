# Reverie Network

A production-ready, high-performance blockchain website featuring immersive 3D experiences, scroll-driven animations, and drag-to-explore interactions.

## Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to see the site.

### Production Build

```bash
npm run build
npm run preview
```

### Type Checking

```bash
npm run typecheck
```

### Linting

```bash
npm run lint
```

## Features

- **3D WebGL Experience**: Interactive drag-to-rotate creature with blinking animations
- **Scroll-Driven Animations**: Parallax effects, fade transitions, and progress indicators
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Performance Optimized**: Lazy loading, code splitting, and optimized assets
- **Accessibility**: ARIA labels, keyboard navigation, reduced motion support
- **SEO Ready**: Meta tags, sitemap, robots.txt, and semantic HTML

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js
- **Animations**: Framer Motion + GSAP
- **Icons**: Lucide React

## Project Structure

```
/
├── public/              # Static assets
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/      # React components
│   │   ├── WebGLExperience.tsx
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── TechnologySection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── EcosystemSection.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── docs/               # Documentation
└── package.json
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - see LICENSE file for details.

## Documentation

For comprehensive documentation, see the `/docs` directory:

- [Architecture](docs/ARCHITECTURE.md)
- [Brand Guide](docs/BRAND_GUIDE.md)
- [Interactions](docs/INTERACTIONS.md)
- [Deployment](docs/DEPLOYMENT.md)
