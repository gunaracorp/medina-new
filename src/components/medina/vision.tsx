"use client";

import { Reveal } from "./anim";
import { Quote } from "lucide-react";

export function Vision() {
  return (
    <section id="visi" className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-aurora opacity-50" />
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <Reveal>
          <Quote className="size-10 text-emerald-400/60 mx-auto mb-6" />
          <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.25] tracking-tight mb-8">
            “Ekonomi yang adil bukan dibangun dengan{" "}
            <span className="text-muted-foreground">kertas</span>, melainkan
            dengan <span className="text-gradient-emerald">data yang mengalir</span>,
            <span className="text-gradient-amber"> keputusan yang transparan</span>,
            dan <span className="text-gradient-civic">warga yang diberdayakan</span>.”
          </p>
          <div className="inline-flex items-center gap-3">
            <div className="size-1.5 rounded-full bg-emerald-400" />
            <span className="text-sm text-muted-foreground uppercase tracking-[0.2em] font-semibold">
              Filosofi MEDINA EKONOMI
            </span>
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-14 grid sm:grid-cols-3 gap-4 text-left">
          {VISION_POINTS.map((v, i) => (
            <div key={v.title} className="glass rounded-2xl p-5">
              <div className="font-display text-3xl font-bold text-emerald-400 mb-2">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-semibold mb-1.5">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

const VISION_POINTS = [
  {
    title: "Transparan Sampai Akar",
    desc: "Setiap rupiah pajak terlacak dari WP hingga kas daerah. Setiap izin terverifikasi via QR. Tidak ada ruang gelap.",
  },
  {
    title: "Cepat Karena Arsitektur",
    desc: "Bukan janji cepat, tapi sistem yang memang dirancang cepat: paralel, otomatis, berbasis risiko.",
  },
  {
    title: "Adil Karena Satu Data",
    desc: "Satu kebenaran data untuk semua OPD. Tidak ada lagi perlakuan berbeda antar daerah, antar warga.",
  },
];
