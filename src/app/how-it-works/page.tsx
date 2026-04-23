import Link from "next/link";

export default function HowItWorks() {
  return (
    <>
      <main className="pt-15">
        <section className="max-w-7xl mx-auto px-8 mb-24 text-center">
          <span className="text-secondary font-semibold tracking-widest uppercase text-sm mb-4 block">The Journey to Intimacy</span>
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-8 tracking-tighter leading-tight font-headline">Crafting Your Connection</h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed font-light">
            A refined editorial approach to finding love. We move at the speed of intention, not the speed of a swipe.
          </p>
        </section>

        <section className="relative max-w-7xl mx-auto px-8 py-20 mb-32">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-container via-outline-variant to-primary-container hidden md:block"></div>
          
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
            <div className="order-2 md:order-1 text-right">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-container text-white text-2xl font-bold mb-6 md:absolute md:left-1/2 md:-translate-x-1/2 md:translate-y-0 shadow-lg">1</div>
              <div className="pr-0 md:pr-20">
                <h3 className="text-3xl font-bold text-on-surface mb-4 font-headline">Vetting (Join)</h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">Every member of ZoraMeeto is hand-selected. Our application process ensures a community of individuals committed to authenticity and depth.</p>
                <ul className="space-y-3 text-sm font-medium text-secondary">
                  <li className="flex items-center justify-end gap-2">Identity Verification <span className="material-symbols-outlined text-xs">verified</span></li>
                  <li className="flex items-center justify-end gap-2">Values Assessment <span className="material-symbols-outlined text-xs">psychology</span></li>
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative w-64 h-[500px] mx-auto bg-on-surface rounded-[3rem] p-3 border-4 border-surface-container-high editorial-shadow">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="w-full h-full object-cover opacity-80" alt="close-up of elegant paper application form" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6ko89A7cY1w97yPUz_VgN-VCWdeCUYw7iEwITAEdZoKQqoHOFBQ8MEzF11bFRxJpmvlsjTFnkk-aljVUQgyhXfzVrX1sKB_YY4SCCIiAhxULYGVJ9Ux6mqJZPM7mHB92zJ-txKSrNb2yKOwc7PSxB29g2e3XNO2RN4NuZNQxUSpGvlyNaGs1EtHV1KuB8HNbuDrunp7J4ObLhF-wJ1FEnt53AVJlLJs4R2qMk_D03u0TUVn0yYp4_7on-YZM5OoHU1Ns0QXmNRA" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent flex flex-col justify-end p-6">
                    <div className="glass-panel p-4 rounded-xl">
                      <div className="w-8 h-1 bg-primary mb-3 rounded-full"></div>
                      <div className="text-xs font-bold uppercase tracking-widest text-primary mb-1">Status</div>
                      <div className="text-on-surface font-headline italic">Application Under Review</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
            <div className="order-1">
              <div className="relative w-64 h-[500px] mx-auto bg-on-surface rounded-[3rem] p-3 border-4 border-surface-container-high editorial-shadow">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="w-full h-full object-cover" alt="lifestyle portrait of a handsome man" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD96a4tYxsKY4DG-06ZdBJwbKZWcfFSbWe-W8X5palhlps0ZjHXWfjCdh0XcBcffp9Wx-Jb6v5D183NL1kYT7-635SYHkRsXl7Cdatvs-1Mab22nVvpVa56O2BGwd9E-KOqxjYgcNW7L38KnjaYoeOQ31t8Dk2lKunBjeD3oEdMWEjn4UwMZmPcSVKc_naB300vKQZv8rclOYFfzZVYfNZ-w31Dh7pEmmj1sa5bxFWjD_PGh3KlA9w4jgWvMHOdmBZCpv2Cid0SeQ" />
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%]">
                    <div className="bg-surface-container-lowest/90 backdrop-blur-md p-4 rounded-2xl editorial-shadow">
                      <h4 className="font-headline text-lg">Julian, 32</h4>
                      <p className="text-[10px] text-on-surface-variant leading-tight">&quot;Architect by day, poet by twilight. Looking for someone who appreciates the silence between notes.&quot;</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-2 text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-container text-white text-2xl font-bold mb-6 md:absolute md:left-1/2 md:-translate-x-1/2 md:translate-y-0 shadow-lg">2</div>
              <div className="pl-0 md:pl-20">
                <h3 className="text-3xl font-bold text-on-surface mb-4 font-headline">Discovery (Browse)</h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">Explore profiles that read like personal essays. Our layout prioritizes storytelling and high-fidelity imagery over mindless swiping.</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold uppercase tracking-wider">Lifestyle Stories</span>
                  <span className="px-4 py-1.5 bg-surface-container-highest text-on-surface-variant rounded-full text-xs font-bold uppercase tracking-wider">High-Res Media</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
            <div className="order-2 md:order-1 text-right">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-container text-white text-2xl font-bold mb-6 md:absolute md:left-1/2 md:-translate-x-1/2 md:translate-y-0 shadow-lg">3</div>
              <div className="pr-0 md:pr-20">
                <h3 className="text-3xl font-bold text-on-surface mb-4 font-headline">Resonance (Match)</h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">When two souls find common ground, Resonance occurs. Itâ€™s more than a matchâ€”itâ€™s an invitation to a curated conversation space.</p>
                <button className="text-primary font-bold border-b border-secondary hover:text-secondary transition-colors inline-flex items-center gap-2">
                  Learn about AI Compatibility <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative w-64 h-[500px] mx-auto bg-on-surface rounded-[3rem] p-3 border-4 border-surface-container-high editorial-shadow">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden flex flex-col p-6 items-center justify-center space-y-6">
                  <div className="flex -space-x-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="w-20 h-20 rounded-full border-4 border-surface-container-lowest object-cover" alt="portrait of a beautiful young woman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDusBKSRaPHtydg8oftuNfEobh8-4VKrM0W0JwEqUpEjbPA9J9ury-NQSKKeD9Y8fh9kcuWAjBJhY9O7rEFhAU8gbvGhfL-WMCvWOWqAGJ510iaGa7cS7HDlBTc_AmyrCRsKzoOCbehul9qdBBjwCLrB1AKdPXWIiZvIpct_4FOrc4wz5h46kstKtnZ-J7txCEa2hROSEAxMqf50EgeLsiVO0QZB0VWjLvkOUx3YljDSixPMLM5TrkHBxDI8ap-sajfrdgqMl_zsw" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="w-20 h-20 rounded-full border-4 border-surface-container-lowest object-cover" alt="portrait of a man with a gentle expression" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCc1Jn38hPEAMwzyzU-g2bT-bdkkUeUNkR7CcC7bYclFaHzqQwUqDmMrunVnFqOvP_CLVSyjM5ZPkF8flTyoSEqsD8rX43BoNKLFv0lJ6OdfrCDU21JQCzataBYUEq99JViP1PXxW2zieGZu3Z6GnBWbE72PWIALJLsnXm12RQSBdSJ9MES7lMthcqohddDzbQ8P-lTO_i6C7rIdBmb8fTe0lS-GlEyrP8pDhejkqf08J6ispbe4wSB7KdarB1ssh4e0JsPIZ6RBw" />
                  </div>
                  <div className="text-center">
                    <h4 className="font-headline text-2xl text-primary italic">Resonance Found</h4>
                    <p className="text-xs text-on-surface-variant mt-2 font-medium">94% Shared Values Found</p>
                  </div>
                  <div className="w-full space-y-2 pt-4">
                    <div className="h-8 bg-primary/10 rounded-full w-full"></div>
                    <div className="h-8 bg-primary/5 rounded-full w-3/4 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-1">
              <div className="relative w-64 h-[500px] mx-auto bg-on-surface rounded-[3rem] p-3 border-4 border-surface-container-high editorial-shadow">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="w-full h-full object-cover" alt="two crystal wine glasses clinking together" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrMkIcuztngrZ7osgVEBmr_kL-IIj5toWxiRXOhpbfjOOYIZqKvVXuGAMfh5InXvHwt-kOqVqa9oJ3K8XQXZIhcT9hf-6cvETxmEpIpHWHgYPw5oQfmE24JGd7ifhqqvdiSZk5X4z42SPnClCm9EbcV4TdM0LuwwvXTxaOAQdYBnFEZfzF88RMoAcnM_qa3vzeXQQTitDd02kj48JbPC7hwjwqGuSsHCDsCBqDggorWaG4I7BthaLHBdOXaA0YG4LoN75igPW-PQ" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <span className="material-symbols-outlined text-4xl mb-2">calendar_month</span>
                      <div className="text-lg font-headline">Tonight at 8 PM</div>
                      <div className="text-[10px] uppercase tracking-tighter">The Rose Garden Lounge</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-2 text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-container text-white text-2xl font-bold mb-6 md:absolute md:left-1/2 md:-translate-x-1/2 md:translate-y-0 shadow-lg">4</div>
              <div className="pl-0 md:pl-20">
                <h3 className="text-3xl font-bold text-on-surface mb-4 font-headline">The Encounter (Date)</h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">Transition from digital to physical with ease. Our concierge service can help you select the perfect venue for your first meeting.</p>
                <div className="p-6 bg-surface-container-low rounded-2xl border-l-4 border-primary">
                  <p className="text-sm italic font-headline text-on-surface">&quot;The app didn&apos;t just find me a date; it found me a story worth living.&quot;</p>
                  <p className="text-[10px] font-bold text-secondary mt-2 uppercase">â€” Elena R.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low py-32 text-center overflow-hidden relative">
          <div className="max-w-4xl mx-auto px-8 relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-primary mb-8 tracking-tighter font-headline">Begin Your Editorial Chapter</h2>
            <p className="text-lg text-on-surface-variant mb-12 max-w-xl mx-auto">Applications are reviewed within 48 hours. Start your journey toward a meaningful connection today.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-primary to-primary-container text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform">
                Apply for Membership
              </button>
              <button className="text-secondary font-bold px-8 py-4 hover:bg-surface-container-high rounded-full transition-colors">
                View Safety Standards
              </button>
            </div>
          </div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        </section>
      </main>
    </>
  );
}