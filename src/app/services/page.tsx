import type { Metadata } from "next";
import Image from "@/components/shared/Img";
import Link from "next/link";
import { Check, ArrowRight, Phone, Clock } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { services } from "@/data/services";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Services — Upholstery, Mattress, Rug & Car Cleaning",
  description:
    "Plant-based steam cleaning for couches, sectionals, armchairs, mattresses, rugs, and car interiors. Calgary and surrounding areas.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-24 bg-cream-100 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-forest-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 grain pointer-events-none" aria-hidden />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="font-bold text-xs tracking-[0.2em] uppercase mb-4 text-terracotta-500">
            · What we clean
          </p>
          <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-[5.5rem] text-forest-950 leading-[0.95] mb-6 max-w-4xl tracking-tight">
            If it&apos;s fabric,<br />
            <em className="text-terracotta-500 not-italic font-light italic">we can clean it.</em>
          </h1>
          <p className="text-stone-600 text-lg lg:text-xl max-w-2xl leading-relaxed">
            Seven services, one plant-based cleaning method, zero upsells. Everything priced up front.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 lg:py-32 bg-cream-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="space-y-28 lg:space-y-40">
            {services.map((service, i) => (
              <ScrollReveal key={service.slug}>
                <div
                  id={service.slug}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                    i % 2 === 1 ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  <div className="lg:col-span-6 relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    {service.popular && (
                      <span className="absolute top-5 left-5 inline-flex items-center px-3 py-1 rounded-full bg-terracotta-500 text-cream-50 text-[10px] font-bold uppercase tracking-widest">
                        Most popular
                      </span>
                    )}
                  </div>

                  <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                    <div className="flex items-baseline gap-4 mb-5">
                      <span className="font-heading font-bold text-5xl lg:text-6xl text-stone-200">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="h-px flex-1 bg-stone-200" />
                    </div>
                    <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-forest-950 mb-5 leading-[1.05]">
                      {service.title}
                    </h2>
                    <div className="flex flex-wrap gap-3 mb-6">
                      {service.priceFrom && (
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest-50 text-forest-600 text-xs font-bold">
                          From {service.priceFrom}
                        </span>
                      )}
                      {service.duration && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cream-100 text-stone-600 text-xs font-bold">
                          <Clock className="w-3 h-3" />
                          {service.duration}
                        </span>
                      )}
                    </div>
                    <p className="text-stone-600 leading-relaxed mb-7 text-base lg:text-lg">
                      {service.description}
                    </p>
                    <ul className="space-y-2.5 mb-8">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-stone-700 text-sm lg:text-base"
                        >
                          <div className="w-5 h-5 rounded-full bg-forest-50 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-forest-500" strokeWidth={3} />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/quote"
                      className="group inline-flex items-center gap-2 bg-forest-500 hover:bg-forest-600 text-cream-50 px-6 py-3.5 rounded-full font-bold text-sm transition-all"
                    >
                      Get a quote on this
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
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
            <p className="font-bold text-xs tracking-[0.2em] uppercase mb-5 text-terracotta-300">
              · Not sure what you need?
            </p>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-cream-50 mb-6 leading-[1.02]">
              That&apos;s what the <em className="text-terracotta-300 not-italic font-light italic">quiz is for.</em>
            </h2>
            <p className="text-cream-50/65 text-base lg:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Five questions. One honest quote. No commitment.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2.5 bg-terracotta-500 hover:bg-terracotta-600 text-cream-50 px-8 py-4 rounded-full font-bold text-sm lg:text-base transition-all"
              >
                Start the quote quiz
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={company.phoneLink}
                className="inline-flex items-center gap-2 border border-cream-50/25 hover:border-cream-50/50 hover:bg-cream-50/5 text-cream-50 px-8 py-4 rounded-full font-bold text-sm lg:text-base transition-all"
              >
                <Phone className="w-4 h-4" />
                Or just call
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
