"use client";

import { BUREAUCRACY_CYCLE } from "@/lib/medina-data";
import { Reveal } from "./anim";
import { cn } from "@/lib/utils";
import { ArrowRight, RefreshCw } from "lucide-react";

const COLOR = {
  emerald: { text: "text-emerald-400", bg: "bg-emerald-500/15", border: "border-emerald-500/30", dot: "bg-emerald-400" },
  cyan: { text: "text-cyan-400", bg: "bg-cyan-500/15", border: "border-cyan-500/30", dot: "bg-cyan-400" },
  amber: { text: "text-amber-400", bg: "bg-amber-500/15", border: "border-amber-500/30", dot: "bg-amber-400" },
};

export function BureaucracyCycle() {
  return (
    <section id="birokrasi" className="relative py-16 lg:py-24 border-t border-white/[0.05]">
      <div className="absolute top-0 right-1/4 size-[28rem] rounded-full bg-cyan-500/[0.06] blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400 mb-4">
            Siklus Birokrasi Tertutup
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-5">
            9 Modul Internal,
            <br />
            <span className="text-gradient-civic">Satu Siklus Tanpa Kebocoran</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Perencanaan → Penganggaran → Pelaksanaan → Pengawasan → Pelaporan.
            Siklus tertutup yang menjamin setiap rupiah APBD terlacak dari rencana
            hingga laporan akhir.
          </p>
        </Reveal>

        {/* Closed cycle visualization */}
        <Reveal delay={100}>
          <div className="glass-strong rounded-3xl p-6 lg:p-8 mb-6">
            {/* Cycle flow */}
            <div className="flex items-center justify-between gap-2 mb-6 overflow-x-auto scroll-civic pb-2">
              {BUREAUCRACY_CYCLE.map((phase, i) => {
                const c = COLOR[phase.color as keyof typeof COLOR];
                return (
                  <div key={phase.phase} className="flex items-center gap-2 shrink-0">
                    <div className={cn("flex flex-col items-center gap-1.5 px-3 py-2 rounded-xl border", c.bg, c.border)}>
                      <div className="flex items-center gap-1.5">
                        <span className={cn("size-1.5 rounded-full", c.dot)} />
                        <span className={cn("text-[10px] font-bold uppercase tracking-wider", c.text)}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <span className="text-xs font-semibold whitespace-nowrap">{phase.label}</span>
                    </div>
                    {i < BUREAUCRACY_CYCLE.length - 1 && (
                      <ArrowRight className="size-4 text-muted-foreground shrink-0" />
                    )}
                  </div>
                );
              })}
              {/* Loop back arrow */}
              <div className="flex items-center gap-1.5 shrink-0 text-emerald-400">
                <RefreshCw className="size-4" />
                <span className="text-[10px] font-semibold uppercase tracking-wider">Loop</span>
              </div>
            </div>

            {/* Modules detailed grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {BUREAUCRACY_CYCLE.flatMap((phase) =>
                phase.modules.map((m) => {
                  const c = COLOR[phase.color as keyof typeof COLOR];
                  return (
                    <div
                      key={m.id}
                      className="glass rounded-xl p-4 lift-hover border border-white/5"
                    >
                      <div className="flex items-start gap-3">
                        <div className={cn("size-10 rounded-lg grid place-items-center shrink-0", c.bg)}>
                          <m.icon className={cn("size-5", c.text)} />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className={cn("text-[9px] font-bold uppercase tracking-wider", c.text)}>
                              {phase.label}
                            </span>
                          </div>
                          <h3 className="font-semibold text-sm leading-tight mb-1">{m.name}</h3>
                          <p className="text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </Reveal>

        {/* Cycle principle */}
        <Reveal delay={200}>
          <div className="grid sm:grid-cols-4 gap-3">
            {CYCLE_PRINCIPLES.map((p) => (
              <div key={p.title} className="glass rounded-2xl p-4 text-center">
                <div className="font-display text-2xl font-bold text-emerald-400 mb-1">{p.value}</div>
                <div className="text-xs font-semibold mb-1">{p.title}</div>
                <div className="text-[10px] text-muted-foreground leading-relaxed">{p.desc}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const CYCLE_PRINCIPLES = [
  { title: "Microservices", value: "9", desc: "Modul terpisah namun terintegrasi" },
  { title: "Data Warehouse", value: "Real-time", desc: "514 kab & 38 prov tersinkron" },
  { title: "AI/ML", value: "14 model", desc: "Predictive analytics & targeting" },
  { title: "Zero Trust", value: "100%", desc: "Encryption, audit trail, RBAC" },
];
