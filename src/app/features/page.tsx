import Link from "next/link";

export default function Features() {
  return (
    <>
      <main className="pt-25 pb-25">
        <header className="max-w-7xl mx-auto px-8 mb-20 text-center">
          <span className="text-secondary font-headline italic tracking-wide text-lg mb-4 block">The Art of Connection</span>
          <h1 className="text-5xl md:text-7xl font-headline font-bold text-on-surface tracking-tight mb-6">
            Curated Features for the <br />
            <span className="text-primary italic">Modern Romantic</span>
          </h1>
          <p className="max-w-2xl mx-auto text-on-surface-variant text-lg leading-relaxed">
            Beyond the swipe. We&apos;ve designed a suite of editorial-grade features to ensure your journey toward love is as intentional and elegant as a gala invitation.
          </p>
        </header>

        <section className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 group bg-surface-container-low rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(27,28,23,0.06)] border-b-2 border-transparent hover:border-secondary/20 relative overflow-hidden">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2 space-y-4">
                  <span className="material-symbols-outlined text-primary text-4xl">neurology</span>
                  <h3 className="text-3xl font-headline font-bold">AI Matching</h3>
                  <p className="text-on-surface-variant leading-relaxed">
                    Our sophisticated neural engine analyzes thousands of behavioral nuances—from conversational rhythm to shared aesthetic values—connecting you with those who truly resonate with your soul.
                  </p>
                  <a className="inline-flex items-center text-secondary font-bold text-sm uppercase tracking-widest group-hover:underline" href="#">Explore Logic <span className="material-symbols-outlined ml-2 text-xs">arrow_forward</span></a>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="h-64 rounded-xl overflow-hidden shadow-inner">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="w-full h-full object-cover" alt="abstract visualization" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH_Kud4UMpJaBpkPDUJCuyGIpb6Nk2pAcWL40zdK1hzH1gwbhIposFp86LDTQtmbjjf65aRg5AhoR-oulXNJ9M6HO-N-m4Xx7J42YH_59FTnZxr1hYavAS6bg2egjVm4g7Swz3dGG12stWaFGKmbBcxEqqL16ltXrGwaefAhgU4XqPqGbgxcimDDEup0bIQTxIcdAeJowz2hiZXN0eXDXA-49G6qXggGhGRIlcoh-pLD9OE6h5IfLfjWCekdrhfizv2y8lnR0mHA" />
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-surface-container-lowest rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(27,28,23,0.06)] border-b-2 border-transparent hover:border-secondary/20">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                </div>
                <h3 className="text-2xl font-headline font-bold">Human-Vetted</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  No bots, no illusions. Every member is personally reviewed by our editorial team to ensure the community remains authentic and prestigious.
                </p>
              </div>
            </div>

            <div className="group bg-surface-container-lowest rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(27,28,23,0.06)] border-b-2 border-transparent hover:border-secondary/20">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">psychology</span>
                </div>
                <h3 className="text-2xl font-headline font-bold">Psychological Compatibility</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Deep-dive personality assessments based on modern behavioral science to identify long-term relational synergy.
                </p>
              </div>
            </div>

            <div className="md:col-span-2 group bg-surface-container-low rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(27,28,23,0.06)] border-b-2 border-transparent hover:border-secondary/20 flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="w-full md:w-1/2 space-y-4">
                <span className="material-symbols-outlined text-primary text-4xl">auto_stories</span>
                <h3 className="text-3xl font-headline font-bold">ZoraMoments</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Tell your story through cinematic social narratives. Share the books you’re reading, the galleries you’ve visited, and the moments that define your lifestyle.
                </p>
                <div className="flex gap-2 pt-2">
                  <span className="bg-secondary-container/30 text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Lifestyle</span>
                  <span className="bg-secondary-container/30 text-on-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Culture</span>
                </div>
              </div>
              <div className="w-full md:w-1/2 relative">
                <div className="h-64 rounded-xl overflow-hidden -rotate-2 transform transition-transform group-hover:rotate-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="w-full h-full object-cover" alt="lifestyle photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASAD4wH0THHTtp4_ZiFXIfHQ9i54OSR6UaMyq_Wue83PifWPYcFLBayWK9QNxpVol0A0UWeybPmJNC-2DszPaNdlnE4HhweR0pdYVMDWgXYtBqQgTPUpvJlbc2a_JJktB62bckdFfRt7BfmOijOsZvmCIV8z-DENRVB6_rNV5lU9xLAUw8gpYkFpgROFtOr6H_N2fkkWib0W2S6Q8gOqQA_7qnVGBiWnnK0aCLjyNweaupnupH5UFvZRFnm7K5QwQmaPLwL0EmLg" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-xl border-4 border-surface-container-low overflow-hidden rotate-3 transform transition-transform group-hover:rotate-0 shadow-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="w-full h-full object-cover" alt="candid close-up" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPxpsYCYkgXT8CHhdS9xIawCoYcSOR4jwyhgLC_YPZVMNZbDZy6LUppkCxRA-IrUiEQHL-z7OS0gNo8M5dvd0syuLn6o2uWQEFGxi5d_F4fZKj2NPXwKPOJjM4k5ErrtXMLFUhYZgeJqPnuSZIMSkGYr7AkQrLH1nxRlmaEie2zUyEqz_xjg7Ehy6ZPcn13nlneppC6IFjJ09Hu8oaXqvRoqgtaDuKc-TdqMPS8LARYkDXzrMlw6DhE8tMIo1SVsQ0FZ7vFjuYkw" />
                </div>
              </div>
            </div>

            <div className="group bg-surface-container-lowest rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(27,28,23,0.06)] border-b-2 border-transparent hover:border-secondary/20">
              <div className="space-y-6">
                <div className="w-14 h-14 rounded-full bg-on-surface/5 flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-surface">encrypted</span>
                </div>
                <h3 className="text-2xl font-headline font-bold">Privacy First</h3>
                <p className="text-on-surface-variant leading-relaxed">
                  Military-grade encryption for all communications. Your data is your own; we ensure your digital footprint remains invisible to the public eye.
                </p>
              </div>
            </div>

            <div className="md:col-span-2 group bg-primary rounded-2xl p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(175,43,62,0.2)] text-on-primary flex flex-col md:flex-row items-center gap-10">
              <div className="w-full md:w-2/3 space-y-6">
                <div className="inline-block px-4 py-1 rounded-full border border-on-primary/30 text-xs font-bold uppercase tracking-widest">The Ultimate Tier</div>
                <h3 className="text-4xl font-headline font-bold">Premium Concierge</h3>
                <p className="text-primary-container text-lg leading-relaxed">
                  Unlock a personal romance consultant. From restaurant reservations to bespoke date curation, our concierge handles the logistics so you can focus on the connection.
                </p>
                <button className="bg-surface-container-lowest text-primary px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-secondary-container hover:text-on-secondary-container transition-colors">
                  Apply for Concierge
                </button>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                <span className="material-symbols-outlined text-[120px] opacity-20">concierge</span>
              </div>
            </div>

            <div className="group bg-surface-container-low rounded-2xl p-8 flex items-center justify-center text-center">
              <div>
                <span className="material-symbols-outlined text-secondary mb-4 block">format_quote</span>
                <p className="font-headline text-2xl text-on-surface italic px-4 leading-relaxed">
                  &quot;Love is the only gold.&quot;
                </p>
                <p className="text-xs uppercase tracking-[0.2em] mt-4 opacity-50 font-label">Alfred Lord Tennyson</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}