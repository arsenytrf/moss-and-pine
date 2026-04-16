"use client";
import { useState, useEffect } from "react";
import Image from "@/components/shared/Img";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, ArrowRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { BeforeAfter } from "@/components/shared/BeforeAfter";
import { galleryItems, beforeAfterItems } from "@/data/gallery";
import { company } from "@/data/company";

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard nav for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft" && lightboxIndex > 0) setLightboxIndex(lightboxIndex - 1);
      if (e.key === "ArrowRight" && lightboxIndex < galleryItems.length - 1)
        setLightboxIndex(lightboxIndex + 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex]);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-24 bg-cream-100 overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-forest-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 grain pointer-events-none" aria-hidden />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="font-bold text-xs tracking-[0.2em] uppercase mb-4 text-terracotta-500">
            · Our work
          </p>
          <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-[5.5rem] text-forest-950 leading-[0.95] mb-6 max-w-4xl tracking-tight">
            Real couches.<br />
            <em className="text-terracotta-500 not-italic font-light italic">Real transformations.</em>
          </h1>
          <p className="text-stone-600 text-lg lg:text-xl max-w-2xl leading-relaxed">
            No stock photos, no filters, no showroom tricks. These are real Calgary homes, photographed after we left.
          </p>
        </div>
      </section>

      {/* Before/After */}
      <section className="py-20 lg:py-28 bg-cream-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-14">
              <p className="font-bold text-xs tracking-[0.2em] uppercase mb-4 text-terracotta-500">
                · Side by side
              </p>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-forest-950 leading-[1.02]">
                Drag the slider to see the difference.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {beforeAfterItems.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div>
                  <BeforeAfter
                    beforeSrc={item.beforeSrc}
                    afterSrc={item.afterSrc}
                    alt={item.title}
                    className="shadow-lg"
                  />
                  <div className="mt-5">
                    <p className="text-terracotta-500 text-[10px] font-bold uppercase tracking-widest mb-1">
                      {item.category}
                    </p>
                    <h3 className="font-heading font-bold text-xl text-forest-950 mb-1">
                      {item.title}
                    </h3>
                    {item.note && (
                      <p className="text-stone-500 text-sm">{item.note}</p>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Gallery */}
      <section className="py-20 lg:py-28 bg-cream-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="mb-14">
              <p className="font-bold text-xs tracking-[0.2em] uppercase mb-4 text-terracotta-500">
                · The gallery
              </p>
              <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-forest-950 leading-[1.02]">
                After photos. <em className="text-terracotta-500 not-italic font-light italic">Click any to enlarge.</em>
              </h2>
            </div>
          </ScrollReveal>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 lg:gap-5 space-y-4 lg:space-y-5">
            {galleryItems.map((item, i) => (
              <ScrollReveal key={item.src} delay={i * 0.04}>
                <button
                  onClick={() => setLightboxIndex(i)}
                  className="group relative block w-full rounded-2xl overflow-hidden break-inside-avoid cursor-pointer"
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={600}
                    height={600}
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.04]"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-terracotta-300 text-[10px] font-bold uppercase tracking-widest mb-1">
                      {item.category}
                    </p>
                    <p className="text-cream-50 text-sm font-medium">{item.title}</p>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 bg-forest-950 overflow-hidden">
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-terracotta-500/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-[900px] mx-auto px-6 lg:px-10 text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-cream-50 mb-6 leading-[1.02]">
              Your couch could look like this <em className="text-terracotta-300 not-italic font-light italic">by the end of the week.</em>
            </h2>
            <p className="text-cream-50/65 text-base lg:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Get a quote in 60 seconds. No phone calls, no pressure.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2.5 bg-terracotta-500 hover:bg-terracotta-600 text-cream-50 px-8 py-4 rounded-full font-bold text-sm lg:text-base transition-all"
              >
                Get your quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={company.phoneLink}
                className="inline-flex items-center gap-2 border border-cream-50/25 hover:border-cream-50/50 hover:bg-cream-50/5 text-cream-50 px-8 py-4 rounded-full font-bold text-sm lg:text-base transition-all"
              >
                <Phone className="w-4 h-4" />
                Call {company.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-forest-950/95 backdrop-blur-sm flex items-center justify-center"
            onClick={() => setLightboxIndex(null)}
          >
            <div
              className="relative max-w-5xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute -top-12 right-0 text-cream-50/60 hover:text-cream-50 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <Image
                src={galleryItems[lightboxIndex].src}
                alt={galleryItems[lightboxIndex].title}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
                unoptimized
              />
              <div className="flex justify-between items-center mt-5">
                <button
                  onClick={() => lightboxIndex > 0 && setLightboxIndex(lightboxIndex - 1)}
                  className="w-10 h-10 rounded-full border border-cream-50/20 hover:border-cream-50/50 hover:bg-cream-50/5 flex items-center justify-center text-cream-50/70 hover:text-cream-50 disabled:opacity-20 transition-all"
                  disabled={lightboxIndex === 0}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <p className="text-cream-50/70 text-sm">
                  <span className="text-cream-50 font-medium">
                    {galleryItems[lightboxIndex].title}
                  </span>
                  <span className="text-cream-50/40 ml-2">
                    {lightboxIndex + 1} / {galleryItems.length}
                  </span>
                </p>
                <button
                  onClick={() =>
                    lightboxIndex < galleryItems.length - 1 &&
                    setLightboxIndex(lightboxIndex + 1)
                  }
                  className="w-10 h-10 rounded-full border border-cream-50/20 hover:border-cream-50/50 hover:bg-cream-50/5 flex items-center justify-center text-cream-50/70 hover:text-cream-50 disabled:opacity-20 transition-all"
                  disabled={lightboxIndex === galleryItems.length - 1}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
