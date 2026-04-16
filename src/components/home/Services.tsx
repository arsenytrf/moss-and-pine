import Link from "next/link";
import { ArrowRight, Sofa, Layers3, Armchair, BedDouble, Sparkles, Car, Building2 } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const items = [
  { icon: Sofa, title: "Couch & Sofa", href: "/services#couch", from: "$129", popular: true },
  { icon: Layers3, title: "Sectional", href: "/services#sectional", from: "$189" },
  { icon: Armchair, title: "Armchair", href: "/services#armchair", from: "$79" },
  { icon: BedDouble, title: "Mattress", href: "/services#mattress", from: "$99" },
  { icon: Sparkles, title: "Area Rugs", href: "/services#rug", from: "$89" },
  { icon: Car, title: "Car Interior", href: "/services#car", from: "$149" },
  { icon: Building2, title: "Commercial", href: "/services#commercial", from: "Quote" },
];

export function Services() {
  return (
    <section className="py-20 lg:py-32 bg-cream-50 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="font-bold text-xs tracking-[0.2em] uppercase mb-4 text-terracotta-500">
                · What we clean
              </p>
              <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-forest-950 leading-[1.02]">
                If it&apos;s fabric,<br />
                <em className="text-terracotta-500 not-italic font-light italic">we can clean it.</em>
              </h2>
            </div>
            <p className="text-stone-500 text-base lg:text-lg max-w-sm">
              Seven services, one plant-based cleaning method, zero upsells. Everything priced up front.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} delay={i * 0.06}>
                <Link
                  href={item.href}
                  className="group relative block p-6 lg:p-7 rounded-3xl bg-cream-100 hover:bg-forest-500 border border-stone-200/60 hover:border-forest-500 transition-all duration-300 h-full"
                >
                  {item.popular && (
                    <span className="absolute top-4 right-4 inline-flex items-center px-2.5 py-0.5 rounded-full bg-terracotta-500 text-cream-50 text-[9px] font-bold uppercase tracking-widest">
                      Popular
                    </span>
                  )}
                  <div className="w-12 h-12 rounded-xl bg-cream-50 group-hover:bg-forest-400/20 flex items-center justify-center mb-6 transition-colors">
                    <Icon className="w-6 h-6 text-forest-500 group-hover:text-cream-50 transition-colors" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-forest-950 group-hover:text-cream-50 mb-1.5 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-stone-500 group-hover:text-cream-50/60 text-[13px] mb-5 transition-colors">
                    From <span className="font-bold">{item.from}</span>
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-forest-500 group-hover:text-terracotta-300 transition-colors">
                    Learn more
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
