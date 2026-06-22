#!/usr/bin/env bash
# One command to refresh the dashboard with live ZAO Fund numbers and redeploy.
# Scrapes the fund page (headless), updates app/dashboard/data.ts, rebuilds, deploys to prod.
#
# Usage: bash scripts/refresh.sh
#
# Requires: node, the gstack `browse` binary (~/.claude/skills/gstack/browse), and vercel CLI
# authed as bettercallzaal. Review the data.ts diff before it deploys if you want - comment out
# the deploy line.
set -e
cd "$(dirname "$0")/.."

echo "1/3 scraping live numbers + updating data..."
node scripts/refresh-fund.mjs --write

echo "2/3 building..."
npx next build

echo "3/3 deploying to production..."
npx vercel --prod --yes

echo "Done. Live: https://zaoartizen.vercel.app/dashboard"
