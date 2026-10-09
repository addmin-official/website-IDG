# 🚀 IDG Enterprise Deployment Guide

**Target System:** Iraq Digital Gateway (IDG) Sovereign Corporate Web System  
**Environment:** Production / Enterprise Sovereign Infrastructure  
**Version:** Next.js 15.5.27 (App Router)

---

## 1. Environment Configuration

The application requires the following environment variables defined in production:

```env
# 1. Primary PostgreSQL Connection String for Prisma ORM
DATABASE_URL="postgresql://idg_prod_user:SECRET_PASSWORD@postgres.internal.idg.iq:5432/idg_db?schema=public&sslmode=require"

# 2. Hostname / Base URL of the Gateway
APP_URL="https://idg.iq"

# 3. Gemini AI API Key (for server-side document & NLP processing)
GEMINI_API_KEY="YOUR_PRODUCTION_GEMINI_API_KEY"

# 4. Node Environment
NODE_ENV="production"
```

---

## 2. Database Setup (Prisma)

Set `DATABASE_URL` in `.env.local` (or production environment secrets):
```env
DATABASE_URL="postgresql://user:password@host:5432/idg_db?schema=public"
```

### Run migrations:
```bash
# In production:
npx prisma migrate deploy

# In development:
npx prisma migrate dev
```

### Generate Prisma client:
```bash
npx prisma generate
```

> **Note:** If `DATABASE_URL` is not set, forms will still work but data will not be persisted (graceful fallback).

---

## 3. Recommended Hosting Platforms

Depending on institutional compliance tiers, three deployment models are certified:

### Option A: Google Cloud Run (Recommended for Global / High Availability)
* **Container:** Automated Next.js Standalone Docker container.
* **Region:** `me-central1` (Doha) or `me-west1` with sovereign database routing.
* **Scaling:** Minimum 1 instance, max 20 instances. Zero cold-start latency.
* **Security:** Google Cloud Armor WAF enabled with automated DDoS mitigation.

### Option B: On-Premise Sovereign Data Center (Highest Sovereignty Tier)
* **Location:** Erbil Node 01 / Baghdad Ministry Data Center.
* **Orchestrator:** High-availability Kubernetes cluster (k8s v1.28+) or Nomad.
* **Perimeter:** Hardware firewall with internal reverse proxy (NGINX / HAProxy).
* **Storage:** Bare-metal PostgreSQL 16 cluster with streaming replication.

### Option C: Vercel Enterprise
* **Integration:** Automated Git push deployments for edge performance.
* **Edge Routing:** Native middleware routing for `/[locale]` pathnames.

---

## 3. Build & Execution Pipeline

```bash
# 1. Install production dependencies
pnpm install --frozen-lockfile

# 2. Generate Prisma Client
pnpm prisma:generate

# 3. Compile optimized production bundle
pnpm build
# or: npm run build

# 4. Launch production server on port 3000
pnpm start
# or: npm start
```

---

## 4. Health Checks & Monitoring

* **Liveness & Readiness Health Endpoint:** `https://idg.iq/ku`
* **Expected Response:** `200 OK` (HTTP/2 or HTTP/3)
* **Root Redirect Verification:** `https://idg.iq/` → `307 Temporary Redirect` to `https://idg.iq/ku`
* **Robots Rule Verification:** `https://idg.iq/robots.txt` → `200 OK`
* **Sitemap Feed:** `https://idg.iq/sitemap.xml` → `200 OK`

---

## 5. SSL / TLS & Security Headers

In accordance with IDG's Zero-Trust baseline, the web server or edge reverse proxy must enforce:
* **TLS Version:** Strict TLS 1.3 only (TLS 1.0, 1.1, and 1.2 disabled for external endpoints).
* **HSTS:** `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`
* **Content Security:** `X-Content-Type-Options: nosniff`
* **Clickjacking Protection:** `X-Frame-Options: DENY`
* **Referrer Policy:** `Referrer-Policy: strict-origin-when-cross-origin`

---

## 6. Domain Setup (`idg.iq`)

Configure authoritative DNS records for `idg.iq` and `www.idg.iq`:

| Type | Host | Value / Target | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | Sovereign Load Balancer Anycast IP | 300 |
| **AAAA** | `@` | Sovereign Load Balancer IPv6 | 300 |
| **CNAME** | `www` | `idg.iq.` | 300 |
| **CAA** | `@` | `0 issue "letsencrypt.org"` / `"pki.gov.iq"` | 3600 |

---

## 7. Post-Deployment Verification Checklist

- [ ] Verify root redirection: `curl -I https://idg.iq/` returns `307` to `/ku`.
- [ ] Verify tri-lingual routes: `/ku`, `/ar`, `/en` return `200 OK`.
- [ ] Verify all 4 legal routes: `/ku/legal/privacy`, `/ku/legal/terms`, `/ku/legal/sovereign-data`, `/ku/legal/accessibility` return `200 OK`.
- [ ] Verify `sitemap.xml` returns 43 indexed URLs across the 3 locales.
- [ ] Verify Prisma database connectivity for contact & career form submissions.
- [ ] Verify SSL certificate validity and A+ rating on Qualys SSL Labs.
- [ ] Confirm no client-side console warnings or hydration mismatches.
