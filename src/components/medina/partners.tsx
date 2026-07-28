"use client";

import { PARTNERS } from "@/lib/medina-data";
import { Reveal } from "./anim";

export function Partners() {
  // Duplicate for seamless marquee
  const marquee = [...PARTNERS, ...PARTNERS];

  return (
    <section className="relative py-16 border-y border-white/[0.05] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-8">
        <Reveal className="text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-3">
            Kolaborasi Multi Pihak
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
            Tidak Berdiri Sendiri.
            <span className="text-muted-foreground"> Dibangun Bersama.</span>
          </h2>
        </Reveal>
      </div>

      <div className="relative">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee-slow">
          {marquee.map((p, i) => (
            <div
              key={`${p.name}-${i}`}
              className="flex items-center gap-3 px-8 py-4 mx-2 rounded-xl glass hover:bg-white/[0.06] transition-colors shrink-0"
            >
              <div className="size-8 rounded-lg bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-white/10 grid place-items-center">
                <span className="text-xs font-bold text-emerald-400">
                  {p.name.charAt(0)}
                </span>
              </div>
              <div>
                <div className="text-sm font-semibold whitespace-nowrap">{p.name}</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {p.type}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
