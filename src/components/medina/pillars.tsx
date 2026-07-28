"use client";

import { useState } from "react";
import { ArrowRight, Check, X, TrendingUp } from "lucide-react";
import { PILLARS, type PillarId } from "@/lib/medina-data";
import { Reveal, Counter } from "./anim";
import { cn } from "@/lib/utils";

const ACCENT_TEXT: Record<string, string> = {
  emerald: "text-emerald-400",
  amber: "text-amber-400",
  cyan: "text-cyan-400",
};
const ACCENT_BG: Record<string, string> = {
  emerald: "bg-emerald-500/10 border-emerald-500/30",
  amber: "bg-amber-500/10 border-amber-500/30",
  cyan: "bg-cyan-500/10 border-cyan-500/30",
};
const ACCENT_GRADIENT: Record<string, string> = {
  emerald: "from-emerald-500 to-emerald-600",
  amber: "from-amber-500 to-amber-600",
  cyan: "from-cyan-500 to-cyan-600",
};

export function Pillars() {
  const [active, setActive] = useState<PillarId>("pajak");
  const pillar = PILLARS.find((p) => p.id === active)!;

  return (
    <section id="pilar" className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400 mb-4">
            Tiga Pilar Ekonomi
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-5">
            Tiga Aliran Yang Membentuk
            <br />
            <span className="text-gradient-civic">Ekonomi Smart City</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Setiap pilar adalah mesin tersendiri, namun ketiganya berbagi satu
            sumber data, satu identitas warga, satu standar keamanan. Inilah yang
            membuat ekonomi daerah bergerak sebagai satu organisme.
          </p>
        </Reveal>

        {/* Tab selector */}
        <Reveal className="flex justify-center mb-10">
          <div className="inline-flex gap-1 p-1.5 rounded-2xl glass-strong">
            {PILLARS.map((p) => {
              const isActive = p.id === active;
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  className={cn(
                    "relative px-4 sm:px-6 py-3 rounded-xl text-sm font-semibold transition-all flex items-center gap-2.5",
                    isActive ? "text-emerald-950" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {isActive && (
                    <span
                      className={cn(
                        "absolute inset-0 rounded-xl bg-gradient-to-r shadow-lg",
                        ACCENT_GRADIENT[p.accent]
                      )}
                    />
                  )}
                  <p.icon className="relative size-4" />
                  <span className="relative hidden sm:inline">{p.name}</span>
                  <span className="relative sm:hidden">{p.code}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Active pillar detail */}
        <div key={active} className="reveal-fade">
          <div className="grid lg:grid-cols-12 gap-6">
            {/* Left: description + before/after */}
            <div className="lg:col-span-7 space-y-6">
              <div className="glass-strong rounded-3xl p-7 lg:p-9">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={cn(
                      "size-12 rounded-2xl grid place-items-center border",
                      ACCENT_BG[pillar.accent]
                    )}
                  >
                    <pillar.icon className={cn("size-6", ACCENT_TEXT[pillar.accent])} />
                  </div>
                  <div>
                    <div className={cn("text-xs font-semibold uppercase tracking-wider", ACCENT_TEXT[pillar.accent])}>
                      Modul {pillar.code}
                    </div>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold">
                      {pillar.name}
                    </h3>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-2">
                  {pillar.description}
                </p>
                <p className={cn("text-base font-medium italic", ACCENT_TEXT[pillar.accent])}>
                  “{pillar.tagline}”
                </p>
              </div>

              {/* Before / After */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-rose-500/20 bg-rose-500/[0.04] p-5">
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-400 mb-3">
                    <X className="size-3.5" /> SEBELUM
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.before}
                  </p>
                </div>
                <div className={cn("rounded-2xl border bg-emerald-500/[0.04] p-5", `border-${pillar.accent}-500/20`)} style={{ borderColor: "oklch(0.72 0.17 155 / 0.25)" }}>
                  <div className={cn("inline-flex items-center gap-1.5 text-xs font-semibold mb-3", ACCENT_TEXT[pillar.accent])}>
                    <Check className="size-3.5" /> SESUDAH
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">
                    {pillar.after}
                  </p>
                </div>
              </div>

              {/* Features grid */}
              <div className="grid sm:grid-cols-2 gap-3">
                {pillar.features.map((f) => (
                  <div
                    key={f.title}
                    className="glass rounded-xl p-4 flex gap-3 lift-hover"
                  >
                    <div className={cn("size-9 shrink-0 rounded-lg grid place-items-center", ACCENT_BG[f.icon === pillar.icon ? pillar.accent : pillar.accent])}>
                      <f.icon className={cn("size-4", ACCENT_TEXT[pillar.accent])} />
                    </div>
                    <div>
                      <div className="font-semibold text-sm mb-0.5">{f.title}</div>
                      <div className="text-xs text-muted-foreground leading-relaxed">
                        {f.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: metrics panel */}
            <div className="lg:col-span-5 space-y-4">
              <div className="glass-strong rounded-3xl p-7">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                    Indikator Kinerja
                  </h4>
                  <span className={cn("inline-flex items-center gap-1 text-xs font-semibold", ACCENT_TEXT[pillar.accent])}>
                    <TrendingUp className="size-3.5" /> Live
                  </span>
                </div>
                <div className="space-y-5">
                  {pillar.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="flex items-baseline justify-between mb-1.5">
                        <span className="text-sm text-muted-foreground">{m.label}</span>
                        {m.delta && (
                          <span className="text-[11px] font-semibold text-emerald-400">
                            {m.delta}
                          </span>
                        )}
                      </div>
                      <div className="font-display text-2xl lg:text-3xl font-bold">
                        {m.value}
                      </div>
                      <div className="mt-2 h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <div
                          className={cn("h-full rounded-full bg-gradient-to-r", ACCENT_GRADIENT[pillar.accent])}
                          style={{
                            width: `${30 + ((pillar.metrics.indexOf(m) * 17 + pillar.code.charCodeAt(2)) % 65)}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Flow mini-visual */}
              <div className="glass rounded-3xl p-6">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-4 font-semibold">
                  Alur {pillar.name}
                </div>
                <FlowMini accent={pillar.accent} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowMini({ accent }: { accent: string }) {
  const steps = ["Input", "Validasi", "Proses", "Output"];
  const color = ACCENT_TEXT[accent];
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-2">
        {steps.map((s, i) => (
          <div key={s} className="flex-1 flex flex-col items-center gap-2">
            <div
              className={cn(
                "size-9 rounded-full grid place-items-center text-xs font-bold border",
                i === 0 ? cn(color, "border-current bg-current/10") : "text-muted-foreground border-white/10 bg-white/[0.03]"
              )}
            >
              {i + 1}
            </div>
            <span className="text-[10px] text-muted-foreground">{s}</span>
          </div>
        ))}
      </div>
      <svg viewBox="0 0 200 20" className="w-full h-5" preserveAspectRatio="none">
        <line
          x1="0" y1="10" x2="200" y2="10"
          stroke="oklch(0.72 0.17 155 / 0.6)"
          strokeWidth="1.5"
          className="flow-line"
        />
      </svg>
    </div>
  );
}
