"use client";
import { useRef, useEffect } from "react";
import { Star } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { reviews } from "@/data/reviews";
import { company } from "@/data/company";

export function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let animId: number;
    let speed = 0.4;

    function scroll() {
      if (!el) return;
      el.scrollLeft += speed;
      if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
      animId = requestAnimationFrame(scroll);
    }

    const pause = () => { speed = 0; };
    const resume = () => { speed = 0.4; };
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);

    animId = requestAnimationFrame(scroll);
    return () => {
      cancelAnimationFrame(animId);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
    };
  }, []);

  const allReviews = [...reviews, ...reviews];

  return (
    <section className="py-20 lg:py-28 bg-cream-100 relative overflow-hidden">
      <div className="absolute -top-40 right-1/4 w-[500px] h-[500px] bg-forest-500/5 rounded-full blur-[140px] pointer-events-none" />

      <ScrollReveal>
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="font-bold text-xs tracking-[0.2em] uppercase mb-4 text-terracotta-500">
                · Word of mouth
              </p>
              <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-forest-950 leading-[1.02]">
                {company.googleReviewCount} reviews.<br />
                <em className="text-terracotta-500 not-italic font-light italic">All five stars.</em>
              </h2>
            </div>
            <a
              href={company.googleReviewLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-stone-500 hover:text-forest-500 font-medium text-sm transition-colors shrink-0 group"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              See all on Google
            </a>
          </div>
        </div>
      </ScrollReveal>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-cream-100 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-cream-100 to-transparent z-10 pointer-events-none" />

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto px-6 lg:px-10 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {allReviews.map((review, i) => (
            <div
              key={`${review.author}-${i}`}
              className="shrink-0 w-[340px] sm:w-[380px] rounded-2xl p-7 bg-cream-50 border border-stone-200 hover:border-forest-300 hover:shadow-lg transition-all"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-terracotta-500 fill-terracotta-500" />
                ))}
              </div>
              <p className="text-stone-800 text-[15px] leading-relaxed mb-6 font-heading">
                &ldquo;{review.quote}&rdquo;
              </p>
              <div className="pt-5 border-t border-stone-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-forest-500 text-cream-50 font-heading font-bold flex items-center justify-center">
                  {review.initial}
                </div>
                <div>
                  <p className="font-semibold text-stone-900 text-sm">{review.author}</p>
                  <p className="text-stone-500 text-xs mt-0.5">{review.project}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
