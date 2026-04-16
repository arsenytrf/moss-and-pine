import Link from "next/link";
import { ArrowRight, Phone, Leaf } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { company } from "@/data/company";

export function CTA() {
  return (
    <section className="relative py-24 lg:py-36 bg-forest-950 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-forest-500/30 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-terracotta-500/15 rounded-full blur-[150px] pointer-events-none" />

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-[1000px] mx-auto px-6 lg:px-10 text-center">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream-50/10 border border-cream-50/15 mb-8">
            <Leaf className="w-3.5 h-3.5 text-terracotta-300" />
            <span className="text-cream-50 text-[11px] font-bold uppercase tracking-widest">
              Instant quote · Book this week
            </span>
          </div>

          <h2 className="font-heading font-bold text-5xl sm:text-6xl lg:text-[6rem] text-cream-50 leading-[0.98] tracking-tight mb-8">
            Fresh couch.<br />
            <em className="text-terracotta-300 not-italic font-light italic">Happy home.</em>
          </h2>
          <p className="text-cream-50/70 text-lg lg:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            Get a price in 60 seconds. No email traps, no callbacks, no sales pressure. Just an honest number from honest people.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/quote"
              className="group inline-flex items-center gap-2.5 bg-terracotta-500 hover:bg-terracotta-600 text-cream-50 px-8 py-4 lg:px-10 lg:py-5 rounded-full font-bold text-sm lg:text-base transition-all shadow-xl"
            >
              Get my quote
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={company.phoneLink}
              className="inline-flex items-center gap-2 border border-cream-50/25 hover:border-cream-50/50 hover:bg-cream-50/5 text-cream-50 px-8 py-4 lg:px-10 lg:py-5 rounded-full font-bold text-sm lg:text-base transition-all"
            >
              <Phone className="w-4 h-4" />
              {company.phone}
            </a>
          </div>
          <p className="text-cream-50/35 text-xs mt-10 tracking-wide">
            Instant quote · No obligation · Cancel anytime
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
