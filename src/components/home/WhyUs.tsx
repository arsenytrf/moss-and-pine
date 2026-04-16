import Image from "@/components/shared/Img";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const points = [
  "100% plant-based, biodegradable cleaning products",
  "Safe for children, pets, asthma, and sensitive skin",
  "Hot-water steam extraction — not surface wiping",
  "No residue, no chemical smell, no sticky fabric",
  "Transparent pricing — no upsells on the job",
  "Same team every visit — never a subcontractor",
];

export function WhyUs() {
  return (
    <section className="py-20 lg:py-32 bg-forest-500 text-cream-50 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-terracotta-500/15 rounded-full blur-[150px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <ScrollReveal className="lg:col-span-6">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/why-us.jpg"
                  alt="Plant-based cleaning supplies"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-terracotta-500 text-cream-50 rounded-2xl px-6 py-5 shadow-xl">
                <p className="font-heading font-bold text-4xl lg:text-5xl leading-none">100%</p>
                <p className="text-cream-50/80 text-[10px] uppercase tracking-widest mt-1 font-bold">
                  Plant-based · pet-safe
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="lg:col-span-6">
            <p className="font-bold text-xs tracking-[0.2em] uppercase mb-4 text-terracotta-300">
              · Why us
            </p>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-cream-50 leading-[1.02] mb-6">
              The other guys use harsh chemicals.<br />
              <em className="text-terracotta-300 not-italic font-light italic">We don&apos;t.</em>
            </h2>
            <p className="text-cream-50/70 text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
              Most cleaning companies spray industrial solvents that leave residue, outgas for days, and re-soil within a month. We use plant-derived surfactants and hot water. Same deep clean, zero compromise.
            </p>

            <ul className="space-y-3 mb-10">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <div className="shrink-0 w-5 h-5 rounded-full bg-terracotta-500 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-cream-50" strokeWidth={3} />
                  </div>
                  <span className="text-cream-50/85 text-[15px] lg:text-base">{point}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-terracotta-300 hover:text-cream-50 font-bold text-sm transition-colors group"
            >
              Read our story
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
