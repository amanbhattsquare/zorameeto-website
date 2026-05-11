import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Cinematic Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 pt-20 overflow-hidden bg-white">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-mesh opacity-40 -skew-x-12 translate-x-20"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-primary/5 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          
          {/* Left Column: Bold Statement */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4 animate-fade-up">
              <div className="flex items-center gap-4">
                <span className="w-12 h-px bg-primary"></span>
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">The New Era of Romance</span>
              </div>
              <h1 className="text-7xl md:text-9xl font-headline tracking-tighter text-text-main leading-none">
                Love, <br />
                <span className="relative">
                  Redefined.
                  <svg className="absolute -bottom-2 -left-2 w-full h-4 text-primary/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" />
                  </svg>
                </span>
              </h1>
            </div>

            <p className="text-2xl text-text-muted font-light max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
              ZoraMeeto is an invitation-only circle for those who seek the <span className="italic font-medium text-text-main">extraordinary</span> in every encounter.
            </p>

            <div className="flex flex-wrap gap-8 items-center pt-6 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <button className="relative group overflow-hidden bg-text-main text-white px-14 py-6 rounded-full font-bold text-xs uppercase tracking-[0.3em] transition-all">
                <span className="relative z-10">Request Access</span>
                <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
              </button>
              <button className="text-[10px] font-bold uppercase tracking-[0.3em] border-b-2 border-primary/20 pb-2 hover:border-primary transition-all">
                View Dossier
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Dossier Stack */}
          <div className="lg:col-span-5 relative h-[600px] flex items-center justify-center">
            
            {/* The "Dossier" Stack */}
            <div className="relative w-full max-w-[380px] aspect-[3/4]">
              {/* Card 3 (Bottom) */}
              <div className="absolute inset-0 bg-surface-soft rounded-[3rem] shadow-xl rotate-6 translate-x-12 translate-y-8 opacity-40 border border-border"></div>
              
              {/* Card 2 (Middle) */}
              <div className="absolute inset-0 bg-white rounded-[3rem] shadow-2xl -rotate-3 translate-x-4 translate-y-4 border border-border overflow-hidden">
                 <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrTfF25anTWIa12wWU4CckgHJ7pdS1vMUGXyyewzZpMOgNkAZX14KN1lFwGB3SvguBo2_m5CEPpQa7byteUl7CU4rfDmfe0ypAckRIVjQnKGF6Tltn_Afryi9bfZJCfv0MdYAaOrDToJ2yuMMrs3VEF0g1vPweq3-6xTIj3CA0-yaGylI_vf52W9rB0wTpFtu3GEL8fIAhsv6Fmu2aWv_Jq1AWZgI0DTadgvlJXabZYLUxL0z8_bATuCsy0c2O4pVmPCudDJIW8Q" className="w-full h-full object-cover grayscale opacity-20" alt="background" />
              </div>

              {/* Card 1 (Top/Active) */}
              <div className="absolute inset-0 bg-white rounded-[3rem] shadow-[0_40px_80px_rgba(0,0,0,0.12)] border border-border p-4 hover:scale-[1.02] transition-all duration-700 cursor-pointer group">
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative">
                  <img 
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000" 
                    alt="Active Profile" 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-10 left-10 right-10 text-white space-y-2">
                    <span className="bg-primary/20 backdrop-blur-md border border-white/20 text-[8px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Editorial Choice</span>
                    <h3 className="text-4xl font-headline italic">Ananya, 26</h3>
                    <p className="text-white/60 text-xs font-light">Creative Director • London</p>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Icon */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-white rounded-full shadow-2xl flex items-center justify-center animate-float">
                <span className="material-symbols-outlined text-primary text-4xl">favorite</span>
              </div>
            </div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce">
          <span className="text-[8px] font-bold uppercase tracking-[0.4em] text-text-muted">Scroll</span>
          <div className="w-px h-12 bg-border"></div>
        </div>
      </section>

      {/* Stats Integrated Section */}
      <section className="py-24 px-6 bg-surface-soft border-y border-border">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-12">
          {[
            { label: 'Exclusivity', value: '2.4M', sub: 'Members' },
            { label: 'Resonance', value: '98K+', sub: 'Success Stories' },
            { label: 'Curated', value: '4.9', sub: 'Avg Rating' }
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <p className="text-[8px] font-bold uppercase tracking-[0.4em] text-primary">{stat.label}</p>
              <h4 className="text-5xl font-headline tracking-tighter text-text-main">{stat.value}</h4>
              <p className="text-xs text-text-muted font-light">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Members */}
      <section className="py-20 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <span className="font-romantic text-primary text-4xl">Meet Our Members</span>
            <h2 className="text-5xl lg:text-7xl font-headline tracking-tight text-text-main">A Curated Gallery</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: 'Elena', age: 28, role: 'Art Curator', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=800' },
              { name: 'Marcus', age: 32, role: 'Design Lead', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800' },
              { name: 'Chloe', age: 26, role: 'Writer', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800' }
            ].map((member, i) => (
              <div key={i} className="group bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-black/5 hover-lift">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={member.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={member.name} />
                </div>
                <div className="p-8 space-y-2">
                  <h3 className="text-2xl font-headline">{member.name}, {member.age}</h3>
                  <p className="text-text-muted font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/5] bg-surface rounded-[3rem] overflow-hidden premium-shadow">
              <img
                className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000"
                alt="Couple"
                src="https://images.unsplash.com/photo-1511733880459-845ad96996b9?auto=format&fit=crop&q=80&w=800"
              />
            </div>
            <div className="absolute -bottom-12 -right-12 bg-white p-10 rounded-[2.5rem] shadow-2xl max-w-[320px] hidden lg:block">
              <span className="material-symbols-outlined text-primary text-5xl mb-6">format_quote</span>
              <p className="font-headline italic text-2xl leading-tight text-text-main mb-6">
                "We didn't just meet, we discovered each other's worlds."
              </p>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">Elena & Marc</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-10">
            <span className="font-romantic text-primary text-4xl">The Zora Philosophy</span>
            <h2 className="text-6xl lg:text-8xl font-headline tracking-tighter text-text-main leading-tight">
              Beyond the <br />
              <span className="text-gradient italic">Digital Surface.</span>
            </h2>
            <p className="text-xl leading-relaxed text-text-muted font-light">
              In an era of disposable dating, ZoraMeeto returns to the essence of romance. We believe in high-fidelity matching and intentional design.
            </p>
            <div className="pt-6">
              <button className="bg-text-main text-white px-12 py-5 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-primary transition-all duration-300">
                Join the Circle
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}