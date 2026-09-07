#!/usr/bin/env bash
# One command to refresh the dashboard with live ZAO Fund numbers and redeploy.
# Scrapes the fund page (headless), updates app/dashboard/data.ts, rebuilds, deploys to prod.
#
# Usage: bash scripts/refresh.sh
#
# Requires: node, Playwright (see below), and vercel CLI authed as bettercallzaal.
#
# Playwright: NOT a dependency of this repo (it would pull a browser download into a
# Next.js app). refresh-fund.mjs resolves it from, in order: normal node resolution,
# $PLAYWRIGHT_PATH, then ~/Documents/ZAO OS V1/node_modules/playwright. If none
# resolve it aborts with install instructions rather than guessing.
#
# It does NOT use the gstack `browse` binary any more - browse mis-detects a busy
# headless server as dead and silently swaps in a blank page (ZAOOS#3065, three
# instances, root-caused; rule: .claude/rules/liveness-probe-guard.md).
#
# `set -e` plus refresh-fund.mjs's exit-1 guards mean a failed or partial scrape
# stops here and never reaches build or deploy. Review the data.ts diff before it
# deploys if you want - comment out the deploy line.
set -e
cd "$(dirname "$0")/.."

echo "1/3 scraping live numbers + updating data..."
node scripts/refresh-fund.mjs --write

echo "2/3 building..."
npx next build

echo "3/3 deploying to production..."
npx vercel --prod --yes

echo "Done. Live: https://zaoartizen.vercel.app/dashboard"
