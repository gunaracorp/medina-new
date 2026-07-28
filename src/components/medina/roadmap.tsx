"use client";

import { ROADMAP } from "@/lib/medina-data";
import { Reveal } from "./anim";
import { cn } from "@/lib/utils";
import { Check, Circle, ArrowRight } from "lucide-react";

export function Roadmap() {
  return (
    <section id="roadmap" className="relative py-16 lg:py-24 border-t border-white/[0.05]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 size-[36rem] rounded-full bg-amber-500/[0.05] blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-400 mb-4">
            Roadmap Lima Fase
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-5">
            Dari Fondasi ke Ekonomi
            <br />
            <span className="text-gradient-amber">Yang Terhubung Penuh</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Lima fase transformasi terukur. Setiap fase punya deliverable jelas,
            bukan janji. Kita berada di Fase III — gerbang menuju lapisan kognitif.
          </p>
        </Reveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/40 via-cyan-500/40 to-amber-500/40 sm:-translate-x-1/2" />

          <div className="space-y-6">
            {ROADMAP.map((r, i) => {
              const isLeft = i % 2 === 0;
              return (
                <Reveal key={r.phase} delay={i * 80}>
                  <div
                    className={cn(
                      "relative grid sm:grid-cols-2 gap-4 sm:gap-8",
                      isLeft ? "" : "sm:[direction:rtl]"
                    )}
                  >
                    {/* Node marker */}
                    <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 z-10">
                      <div
                        className={cn(
                          "size-5 rounded-full grid place-items-center",
                          r.status === "done"
                            ? "bg-emerald-500 text-emerald-950"
                            : r.status === "active"
                            ? "bg-amber-500 text-amber-950 ring-4 ring-amber-500/20"
                            : "bg-white/10 text-muted-foreground"
                        )}
                      >
                        {r.status === "done" ? (
                          <Check className="size-3" strokeWidth={3} />
                        ) : r.status === "active" ? (
                          <Circle className="size-2 fill-current" />
                        ) : (
                          <Circle className="size-2" />
                        )}
                      </div>
                    </div>

                    {/* Card */}
                    <div
                      className={cn(
                        "pl-12 sm:pl-0",
                        isLeft ? "sm:pr-12 sm:text-right" : "sm:pl-12 [direction:ltr]"
                      )}
                    >
                      <div
                        className={cn(
                          "glass rounded-2xl p-5 lift-hover",
                          r.status === "active" && "glass-strong border-amber-500/30"
                        )}
                      >
                        <div
                          className={cn(
                            "flex items-center gap-2 mb-2",
                            isLeft && "sm:justify-end"
                          )}
                        >
                          <span
                            className={cn(
                              "text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md",
                              r.status === "done"
                                ? "bg-emerald-500/15 text-emerald-400"
                                : r.status === "active"
                                ? "bg-amber-500/15 text-amber-400"
                                : "bg-white/5 text-muted-foreground"
                            )}
                          >
                            {r.status === "done"
                              ? "Selesai"
                              : r.status === "active"
                              ? "Berlangsung"
                              : "Berikutnya"}
                          </span>
                          <span className="text-[10px] text-muted-foreground font-mono">
                            {r.quarter}
                          </span>
                        </div>
                        <div className="font-display font-bold text-xs uppercase tracking-wider text-muted-foreground mb-1">
                          {r.phase}
                        </div>
                        <h3 className="font-display text-lg font-bold mb-3">{r.title}</h3>
                        <ul
                          className={cn(
                            "space-y-1.5 text-sm text-muted-foreground",
                            isLeft && "sm:[direction:rtl]"
                          )}
                        >
                          {r.points.map((p) => (
                            <li
                              key={p}
                              className={cn(
                                "flex items-start gap-2",
                                isLeft && "sm:flex-row-reverse sm:text-right"
                              )}
                            >
                              <span
                                className={cn(
                                  "mt-1.5 size-1 rounded-full shrink-0",
                                  r.status === "done"
                                    ? "bg-emerald-400"
                                    : r.status === "active"
                                    ? "bg-amber-400"
                                    : "bg-white/30"
                                )}
                              />
                              <span className="leading-relaxed">{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Empty other half on desktop */}
                    <div className="hidden sm:block" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Closing arrow */}
        <Reveal delay={200} className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <ArrowRight className="size-4 text-amber-400" />
            <span>
              Fase V: Integrasi dengan ekosistem{" "}
              <span className="font-semibold text-foreground">MEDINA</span> di{" "}
              <span className="text-emerald-400 font-mono">medina.web.id</span>
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
