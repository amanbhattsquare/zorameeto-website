import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="pt-14">
        {/* Hero Section */}
        <section className="relative min-h-[921px] flex flex-col justify-center overflow-hidden px-8">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Content Column */}
            <div className="lg:col-span-6 z-10 space-y-8">
              {/* Live Badge */}
              <div className="inline-flex items-center gap-3 bg-surface-container-lowest editorial-shadow px-4 py-2 rounded-full">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-xs font-bold tracking-widest uppercase text-on-surface-variant">
                  Live: 14,203 matches today
                </span>
              </div>
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-headline tracking-tight text-on-surface leading-tight">
                  Meaningful connections <br /> for <span className="text-primary italic">discerning singles.</span>
                </h1>
                <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed font-body">
                  ZoraMeeto is an exclusive, curated community for those who are serious about finding a long-term partner. Say goodbye to endless swiping and hello to high-intent dating.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-4 rounded-full font-bold text-lg editorial-shadow active:scale-95 transition-transform">
                  Find Your Match
                </button>
                <button className="flex items-center gap-2 px-8 py-4 text-on-surface font-bold hover:bg-surface-container-high rounded-full transition-colors group">
                  Learn More
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>

            {/* Mockups Column */}
            <div className="lg:col-span-6 relative h-[600px] flex items-center justify-center">
              {/* Background Decor */}
              <div className="absolute inset-0 bg-primary-container/20 blur-[100px] rounded-full scale-150"></div>
              {/* Phone 1: Discover Feed */}
              <div className="absolute z-30 -translate-x-1/2 -translate-y-4 rotate-[-6deg]">
                <div className="w-[260px] h-[520px] bg-on-surface rounded-[3rem] p-3 shadow-2xl ring-4 ring-outline-variant/10">
                  <div className="bg-background w-full h-full rounded-[2.5rem] overflow-hidden relative">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-full h-full object-cover"
                      alt="close-up portrait of a stylish young man with warm lighting and soft editorial background focus"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOMVqROeG0dhNa8r13X_T9L02McEJQX1Tz4dL_U83iAaggL2QUKWCPFIXsbKjlQqcoORPJyVKL1LHH7fHTQqwqAOE6mhn1HL_2nP00IgqBEGShhJZnB_xBIE8DToM1mvjzLfk_bdPjHAU-aYcX8frc0hKjBcIcbm9aCNZiqsWBr1WfJlvbU2kQIv2sl9XPoqyF8V9v9kgmoLcHZsktzUmIXMpEeCV6uGvSu1308rtOkeVyl_a0Nd4x_riTO3J2olAgWEKcM2TMJw"
                    />
                    <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-on-surface/80 to-transparent">
                      <h3 className="text-white font-headline text-xl">
                        Julian, 29
                      </h3>
                      <p className="text-white/80 text-xs">Architect &amp; Cellist</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Phone 2: Messages */}
              <div className="absolute z-20 translate-x-1/4 translate-y-12 rotate-[8deg]">
                <div className="w-[260px] h-[520px] bg-on-surface rounded-[3rem] p-3 shadow-2xl ring-4 ring-outline-variant/10">
                  <div className="bg-surface-container-low w-full h-full rounded-[2.5rem] p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-container"></div>
                      <div className="h-4 w-24 bg-surface-variant rounded-full"></div>
                    </div>
                    <div className="space-y-4">
                      <div className="bg-primary/10 p-4 rounded-2xl rounded-tl-none mr-8">
                        <div className="h-2 w-full bg-primary/20 rounded-full mb-2"></div>
                        <div className="h-2 w-2/3 bg-primary/20 rounded-full"></div>
                      </div>
                      <div className="bg-white p-4 rounded-2xl rounded-tr-none ml-8 editorial-shadow">
                        <div className="h-2 w-full bg-surface-variant rounded-full mb-2"></div>
                        <div className="h-2 w-1/2 bg-surface-variant rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Phone 3: Profile */}
              <div className="absolute z-10 -translate-x-2/3 translate-y-24 -rotate-[12deg] opacity-60 blur-[1px]">
                <div className="w-[260px] h-[520px] bg-on-surface rounded-[3rem] p-3 shadow-2xl">
                  <div className="bg-surface-container-lowest w-full h-full rounded-[2.5rem] p-8 flex flex-col items-center gap-6">
                    <div className="w-24 h-24 rounded-full bg-surface-variant"></div>
                    <div className="space-y-2 w-full">
                      <div className="h-4 w-full bg-surface-variant rounded-full"></div>
                      <div className="h-4 w-2/3 bg-surface-variant rounded-full mx-auto"></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 w-full">
                      <div className="h-8 bg-surface-variant rounded-lg"></div>
                      <div className="h-8 bg-surface-variant rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Stats Section */}
        <section className="bg-surface-container-low py-24 px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
              <div className="space-y-2">
                <p className="font-romantic text-secondary text-3xl">
                  Across the globe
                </p>
                <h4 className="text-6xl font-headline italic text-on-surface tracking-tighter">
                  2.4M
                </h4>
                <p className="font-label uppercase tracking-widest text-xs text-on-surface-variant font-bold">
                  Global Active Members
                </p>
              </div>
              <div className="space-y-2 border-y md:border-y-0 md:border-x border-outline-variant/20 py-12 md:py-0 md:px-12">
                <p className="font-romantic text-secondary text-3xl">
                  Found their forever
                </p>
                <h4 className="text-6xl font-headline italic text-on-surface tracking-tighter">
                  98K+
                </h4>
                <p className="font-label uppercase tracking-widest text-xs text-on-surface-variant font-bold">
                  Verified Success Stories
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-romantic text-secondary text-3xl">
                  Excellence in matching
                </p>
                <div className="flex items-center justify-center md:justify-start gap-4">
                  <h4 className="text-6xl font-headline italic text-on-surface tracking-tighter">
                    4.9
                  </h4>
                  <div className="flex text-secondary">
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  </div>
                </div>
                <p className="font-label uppercase tracking-widest text-xs text-on-surface-variant font-bold">
                  Average App Rating
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Profiles Section */}
        <section className="py-24 px-8 bg-background">  
          <div className="max-w-7xl mx-auto text-center">
            <p className="font-romantic text-secondary text-4xl mb-4">Meet Our Members</p>
            <h2 className="text-5xl lg:text-7xl font-headline italic tracking-tighter text-on-surface leading-tight mb-16">
              A Featured Profiles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Profile Card 1 */}
              <div className="bg-surface-container-lowest rounded-xl p-6 text-left editorial-shadow space-y-4">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOMVqROeG0dhNa8r13X_T9L02McEJQX1Tz4dL_U83iAaggL2QUKWCPFIXsbKjlQqcoORPJyVKL1LHH7fHTQqwqAOE6mhn1HL_2nP00IgqBEGShhJZnB_xBIE8DToM1mvjzLfk_bdPjHAU-aYcX8frc0hKjBcIcbm9aCNZiqsWBr1WfJlvbU2kQIv2sl9XPoqyF8V9v9kgmoLcHZsktzUmIXMpEeCV6uGvSu1308rtOkeVyl_a0Nd4x_riTO3J2olAgWEKcM2TMJw" alt="Profile of Julian" />
                </div>
                <h3 className="font-headline text-2xl text-on-surface">Julian, 29</h3>
                <p className="text-on-surface-variant text-sm">Architect & Cellist</p>
                <p className="text-on-surface-variant text-sm italic">"Seeking a connection that feels like a beautifully composed piece of music."</p>
              </div>
              {/* Profile Card 2 */}
              <div className="bg-surface-container-lowest rounded-xl p-6 text-left editorial-shadow space-y-4">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXXKiMql1bazy4QtbbMvaLTPz7pc178qpeqJxwFuie8Hk1M1tLIee_UOwwgnLuv6cXek36t7dFBW5hoo_QKsN537RRoTNtZ8-o4hNXBi0_cXsmdXHx0o_rg_iHj5aNjzLb2F1kXGZiZ-REIzeQS_38zSeTcVlwOxeft7YAV9EssqvxHI22nmM8gGhcaV-nIOFZAmSp5VfVgrEf3DUPWXhjBV69uQHNiU1l7SlA3fsE8aWBjyJIC0JLWkfJLoLE81pInpTk7vuFNQ" alt="Profile of Elena" />
                </div>
                <h3 className="font-headline text-2xl text-on-surface">Elena, 28</h3>
                <p className="text-on-surface-variant text-sm">Art Historian & Morning Person</p>
                <p className="text-on-surface-variant text-sm italic">"I find beauty in the quiet details and the stories behind the art."</p>
              </div>
              {/* Profile Card 3 */}
              <div className="bg-surface-container-lowest rounded-xl p-6 text-left editorial-shadow space-y-4">
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrTfF25anTWIa12wWU4CckgHJ7pdS1vMUGXyyewzZpMOgNkAZX14KN1lFwGB3SvguBo2_m5CEPpQa7byteUl7CU4rfDmfe0ypAckRIVjQnKGF6Tltn_Afryi9bfZJCfv0MdYAaOrDToJ2yuMMrs3VEF0g1vPweq3-6xTIj3CA0-yaGylI_vf52W9rB0wTpFtu3GEL8fIAhsv6Fmu2aWv_Jq1AWZgI0DTadgvlJXabZYLUxL0z8_bATuCsy0c2O4pVmPCudDJIW8Q" alt="Profile of Marcus" />
                </div>
                <h3 className="font-headline text-2xl text-on-surface">Marcus, 32</h3>
                <p className="text-on-surface-variant text-sm">Classical Pianist & Hiker</p>
                <p className="text-on-surface-variant text-sm italic">"Looking for someone to share both quiet moments and grand adventures."</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-32 px-8 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto text-center">
            <p className="font-romantic text-secondary text-4xl mb-4">The Process</p>
            <h2 className="text-5xl lg:text-7xl font-headline italic tracking-tighter text-on-surface leading-tight mb-16">
              A Simple Process to Find Love
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {/* Step 1 */}
              <div className="bg-surface-container p-8 rounded-xl editorial-shadow space-y-4">
                <span className="text-primary font-bold text-2xl">01</span>
                <h3 className="font-headline text-2xl text-on-surface">Create Your Dossier</h3>
                <p className="text-on-surface-variant text-sm">Go beyond the superficial. Our guided process helps you create a rich, detailed profile that tells your unique story.</p>
              </div>
              {/* Step 2 */}
              <div className="bg-surface-container p-8 rounded-xl editorial-shadow space-y-4">
                <span className="text-primary font-bold text-2xl">02</span>
                <h3 className="font-headline text-2xl text-on-surface">Discover & Be Discovered</h3>
                <p className="text-on-surface-variant text-sm">Explore our curated community of high-intent individuals. Our algorithm highlights profiles that align with your values and aspirations.</p>
              </div>
              {/* Step 3 */}
              <div className="bg-surface-container p-8 rounded-xl editorial-shadow space-y-4">
                <span className="text-primary font-bold text-2xl">03</span>
                <h3 className="font-headline text-2xl text-on-surface">Extend an Invitation</h3>
                <p className="text-on-surface-variant text-sm">When you find a connection that resonates, extend an invitation to start a conversation. It's a more intentional way to connect.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-32 px-8 bg-background">
          <div className="max-w-7xl mx-auto text-center">
            <p className="font-romantic text-secondary text-4xl mb-4">Success Stories</p>
            <h2 className="text-5xl lg:text-7xl font-headline italic tracking-tighter text-on-surface leading-tight mb-16">
              Real Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {/* Testimonial 1 */}
              <div className="bg-surface-container-lowest p-8 rounded-xl editorial-shadow space-y-4">
                <p className="text-on-surface-variant text-sm italic">"We connected over a shared love for classic literature and rainy afternoons. ZoraMeeto gave us the space to discover that."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPE5ZVRjIfrph1fdaip5VbRx_Jf7OD1aNSrgXBLbPjGIgKVcU1qsLt1YwQPmkjhiuI2HfyJYpBeQtVny1rg10wYq38SFaKkj4Zn5aSQNx9Eb6kzPBQokNP_v2q5BbOjJiFClyVHw5-K3-ap697kDtNuN-lqOhsfjfXvzOVxxJFBTnXvmRM2i1Zj5nKPzM_OGx90YlDJln1D-oSYDI8UBk9FG219FYWvzTIM9hJqbi1wNwAIZCIZTJdLUnK1I0HbChutj3zVGTKhA" alt="Portrait of Sarah" />
                  </div>
                  <div>
                    <h4 className="font-headline text-xl text-on-surface">Sarah & Tom</h4>
                    <p className="text-on-surface-variant text-xs">Matched in 2023</p>
                  </div>
                </div>
              </div>
              {/* Testimonial 2 */}
              <div className="bg-surface-container-lowest p-8 rounded-xl editorial-shadow space-y-4">
                <p className="text-on-surface-variant text-sm italic">"I was tired of the endless swiping. ZoraMeeto's curated approach led me to my amazing partner. I'm so grateful."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwgi2SOY0-PsO3JtJbzxLlhKETVbTZM3FtEeR4yUIMgC8IL3bFLT_XIvehAlJESHNkSEHoGXv0w0cqPEK968H7fxnMlEpMQnBOp_pDjVGcotPmZF5bBw7hRmrhqZZ-E2-glVG1HqxgPqqydUKwECkvrjELL16_D6GHBuJyuALlEX-7jMvJZcwysSQYpCY_VfwHN2W_bEGsgCD5sySRI4xGyfiYGVkNxUBoTDUDzFY2-Un8_35psU1eNoGCkTQXi6aWiRjp5xjFPw" alt="Portrait of Emily" />
                  </div>
                  <div>
                    <h4 className="font-headline text-xl text-on-surface">Emily & James</h4>
                    <p className="text-on-surface-variant text-xs">Matched in 2023</p>
                  </div>
                </div>
              </div>
              {/* Testimonial 3 */}
              <div className="bg-surface-container-lowest p-8 rounded-xl editorial-shadow space-y-4">
                <p className="text-on-surface-variant text-sm italic">"The 'dossier' concept is brilliant. It allowed me to express myself fully and find someone who truly gets me."</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxbI1Slr9h_Lfh_LLkGKlokjcZBefyYfO80fzJ41n68mmo69ufhHmScYu7b-CfJX8lldNRbEUktseloYX9Op2SST0pOSkIlOd0-3tvRb3O0bWHGoO1VsojHYpDTJ0MMyxNagrLB2dA89Cw_-_46YommyFl1grDpiFYSFPNWB6czwmi606MNPQBTWW7OtLiERcyip7F2mBjJe6gS90ZYBJ8mdOY88VCuBntmJOy9N-40h-Dgd6O1P6d5m64-KnMQrfliXORprjlXA" alt="Portrait of David" />
                  </div>
                  <div>
                    <h4 className="font-headline text-xl text-on-surface">David & Chloe</h4>
                    <p className="text-on-surface-variant text-xs">Matched in 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Asymmetric Editorial Feature */}
        <section className="py-32 px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-[4/5] bg-surface-container overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover scale-110"
                  alt="elegant couple sharing a quiet moment in a vintage Parisian cafe at twilight with soft warm lights"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNKFQrvuiYu0n4JdL1H_SChtOm3YMmzvC-0tC1ClbzIbZtLqXrS5XmFnGUO_0bJzjgicS_sejLYFD-diDnxHmhuFaviOXmKuQpkGiu1h7s4XQSBEJ33TStuqXpvEAzBsLHB9yGY2DkUOuiMgIxQw4eroOrdncCUcYxSoUds5eYqyqdVyesY2lFgI_pxuGhDUJPeIhOyp0q6CIOSkb-DUewkSBn10o2EtmkZXyQ6_yeRaU40ZG3Kxi2C5RAUqtvq8ftumqwvjhOjg"
                />
              </div>
              {/* Overlapping Decorative Card */}
              <div className="absolute -bottom-10 -right-10 bg-surface-container-lowest p-8 editorial-shadow max-w-[280px] rounded-xl hidden lg:block">
                <span
                  className="material-symbols-outlined text-primary text-4xl mb-4"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  favorite
                </span>
                <p className="font-headline italic text-xl leading-snug">
                  &quot;We didn&apos;t just meet, we discovered each other.&quot;
                </p>
                <p className="mt-4 text-sm font-bold uppercase tracking-widest text-secondary">
                   Elena &amp; Marc
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-8">
              <p className="font-romantic text-secondary text-4xl">
                The Zora Philosophy
              </p>
              <h2 className="text-5xl lg:text-7xl font-headline italic tracking-tighter text-on-surface leading-tight">
                Beyond the <br />
                Digital Surface.
              </h2>
              <p className="text-lg leading-relaxed text-on-surface-variant font-body">
                In an era of endless swiping, ZoraMeeto returns to the essence of
                romance. We use high-fidelity behavioral matching and intentional
                design to ensure every interaction feels like a curated gallery
                visit.
              </p>
              <div className="pt-6">
                <a
                  className="text-on-surface font-bold text-lg underline decoration-secondary decoration-2 underline-offset-8 hover:text-primary transition-colors"
                  href="#"
                >
                  Read Our Editorial Story
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}