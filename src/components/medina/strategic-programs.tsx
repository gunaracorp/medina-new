"use client";

import { useState } from "react";
import { STRATEGIC_PROGRAMS, SEDAP_STEPS } from "@/lib/medina-data";
import { Reveal } from "./anim";
import { cn } from "@/lib/utils";
import { ArrowRight, Ship, Tractor, Package, Warehouse, Globe2 } from "lucide-react";

const ACCENT = {
  emerald: { text: "text-emerald-400", bg: "bg-emerald-500/15", grad: "from-emerald-500 to-emerald-600", border: "border-emerald-500/30" },
  amber: { text: "text-amber-400", bg: "bg-amber-500/15", grad: "from-amber-500 to-amber-600", border: "border-amber-500/30" },
  cyan: { text: "text-cyan-400", bg: "bg-cyan-500/15", grad: "from-cyan-500 to-cyan-600", border: "border-cyan-500/30" },
};

export function StrategicPrograms() {
  const [active, setActive] = useState(STRATEGIC_PROGRAMS[0].id);
  const program = STRATEGIC_PROGRAMS.find((p) => p.id === active)!;

  return (
    <section id="strategis" className="relative py-16 lg:py-24 border-t border-white/[0.05]">
      <div className="absolute top-1/3 left-1/4 size-[30rem] rounded-full bg-amber-500/[0.06] blur-[130px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-400 mb-4">
            Program Unggulan Strategis
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-5">
            Tiga Program yang Membedakan
            <br />
            <span className="text-gradient-amber">MEDINA dari Lainnya</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Bukan cuma digitalisasi proses, tapi transformasi ekonomi dari akar.
            Duta Digital, Smart Village, dan SEDAP — tiga program yang membawa
            desa Indonesia ke panggung global.
          </p>
        </Reveal>

        {/* Program selector */}
        <Reveal className="flex justify-center mb-8">
          <div className="inline-flex gap-1 p-1.5 rounded-2xl glass-strong flex-wrap justify-center">
            {STRATEGIC_PROGRAMS.map((p) => {
              const a = ACCENT[p.accent];
              const isActive = active === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  className={cn(
                    "px-4 sm:px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2",
                    isActive
                      ? cn("bg-gradient-to-r text-emerald-950", a.grad)
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <p.icon className="size-4" />
                  <span>{p.name}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Active program detail */}
        <div key={active} className="reveal-fade">
          <div className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5">
              <div className="glass-strong rounded-3xl p-7 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className={cn("size-14 rounded-2xl grid place-items-center", ACCENT[program.accent].bg)}>
                    <program.icon className={cn("size-7", ACCENT[program.accent].text)} />
                  </div>
                  <div>
                    <div className={cn("text-[10px] uppercase tracking-wider font-bold", ACCENT[program.accent].text)}>
                      Program Strategis
                    </div>
                    <h3 className="font-display text-xl font-bold">{program.name}</h3>
                  </div>
                </div>
                <p className={cn("text-base font-medium italic mb-4", ACCENT[program.accent].text)}>
                  “{program.tagline}”
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {program.desc}
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {program.targets.map((t) => (
                    <div key={t.label} className={cn("rounded-xl p-3 border", ACCENT[program.accent].bg, ACCENT[program.accent].border)}>
                      <div className={cn("font-display text-lg font-bold leading-none mb-1", ACCENT[program.accent].text)}>
                        {t.value}
                      </div>
                      <div className="text-[10px] text-muted-foreground leading-tight">{t.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SEDAP flow (only for SEDAP), else show program-specific visual */}
            <div className="lg:col-span-7">
              {program.id === "sedap" ? (
                <SedapFlow />
              ) : program.id === "smart-village" ? (
                <SmartVillageFiveOne />
              ) : (
                <DutaDigitalVisual />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SedapFlow() {
  return (
    <div className="glass-strong rounded-3xl p-6 h-full">
      <div className="flex items-center justify-between mb-5">
        <h4 className="font-semibold text-sm uppercase tracking-wider text-amber-400">
          Alur SEDAP · 5 Tahap
        </h4>
        <span className="text-[10px] text-muted-foreground">Didukung KDMP</span>
      </div>
      <div className="space-y-2">
        {SEDAP_STEPS.map((s, i) => (
          <div key={s.n} className="flex items-center gap-3 group">
            <div className="flex flex-col items-center shrink-0">
              <div className="size-11 rounded-xl bg-amber-500/15 border border-amber-500/30 grid place-items-center group-hover:bg-amber-500/25 transition-colors">
                <s.icon className="size-5 text-amber-400" />
              </div>
              {i < SEDAP_STEPS.length - 1 && (
                <div className="w-px h-6 bg-gradient-to-b from-amber-500/40 to-transparent mt-1" />
              )}
            </div>
            <div className="flex-1 pb-2">
              <div className="flex items-baseline gap-2 mb-0.5">
                <span className="text-[10px] font-bold text-amber-400 font-mono">{s.n}</span>
                <h5 className="font-semibold text-sm">{s.title}</h5>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
        <span className="text-muted-foreground">Hasil akhir:</span>
        <span className="text-amber-400 font-semibold">Ekspor Langsung dari Desa → 150+ Negara</span>
      </div>
    </div>
  );
}

function SmartVillageFiveOne() {
  const items = [
    { label: "Satu Desa", icon: "1" },
    { label: "Satu Portal", icon: "1" },
    { label: "Satu Data", icon: "1" },
    { label: "Satu Pembayaran", icon: "1" },
    { label: "Satu Ekonomi Digital", icon: "1" },
  ];
  return (
    <div className="glass-strong rounded-3xl p-6 h-full">
      <h4 className="font-semibold text-sm uppercase tracking-wider text-cyan-400 mb-5">
        Prinsip 5-in-1 Smart Village
      </h4>
      <div className="space-y-3">
        {items.map((it, i) => (
          <div key={it.label} className="flex items-center gap-4 glass rounded-xl p-4">
            <div className="size-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 grid place-items-center">
              <span className="font-display text-xl font-bold text-cyan-400">{it.icon}</span>
            </div>
            <div className="flex-1">
              <div className="font-display font-bold text-base">{it.label}</div>
              <div className="text-xs text-muted-foreground">
                {[
                  "Setiap desa adalah satu kesatuan digital.",
                  "Portal tunggal untuk seluruh layanan desa.",
                  "Data desa terintegrasi ke Satu Data Nasional.",
                  "Pembayaran desa via Pay Gateway terpadu.",
                  "Ekonomi desa tumbuh dalam ekosistem digital.",
                ][i]}
              </div>
            </div>
            {i < items.length - 1 && <ArrowRight className="size-4 text-muted-foreground/40" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function DutaDigitalVisual() {
  const steps = [
    { title: "ASN Direkrut", desc: "ASN terpilih dilatih sebagai Duta Digital." },
    { title: "Turun ke Desa", desc: "Ditempatkan di desa sebagai pendamping digital." },
    { title: "Digitalisasi UMKM", desc: "Mendampingi UMKM masuk ekosistem digital." },
    { title: "Produktivitas +20%", desc: "Produktivitas desa meningkat 20%." },
  ];
  return (
    <div className="glass-strong rounded-3xl p-6 h-full">
      <h4 className="font-semibold text-sm uppercase tracking-wider text-emerald-400 mb-5">
        Misi Duta Digital · 4 Fase
      </h4>
      <div className="grid sm:grid-cols-2 gap-3">
        {steps.map((s, i) => (
          <div key={s.title} className="glass rounded-xl p-4">
            <div className="font-display text-2xl font-bold text-emerald-400 mb-1">
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="font-semibold text-sm mb-1">{s.title}</div>
            <div className="text-xs text-muted-foreground leading-relaxed">{s.desc}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-white/5 grid grid-cols-2 gap-3 text-center">
        <div>
          <div className="font-display text-xl font-bold text-emerald-400">1 Juta</div>
          <div className="text-[10px] text-muted-foreground uppercase tracking-wider">UMKM Digitalisasi</div>
        </div>
        <div>
          <div className="font-display text-xl font-bold text-emerald-400">+20%</div>
          <div className="text-[10px] text-muted-foreground uppercase tracking-wider">Produktivitas Desa</div>
        </div>
      </div>
    </div>
  );
}
