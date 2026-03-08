# TheLab - ResilienceAI Platform

The official website for TheLab, showcasing ResilienceAI - an AI-powered crisis management and disaster recovery platform designed for small islands, coastal territories, and fragile states. Built with Next.js, React, TypeScript, and Tailwind CSS.

## About TheLab

TheLab is an AI-powered crisis management and disaster recovery platform founded in 2024. Our flagship product, **ResilienceAI**, combines:

- Real-time data streaming
- Satellite damage assessment (Sentinel-2)
- Geospatial intelligence (OpenStreetMap, Google Earth Engine)
- Multi-LLM agentic reasoning (Mistral + Claude)
- Predictive analytics (ECMWF climate forecasts)

**Impact**: 30-50% faster recovery time, 20-40% cost reduction, 100% GDPR compliant.

**Founder**: Sarah LE NET

## Website Features

- **ResilienceAI Product Page**: Comprehensive showcase of our flagship platform
- **About Page**: Company information, mission, team, and differentiators
- **Service Pages**: The Lab AI and The Lab Data offerings
- **Articles/Blog**: Crisis management insights and case studies
- **Contact Form**: Business inquiries and demo requests
- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Rich metadata for search engine discoverability
- **Fast Performance**: Built with Next.js 14 for optimal performance
- **Easy Deployment**: Configured for Vercel, Netlify, or static hosting

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Navigate to the project directory:

```bash
cd blog-portfolio
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
blog-portfolio/
├── src/
│   ├── app/                    # Next.js app router pages
│   │   ├── resilience-ai/      # ResilienceAI product page (flagship)
│   │   ├── about/              # About TheLab & team page
│   │   ├── lab-ai/             # The Lab AI services page
│   │   ├── lab-data/           # The Lab Data services page
│   │   ├── articles/           # Articles listing and individual articles
│   │   │   ├── [slug]/         # Dynamic article pages
│   │   │   └── page.tsx
│   │   ├── contact/            # Contact form page
│   │   ├── layout.tsx          # Root layout with SEO metadata
│   │   ├── page.tsx            # Home page (ResilienceAI focus)
│   │   └── globals.css         # Global styles
│   └── components/             # Reusable components
│       └── Navigation.tsx      # Navigation component
├── public/                     # Static assets
│   └── articles/               # HTML article files
├── next.config.js              # Next.js configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## Deploying to Vercel

Vercel is the recommended platform for deploying this Next.js application.

### Step 1: Push to GitHub

First, push your code to a GitHub repository:

```bash
# Make sure you're in the blog-portfolio directory
cd blog-portfolio

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

#### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Sign up for Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Import your project**:
   - Click "Add New Project" in your Vercel dashboard
   - Import your GitHub repository
   - Vercel will automatically detect Next.js settings

3. **Configure and Deploy**:
   - Project Name: Choose a name (e.g., "thelab-blog")
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: ./
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `out` (auto-filled)
   - Click "Deploy"

4. **Done!** Your site will be live at `https://your-project-name.vercel.app`

#### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   cd blog-portfolio
   vercel
   ```

4. Follow the prompts:
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project's name? **thelab-blog** (or your choice)
   - In which directory is your code located? **.**
   - Want to override the settings? **N**

5. For production deployment:
   ```bash
   vercel --prod
   ```

### Custom Domain

To add a custom domain:

1. Go to your project settings on Vercel
2. Navigate to the "Domains" tab
3. Add your custom domain
4. Update your DNS settings as instructed by Vercel

## Adding Articles

To add new articles:

1. Place HTML article files in the `public/articles` directory
2. Follow the naming convention: `ArticleName_(French_Version).html` or `ArticleName_(English_Version).html`
3. Update the article list in:
   - [src/app/articles/page.tsx](src/app/articles/page.tsx#L6-L44) (articles array)
   - [src/app/articles/[slug]/page.tsx](src/app/articles/[slug]/page.tsx#L8-L18) (articleMap object)

## Environment Variables

This project doesn't require any environment variables for basic functionality. If you add external services (analytics, CMS, etc.), create a `.env.local` file:

```bash
# Example
NEXT_PUBLIC_ANALYTICS_ID=your_id_here
```

## Building for Production

To create a production build:

```bash
npm run build
```

This creates an optimized production build in the `out` directory, which can be deployed to any static hosting service.

## Alternative Deployment Options

### Netlify

1. Sign up at [netlify.com](https://netlify.com)
2. Connect your Git repository
3. Build command: `npm run build`
4. Publish directory: `out`
5. Deploy

### Static Export to Any Host

The app is configured for static export. After running `npm run build`, you can deploy the `out` directory to:
- AWS S3 + CloudFront
- GitHub Pages
- Firebase Hosting
- Any static hosting service

## Troubleshooting

### Build Errors

If you encounter build errors:

1. Delete `node_modules` and `.next`:
   ```bash
   rm -rf node_modules .next
   ```

2. Reinstall dependencies:
   ```bash
   npm install
   ```

3. Try building again:
   ```bash
   npm run build
   ```

### Articles Not Loading

Make sure:
- Article HTML files are in `public/articles/`
- File names match exactly in the article mapping
- File names follow the naming convention

## Business Model

TheLab offers three deployment options:

1. **SaaS Subscription**: Cloud-based access with automatic updates
2. **On-Premise License**: Deploy within your own infrastructure (most popular)
3. **Custom Development**: Tailored solutions with white-label options

Target customers: Governments, NGOs, municipalities, international organizations in small islands, coastal territories, and fragile states.

## Contact

**Founder & CEO**: Sarah LE NET
**Email**: sarah@thelabaidata.com
**Website**: https://thelabaidata.com

## Compliance & Legal

- **GDPR Compliant**: European data sovereignty, full auditability
- **EU AI Act Ready**: Transparency and decision traceability
- **Founded**: 2024
- **Headquarters**: European Union

## License

© 2024 TheLab. All rights reserved.

## Support

For business inquiries, demo requests, or partnership opportunities:
- Visit our [Contact Page](https://thelabaidata.com/contact)
- Email: sarah@thelabaidata.com
- GitHub Issues: For technical issues only
