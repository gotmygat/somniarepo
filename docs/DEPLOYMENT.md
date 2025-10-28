# Deployment Documentation

## Overview

This guide covers deploying the Reverie Network site to various hosting platforms.

## Build Process

### Local Build

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

**Build Output:**
- Minified JavaScript bundles
- Optimized CSS
- Static assets (HTML, SVG, XML, TXT)
- Source maps (for debugging)

### Preview Build Locally

```bash
npm run preview
```

Serves the production build locally at `http://localhost:4173`

### Build Configuration

**Vite Configuration** (`vite.config.ts`):
- React plugin enabled
- Code splitting automatic
- Asset optimization
- CSS minification
- Tree shaking

## Deployment Platforms

### 1. Vercel (Recommended)

Vercel provides zero-config deployment for Vite projects.

#### Automatic Deployment (Recommended)

**Via GitHub Integration:**

1. Push code to GitHub repository
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Vite configuration
5. Deploy

**Configuration:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

#### Manual Deployment via CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts to deploy.

#### Custom Domain

1. Add domain in Vercel dashboard
2. Update DNS records as instructed
3. SSL automatically provisioned

#### Environment Variables

Add in Vercel dashboard under Settings → Environment Variables

```
NODE_ENV=production
```

### 2. Netlify

#### Deploy via Git

1. Push to GitHub/GitLab/Bitbucket
2. Connect repository in Netlify dashboard
3. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
4. Deploy

#### Deploy via CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

#### Custom Headers

Create `public/_headers`:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
```

#### Redirects

Create `public/_redirects`:

```
/*    /index.html   200
```

### 3. GitHub Pages

#### Deploy via GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v2
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v2
```

**Configuration:**
1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Push to main branch to trigger deployment

#### Manual Deploy via gh-pages

```bash
npm install -g gh-pages
npm run build
gh-pages -d dist
```

**Note**: Update `vite.config.ts` for base path:

```typescript
export default defineConfig({
  base: '/repository-name/',
  // ... rest of config
})
```

### 4. Cloudflare Pages

#### Deploy via Git

1. Connect GitHub repository
2. Configure build:
   - Build Command: `npm run build`
   - Build Output: `dist`
3. Deploy

#### Deploy via Wrangler CLI

```bash
npm install -g wrangler
wrangler login
wrangler pages publish dist
```

### 5. AWS S3 + CloudFront

#### Setup S3 Bucket

```bash
aws s3 mb s3://reverie-network
aws s3 website s3://reverie-network --index-document index.html
```

#### Upload Build

```bash
aws s3 sync dist/ s3://reverie-network --delete
```

#### CloudFront Configuration

1. Create CloudFront distribution
2. Set origin to S3 bucket
3. Set default root object: `index.html`
4. Set error pages: 404 → 200 → `/index.html`

### 6. Self-Hosted (Nginx)

#### Nginx Configuration

```nginx
server {
    listen 80;
    server_name reverie.network;
    root /var/www/reverie-network;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

#### SSL with Let's Encrypt

```bash
sudo certbot --nginx -d reverie.network -d www.reverie.network
```

## Environment Variables

### Current Variables

No environment variables currently required.

### Adding Variables

Create `.env` file (development):

```
VITE_API_URL=https://api.example.com
```

Access in code:

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

**Important**:
- Prefix with `VITE_` for client-side access
- Never commit `.env` to git
- Use `.env.example` for documentation

## Performance Optimization

### Asset Optimization

**Images** (when added):
- Use WebP format
- Lazy load below-the-fold images
- Provide responsive sizes

**Fonts** (if added):
- Use font-display: swap
- Subset fonts to needed characters
- Self-host for performance

### Caching Strategy

**Recommended Headers:**

```
# HTML - No cache (always fresh)
Cache-Control: no-cache, no-store, must-revalidate

# JS/CSS - Long cache with hash
Cache-Control: public, max-age=31536000, immutable

# Static assets
Cache-Control: public, max-age=31536000
```

### CDN Configuration

**Recommended Settings:**
- Enable HTTP/3
- Enable Brotli compression
- Enable minification (if not done in build)
- Set long cache for hashed assets
- Purge cache on deployment

## Monitoring

### Recommended Tools

**Performance Monitoring:**
- Vercel Analytics (free tier)
- Google Analytics
- Plausible Analytics (privacy-focused)

**Error Tracking:**
- Sentry
- LogRocket
- BugSnag

**Uptime Monitoring:**
- UptimeRobot
- Pingdom
- StatusCake

### Web Vitals

Monitor Core Web Vitals:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

## Security Headers

### Recommended Headers

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

### SSL/TLS

- Use TLS 1.2 or higher
- Enable HSTS
- Use strong cipher suites
- Enable OCSP stapling

## CI/CD Pipeline

### GitHub Actions Example

See `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint
      - run: npm run typecheck
      - run: npm run build

  deploy:
    needs: test
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      # Add deployment step here (e.g., Vercel, Netlify)
```

## Rollback Strategy

### Vercel/Netlify
- Use deployment dashboard to rollback
- Each deployment has unique URL
- Instant rollback to previous version

### Manual Deployment
- Keep previous builds in separate directories
- Use symlinks for current version
- Quick rollback by changing symlink

## Domain Configuration

### DNS Records

**A Record** (Apex domain):
```
@ → [hosting provider IP]
```

**CNAME** (www subdomain):
```
www → [hosting provider domain]
```

**CAA Record** (SSL):
```
@ CAA 0 issue "letsencrypt.org"
```

### Subdomain Setup

**Docs subdomain**:
```
docs CNAME → [docs hosting]
```

**API subdomain** (if needed):
```
api CNAME → [api hosting]
```

## Troubleshooting

### Build Fails

**Check:**
- Node version (18+ required)
- Dependencies installed (`npm ci`)
- No TypeScript errors (`npm run typecheck`)
- No linting errors (`npm run lint`)

### 404 on Refresh

**Solution**: Configure SPA fallback
- Vercel: `vercel.json` with rewrites
- Netlify: `_redirects` file
- Nginx: `try_files` directive

### Assets Not Loading

**Check:**
- Base URL configuration
- Asset paths (relative vs absolute)
- CORS headers
- CDN configuration

### Performance Issues

**Check:**
- Lighthouse score
- Bundle size (`npm run build -- --analyze`)
- Network waterfall
- WebGL performance on low-end devices

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] Navigation works
- [ ] WebGL scene renders
- [ ] Animations run smoothly
- [ ] Mobile responsive
- [ ] Forms work (if any)
- [ ] SSL certificate valid
- [ ] Custom domain configured
- [ ] Analytics tracking
- [ ] Error monitoring setup
- [ ] Sitemap accessible
- [ ] robots.txt accessible
- [ ] Lighthouse score > 90
- [ ] Cross-browser tested
- [ ] Performance acceptable

## Support

For deployment issues:
1. Check hosting provider documentation
2. Review build logs
3. Test locally with `npm run preview`
4. Check browser console for errors
5. Verify DNS propagation
