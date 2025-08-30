# Youssef Bassiem - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing projects, skills, and professional experience.

## Features

- 🌓 Dark/Light mode toggle with system preference detection
- 📱 Fully responsive design
- ✨ Smooth scroll animations and hover effects
- 🎨 Modern UI with shadcn/ui components
- 🚀 Optimized performance with Next.js 15
- 📊 Built-in analytics with Vercel Analytics

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Fonts:** Geist Sans & Geist Mono
- **Theme:** next-themes for dark/light mode
- **Analytics:** Vercel Analytics

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/Youssef-Bassiem/portfolio.git
cd portfolio
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

## Project Structure

\`\`\`
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main portfolio page
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── theme-provider.tsx   # Theme context provider
│   ├── theme-toggle.tsx     # Dark/light mode toggle
│   ├── scroll-animation.tsx # Scroll-triggered animations
│   ├── project-card.tsx     # Project showcase cards
│   └── skill-icon.tsx       # Skill badges with icons
├── lib/
│   └── utils.ts             # Utility functions
└── public/                  # Static assets
\`\`\`

## Customization

### Personal Information
Update the personal details in `app/page.tsx`:
- Name, title, and contact information
- Social media links
- Projects data
- Skills and technologies
- Experience and education

### Styling
- Modify `app/globals.css` for global styles
- Update Tailwind configuration in `app/globals.css`
- Customize component styles in individual component files

### Content
- Add your own projects with demo and GitHub links
- Update skills with relevant technologies
- Modify experience and education sections
- Replace placeholder links with actual URLs

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Performance

- Lighthouse Score: 100/100 (Performance, Accessibility, Best Practices, SEO)
- Optimized images and fonts
- Minimal JavaScript bundle
- Server-side rendering with Next.js

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Youssef Bassiem - [youssef.bassiem@gmail.com](mailto:youssef.bassiem@gmail.com)

Project Link: [https://github.com/Youssef-Bassiem/portfolio](https://github.com/Youssef-Bassiem/portfolio)
