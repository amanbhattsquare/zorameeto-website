import Link from "next/link";

export default function LoveStories() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="pt-24 pb-16 px-6 bg-gradient-mesh">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="font-romantic text-primary text-5xl">Our Gallery</span>
          <h1 className="text-6xl md:text-8xl font-headline tracking-tighter text-text-main leading-tight">
            Love Stories <br />
            <span className="text-gradient italic">Unfolded.</span>
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed font-light">
            From intentional encounters to eternal promises, witness the magic of connection through the eyes of those who found their forever.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          
          {/* Main Featured Story */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="aspect-[16/10] rounded-[3rem] overflow-hidden premium-shadow group">
                <img 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  alt="Ananya & Vikram" 
                  src="https://images.unsplash.com/photo-1522673607200-16484df23475?auto=format&fit=crop&q=80&w=1200" 
                />
              </div>
            </div>
            <div className="lg:col-span-5 space-y-8">
              <span className="material-symbols-outlined text-primary text-5xl">format_quote</span>
              <blockquote className="text-4xl font-headline italic text-text-main leading-tight">
                "The algorithm didn't just find me a match; it found the person who knew my silence as well as my words."
              </blockquote>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-text-main">Ananya & Vikram</p>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">Found in Mumbai • 2023</p>
              </div>
              <p className="text-lg text-text-muted leading-relaxed font-light">
                We were both tired of the endless swipe culture. ZoraMeeto felt like an invitation to something deeper. Our first conversation lasted seven hours, and by the end of it, we knew this was the last first date we'd ever have.
              </p>
            </div>
          </div>

          {/* Secondary Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { 
                names: 'Priya & Arjun', 
                location: 'Bengaluru',
                img: 'https://images.unsplash.com/photo-1516589174184-c685ca10298d?auto=format&fit=crop&q=80&w=800',
                quote: "Arjun's profile was the first one that felt like a person, not a product. We connected over a shared love for jazz."
              },
              { 
                names: 'Meera & Kabir', 
                location: 'Delhi',
                img: 'https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&q=80&w=800',
                quote: "The curated experience changed everything. It attracts people who are actually looking for life partners."
              },
              { 
                names: 'Sonal & Rajiv', 
                location: 'Pune',
                img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800',
                quote: "It's never too late for a second act. We found our soulmates at fifty, and we've never felt younger."
              }
            ].map((story, i) => (
              <div key={i} className="group space-y-6 hover-lift">
                <div className="aspect-square rounded-[2.5rem] overflow-hidden premium-shadow">
                  <img src={story.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={story.names} />
                </div>
                <div className="space-y-3">
                  <p className="text-xl font-headline italic text-text-main">"{story.quote}"</p>
                  <div className="pt-2">
                    <p className="font-bold text-text-main">{story.names}</p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">{story.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-surface rounded-[3rem] p-12 text-center space-y-8 premium-shadow border border-border">
            <div className="flex justify-center -space-x-4 mb-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-16 h-16 rounded-full border-4 border-white bg-surface-soft overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${i}`} alt="User" />
                </div>
              ))}
            </div>
            <h2 className="text-4xl lg:text-6xl font-headline tracking-tight text-text-main">
              Your story starts <span className="text-gradient italic">here.</span>
            </h2>
            <p className="text-lg text-text-muted max-w-xl mx-auto">
              Join thousands of members who have already found their perfect match. Your forever is just a click away.
            </p>
            <div className="pt-4">
              <button className="bg-gradient-primary text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300">
                Begin Your Journey
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}