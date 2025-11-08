# Quick Start Guide

Get your portfolio up and running in 5 minutes!

## 🚀 Setup (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## ✏️ Personalize (10 minutes)

### Essential Updates

**1. Replace Placeholder Email**

Search and replace `hello@example.com` with your real email in:
- `app/contact/page.tsx`
- `components/Footer.tsx`
- `CONTENT.md`

**2. Update Social Links**

Edit these files with your GitHub/LinkedIn URLs:
- `components/Footer.tsx`
- `app/contact/page.tsx`
- `app/layout.tsx` (JSON-LD schema)

**3. Add Your Resume**

Replace `public/resume.pdf` with your actual PDF resume.

**4. Update Personal Info**

Edit `CONTENT.md` to change:
- Name and tagline
- About section text
- Work experience
- Skills

---

## 📝 Content Editing

### Quick Text Changes

Edit `CONTENT.md` - then copy changes to respective component files.

### Add a New Project

1. Create: `data/projects/my-project.md`
2. Add frontmatter:
   ```markdown
   ---
   title: "My Project"
   description: "Brief description"
   date: "2024-01-15"
   tags: ["Tag1", "Tag2"]
   featured: true
   ---
   
   ## Overview
   Your content...
   ```
3. Save - it appears automatically!

### Update Skills

Edit: `app/skills/page.tsx`

Find `skillCategories` array and modify.

### Update Experience

Edit: `components/Experience.tsx`

Find `experiences` array and modify.

---

## 🎨 Customize Look

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    500: '#YOUR_COLOR',
  },
}
```

### Change Fonts

Edit `app/layout.tsx` - replace Google Font imports.

---

## 🚢 Deploy (5 minutes)

### Option 1: Vercel (Easiest)

1. Push code to GitHub
2. Sign up at [vercel.com](https://vercel.com)
3. Import repository
4. Click Deploy ✅

### Option 2: Netlify

1. Push code to GitHub
2. Sign up at [netlify.com](https://netlify.com)
3. Import repository
4. Deploy ✅

**Full deployment guide:** See `DEPLOYMENT.md`

---

## 🧪 Test Before Deploy

```bash
# Build for production
npm run build

# Test production build
npm start
```

---

## 📱 Contact Form

### Using Formspree

1. Sign up: [formspree.io](https://formspree.io)
2. Get form ID
3. Update `app/contact/page.tsx`:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_ID', {
     method: 'POST',
     body: JSON.stringify(formData),
   })
   ```

### Using Netlify Forms

Just deploy to Netlify - forms work automatically!

---

## ✅ Pre-Launch Checklist

- [ ] Updated all placeholder emails
- [ ] Added real social links
- [ ] Replaced resume PDF
- [ ] Tested all pages
- [ ] Checked mobile responsiveness
- [ ] Dark mode works
- [ ] Build completes without errors

---

## 🆘 Common Issues

### TypeScript Errors

```bash
npm run lint
```

Fix any errors shown.

### Build Fails

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images Not Showing

For GitHub Pages, ensure `next.config.js` has:
```javascript
images: { unoptimized: true }
```

---

## 📚 Full Documentation

- **README.md** - Complete setup guide
- **DEPLOYMENT.md** - Deployment options
- **CONTENT.md** - All text content

---

## 🎉 You're Ready!

Your portfolio is set up. Now customize it and deploy!

**Need help?** Check the full README.md for detailed instructions.
