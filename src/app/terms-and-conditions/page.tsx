import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Review the rules for using ZoraMeeto dating services, memberships, safety tools, and mobile app.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "These Terms & Conditions govern your access to and use of ZoraMeeto websites, mobile apps, memberships, events, support channels, and related services.",
      "By creating an account, browsing, subscribing, attending an event, or using any part of ZoraMeeto, you agree to these terms and our Privacy Policy.",
      "If you do not agree with these terms, you must not use the service.",
    ],
  },
  {
    title: "2. Eligibility",
    body: [
      "You must be at least 18 years old and legally able to enter into a binding agreement.",
      "You may not use ZoraMeeto if you have been removed, banned, or restricted from the platform unless we provide written permission.",
      "You are responsible for complying with laws that apply to you based on your location and use of the service.",
    ],
  },
  {
    title: "3. Account Responsibilities",
    body: [
      "You agree to provide accurate, current, and complete information and to keep your profile updated.",
      "You are responsible for keeping your login credentials confidential and for activity that occurs through your account.",
      "You may not create fake profiles, impersonate another person, misrepresent your identity, or create accounts for anyone else without authorization.",
    ],
  },
  {
    title: "4. Member Conduct",
    body: [
      "You agree to treat other members with respect and to use ZoraMeeto for lawful, genuine, and serious dating purposes.",
      "You may not harass, threaten, exploit, stalk, defame, discriminate, solicit money from, or otherwise harm another member.",
      "You may not post or send illegal, explicit, abusive, misleading, hateful, violent, infringing, spam, or commercial content.",
      "You may not scrape, copy, sell, export, or misuse member profiles, photos, messages, or platform data.",
      "We may investigate reports and take action including warnings, content removal, feature limits, suspension, termination, or law enforcement referral.",
    ],
  },
  {
    title: "5. Matching, Introductions, and Safety",
    body: [
      "ZoraMeeto may use preferences, profile details, activity, verification, location, and compatibility signals to suggest matches or introductions.",
      "We do not guarantee a match, relationship, date, compatibility outcome, membership acceptance, event access, or specific result.",
      "You are responsible for your own decisions and interactions. Use caution when sharing personal information, meeting in person, or making commitments.",
      "Report suspicious, unsafe, or policy-violating behavior through the app or by contacting support.",
    ],
  },
  {
    title: "6. Subscriptions, Payments, and Promotions",
    body: [
      "Some features may require a paid plan, in-app purchase, event ticket, upgrade, or invitation-based membership.",
      "Prices, features, eligibility, and availability may change. Taxes, payment processing fees, and platform store terms may also apply.",
      "Subscriptions may renew automatically unless cancelled before the renewal date through the payment method, app store, or account settings available to you.",
      "Unless required by law or stated in a specific offer, payments are non-refundable after access to paid services begins.",
      "Promotions, trials, rewards, or referral benefits may include additional rules, limits, expiration dates, and eligibility requirements.",
    ],
  },
  {
    title: "7. Earn Money and Rewards Features",
    body: [
      "If ZoraMeeto offers referral, creator, ambassador, affiliate, or other earn-money features, participation is subject to additional program rules.",
      "Rewards are not guaranteed income. Amounts, eligibility, verification, taxes, payout schedules, fraud checks, and program availability may change.",
      "You may not use misleading claims, spam, fake accounts, paid manipulation, or unauthorized advertising to earn rewards.",
    ],
  },
  {
    title: "8. User Content",
    body: [
      "You retain ownership of content you submit, including photos, prompts, profile text, messages, and feedback.",
      "You grant ZoraMeeto a worldwide, non-exclusive, royalty-free license to host, store, reproduce, display, moderate, adapt, and distribute your content as needed to operate, improve, promote, and protect the service.",
      "You represent that you have the rights needed to submit your content and that your content does not violate laws or third-party rights.",
      "We may remove or restrict content that violates these terms, creates safety concerns, or harms the member experience.",
    ],
  },
  {
    title: "9. Intellectual Property",
    body: [
      "ZoraMeeto, including its brand, software, design, visuals, content, features, algorithms, and platform experience, is owned by ZoraMeeto or its licensors.",
      "You may not copy, modify, reverse engineer, distribute, sell, lease, or create derivative works from the service unless allowed by law or authorized in writing.",
    ],
  },
  {
    title: "10. Third-Party Services",
    body: [
      "The service may link to or integrate third-party services such as app stores, payment processors, analytics providers, maps, communications tools, verification vendors, and social platforms.",
      "Third-party services are governed by their own terms and policies. ZoraMeeto is not responsible for third-party content, practices, or availability.",
    ],
  },
  {
    title: "11. Termination",
    body: [
      "You may stop using ZoraMeeto or request account deletion at any time.",
      "We may suspend, restrict, or terminate access if we believe you violated these terms, created risk, misused the service, or caused harm to members, ZoraMeeto, or third parties.",
      "Sections that by nature should survive termination will continue to apply, including payment obligations, intellectual property, disclaimers, limits of liability, and dispute provisions.",
    ],
  },
  {
    title: "12. Disclaimers",
    body: [
      "ZoraMeeto is provided on an as-is and as-available basis. We do not promise uninterrupted, error-free, secure, or always available service.",
      "We do not guarantee member identity, conduct, compatibility, background, intentions, or offline behavior.",
      "To the maximum extent permitted by law, we disclaim warranties of merchantability, fitness for a particular purpose, title, and non-infringement.",
    ],
  },
  {
    title: "13. Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, ZoraMeeto will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages.",
      "Our total liability for claims relating to the service will be limited to the amount you paid to ZoraMeeto in the three months before the event giving rise to the claim, or INR 5,000 if you paid nothing, unless applicable law requires otherwise.",
    ],
  },
  {
    title: "14. Changes to the Service or Terms",
    body: [
      "We may update, pause, remove, or change features, pricing, membership criteria, rewards, and platform rules from time to time.",
      "We may revise these terms when needed. If changes are material, we will take reasonable steps to notify you. Continued use after the effective date means you accept the revised terms.",
    ],
  },
  {
    title: "15. Contact",
    body: [
      "For support, safety reports, billing questions, or legal notices, contact us at support@zorameeto.com.",
      "These terms are a professional draft for website publication and should be reviewed by qualified legal counsel before launch.",
    ],
  },
];

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative pt-32 pb-14 px-6 overflow-hidden bg-gradient-mesh">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-primary/5 blur-[110px] rounded-full z-0"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-6 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Legal</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-text-main leading-tight">
            Terms & <span className="text-primary italic font-light">Conditions.</span>
          </h1>
          <p className="text-base md:text-lg text-text-muted leading-relaxed font-medium max-w-2xl mx-auto">
            These terms explain how to use ZoraMeeto safely and respectfully across our dating app, memberships, and online services.
          </p>
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-text-muted">
            Last updated: June 15, 2026
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-10">
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-text-main">On This Page</p>
              <nav className="space-y-3">
                {sections.slice(0, 9).map((section) => (
                  <a
                    key={section.title}
                    href={`#${section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                    className="block text-[10px] uppercase tracking-[0.18em] font-bold text-text-muted hover:text-primary transition-colors"
                  >
                    {section.title.replace(/^\d+\.\s/, "")}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="space-y-8">
            <div className="rounded-[2rem] border border-border bg-surface-soft/40 p-8">
              <p className="text-sm md:text-base text-text-muted leading-relaxed font-medium">
                Please read these terms carefully. They work together with our{" "}
                <Link href="/privacy-policy" className="text-primary font-bold hover:underline">
                  Privacy Policy
                </Link>
                , safety practices, subscription details, and any rules shown inside the app.
              </p>
            </div>

            {sections.map((section) => (
              <section
                key={section.title}
                id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                className="rounded-[2rem] border border-border bg-background p-8 shadow-sm"
              >
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-text-main mb-5">
                  {section.title}
                </h2>
                <ul className="space-y-4">
                  {section.body.map((item) => (
                    <li key={item} className="flex gap-3 text-sm md:text-base text-text-muted leading-relaxed font-medium">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}
