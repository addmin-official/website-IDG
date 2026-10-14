# IDG Enterprise OS v4 — Blueprint v1.1

**Last Updated:** October 9, 2026  
**Document Classification:** RESTRICTED / INSTITUTIONAL ARCHITECTURE  
**Version:** 1.1

---

## 1. Corporate Identity

| Attribute | Specification |
| :--- | :--- |
| **Parent Entity** | Iraq Digital Gateway (IDG) / دەروازەی دیجیتاڵیی عێراق / بوابة العراق الرقمية |
| **Legal Status** | Sovereign Parent Technology Company & Institutional Venture Studio |
| **Founder & Chairman** | Mustafa Jalal Mustafa Khoshnaw |
| **Headquarters** | Erbil, Kurdistan Region, Iraq |
| **Official Domain** | [https://idggov.tech](https://idggov.tech) |
| **Core Operating Languages** | Kurdish Sorani (`ku`, RTL - Default), Arabic (`ar`, RTL), English (`en`, LTR) |
| **Architectural Mandate** | Data Sovereignty, Applied AI, Zero-Trust Institutional Infrastructure, National Venture Studio |

---

## 2. Products Portfolio

### Product 001: AI Gate Iraq
* **Classification:** Sovereign Trade & Logistics Platform
* **Identifier:** `IDG-PRD-001`
* **Official URL:** [https://aigateiraq.com](https://aigateiraq.com)
* **Status:** Operational / Commercial Production
* **Problem Statement:**  
  Fragmented trade documentation, manual customs procedures, cross-border delays, lack of shipment visibility, and severe data leakage across Iraqi trade corridors.
* **Purpose & Overview:**  
  AI Gate Iraq acts as the single operational gateway for private and institutional trade operators across Iraq. It streamlines automated customs clearance, provides end-to-end container tracking, and automates regulatory compliance verification.
* **Target Audience:**  
  Freight forwarders, shipping lines, customs clearance agents, national import/export enterprises, and regulatory authorities.
* **Key Features:**  
  - Automated bill of lading and manifest verification  
  - Real-time multimodal cargo tracking across Umm Qasr and inland dry ports  
  - Intelligent tariff classification engine using verified customs schedules  
  - Bi-directional integration with Iraqi commercial banking RTGS channels  
* **Technology Stack:**  
  Next.js 15, Go (Golang), TypeScript, PostgreSQL, Zero-Trust Access Gateway, Docker, Kubernetes, Tailwind CSS.

---

### Product 002: ZaNa Academy
* **Classification:** K-12 Kurdish Digital Learning & AI Tutoring Platform
* **Identifier:** `IDG-PRD-002`
* **Official URL:** [https://zana.academy](https://zana.academy)
* **Status:** Active / Production Deployment
* **Problem Statement:**  
  Acute shortage of digitized, high-fidelity Kurdish-language (Sorani & Kurmanji) K-12 educational resources; reliance on physical paper textbooks; absence of localized STEM AI tutoring adapted to the Kurdish curriculum.
* **Purpose & Overview:**  
  ZaNa Academy provides an end-to-end digital learning platform delivering certified, curriculum-aligned Kurdish learning materials, interactive exercises, localized Kurdish NLP tutoring, and institutional analytics for schools and parents.
* **Target Audience:**  
  K-12 students across the Kurdistan Region and Iraq, teachers, school directors, Ministry of Education bodies, and parents.
* **Key Features:**  
  - Complete digital interactive Kurdish textbook library (Grades 1–12)  
  - AI Kurdish voice and text tutor trained exclusively on approved Ministry pedagogy  
  - Real-time student performance telemetry and automated homework verification  
  - Offline-first caching for regions with intermittent electrical and network connectivity  
* **Technology Stack:**  
  Next.js 15, React 19, Python/FastAPI, Localized Kurdish NLP/ASR Models, PostgreSQL, Redis, Web Audio API, Tailwind CSS.

---

### Product 003: Green Belt
* **Classification:** Municipal Circular Economy & Urban Ecology Engine
* **Identifier:** `IDG-PRD-003`
* **Official URL:** [https://greenbelt.iq](https://greenbelt.iq)
* **Status:** Active / Continuous Field Implementation
* **Problem Statement:**  
  Accelerating desertification, seasonal dust storm intensity, unmanaged urban waste accumulation, and inefficient coordination of the reforestation ring around Erbil metropolitan area.
* **Purpose & Overview:**  
  Green Belt operates as the municipal environmental coordination platform, connecting waste recycling processors with circular municipal logistics and tracking tree canopy survival rates in Erbil's green perimeter.
* **Target Audience:**  
  Municipal councils, environmental protection boards, waste management operators, industrial recycling companies, and civic environmental stewards.
* **Key Features:**  
  - GIS-based satellite and drone canopy survival monitoring  
  - Industrial waste stream routing and circular collection verification  
  - Citizen and enterprise recycling incentive accounting  
  - Environmental sensor network integration (air quality, soil moisture, groundwater)  
* **Technology Stack:**  
  Next.js 15, Leaflet/GIS Mapping Engine, PostgreSQL/PostGIS, Node.js microservices, IoT telemetry MQTT brokers, Tailwind CSS.

---

### Strategic National Initiative: Iraq NSW (National Single Window)
* **Classification:** Sovereign National Single Window for Foreign Trade
* **Identifier:** `IDG-NAT-NSW-V1`
* **Proposal Date:** October 9, 2026 (v1.0)
* **Status:** Ready for Implementation / Pilot Phase (Umm Qasr)
* **Financial Model & Metrics:**  
  - **Total Budget:** $180,000,000 USD  
  - **Implementation Timeline:** 18 Months (9 Phases)  
  - **Break-Even Point:** Month 18  
  - **Expected ROI (Year 3):** 420%  
  - **Projected Net Profit (Year 3):** $39,000,000 / year  
* **Transformative Targets (Before vs. After):**  
  - Clearance Time: 48 hours → **7 hours** (85% reduction)  
  - Cost per Declaration: $1,000 → **$400** (60% savings)  
  - Transactional Transparency: 10% → **90%+** (9x increase)  
  - Regulatory Corruption Leakage: 40% → **0%**  
  - Border Ports Integrated: 1 pilot (Umm Qasr) → **10 borders + KRG Unified**  
* **Technology Stack:**  
  - **Backend:** Go (Golang), Python/FastAPI, gRPC, REST, Kubernetes, Google Cloud Pub/Sub  
  - **Frontend:** React.js, React Native, Next.js, Tailwind CSS, i18next, Full RTL Support  
  - **Databases:** PostgreSQL, Firestore, BigQuery, Redis  
  - **Cloud & Infra:** Google Cloud Platform (Multi-region in-country), Cloud Armor, Cloud Monitoring  
  - **AI / ML:** Vertex AI, TensorFlow, PyTorch, Cloud Vision API, LayoutLMv3, Dialogflow CX  
  - **Security:** Zero-Trust Perimeter, Document OCR Validation, Hardware Security Modules (HSM)  

---

## 3. Governance Rules (Parent Company Rule Enforcement)

IDG operates under strict sovereign parent-company governance standards:

1. **Subsidiarity Principle:** All digital ventures must solve a documented, real-world institutional or market failure in Iraq.
2. **Data Sovereignty Mandate:** 100% of institutional, biometric, educational, and financial data must remain physically resident inside sovereign data centers within Iraq. No cross-border unauthorized data routing.
3. **Zero-Trust Baseline:** All communications across services, entities, and borders require mutual TLS (mTLS), strict least-privilege RBAC, and continuous cryptographic verification.
4. **Human-in-the-Loop AI Oversight:** Applied AI and machine learning models are strictly utilized for indexing, validation, and anomaly detection. All binding legal, financial, and regulatory decisions require human verification.
5. **Radical Auditability:** Every transaction, border declaration, and policy change is logged to immutable, append-only audit ledgers.

---

## 4. Strategic Pillars (The 10 IDG Pillars)

1. **Sovereign Digital Infrastructure:** Building institutional software foundations owned by and operated for Iraq.
2. **Applied Artificial Intelligence:** Deploying pragmatic AI to solve logistics, educational, and governance challenges.
3. **Data Sovereignty & Perimeter Defense:** Protecting Iraqi citizen and enterprise data under national jurisdiction.
4. **Institutional Modernization:** Transitioning ministries from paper workflows to digital APIs.
5. **Economic Diversification:** Enabling domestic technology commercialization away from hydrocarbon dependency.
6. **Unified Border Logistics:** Eliminating frictional trade bottlenecks between the federal government and KRG.
7. **Educational Equity:** Providing world-class, digitized STEM education in indigenous native languages.
8. **Ecological Resilience:** Leveraging software telemetry to protect urban environments and reverse desertification.
9. **Private-Public Federated Architecture:** Connecting banks, shipping lines, and state regulators into harmonious networks.
10. **Domestic Talent Stewardship:** Nurturing and employing top Iraqi and Kurdish software engineers and researchers.

---

## 5. Vision 2035 Roadmap

* **Phase I (2024–2026) — Foundations & Venture Studio:**  
  Launch parent company architecture; ship AI Gate Iraq, ZaNa Academy, and Green Belt; finalize National Single Window engineering proposal.
* **Phase II (2027–2029) — National Integration:**  
  Deploy Iraq NSW across all 10 national border crossings and KRG; achieve national electronic declaration parity; interconnect Central Bank RTGS with commercial ports.
* **Phase III (2030–2032) — Cognitive Governance & Data Mesh:**  
  Unified institutional data mesh for federal and regional ministries; fully automated environmental telemetry; national AI research cluster.
* **Phase IV (2033–2035) — Sovereign Digital Statehood:**  
  Frictionless zero-corruption trade gateway; universal bilingual digital education; sovereign cloud independence for all core public utilities.

---

## 6. Brand Promise

> **"Engineering Iraq's Sovereign Digital Future."**  
> We do not build temporary applications; we forge durable institutional capabilities that safeguard data, unlock economic prosperity, and empower generations to come.
