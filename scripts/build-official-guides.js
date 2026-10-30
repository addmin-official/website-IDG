const fs = require('fs');
const path = require('path');

function createMultiPagePdf(pagesData) {
  let pdf = '%PDF-1.4\n%\xE2\xE3\xCF\xD3\n';
  const offsets = [];

  function addObj(str) {
    offsets.push(Buffer.byteLength(pdf, 'utf-8'));
    pdf += str + '\n';
  }

  const numPages = pagesData.length;
  const pageObjNums = [];
  for (let i = 0; i < numPages; i++) {
    pageObjNums.push((3 + i * 2) + ' 0 R');
  }

  // 1: Catalog
  addObj('1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj');

  // 2: Pages tree
  addObj('2 0 obj\n<< /Type /Pages /Kids [' + pageObjNums.join(' ') + '] /Count ' + numPages + ' >>\nendobj');

  const font1Obj = (3 + numPages * 2);
  const font2Obj = (4 + numPages * 2);
  const font3Obj = (5 + numPages * 2);

  for (let i = 0; i < numPages; i++) {
    const pageNum = 3 + i * 2;
    const contentNum = 4 + i * 2;
    const streamData = pagesData[i];
    const streamLen = Buffer.byteLength(streamData, 'utf-8');

    // Page object with MediaBox (A4: 595.28 x 841.89)
    addObj(pageNum + ' 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Contents ' + contentNum + ' 0 R /Resources << /Font << /F1 ' + font1Obj + ' 0 R /F2 ' + font2Obj + ' 0 R /F3 ' + font3Obj + ' 0 R >> >> >>\nendobj');

    // Contents Stream
    addObj(contentNum + ' 0 obj\n<< /Length ' + streamLen + ' >>\nstream\n' + streamData + '\nendstream\nendobj');
  }

  // Font F1 (Helvetica-Bold)
  addObj(font1Obj + ' 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj');

  // Font F2 (Helvetica)
  addObj(font2Obj + ' 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj');

  // Font F3 (Helvetica-Oblique / Italic)
  addObj(font3Obj + ' 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>\nendobj');

  const totalObjects = font3Obj;
  const xrefOffset = Buffer.byteLength(pdf, 'utf-8');

  pdf += 'xref\n';
  pdf += '0 ' + (totalObjects + 1) + '\n';
  pdf += '0000000000 65535 f \n';
  for (let i = 0; i < totalObjects; i++) {
    pdf += String(offsets[i]).padStart(10, '0') + ' 00000 n \n';
  }

  pdf += 'trailer\n';
  pdf += '<< /Size ' + (totalObjects + 1) + ' /Root 1 0 R >>\n';
  pdf += 'startxref\n';
  pdf += xrefOffset + '\n';
  pdf += '%%EOF\n';

  return Buffer.from(pdf, 'utf-8');
}

function escapePdf(str) {
  return str.replace(/[()\\\\]/g, '\\$&');
}

function renderHeaderFooter(pageNum, totalPages, docRef, title) {
  return [
    // Top border line
    '0.5 w',
    '0.1 0.2 0.4 RG',
    '50 805 m 545 805 l S',
    'BT',
    '/F1 8 Tf',
    '50 812 Td',
    '(' + escapePdf('IRAQ DIGITAL GATEWAY (IDG) • SOVEREIGN ENGINEERING INFRASTRUCTURE') + ') Tj',
    '330 0 Td',
    '(' + escapePdf(docRef) + ') Tj',
    'ET',
    // Bottom border line
    '0.5 w',
    '0.1 0.2 0.4 RG',
    '50 45 m 545 45 l S',
    'BT',
    '/F2 8 Tf',
    '50 32 Td',
    '(' + escapePdf('OFFICIAL INSTITUTIONAL RELEASE • REPUBLIC OF IRAQ • CONFIDENTIAL LEVEL 3') + ') Tj',
    '380 0 Td',
    '(' + escapePdf('PAGE ' + pageNum + ' OF ' + totalPages) + ') Tj',
    'ET',
  ];
}

// -------------------------------------------------------------
// DOCUMENT 1: IDG Sovereign Architecture Blueprint
// -------------------------------------------------------------
function generateBlueprintPdf() {
  const docRef = 'IDG-ARCH-2026-V2';
  const totalPages = 3;

  // Page 1: Cover & Institutional Metadata
  const p1 = [
    ...renderHeaderFooter(1, totalPages, docRef, 'IDG Architecture Blueprint'),
    'BT',
    '/F1 24 Tf',
    '50 730 Td',
    '(' + escapePdf('IDG Sovereign Architecture') + ') Tj',
    '0 -28 Td',
    '(' + escapePdf('Blueprint & Standards') + ') Tj',
    '/F3 11 Tf',
    '0 -22 Td',
    '(' + escapePdf('Comprehensive Technical Specification for In-Country Sovereign Cloud Hosting') + ') Tj',
    '0 -16 Td',
    '(' + escapePdf('and Resilient Enterprise Zero-Trust Infrastructure') + ') Tj',
    
    '/F1 10 Tf',
    '0 -40 Td',
    '(' + escapePdf('DOCUMENT METADATA & CONTROL REGISTER:') + ') Tj',
    '/F2 9.5 Tf',
    '0 -16 Td',
    '(' + escapePdf('• Document Reference: IDG-ARCH-2026-V2') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('• Classification: OFFICIAL SOVEREIGN RELEASE - LEVEL 3') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('• Lead Authority: IDG Enterprise Architecture & Cybersecurity Taskforce') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('• Effective Date: October 2026 (Operational Cycle 2026-2030)') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('• Target Entities: State Ministries, Border Authorities, Central Bank, Partner Ports') + ') Tj',

    '/F1 11 Tf',
    '0 -32 Td',
    '(' + escapePdf('TABLE OF CONTENTS:') + ') Tj',
    '/F2 9.5 Tf',
    '0 -18 Td',
    '(' + escapePdf('1. Executive Mandate & National Digital Sovereignty Objectives ................ Page 2') + ') Tj',
    '0 -15 Td',
    '(' + escapePdf('2. Tri-Regional Geographic Topology (Baghdad, Erbil, Basra) .................. Page 2') + ') Tj',
    '0 -15 Td',
    '(' + escapePdf('3. Zero-Trust Boundary & HSM Hardware Key Custody .......................... Page 2') + ') Tj',
    '0 -15 Td',
    '(' + escapePdf('4. Air-Gapped Core Protocols & Anti-Vendor Lock-in Guarantees ................ Page 3') + ') Tj',
    '0 -15 Td',
    '(' + escapePdf('5. Incident Survivability & Autonomous National Continuity .................... Page 3') + ') Tj',
    '0 -15 Td',
    '(' + escapePdf('6. Compliance Matrix, ISO/IEC 27001 Alignment & Verification .................. Page 3') + ') Tj',

    '/F3 9 Tf',
    '0 -40 Td',
    '(' + escapePdf('Notice: Unauthorized disclosure, external hosting, or extraction beyond national') + ') Tj',
    '0 -12 Td',
    '(' + escapePdf('sovereign boundaries is strictly prohibited under the National Data Governance Act.') + ') Tj',
    'ET',
  ].join('\n');

  // Page 2: Core Architecture & Topologies
  const p2 = [
    ...renderHeaderFooter(2, totalPages, docRef, 'IDG Architecture Blueprint'),
    'BT',
    '/F1 14 Tf',
    '50 750 Td',
    '(' + escapePdf('1. Executive Mandate & National Objectives') + ') Tj',
    '/F2 9 Tf',
    '0 -16 Td',
    '(' + escapePdf('Iraq Digital Gateway (IDG) establishes sovereign technical independence across') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('critical institutional infrastructure. This blueprint mandates that all institutional records,') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('customs manifests, biometric identity tokens, and financial settlements must reside') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('strictly within in-country sovereign data centers within Iraq\'s geographical borders.') + ') Tj',

    '/F1 14 Tf',
    '0 -28 Td',
    '(' + escapePdf('2. Tri-Regional Geographic Topology (Baghdad, Erbil, Basra)') + ') Tj',
    '/F2 9 Tf',
    '0 -16 Td',
    '(' + escapePdf('To achieve high availability (99.999% uptime) and geographic disaster tolerance,') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('IDG operates an active-active-passive mesh topology across three strategic nodes:') + ') Tj',
    '0 -15 Td',
    '(' + escapePdf('• Baghdad Central Node (BG-DC1): Primary institutional transaction routing and CBI RTGS gateway.') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('• Erbil Northern Node (EBL-DC2): Sovereign analytics, ZaNa Academy computing, and active backup.') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('• Basra Maritime Node (BSR-DC3): Port manifest edge caching and Umm Qasr NSW edge controller.') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('Inter-node synchronization utilizes sovereign dark fiber with dual-layer AES-256-GCM encryption.') + ') Tj',

    '/F1 14 Tf',
    '0 -28 Td',
    '(' + escapePdf('3. Zero-Trust Boundary & HSM Hardware Key Custody') + ') Tj',
    '/F2 9 Tf',
    '0 -16 Td',
    '(' + escapePdf('Perimeter-only defense is explicitly rejected. IDG enforces strict Zero-Trust Architecture (ZTA):') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('• Mutual TLS (mTLS 1.3) required for every intra-service microservice transaction.') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('• FIPS 140-3 Level 4 Hardware Security Modules (HSM) maintain root cryptographic keys.') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('• Key custody resides strictly under multi-party institutional threshold authorization.') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('• Foreign cloud providers are barred from holding or decrypting sovereign state records.') + ') Tj',
    'ET',
  ].join('\n');

  // Page 3: Air-Gapped Protocols, Continuity & Sign-off
  const p3 = [
    ...renderHeaderFooter(3, totalPages, docRef, 'IDG Architecture Blueprint'),
    'BT',
    '/F1 14 Tf',
    '50 750 Td',
    '(' + escapePdf('4. Air-Gapped Core Protocols & Anti-Vendor Lock-in') + ') Tj',
    '/F2 9 Tf',
    '0 -16 Td',
    '(' + escapePdf('Foundation registries (Citizen Identity, Land Corridors, National Single Window Ledger)') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('are isolated behind unidirectional data diodes (air-gapped replication channels).') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('All interfaces adhere strictly to open standards (OAS 3.1, gRPC, W3C DID, ISO 20022).') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('Proprietary vendor APIs that induce vendor lock-in are barred from sovereign core systems.') + ') Tj',

    '/F1 14 Tf',
    '0 -28 Td',
    '(' + escapePdf('5. Autonomous National Survivability') + ') Tj',
    '/F2 9 Tf',
    '0 -16 Td',
    '(' + escapePdf('In the event of an international submarine fiber cut or geopolitical network embargo,') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('the national sovereign cloud continues full autonomous local operation without loss') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('of customs clearance, financial settlement, or institutional identity verification.') + ') Tj',

    '/F1 14 Tf',
    '0 -28 Td',
    '(' + escapePdf('6. Architectural Governance Sign-off & Verification') + ') Tj',
    '/F2 9 Tf',
    '0 -16 Td',
    '(' + escapePdf('This specification has been reviewed and certified by the IDG Technical Taskforce.') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('Periodic compliance audits occur every 90 days in coordination with National Security.') + ') Tj',

    '/F1 10 Tf',
    '0 -35 Td',
    '(' + escapePdf('AUTHORIZATION & VERIFICATION LEDGER:') + ') Tj',
    '/F2 8.5 Tf',
    '0 -16 Td',
    '(' + escapePdf('[CERTIFIED] Chief Technology Officer (CTO) - Iraq Digital Gateway') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('[CERTIFIED] Director of Cyber Sovereignty & National Infrastructure') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('[VERIFIED] Cryptographic Manifest Hash: 9f8a4e21b7c0d381ea6249b5c2198f7e') + ') Tj',
    'ET',
  ].join('\n');

  return createMultiPagePdf([p1, p2, p3]);
}

// -------------------------------------------------------------
// DOCUMENT 2: National Data Governance Charter
// -------------------------------------------------------------
function generateDataGovernancePdf() {
  const docRef = 'IDG-GOV-DATA-2026';
  const totalPages = 2;

  const p1 = [
    ...renderHeaderFooter(1, totalPages, docRef, 'Data Governance Charter'),
    'BT',
    '/F1 22 Tf',
    '50 730 Td',
    '(' + escapePdf('National Data Governance &') + ') Tj',
    '0 -26 Td',
    '(' + escapePdf('Classification Charter') + ') Tj',
    '/F3 11 Tf',
    '0 -22 Td',
    '(' + escapePdf('Mandatory Regulatory Framework for Public Sector Data Management in Iraq') + ') Tj',

    '/F1 10 Tf',
    '0 -35 Td',
    '(' + escapePdf('CHARTER METADATA:') + ') Tj',
    '/F2 9.5 Tf',
    '0 -15 Td',
    '(' + escapePdf('• Document Reference: IDG-GOV-DATA-2026') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('• Classification: SOVEREIGN REGULATORY CHARTER') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('• Effective Date: October 2026') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('• Jurisdiction: Republic of Iraq (Federal & Regional Agencies)') + ') Tj',

    '/F1 13 Tf',
    '0 -30 Td',
    '(' + escapePdf('1. The Four-Tier Data Classification Matrix') + ') Tj',
    '/F2 9 Tf',
    '0 -16 Td',
    '(' + escapePdf('All institutional and governmental data is formally categorized into four strict tiers:') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('• Tier 1 (Public / مفتوح): Public legislation, statistical aggregates, educational materials.') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('• Tier 2 (Confidential / سري): Inter-agency correspondence, non-critical commercial filings.') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('• Tier 3 (Sovereign Critical / سيادي حساس): Port manifests, tax revenue, banking RTGS logs.') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('• Tier 4 (Air-Gapped Sovereign / سيادي معزول): National civil registry, defense telemetry.') + ') Tj',

    '/F1 13 Tf',
    '0 -26 Td',
    '(' + escapePdf('2. Absolute Prohibition on Cross-Border Data Leakage') + ') Tj',
    '/F2 9 Tf',
    '0 -16 Td',
    '(' + escapePdf('Under Section 4.2 of this Charter, any cloud architecture routing Tier 3 or Tier 4 records') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('through foreign proxy servers, CDNs, or offshore databases constitutes a sovereign breach.') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('All AI models trained on Iraqi institutional data must execute within sovereign nodes.') + ') Tj',
    'ET',
  ].join('\n');

  const p2 = [
    ...renderHeaderFooter(2, totalPages, docRef, 'Data Governance Charter'),
    'BT',
    '/F1 13 Tf',
    '50 750 Td',
    '(' + escapePdf('3. Accountable Ownership & Evidentiary Chains') + ') Tj',
    '/F2 9 Tf',
    '0 -16 Td',
    '(' + escapePdf('Every electronic registry and transactional pipeline must designate an Accountable Owner.') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('The Accountable Owner bears personal operational and legal responsibility for data integrity,') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('access controls, and disaster recovery readiness under IDG governance KPIs.') + ') Tj',

    '/F1 13 Tf',
    '0 -28 Td',
    '(' + escapePdf('4. Cryptographic Hashing & Immutability Standards') + ') Tj',
    '/F2 9 Tf',
    '0 -16 Td',
    '(' + escapePdf('To eliminate retro-active database tampering and corruption:') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('• All record modifications must generate an immutable SHA-256 digest block.') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('• Cryptographic audit chains must be inspectable by the Supreme Board of Auditing.') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('• Retention periods for financial and customs logs are permanently set to 15 years minimum.') + ') Tj',

    '/F1 13 Tf',
    '0 -28 Td',
    '(' + escapePdf('5. Regulatory Sanctions & Compliance Oversight') + ') Tj',
    '/F2 9 Tf',
    '0 -16 Td',
    '(' + escapePdf('Non-compliance with this charter results in immediate revocation of sovereign gateway access') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('and referral to the Federal Integrity Commission for institutional malpractice investigation.') + ') Tj',

    '/F1 10 Tf',
    '0 -40 Td',
    '(' + escapePdf('RATIFICATION & ADOPTION SEAL:') + ') Tj',
    '/F2 8.5 Tf',
    '0 -16 Td',
    '(' + escapePdf('[SEALED] High Committee for National Digital Transformation - Prime Minister\'s Office') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('[CERTIFIED] Institutional Relations & Sovereign Governance Desk - IDG Group') + ') Tj',
    'ET',
  ].join('\n');

  return createMultiPagePdf([p1, p2]);
}

// -------------------------------------------------------------
// DOCUMENT 3: ISO-27001 Security Implementation Manual
// -------------------------------------------------------------
function generateIso27001Pdf() {
  const docRef = 'IDG-SEC-ISO-27001';
  const totalPages = 2;

  const p1 = [
    ...renderHeaderFooter(1, totalPages, docRef, 'ISO-27001 Implementation Manual'),
    'BT',
    '/F1 22 Tf',
    '50 730 Td',
    '(' + escapePdf('Information Security & ISO-27001') + ') Tj',
    '0 -26 Td',
    '(' + escapePdf('Implementation Manual') + ') Tj',
    '/F3 11 Tf',
    '0 -22 Td',
    '(' + escapePdf('Technical Cybersecurity Baseline for Sovereign Cloud Infrastructure in Iraq') + ') Tj',

    '/F1 10 Tf',
    '0 -35 Td',
    '(' + escapePdf('SECURITY CONTROL SPECIFICATION:') + ') Tj',
    '/F2 9.5 Tf',
    '0 -15 Td',
    '(' + escapePdf('• Document Reference: IDG-SEC-ISO-27001') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('• Compliance Baseline: ISO/IEC 27001:2022 & NIST SP 800-207 (Zero Trust)') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('• Security Classification: RESTRICTED SOVEREIGN DEFENSE') + ') Tj',

    '/F1 13 Tf',
    '0 -30 Td',
    '(' + escapePdf('1. Access Control & Identity Governance (A.9 / A.8)') + ') Tj',
    '/F2 9 Tf',
    '0 -16 Td',
    '(' + escapePdf('• Phishing-resistant FIDO2 / WebAuthn hardware security keys required for all admin access.') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('• Role-Based Access Control (RBAC) enforced with Least Privilege principle.') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('• Automatic session revocation after 15 minutes of administrative inactivity.') + ') Tj',

    '/F1 13 Tf',
    '0 -26 Td',
    '(' + escapePdf('2. Cryptography & Data Protection Standards (A.10)') + ') Tj',
    '/F2 9 Tf',
    '0 -16 Td',
    '(' + escapePdf('• AES-256-GCM enforced across all relational and object databases at rest.') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('• TLS 1.3 with forward secrecy enforced across all inter-service and external connections.') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('• Automatic cryptographic key rotation scheduled every 90 days via sovereign HSM.') + ') Tj',
    'ET',
  ].join('\n');

  const p2 = [
    ...renderHeaderFooter(2, totalPages, docRef, 'ISO-27001 Implementation Manual'),
    'BT',
    '/F1 13 Tf',
    '50 750 Td',
    '(' + escapePdf('3. Security Incident Management & Rapid Triage (A.16)') + ') Tj',
    '/F2 9 Tf',
    '0 -16 Td',
    '(' + escapePdf('The IDG Security Operations Center (SOC) operates 24/7/365 continuous monitoring:') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('• Severity 1 (Critical Sovereign Intrusion): Response and air-gap isolation < 15 minutes.') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('• Severity 2 (Service Disruption / DDoS): Mitigation and traffic rerouting < 30 minutes.') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('• Severity 3 (Policy Anomaly / Unapproved Auth Attempt): Audit and forensics < 60 minutes.') + ') Tj',

    '/F1 13 Tf',
    '0 -28 Td',
    '(' + escapePdf('4. Continuous Vulnerability Management (A.12)') + ') Tj',
    '/F2 9 Tf',
    '0 -16 Td',
    '(' + escapePdf('• Automated dynamic and static application security testing (DAST / SAST) in CI/CD pipeline.') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('• Mandatory third-party sovereign penetration testing conducted every semi-annual cycle.') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('• Strict zero-day patch window: Maximum 24 hours for critical CVE vulnerabilities.') + ') Tj',

    '/F1 10 Tf',
    '0 -40 Td',
    '(' + escapePdf('AUDIT & CERTIFICATION COMPLIANCE:') + ') Tj',
    '/F2 8.5 Tf',
    '0 -16 Td',
    '(' + escapePdf('[CERTIFIED] Lead Cybersecurity Architect - ISO/IEC 27001:2022 Certified Auditor') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('[APPROVED] Directorate of Defense & Sovereign Networks - IDG Group') + ') Tj',
    'ET',
  ].join('\n');

  return createMultiPagePdf([p1, p2]);
}

// -------------------------------------------------------------
// DOCUMENT 4: Iraq NSW Technical Integration Specs
// -------------------------------------------------------------
function generateNswSpecsPdf() {
  const docRef = 'IDG-NSW-INT-09';
  const totalPages = 3;

  const p1 = [
    ...renderHeaderFooter(1, totalPages, docRef, 'Iraq NSW Integration Specs'),
    'BT',
    '/F1 22 Tf',
    '50 730 Td',
    '(' + escapePdf('Iraq National Single Window (NSW)') + ') Tj',
    '0 -26 Td',
    '(' + escapePdf('Technical Integration Specifications') + ') Tj',
    '/F3 11 Tf',
    '0 -22 Td',
    '(' + escapePdf('Interfacing Manual for Maritime Ports, Border Terminals, ASYCUDA & CBI') + ') Tj',

    '/F1 10 Tf',
    '0 -35 Td',
    '(' + escapePdf('INTERFACE ARCHITECTURE REGISTER:') + ') Tj',
    '/F2 9.5 Tf',
    '0 -15 Td',
    '(' + escapePdf('• Document Reference: IDG-NSW-INT-09') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('• Target Corridors: Umm Qasr Port (North/South), Trebil, Ibrahim Khalil, Safwan') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('• System Counterparts: ASYCUDA World (Customs), BUNA, CBI RTGS, Port Operating Systems') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('• Protocol Version: REST / JSON / XML EDIFACT v4.2 & gRPC Streaming') + ') Tj',

    '/F1 13 Tf',
    '0 -30 Td',
    '(' + escapePdf('1. End-to-End Corridor Flow Overview') + ') Tj',
    '/F2 9 Tf',
    '0 -16 Td',
    '(' + escapePdf('The Iraq National Single Window streamlines international trade through five digital steps:') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('Step 1: Manifest Pre-Arrival Declaration (Shipping Line / Carrier to NSW Gateway).') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('Step 2: Automated Single Electronic Customs Declaration (ASYCUDA World Interchange).') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('Step 3: Algorithmic Multi-Agency Risk Assessment (Green, Yellow, Red Channeling).') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('Step 4: Instant Financial Clearance via Central Bank (CBI) Sovereign Gateway.') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('Step 5: Digital Release Order with Holographic QR Gate Verification.') + ') Tj',
    'ET',
  ].join('\n');

  const p2 = [
    ...renderHeaderFooter(2, totalPages, docRef, 'Iraq NSW Integration Specs'),
    'BT',
    '/F1 13 Tf',
    '50 750 Td',
    '(' + escapePdf('2. Pre-Arrival Cargo Manifest Schema (Endpoint: /api/v1/nsw/manifest)') + ') Tj',
    '/F2 8.5 Tf',
    '0 -16 Td',
    '(' + escapePdf('POST /api/v1/nsw/manifest - Headers: Authorization: Bearer <mTLS_JWT>') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('Payload Structure:') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('  {') + ') Tj',
    '0 -11 Td',
    '(' + escapePdf('    "manifestId": "MNF-2026-BSR-008912",') + ') Tj',
    '0 -11 Td',
    '(' + escapePdf('    "carrier": "National Iraqi Maritime Transport Co",') + ') Tj',
    '0 -11 Td',
    '(' + escapePdf('    "portOfEntry": "IQ-UQR (Umm Qasr South)",') + ') Tj',
    '0 -11 Td',
    '(' + escapePdf('    "eta": "2026-11-04T08:00:00Z",') + ') Tj',
    '0 -11 Td',
    '(' + escapePdf('    "containersCount": 420,') + ') Tj',
    '0 -11 Td',
    '(' + escapePdf('    "cargoItems": [') + ') Tj',
    '0 -11 Td',
    '(' + escapePdf('      {"hsCode": "8471.30", "declaredValueUSD": 1420000, "weightKg": 18450}') + ') Tj',
    '0 -11 Td',
    '(' + escapePdf('    ]') + ') Tj',
    '0 -11 Td',
    '(' + escapePdf('  }') + ') Tj',

    '/F1 13 Tf',
    '0 -24 Td',
    '(' + escapePdf('3. Central Bank RTGS Settlement Endpoint (Endpoint: /api/v1/nsw/settle)') + ') Tj',
    '/F2 8.5 Tf',
    '0 -16 Td',
    '(' + escapePdf('Upon risk validation, tariffs and fees are deducted in Iraqi Dinars (IQD):') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('• Automatic generation of Sadad institutional billing tokens.') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('• Immediate credit acknowledgment to the General Directorate of Customs sub-treasury.') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('• Cryptographic proof-of-payment token appended to digital container release order.') + ') Tj',
    'ET',
  ].join('\n');

  const p3 = [
    ...renderHeaderFooter(3, totalPages, docRef, 'Iraq NSW Integration Specs'),
    'BT',
    '/F1 13 Tf',
    '50 750 Td',
    '(' + escapePdf('4. Automated Risk Engine & AI Manifest Auditing') + ') Tj',
    '/F2 9 Tf',
    '0 -16 Td',
    '(' + escapePdf('• Green Channel (70-80%): Instant clearance under 2 hours without physical inspection.') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('• Yellow Channel (15-20%): Automated document verification and invoice price audit.') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('• Red Channel (5-10%): Mandatory non-intrusive container scanner and physical inspection.') + ') Tj',

    '/F1 13 Tf',
    '0 -28 Td',
    '(' + escapePdf('5. Terminal Gate-Out & Holographic QR Verification') + ') Tj',
    '/F2 9 Tf',
    '0 -16 Td',
    '(' + escapePdf('The terminal exit gate utilizes encrypted, time-limited digital release tokens:') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('• Handheld border guard scanners verify token authenticity offline against sovereign root cert.') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('• Instant container gate-out status reported to Ministry of Transport real-time telemetry.') + ') Tj',
    '0 -13 Td',
    '(' + escapePdf('• Overall port dwell time reduced from 18 days to under 48 hours nationwide.') + ') Tj',

    '/F1 10 Tf',
    '0 -40 Td',
    '(' + escapePdf('INTERFACING CERTIFICATION:') + ') Tj',
    '/F2 8.5 Tf',
    '0 -16 Td',
    '(' + escapePdf('[APPROVED] Directorate General of Customs - Republic of Iraq') + ') Tj',
    '0 -14 Td',
    '(' + escapePdf('[CERTIFIED] Port & Border Corridors Taskforce - Iraq Digital Gateway (IDG)') + ') Tj',
    'ET',
  ].join('\n');

  return createMultiPagePdf([p1, p2, p3]);
}

// -------------------------------------------------------------
// MAIN EXECUTION
// -------------------------------------------------------------
function run() {
  const targetDir = path.join(process.cwd(), 'public', 'documents');
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const files = [
    { name: 'guide-blueprint.pdf', generator: generateBlueprintPdf },
    { name: 'guide-data-governance.pdf', generator: generateDataGovernancePdf },
    { name: 'guide-iso27001.pdf', generator: generateIso27001Pdf },
    { name: 'guide-nsw-spec.pdf', generator: generateNswSpecsPdf },
  ];

  console.log('Building official IDG downloadable PDFs...');
  for (const f of files) {
    const buffer = f.generator();
    const filePath = path.join(targetDir, f.name);
    fs.writeFileSync(filePath, buffer);
    console.log(`✔ Generated ${f.name} (${buffer.length} bytes)`);
  }
  console.log('All 4 official PDFs successfully created in public/documents/');
}

run();
