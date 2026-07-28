"use client";

import { useEffect, useState } from "react";
import { ACTIVITY_FEED, type ActivityItem } from "@/lib/medina-data";
import { Reveal } from "./anim";
import { cn } from "@/lib/utils";
import { Receipt, Building2, FileCheck2, Radio, Home, Store, HandCoins } from "lucide-react";

const TYPE_META: Record<
  ActivityItem["type"],
  { color: string; bg: string; icon: typeof Receipt; label: string }
> = {
  pajak: { color: "text-emerald-400", bg: "bg-emerald-500/15", icon: Receipt, label: "Pajak" },
  opd: { color: "text-cyan-400", bg: "bg-cyan-500/15", icon: Building2, label: "OPD" },
  perijinan: { color: "text-amber-400", bg: "bg-amber-500/15", icon: FileCheck2, label: "Izin" },
  desa: { color: "text-amber-400", bg: "bg-amber-500/15", icon: Home, label: "Desa" },
  umkm: { color: "text-emerald-400", bg: "bg-emerald-500/15", icon: Store, label: "UMKM" },
  subsidi: { color: "text-cyan-400", bg: "bg-cyan-500/15", icon: HandCoins, label: "Subsidi" },
};

export function ActivityFeed() {
  const [items, setItems] = useState(ACTIVITY_FEED);
  const [tick, setTick] = useState(0);

  // Simulasi live feed: rotate items tiap 3.5 detik
  useEffect(() => {
    const id = setInterval(() => {
      setItems((prev) => {
        const next = [...prev];
        const first = next.shift()!;
        // mutate value slightly untuk kesan live
        first.time = new Date().toLocaleTimeString("id-ID", { hour12: false });
        next.push(first);
        return next;
      });
      setTick((t) => t + 1);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="aktivitas" className="relative py-16 lg:py-24 border-t border-white/[0.05] bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <Reveal className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400 mb-4">
              <Radio className="size-3.5" /> Stream Real-time
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-5">
              Setiap Detik,
              <br />
              <span className="text-gradient-civic">Ekonomi Bergerak</span>
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Ini bukan demo, bukan slide. Ini aliran nyata transaksi ekonomi
              smart city — dari e-NTPD yang terbit, izin yang disetujui, hingga
              sinkronisasi data lintas OPD. Setiap baris adalah aksi nyata.
            </p>

            <div className="grid grid-cols-3 gap-3">
              {Object.entries(TYPE_META).map(([key, meta]) => (
                <div key={key} className="glass rounded-xl p-3 text-center">
                  <div className={cn("size-8 mx-auto rounded-lg grid place-items-center mb-1.5", meta.bg)}>
                    <meta.icon className={cn("size-4", meta.color)} />
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    {meta.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <div className="glass-strong rounded-3xl p-2 sm:p-3">
              <div className="flex items-center justify-between px-4 py-3">
                <div className="inline-flex items-center gap-2 text-xs font-semibold">
                  <span className="live-dot" />
                  Live · {tick} event sesi ini
                </div>
                <span className="text-[10px] text-muted-foreground font-mono">
                  stream://medina-core/feed
                </span>
              </div>
              <div className="max-h-[28rem] overflow-y-auto scroll-civic pr-1">
                <div className="space-y-1">
                  {items.map((it, idx) => {
                    const meta = TYPE_META[it.type];
                    return (
                      <div
                        key={`${it.time}-${idx}`}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all hover:bg-white/5",
                          idx === 0 && "bg-emerald-500/[0.06] border border-emerald-500/20"
                        )}
                      >
                        <div className={cn("size-8 shrink-0 rounded-lg grid place-items-center", meta.bg)}>
                          <meta.icon className={cn("size-4", meta.color)} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className={cn("text-[10px] font-bold uppercase tracking-wider", meta.color)}>
                              {meta.label}
                            </span>
                            <span className="text-[10px] text-muted-foreground">·</span>
                            <span className="text-[10px] text-muted-foreground">{it.region}</span>
                          </div>
                          <div className="text-sm text-foreground truncate">{it.text}</div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="text-xs font-mono text-muted-foreground">{it.time}</div>
                          {it.value && (
                            <div className={cn("text-xs font-semibold", meta.color)}>{it.value}</div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
