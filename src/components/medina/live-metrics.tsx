"use client";

import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { LIVE_METRICS } from "@/lib/medina-data";
import { Reveal, Sparkline } from "./anim";
import { cn } from "@/lib/utils";

const ACCENT = {
  emerald: "text-emerald-400",
  amber: "text-amber-400",
  cyan: "text-cyan-400",
};

export function LiveMetrics() {
  return (
    <section className="relative py-16 lg:py-24 border-y border-white/[0.05] bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400 mb-3">
              <span className="live-dot" /> Live Dashboard · Update tiap detik
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
              Detak Ekonomi Smart City,
              <span className="text-gradient-emerald"> Dalam Satu Layar</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Data agregat dari 514 daerah, ditarik langsung dari MEDINA Core — mesin
            ekonomi nasional. Bukan estimasi, bukan proyeksi.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {LIVE_METRICS.map((m, i) => (
            <Reveal key={m.label} delay={i * 80}>
              <div className="glass rounded-2xl p-5 h-full lift-hover relative overflow-hidden">
                <div className="absolute -top-8 -right-8 size-24 rounded-full bg-emerald-500/10 blur-2xl" />
                <div className="flex items-start justify-between mb-4">
                  <div className="size-10 rounded-xl bg-white/5 grid place-items-center">
                    <m.icon className="size-5 text-emerald-400" />
                  </div>
                  <span
                    className={cn(
                      "inline-flex items-center gap-0.5 text-xs font-semibold px-2 py-0.5 rounded-md",
                      m.trend === "up"
                        ? "text-emerald-400 bg-emerald-500/10"
                        : "text-amber-400 bg-amber-500/10"
                    )}
                  >
                    {m.trend === "up" ? (
                      <ArrowUpRight className="size-3" />
                    ) : (
                      <ArrowDownRight className="size-3" />
                    )}
                    {m.delta}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5">
                  {m.label}
                </div>
                <div className="font-display text-3xl font-bold leading-none mb-3">
                  {m.value}
                  {m.unit && (
                    <span className="text-base font-medium text-muted-foreground ml-1">
                      {m.unit}
                    </span>
                  )}
                </div>
                <Sparkline
                  data={m.sparkline}
                  color={
                    m.trend === "up"
                      ? "oklch(0.72 0.17 155)"
                      : "oklch(0.8 0.16 75)"
                  }
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
