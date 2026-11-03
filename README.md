# Business Analysis School

The public marketing and lead-generation website for Business Analysis School.
Course delivery, booking, payments, and CRM automation are provided by external
services; this repository does not implement a learner platform.

## Requirements

- Node.js 22.6 or newer
- npm 10.9.9

Use the npm lockfile and npm commands for installs and scripts:

```bash
npm ci
npm run dev
```

Copy `.env.example` to `.env.local` for local configuration. Do not commit
`.env.local` or place server-only values in `NEXT_PUBLIC_` variables.

## Validation

```bash
npm run lint
npm run typecheck
npm test
npm audit --audit-level=high
npm run build
```

The CI workflow runs these checks on pushes and pull requests. The lead
validation tests are isolated and do not send data to GoHighLevel.

## Environment variables

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical HTTPS site origin used for metadata, sitemap, and sharing URLs. |
| `GHL_WEBHOOK_URL` | Server-only GHL webhook destination. The legacy endpoint remains a temporary fallback until a rotated URL is configured. |
| `NEXT_PUBLIC_MASTERCLASS_EMBED_URL` | Approved HTTPS embed URL for the masterclass. |
| `NEXT_PUBLIC_CAREER_CONSULTATION_30_URL` | Approved booking/checkout URL for the 30-minute consultation. |
| `NEXT_PUBLIC_CAREER_CONSULTATION_60_URL` | Approved booking/checkout URL for the 60-minute consultation. |

Do not submit test leads to the live CRM without authorization. Confirm the
provider received a test submission and verify the corresponding workflow
execution in GHL before declaring the integration operational.

## Deployment and rollback

1. Configure reviewed environment values in the deployment platform.
2. Require CI checks to pass before deployment; test conversion flows in an
   approved staging environment first.
3. After deployment, verify site routes and form success/failure behavior, then
   have an authorized owner confirm CRM receipt and workflow execution.
4. Monitor deployment logs and provider workflow history for failures. Avoid
   logging form contents or personal information.
5. If a release breaks a critical journey, redeploy the last known-good build
   using the deployment platform's established rollback process, then verify the
   restored routes and form behavior.

The deployment platform, staging environment, alerting configuration, and
rollback controls are not defined in this repository and must be confirmed by
the site owner.
