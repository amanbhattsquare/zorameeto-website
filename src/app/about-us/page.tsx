import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | ZoraMeeto",
  description: "Learn about ZoraMeeto's mission to create meaningful connections between serious singles in India.",
};

export default function AboutUs() {

  const values = [
    {
      icon: "favorite",
      title: "Meaningful Connections",
      desc: "We believe in quality over quantity. Our platform is built exclusively for people seeking real, long-term relationships, not casual encounters."
    },
    {
      icon: "security",
      title: "Safety First",
      desc: "Every profile undergoes strict verification. We maintain industry-leading privacy controls to protect all our members' personal information."
    },
    {
      icon: "diversity_3",
      title: "Inclusive Community",
      desc: "We welcome everyone regardless of religion, caste, language, or background. Everyone deserves to find love in a safe, supportive environment."
    },
    {
      icon: "lightbulb",
      title: "Continuous Innovation",
      desc: "We're constantly enhancing our AI matching algorithms and adding features based on community feedback to improve the dating experience."
    }
  ];



  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden bg-gradient-mesh text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full z-0"></div>
        
        <div className="max-w-4xl mx-auto space-y-6 relative z-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 mx-auto">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-primary">Our Story</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-text-main leading-tight">
            About <br />
            <span className="text-primary italic font-light">ZoraMeeto.</span>
          </h1>
          <p className="text-base md:text-lg text-text-muted leading-relaxed font-medium max-w-xl mx-auto">
            We're on a mission to transform online dating by creating a platform where serious singles can find meaningful, lasting connections.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 px-6 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="spotlight-card rounded-[3rem] overflow-hidden bg-surface-soft/50 border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
              <div className="aspect-video lg:aspect-auto h-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1200" 
                  alt="Our Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-12 lg:p-16 space-y-8">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter text-text-main">
                  Our <span className="text-primary italic font-light">Mission.</span>
                </h2>
                <p className="text-text-muted leading-relaxed text-lg">
                  In a world saturated with superficial dating apps focused on endless swiping and casual encounters, ZoraMeeto was created to stand apart. We identified a gap in the Indian dating market – there was no platform dedicated exclusively to serious singles who are genuinely looking for life partners.
                </p>
                <p className="text-text-muted leading-relaxed">
                  Our proprietary AI-powered matching system goes far beyond surface-level photos. It analyzes your core values, lifestyle choices, family background, education, and long-term relationship goals to suggest truly compatible matches. We believe that finding a life partner requires more than just physical attraction – it requires alignment in life's most important areas.
                </p>
                <p className="text-text-muted leading-relaxed">
                  Every profile on ZoraMeeto undergoes a rigorous verification process, ensuring you only interact with real people who share your serious intentions. We don't cut corners on safety and authenticity because we understand what's at stake when you're looking for your life partner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-16 px-6 bg-surface-soft/30 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-text-main">
                Our <span className="text-primary italic font-light">Vision.</span>
              </h2>
              <p className="text-text-muted leading-relaxed text-lg">
                We envision ZoraMeeto becoming India's most trusted matrimonial and dating platform. Where parents once relied on traditional matchmakers and family networks, we see a future where modern Indians can leverage technology to find their perfect life partner while maintaining the cultural values that matter most.
              </p>
              <p className="text-text-muted leading-relaxed">
                Our goal is to facilitate 100,000+ successful marriages across India by 2027. We're building more than just an app – we're building a movement that reimagines arranged and love marriages for the digital age, combining the best of technology with timeless Indian values.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="bg-white rounded-2xl p-6 border border-border shadow-sm">
                  <p className="text-4xl font-extrabold text-primary">500K+</p>
                  <p className="text-sm text-text-muted mt-2 font-medium">Downloads & Growing</p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-border shadow-sm">
                  <p className="text-4xl font-extrabold text-primary">100%</p>
                  <p className="text-sm text-text-muted mt-2 font-medium">Verified Profiles</p>
                </div>
              </div>
            </div>
            <div className="spotlight-card rounded-[3rem] overflow-hidden bg-white border border-border p-8">
              <img 
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800" 
                alt="Our Vision" 
                className="w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ZoraMeeto Section */}
      <section className="py-16 px-6 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-text-main">
              Why <span className="text-primary italic font-light">ZoraMeeto?</span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">What sets us apart from every other dating app in India.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "verified_user",
                title: "100% Verified Profiles",
                desc: "Every single profile on our platform has been manually verified. No catfishing, no fake accounts, no exceptions."
              },
              {
                icon: "psychology",
                title: "AI Compatibility Matching",
                desc: "Our algorithm analyzes 100+ data points to match you with people who share your values, interests, and life goals."
              },
              {
                icon: "language",
                title: "Indian Languages Support",
                desc: "Available in 8 major Indian languages including Hindi, Bengali, Tamil, Telugu, Marathi, Gujarati, Kannada, and Malayalam."
              },
              {
                icon: "lock_person",
                title: "Bank-Level Security",
                desc: "Your data is protected with 256-bit encryption. We never share your personal information with third parties."
              },
              {
                icon: "monetization_on",
                title: "Earn & Grow Program",
                desc: "Verified active members can earn by engaging in meaningful conversations, turning their time on the platform into rewards."
              },
              {
                icon: "support_agent",
                title: "24/7 Customer Support",
                desc: "Our dedicated support team is available around the clock to address any concerns or issues you may encounter."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-surface-soft/50 rounded-[2.5rem] p-8 border border-border hover-lift transition-all duration-500 space-y-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-text-main">{feature.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Security Section */}
      <section className="py-16 px-6 bg-surface-soft/30 border-b border-border">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-text-main">
              Safety & <span className="text-primary italic font-light">Security.</span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">Your safety is not just our priority – it's our responsibility.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="spotlight-card rounded-[3rem] overflow-hidden bg-white border border-border">
              <img 
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000" 
                alt="Security" 
                className="w-full aspect-video object-cover"
              />
            </div>
            <div className="space-y-8">
              <p className="text-text-muted leading-relaxed text-lg">
                In today's digital world, safety can't be an afterthought. At ZoraMeeto, we've built security into every layer of our platform. From the moment you sign up to every interaction you have on our app, your safety remains our foremost concern.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Manual Profile Verification", desc: "Every new profile is reviewed by our team before activation – no exceptions." },
                  { title: "Photo Privacy Controls", desc: "Control who can see your photos, blur them for general users, and reveal them only to matches you trust." },
                  { title: "Block & Report Features", desc: "Instantly block any suspicious user and report inappropriate behavior with a single tap." },
                  { title: "24/7 Moderation Team", desc: "Our moderation team works around the clock to investigate reports and remove violating accounts immediately." },
                  { title: "Secure In-App Messaging", desc: "All communications are encrypted end-to-end. Your private conversations stay private." }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <span className="material-symbols-outlined text-primary text-sm">check</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-text-main">{item.title}</h4>
                      <p className="text-sm text-text-muted mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-6 bg-surface-soft/30 border-b border-border">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-text-main">
              Our <span className="text-primary italic font-light">Values.</span>
            </h2>
            <p className="text-text-muted max-w-2xl mx-auto">These principles guide everything we do at ZoraMeeto.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-[2rem] p-8 border border-border shadow-sm hover-lift transition-all duration-500">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-text-main mb-3">{value.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}