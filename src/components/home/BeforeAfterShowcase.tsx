"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BeforeAfter } from "@/components/shared/BeforeAfter";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { beforeAfterItems } from "@/data/gallery";

export function BeforeAfterShowcase() {
  const [index, setIndex] = useState(0);
  const current = beforeAfterItems[index];

  return (
    <section className="py-20 lg:py-32 bg-cream-100 relative overflow-hidden">
      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-forest-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="font-bold text-xs tracking-[0.2em] uppercase mb-4 text-terracotta-500">
                · The proof
              </p>
              <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-forest-950 leading-[1.02]">
                Drag the handle.<br />
                <em className="text-terracotta-500 not-italic font-light italic">See the difference.</em>
              </h2>
            </div>
            <p className="text-stone-500 text-base lg:text-lg max-w-sm">
              Real Calgary homes, real transformations. No stock photos, no filters.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                >
                  <BeforeAfter
                    beforeSrc={current.beforeSrc}
                    afterSrc={current.afterSrc}
                    alt={current.title}
                    className="shadow-[0_30px_80px_-20px_rgba(45,74,62,0.3)]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="mb-8"
                >
                  <p className="text-terracotta-500 text-xs font-bold uppercase tracking-widest mb-3">
                    {current.category}
                  </p>
                  <h3 className="font-heading font-bold text-3xl lg:text-4xl text-forest-950 leading-tight mb-4">
                    {current.title}
                  </h3>
                  {current.note && (
                    <p className="text-stone-600 text-base lg:text-lg leading-relaxed">{current.note}</p>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Tabs */}
              <div className="space-y-2">
                {beforeAfterItems.map((item, i) => (
                  <button
                    key={item.title}
                    onClick={() => setIndex(i)}
                    className={`w-full text-left flex items-center gap-4 p-4 rounded-xl border transition-all ${
                      i === index
                        ? "bg-forest-500 border-forest-500 text-cream-50"
                        : "bg-cream-50 border-stone-200 text-stone-600 hover:border-stone-300"
                    }`}
                  >
                    <span
                      className={`font-heading font-bold text-2xl shrink-0 w-9 text-center ${
                        i === index ? "text-terracotta-300" : "text-stone-300"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-sm truncate">{item.title}</p>
                      <p
                        className={`text-xs mt-0.5 ${
                          i === index ? "text-cream-50/60" : "text-stone-400"
                        }`}
                      >
                        {item.category}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
