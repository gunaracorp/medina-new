"use client";

import { useState } from "react";
import { ECOSYSTEM_NODES, ECOSYSTEM_DESCRIPTIONS, ECOSYSTEM_STATS } from "@/lib/medina-data";
import { Reveal } from "./anim";
import { cn } from "@/lib/utils";

// Peta konstelasi ekosistem: core di tengah, ring dalam 6 node, ring luar 8 node.
// Pengguna hover node untuk lihat deskripsi.
export function Ecosystem() {
  const [hover, setHover] = useState<string | null>("core");

  const inner = ECOSYSTEM_NODES.filter((n) => n.ring === "inner");
  const outer = ECOSYSTEM_NODES.filter((n) => n.ring === "outer");
  const activeNode = ECOSYSTEM_NODES.find((n) => n.id === hover) ?? ECOSYSTEM_NODES[0];

  return (
    <section id="ekosistem" className="relative py-16 lg:py-24 overflow-hidden">
      {/* bg */}
      <div className="absolute inset-0 bg-civic-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[40rem] rounded-full bg-emerald-500/[0.06] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400 mb-4">
            Arsitektur Konstelasi
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-5">
            Satu Inti, Banyak Modul,
            <br />
            <span className="text-gradient-civic">Satu Kebenaran Data</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            MEDINA Core adalah otak. Setiap modul orbit mengelilinginya, saling
            berbicara via API standar. Tidak ada lagi data ganda, tidak ada lagi
            laporan bolak-balik. Semua arus melewati satu sumber kebenaran.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Constellation map */}
          <Reveal className="lg:col-span-7">
            <div className="relative aspect-square max-w-3xl mx-auto p-6">
              {/* Rings */}
              <div className="absolute inset-[8%] rounded-full border border-emerald-500/15" />
              <div className="absolute inset-[24%] rounded-full border border-emerald-500/20" />
              <div className="absolute inset-[41%] rounded-full border border-emerald-500/25" />

              {/* Orbit animations */}
              <div className="absolute inset-[5%] rounded-full animate-orbit-reverse" />
              <div className="absolute inset-[22%] rounded-full animate-orbit" />

              {/* Connecting lines from core to inner */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
                fill="none"
              >
                {inner.map((n) => {
                  const rad = (n.angle * Math.PI) / 180;
                  const x = (50 + 27 * Math.cos(rad)).toFixed(2);
                  const y = (50 + 27 * Math.sin(rad)).toFixed(2);
                  return (
                    <line
                      key={n.id}
                      x1="50" y1="50" x2={x} y2={y}
                      stroke="oklch(0.72 0.17 155 / 0.25)"
                      strokeWidth="0.2"
                      className="flow-line"
                    />
                  );
                })}
                {outer.map((n) => {
                  const rad = (n.angle * Math.PI) / 180;
                  const x = (50 + 42 * Math.cos(rad)).toFixed(2);
                  const y = (50 + 42 * Math.sin(rad)).toFixed(2);
                  return (
                    <line
                      key={n.id}
                      x1="50" y1="50" x2={x} y={y}
                      stroke="oklch(0.8 0.16 75 / 0.18)"
                      strokeWidth="0.15"
                      strokeDasharray="0.6 0.6"
                    />
                  );
                })}
              </svg>

              {/* Outer nodes */}
              {outer.map((n) => {
                const rad = (n.angle * Math.PI) / 180;
                const x = (50 + 42 * Math.cos(rad)).toFixed(2);
                const y = (50 + 42 * Math.sin(rad)).toFixed(2);
                const isActive = hover === n.id;
                return (
                  <button
                    key={n.id}
                    onMouseEnter={() => setHover(n.id)}
                    onFocus={() => setHover(n.id)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group flex flex-col items-center"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <div
                      className={cn(
                        "size-8 sm:size-10 rounded-lg glass grid place-items-center transition-all",
                        isActive
                          ? "bg-amber-500/20 border-amber-500/50 scale-110"
                          : "border-white/10 hover:border-white/20"
                      )}
                    >
                      <n.icon className={cn("size-3.5 sm:size-4", isActive ? "text-amber-400" : "text-muted-foreground")} />
                    </div>
                    <div className="absolute top-full mt-1.5 text-[10px] sm:text-[11px] font-semibold text-foreground/80 whitespace-nowrap group-hover:text-amber-400 transition-colors px-1.5 py-0.5 rounded bg-background/60 backdrop-blur-sm">
                      {n.name}
                    </div>
                  </button>
                );
              })}

              {/* Inner nodes */}
              {inner.map((n) => {
                const rad = (n.angle * Math.PI) / 180;
                const x = (50 + 27 * Math.cos(rad)).toFixed(2);
                const y = (50 + 27 * Math.sin(rad)).toFixed(2);
                const isActive = hover === n.id;
                return (
                  <button
                    key={n.id}
                    onMouseEnter={() => setHover(n.id)}
                    onFocus={() => setHover(n.id)}
                    className="absolute -translate-x-1/2 -translate-y-1/2 group flex flex-col items-center"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <div
                      className={cn(
                        "size-10 sm:size-12 rounded-xl glass-strong grid place-items-center transition-all",
                        isActive
                          ? "bg-emerald-500/20 border-emerald-500/50 scale-110"
                          : "border-white/10 hover:border-white/20"
                      )}
                    >
                      <n.icon className={cn("size-4 sm:size-5", isActive ? "text-emerald-400" : "text-foreground")} />
                    </div>
                    <div className="absolute top-full mt-1.5 text-[10px] sm:text-[11px] font-semibold text-foreground whitespace-nowrap group-hover:text-emerald-400 transition-colors px-1.5 py-0.5 rounded bg-background/60 backdrop-blur-sm">
                      {n.name}
                    </div>
                  </button>
                );
              })}

              {/* Core */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full conic-blob opacity-60 animate-orbit" />
                  <button
                    onMouseEnter={() => setHover("core")}
                    onFocus={() => setHover("core")}
                    className="relative size-20 sm:size-24 rounded-full glass-strong grid place-items-center border-emerald-500/40"
                  >
                    <activeNode.icon className="size-8 sm:size-10 text-emerald-400" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Detail panel */}
          <Reveal delay={150} className="lg:col-span-5">
            <div className="glass-strong rounded-3xl p-7">
              <div className="flex items-center gap-3 mb-5">
                <div className="size-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-white/10 grid place-items-center">
                  <activeNode.icon className="size-6 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                    {activeNode.ring === "core"
                      ? "Inti Ekosistem"
                      : activeNode.ring === "inner"
                      ? "Modul Inti"
                      : "Lapisan Kognitif & Infrastruktur"}
                  </div>
                  <div className="font-display text-xl font-bold">{activeNode.name}</div>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-5">
                {ECOSYSTEM_DESCRIPTIONS[activeNode.id] ?? "Modul yang berinteraksi dengan MEDINA Core."}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-5">
                {(ECOSYSTEM_STATS[activeNode.id] ?? []).map((s) => (
                  <div key={s.label} className="rounded-xl bg-white/[0.03] border border-white/5 p-3">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                      {s.label}
                    </div>
                    <div className="font-display text-lg font-bold text-emerald-400">
                      {s.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-xs text-muted-foreground">
                <span className="text-emerald-400 font-semibold">Tip:</span> Arahkan kursor
                ke node mana pun untuk melihat detailnya.
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
