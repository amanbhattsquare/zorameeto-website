"use client";

import { useState } from "react";

export default function DigitalDossier() {
  const [activeTab, setActiveTab] = useState("profile");

  const dossierData = {
    name: "Aria Chen",
    status: "Verified Member",
    tags: ["Art Professional", "Speaks 3 Languages", "Social Work"],
    details: {
      profile: "A creative professional based in Singapore who works with modern art. Aria values honesty, curiosity, and clear communication.",
      interests: ["Music", "Design", "Travel", "Books"],
      values: ["Honesty", "Growth", "Respect", "Open Mind"]
    }
  };

  return (
    <div className="bg-[#fdfdfb] border border-[#e8e6df] rounded-[3rem] p-12 shadow-2xl relative overflow-hidden group spotlight-card">
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
        <div className="space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Member Profile</span>
          <h3 className="text-5xl font-headline tracking-tighter text-text-main">{dossierData.name}</h3>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-muted">{dossierData.status}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {dossierData.tags.map(tag => (
              <span key={tag} className="px-3 py-1 bg-surface-soft border border-border text-[8px] font-bold uppercase tracking-widest rounded-full">{tag}</span>
            ))}
          </div>
        </div>
        <div className="w-32 h-32 rounded-3xl overflow-hidden shadow-xl rotate-3 group-hover:rotate-0 transition-all duration-700">
          <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400" alt="Member" className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="flex gap-10 border-b border-border mb-8">
        {["profile", "interests", "values"].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-[10px] font-bold uppercase tracking-[0.3em] transition-all relative ${activeTab === tab ? "text-primary" : "text-text-muted/50 hover:text-text-main"}`}
          >
            {tab}
            {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-px bg-primary"></div>}
          </button>
        ))}
      </div>

      <div className="min-h-[120px] animate-fade-up">
        <p className="text-lg text-text-main leading-relaxed font-light italic">
          {activeTab === "profile" && dossierData.details.profile}
          {activeTab === "interests" && dossierData.details.interests.join(", ")}
          {activeTab === "values" && dossierData.details.values.join(", ")}
        </p>
      </div>

      <div className="absolute bottom-10 right-10 opacity-5 select-none pointer-events-none">
        <span className="material-symbols-outlined text-8xl">all_inclusive</span>
      </div>
    </div>
  );
}
