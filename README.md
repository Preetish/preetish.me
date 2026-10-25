# preetish.me

A modern, minimalist, editorial personal portfolio and thought leadership hub for **Preetish Panda** — Full-Stack Marketer & Growth Leader (Director of Growth at Passage, ex-Director of Marketing at Bettermode).

Built with **Next.js 16 (App Router)**, **TypeScript**, **Turbopack**, and vanilla CSS design tokens.

---

## ✨ Features

- **Soothing & Minimalist Aesthetics**: Refined editorial typography combining *Newsreader* serif with *Plus Jakarta Sans* geometric sans-serif.
- **Flawless Light & Dark Modes**: Zero-hydration-shift theme toggling powered by CSS custom properties and localized storage persistence.
- **Interactive Command Palette (`⌘K`)**: Fast keyboard navigation across sections, external links (LinkedIn, X/Twitter, Substack, GitHub), and theme switching.
- **Chronological Career Timeline with Filter Pills**: Filter across *Growth*, *Leadership*, *Product*, and *Engineering* roles (Passage, Bettermode, PromptCloud, TeamWave, Infosys, Oracle) with authentic brand marks and dark-mode contrast protection.
- **Philosophy & Growth Log Spotlight**: Interactive principle tabs highlighting systems thinking, qualitative/quantitative balancing, and Preetish's Substack newsletter [Growth Log](https://growthlog.substack.com).
- **Privacy-First Contact Section**: Secure contact form with client-side validation and dedicated `/api/contact` route, paired with direct LinkedIn messaging.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack, Partial Prerendering / Cache Components)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: Vanilla CSS Design System with CSS Custom Properties (CSS variables)
- **Icons**: Custom SVG components + [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Preetish/preetish.me.git
cd preetish.me
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
npm run start
```

---

## 🌐 Deploying to Vercel

### Option A: Via Vercel Dashboard (Recommended)
1. Go to [vercel.com/new](https://vercel.com/new).
2. Import the GitHub repository: **`Preetish/preetish.me`**.
3. Keep default settings (Framework preset: Next.js) and click **Deploy**.
4. Under **Settings → Domains**, add `preetish.me`.

### Option B: Via Vercel CLI
```bash
npx vercel login
npx vercel
npx vercel --prod
```

---

## 📄 License

MIT © [Preetish Panda](https://github.com/Preetish)
