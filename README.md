# Muhammad Abdullahi Ali (MD) - Portfolio Website

A professional, developer-focused portfolio website built with Next.js, showcasing my software engineering experience, skills, and projects.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwind-css)

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Dark/Light Mode**: Seamless theme switching with localStorage persistence
- **Responsive Design**: Mobile-first approach, looks great on all devices
- **SEO Optimized**: Meta tags, OpenGraph, JSON-LD structured data, sitemap
- **Performance Focused**: Optimized images, lazy loading, and code splitting
- **Markdown Blog**: Project case studies written in Markdown
- **Smooth Animations**: Framer Motion for elegant transitions
- **Contact Form**: Functional contact form ready for Formspree/Netlify integration

## 📁 Project Structure

```
mdp/
├── app/
│   ├── about/              # About page
│   ├── contact/            # Contact page with form
│   ├── projects/           # Projects listing
│   │   └── [slug]/         # Dynamic project case studies
│   ├── skills/             # Skills showcase
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   └── sitemap.ts          # Dynamic sitemap generation
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx            # Hero section
│   ├── FeaturedProjects.tsx
│   ├── Experience.tsx      # Timeline experience
│   ├── CTA.tsx             # Call-to-action section
│   └── ThemeProvider.tsx   # Dark mode context
├── data/
│   └── projects/           # Markdown project case studies
│       ├── company-web-management.md
│       ├── multi-site-management.md
│       └── hr-analytics-dashboard.md
├── lib/
│   └── projects.ts         # Project data utilities
├── public/
│   ├── resume.pdf          # Downloadable resume
│   └── robots.txt          # SEO robots file
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   cd mdp
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ✏️ Editing Content

### Personal Information

Edit the following files to update personal information:

**`app/layout.tsx`** - Update metadata, SEO tags, and JSON-LD schema
```typescript
export const metadata: Metadata = {
  title: 'Your Name - Software Engineer',
  description: 'Your description here',
  // ...
}
```

**`components/Hero.tsx`** - Update name, tagline, and introduction
**`components/Footer.tsx`** - Update social links and contact info
**`app/about/page.tsx`** - Update about content

### Skills

Edit **`app/skills/page.tsx`** to modify skill categories and proficiency levels:

```typescript
const skillCategories: SkillCategory[] = [
  {
    title: 'Backend Development',
    skills: [
      { name: 'Laravel (PHP)', level: 'Advanced' },
      // Add or modify skills
    ],
  },
  // ...
]
```

### Projects

#### Adding a New Project

1. Create a new markdown file in `data/projects/`:
   ```bash
   data/projects/my-new-project.md
   ```

2. Use this frontmatter template:
   ```markdown
   ---
   title: "Project Title"
   description: "Short description"
   date: "2024-01-15"
   tags: ["Laravel", "React", "MySQL"]
   featured: true
   ---

   ## Overview
   Your project content here...
   ```

3. The project will automatically appear on the projects page

#### Editing Existing Projects

Edit markdown files in `data/projects/` - changes are reflected immediately.

### Experience

Edit **`components/Experience.tsx`** to update work experience:

```typescript
const experiences = [
  {
    title: 'Software Engineer',
    period: '2023 – Present',
    description: 'Your description',
    highlights: [
      'Achievement 1',
      'Achievement 2',
    ],
  },
  // ...
]
```

### Contact Information

Edit **`app/contact/page.tsx`** and **`components/Footer.tsx`**:

- Email address
- GitHub profile URL
- LinkedIn profile URL

### Resume

Replace **`public/resume.pdf`** with your actual PDF resume.

## 🎨 Customization

### Colors

Edit **`tailwind.config.ts`** to change the color scheme:

```typescript
colors: {
  primary: {
    500: '#3b82f6', // Change to your brand color
    // ...
  },
}
```

### Fonts

Fonts are configured in **`app/layout.tsx`**:

```typescript
const dmSans = DM_Sans({ ... })  // Headings
const roboto = Roboto({ ... })   // Body text
```

Replace with your preferred Google Fonts.

### Theme

The dark mode toggle is in **`components/Header.tsx`** and managed by **`components/ThemeProvider.tsx`**.

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel auto-detects Next.js and deploys

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `out`

### Deploy to GitHub Pages

1. Update **`next.config.js`**:
   ```javascript
   const nextConfig = {
     output: 'export',
     basePath: '/your-repo-name',
     images: { unoptimized: true },
   }
   ```

2. Build and export:
   ```bash
   npm run build
   ```

3. Deploy the `out` folder to GitHub Pages

## 📱 SEO Optimization

The site includes comprehensive SEO features:

- **Meta Tags**: Title, description, keywords
- **OpenGraph Tags**: For social media sharing
- **Twitter Cards**: Optimized Twitter sharing
- **JSON-LD**: Structured data for search engines
- **Sitemap**: Auto-generated at `/sitemap.xml`
- **Robots.txt**: Search engine crawling instructions

Update base URL in **`app/sitemap.ts`**:

```typescript
const baseUrl = 'https://your-domain.com'
```

## 🧪 Testing

### Build Test

```bash
npm run build
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to test production build.

### Lint

```bash
npm run lint
```

## 📝 Content Guidelines

When editing content:

- **Be concise**: Keep paragraphs short and scannable
- **Use action verbs**: Built, Designed, Optimized, Developed
- **Show results**: Include metrics and outcomes
- **Stay professional**: Maintain a technical, credible tone
- **Proofread**: Check for typos and grammar

## 🤝 Contact Form Setup

The contact form is ready for integration with:

### Formspree

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your endpoint
3. Update **`app/contact/page.tsx`**:
   ```typescript
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Netlify Forms

1. Add `data-netlify="true"` to the form:
   ```tsx
   <form data-netlify="true" onSubmit={handleSubmit}>
   ```

2. Deploy to Netlify - forms work automatically

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Muhammad Abdullahi Ali (MD)**  
Software Engineer

- Email: hello@example.com
- GitHub: [@mdali](https://github.com/mdali)
- LinkedIn: [Muhammad Abdullahi Ali](https://linkedin.com/in/mdali)

---

Built with ❤️ using Next.js and Tailwind CSS
# portfolio
