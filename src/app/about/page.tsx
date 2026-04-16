import type { Metadata } from "next";
import Image from "@/components/shared/Img";
import Link from "next/link";
import { Phone, ArrowRight, Quote, Leaf } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "About — Plant-Based Upholstery Cleaning in Calgary",
  description:
    "A Calgary-based cleaning company that uses only plant-based products. Safe for pets, kids, and every home.",
};

const values = [
  {
    title: "Plant-based, always",
    description:
      "We don't use industrial solvents, chlorine, ammonia, or fragrance oils. Everything we spray is plant-derived and biodegradable. Your couch gets clean, your home stays safe.",
  },
  {
    title: "Honest pricing",
    description:
      "You get a quote before we start. If it changes on the job, we tell you why — and you approve it before we keep going. No surprise invoices, no haggling.",
  },
  {
    title: "One team, every time",
    description:
      "We don't subcontract. The same people who clean your couch today will clean it again next year. Consistent quality, consistent service, familiar faces.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-24 bg-cream-100 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-forest-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 grain pointer-events-none" aria-hidden />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="font-bold text-xs tracking-[0.2em] uppercase mb-4 text-terracotta-500">
            · Who you&apos;re hiring
          </p>
          <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-[5.5rem] text-forest-950 leading-[0.95] mb-6 max-w-4xl tracking-tight">
            Cleaner couches.<br />
            <em className="text-terracotta-500 not-italic font-light italic">Healthier homes.</em>
          </h1>
          <p className="text-stone-600 text-lg lg:text-xl max-w-2xl leading-relaxed">
            We&apos;re a small, family-run cleaning company in Calgary. Our whole thing is pulling dirt out of fabric without putting chemicals into your home.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-32 bg-cream-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <ScrollReveal className="lg:col-span-5">
              <div className="lg:sticky lg:top-28 relative">
                <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-xl">
                  <Image
                    src="/images/why-us.jpg"
                    alt="Our team"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-terracotta-500 text-cream-50 rounded-2xl px-6 py-5 shadow-xl">
                  <p className="font-heading font-bold text-4xl leading-none">
                    {company.stats.yearsServing}
                  </p>
                  <p className="text-cream-50/80 text-[10px] uppercase tracking-widest mt-1 font-bold">
                    Years in Calgary
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15} className="lg:col-span-7">
              <p className="font-bold text-xs tracking-[0.2em] uppercase mb-4 text-terracotta-500">
                · The story
              </p>
              <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-forest-950 mb-8 leading-[1.02]">
                We got into this because <em className="text-terracotta-500 not-italic font-light italic">everyone else was using chemicals.</em>
              </h2>
              <div className="space-y-5 text-stone-600 text-base lg:text-lg leading-relaxed">
                <p>
                  A family member with asthma couldn&apos;t sit on her own couch for a week after a &ldquo;deep clean&rdquo; from a big-name company. The chemical smell took ten days to go away. That was the moment we realized the whole industry had a problem.
                </p>
                <p>
                  Industrial solvents. Synthetic fragrances. Optical brighteners. The stuff that makes commercial cleaners &ldquo;powerful&rdquo; is also the stuff that outgasses for days and re-soils your fabric within a month. We didn&apos;t want that in our home. We didn&apos;t want it in yours.
                </p>
                <p>
                  So we started doing it differently. Plant-derived surfactants. Hot water. Careful extraction. Same deep clean, zero compromise. Calgary homeowners told their friends. Their friends told their neighbours. We&apos;ve been booked out ever since.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="relative py-24 lg:py-36 bg-forest-500 overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-terracotta-500/15 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <ScrollReveal>
            <Quote className="w-14 h-14 lg:w-20 lg:h-20 text-terracotta-300 mx-auto mb-8" strokeWidth={1} />
            <blockquote className="font-heading font-medium text-3xl sm:text-4xl lg:text-5xl text-cream-50 leading-[1.15] mb-10">
              If we wouldn&apos;t use it on <em className="text-terracotta-300 not-italic font-light italic">our own kids&apos; couch</em>, we won&apos;t use it on yours.
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-terracotta-500 text-cream-50 font-heading font-bold text-xl flex items-center justify-center">
                <Leaf className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-cream-50">The Moss &amp; Pine team</p>
                <p className="text-cream-50/50 text-sm">Calgary, AB</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32 bg-cream-100 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="max-w-2xl mb-14">
              <p className="font-bold text-xs tracking-[0.2em] uppercase mb-4 text-terracotta-500">
                · Our principles
              </p>
              <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-forest-950 leading-[1.02]">
                Three things we won&apos;t <em className="text-terracotta-500 not-italic font-light italic">compromise on.</em>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.1}>
                <div className="bg-cream-50 rounded-3xl p-8 lg:p-10 border border-stone-200/60 h-full hover:border-forest-300 hover:shadow-lg transition-all duration-300">
                  <span className="font-heading font-bold text-5xl text-stone-200">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-2xl text-forest-950 mt-4 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed text-sm lg:text-base">
                    {value.description}
                  </p>
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
              · Let&apos;s work
            </p>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-cream-50 mb-6 leading-[1.02]">
              Ready for a <em className="text-terracotta-300 not-italic font-light italic">fresh start?</em>
            </h2>
            <p className="text-cream-50/65 text-base lg:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Get a quote in under a minute. No obligation, no pressure, no phone tag.
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
    </>
  );
}
