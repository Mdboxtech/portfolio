# Deployment Guide

Complete guide for deploying your Next.js portfolio to different platforms.

---

## Prerequisites

Before deploying, ensure:

1. ✅ All content is updated (check CONTENT.md)
2. ✅ Resume PDF is added to `public/resume.pdf`
3. ✅ Social links are updated in components
4. ✅ Email addresses are changed from placeholder
5. ✅ Site builds successfully locally: `npm run build`
6. ✅ Code is pushed to GitHub

---

## Option 1: Deploy to Vercel (Recommended)

Vercel is made by the Next.js team and offers the best experience.

### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Sign up at Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub

3. **Import Your Repository**
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in ~2 minutes
   - Get a free `.vercel.app` domain

5. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Auto-Deploy

Every push to `main` branch automatically deploys!

**Deployment URL:** `https://your-project.vercel.app`

---

## Option 2: Deploy to Netlify

Netlify is another excellent option with generous free tier.

### Steps:

1. **Push to GitHub** (same as Vercel step 1)

2. **Sign up at Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub

3. **Import Your Repository**
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository

4. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `out`
   - Click "Deploy site"

5. **Custom Domain (Optional)**
   - Go to Site settings → Domain management
   - Add your custom domain

### Contact Form Setup on Netlify

The contact form works automatically with Netlify Forms!

Update `app/contact/page.tsx`:

```tsx
<form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
  <input type="hidden" name="form-name" value="contact" />
  {/* rest of form */}
</form>
```

**Deployment URL:** `https://your-site.netlify.app`

---

## Option 3: Deploy to GitHub Pages

Free hosting directly from your GitHub repository.

### Steps:

1. **Update next.config.js**

   ```javascript
   const nextConfig = {
     output: 'export',
     basePath: '/your-repo-name', // Your GitHub repo name
     images: {
       unoptimized: true,
     },
     trailingSlash: true,
   }
   
   module.exports = nextConfig
   ```

2. **Build the Project**
   ```bash
   npm run build
   ```

3. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

4. **Add Deploy Script to package.json**
   ```json
   "scripts": {
     "deploy": "gh-pages -d out"
   }
   ```

5. **Deploy**
   ```bash
   npm run deploy
   ```

6. **Enable GitHub Pages**
   - Go to repo Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages` → `/ (root)`
   - Save

**Deployment URL:** `https://your-username.github.io/your-repo-name`

**Note:** Images and some features may have limitations on GitHub Pages.

---

## Option 4: Deploy to Your Own Server (VPS/Cloud)

For full control, deploy to your own server.

### Requirements:
- Ubuntu/Debian server
- Node.js 18+
- Nginx
- Domain name (optional)

### Steps:

1. **Build the Project Locally**
   ```bash
   npm run build
   ```

2. **Upload to Server**
   ```bash
   scp -r out/ user@your-server:/var/www/portfolio
   ```

3. **Configure Nginx**
   
   Create `/etc/nginx/sites-available/portfolio`:
   
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       root /var/www/portfolio;
       index index.html;

       location / {
           try_files $uri $uri.html $uri/ =404;
       }
   }
   ```

4. **Enable Site**
   ```bash
   sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

5. **SSL Certificate (Recommended)**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

---

## Post-Deployment Checklist

After deployment, verify:

- [ ] All pages load correctly
- [ ] Dark mode toggle works
- [ ] Project case studies load
- [ ] Contact form works (if integrated)
- [ ] Resume downloads
- [ ] All links work (especially social links)
- [ ] Mobile responsiveness
- [ ] SEO meta tags are correct
- [ ] Sitemap is accessible: `/sitemap.xml`
- [ ] Robots.txt is accessible: `/robots.txt`

---

## Environment Variables

If you need environment variables:

### Vercel/Netlify

Add in dashboard under Project Settings → Environment Variables:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_FORMSPREE_ID=your-formspree-id
```

### Local Development

Create `.env.local`:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_FORMSPREE_ID=your-formspree-id
```

---

## Integrating Contact Form

### Option A: Formspree

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Get your form endpoint
4. Update `app/contact/page.tsx`:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  
  if (response.ok) {
    setSubmitted(true)
  }
}
```

### Option B: Netlify Forms

Add to form element:

```tsx
<form method="POST" data-netlify="true" name="contact">
  <input type="hidden" name="form-name" value="contact" />
  {/* rest of form */}
</form>
```

Deploy to Netlify - forms work automatically!

---

## Custom Domain Setup

### Vercel

1. Go to Project Settings → Domains
2. Add domain: `yourdomain.com`
3. Add DNS records (provided by Vercel):
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### Netlify

1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS records (provided by Netlify):
   ```
   Type: CNAME
   Name: www
   Value: your-site.netlify.app
   ```

### Cloudflare (Optional)

For better performance and security, use Cloudflare:

1. Sign up at [cloudflare.com](https://cloudflare.com)
2. Add your domain
3. Update nameservers at your registrar
4. Configure SSL/TLS to "Full"

---

## Performance Optimization

After deployment, test performance:

**Tools:**
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

**Expected Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

---

## Monitoring & Analytics

### Google Analytics

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking ID
3. Add to `app/layout.tsx`:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### Vercel Analytics

Already built-in! Just enable in project settings.

---

## Updating Your Live Site

### Vercel/Netlify (Auto-Deploy)

Simply push to GitHub:

```bash
git add .
git commit -m "Update content"
git push
```

Site updates automatically in ~2 minutes!

### Manual Update

1. Make changes locally
2. Build: `npm run build`
3. Deploy updated files to your host

---

## Troubleshooting

### Build Fails

**Check:**
- Node version (18+)
- TypeScript errors: `npm run lint`
- Missing dependencies: `npm install`

### Images Not Loading

**For GitHub Pages:**
- Ensure `images.unoptimized = true` in `next.config.js`
- Use proper basePath

### Contact Form Not Working

**Check:**
- Form action URL is correct
- CORS settings (if using external API)
- Check browser console for errors

### Dark Mode Not Persisting

**Check:**
- localStorage is available
- No console errors in ThemeProvider

---

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

## Final Notes

- Keep your dependencies updated: `npm update`
- Monitor your site regularly
- Backup your code
- Consider enabling HTTPS (SSL)
- Submit sitemap to Google Search Console

---

**Congratulations! Your portfolio is now live! 🎉**

Remember to share your portfolio:
- Update LinkedIn profile
- Update GitHub profile
- Share on social media
- Add to your resume
