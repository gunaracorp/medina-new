"use client";

import { useState } from "react";
import { SERVICE_MODULES, SEKTORAL } from "@/lib/medina-data";
import { Reveal } from "./anim";
import { cn } from "@/lib/utils";

const ACCENT = {
  emerald: { text: "text-emerald-400", bg: "bg-emerald-500/15", grad: "from-emerald-500 to-emerald-600" },
  amber: { text: "text-amber-400", bg: "bg-amber-500/15", grad: "from-amber-500 to-amber-600" },
  cyan: { text: "text-cyan-400", bg: "bg-cyan-500/15", grad: "from-cyan-500 to-cyan-600" },
};

export function ServiceModules() {
  const [hover, setHover] = useState<string | null>(SERVICE_MODULES[0].id);
  const active = SERVICE_MODULES.find((m) => m.id === hover) ?? SERVICE_MODULES[0];

  return (
    <section id="layanan" className="relative py-16 lg:py-24 border-t border-white/[0.05] bg-gradient-to-b from-transparent via-emerald-950/10 to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-400 mb-4">
            8 Modul Layanan Publik
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-5">
            Layanan Digital untuk
            <br />
            <span className="text-gradient-amber">Seluruh Warga Nusantara</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Dari identitas hingga pengaduan — delapan modul layanan yang dapat
            diakses dari satu aplikasi. Satu login, semua layanan.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left: module grid */}
          <Reveal className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {SERVICE_MODULES.map((m, i) => {
                const a = ACCENT[m.accent];
                const isActive = hover === m.id;
                return (
                  <button
                    key={m.id}
                    onMouseEnter={() => setHover(m.id)}
                    onFocus={() => setHover(m.id)}
                    onClick={() => setHover(m.id)}
                    className={cn(
                      "group glass rounded-2xl p-4 text-left transition-all border",
                      isActive
                        ? cn(a.bg, "border-white/20 scale-[1.03]")
                        : "border-white/5 hover:border-white/10"
                    )}
                  >
                    <div className={cn("size-10 rounded-lg grid place-items-center mb-3 transition-all", a.bg)}>
                      <m.icon className={cn("size-5", a.text)} />
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">
                      Modul {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="font-semibold text-sm leading-tight">{m.name}</div>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* Right: active module detail */}
          <Reveal delay={120} className="lg:col-span-5">
            <div className="glass-strong rounded-3xl p-7 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className={cn("size-14 rounded-2xl grid place-items-center", ACCENT[active.accent].bg)}>
                  <active.icon className={cn("size-7", ACCENT[active.accent].text)} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                    Modul Layanan
                  </div>
                  <h3 className="font-display text-xl font-bold">{active.name}</h3>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {active.desc}
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {active.features.map((f) => (
                  <div
                    key={f}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-sm font-medium border",
                      ACCENT[active.accent].bg, "border-white/5"
                    )}
                  >
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Sektoral integration strip */}
        <Reveal delay={200} className="mt-10">
          <div className="glass rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                  Integrasi Sektoral
                </div>
                <div className="font-display font-bold">10 Sektor Data Terintegrasi</div>
              </div>
              <div className="text-xs text-muted-foreground">
                Lintas sektor terhubung ke Satu Data Nasional
              </div>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-2">
              {SEKTORAL.map((s) => (
                <div
                  key={s.name}
                  className="flex flex-col items-center gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <div className="size-9 rounded-lg bg-white/5 border border-white/5 grid place-items-center">
                    <s.icon className="size-4 text-emerald-400" />
                  </div>
                  <span className="text-[10px] text-muted-foreground font-medium text-center">{s.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
