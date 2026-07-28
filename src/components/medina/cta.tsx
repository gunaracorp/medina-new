"use client";

import { ArrowRight, Mail, Building2, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./anim";

export function CTA() {
  return (
    <section id="cta" className="relative py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-civic-grid opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[40rem] rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="absolute top-1/3 right-10 size-40 rounded-full bg-amber-500/10 blur-[80px] animate-float" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal>
          <div className="glass-strong rounded-[2rem] p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden">
            {/* Glow accent */}
            <div className="absolute -top-20 -right-20 size-60 rounded-full conic-blob opacity-30 animate-orbit" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs font-medium text-emerald-300 mb-6">
                <span className="live-dot" />
                Pendaftaran Integrasi Fase III Dibuka
              </div>

              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.05]">
                Bawa Daerah Anda
                <br />
                ke dalam <span className="text-gradient-civic">Ekonomi Digital</span>
              </h2>

              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                Onboarding untuk 514 kabupaten/kota. Tim integrasi MEDINA akan
                mendampingi dari audit sistem, migrasi data, hingga go-live.
                Rata-rata 90 hari dari MoU hingga modul aktif.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-emerald-950 border-0 font-semibold shadow-xl shadow-emerald-500/30"
                  asChild
                >
                  <a href="#top">
                    Ajukan Integrasi Daerah
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass border-white/10 hover:bg-white/5"
                  asChild
                >
                  <a href="#ekosistem">
                    Unduh Whitepaper Arsitektur
                  </a>
                </Button>
              </div>

              {/* Contact options */}
              <div className="grid sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
                {CONTACTS.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="glass rounded-xl p-4 text-left hover:bg-white/[0.06] transition-colors lift-hover"
                  >
                    <c.icon className="size-5 text-emerald-400 mb-2" />
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground mb-0.5">
                      {c.label}
                    </div>
                    <div className="text-sm font-semibold">{c.value}</div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const CONTACTS = [
  { label: "Daerah", value: "integrasi@medina.go.id", icon: Building2, href: "mailto:integrasi@medina.go.id" },
  { label: "Teknis", value: "ops@medina.go.id", icon: PhoneCall, href: "mailto:ops@medina.go.id" },
  { label: "Kemitraan", value: "mitra@medina.go.id", icon: Mail, href: "mailto:mitra@medina.go.id" },
];
