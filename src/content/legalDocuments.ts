import { readFileSync } from "fs";

export type LegalSubSection = {
  title: string;
  body: string[];
};

export type LegalSection = {
  title: string;
  body?: string[];
  subSections?: LegalSubSection[];
};

export type LegalDocument = {
  slug: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  effectiveDate: string;
  version: string;
  completionNotice: string[];
  introduction: string[];
  rawText?: string;
  relatedLinks: {
    label: string;
    href: string;
  }[];
  sections: LegalSection[];
};

const companyDetails = {
  operator: "Bhatt Square Private Limited",
  registeredOffice: "1/4, Vishesh Khand 2, Gomti Nagar, Lucknow",
  cin: "U62099UP2023PTC184782",
  gstin: "09AALCB7260P1ZX",
  supportEmail: "support@bhattsquare.com",
  legalEmail: "legal@bhattsquare.com",
};

const documentHeadings = [
  "TERMS OF SERVICE",
  "PRIVACY POLICY",
  "COMMUNITY GUIDELINES",
] as const;

const companyContactBlock = [
  `Operator: ${companyDetails.operator}`,
  `Registered Office: ${companyDetails.registeredOffice}`,
  `CIN - ${companyDetails.cin}`,
  `GSTIN (if applicable):  09AALCB7260P1ZX`,
  `Support Email: ${companyDetails.supportEmail}`,
  `Legal Email: ${companyDetails.legalEmail}`,
].join("\n");

function readTodoText() {
  try {
    return readFileSync(`${process.cwd()}/todo.txt`, "utf8").replace(/\r\n/g, "\n").trim();
  } catch {
    return "";
  }
}

function extractDocumentFromTodo(heading: (typeof documentHeadings)[number]) {
  const source = readTodoText();
  const marker = `ZORAMEETO\n${heading}`;
  const start = source.indexOf(marker);

  if (start === -1) return "";

  const nextStarts = documentHeadings
    .map((item) => source.indexOf(`ZORAMEETO\n${item}`, start + marker.length))
    .filter((item) => item !== -1);
  const end = nextStarts.length ? Math.min(...nextStarts) : source.length;

  return source.slice(start, end).trim();
}

function withCompanyDetails(text: string) {
  return text
    .replace(
      /(Effective Date:[^\n]+\n)/,
      "$1\nOwned & Operated by Bhatt Square Private Limited\n\nZorameeto is a product and brand owned, developed, operated, and managed by Bhatt Square Private Limited, a company incorporated under the Companies Act, 2013. All intellectual property, services, branding, software, and operations of Zorameeto are managed by Bhatt Square Private Limited.\n",
    )
    .replace(/\[INSERT FULL LEGAL\s+ENTITY NAME\]/g, companyDetails.operator)
    .replace(/\[INSERT\s+REGISTERED OFFICE ADDRESS\]/g, companyDetails.registeredOffice)
    .replace(/\[INSERT INDIA CONTACT ADDRESS\]/g, companyDetails.registeredOffice)
    .replace(/\[INSERT CITY AND STATE OF OPERATOR’S REGISTERED OFFICE\]/g, "Lucknow, Uttar Pradesh")
    .replace(/\[INSERT SUPPORT EMAIL\]/g, companyDetails.supportEmail)
    .replace(/\[INSERT LEGAL EMAIL\]/g, companyDetails.legalEmail)
    .replace(/\[INSERT GRIEVANCE EMAIL\]/g, companyDetails.legalEmail)
    .replace(/\[INSERT PRIVACY EMAIL\]/g, companyDetails.legalEmail)
    .replace(/\[INSERT PRIVACY\/SAFETY EMAIL\]/g, companyDetails.supportEmail)
    .replace(/\[INSERT SAFETY EMAIL\]/g, companyDetails.supportEmail)
    .replace("CIN/LLPIN (if applicable): [INSERT]", `CIN - ${companyDetails.cin}`)
    .replace("GSTIN (if applicable): [INSERT]", `GSTIN (if applicable):  ${companyDetails.gstin}`)
    .replace(
      /Safety\/Reports:[\s\S]*?\nGrievance Officer:[\s\S]*?\nGrievance Email:[\s\S]*?\nOperator:[\s\S]*?\nIndia Address:[\s\S]*?(?=\nPage 4)/,
      companyContactBlock,
    )
    .replace(
      /Privacy contact:[\s\S]*?\nGrievance Officer:[\s\S]*?\nDesignation:[\s\S]*?\nAddress:[\s\S]*?\nEmail:[\s\S]*?(?=\nWe will acknowledge)/,
      `${companyContactBlock}\n`,
    );
}

const completionNotice = [
  "This document contains bracketed fields that must be completed with Zorameeto's actual legal entity, registered office, Grievance Officer and contact details before it is published.",
  "The substantive drafting is tailored to the current Zorameeto product model, including 18+ dating, Cameo, chat, Agora-style voice/video communications, wallet recharges, virtual gifts, paid calls, verification, KYC and recipient payouts.",
];

export const communityGuidelines: LegalDocument = {
  slug: "community-guidelines",
  eyebrow: "Safety Standards",
  title: "Community",
  titleAccent: "Guidelines",
  description:
    "The safety and conduct standards for Zorameeto, a product owned and managed by Bhatt Square Private Limited.",
  effectiveDate: "3 July 2026",
  version: "1.0",
  completionNotice,
  introduction: [
    "Owned & Operated by Bhatt Square Private Limited",
    "Zorameeto is a product and brand owned, developed, operated, and managed by Bhatt Square Private Limited, a company incorporated under the Companies Act, 2013. All intellectual property, services, branding, software, and operations of Zorameeto are managed by Bhatt Square Private Limited.",
    "These Guidelines state the safety and conduct standards for every Zorameeto user and every part of the Services.",
  ],
  rawText: withCompanyDetails(extractDocumentFromTodo("COMMUNITY GUIDELINES")),
  relatedLinks: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-and-conditions" },
  ],
  sections: [
    {
      title: "1. Purpose",
      body: [
        "Zorameeto is an 18+ social discovery and dating community. These Community Guidelines apply to profiles, photos, Cameo videos, captions, chat, voice and video calls, gifts, Roses, reports, public links and all other activity on the Services. They are designed to protect consent, dignity, safety and lawful use. Violations may lead to content removal, feature limits, wallet review, suspension, termination, evidence preservation or reports to competent authorities.",
      ],
    },
    {
      title: "2. Adults Only — No Minors",
      body: [
        "You must be 18 or older. Do not create an account if you are under 18. Do not upload, request, sexualize, groom, contact for sexual purposes, or share sexual content involving anyone under 18. Do not use childhood sexual images of yourself or anyone else. Any suspected child sexual abuse or exploitation material may be removed, preserved and reported in accordance with applicable law. Accounts suspected of underage use may be immediately suspended pending verification.",
      ],
    },
    {
      title: "3. Consent Is Mandatory",
      body: [
        "Consent must be voluntary, informed and ongoing. A match, Rose, gift, previous call, relationship, marriage, prior sexual conversation or previous consent does not create consent for future messages, calls, sexual content, recording, screenshots, sharing or offline contact. Stop when a person says no, blocks you, withdraws consent or clearly asks you to stop. Do not pressure someone with gifts or money.",
      ],
    },
    {
      title: "4. No Sexual Services, Prostitution or Transactional Intimacy",
      body: [
        "Do not offer, request, advertise, arrange or facilitate prostitution, escort services, paid sex, sexual services or any sexual act in exchange for money, recharge, wallet value, gifts, paid calls, accommodation, travel, employment or other benefit. Do not promise intimacy, sexual content or an offline meeting as consideration for a virtual gift or paid call. Zorameeto gifts and paid calls are platform features, not payment for sexual services.",
      ],
    },
    {
      title: "5. Sexual and Intimate Content",
      body: [
        "Do not upload or publicly distribute pornography, explicit sexual acts, exposed genitals, sexual violence, fetish content intended primarily for sexual gratification, or obscene/unlawful content. Do not send explicit sexual content to another user without lawful and specific consent. Never share non-consensual intimate imagery. Content involving sexual exploitation, coercion or minors is strictly prohibited. Zorameeto may apply stricter content rules than the maximum content permitted by law or an app store.",
      ],
    },
    {
      title: "6. No Non-Consensual Recording or Distribution",
      body: [
        "Do not secretly record, screen-record, screenshot, livestream, publish, forward, threaten to publish or otherwise exploit a private chat, voice call, video call, intimate image or personal information in violation of law or without required consent. Sextortion and threats to release intimate material are zero-tolerance violations and may be reported to law enforcement.",
      ],
    },
    {
      title: "7. No Harassment, Threats or Stalking",
      body: [
        "Do not bully, repeatedly contact after rejection, create new accounts to evade a block, threaten violence, threaten self-harm to control another user, stalk, monitor, intimidate, sexually harass, send repeated unwanted sexual messages or organize targeted abuse. A disagreement or rejection is not permission to retaliate.",
      ],
    },
    {
      title: "8. No Hate or Dehumanizing Abuse",
      body: [
        "Do not attack, threaten, dehumanize or promote hatred or violence against people based on protected characteristics recognized by applicable law or comparable identity characteristics. Context such as education or counterspeech may be considered, but using slurs to target or humiliate a person may be removed.",
      ],
    },
    {
      title: "9. Authenticity and Impersonation",
      body: [
        "Use your own identity and content you have the right to use. Do not impersonate another person, celebrity, government official or Zorameeto employee; use stolen photographs; create deceptive synthetic identities; materially misrepresent your age; or operate romance-scam profiles. Verification badges indicate completion of a Zorameeto process and are not a guarantee of character, criminal history or compatibility.",
      ],
    },
    {
      title: "10. Fraud, Scams and Financial Abuse",
      body: [
        "Do not ask for money through emergency stories, investment schemes, crypto opportunities, guaranteed returns, fake medical claims, customs fees, travel promises, job offers or romance pressure. Do not launder money, cycle wallet funds, manipulate gifts, use stolen payment instruments, arrange chargeback fraud, sell accounts, trade wallet balances or exploit pricing and platform-fee systems. Never ask another user for OTPs, passwords or remote device access.",
      ],
    },
    {
      title: "11. Gifts and Paid Calls",
      body: [
        "Virtual gifts are expressions within Zorameeto. They do not buy affection, a reply, exclusivity, sex, an offline meeting or continued contact. Paid call charges purchase access to the platform's metered call feature subject to recipient availability and connection; they do not purchase the recipient as a person or guarantee any specific conversation. Do not pressure users to recharge, send gifts or remain on a paid call. Coordinated artificial calling or gifting intended to generate fraudulent earnings is prohibited.",
      ],
    },
    {
      title: "12. Human Trafficking and Exploitation",
      body: [
        "Do not recruit, transport, advertise, control or exploit a person for sexual exploitation, forced labour or other trafficking. Do not facilitate pimps, brothels, escort networks or coercive commercial-sex arrangements. Reports indicating trafficking or immediate danger may be escalated to competent authorities.",
      ],
    },
    {
      title: "13. Violence and Dangerous Conduct",
      body: [
        "Do not make credible threats, glorify or encourage serious violence, share instructions to commit violent offences, display graphic gore for shock, or use Zorameeto to coordinate an attack. Content documenting an incident for reporting or awareness may be assessed in context. Immediate threats may be escalated to authorities.",
      ],
    },
    {
      title: "14. Illegal Goods and Activities",
      body: [
        "Do not use Zorameeto to buy, sell, arrange or promote illegal drugs, unlawful weapons, forged documents, stolen property, trafficking, gambling services, money laundering, cybercrime or other unlawful activity. Do not use chat or Cameo to recruit participants for an offence.",
      ],
    },
    {
      title: "15. Privacy, Doxxing and Personal Information",
      body: [
        "Do not publish another person's home address, government identification number, bank details, private phone number, live location or other sensitive personal information without lawful authority and consent. Do not scrape profiles or build external databases of Zorameeto users. Protect your own financial and identity information.",
      ],
    },
    {
      title: "16. Spam, Bots and Platform Manipulation",
      body: [
        "Do not send bulk unsolicited messages, use bots or unauthorized automation, scrape content, create fake engagement, manipulate matches or Cameo reach, mass-create accounts, evade device or account restrictions, interfere with APIs, reverse engineer protected systems in violation of law, distribute malware or probe the Services without authorization.",
      ],
    },
    {
      title: "17. Intellectual Property",
      body: [
        "Only upload content you created or are authorized to use. Do not post copyrighted videos, music, photographs, trademarks or other protected material in a manner that infringes rights. Rights holders may submit a complaint with sufficient identification of the work, the allegedly infringing material and their contact details.",
      ],
    },
    {
      title: "18. Safety for Offline Meetings",
      body: [
        "Use your own judgment before meeting. Meet initially in a public place, tell a trusted person, arrange independent transport, keep control of your phone and money, avoid sharing financial credentials, and leave if you feel unsafe. Do not pressure a user to change locations, consume intoxicants, disclose an address or engage in sexual activity. Zorameeto does not guarantee the conduct of people you meet.",
      ],
    },
    {
      title: "19. Blocking and Reporting",
      body: [
        "Use block when you do not want further interaction. Use report for suspected scams, underage users, impersonation, harassment, sexual exploitation, non-consensual intimate content, trafficking, threats or other violations. Provide accurate information and relevant context. Do not weaponize reports to punish rejection or competitors. False or frivolous reports may themselves violate these Guidelines.",
      ],
    },
    {
      title: "20. Emergency and Criminal Conduct",
      body: [
        "Zorameeto is not an emergency service. If there is an immediate threat to life or safety, contact the appropriate local emergency authority. For in-app reports involving serious criminal conduct, Zorameeto may preserve relevant account, communication, call metadata, transaction and technical records and respond to lawful requests from competent authorities.",
      ],
    },
    {
      title: "21. Moderation and Enforcement",
      body: [
        "Zorameeto may use automated detection, rules, user reports and human review. Depending on severity, history and risk, we may remove content, limit Cameo distribution, disable chat/calling/gifting, block withdrawals pending a fraud review, require verification, suspend or terminate an account, preserve evidence or make legally appropriate reports. Severe violations may result in immediate action without warning. Not every violation can be detected before harm occurs.",
      ],
    },
    {
      title: "22. Wallet and Earnings Enforcement",
      body: [
        "A Community Guidelines violation does not automatically authorize arbitrary confiscation of undisputed money. However, Zorameeto may place a reasonable hold, reverse fraudulent or duplicate ledger entries, account for chargebacks, comply with tax or legal orders, and deny earnings generated through prohibited, fraudulent or manipulated activity. Purchased balance and confirmed legitimate earnings will be handled under the Terms and applicable law.",
      ],
    },
    {
      title: "23. Appeals and Grievances",
      body: [
        "If you believe moderation action was taken in error, use [INSERT IN-APP APPEAL PATH] or email legal@bhattsquare.com. Include the registered account details and relevant report or enforcement reference. Zorameeto will handle grievances and appeals within applicable legal timelines. Repeated duplicate submissions do not accelerate review.",
      ],
    },
    {
      title: "24. Special Priority Categories",
      body: [
        "Reports involving child safety, child sexual exploitation material, non-consensual intimate imagery, sextortion, trafficking, credible threats of serious violence or immediate danger receive priority handling. Zorameeto may disable access to content or accounts while a review is pending where reasonably necessary to prevent ongoing harm.",
      ],
    },
    {
      title: "25. Changes and Relationship to Other Policies",
      body: [
        "These Guidelines may be updated as risks, law and product features evolve. The Privacy Policy explains data processing and the Terms of Service govern the contract, payments, wallet, gifts, calls and account rules. If a feature-specific rule is stricter, the stricter safety rule may apply to that feature, subject to applicable law.",
      ],
    },
    {
      title: "26. Contact",
      body: [
        "Operator: Bhatt Square Private Limited",
        "Registered Office: 1/4, Vishesh Khand 2, Gomti Nagar, Lucknow",
        "CIN - U62099UP2023PTC184782",
        "GSTIN (if applicable):  09AALCB7260P1ZX",
        "Support Email: support@bhattsquare.com",
        "Legal Email: legal@bhattsquare.com",
      ],
    },
  ],
};

export const privacyPolicy: LegalDocument = {
  slug: "privacy-policy",
  eyebrow: "Data Protection",
  title: "Privacy",
  titleAccent: "Policy",
  description:
    "How Zorameeto, a product owned and managed by Bhatt Square Private Limited, collects, uses, shares, protects and retains personal data.",
  effectiveDate: "3 July 2026",
  version: "1.0",
  completionNotice,
  introduction: [
    "Owned & Operated by Bhatt Square Private Limited",
    "Zorameeto is a product and brand owned, developed, operated, and managed by Bhatt Square Private Limited, a company incorporated under the Companies Act, 2013. All intellectual property, services, branding, software, and operations of Zorameeto are managed by Bhatt Square Private Limited.",
    "This Policy explains how Zorameeto collects, uses, shares, protects and retains personal data and how users may exercise applicable rights. It should be read with the Terms of Service and Community Guidelines.",
  ],
  rawText: withCompanyDetails(extractDocumentFromTodo("PRIVACY POLICY")),
  relatedLinks: [
    { label: "Terms of Service", href: "/terms-and-conditions" },
    { label: "Community Guidelines", href: "/community-guidelines" },
  ],
  sections: [
    {
      title: "1. Scope and Who We Are",
      subSections: [
        {
          title: "1.1 Scope",
          body: [
            "This Privacy Policy applies to the Zorameeto mobile application, website, web landing pages, support channels, verification flows, wallet and payment interfaces, Cameo short-video features, matching and connection features, chat, voice and video calling, virtual gifts, notifications, moderation systems, and related services (collectively, the \"Services\").",
          ],
        },
        {
          title: "1.2 Operator details",
          body: [
            "The Services are operated by Bhatt Square Private Limited, having its registered office at 1/4, Vishesh Khand 2, Gomti Nagar, Lucknow (\"Zorameeto\", \"we\", \"us\", or \"our\").",
          ],
        },
        {
          title: "1.3 Data fiduciary role",
          body: [
            "For personal data processed for our own purposes, Zorameeto acts as the data fiduciary or equivalent responsible entity under applicable Indian data protection law. Certain vendors may process data on our behalf under contractual and security obligations.",
          ],
        },
      ],
    },
    {
      title: "2. Personal Data We Collect",
      subSections: [
        {
          title: "2.1 Account and profile data",
          body: [
            "We may collect name, display name, mobile number, email address, date of birth, age confirmation, gender and gender preferences, profile photographs, biography, interests, language, city or broad location, religion or other profile fields voluntarily supplied by you, relationship preferences, account identifiers, and profile settings.",
          ],
        },
        {
          title: "2.2 Verification and KYC data",
          body: [
            "Where verification, withdrawal or regulatory checks are offered or required, we may collect selfie or face-verification inputs, liveness results, verification status, PAN details, bank account details, UPI identifier, tax-related information and supporting documents. Aadhaar should only be collected or used where legally permitted and operationally necessary. We may use specialist verification vendors. We do not publish KYC documents on your public profile.",
          ],
        },
        {
          title: "2.3 User content and communications",
          body: [
            "We process profile content, Cameo videos, thumbnails, previews, captions, likes, Roses, matches, gifts, reports, blocks and chat messages needed to provide the Services. Voice and video call media is transmitted using communications infrastructure. Zorameeto does not record the content of ordinary private voice or video calls by default. If a recording feature is ever introduced, we will provide legally required notice and obtain any required consent before recording. We may retain call metadata such as participants, timestamps, connection status, duration, billing events, quality and abuse signals.",
          ],
        },
        {
          title: "2.4 Device, technical and usage data",
          body: [
            "We may collect device model, operating system, app version, IP address, language, time zone, device and app identifiers, push-notification token, session and authentication events, crash logs, diagnostics, network performance, content delivery events, security logs, feature interactions and approximate location inferred from network information.",
          ],
        },
        {
          title: "2.5 Location",
          body: [
            "If you grant device location permission, we may process precise or approximate location to support discovery, distance or safety features. Permission can be withdrawn through device settings, but some location-dependent functions may stop working. We may also infer an approximate location from IP address for security, localization and fraud prevention.",
          ],
        },
        {
          title: "2.6 Payments, wallet, gifts and paid calls",
          body: [
            "We may process recharge amount, payment status, payment reference, wallet ledger entries, gift type and value, sender and recipient, call pricing, metered call duration, fees, reversals, refunds, withdrawal requests and payout status. Payment card, UPI or banking credentials may be processed directly by an authorized payment service provider; we generally receive transaction references and status rather than complete card credentials.",
          ],
        },
        {
          title: "2.7 Contacts and permissions",
          body: [
            "We only access camera, microphone, photos/media, notifications, location or other device capabilities when required for a feature and subject to operating-system permission controls. We do not claim a right to collect your entire address book merely because you use the Services. If a contact-discovery feature is introduced, a separate feature notice and permission flow may apply.",
          ],
        },
      ],
    },
    {
      title: "3. Why and on What Basis We Process Data",
      subSections: [
        {
          title: "3.1 Service delivery",
          body: [
            "We process data to create and secure accounts; verify age and eligibility; display profiles; recommend or rank profiles and Cameo content; enable matching, Roses, chat, calls and gifts; deliver notifications; maintain wallet ledgers; process recharges, withdrawals and refunds; provide support; and maintain service continuity.",
          ],
        },
        {
          title: "3.2 Consent and permitted uses",
          body: [
            "Where consent is required, we seek consent through clear notices or affirmative actions. You may withdraw consent through available settings or by contacting us, subject to processing necessary for legal compliance, fraud prevention, dispute handling, contract performance or other uses permitted by applicable law. Withdrawal does not invalidate processing lawfully completed before withdrawal.",
          ],
        },
        {
          title: "3.3 Safety, fraud and legal compliance",
          body: [
            "We process data to detect fake accounts, impersonation, scams, payment abuse, underage use, harassment, sexual exploitation, trafficking, non-consensual intimate content, threats and other violations; to investigate reports; to preserve evidence; to enforce our Terms and Community Guidelines; and to respond to lawful orders or requests from courts, law-enforcement and competent authorities.",
          ],
        },
        {
          title: "3.4 Personalization and analytics",
          body: [
            "We may use profile, interaction and usage signals to personalize recommendations, order content, improve product performance, measure feature usage and diagnose technical issues. We may use aggregated or de-identified information for statistics, capacity planning and product research where it is not reasonably linked to an identifiable person.",
          ],
        },
        {
          title: "3.5 Marketing",
          body: [
            "We may send service messages necessary for your account. Promotional communications will be sent in accordance with applicable law and available preferences. You can opt out of promotional communications using the mechanism provided, while continuing to receive essential security, transaction and account notices.",
          ],
        },
      ],
    },
    {
      title: "4. Matching, Ranking and Automated Systems",
      body: [
        "Zorameeto may use automated systems, rules and machine-assisted tools to rank profiles or Cameo content, suggest connections, identify spam, assess abuse signals, detect potentially prohibited media, support face or liveness verification and prioritize reports. These systems can make mistakes. Material enforcement decisions may be reviewed through our grievance or appeal process where required. We do not promise any match, relationship, response, popularity, income or outcome.",
      ],
    },
    {
      title: "5. Public and User-to-User Visibility",
      body: [
        "Information placed on a public or discoverable profile, including profile photographs, display name, biography, selected profile fields and Cameo content, may be visible to other users and, for shared Cameo links, may be displayed on a Zorameeto web preview page. Messages and call participation are visible to the relevant communication participants. Gifts may be shown to the sender and recipient and may be reflected in feature interfaces. Users must not scrape, copy, record, republish or misuse another person's content or personal data.",
      ],
    },
    {
      title: "6. Children and 18+ Service",
      body: [
        "Zorameeto is intended only for persons aged 18 years or older. We do not permit minors to create or use an account. We use age declarations, date-of-birth controls and may use verification or safety measures to identify suspected underage use. If we reasonably believe an account belongs to a minor, we may suspend or delete it and preserve or disclose information where required for child safety or law enforcement. A parent or lawful guardian who believes a minor has used the Services should contact us immediately at support@bhattsquare.com.",
      ],
    },
    {
      title: "7. Sharing of Personal Data",
      subSections: [
        {
          title: "7.1 Service providers",
          body: [
            "We may share data with cloud hosting, database, content delivery, storage, video processing, communications, push notification, crash analytics, customer support, identity or liveness verification, payment, payout and anti-fraud providers strictly for relevant services. Current architecture may include third-party infrastructure used for database/storage, CDN, communications and notifications; vendor names may change as the Services evolve.",
          ],
        },
        {
          title: "7.2 Payment and payout ecosystem",
          body: [
            "Payment processors, banks, UPI participants, payout providers and tax/compliance vendors may receive information necessary to process recharges, refunds, withdrawals, KYC, fraud checks and statutory obligations. Their own privacy notices may also apply to information they independently control.",
          ],
        },
        {
          title: "7.3 Authorities and legal process",
          body: [
            "We may disclose information when required by applicable law, a valid judicial or governmental order, or a lawful request; to protect life or safety; to investigate suspected offences; or to establish, exercise or defend legal claims. We may preserve data in response to a valid preservation request.",
          ],
        },
        {
          title: "7.4 Corporate transactions",
          body: [
            "If Zorameeto undergoes a merger, acquisition, restructuring, financing, sale of assets or insolvency process, data may be disclosed to professional advisers and relevant transaction parties subject to lawful safeguards.",
          ],
        },
        {
          title: "7.5 No sale of personal data as a commodity",
          body: [
            "We do not sell your personal data as a standalone commodity to data brokers. This does not prevent lawful sharing with processors, payment partners, authorities or transaction counterparties for the purposes described in this Policy.",
          ],
        },
      ],
    },
    {
      title: "8. International and Cross-Border Processing",
      body: [
        "Our service providers or technical systems may process data in India or other permitted jurisdictions. Where personal data is transferred outside India, we will comply with applicable restrictions, government notifications and contractual or technical safeguards required by Indian law. Service availability in a country does not mean that all data is stored in that country.",
      ],
    },
    {
      title: "9. Data Retention and Account Deletion",
      body: [
        "We retain personal data only for as long as reasonably necessary for the purposes described, including service delivery, security, fraud prevention, legal compliance and dispute resolution. Account deletion initiates a deletion workflow; some data may remain for a limited backup cycle or longer where retention is legally required or reasonably necessary for fraud, payment reconciliation, tax, safety, litigation, regulatory or law-enforcement purposes. Wallet, payment, payout, KYC and transaction records may be retained for applicable statutory periods. Content already shared by another user outside Zorameeto cannot always be retrieved or deleted by us.",
      ],
    },
    {
      title: "10. Security",
      body: [
        "We use reasonable technical and organizational safeguards appropriate to the nature of the data and risk, which may include access controls, authentication, encrypted transport, secrets management, logging, backup controls, CDN and storage controls, vulnerability remediation and vendor management. No system is completely secure. Users must protect OTPs, passwords, device access and account credentials and promptly report suspected compromise.",
      ],
    },
    {
      title: "11. Personal Data Breaches",
      body: [
        "If a personal data breach occurs, Zorameeto will investigate, contain and remediate it and will provide notifications to the Data Protection Board of India and affected data principals in the manner and within the time required by applicable law and rules then in force. We may use in-app notices, email, SMS or other appropriate channels for breach communications.",
      ],
    },
    {
      title: "12. Your Rights and Duties",
      body: [
        "Subject to applicable Indian law, you may request information about personal data processing, correction, completion, updating or erasure of eligible data, withdraw consent where processing is based on consent, and use our grievance redressal process. You may nominate another individual to exercise applicable rights in the event of death or incapacity where the law provides. You must not impersonate another person, submit false or frivolous grievances, suppress material information or provide inauthentic information where authenticity is required.",
      ],
    },
    {
      title: "13. How to Exercise Privacy Rights",
      body: [
        "Submit a request through [INSERT IN-APP PRIVACY REQUEST PATH] or email legal@bhattsquare.com from your registered contact details. We may verify your identity before acting on a request. We will respond within the period required by applicable law. If a request conflicts with a legal retention duty or active safety/fraud investigation, we may restrict the request to the extent lawfully permitted and explain the applicable basis where required.",
      ],
    },
    {
      title: "14. Cookies, SDKs and Similar Technologies",
      body: [
        "Owned & Operated by Bhatt Square Private Limited",
        "Our website and app may use local storage, cookies, software development kits and similar technologies for authentication, preferences, security, analytics, communications, media delivery and performance. Where legally required, we will provide consent or preference controls. Disabling necessary technologies may impair core functions.",
      ],
    },
    {
      title: "15. Third-Party Links and Services",
      body: [
        "The Services may contain links or integrations operated by third parties. Zorameeto is not responsible for independent third-party privacy practices. You should review the privacy notice of a payment provider, identity provider or external website when interacting directly with that service.",
      ],
    },
    {
      title: "16. Changes to this Policy",
      body: [
        "We may update this Policy to reflect changes in law, technology, vendors or Services. Material changes will be notified through the app, website or registered contact channel as appropriate. The \"Effective Date\" identifies the current published version. Continued use after an update is subject to applicable consent and notice requirements.",
      ],
    },
    {
      title: "17. Governing Law",
      body: [
        "This Policy is governed by the laws of India. Statutory rights and remedies available under applicable data protection, consumer, information technology or other mandatory law are not excluded by this Policy.",
      ],
    },
    {
      title: "18. Grievance and Data Protection Contact",
      body: [
        "Operator: Bhatt Square Private Limited",
        "Registered Office: 1/4, Vishesh Khand 2, Gomti Nagar, Lucknow",
        "CIN - U62099UP2023PTC184782",
        "GSTIN (if applicable):  09AALCB7260P1ZX",
        "Support Email: support@bhattsquare.com",
        "Legal Email: legal@bhattsquare.com",
        "We will acknowledge and resolve grievances within timelines required by applicable law. Where applicable, a data principal may approach the Data Protection Board of India after using the grievance process provided by Zorameeto.",
      ],
    },
  ],
};

export const termsOfService: LegalDocument = {
  slug: "terms-and-conditions",
  eyebrow: "Platform Terms",
  title: "Terms of",
  titleAccent: "Service",
  description:
    "Terms for Zorameeto, a product owned and operated by Bhatt Square Private Limited, including accounts, paid features and disputes.",
  effectiveDate: "3 July 2026",
  version: "1.0",
  completionNotice,
  introduction: [
    "Owned & Operated by Bhatt Square Private Limited",
    "Zorameeto is a product and brand owned, developed, operated, and managed by Bhatt Square Private Limited, a company incorporated under the Companies Act, 2013. All intellectual property, services, branding, software, and operations of Zorameeto are managed by Bhatt Square Private Limited.",
    "These Terms govern access to and use of Zorameeto and establish rules for accounts, paid features, wallet balances, virtual gifts, paid voice/video calls, recipient earnings, withdrawals, user content, moderation and disputes.",
  ],
  rawText: withCompanyDetails(extractDocumentFromTodo("TERMS OF SERVICE")),
  relatedLinks: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Community Guidelines", href: "/community-guidelines" },
  ],
  sections: [
    {
      title: "1. Acceptance and Contracting Party",
      body: [
        "These Terms of Service (\"Terms\") form a binding electronic contract between you and Bhatt Square Private Limited, owner and operator of Zorameeto. By creating an account, checking the 18+ confirmation, accessing or using the Services, or purchasing a paid feature, you agree to these Terms, the Privacy Policy and Community Guidelines. If you do not agree, do not use the Services.",
      ],
    },
    {
      title: "2. Eligibility: Strictly 18+",
      body: [
        "You must be at least 18 years old, legally capable of entering a contract under applicable law, and not prohibited from using the Services. You represent that your date of birth and age declaration are truthful. Zorameeto may request age, face, liveness, identity or KYC verification. Suspected underage accounts may be suspended or deleted without prior notice. Zorameeto is not a service for children.",
      ],
    },
    {
      title: "3. Nature of Zorameeto",
      body: [
        "Zorameeto is a social discovery and dating platform that may provide profile discovery, matching, Roses, Cameo short videos, chat, voice and video calls, virtual gifts, wallet functionality, verification and related features. Zorameeto does not provide marriage brokerage, escort services, prostitution services, sexual services, employment, financial investment, gambling or guaranteed introductions. We do not guarantee the identity, intentions, truthfulness, compatibility, availability, conduct, response, match, relationship or offline safety of any user.",
      ],
    },
    {
      title: "4. Accounts and Security",
      body: [
        "You may maintain only accounts legitimately controlled by you and must provide accurate information. You must not sell, rent, transfer or share an account; create deceptive duplicate accounts; evade a suspension; use unauthorized automation; or allow another person to impersonate you. You are responsible for activity conducted through your device or credentials until you notify us of suspected compromise. OTPs and authentication credentials must be kept confidential.",
      ],
    },
    {
      title: "5. Profile, Matching, Roses and Cameo",
      body: [
        "Profile visibility, recommendations, ranking, matches, Roses and Cameo distribution may be determined by user actions, preferences, availability, safety controls and automated systems. A Rose is an in-app expression of interest and creates no contractual, romantic or other obligation for the recipient. Cameo content may be encoded, compressed, transcoded, cached and distributed through content-delivery infrastructure. Shared Cameo links may generate a public or semi-public web preview. We may limit reach, remove content or disable sharing for safety, legal or technical reasons.",
      ],
    },
    {
      title: "6. Chat, Voice Calls and Video Calls",
      subSections: [
        {
          title: "6.1 Communications",
          body: [
            "The Services may permit users to communicate through chat, voice calls and video calls. Availability of these features may depend on eligibility, wallet balance, recipient availability, network conditions, device compatibility and other technical or operational factors. Zorameeto does not guarantee uninterrupted or error-free communication services.",
          ],
        },
        {
          title: "6.2 Paid Calls and Call Charges",
          body: [
            "Certain voice and video calls may be chargeable. The applicable Audio and Video Call rates are available in the Call Rates section of the App and may also be displayed elsewhere within the Services.",
            "By initiating a paid call, you acknowledge and agree to the applicable per-minute charges.",
            "Charges apply only after the call is successfully connected. Ringing, unanswered, rejected, cancelled or failed call attempts are not charged, unless expressly stated otherwise within the App.",
            "Call charges are calculated using Zorameeto's server-side billing system based on the connected call duration. The server-side transaction records shall be the authoritative record for billing purposes in the event of any discrepancy.",
          ],
        },
        {
          title: "6.3 Wallet Balance",
          body: [
            "Users are responsible for maintaining sufficient wallet balance before initiating a paid call. If the available wallet balance becomes insufficient during a call, the call may automatically end and charges will apply only for the connected duration already consumed.",
          ],
        },
        {
          title: "6.4 Call Rate Changes",
          body: [
            "Call rates may change from time to time at Zorameeto's sole discretion. The latest rates displayed within the App shall always apply. Continued use of paid calling features after any pricing update constitutes acceptance of the revised rates.",
          ],
        },
        {
          title: "6.5 Call Interruptions",
          body: [
            "Calls may disconnect due to network failure, internet connectivity, device issues, recipient action, insufficient wallet balance, service outages or other technical reasons beyond Zorameeto's control.",
            "Zorameeto does not guarantee uninterrupted or latency-free calls. Refunds will not be provided solely due to poor network quality or connectivity issues unless a verified billing error has occurred.",
          ],
        },
        {
          title: "6.6 Billing Disputes and Refunds",
          body: [
            "If you believe you have been charged incorrectly, you must contact Zorameeto Support within 7 days of the transaction. Verified billing errors may be corrected by wallet adjustment, reversal or refund at Zorameeto's sole discretion in accordance with applicable law.",
          ],
        },
        {
          title: "6.7 Recording and Screenshots",
          body: [
            "Zorameeto does not record ordinary private voice or video calls by default. Users must not secretly record, screen-record, capture screenshots, distribute or misuse another user's private communications without their knowledge or as prohibited by applicable law.",
          ],
        },
        {
          title: "6.8 Acceptable Use",
          body: [
            "Paid calling services must not be used for unlawful activities, prostitution, escort services, solicitation of sexual services, human trafficking, harassment, fraud, blackmail, extortion or any activity prohibited by applicable law or these Terms.",
            "Zorameeto reserves the right to suspend, restrict or permanently terminate accounts involved in such activities without prior notice and may cooperate with law enforcement authorities where required by law.",
          ],
        },
        {
          title: "6.9 Age Requirement",
          body: [
            "Voice calls, video calls and all paid communication features are available only to users who are 18 years of age or older. By using these features, you represent and warrant that you are at least 18 years old.",
          ],
        },
      ],
    },
    {
      title: "7. Wallet and Recharges",
      subSections: [
        {
          title: "7.1 Limited-purpose balance",
          body: [
            "The Zorameeto wallet or balance is a closed or limited-purpose in-app ledger for eligible Zorameeto services, subject to the actual payment structure implemented by the operator and applicable Reserve Bank of India requirements. It is not a bank account, deposit, investment, cryptocurrency or interest-bearing product. Unless a feature expressly provides an eligible creator/recipient payout, purchased or promotional user balance is not cash, has no interest and is not transferable between users.",
          ],
        },
        {
          title: "7.2 Recharges",
          body: [
            "Users may add money through supported payment methods and authorized payment partners. Taxes and charges will be shown or applied as required by law and the checkout flow. A recharge is complete only after confirmed payment and wallet credit. Zorameeto may delay or reverse a credit where a payment is failed, reversed, charged back, duplicated, fraudulent or credited in error.",
          ],
        },
        {
          title: "7.3 Promotional balance",
          body: [
            "Promotional, bonus or goodwill credits may have separate validity, usage and withdrawal restrictions disclosed with the promotion. Unless expressly stated, promotional credits are non-withdrawable and may be revoked for fraud or abuse.",
          ],
        },
        {
          title: "7.4 Wallet errors",
          body: [
            "Users should report an alleged wallet discrepancy promptly with the relevant transaction details. Zorameeto may inspect server records, payment references, call records and ledger events and correct a proven error. No clause limits a consumer remedy that cannot lawfully be excluded.",
          ],
        },
      ],
    },
    {
      title: "8. Virtual Gifts",
      subSections: [
        {
          title: "8.1 Nature of gifts",
          body: [
            "Virtual gifts are digital in-app expressions or features. They are not physical goods, securities, deposits, legal tender or cryptocurrency and do not give the sender ownership of or a claim against the recipient. The purchase price, wallet debit and any recipient earning treatment are governed by the interface and these Terms.",
          ],
        },
        {
          title: "8.2 Finality and misuse",
          body: [
            "A successfully delivered virtual gift is generally final and non-refundable because the digital feature is consumed on delivery, except where required by law or where Zorameeto verifies duplicate charging, failed delivery, unauthorized payment attributable to a platform defect, or another qualifying technical error. Regret, changed relationship status, lack of reply or dissatisfaction with a recipient does not by itself create a refund right.",
          ],
        },
        {
          title: "8.3 No off-platform consideration",
          body: [
            "A gift must never be used to buy sexual services, illegal content, drugs, gambling, money laundering, extortion, an offline meeting, a relationship, a promise of intimacy or any other unlawful or prohibited consideration. Users must not request or promise such consideration in exchange for a gift.",
          ],
        },
      ],
    },
    {
      title: "9. Recipient Earnings, Platform Fees and Verification",
      subSections: [
        {
          title: "9.1 No automatic ownership of gross spend",
          body: [
            "The amount spent by a sender on a gift or paid call is not automatically the recipient's property. Zorameeto may apply taxes, payment charges, refunds, chargebacks, promotional adjustments and a platform fee or revenue share according to the pricing and earning rules displayed in the app or admin-configured program terms.",
          ],
        },
        {
          title: "9.2 Verified earning eligibility",
          body: [
            "A user is eligible to accrue withdrawable recipient earnings only if the user satisfies the verification, age, KYC, payout, tax, bank/UPI and compliance requirements specified by Zorameeto. A verification badge is not a government identity guarantee and does not mean Zorameeto endorses the user.",
          ],
        },
        {
          title: "9.3 Unverified users",
          body: [
            "Unless Zorameeto expressly displays a different earning rule, an unverified user has no vested right to recipient earnings from gifts or paid calls and up to 100% of the relevant gross amount may be treated as platform revenue/fee. The app may display an informational or pending amount to encourage verification; such display is conditional, non-withdrawable and does not become a debt owed to the user unless and until the stated eligibility conditions are satisfied and Zorameeto confirms the amount as withdrawable. The exact in-app disclosure must match the configured commercial rule.",
          ],
        },
        {
          title: "9.4 Platform fee changes",
          body: [
            "Platform fee percentages, recipient shares and pricing may be changed prospectively. The applicable rule for a transaction is the rule disclosed or configured for that transaction at the relevant time. Zorameeto must not retroactively reduce an already-confirmed withdrawable earning except for fraud, chargeback, tax, legal process or correction of a genuine ledger error.",
          ],
        },
        {
          title: "9.5 Withholding and taxes",
          body: [
            "Recipient earnings may be subject to tax deduction at source, GST treatment, reporting, withholding or other deductions as required by Indian law. Users are responsible for their own tax obligations. Zorameeto may request PAN or other information and may withhold or delay payouts where required for tax or regulatory compliance.",
          ],
        },
      ],
    },
    {
      title: "10. Withdrawals and Payouts",
      body: [
        "Eligible users may request withdrawal of confirmed withdrawable earnings through supported bank or UPI payout methods, subject to minimum thresholds, KYC, tax checks, anti-fraud review, payment-provider availability and applicable law. Estimated payout times are not guaranteed. Zorameeto may place a reasonable hold on a payout involving suspected fraud, chargebacks, stolen payment instruments, identity mismatch, sanctions or legal process. We will not confiscate undisputed amounts merely because a user makes a complaint or exercises a statutory right.",
      ],
    },
    {
      title: "11. Refunds, Cancellations and Chargebacks",
      body: [
        "Recharge, call and digital gift transactions are subject to the refund rules in these Terms and the transaction interface. Zorameeto will provide legally required refunds and correct proven billing errors. Users must not initiate a false chargeback after consuming Services. A payment dispute may result in a temporary wallet adjustment or account restriction while investigated. Refunds, when approved, may be returned to the original payment method or through another lawful method depending on payment-provider capability.",
      ],
    },
    {
      title: "12. User Content Licence and Ownership",
      body: [
        "You retain ownership of original content you create, subject to rights of others. You grant Zorameeto a worldwide, non-exclusive, royalty-free, sublicensable licence, for the period your content is hosted and for reasonable backup/legal retention thereafter, to host, store, reproduce, encode, transcode, cache, adapt for technical formatting, display, distribute and communicate your content solely to operate, secure, improve, moderate and promote the Services or the specific content-sharing feature. This licence does not transfer ownership of your content to Zorameeto. You represent that you have the rights and permissions necessary to upload the content.",
      ],
    },
    {
      title: "13. User-Generated Content / Community Standards",
      body: [
        "Users must not post, transmit, or share objectionable, abusive, threatening, hateful, sexually explicit, illegal, harassing, or otherwise inappropriate content.",
        "Users may report objectionable content and block abusive users within Zorameeto.",
        "Zorameeto reviews reports of objectionable content and aims to take appropriate action within 24 hours, including removal of violating content and suspension or termination of users responsible for serious or repeated violations.",
      ],
    },
    {
      title: "14. Prohibited Conduct and Content",
      body: [
        "You must comply with the Community Guidelines. Prohibited conduct includes underage use; impersonation; fraud; romance scams; extortion; sextortion; trafficking; prostitution or solicitation of sexual services; sale or purchase of illegal goods; money laundering; gambling; threats; stalking; doxxing; harassment; hate content; non-consensual intimate imagery; child sexual abuse or exploitation material; obscene or unlawful content; copyright infringement; malware; scraping; reverse engineering where prohibited by law; botting; fake engagement; payment manipulation; and attempts to bypass safety, KYC, pricing or platform-fee controls.",
      ],
    },
    {
      title: "14. Offline Meetings and Personal Safety",
      body: [
        "Interactions and offline meetings are at the users' own discretion and risk. Exercise caution, keep early meetings in public places, tell a trusted person, arrange independent transport, protect financial and identity information, and use report/block tools when concerned. Never send money or gifts based on pressure, emergency stories or promises of romance or intimacy. Zorameeto does not conduct a criminal background check on every user unless expressly stated for a specific program.",
      ],
    },
    {
      title: "15. Moderation, Reports and Enforcement",
      body: [
        "Zorameeto may use user reports, automated tools and human review to investigate content or conduct. We may warn, limit features, reduce distribution, remove content, freeze disputed wallet activity, suspend or terminate accounts, preserve evidence and report matters to competent authorities where appropriate. Enforcement may occur without prior notice when reasonably necessary for safety, fraud prevention, legal compliance or prevention of ongoing harm. We may provide a grievance or appeal route as required by law. Moderation is not a guarantee that all violations will be detected.",
      ],
    },
    {
      title: "16. Intermediary Status and Legal Requests",
      body: [
        "To the extent Zorameeto hosts or transmits third-party information as an intermediary under Indian law, Zorameeto seeks to operate subject to the Information Technology Act, 2000 and applicable intermediary rules. Nothing in these Terms requires Zorameeto to knowingly host unlawful content. We may remove or disable access to information, preserve records and cooperate with lawful orders or requests in accordance with applicable law. Users remain responsible for their own content and conduct.",
      ],
    },
    {
      title: "17. Intellectual Property",
      body: [
        "The Zorameeto name, logos, app design, software, databases, proprietary ranking logic, graphics and other platform materials are owned by or licensed to the operator and are protected by applicable intellectual property law. Except for rights expressly granted, no licence is given to copy, modify, distribute, sell or exploit Zorameeto technology or branding.",
      ],
    },
    {
      title: "18. Third-Party Services",
      body: [
        "The Services may depend on cloud, database, CDN, communications, push notification, payment, payout, app-store, identity-verification and other providers. Third-party terms may apply to your direct use of those services. Zorameeto is not responsible for an independent third party's acts outside Zorameeto's reasonable control, but this clause does not remove liability that applicable law imposes on Zorameeto.",
      ],
    },
    {
      title: "19. Service Changes and Availability",
      body: [
        "We may add, modify, suspend or discontinue features, pricing or technical architecture for security, legal, commercial or operational reasons. We do not guarantee continuous availability, a particular recommendation algorithm, unlimited reach or perpetual availability of any free feature. Material changes affecting paid entitlements will be handled consistently with applicable law and disclosed as appropriate.",
      ],
    },
    {
      title: "20. Disclaimers",
      body: [
        "To the maximum extent permitted by law, the Services are provided on an \"as available\" basis. Zorameeto does not warrant that every user is truthful, safe, compatible or free from criminal history; that moderation will detect every violation; that communications will be uninterrupted; or that use will result in matches, relationships, income or popularity. Nothing excludes statutory guarantees or consumer rights that cannot lawfully be excluded.",
      ],
    },
    {
      title: "21. Limitation of Liability",
      body: [
        "To the maximum extent permitted by applicable law, Zorameeto will not be liable for indirect, incidental, special or consequential losses arising from user conduct, failed relationships, voluntary offline meetings, user-created content, third-party networks or events beyond reasonable control. Where liability may lawfully be limited, Zorameeto's aggregate contractual liability for a claim will not exceed the amount paid by the claimant to Zorameeto for the specific paid Service giving rise to the claim during the six months preceding the event. This limitation does not apply where liability cannot be excluded or limited under Indian law, including liability arising from fraud, wilful misconduct or other mandatory statutory liability.",
      ],
    },
    {
      title: "22. Indemnity",
      body: [
        "To the extent permitted by law, you agree to indemnify Zorameeto and its officers against third-party claims, losses and reasonable costs arising from your unlawful content, infringement of third-party rights, fraud, prohibited commercial activity or material breach of these Terms. This clause does not require a consumer to indemnify Zorameeto for Zorameeto's own negligence, statutory breach or wrongful conduct.",
      ],
    },
    {
      title: "23. Suspension, Termination and Deletion",
      body: [
        "You may request account deletion through the available account controls. Zorameeto may suspend or terminate an account for material breach, safety risk, fraud, underage use, unlawful conduct, repeated violations or legal requirement. On termination, access to features may cease. Purchased user balance and confirmed recipient earnings will be handled according to applicable law, fraud/chargeback adjustments and these Terms; termination is not a licence to arbitrarily confiscate undisputed money. Certain records may be retained for legal, tax, payment, fraud and safety purposes.",
      ],
    },
    {
      title: "24. Grievance Redressal",
      body: [
        "Grievance Officer: [INSERT FULL NAME]",
        "Address: 1/4, Vishesh Khand 2, Gomti Nagar, Lucknow",
        "Email: legal@bhattsquare.com",
        "Support: support@bhattsquare.com",
        "Submit complaints with your registered account details, a description and relevant transaction/report ID. Zorameeto will acknowledge and resolve grievances within the timelines required by applicable Indian law. Complaints involving intimate imagery, sexual exploitation, child safety or immediate danger will be prioritized and handled according to applicable legal duties.",
      ],
    },
    {
      title: "25. Governing Law, Jurisdiction and Disputes",
      body: [
        "These Terms are governed by the laws of India. The parties should first use Zorameeto's grievance process for a good-faith attempt to resolve a dispute. Subject to mandatory consumer jurisdiction and other non-waivable rights, courts at Lucknow, Uttar Pradesh, India will have jurisdiction. Nothing in these Terms prevents a consumer from approaching a competent Consumer Commission or other statutory forum where the law grants that right. Do not insert a clause claiming absolute immunity from court proceedings; such a clause may be unenforceable.",
      ],
    },
    {
      title: "26. Electronic Communications",
      body: [
        "You consent to receive legally permitted account, security, transaction, wallet, call, gift, verification and policy communications electronically through the app, push notification, SMS, email or other registered channel. Electronic acceptance and records may be used as evidence to the extent permitted by applicable law.",
      ],
    },
    {
      title: "27. Changes to Terms",
      body: [
        "We may update these Terms for legal, safety, technical or commercial reasons. Material changes will be notified through reasonable channels. Where applicable law requires fresh consent, we will seek it. Changes apply prospectively from the stated effective date unless law requires otherwise.",
      ],
    },
    {
      title: "28. Severability, No Waiver and Entire Agreement",
      body: [
        "If a provision is held unenforceable, it will be limited or severed to the minimum extent necessary and the remaining provisions will continue. Failure to enforce a provision is not a waiver. These Terms, together with the Privacy Policy, Community Guidelines and transaction-specific disclosures, form the agreement governing the Services.",
      ],
    },
    {
      title: "29. Contact",
      body: [
        "Operator: Bhatt Square Private Limited",
        "Registered Office: 1/4, Vishesh Khand 2, Gomti Nagar, Lucknow",
        "CIN - U62099UP2023PTC184782",
        "GSTIN (if applicable):  09AALCB7260P1ZX",
        "Support Email: support@bhattsquare.com",
        "Legal Email: legal@bhattsquare.com",
      ],
    },
  ],
};