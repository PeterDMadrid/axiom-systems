# Axiom Systems

Marketing / inquiry site for Axiom Systems, a web development services
company. Next.js 16 (App Router, Turbopack), React 19, TypeScript,
Tailwind CSS v4. No database, no CMS — content lives in one config file.

## Stack

- **Next.js 16.2 LTS** — App Router, Turbopack (default bundler, no flag needed)
- **React 19**
- **Tailwind CSS v4** — CSS-first config via `@theme`, no `tailwind.config.js`
- **TypeScript**, strict mode

Versions confirmed current as of July 2026. Next.js 16 dropped `next lint`
(use Biome or ESLint directly if you want linting) and removed AMP support;
neither is used here.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. First run generates `next-env.d.ts` and
downloads the Google Fonts used (Space Grotesk, Inter, IBM Plex Mono) —
that requires network access to fonts.googleapis.com at build time.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run typecheck
```

## Reconfiguring the site

Everything you'd change per client or per update lives in one file:

```
src/config/site.config.ts
```

Nav links, hero copy, services, the "axiom" principles, the process
timeline, and contact form options are all read from there — page and
section components don't need to change. Edit the object, save, done.

Field shapes are typed in `src/types/site.ts`, so TypeScript will flag
anything you leave out.

## Contact form

`src/components/sections/Contact.tsx` posts to `src/app/api/contact/route.ts`.
The route validates the payload and currently just logs it server-side —
it has no dependency on an email provider so the project stays install-light
by default. To actually deliver submissions, pick one:

- **Resend** (matches the `.env.example` stub, and the pattern used on the
  Margallo LMS project): install `resend`, set `RESEND_API_KEY`, uncomment
  the example block in `route.ts`.
- Any other provider (SMTP, SES, a CRM webhook) — same file, same spot.

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # fonts, metadata, <html>/<body>
│   ├── page.tsx             # assembles sections in order
│   ├── globals.css          # Tailwind v4 theme tokens + brand utilities
│   └── api/contact/route.ts # inquiry form handler
├── components/
│   ├── layout/               # Header, Footer
│   ├── sections/              # Hero, About, Services, Principles, Process, Contact
│   └── ui/                    # Container, Button, Eyebrow — small primitives
├── config/
│   └── site.config.ts       # <- edit this to reconfigure the site
├── lib/
│   └── utils.ts              # cn() classname helper
└── types/
    └── site.ts               # SiteConfig type used by site.config.ts
```

## Design

Almost-white canvas (`#ffffff`) with a light cyan accent (Tailwind's
default `cyan` scale) and a near-black ink color for text. The recurring
signature motif is a faint blueprint-style grid behind the hero, and
numbered "AXIOM 0N" principle cards — both a nod to the name (an axiom is
a foundational, self-evident statement) rather than decoration. Fonts:
Space Grotesk (display), Inter (body), IBM Plex Mono (labels/numbers),
loaded via `next/font/google` (self-hosted at build, no runtime requests).
