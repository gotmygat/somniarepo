# Quick Start Guide - Reverie Network

## 🚀 Get Running in 30 Seconds

```bash
npm install
npm run dev
```

Visit: `http://localhost:5173`

## 📦 What You Get

- **Interactive 3D Experience**: Drag to rotate the creature
- **Smooth Animations**: Scroll-driven effects throughout
- **Fully Responsive**: Works on all devices
- **Production Ready**: Optimized build included

## 🎨 Brand Identity

**Name**: REVERIE NETWORK
**Tagline**: The Dream Computer
**Theme**: Dreams, imagination, high-performance virtual worlds

**Colors**:
- Primary Gradient: Blue (#4a90e2) → Purple (#9b59b6)
- Background: Deep Space (#0a0a0f)
- Accents: Cyan, Pink, Green gradients

## 🛠 Available Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run typecheck  # Run TypeScript checks
npm run lint       # Run ESLint
```

## 📂 Project Structure

```
src/
├── components/
│   ├── WebGLExperience.tsx    # 3D scene (drag-to-rotate)
│   ├── Navigation.tsx          # Sticky header with dropdowns
│   ├── HeroSection.tsx         # Hero with parallax effects
│   ├── TechnologySection.tsx   # Feature cards
│   ├── StatsSection.tsx        # Animated counters
│   ├── EcosystemSection.tsx    # Ecosystem overview
│   └── Footer.tsx              # Site footer
├── App.tsx                     # Main app
└── index.css                   # Global styles
```

## 🎯 Key Features

### 3D WebGL Scene
- Drag with mouse or touch to rotate
- Auto-rotation and blinking animations
- Particle effects

### Scroll Animations
- Hero fades on scroll
- Sections reveal with motion
- Counters animate when visible
- Smooth transitions

### Navigation
- Desktop: Hover dropdowns
- Mobile: Hamburger menu
- Sticky header with blur effect

## 🚢 Deploy

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages
See `.github/workflows/ci.yml` for automated deployment

## 📖 Documentation

- **Architecture**: `docs/ARCHITECTURE.md`
- **Brand Guide**: `docs/BRAND_GUIDE.md`
- **Interactions**: `docs/INTERACTIONS.md`
- **Deployment**: `docs/DEPLOYMENT.md`
- **API Spec**: `docs/API.md`
- **Full Summary**: `docs/SUMMARY.md`

## 🎨 Customization

### Change Colors
Edit `tailwind.config.js` and `src/index.css`

### Modify 3D Scene
Edit `src/components/WebGLExperience.tsx`

### Add Sections
Create new components in `src/components/` and import in `App.tsx`

## ✨ Tech Stack

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS
- Three.js (3D graphics)
- Framer Motion (animations)
- Lucide React (icons)

## 🔍 Quality Checks

All passing:
- ✅ TypeScript type checking
- ✅ ESLint (no errors)
- ✅ Production build
- ✅ Accessibility features
- ✅ SEO optimization

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers

## 🆘 Troubleshooting

**Build fails?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Types errors?**
```bash
npm run typecheck
```

**Port already in use?**
```bash
# Change port in package.json or:
npm run dev -- --port 3000
```

## 📄 License

MIT License - See LICENSE file

---

**Ready to deploy!** The site is production-ready with comprehensive documentation.
