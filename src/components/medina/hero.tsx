"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Activity, Globe2, ShieldCheck, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Counter } from "./anim";

// Hero sinematik: langit smart city malam dengan skyline datar + grid datar hidup
// Warga: cukup satu layar penuh emosi, lalu scroll.
export function Hero() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const opts: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("id-ID", opts).format(d));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-24 pb-16">
      {/* Background layers */}
      <div className="absolute inset-0 bg-aurora" />
      <div className="absolute inset-0 bg-civic-grid opacity-60" />

      {/* Floating glow blobs */}
      <div className="absolute -top-32 -left-32 size-[28rem] rounded-full bg-emerald-500/20 blur-[120px] animate-float-slow" />
      <div className="absolute top-1/3 -right-32 size-[32rem] rounded-full bg-amber-500/15 blur-[140px] animate-float" />
      <div className="absolute -bottom-32 left-1/4 size-[26rem] rounded-full bg-cyan-500/15 blur-[120px] animate-float-slow" />

      {/* Scanline sweep */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-emerald-400/[0.07] to-transparent scan-sweep" />
      </div>

      {/* Smart City Skyline (SVG datar, hidup dengan titik-titik cahaya) */}
      <SmartCitySkyline />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center min-h-[78vh]">
          {/* Left: headline */}
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass text-xs font-medium text-emerald-300">
              <span className="live-dot" />
              <span>Sistem Aktif · {time} WIB</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground">514 Kab/Kota Tersambung</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.02] tracking-tight">
              Ekonomi Digital
              <br />
              yang Mengalir Tanpa
              <br />
              <span className="text-gradient-civic">Kabut Birokrasi.</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              <span className="font-semibold text-foreground">MEDINA EKONOMI</span> — Masyarakat
              Ekonomi Digital Nasional. Mesin ekonomi smart city yang menyatukan{" "}
              <span className="text-emerald-400 font-medium">Digitalisasi Pajak</span>,{" "}
              <span className="text-cyan-400 font-medium">Digitalisasi OPD</span>, dan{" "}
              <span className="text-amber-400 font-medium">Digitalisasi Perijinan</span> dalam
              satu ekosistem data terpadu. Pajak tanpa antre, izin tanpa paper, keputusan tanpa asumsi.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-emerald-950 border-0 font-semibold shadow-xl shadow-emerald-500/30"
                asChild
              >
                <a href="#pilar">
                  Jelajahi Tiga Pilar
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
                  Lihat Arsitektur
                </a>
              </Button>
            </div>

            {/* Trust line */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="size-3.5 text-emerald-400" /> ZeroTrust Security
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Activity className="size-3.5 text-amber-400" /> 99,98% Uptime
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Globe2 className="size-3.5 text-cyan-400" /> 1 Pintu, 514 Daerah
              </span>
            </div>
          </div>

          {/* Right: live command orb */}
          <div className="lg:col-span-5">
            <CommandOrb />
          </div>
        </div>

        {/* Hero stat strip */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {HERO_STATS.map((s, i) => (
            <div
              key={s.label}
              className="glass rounded-2xl p-5 lift-hover"
            >
              <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                {s.label}
              </div>
              <div className="font-display text-2xl lg:text-3xl font-bold text-foreground">
                <Counter
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  decimals={s.decimals || 0}
                />
              </div>
              <div className="text-xs text-emerald-400 mt-1 font-medium">{s.delta}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted-foreground/60">
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="size-4 animate-bounce" />
      </div>
    </section>
  );
}

const HERO_STATS = [
  { label: "Penerimaan Pajak 2025", value: 87.4, prefix: "Rp ", suffix: " T", decimals: 1, delta: "+18,2% YoY" },
  { label: "Izin Diproses YTD", value: 8.4, prefix: "", suffix: " jt", decimals: 1, delta: "+2,1 jt" },
  { label: "OPD Tersambung", value: 514, prefix: "", suffix: "", decimals: 0, delta: "100% nasional" },
  { label: "Efisiensi Layanan", value: 92, prefix: "", suffix: "%", decimals: 0, delta: "−62 jam/bln" },
];

function CommandOrb() {
  return (
    <div className="relative aspect-square max-w-md mx-auto">
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full border border-white/[0.06] animate-orbit-reverse">
        {["e-Pajak", "Satu Data", "OSS-Plus", "RKUD"].map((label, i) => {
          const angle = (i * 90 - 90) * (Math.PI / 180);
          const x = 50 + 50 * Math.cos(angle);
          const y = 50 + 50 * Math.sin(angle);
          return (
            <div
              key={label}
              className="absolute -translate-x-1/2 -translate-y-1/2 px-2.5 py-1 rounded-full glass text-[10px] font-medium text-muted-foreground"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {label}
            </div>
          );
        })}
      </div>

      {/* Middle ring with ticks */}
      <div className="absolute inset-[12%] rounded-full border border-white/[0.08] animate-orbit">
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = i * 15;
          const isLong = i % 6 === 0;
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 origin-bottom"
              style={{
                transform: `translate(-50%, -100%) rotate(${angle}deg) translateY(-44%)`,
                height: isLong ? 12 : 6,
                width: 1.5,
              }}
            >
              <div
                className={`h-full w-full ${isLong ? "bg-emerald-400/60" : "bg-white/15"}`}
              />
            </div>
          );
        })}
      </div>

      {/* Core */}
      <div className="absolute inset-[26%] rounded-full glass-strong grid place-items-center">
        <div className="absolute inset-0 rounded-full conic-blob opacity-50 animate-orbit" />
        <div className="relative text-center px-4">
          <div className="text-[10px] uppercase tracking-[0.2em] text-emerald-400 font-semibold mb-1">
            MEDINA Core
          </div>
          <div className="font-display text-3xl font-bold leading-none">
            <Counter value={9.2} decimals={1} />
            <span className="text-sm text-muted-foreground font-normal"> M/s</span>
          </div>
          <div className="text-[10px] text-muted-foreground mt-1">API throughput nasional</div>
          <div className="mt-2 inline-flex items-center gap-1 text-[10px] text-emerald-400">
            <span className="live-dot scale-75" /> Live
          </div>
        </div>
      </div>

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute size-1.5 rounded-full bg-emerald-400/60"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            animation: `float-y ${4 + (i % 4)}s ease-in-out ${i * 0.3}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

const PARTICLES = [
  { x: 18, y: 30 }, { x: 78, y: 22 }, { x: 85, y: 65 },
  { x: 12, y: 70 }, { x: 50, y: 12 }, { x: 45, y: 88 },
  { x: 30, y: 50 }, { x: 70, y: 45 },
];

function SmartCitySkyline() {
  return (
    <div className="absolute bottom-0 inset-x-0 h-48 pointer-events-none opacity-50">
      <svg
        viewBox="0 0 1440 200"
        className="w-full h-full"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id="skyline-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.72 0.17 155)" stopOpacity="0" />
            <stop offset="60%" stopColor="oklch(0.72 0.17 155)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="oklch(0.72 0.17 155)" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Back row buildings */}
        <g fill="url(#skyline-fade)">
          <rect x="40" y="120" width="48" height="80" rx="2" />
          <rect x="100" y="90" width="36" height="110" rx="2" />
          <rect x="148" y="110" width="52" height="90" rx="2" />
          <rect x="220" y="70" width="40" height="130" rx="2" />
          <rect x="270" y="100" width="44" height="100" rx="2" />
          <rect x="325" y="60" width="34" height="140" rx="2" />
          <rect x="370" y="95" width="48" height="105" rx="2" />
          <rect x="430" y="115" width="40" height="85" rx="2" />
          <rect x="485" y="80" width="44" height="120" rx="2" />
          <rect x="540" y="105" width="38" height="95" rx="2" />
          <rect x="590" y="65" width="50" height="135" rx="2" />
          <rect x="650" y="100" width="36" height="100" rx="2" />
          <rect x="700" y="90" width="46" height="110" rx="2" />
          <rect x="760" y="115" width="42" height="85" rx="2" />
          <rect x="815" y="75" width="38" height="125" rx="2" />
          <rect x="865" y="100" width="48" height="100" rx="2" />
          <rect x="925" y="60" width="40" height="140" rx="2" />
          <rect x="980" y="95" width="44" height="105" rx="2" />
          <rect x="1040" y="85" width="36" height="115" rx="2" />
          <rect x="1090" y="110" width="50" height="90" rx="2" />
          <rect x="1155" y="70" width="42" height="130" rx="2" />
          <rect x="1210" y="100" width="38" height="100" rx="2" />
          <rect x="1265" y="90" width="46" height="110" rx="2" />
          <rect x="1325" y="115" width="42" height="85" rx="2" />
          <rect x="1380" y="95" width="44" height="105" rx="2" />
        </g>

        {/* Window lights (titik-titik kecil hidup) */}
        <g fill="oklch(0.8 0.16 75 / 0.7)">
          {WINDOW_LIGHTS.map((w, i) => (
            <rect
              key={i}
              x={w.x}
              y={w.y}
              width="2"
              height="2"
              opacity={0.6}
            >
              <animate
                attributeName="opacity"
                values="0.2;1;0.2"
                dur={`${2 + (i % 5)}s`}
                begin={`${i * 0.15}s`}
                repeatCount="indefinite"
              />
            </rect>
          ))}
        </g>

        {/* Data flow lines at ground level */}
        <g stroke="oklch(0.72 0.17 155 / 0.5)" strokeWidth="1" fill="none">
          <path d="M0 195 L1440 195" className="flow-line" />
          <path d="M0 198 L1440 198" className="flow-line" />
        </g>
      </svg>
    </div>
  );
}

// Generate window light positions deterministically
const WINDOW_LIGHTS = (() => {
  const out: { x: number; y: number }[] = [];
  const buildings = [
    [40, 120], [100, 90], [148, 110], [220, 70], [270, 100],
    [325, 60], [370, 95], [430, 115], [485, 80], [540, 105],
    [590, 65], [650, 100], [700, 90], [760, 115], [815, 75],
    [865, 100], [925, 60], [980, 95], [1040, 85], [1090, 110],
    [1155, 70], [1210, 100], [1265, 90], [1325, 115], [1380, 95],
  ];
  buildings.forEach(([bx, by]) => {
    const width = 34 + (bx % 18);
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < Math.floor(width / 6); c++) {
        if ((bx + r * 7 + c * 11) % 3 === 0) {
          out.push({ x: bx + 4 + c * 6, y: by + 8 + r * 12 });
        }
      }
    }
  });
  return out.slice(0, 180);
})();
