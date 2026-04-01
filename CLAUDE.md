# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

The public-facing marketing website for ShopGrid — a Next.js 15 App Router site with landing, features, pricing, blog, and contact pages. Fully internationalized (en, ru, uz) using dynamic `[lang]` route segments.

## Commands

```bash
yarn dev          # Next.js dev server with Turbopack (localhost:3000)
yarn build        # Production build
yarn lint         # ESLint
yarn po           # Extract + compile Lingui translations (run after adding user-facing text)
yarn po:dev       # Extract only (lingui extract --clean)
yarn po:build     # Compile only (lingui compile)
```

## Architecture

### Route Structure

All pages live under `src/app/[lang]/` — the `[lang]` segment is the locale (`en`, `ru`, `uz`). Middleware (`src/middleware.ts`) detects the browser's preferred language via `negotiator` and redirects to the correct prefix. `generateStaticParams()` in the root layout pre-builds all locale variants at build time.

```
src/
├── app/
│   ├── [lang]/
│   │   ├── layout.tsx               # Root layout: html > body > LinguiClientProvider > Nav + {children} + Footer
│   │   ├── page.tsx                 # Landing page
│   │   ├── LinguiClientProvider.tsx # Client-side Lingui hydration
│   │   ├── components/              # Navigation, Footer, LanguageSwitcher, FloatingTelegramButton
│   │   ├── blog/page.tsx            # Blog listing
│   │   ├── blog/[id]/page.tsx       # Blog post detail
│   │   ├── contact/page.tsx
│   │   ├── features/page.tsx
│   │   └── pricing/page.tsx
│   ├── appRouterI18n.ts             # Pre-loads all locale message catalogs at build time
│   ├── initLingui.ts                # Activates locale context in Server Components
│   └── globals.css                  # Global Tailwind styles + custom animations
├── data/blogPosts.ts                # Static blog content (no database)
├── middleware.ts                    # Locale detection + redirect
└── locales/{en,ru,uz}.{po,js,mo}   # Lingui catalogs (po = source, js = runtime)
```

### i18n Pattern

**Server Components** call `initLingui(lang)` then use `i18n._("text")`.  
**Client Components** receive locale via `LinguiClientProvider` and use `<Trans>` or the `t` macro from `useLingui()`.

After modifying any user-facing text, run `yarn po` to extract strings and recompile catalogs. Compiled `.js` files (not `.po`) are what Next.js loads at runtime.

### Rendering

Primarily SSG via `generateStaticParams`. Server Components by default — `"use client"` only for interactivity (Navigation, LinguiClientProvider, LanguageSwitcher).

Every page exports `generateMetadata()` with localized title, description, and OpenGraph tags.

## Rules

- All internal links must include the `/{lang}/` prefix
- All user-facing text must use Lingui — never hardcode strings
- Use `next/navigation` (not `next/router`) for App Router hooks
- Use `next/link` and `next/image` for navigation and images
- Tailwind only — no inline `<style>` tags
- Default to Server Components; add `"use client"` only when needed
