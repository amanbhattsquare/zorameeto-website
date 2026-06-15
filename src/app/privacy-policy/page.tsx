import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read how ZoraMeeto collects, uses, protects, and shares information in the app.",
};

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "Account information, such as your name, age, date of birth, gender, email address, phone number, city, photos, preferences, and profile details.",
      "Dating and compatibility information, including interests, lifestyle choices, relationship goals, prompts, matching preferences, interactions, and in-app activity.",
      "Verification and safety information, which may include identity checks, moderation reports, device signals, fraud prevention information, and content you submit for review.",
      "Payment and subscription information, such as plan type, transaction status, billing records, and payment processor references. Complete card or banking details are handled by our payment providers.",
      "Technical information, including IP address, device identifiers, browser type, operating system, app version, approximate location, cookies, analytics events, crash logs, and security logs.",
    ],
  },
  {
    title: "2. How We Use Information",
    body: [
      "To create and manage your account, show your profile, provide matching features, enable conversations, and personalize your experience.",
      "To verify profiles, detect spam, prevent fraud, investigate abuse, enforce platform rules, and protect members from harmful or deceptive activity.",
      "To process purchases, manage subscriptions, provide customer support, send service updates, and respond to your requests.",
      "To improve ZoraMeeto, including analytics, product testing, feature development, app performance, safety tooling, and member experience research.",
      "To send marketing or promotional communications where permitted. You can opt out of non-essential marketing messages at any time.",
    ],
  },
  {
    title: "3. Profile Visibility and Member Interactions",
    body: [
      "Your profile information may be visible to other members according to your settings, match eligibility, location, membership tier, and product design.",
      "Messages, reactions, profile views, match activity, and reports may be processed to deliver the service and maintain platform safety.",
      "Do not share sensitive information in your public profile or conversations unless you are comfortable with the risk of disclosure by the recipient.",
    ],
  },
  {
    title: "4. How We Share Information",
    body: [
      "With other members, as needed to provide dating, matching, profile discovery, chat, and interaction features.",
      "With vendors and service providers that support hosting, analytics, identity verification, payments, customer support, fraud prevention, communications, and security.",
      "With law enforcement, regulators, courts, or other parties when we believe disclosure is required by law or necessary to protect rights, safety, or platform integrity.",
      "In connection with a business transaction, such as a merger, financing, acquisition, reorganization, or sale of assets.",
      "We do not sell your personal information as a core business model. If that changes, we will update this policy and provide required choices.",
    ],
  },
  {
    title: "5. Cookies and Similar Technologies",
    body: [
      "We may use cookies, pixels, SDKs, and local storage to keep you signed in, remember preferences, measure traffic, improve performance, prevent fraud, and understand feature usage.",
      "You can manage cookies through your browser settings. Some features may not work correctly if essential cookies or device permissions are disabled.",
    ],
  },
  {
    title: "6. Data Retention",
    body: [
      "We keep information for as long as needed to provide the service, comply with legal obligations, resolve disputes, enforce agreements, maintain security, and support legitimate business needs.",
      "When you delete your account, we begin deleting or de-identifying account data unless retention is required for safety, legal, fraud prevention, tax, payment, or dispute reasons.",
    ],
  },
  {
    title: "7. Your Choices and Rights",
    body: [
      "You may update profile details, notification preferences, privacy settings, and certain account information from within the app or by contacting support.",
      "Depending on your location, you may have rights to access, correct, delete, restrict, object to, or receive a copy of your personal information.",
      "You may request account deletion or privacy assistance by contacting us. We may need to verify your identity before completing certain requests.",
      "You can opt out of promotional emails by using the unsubscribe link or contacting support. Service and safety notices may still be sent.",
    ],
  },
  {
    title: "8. Security",
    body: [
      "We use administrative, technical, and organizational safeguards designed to protect personal information against unauthorized access, misuse, loss, and alteration.",
      "No online service can guarantee absolute security. You are responsible for using a strong password, protecting your login credentials, and reporting suspicious activity.",
    ],
  },
  {
    title: "9. Children and Age Requirements",
    body: [
      "ZoraMeeto is intended for adults only. You must be at least 18 years old to use the service.",
      "We do not knowingly collect personal information from anyone under 18. If we learn that a minor has created an account, we may remove the account and related information.",
    ],
  },
  {
    title: "10. International Use",
    body: [
      "Your information may be processed and stored in countries where we or our service providers operate. Privacy laws may differ from those in your location.",
      "Where required, we use appropriate safeguards for international transfers of personal information.",
    ],
  },
  {
    title: "11. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. If changes are material, we will take reasonable steps to notify you through the service or other appropriate channels.",
      "Your continued use of ZoraMeeto after an update means the revised policy applies from the stated effective date.",
    ],
  },
  {
    title: "12. Contact Us",
    body: [
      "For privacy questions, account requests, or safety concerns, contact us at privacy@zorameeto.com.",
      "This policy is a professional draft for website publication and should be reviewed by qualified legal counsel before launch.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative pt-32 pb-14 px-6 overflow-hidden bg-gradient-mesh">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[420px] h-[420px] bg-primary/5 blur-[110px] rounded-full z-0"></div>
        <div className="max-w-4xl mx-auto relative z-10 text-center space-y-6 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Legal</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-text-main leading-tight">
            Privacy <span className="text-primary italic font-light">Policy.</span>
          </h1>
          <p className="text-base md:text-lg text-text-muted leading-relaxed font-medium max-w-2xl mx-auto">
            ZoraMeeto is built around trust, privacy, and member safety. This policy explains what we collect, why we collect it, and what choices you have.
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
                {sections.slice(0, 8).map((section) => (
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
                This Privacy Policy applies to ZoraMeeto websites, apps, member services, events, and support channels. Please read it with our{" "}
                <Link href="/terms-and-conditions" className="text-primary font-bold hover:underline">
                  Terms & Conditions
                </Link>
                .
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
