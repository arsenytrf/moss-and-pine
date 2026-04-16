"use client";
import { useRef, useState, useCallback, useEffect } from "react";
import Image from "@/components/shared/Img";
import { Move } from "lucide-react";

interface BeforeAfterProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  alt: string;
  className?: string;
}

export function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeLabel = "Before",
  afterLabel = "After",
  alt,
  className = "",
}: BeforeAfterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPercent(Math.max(0, Math.min(100, pct)));
  }, []);

  useEffect(() => {
    if (!dragging) return;

    const onMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      updateFromClientX(clientX);
    };
    const onUp = () => setDragging(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [dragging, updateFromClientX]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden select-none rounded-2xl ${className}`}
      onMouseDown={(e) => {
        setDragging(true);
        updateFromClientX(e.clientX);
      }}
      onTouchStart={(e) => {
        setDragging(true);
        updateFromClientX(e.touches[0].clientX);
      }}
    >
      {/* After (full) */}
      <div className="relative aspect-[4/3] w-full">
        <Image src={afterSrc} alt={`${alt} — after`} fill className="object-cover" unoptimized />
      </div>

      {/* Before (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
      >
        <Image src={beforeSrc} alt={`${alt} — before`} fill className="object-cover" unoptimized />
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-stone-900/70 backdrop-blur-sm text-cream-50 text-[11px] font-bold uppercase tracking-widest">
        {beforeLabel}
      </span>
      <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-forest-500/90 backdrop-blur-sm text-cream-50 text-[11px] font-bold uppercase tracking-widest">
        {afterLabel}
      </span>

      {/* Handle */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-cream-50 shadow-[0_0_20px_rgba(0,0,0,0.35)] pointer-events-none"
        style={{ left: `${percent}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream-50 shadow-xl flex items-center justify-center">
          <Move className="w-5 h-5 text-forest-500" />
        </div>
      </div>

      {/* Accessible range (keyboard) */}
      <input
        type="range"
        min={0}
        max={100}
        value={percent}
        onChange={(e) => setPercent(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
        aria-label={`${alt} before-after slider`}
      />
    </div>
  );
}
