"use client";

import { KPI_2030 } from "@/lib/medina-data";
import { Reveal, Counter } from "./anim";
import { cn } from "@/lib/utils";
import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";

const ACCENT = {
  emerald: { text: "text-emerald-400", bg: "bg-emerald-500/15", border: "border-emerald-500/30" },
  amber: { text: "text-amber-400", bg: "bg-amber-500/15", border: "border-amber-500/30" },
  cyan: { text: "text-cyan-400", bg: "bg-cyan-500/15", border: "border-cyan-500/30" },
};

export function KPI2030() {
  return (
    <section id="kpi" className="relative py-16 lg:py-24 border-t border-white/[0.05] bg-gradient-to-b from-transparent via-emerald-950/15 to-transparent">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[36rem] rounded-full bg-emerald-500/[0.07] blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400 mb-4">
            Target KPI 2030
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-5">
            Visi Terukur untuk
            <br />
            <span className="text-gradient-civic">Indonesia Maju 2030</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Bukan janji tanpa angka. Setiap target KPI terukur, terverifikasi,
            dan dilaporkan publik via Dashboard Nasional Real-Time.
          </p>
        </Reveal>

        {/* Reach KPIs */}
        <Reveal className="mb-6">
          <div className="glass-strong rounded-3xl p-6 lg:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                  Jangkauan Nasional
                </div>
                <h3 className="font-display font-bold text-lg">Skala Transformasi 2030</h3>
              </div>
              <Sparkles className="size-6 text-emerald-400" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {KPI_2030.reach.map((r, i) => {
                const a = ACCENT[r.accent];
                return (
                  <div key={r.label} className={cn("rounded-2xl p-5 border text-center", a.bg, a.border)}>
                    <r.icon className={cn("size-7 mx-auto mb-3", a.text)} />
                    <div className={cn("font-display text-3xl lg:text-4xl font-bold leading-none mb-2", a.text)}>
                      <Counter value={r.value} suffix={r.suffix} duration={2200} />
                    </div>
                    <div className="text-xs text-muted-foreground leading-tight">{r.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Impact KPIs */}
        <Reveal delay={120}>
          <div className="glass-strong rounded-3xl p-6 lg:p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                  Dampak Keuangan & Ekonomi
                </div>
                <h3 className="font-display font-bold text-lg">Key Performance Indicators</h3>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {KPI_2030.impact.map((k, i) => {
                const isDown = k.trend === "down";
                return (
                  <div key={k.label} className="glass rounded-2xl p-5 lift-hover">
                    <div className="flex items-start justify-between mb-3">
                      <div className="size-10 rounded-xl bg-white/5 grid place-items-center">
                        <k.icon className="size-5 text-emerald-400" />
                      </div>
                      <span
                        className={cn(
                          "inline-flex items-center gap-0.5 text-xs font-semibold px-2 py-0.5 rounded-md",
                          isDown
                            ? "text-rose-400 bg-rose-500/10"
                            : "text-emerald-400 bg-emerald-500/10"
                        )}
                      >
                        {isDown ? <ArrowDownRight className="size-3" /> : <ArrowUpRight className="size-3" />}
                        {isDown ? "Turun" : "Naik"}
                      </span>
                    </div>
                    <div className={cn("font-display text-3xl font-bold leading-none mb-1", isDown ? "text-rose-400" : "text-emerald-400")}>
                      {k.value > 0 && k.trend === "up" ? "+" : ""}
                      <Counter value={Math.abs(k.value)} suffix={k.suffix} duration={2000} />
                    </div>
                    <div className="text-sm font-semibold mb-1">{k.label}</div>
                    <div className="text-xs text-muted-foreground">{k.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Social impact banner */}
        <Reveal delay={200}>
          <div className="mt-6 glass rounded-3xl p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-amber-500/20 border border-white/10 grid place-items-center">
                <Sparkles className="size-6 text-emerald-400" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                  Dampak Sosial
                </div>
                <div className="font-display font-bold text-base">Empat Pilar Indonesia Maju</div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {KPI_2030.social.map((s, i) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                >
                  {i + 1}. {s}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
