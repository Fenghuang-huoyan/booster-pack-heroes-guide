# Booster Pack Heroes Guide

Unofficial English fan guide for [Booster Pack Heroes](https://store.steampowered.com/app/4618570/Booster_Pack_Heroes/) (Steam AppID **4618570**), aimed at **boosterpackheroes.wiki**.

Not affiliated with zup, Funday Games, Valve, or Steam. The site does not sell the game, redeem codes, or recover accounts.

## Build

```bash
npm install
npm run dev      # http://localhost:4329
npm run build
npm run preview  # http://localhost:4329
```

Node 22. The build is a static Astro site (`dist/`). `astro.config.mjs` sets `site` to `https://boosterpackheroes.wiki`.

## Layout

| Layer | Path | Role |
| --- | --- | --- |
| Site config | `sites/booster/site.config.ts` | Domain, Steam AppID, theme, nav |
| Ads | `sites/booster/ads.config.ts` | Adsterra Native Banner for this domain |
| Active site | `sites/active` → `booster` | What the build reads |
| Framework | `framework/` | Layout, SEO, ad slot |
| Content | `content/booster/` | Guide pages and JSON |
| Routes | `src/pages/` | Home, guide slug, 404 |

`analytics.gaId` is empty, so the base layout does not load GA4. The Adsterra Native Banner after Quick Answer is enabled for this domain only. See [ADS.md](ADS.md).

Steam art lives in `public/images/official/steam/` with `ATTRIBUTION.txt`. This repository does not buy a domain, edit DNS, or deploy. Vercel can serve the static `dist/` output.

There is no codes page. The Steam store page and the announcements checked on 6 Nov 2026 do not describe a redeem-code program.
