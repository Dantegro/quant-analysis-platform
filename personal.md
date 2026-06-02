For now, this project is mainly for personal use. Not even necessarily targeted for public use. Project is a simple locally hosted dashboard to guide and help with the analysis of my secondary full-time activity as a futures day trader (using price action analysis like ICT concepts and macroeconomics analysis as current strategy). In the near future, as I continue to add more features, it will slowly turn into an open source project for other traders and general public to use and contribute to, and become a platform for quantitative analysis of futures trading.



First task:

- create a simple macroeconomics calendar page with a list of macroeconomic events and a way to filter them by country, event type, or date.
- add AI commentary and analysis to the macroeconomics calendar page.
- create a simple journal page with a list of journal entries and a way to add new journal entries.
- create a simple notes page with a list of notes and a way to add new notes.



draft specs for the macroeconomics calendar page from chatgpt conversation:


"
Core MVP:

Event types
FOMC rate decision
FOMC minutes
Fed Chair Powell speeches
CPI
PPI
NFP / unemployment
maybe JOLTS later
Dashboard fields
Event name
Date/time in UK time
Importance
Expected market risk: low / medium / high / no-trade
Your personal rule: e.g. “No trades 30 min before/after”
Actual / forecast / previous, optional later
Data source options
Manual entry first: simplest, fastest, most reliable for your current stage.
Later: pull from APIs or scrape official calendars if allowed.
Best hybrid: manually curate only the events you actually trade around.
Tech stack
Next.js
Supabase/Postgres
Tailwind/shadcn
Deployed on Vercel or self-hosted on DigitalOcean
Optional cron job to remind you before events

The blunt answer: don’t overbuild this. You do not need live actual/forecast numbers at first. Your real edge is not recreating Investing.com. It is having a clean personal filter:

“What events matter to my trading model today, and what rule do I follow?”

Good MVP table:

Today:
15:00 UK | JOLTS Job Openings | Medium risk | Avoid trading 10 min before/after

This week:
Wed 13:30 | CPI | High risk | No trades before release, wait 30–60 min after
Fri 13:30 | NFP | High risk | No trades before release, wait for post-news structure

Build it manually first. If you still use it after 2–3 weeks, automate data ingestion later."
