import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Architecture | How ZoraMeeto Works",
  description: "Learn about our multi-layer verification and resonance system designed for the intentional high-achiever.",
};

export default function HowItWorks() {
  const steps = [
    {
      no: "01",
      title: "Request Access",
      desc: "Submit your basic profile for review by our editorial network.",
      icon: "app_registration"
    },
    {
      no: "02",
      title: "Vetting Process",
      desc: "Our team verifies identity and professional status to ensure community integrity.",
      icon: "verified_user"
    },
    {
      no: "03",
      title: "Psychological Sync",
      desc: "Complete our resonance assessment to unlock precision matching.",
      icon: "analytics"
    },
    {
      no: "04",
      title: "Enter the Network",
      desc: "Connect with high-intent individuals curated specifically for you.",
      icon: "diversity_3"
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Sophisticated Center-Aligned Compact Hero */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden bg-gradient-mesh text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full z-0"></div>
        
        <div className="max-w-4xl mx-auto space-y-6 relative z-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mx-auto">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary">The System</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-text-main leading-tight">
            The <br />
            <span className="text-primary italic font-light">Architecture.</span>
          </h1>
          <p className="text-base md:text-lg text-text-muted leading-relaxed font-medium max-w-xl mx-auto">
            Our multi-layer verification and resonance system ensures that every connection on ZoraMeeto is intentional, high-intent, and deeply compatible.
          </p>
        </div>
      </section>

      {/* Steps Grid - Compact Mode */}
      <section className="py-16 px-6 bg-surface-soft/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="spotlight-card rounded-[2.5rem] p-8 space-y-6 relative overflow-hidden group bg-white border border-border hover-lift shadow-sm">
                <span className="text-6xl font-bold text-text-main/[0.03] absolute -top-2 -right-2">{step.no}</span>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <span className="material-symbols-outlined text-xl">{step.icon}</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold tracking-tight text-text-main leading-tight">{step.title}</h3>
                  <p className="text-text-muted font-medium leading-relaxed text-xs">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section - Compact Mode */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter text-text-main leading-tight">
            Built on <span className="text-primary italic font-light">Integrity.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="spotlight-card rounded-[2rem] p-8 space-y-4 bg-white border border-border shadow-sm hover-lift">
              <h4 className="text-xl font-bold text-text-main">Manual Vetting</h4>
              <p className="text-text-muted font-medium text-sm">Every application is reviewed by a human moderator to ensure community quality and high-intent alignment.</p>
            </div>
            <div className="spotlight-card rounded-[2rem] p-8 space-y-4 bg-white border border-border shadow-sm hover-lift">
              <h4 className="text-xl font-bold text-text-main">Data Sovereignty</h4>
              <p className="text-text-muted font-medium text-sm">Your data belongs to you. We use end-to-end encryption for all personal communications and identity records.</p>
            </div>
          </div>
          <div className="pt-4">
            <button className="luxury-button px-12 py-5 rounded-xl font-bold text-xs uppercase tracking-widest shadow-xl shadow-primary/20">
              Start Application
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}