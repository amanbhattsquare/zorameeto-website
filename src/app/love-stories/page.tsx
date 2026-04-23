import Link from "next/link";

export default function LoveStories() {
  return (
    <>

      <main className="pt-25 pb-25">
        <header className="max-w-4xl mx-auto text-center px-8 mb-20">
          <h1 className="text-5xl md:text-7xl font-headline font-bold tracking-tight text-primary mb-6 leading-tight">Love Stories Unfolded.</h1>
          <p className="text-lg md:text-xl font-body text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            From accidental digital encounters to eternal promises, witness the magic of intentional connection through the eyes of those who found their forever.
          </p>
        </header>

        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 md:col-start-3 mb-12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-surface-container-lowest">
              <div className="absolute inset-0 z-[-1] -m-[2px] rounded-inherit bg-gradient-to-r from-[#af2b3e] to-[#ffbebf]"></div>
              <div className="flex flex-col md:flex-row h-full w-full bg-surface-container-lowest">
                <div className="md:w-1/2 h-[500px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="w-full h-full object-cover" alt="Indian couple in elegant attire" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0J8sc6-6vlDhaADvgayYOX5g57fHm7oFcxrUlYUuPxo6TrjFRUxav9VzKJ1TTXtFEZ6LXvAYY4V-OHcz--OoChHR-Np2Xvj5mkrpxRXAwvGuZD22A3k7_Zsas3cfvrN-Eq9_THBWJhQn7r4mP2YHp0E1FPhxLLCe-7Wz9pzAmWLAx98H6vmNoGvHh-b8AQ0JQPca8S_TKSHd0YPkzK5EZ4NHk_sq4uac60rquL7PNEhqq2MNV-X9Tp9aRAZ6Ahkdhk1vzF1PTKQ" />
                </div>
                <div className="md:w-1/2 p-12 flex flex-col justify-center">
                  <div className="flex gap-1 mb-6 text-secondary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <blockquote className="text-3xl font-headline italic text-secondary leading-snug mb-8">
                    &quot;The algorithm didn&apos;t just find me a match; it found the person who knew my silence as well as my words.&quot;
                  </blockquote>
                  <div>
                    <p className="text-xl font-headline font-bold text-on-surface mb-1">Ananya &amp; Vikram</p>
                    <p className="text-sm font-label text-on-surface-variant uppercase tracking-widest">Found in Mumbai • 2023</p>
                  </div>
                  <p className="mt-6 text-on-surface-variant leading-relaxed font-body">
                    We were both tired of the endless swipe culture. ZoraMeeto felt like an invitation to something deeper. Our first conversation lasted seven hours, and by the end of it, we knew this was the last first date we&apos;d ever have.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 md:translate-y-[-100px]">
            <div className="bg-surface-container-low rounded-2xl overflow-hidden shadow-lg p-6">
              <div className="h-64 rounded-xl overflow-hidden mb-6 relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-full h-full object-cover" alt="Modern Indian couple" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-i4MUBJ3twdwexXXXSel5lhJ0w--UzmTlKbPR3VneRqy7fe5CLQtcRKMbdGqKfnO16xuczV_tD7-S6D7-HS5x6UelnZzEAlGWqJtQ0FMxWD_zD3QSNZ1tt3Q4W7WFQ_c2zCDzYrq-QcHaNaxB7d6Xpl3wzgXpFYHuJf4kkoLVRkWjtSlnRjdesath1HVhGB6a6u-KcLCkmIQsmsrC3wpfzrSrs_0aAmmPaQPARYafcaR3bpT0UOAlAHHyfne1j8vEdrICf5n8tw" />
                <div className="absolute bottom-4 left-4 glass-panel px-4 py-2 rounded-full">
                  <p className="text-xs font-label font-bold text-on-surface">Priya &amp; Arjun</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3 text-secondary transform scale-75 origin-left">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <p className="font-body text-on-surface leading-relaxed">
                Arjun&apos;s profile was the first one that felt like a person, not a product. We connected over a shared love for obscure 70s Bollywood jazz. Three months later, we&apos;re planning our first trip home together.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 md:col-start-9 md:translate-y-4">
            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-lg p-6">
              <div className="h-80 rounded-xl overflow-hidden mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-full h-full object-cover" alt="Romantic shot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCD18gagYfT2Im2rJ5EsWMeHz7WDffye55XQn6nuAtiCX2AmntI1toupWChOzsxJIruhVUXsrqkQKGjPF9Tu618nJWPlvB7vuJzPWJL5gAy3x1hb2WDWq-YNCorBxyH-2uBvVqKxcrmMcxoWR-hwx_B8EzGBr9XtRbKFOEY-LnBNOXRasSaLqktirYLzk_kACQB43cnallQIl5bpL7ICseiv8CF_dtAh1RS4WRyOh-ftWLAAcnTzAqJM2vsfyYBIjYNNd2MhkZsg" />
              </div>
              <p className="font-headline italic text-xl text-primary mb-4 leading-relaxed">&quot;The curated experience changed everything for us.&quot;</p>
              <p className="text-xs font-label text-on-surface-variant uppercase tracking-widest mb-4">Meera &amp; Kabir • Delhi</p>
              <p className="text-sm font-body text-on-surface-variant leading-relaxed">
                We both appreciated the high-end feel. It attracts people who are actually looking for life partners, not just distractions.
              </p>
            </div>
          </div>

          <div className="md:col-span-4 md:translate-y-[-40px]">
            <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant/15">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-6 ring-4 ring-primary-container">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="w-full h-full object-cover" alt="Portrait of an older couple" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjjWTZBpxRcr9UO8lpKit_W0E4Z_zp6JCrI-c1w2AHlQIxwyPWdPxuR0m_szOtMcoXZCnY4ekwDT6OP2ZRt_XLlLVSpUEiTtei0kCqHjq4bgifCBbGrKkK-aUnTx7RK3iblFxXnav2QdAAYmOWZhn5KqJB8PbSLN24IhfUgtPRtdWP52IoLD2PKx38A6asU4FCJr091-dEwszJ_DDtLjGpcV-tjOCeyUVypdUs0Fl9ONk39pIlzyA5sXzPbC4Qk__8YQ90Gch1hQ" />
              </div>
              <p className="font-body italic text-on-surface mb-6">&quot;It&apos;s never too late for a second act. We found our soulmates at fifty, and we&apos;ve never felt younger.&quot;</p>
              <p className="text-sm font-bold text-primary">— Sonal &amp; Rajiv</p>
            </div>
          </div>

          <div className="md:col-span-8 h-[400px] rounded-2xl overflow-hidden shadow-xl relative group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Cinematic shot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEvbAPeWXKk8bMsVGnpY0bGr_-7v1FBl-j-UzK1X0236H1UR3lioJb9nRaMhE1xBMo2VxCkPVgHrxCTpKFRrGnlBpZXqQni3hKutvW8CznyM837WidmDnei8EKt-lYzBARY83vAfAi01VacI504D9PRMSb6T7iymw8nIwervnnesLsD1PHvbZmObSFUFi1bE222NmyGqsSSniD2rqvXaKYMXhbla70ds6zQfMpRkW_5OkoqE4B8QUbvhISn6xKi2AdA2jjmXtbcA" />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent flex items-end p-12">
              <div className="max-w-md">
                <div className="flex gap-1 mb-4 text-secondary-container">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <p className="text-white text-2xl font-headline italic mb-4">&quot;We found a love that feels like home. Every day with Aisha is a new chapter in the best story ever written.&quot;</p>
                <p className="text-primary-container font-label uppercase tracking-widest text-sm">Zayed &amp; Aisha • Hyderabad</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-12 mt-12 flex justify-center">
            <div className="bg-surface-container-lowest rounded-2xl p-10 max-w-2xl text-center shadow-lg border border-outline-variant/15">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="w-20 h-20 rounded-full mx-auto mb-6 object-cover ring-2 ring-secondary" alt="Close up" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiEXoXFCeZHXLpeyMgMwn0XCPrrMQSHwZC4Ib_cXqi0k-QYOogWbG_En89QktIgDgqYhqGv0U24HjdJHXNjQRQmhTw2k1AT9hezrTKNnvD1smWOUY__TL3poHoGz_5mmXrZ396an9qsqiDtt1seQjuqsB2iBFcyFvMPEM0sDRcHImzS0ViQzV25A0SCTkQ9subhF1guZxtC9JTGHunOw-SFml1a8L8vGrrXG_nqNPcsrQQa_WRYrVRpseDmzc6izRuRvciOszrQw" />
              <h3 className="text-2xl font-headline text-on-surface mb-4">Start Your Own Story</h3>
              <p className="text-on-surface-variant mb-8 leading-relaxed font-body">Thousands of connections are made every day on ZoraMeeto. Yours could be the next featured story.</p>
              <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-primary/20 transition-all active:scale-95 font-label">Begin Your Journey</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}