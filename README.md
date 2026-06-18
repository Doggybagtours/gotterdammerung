# Götterdämmerung

Official website for **Götterdämmerung** — post-punk industrial archive. Built with [Next.js](https://nextjs.org) 16, React 19, TypeScript, and Tailwind CSS 4.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — fullscreen warehouse hero |
| `/news` | Announcements, updates and releases |
| `/discography` | Albums, EPs, singles, lyrics and artwork |
| `/video` | Music videos, live footage and YouTube embeds |
| `/merch` | Merchandise and external shop links |
| `/band` | Biography, history, members and photos |
| `/contact` | Booking, management and general contact |

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | Run ESLint |

## Deploy to Vercel

This project is ready for [Vercel](https://vercel.com) with zero configuration.

1. Push the repository to GitHub.
2. Import the project in [Vercel Dashboard](https://vercel.com/new).
3. Vercel auto-detects Next.js — no extra settings required.
4. Deploy.

Alternatively, use the Vercel CLI:

```bash
npx vercel
```

### Environment Variables

No environment variables are required for the current placeholder site. Add a `.env.local` file when connecting forms, analytics, or a CMS.

## Deploy to GitHub

```bash
git init
git add .
git commit -m "Initial commit — Götterdämmerung band website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/gotterdammerung.git
git push -u origin main
```

## Project Structure

```
app/              # Next.js App Router pages
components/       # Shared UI components
lib/              # Site config and constants
public/           # Static assets
```

## Customization

- **Site copy & navigation** — edit `lib/site.ts`
- **Colors & typography** — edit `app/globals.css` and `app/layout.tsx`
- **Page content** — edit files in `app/`

Replace placeholder cards and disabled forms with real content, images, and integrations as they become available.

## License

All rights reserved. © Götterdämmerung.
