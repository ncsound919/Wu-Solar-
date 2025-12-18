# Deployment Guide

## Option 1: GitHub Pages (Free)

1. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions

2. Push to main branch:
```bash
git push origin main
```

The site will automatically deploy via GitHub Actions.

## Option 2: Vercel (Recommended - Free)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. For production:
```bash
vercel --prod
```

## Option 3: Netlify (Free)

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Deploy:
```bash
netlify deploy
```

3. For production:
```bash
netlify deploy --prod
```

## Build Settings

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18.x

## Environment Variables

No environment variables are required for the basic setup.

## Custom Domain (Optional)

After deploying, you can add a custom domain:
- Vercel: Project Settings → Domains
- Netlify: Site Settings → Domain Management
- GitHub Pages: Settings → Pages → Custom Domain
