"use client";

import { Smartphone, ShieldCheck, Workflow, Landmark, Check, Wallet } from "lucide-react";
import { Reveal } from "./anim";

// Alur pajak dari WP hingga RKUD — 6 langkah horizontal dengan data flow line
const STEPS = [
  {
    n: "01",
    title: "Wp Bayar",
    icon: Smartphone,
    desc: "Wajib pajak setor via Medina Go / bank / QRIS. e-Billing terbit otomatis.",
    meta: "≤ 30 detik",
    accent: "emerald",
  },
  {
    n: "02",
    title: "Validasi",
    icon: ShieldCheck,
    desc: "Sistem verifikasi NPWPD, nominal, dan kode billing. AI cek anomali.",
    meta: "≤ 15 detik",
    accent: "emerald",
  },
  {
    n: "03",
    title: "e-NTPD",
    icon: Check,
    desc: "Bukti setor elektronik terbit, terkunci ke ChainLedger daerah.",
    meta: "≤ 10 detik",
    accent: "emerald",
  },
  {
    n: "04",
    title: "Rekonsiliasi",
    icon: Workflow,
    desc: "Sistem match otomatis WP ↔ bank ↔ RKUD. Tanpa rekonsiliasi manual.",
    meta: "real-time",
    accent: "cyan",
  },
  {
    n: "05",
    title: "Posting RKUD",
    icon: Landmark,
    desc: "Saldo kas daerah ter-update. Dashboard pengawas langsung terefresh.",
    meta: "real-time",
    accent: "cyan",
  },
  {
    n: "06",
    title: "Insight",
    icon: Wallet,
    desc: "InsightBI agregasi penerimaan. Prediksi & deteksi fraud berjalan.",
    meta: "live",
    accent: "amber",
  },
];

export function TaxFlow() {
  return (
    <section id="alur-pajak" className="relative py-16 lg:py-24 border-y border-white/[0.05] bg-gradient-to-b from-transparent via-emerald-950/15 to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400 mb-4">
            Alur Pajak · 6 Langkah
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-5">
            Dari Smartphone Warga,
            <br />
            <span className="text-gradient-emerald">Langsung ke Kas Daerah</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Setiap rupiah pajak menempuh 6 titik kontrol dalam hitungan menit.
            Tidak ada antre, tidak ada paper, tidak ada celah kebocoran. Inilah
            arsitektur ekonomi yang mengalir.
          </p>
        </Reveal>

        {/* Horizontal flow */}
        <div className="relative">
          {/* Flow line background (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[8%] right-[8%] h-px bg-gradient-to-r from-emerald-500/40 via-cyan-500/40 to-amber-500/40" />
          <svg className="hidden lg:block absolute top-12 left-[8%] right-[8%] w-[84%] h-2" viewBox="0 0 100 2" preserveAspectRatio="none">
            <line x1="0" y1="1" x2="100" y2="1" stroke="oklch(0.72 0.17 155 / 0.8)" strokeWidth="0.3" className="flow-line" />
          </svg>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-2 relative">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 90} className="relative">
                <div className="flex flex-col items-center text-center px-2">
                  {/* Node circle on the line */}
                  <div className="relative mb-5">
                    <div className="absolute inset-0 rounded-full bg-emerald-500/30 blur-lg" />
                    <div className="relative size-24 rounded-full glass-strong grid place-items-center border-2 border-emerald-500/40">
                      <s.icon className="size-9 text-emerald-400" />
                    </div>
                    <div className="absolute -top-2 -right-2 size-7 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 grid place-items-center text-[10px] font-bold text-emerald-950">
                      {s.n}
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-base mb-1.5">{s.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                    {s.desc}
                  </p>
                  <span className="inline-block text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400">
                    {s.meta}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Bottom highlight: total time */}
        <Reveal delay={200} className="mt-14">
          <div className="glass-strong rounded-3xl p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                Waktu Total · WP Bayar → Kas Daerah
              </div>
              <div className="font-display text-3xl lg:text-4xl font-bold leading-tight">
                <span className="text-gradient-emerald">~ 90 detik</span>
              </div>
              <div className="text-sm text-muted-foreground font-normal mt-1">
                <span className="line-through">sebelumnya: 3–7 hari</span>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-emerald-400">99,7%</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Auto-match</div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-cyan-400">0</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Paper</div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-amber-400">100%</div>
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Audit-ready</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
