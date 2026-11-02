# Capitol Properties — Deployment Notes

**Lovable project URL:** TBD
**Demo tier:** Starter ($1,500)
**Style:** Warm Professional × Cream-Navy
**Niche:** Property Management (Real Estate)
**Lead ID:** b5d45579-18ec-4b98-a944-cf93bf859991

## Deploy to Cloudflare Workers

```bash
cd "Demos/Business-Commerce/Capitol Properties/Demo 1"
npm install
npm run build
npx wrangler deploy
```

Wrangler config is at `wrangler.jsonc`. Worker name: `capitol-properties-demo`.

## GA4 Placeholder

Swap `G-XXXXXXXXXX` in `index.html` with the client's GA4 Measurement ID after they sign.

## Form Wiring

Contact form currently uses client-side state only. After client signs:
1. Point form `action` to Cloudflare Worker endpoint
2. Set destination email in Worker environment variable
3. Test submission flow end-to-end

## Pre-Launch Checklist

- [ ] Swap placeholder phone (808) 555-0132 with real number
- [ ] Swap placeholder email with real email
- [ ] Connect GA4 with real Measurement ID
- [ ] Wire contact form to Cloudflare Worker
- [ ] Connect Calendly or booking widget on Contact page
- [ ] Upload real team photos if client provides them
- [ ] Verify custom domain DNS (if applicable)
- [ ] Remove `-demo` suffix from Worker name

## When the client says yes

If this lead converts and wants to move forward with this site as their production build:

1. Run `/demo-to-client capitol-properties` — NOT `/build-client`
2. Have the Lovable project URL ready (it's at the top of this file)
3. `/demo-to-client` will preserve the approved design and swap in real content

Do NOT rebuild from scratch. The client approved this design — honor it.
