"use client";

import { Sparkles, ExternalLink, Github, Twitter, Linkedin, Send } from "lucide-react";
import { FOOTER_LINKS } from "@/lib/medina-data";

export function Footer() {
  return (
    <footer className="relative mt-auto border-t border-white/[0.05] bg-gradient-to-b from-transparent to-emerald-950/20">
      <div className="absolute inset-0 bg-civic-grid opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <div className="grid lg:grid-cols-12 gap-10 mb-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#top" className="flex items-center gap-3 mb-5">
              <div className="size-10 rounded-xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-cyan-500 grid place-items-center shadow-lg shadow-emerald-500/30">
                <Sparkles className="size-5 text-emerald-950" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-display font-extrabold text-base tracking-tight">
                  MEDINA<span className="text-emerald-400"> EKONOMI</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  Masyarakat Ekonomi Digital Nasional
                </div>
              </div>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-sm">
              Mesin ekonomi smart city nasional. Menyatukan pajak, OPD, dan
              perijinan dalam satu ekosistem data terpadu. Bagian dari keluarga
              besar MEDINA.
            </p>

            <div className="flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="size-9 rounded-lg glass grid place-items-center hover:bg-emerald-500/15 hover:text-emerald-400 transition-colors"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {FOOTER_LINKS.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs uppercase tracking-wider font-bold text-foreground mb-3.5">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#top"
                        className="text-sm text-muted-foreground hover:text-emerald-400 transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Holding link callout */}
        <div className="glass rounded-2xl p-5 mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div className="flex items-start gap-3">
            <div className="size-10 rounded-lg bg-amber-500/10 border border-amber-500/20 grid place-items-center shrink-0">
              <ExternalLink className="size-5 text-amber-400" />
            </div>
            <div>
              <div className="font-semibold text-sm mb-0.5">
                Mencari holding ekosistem MEDINA?
              </div>
              <div className="text-xs text-muted-foreground">
                Induk ekosistem (E = Ekosistem) berada terpisah di medina.web.id — konsep
                berbeda, tujuan berbeda, satu keluarga.
              </div>
            </div>
          </div>
          <a
            href="https://www.medina.web.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
          >
            medina.web.id
            <ExternalLink className="size-3.5" />
          </a>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/[0.05]">
          <div className="text-xs text-muted-foreground text-center sm:text-left">
            © {new Date().getFullYear()} MEDINA EKONOMI · Masyarakat Ekonomi Digital Nasional.
            <span className="hidden sm:inline"> Dibangun untuk Nusantara.</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a href="#top" className="hover:text-foreground transition-colors">Privasi</a>
            <a href="#top" className="hover:text-foreground transition-colors">Syarat</a>
            <a href="#top" className="hover:text-foreground transition-colors">Keamanan</a>
            <div className="inline-flex items-center gap-1.5">
              <span className="live-dot scale-75" />
              <span className="font-mono">v3.2.1</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const SOCIALS = [
  { name: "GitHub", icon: Github, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Telegram", icon: Send, href: "#" },
];
