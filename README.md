# 🇮🇶 Iraq Digital Gateway (IDG) — دەروازەی دیجیتاڵیی عێراق

> **Sovereign parent technology company and institutional venture studio engineering digital infrastructure and applied AI for Iraq.**

[![Next.js](https://img.shields.io/badge/Next.js-15.5.27-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=flat)](#)

---

## 🏛️ Overview

**Iraq Digital Gateway (IDG)** serves as the sovereign parent company orchestrating critical digital systems across Iraq and the Kurdistan Region. Operating under a venture studio model, IDG engineers foundational technologies that bridge governance, trade logistics, native K-12 education, and municipal sustainability.

Detailed architectural specifications, product breakdown, and strategic pillars are documented in the **[IDG Enterprise OS Blueprint v1.1](docs/BLUEPRINT.md)**.

---

## ⚡ Products Portfolio

* **[AI Gate Iraq](https://aigateiraq.com)** (`IDG-PRD-001`): Sovereign trade, logistics, and container clearance facilitation platform.
* **[ZaNa Academy](https://zana.academy)** (`IDG-PRD-002`): Certified K-12 Kurdish digital curriculum and localized AI tutoring ecosystem.
* **[Green Belt](https://greenbelt.iq)** (`IDG-PRD-003`): Municipal circular economy and reforestation tracking for Erbil.
* **[Iraq NSW (National Single Window)](docs/BLUEPRINT.md#strategic-national-initiative-iraq-nsw-national-single-window)** (`IDG-NAT-NSW-V1`): Unified single window connecting all 10 national border crossings and KRG.

---

## 🛠️ Technology Stack

* **Framework:** Next.js 15.5.27 (App Router, Server Actions)
* **Language:** TypeScript 5.9 (Strict Mode)
* **Styling:** Tailwind CSS v4 + PostCSS
* **Internationalization:** Triple-locale support (`ku` Kurdish Sorani [Default], `ar` Arabic, `en` English) with full bidirectional RTL/LTR layout synchronization
* **Data Layer:** Prisma ORM 6.19 + PostgreSQL
* **Security:** Zero-Trust headers, CSP, strictly in-country data residency compliance

---

## 🚀 Quick Start

### 1. Prerequisites
* Node.js `>= 20.x`
* pnpm `>= 9.x` or npm `>= 10.x`

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/addmin-official/website-IDG.git
cd website-IDG

# Install dependencies
pnpm install # or npm install
```

### 3. Environment Configuration
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Ensure `DATABASE_URL` is configured for your local or production PostgreSQL instance.

### 4. Development Server
```bash
pnpm dev # or npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the gateway. Default route automatically redirects to `/ku`.

### 5. Production Build
```bash
pnpm build # or npm run build
pnpm start # or npm start
```

---

## 🚢 Deployment

Detailed deployment procedures for cloud and on-premise environments are specified in **[DEPLOYMENT.md](DEPLOYMENT.md)**.

---

## 👤 Governance & Leadership

* **Founder & Chairman:** Mustafa Jalal Mustafa Khoshnaw
* **Headquarters:** Erbil, Kurdistan Region, Iraq
* **Official Communications:** `mustafa@aigateiraq.com`
* **Website:** [https://idg.iq](https://idg.iq)

---

&copy; 2026 Iraq Digital Gateway (IDG). All Sovereign Rights Reserved.