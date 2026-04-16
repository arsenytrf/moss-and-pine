"use client";
import Link from "next/link";
import { Phone, Star, ArrowRight, Leaf, Shield, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { BeforeAfter } from "@/components/shared/BeforeAfter";
import { company } from "@/data/company";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden bg-cream-100">
      {/* Organic shapes */}
      <div className="absolute top-20 -left-40 w-[600px] h-[600px] bg-forest-500/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-terracotta-300/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Grain overlay */}
      <div className="absolute inset-0 grain pointer-events-none" aria-hidden />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 mb-6 px-3.5 py-1.5 rounded-full bg-cream-50 border border-stone-200/70 shadow-sm"
            >
              <Leaf className="w-3.5 h-3.5 text-forest-500" />
              <span className="text-stone-700 text-[11px] font-bold uppercase tracking-widest">
                100% Plant-Based · Pet-Safe · Calgary
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-bold text-[2.75rem] sm:text-6xl lg:text-[5.75rem] text-forest-950 leading-[0.95] tracking-tight mb-6 lg:mb-7"
            >
              Your couch is <em className="text-terracotta-500 not-italic font-light italic">gross.</em>
              <br />
              We can fix that.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-stone-600 text-base lg:text-xl max-w-xl mb-9 leading-relaxed"
            >
              Deep steam-extraction cleaning with plant-based products. Safe for kids, safe for pets, devastating on stains. We come to you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Link
                href="/quote"
                className="group inline-flex items-center gap-2.5 bg-forest-500 hover:bg-forest-600 text-cream-50 px-7 py-4 rounded-full font-bold text-sm transition-all shadow-lg shadow-forest-500/20"
              >
                Get my quote in 60 seconds
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={company.phoneLink}
                className="inline-flex items-center gap-2.5 bg-cream-50 hover:bg-cream-100 border border-stone-200 text-forest-900 px-7 py-4 rounded-full font-bold text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-terracotta-500" />
                {company.phone}
              </a>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-terracotta-500 text-terracotta-500" />
                  ))}
                </div>
                <span className="text-stone-700 text-xs font-semibold">
                  {company.googleRating} · {company.googleReviewCount} reviews
                </span>
              </div>
              <div className="w-px h-5 bg-stone-300 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-forest-500" />
                <span className="text-stone-700 text-xs font-semibold">Pet-safe guarantee</span>
              </div>
              <div className="w-px h-5 bg-stone-300 hidden sm:block" />
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-forest-500" />
                <span className="text-stone-700 text-xs font-semibold">Dry in 4–6 hours</span>
              </div>
            </motion.div>
          </div>

          {/* Right — Before/After */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <BeforeAfter
                beforeSrc="/images/ba-1-before.jpg"
                afterSrc="/images/ba-1-after.jpg"
                alt="Cream sectional deep clean"
                className="shadow-[0_30px_80px_-20px_rgba(45,74,62,0.35)]"
              />
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-cream-50 rounded-2xl p-5 shadow-xl border border-stone-100 hidden sm:block">
                <p className="font-heading font-bold text-3xl text-forest-950 leading-none">
                  {company.stats.couchesCleaned}
                </p>
                <p className="text-stone-500 text-[10px] uppercase tracking-widest mt-1 font-semibold">
                  Calgary homes cleaned
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
