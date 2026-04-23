import Link from "next/link";

export default function AppShowcase() {
  return (
    <>

      <main className="pt-25 pb-25 overflow-hidden">
        <section className="max-w-7xl mx-auto px-8 text-center mb-24">
          <span className="text-secondary font-headline italic text-xl mb-4 block">The Digital Atelier</span>
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface mb-6 max-w-4xl mx-auto leading-tight">
            The interface of <span className="text-primary italic">intentional intimacy.</span>
          </h1>
          <p className="font-body text-on-surface-variant text-lg max-w-2xl mx-auto leading-relaxed">
            Experience a dating environment curated like a private gallery. Where every interaction is a brushstroke on the canvas of a meaningful connection.
          </p>
        </section>

        <section className="px-4 md:px-8 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
            
            <div className="space-y-6">
              <div className="relative rounded-[3rem] border-[8px] border-on-surface aspect-[9/19] bg-surface-container overflow-hidden editorial-shadow">
                <div className="absolute top-0 w-full flex justify-between px-8 py-4 z-20">
                  <span className="text-on-surface font-bold text-xs">9:41</span>
                  <div className="flex gap-1.5">
                    <span className="material-symbols-outlined text-[14px]">signal_cellular_4_bar</span>
                    <span className="material-symbols-outlined text-[14px]">wifi</span>
                    <span className="material-symbols-outlined text-[14px]">battery_full</span>
                  </div>
                </div>
                <div className="h-full pt-12 px-4 pb-4 overflow-y-auto bg-surface">
                  <div className="flex justify-between items-center mb-6 px-2">
                    <h2 className="font-headline text-2xl font-bold italic text-primary">Discover</h2>
                    <span className="material-symbols-outlined text-secondary">tune</span>
                  </div>
                  <div className="relative rounded-xl overflow-hidden aspect-[3/4] mb-4 editorial-shadow bg-surface-container-low">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="w-full h-full object-cover" alt="Sophisticated woman in silk dress" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXXKiMql1bazy4QtbbMvaLTPz7pc178qpeqJxwFuie8Hk1M1tLIee_UOwwgnLuv6cXek36t7dFBW5hoo_QKsN537RRoTNtZ8-o4hNXBi0_cXsmdXHx0o_rg_iHj5aNjzLb2F1kXGZiZ-REIzeQS_38zSeTcVlwOxeft7YAV9EssqvxHI22nmM8gGhcaV-nIOFZAmSp5VfVgrEf3DUPWXhjBV69uQHNiU1l7SlA3fsE8aWBjyJIC0JLWkfJLoLE81pInpTk7vuFNQ" />
                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-secondary-container text-on-secondary-container text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full font-bold">New Curator</span>
                      </div>
                      <h3 className="text-white font-headline text-2xl -ml-2">Elena, 28</h3>
                      <p className="text-white/80 text-xs font-body italic">Art Historian &amp; Morning Person</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl overflow-hidden aspect-square bg-surface-container-low">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="w-full h-full object-cover" alt="Distinguished young man" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxbI1Slr9h_Lfh_LLkGKlokjcZBefyYfO80fzJ41n68mmo69ufhHmScYu7b-CfJX8lldNRbEUktseloYX9Op2SST0pOSkIlOd0-3tvRb3O0bWHGoO1VsojHYpDTJ0MMyxNagrLB2dA89Cw_-_46YommyFl1grDpiFYSFPNWB6czwmi606MNPQBTWW7OtLiERcyip7F2mBjJe6gS90ZYBJ8mdOY88VCuBntmJOy9N-40h-Dgd6O1P6d5m64-KnMQrfliXORprjlXA" />
                    </div>
                    <div className="rounded-xl overflow-hidden aspect-square bg-surface-container-low">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="w-full h-full object-cover" alt="Woman with warm smile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwgi2SOY0-PsO3JtJbzxLlhKETVbTZM3FtEeR4yUIMgC8IL3bFLT_XIvehAlJESHNkSEHoGXv0w0cqPEK968H7fxnMlEpMQnBOp_pDjVGcotPmZF5bBw7hRmrhqZZ-E2-glVG1HqxgPqqydUKwECkvrjELL16_D6GHBuJyuALlEX-7jMvJZcwysSQYpCY_VfwHN2W_bEGsgCD5sySRI4xGyfiYGVkNxUBoTDUDzFY2-Un8_35psU1eNoGCkTQXi6aWiRjp5xjFPw" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center px-4">
                <h4 className="font-headline font-bold text-xl mb-1">Discover Feed</h4>
                <p className="text-on-surface-variant text-sm">Visual-first exploration with editorial depth.</p>
              </div>
            </div>

            <div className="space-y-6 lg:mt-12">
              <div className="relative rounded-[3rem] border-[8px] border-on-surface aspect-[9/19] bg-surface-container overflow-hidden editorial-shadow">
                <div className="h-full bg-primary flex flex-col items-center justify-center p-8 text-center relative">
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="w-full h-full object-cover" alt="Abstract soft focus" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApEON26HgXuKLRYVQWeIyUrORBPjuZ662B1iRnPXmD1qJcCb1m1L9hWDc9KAYB8EqY0dg5vTRgP3bS9gfugYedAzKTidWi84vrANqgOq2C8W1DqHIQpHHY-s2m3xevrBgTIW_XbnNXU9G_H62YOqdwDzyKSl3Cx0g60NEampGkxNa8bty6FpKElEwg8HNSaZk2E5OuNM_lzjy3OqM7Hs3i_d_o0MSpDH1_vAW_9kcISSPQd2XlY7t37b5hZGem5PrjJt5KejP5Uw" />
                  </div>
                  <span className="text-on-primary-fixed italic font-headline text-2xl mb-8">It&apos;s a Serendipity.</span>
                  <div className="flex -space-x-4 mb-8">
                    <div className="w-24 h-24 rounded-full border-4 border-primary overflow-hidden editorial-shadow z-10">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="w-full h-full object-cover" alt="Portrait of a woman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPE5ZVRjIfrph1fdaip5VbRx_Jf7OD1aNSrgXBLbPjGIgKVcU1qsLt1YwQPmkjhiuI2HfyJYpBeQtVny1rg10wYq38SFaKkj4Zn5aSQNx9Eb6kzPBQokNP_v2q5BbOjJiFClyVHw5-K3-ap697kDtNuN-lqOhsfjfXvzOVxxJFBTnXvmRM2i1Zj5nKPzM_OGx90YlDJln1D-oSYDI8UBk9FG219FYWvzTIM9hJqbi1wNwAIZCIZTJdLUnK1I0HbChutj3zVGTKhA" />
                    </div>
                    <div className="w-24 h-24 rounded-full border-4 border-primary overflow-hidden editorial-shadow">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="w-full h-full object-cover" alt="Portrait of a man" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrTfF25anTWIa12wWU4CckgHJ7pdS1vMUGXyyewzZpMOgNkAZX14KN1lFwGB3SvguBo2_m5CEPpQa7byteUl7CU4rfDmfe0ypAckRIVjQnKGF6Tltn_Afryi9bfZJCfv0MdYAaOrDToJ2yuMMrs3VEF0g1vPweq3-6xTIj3CA0-yaGylI_vf52W9rB0wTpFtu3GEL8fIAhsv6Fmu2aWv_Jq1AWZgI0DTadgvlJXabZYLUxL0z8_bATuCsy0c2O4pVmPCudDJIW8Q" />
                    </div>
                  </div>
                  <h3 className="text-white font-headline text-3xl font-bold mb-4">Elena &amp; Marcus</h3>
                  <p className="text-primary-container text-sm font-body mb-10 leading-relaxed">Both of you mentioned a love for <span className="italic font-bold text-white">Vivaldi&apos;s Winter</span> in your curators&apos; notes.</p>
                  <div className="w-full space-y-4">
                    <button className="w-full bg-white text-primary rounded-full py-4 font-bold tracking-wide uppercase text-xs">Send an Invitation</button>
                    <button className="w-full border border-white/30 text-white rounded-full py-4 font-bold tracking-wide uppercase text-xs">View Dossier</button>
                  </div>
                </div>
              </div>
              <div className="text-center px-4">
                <h4 className="font-headline font-bold text-xl mb-1">The &apos;Invitation&apos;</h4>
                <p className="text-on-surface-variant text-sm">Matching reimagined as an elegant social ritual.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative rounded-[3rem] border-[8px] border-on-surface aspect-[9/19] bg-surface-container overflow-hidden editorial-shadow">
                <div className="h-full flex flex-col bg-surface">
                  <div className="pt-12 px-6 pb-4 flex items-center gap-4 bg-surface-container-low">
                    <span className="material-symbols-outlined text-on-surface-variant">arrow_back_ios</span>
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img className="w-full h-full object-cover" alt="Elena profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4h5lOVo0WKMSYRNI3RSxp45GFqap0QQpugLSCOk8i7VBZve2Xb5i_7Mc_XvvIX-qO6V5aewpWhyIdxbdQX9mVDbnSadOEPcIWp5Cqzrj8ojIUwtTJpn1wx6rXEw2fxQfFz_PnkM77LA3x09HDD-w4_zP4SnDj3kAJex5NxG2HwINa5_xjtLfC5TH-8IH5EkYaxuGlgqzPp1hbefPJA5h7w-1bwaphlyC58DyG5Oc1VeYbJwzjXem8yPa8WtJPlLAmd5PupTaGxg" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-headline font-bold text-on-surface">Elena</h4>
                      <p className="text-[10px] text-secondary font-bold uppercase tracking-tighter">Writing now...</p>
                    </div>
                  </div>
                  <div className="flex-1 overflow-y-auto p-6 space-y-8">
                    <div className="text-center">
                      <span className="text-[10px] text-on-surface-variant/40 font-bold uppercase tracking-widest">Tuesday, 8:14 PM</span>
                    </div>
                    <div className="flex flex-col items-start max-w-[85%]">
                      <div className="bg-surface-container-high p-4 rounded-2xl rounded-tl-none">
                        <p className="text-sm text-on-surface leading-relaxed">I&apos;ve always found that the second movement of Winter feels more like a cozy fire than a cold frost. What do you think?</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end self-end max-w-[85%]">
                      <div className="bg-primary text-on-primary p-4 rounded-2xl rounded-tr-none">
                        <p className="text-sm leading-relaxed">Spot on. ItÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢s the rain against the window while you&apos;re safe inside. Precisely why it&apos;s my favorite.</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start max-w-[85%]">
                      <div className="bg-surface-container-high p-4 rounded-2xl rounded-tl-none">
                        <p className="text-sm text-on-surface leading-relaxed">Exactly. Are you attending the gallery opening this Friday? It feels like the right setting for this conversation.</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 pb-10">
                    <div className="relative">
                      <input className="w-full bg-surface-container-low border-none rounded-full py-4 pl-6 pr-12 text-sm focus:ring-1 focus:ring-secondary/30" placeholder="Share a thought..." type="text" />
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-primary">send</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center px-4">
                <h4 className="font-headline font-bold text-xl mb-1">Curated Dialogue</h4>
                <p className="text-on-surface-variant text-sm">Conversation spaces designed for slow, meaningful connection.</p>
              </div>
            </div>

            <div className="space-y-6 lg:mt-12">
              <div className="relative rounded-[3rem] border-[8px] border-on-surface aspect-[9/19] bg-surface-container overflow-hidden editorial-shadow">
                <div className="h-full overflow-y-auto bg-surface">
                  <div className="relative aspect-[4/5]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="w-full h-full object-cover" alt="Elena full profile shot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATGyS39LYbM-Dw7L4mCDNJ_zX-UYJIGGE6K5kRfZIhNgk2mxwdQXNlYQWrSNaFjS5yHk3__SLfNmpRlVpHxfZcbCz9PVhybLByihn9PYWmtw32KDI5eBnYFxcpQPv2zWtr2gmTNAAfp3ws86Jv4DucLvAxOem7K4zFB7pshfNfwac-EL_oKbdHStt90pra51rsaROXCMnj_tq5Ojuk9FSxdX2S8gM3wchA7aptyqdU9swYn1Mphvu5nW9livFsI9RwTET2wUx8fw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-6">
                      <h2 className="font-headline text-4xl font-bold text-on-surface -mb-2">Elena <span className="text-secondary italic">28</span></h2>
                      <p className="text-on-surface-variant text-sm mt-3 flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">location_on</span> Paris, France
                      </p>
                    </div>
                  </div>
                  <div className="p-6 space-y-8">
                    <div className="space-y-3">
                      <h5 className="text-[10px] font-bold text-secondary uppercase tracking-widest">The Dossier</h5>
                      <p className="text-on-surface text-sm leading-relaxed italic">
                        &quot;I believe beauty is found in the quiet detailsÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Âthe grain of old paper, the smell of rain on stone, and the pause between notes.&quot;
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h5 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Values &amp; Vibe</h5>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold">Curiosity</span>
                        <span className="bg-surface-container-highest px-3 py-1 rounded-full text-[10px] font-bold">Stillness</span>
                        <span className="bg-surface-container-highest px-3 py-1 rounded-full text-[10px] font-bold">Deep Talk</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h5 className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">My Sanctuary</h5>
                      <div className="rounded-xl overflow-hidden h-32 editorial-shadow">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className="w-full h-full object-cover" alt="Quiet old library" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD34lUnjN9_Xdm1H8tMfY0pWpEHaDuVVkJbEXS2U_TbbfUnGJU9wx8cDsYnmmR4zw6NGt0h9l25jGeGELksdH3argmr28rsz2ECK4V_FwmBYvMH9g_XK2Lz-ejZzpVrHOmdK1scxoU6ID01_LV_xWbsrprilXrdRbu6Hpf71XwQ6wCkBdHQ86QALPXtD3V9aS2qXcUvmtbMcp2lHM4DGP6g8C2dQSPcNlVu4FY6raBvgXtVxnujTlTXWXZI4mUiW36d-LWoSnp15A" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center px-4">
                <h4 className="font-headline font-bold text-xl mb-1">Dossier View</h4>
                <p className="text-on-surface-variant text-sm">Detailed member narratives beyond the superficial.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto px-8 mt-32 text-center">
          <div className="bg-surface-container-low rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-headline text-3xl md:text-5xl font-bold mb-8">Ready for a <span className="italic text-primary">richer</span> experience?</h2>
              <button className="bg-on-surface text-surface px-12 py-4 rounded-full font-bold tracking-wide uppercase text-sm active:scale-95 transition-transform">Download the Invitation</button>
            </div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
          </div>
        </section>
      </main>
    </>
  );
}