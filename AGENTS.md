# Quant Analysis Platform — Agent Guide

Personal, locally hosted dashboard for futures day-trading analysis. Not aimed at public production use unless scope changes.

## Purpose

Support a secondary full-time trading workflow using:

- **Price action** (ICT-style concepts: structure, liquidity, sessions, etc.)
- **Macro context** (economics, calendars, headline-driven bias)

The app is a decision-support UI, not an execution or brokerage system. Do not add order placement, account linking, or live trading automation unless explicitly requested.

## Current priority

**News feed (first feature):** A page listing news articles with filters for **source**, **topic**, and **date**. Prefer a simple, readable list UI over complex layouts until filtering works end-to-end.

Broader roadmap (not started): session markers, economic calendar, journal/notes, chart overlays — only when asked.

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router) |
| UI | React 19, Tailwind CSS v4 |
| Language | TypeScript (strict) |
| Package manager | **pnpm** (`pnpm dev`, `pnpm build`, `pnpm lint`) |

Entry: `app/` (routes, layouts, global styles). Static assets: `public/`.

## Commands

```bash
pnpm dev    # http://localhost:3000
pnpm build
pnpm lint
```

Run `pnpm lint` after non-trivial UI or TypeScript changes.

## Implementation conventions

- **Minimize scope** — Smallest change that meets the request. No drive-by refactors.
- **App Router** — Server Components by default; add `"use client"` only for interactivity (filters, forms, client state).
- **Styling** — Tailwind utilities; match existing zinc/dark patterns in `app/globals.css` and `app/page.tsx`.
- **Data** — Start with static fixtures or local JSON; add APIs/env only when needed. Never commit secrets (`.env*` is gitignored).
- **Types** — Explicit types for article/news models (source, topic, publishedAt, title, url, summary).
- **Tests** — Add only when asked or when covering non-obvious behavior; avoid trivial snapshot-only tests.

## Domain language (use consistently)

| Term | Meaning |
|------|---------|
| Source | Publisher or feed (e.g. Reuters, ForexFactory, custom RSS) |
| Topic | Tag or category (macro, rates, equities, geopolitics, etc.) |
| Session | Trading session context (Asia, London, NY) when relevant later |

Use trader-facing labels in the UI; keep internal names stable in types and filters.

## File layout (grow incrementally)

```
app/
  page.tsx           # Home / hub (replace starter template over time)
  news/              # News feed route (when added)
  components/        # Shared UI (filters, article row, etc.)
lib/                 # Types, mock data, fetch helpers (when added)
```

Prefer colocating feature-specific components under the feature route until reuse is clear.

## Personal notes

Owner context and one-off task notes may live in `personal.md` at the repo root. Treat it as reference, not a spec — prefer this file and explicit user messages for agent behavior.

## Out of scope unless requested

- Auth, multi-tenant SaaS, billing
- Deploy hardening beyond local dev
- Financial advice copy; UI is tooling for the owner’s own process
- Replacing or duplicating a full terminal/charting platform

## When unsure

Ask one focused question (data source for news, filter UX, timezone for dates) rather than building speculative integrations.
