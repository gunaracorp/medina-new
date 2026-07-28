"use client";

import { USER_ROLES } from "@/lib/medina-data";
import { Reveal } from "./anim";
import { cn } from "@/lib/utils";

const ACCENT = {
  emerald: { text: "text-emerald-400", bg: "bg-emerald-500/15", ring: "group-hover:border-emerald-500/40" },
  amber: { text: "text-amber-400", bg: "bg-amber-500/15", ring: "group-hover:border-amber-500/40" },
  cyan: { text: "text-cyan-400", bg: "bg-cyan-500/15", ring: "group-hover:border-cyan-500/40" },
};

export function UserRoles() {
  return (
    <section id="pengguna" className="relative py-16 lg:py-24 border-t border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400 mb-4">
            6 Segmen Pengguna
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight mb-5">
            Satu Sistem, Enam Pelaku,
            <br />
            <span className="text-gradient-civic">Satu Tujuan Ekonomi</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Dari warga biasa hingga kepala desa, dari UMKM hingga investor asing —
            semua dilayani dalam satu identitas digital, satu gerbang pembayaran,
            satu kebenaran data.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {USER_ROLES.map((role, i) => {
            const a = ACCENT[role.accent];
            return (
              <Reveal key={role.id} delay={(i % 3) * 80}>
                <div className={cn("group glass rounded-2xl p-6 h-full lift-hover border border-white/5 transition-all", a.ring)}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={cn("size-12 rounded-xl grid place-items-center shrink-0", a.bg)}>
                      <role.icon className={cn("size-6", a.text)} />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-0.5">
                        Segmen {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="font-display font-bold text-lg leading-tight">{role.name}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {role.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {role.services.map((s) => (
                      <span
                        key={s}
                        className={cn(
                          "text-[10px] font-medium px-2 py-1 rounded-md",
                          a.bg, a.text
                        )}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
