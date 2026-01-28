# TheLab Blog Portfolio

A modern, responsive blog portfolio built with Next.js, React, TypeScript, and Tailwind CSS. Features articles on crisis management, AI in healthcare, and environmental solutions.

## Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Bilingual Content**: Support for French and English articles
- **Fast Performance**: Built with Next.js for optimal performance
- **Easy Deployment**: Configured for seamless deployment on Vercel

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
│   │   ├── articles/           # Articles page and individual article routes
│   │   │   ├── [slug]/         # Dynamic article pages
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx        # Articles listing page
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
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

## License

© 2024 TheLab Blog. All rights reserved.

## Support

For issues or questions, please open an issue on GitHub or contact the site administrator.
