"use client";

import { PROGRAMS } from "@/lib/medina-data";
import { Reveal } from "./anim";

export function Programs() {
  return (
    <section id="program" className="relative py-16 lg:py-24 border-t border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400 mb-4">
              Program Ekonomi Digital
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight">
              Sembilan Program,
              <br />
              <span className="text-gradient-civic">Satu Tujuan: Ekonomi Mengalir</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm">
            Setiap program adalah gerbong yang berjalan di rel MEDINA Core.
            Bisa berdiri sendiri, namun terhubung sempurna satu sama lain.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROGRAMS.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 80}>
              <div className="group relative glass rounded-2xl p-6 h-full lift-hover overflow-hidden">
                {/* hover gradient */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-emerald-500/[0.06] via-transparent to-cyan-500/[0.06]" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="size-12 rounded-xl bg-white/5 border border-white/5 grid place-items-center group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20 transition-all">
                      <p.icon className="size-6 text-emerald-400" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {p.desc}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        Skala
                      </div>
                      <div className="text-xs font-semibold">{p.scale}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        Dampak
                      </div>
                      <div className="text-xs font-semibold text-emerald-400">{p.impact}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
