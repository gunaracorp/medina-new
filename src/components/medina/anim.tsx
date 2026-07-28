"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface CounterProps {
  value: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

// Animasi counter yang menghitung dari 0 ke nilai target saat masuk viewport
export function Counter({
  value,
  duration = 1800,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
}: CounterProps) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            // easeOutExpo
            const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
            setDisplay(value * eased);
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {display.toLocaleString("id-ID", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

// Sparkline SVG minimalis
export function Sparkline({
  data,
  className,
  color = "currentColor",
  strokeWidth = 1.6,
}: {
  data: number[];
  className?: string;
  color?: string;
  strokeWidth?: number;
}) {
  const w = 100;
  const h = 32;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const step = w / (data.length - 1);
  const points = data
    .map((v, i) => `${i * step},${h - ((v - min) / range) * (h - 4) - 2}`)
    .join(" ");
  const area = `0,${h} ${points} ${w},${h}`;

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className={cn("w-full h-8", className)}
      preserveAspectRatio="none"
      aria-hidden
    >
      <polygon points={area} fill={color} opacity={0.12} />
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Reveal wrapper (fade + slide up saat masuk viewport)
export function Reveal({
  children,
  delay = 0,
  className,
  as: As = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <As
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </As>
  );
}
