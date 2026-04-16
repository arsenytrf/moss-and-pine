import { Leaf, Shield, Clock, Award } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { company } from "@/data/company";

const items = [
  { icon: Leaf, label: "Plant-based products", value: "100%" },
  { icon: Shield, label: "Pet-safe guarantee", value: "Always" },
  { icon: Clock, label: "Dry time", value: "4–6 hrs" },
  { icon: Award, label: "Satisfaction rate", value: company.stats.satisfactionRate },
];

export function TrustBar() {
  return (
    <section className="py-10 lg:py-14 bg-forest-500 text-cream-50 border-y border-forest-400/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.label} delay={i * 0.08}>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-cream-50/10 border border-cream-50/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-terracotta-300" />
                  </div>
                  <div>
                    <p className="font-heading font-bold text-xl lg:text-2xl leading-none mb-1">
                      {item.value}
                    </p>
                    <p className="text-cream-50/65 text-[11px] lg:text-xs uppercase tracking-widest font-semibold">
                      {item.label}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
