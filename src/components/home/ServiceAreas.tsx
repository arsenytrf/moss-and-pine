import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { company } from "@/data/company";

export function ServiceAreas() {
  return (
    <section className="py-20 lg:py-28 bg-cream-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <ScrollReveal className="lg:col-span-5">
            <p className="font-bold text-xs tracking-[0.2em] uppercase mb-4 text-terracotta-500">
              · Where we clean
            </p>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-forest-950 leading-[1.02] mb-6">
              Calgary and <em className="text-terracotta-500 not-italic font-light italic">everywhere around it.</em>
            </h2>
            <p className="text-stone-500 text-base lg:text-lg leading-relaxed mb-8 max-w-md">
              No travel fees within our service zone. If you&apos;re an hour or less from Calgary, we come to you.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-forest-500 hover:text-forest-600 font-bold text-sm group"
            >
              Don&apos;t see your town? Reach out
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="lg:col-span-7">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-stone-200 border border-stone-200 rounded-2xl overflow-hidden">
              {company.areasServed.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 px-5 py-5 bg-cream-50 hover:bg-forest-50 transition-colors group"
                >
                  <MapPin className="w-4 h-4 text-terracotta-500 shrink-0" />
                  <span className="text-sm font-semibold text-stone-800 truncate">{area}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
