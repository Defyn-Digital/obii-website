# OBII website

This Astro project hosts two marketing homepage variants for OBII. The root path (`/`) is a simple chooser that links to `/version1` and `/version2`. Copy `.env.example` to `.env` and set `PUBLIC_APP_ROOT_URL` to the OBII web app base URL (no trailing slash); login, sign-up, and trial CTAs use that value to build links to `/login` and `/register`.

You need Node.js **22.23.4 or newer**. Run `npm install`, then `npm run dev` for local development (default `http://localhost:4321`). Use `npm run build` to produce a static site in `dist/`, and `npm run preview` to serve that build locally. See [AGENTS.md](./AGENTS.md) for dev-server background mode notes.

There is no analytics or product instrumentation in this repo: no PostHog, Google Analytics, or similar tags, and no autocapture or custom event tracking. Add those separately if you deploy to production.