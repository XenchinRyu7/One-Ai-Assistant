# Deployment Guide

This guide explains how to deploy the One AI Assistant landing page to various platforms.

---

## ⚠️ Important Notice

This deployment guide is for **reference purposes only**. 

- The landing page code is **proprietary**
- Deployment for commercial use requires **written permission**
- See [LICENSE](LICENSE) for details
- Contact: oneaiassistantindonesia@gmail.com

---

## 🚀 Deployment Options

### 1. Vercel (Recommended)

Vercel is the recommended platform for Next.js applications.

#### Deploy with Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

#### Deploy via Git Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Configure settings:
   - Framework Preset: `Next.js`
   - Build Command: `npm run build`
   - Output Directory: `.next`
6. Click "Deploy"

#### Environment Variables (Vercel)

Add in Vercel dashboard under Settings → Environment Variables:
```
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

### 2. Netlify

#### Deploy with Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod
```

#### Deploy via Git Integration

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

#### netlify.toml Configuration

Create `netlify.toml` in project root:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NEXT_TELEMETRY_DISABLED = "1"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### 3. GitHub Pages

⚠️ **Note**: GitHub Pages doesn't support server-side rendering. You'll need to export as static site.

```bash
# Add to package.json
"scripts": {
  "export": "next build && next export"
}

# Build and export
npm run export

# Output will be in 'out' directory
```

Then deploy the `out` directory to GitHub Pages.

---

### 4. Docker Deployment

Create `Dockerfile`:

```dockerfile
# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY pnpm-lock.yaml ./

# Install dependencies
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build application
RUN pnpm build

# Production stage
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV production

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built application
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["npm", "start"]
```

Create `.dockerignore`:

```
node_modules
.next
.git
.gitignore
README.md
.env*.local
```

Build and run:

```bash
# Build image
docker build -t one-ai-assistant .

# Run container
docker run -p 3000:3000 one-ai-assistant
```

---

### 5. Self-Hosted (VPS/Cloud Server)

#### Using PM2

```bash
# Install PM2 globally
npm install -g pm2

# Build the application
npm run build

# Start with PM2
pm2 start npm --name "one-ai-assistant" -- start

# Save PM2 configuration
pm2 save

# Setup PM2 to start on system boot
pm2 startup
```

#### Using Nginx as Reverse Proxy

Create `/etc/nginx/sites-available/one-ai-assistant`:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/one-ai-assistant /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

---

## 🔒 Environment Variables

### Required Variables

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_API_URL=https://api.yourdomain.com

# Optional
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_GTM_ID=your_google_tag_manager_id
```

### Setting Environment Variables

#### Development (.env.local)
```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

#### Production
Set via your deployment platform's dashboard or CLI.

---

## 📊 Post-Deployment Checklist

After deploying, verify:

- [ ] All pages load correctly
- [ ] Both language versions work (EN/ID)
- [ ] Forms submit successfully
- [ ] Images load properly
- [ ] Navigation works on mobile
- [ ] Meta tags are correct (check with browser dev tools)
- [ ] Sitemap is accessible (`/sitemap.xml`)
- [ ] Robots.txt is accessible (`/robots.txt`)
- [ ] SSL certificate is valid (HTTPS)
- [ ] Performance score (use Lighthouse)
- [ ] No console errors
- [ ] Analytics tracking works

---

## 🔧 Troubleshooting

### Build Fails

```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading

- Ensure `public` folder is included in deployment
- Check image paths are correct
- Verify image formats are supported

### Routing Issues

- Ensure all dynamic routes are properly configured
- Check `next.config.ts` for correct settings
- Verify middleware is working

### Performance Issues

```bash
# Analyze bundle size
npm run build
npx @next/bundle-analyzer
```

---

## 🚨 Security Considerations

Before deploying:

- [ ] Remove all sensitive data from code
- [ ] Use environment variables for API keys
- [ ] Enable HTTPS
- [ ] Configure CORS properly
- [ ] Set up security headers
- [ ] Implement rate limiting
- [ ] Enable CSP (Content Security Policy)
- [ ] Regular security updates

---

## 📈 Monitoring

### Recommended Tools

- **Vercel Analytics** - Built-in for Vercel deployments
- **Google Analytics** - User behavior tracking
- **Sentry** - Error tracking
- **Uptime Robot** - Uptime monitoring
- **New Relic** - Performance monitoring

---

## 🔄 CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'
```

---

## 📞 Need Help?

For deployment assistance:
- Open an issue: [GitHub Issues](https://github.com/XenchinRyu7/One-Ai-Assistant/issues)
- Email: oneaiassistantindonesia@gmail.com

---

## 📝 License Note

Remember: Commercial deployment requires explicit permission. See [LICENSE](LICENSE) for details.

---

<div align="center">

**One AI Assistant** 🤖  
Building the future of AI-powered customer support

[Website](https://www.oneaiassistant.id) • [GitHub](https://github.com/XenchinRyu7/One-Ai-Assistant)

</div>
