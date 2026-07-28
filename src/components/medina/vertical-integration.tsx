"use client";

import { VERTICAL_TIERS } from "@/lib/medina-data";
import { Reveal } from "./anim";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";

const ACCENT = {
  emerald: { text: "text-emerald-400", bg: "bg-emerald-500/15", border: "border-emerald-500/30", grad: "from-emerald-500 to-emerald-600" },
  amber: { text: "text-amber-400", bg: "bg-amber-500/15", border: "border-amber-500/30", grad: "from-amber-500 to-amber-600" },
  cyan: { text: "text-cyan-400", bg: "bg-cyan-500/15", border: "border-cyan-500/30", grad: "from-cyan-500 to-cyan-600" },
};

// Piramida jenjang: Desa (lebar) → Pusat (sempit). Data mengalir ke atas.
export function VerticalIntegration() {
  // Reverse for visual: desa at bottom (widest), pusat at top (narrowest)
  const tiersTopDown = [...VERTICAL_TIERS].reverse(); // pusat, provinsi, kabupaten, desa

  return (
    <section id="jenjang" className="relative py-16 lg:py-24 border-t border-white/[0.05] bg-gradient-to-b from-transparent via-amber-950/10 to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-400 mb-4">
            Integrasi Vertikal 4 Jenjang
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-5">
            Dari Desa ke Pusat,
            <br />
            <span className="text-gradient-amber">Satu Arus Data Ekonomi</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Data mengalir dari akar desa, melewati kabupaten, provinsi, hingga
            National Economic Command Center. Setiap jenjang punya peran, semua
            terhubung dalam satu kebenaran.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left: pyramid visual */}
          <Reveal className="lg:col-span-5">
            <div className="relative space-y-2 max-w-md mx-auto">
              {/* Flow arrow on the side */}
              <div className="absolute -right-4 top-0 bottom-0 flex flex-col items-center justify-center gap-2 z-10">
                <ArrowUp className="size-5 text-amber-400" />
                <div className="text-[9px] uppercase tracking-wider text-amber-400 font-bold writing-mode-vertical whitespace-nowrap" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                  Alur Data
                </div>
              </div>

              {tiersTopDown.map((tier, i) => {
                const a = ACCENT[tier.accent];
                const width = 55 + i * 15; // narrowest at top (pusat), widest at bottom (desa)
                return (
                  <div
                    key={tier.id}
                    className="mx-auto transition-all duration-300"
                    style={{ width: `${width}%` }}
                  >
                    <div className={cn(
                      "glass-strong rounded-2xl p-4 border-2 flex items-center gap-3 lift-hover",
                      a.border
                    )}>
                      <div className={cn("size-10 rounded-xl grid place-items-center shrink-0", a.bg)}>
                        <tier.icon className={cn("size-5", a.text)} />
                      </div>
                      <div className="min-w-0">
                        <div className={cn("text-[9px] uppercase tracking-wider font-bold", a.text)}>
                          {tier.level}
                        </div>
                        <div className="font-display font-bold text-sm leading-tight">{tier.title}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          {/* Right: tier detail cards */}
          <Reveal delay={120} className="lg:col-span-7">
            <div className="space-y-3">
              {VERTICAL_TIERS.map((tier) => {
                const a = ACCENT[tier.accent];
                return (
                  <div key={tier.id} className={cn("glass rounded-2xl p-5 border border-white/5 lift-hover")}>
                    <div className="flex items-start gap-4">
                      <div className={cn("size-12 rounded-xl grid place-items-center shrink-0", a.bg)}>
                        <tier.icon className={cn("size-6", a.text)} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-2 mb-1">
                          <span className={cn("text-[10px] uppercase tracking-wider font-bold", a.text)}>
                            {tier.level}
                          </span>
                          <h3 className="font-display font-bold">{tier.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{tier.desc}</p>
                        <div className="flex flex-wrap gap-1.5">
                          {tier.features.map((f) => (
                            <span
                              key={f}
                              className={cn("text-[10px] font-medium px-2 py-0.5 rounded-md", a.bg, a.text)}
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
