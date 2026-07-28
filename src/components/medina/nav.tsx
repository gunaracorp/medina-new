"use client";

import { useEffect, useState } from "react";
import { Menu, X, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/medina-data";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "py-2.5"
          : "py-4"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl transition-all duration-500",
            scrolled
              ? "glass-strong px-4 py-2.5 shadow-2xl shadow-black/30"
              : "px-2 py-1"
          )}
        >
          {/* Logo */}
          <a href="#top" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-primary/40 blur-md group-hover:bg-primary/60 transition-all" />
              <div className="relative size-9 rounded-xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-cyan-500 grid place-items-center shadow-lg shadow-emerald-500/30">
                <Sparkles className="size-5 text-emerald-950" strokeWidth={2.5} />
              </div>
            </div>
            <div className="leading-tight">
              <div className="font-display font-extrabold text-base tracking-tight">
                MEDINA<span className="text-emerald-400"> EKONOMI</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground font-medium">
                Masyarakat Ekonomi Digital Nasional
              </div>
            </div>
          </a>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/5 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              size="sm"
              className="hidden sm:inline-flex bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-emerald-950 border-0 font-semibold shadow-lg shadow-emerald-500/25"
              asChild
            >
              <a href="#cta">
                Mulai Integrasi
                <ChevronRight className="size-4" />
              </a>
            </Button>
            <button
              className="lg:hidden grid place-items-center size-10 rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="lg:hidden mt-2 glass-strong rounded-2xl p-3 animate-in fade-in slide-in-from-top-2 duration-300">
            <nav className="grid gap-1">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/5 transition-colors flex items-center justify-between"
                >
                  {l.label}
                  <ChevronRight className="size-4 opacity-50" />
                </a>
              ))}
              <a
                href="#cta"
                onClick={() => setOpen(false)}
                className="mt-2 px-3 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-emerald-950 text-center"
              >
                Mulai Integrasi
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
