"use client";

import { useState } from "react";
import { FileCheck2, Clock, X, Check, ArrowRight, Users, Building2, ShieldCheck } from "lucide-react";
import { Reveal } from "./anim";
import { cn } from "@/lib/utils";

// Before/after permit journey. Two modes toggled.
export function PermitJourney() {
  const [mode, setMode] = useState<"before" | "after">("after");

  return (
    <section id="perjalanan-izin" className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-400 mb-4">
            Perjalanan Izin · Sebelum vs Sesudah
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-5">
            Dari 42 Hari Menjadi
            <br />
            <span className="text-gradient-amber">3,2 Hari Kerja</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Bandingkan sendiri. Bukan retorika, bukan janji — ini arsitektur.
            Klik tombol untuk beralih antara dunia lama dan ekonomi digital MEDINA.
          </p>
        </Reveal>

        {/* Toggle */}
        <Reveal className="flex justify-center mb-10">
          <div className="inline-flex gap-1 p-1.5 rounded-2xl glass-strong">
            <button
              onClick={() => setMode("before")}
              className={cn(
                "px-5 py-2.5 rounded-xl text-sm font-semibold transition-all",
                mode === "before"
                  ? "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Sebelum MEDINA
            </button>
            <button
              onClick={() => setMode("after")}
              className={cn(
                "px-5 py-2.5 rounded-xl text-sm font-semibold transition-all",
                mode === "after"
                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              Dengan MEDINA
            </button>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left: visual timeline */}
          <Reveal>
            <div className="glass-strong rounded-3xl p-7 h-full">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-bold text-lg">
                  {mode === "before" ? "Alur Lama" : "Alur MEDINA"}
                </h3>
                <div
                  className={cn(
                    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold",
                    mode === "before"
                      ? "bg-rose-500/10 text-rose-400"
                      : "bg-emerald-500/10 text-emerald-400"
                  )}
                >
                  <Clock className="size-3.5" />
                  {mode === "before" ? "42 hari kerja" : "3,2 hari kerja"}
                </div>
              </div>

              <div className="space-y-3">
                {(mode === "before" ? BEFORE_STEPS : AFTER_STEPS).map((s, i) => (
                  <div
                    key={i}
                    className={cn(
                      "flex gap-3 p-3 rounded-xl border transition-all",
                      mode === "before"
                        ? "border-rose-500/15 bg-rose-500/[0.03]"
                        : "border-emerald-500/15 bg-emerald-500/[0.03]"
                    )}
                  >
                    <div
                      className={cn(
                        "size-7 shrink-0 rounded-lg grid place-items-center text-xs font-bold",
                        mode === "before"
                          ? "bg-rose-500/15 text-rose-400"
                          : "bg-emerald-500/15 text-emerald-400"
                      )}
                    >
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-sm font-semibold">{s.title}</span>
                        <span className="text-[10px] text-muted-foreground shrink-0">
                          {s.duration}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Right: comparison stats */}
          <Reveal delay={120}>
            <div className="space-y-4">
              <div className="glass-strong rounded-3xl p-7">
                <h3 className="font-display font-bold text-lg mb-5">Dampak Terukur</h3>
                <div className="space-y-4">
                  {COMPARISON.map((c) => (
                    <div key={c.label}>
                      <div className="flex items-baseline justify-between mb-2">
                        <span className="text-sm text-muted-foreground">{c.label}</span>
                        <span className="text-xs font-semibold text-emerald-400">
                          {c.improvement}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="rounded-lg bg-rose-500/[0.06] border border-rose-500/15 px-3 py-2">
                          <div className="text-[10px] uppercase tracking-wider text-rose-400 mb-0.5">
                            Sebelum
                          </div>
                          <div className="font-display font-bold text-sm text-rose-200 line-through">
                            {c.before}
                          </div>
                        </div>
                        <div className="rounded-lg bg-emerald-500/[0.06] border border-emerald-500/15 px-3 py-2">
                          <div className="text-[10px] uppercase tracking-wider text-emerald-400 mb-0.5">
                            Sesudah
                          </div>
                          <div className="font-display font-bold text-sm text-emerald-200">
                            {c.after}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="glass rounded-2xl p-4 text-center">
                  <Users className="size-5 text-amber-400 mx-auto mb-2" />
                  <div className="font-display text-xl font-bold">8,4 jt</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                    Izin YTD
                  </div>
                </div>
                <div className="glass rounded-2xl p-4 text-center">
                  <Building2 className="size-5 text-cyan-400 mx-auto mb-2" />
                  <div className="font-display text-xl font-bold">1.482</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                    Jenis Izin
                  </div>
                </div>
                <div className="glass rounded-2xl p-4 text-center">
                  <ShieldCheck className="size-5 text-emerald-400 mx-auto mb-2" />
                  <div className="font-display text-xl font-bold">4,8/5</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">
                    Kepuasan
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const BEFORE_STEPS = [
  { title: "Konsultasi manual ke 6 OPD", duration: "7 hari", desc: "Pemohon keliling, menanyakan syarat masing-masing." },
  { title: "Fotokopi & rangkap dokumen", duration: "2 hari", desc: "24 lembar × 6 OPD = 144 lembar kertas." },
  { title: "Antri loket tiap OPD", duration: "5 hari", desc: "Loket beda jam, beda gedung, beda sistem." },
  { title: "Verifikasi berurutan", duration: "21 hari", desc: "OPD B menunggu OPD A selesai. Total waktu jadi berurutan." },
  { title: "Revisi & pengembalian", duration: "4 hari", desc: "Dokumen kembali karena format salah, mulai dari awal." },
  { title: "Tanda tangan basah & stempel", duration: "3 hari", desc: "Pejabat tidak selalu di tempat. Stempel hilang." },
];

const AFTER_STEPS = [
  { title: "Single submission via OSS-Plus", duration: "30 menit", desc: "Satu form, satu submit. Sistem tentukan izin yang relevan." },
  { title: "Verifikasi paralel 6 OPD", duration: "1,5 hari", desc: "Semua OPD bekerja bersamaan, bukan berurutan." },
  { title: "Risk-based auto-approve", duration: "instan", desc: "Izin risiko rendah auto-approve tanpa antrian." },
  { title: "TTE qualified certificate", duration: "≤ 2 jam", desc: "Tanda tangan elektronik sah, tanpa stempel basah." },
  { title: "QR verifiable", duration: "instan", desc: "Setiap izin punya QR untuk verifikasi publik." },
  { title: "Pemohon terima notifikasi", duration: "real-time", desc: "Status live di Medina Go, email, dan SMS." },
];

const COMPARISON = [
  { label: "Waktu rata-rata terbit", before: "42 hari", after: "3,2 hari", improvement: "−92%" },
  { label: "Loket yang dikunjungi", before: "6 OPD", after: "0 (online)", improvement: "−100%" },
  { label: "Dokumen fisik", before: "144 lembar", after: "0", improvement: "paperless" },
  { label: "Status pelacakan", before: "Tidak transparan", after: "Live", improvement: "100%" },
  { label: "Biaya administratif", before: "Rp 380 rb", after: "Rp 0", improvement: "−100%" },
];
