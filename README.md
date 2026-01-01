# Student B Press - Next.js Version

This is the Next.js version of the Student B Press homepage.

## Getting Started

First, install the dependencies:

```bash
npm install


Then, run the development server:

```bash
npm run dev


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/                  # Next.js App Router pages
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── about/           # About page
│   ├── contact/         # Contact page
│   ├── api/             # API routes
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroCarousel.tsx
│   ├── BookSection.tsx
│   ├── NewsletterSection.tsx
│   └── ReaderSection.tsx
└── public/              # Static files
    └── data/           # JSON data files
```

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Server and Client Components** for optimal performance
- **Responsive Design** - works on all devices
- **Modern React** patterns with hooks

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This project can be deployed on Vercel, Netlify, or any other platform that supports Next.js.

```bash
npm run build
```

The `out` folder will contain the static export if you configure Next.js for static export.

## Notes

- Data files are in `/public/data/` and can be accessed via `/data/` in the browser
- Contact form uses Next.js API routes (see `/app/api/contact/route.ts`)
- All styling is in `app/globals.css`
- Font Awesome icons are loaded via CDN in the layout

## Next.js로 코딩하고
## npm (node.js 설치하고) npm run dev로 확인
## Git hub에 푸쉬(.git 위치가 문제됨)
## vercel에서 배포포

