import { PhoneCall, Truck, Droplets, Sofa } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";

const steps = [
  {
    icon: PhoneCall,
    title: "You book",
    description: "Call, text, or take the quiz. Tell us what needs cleaning and when. We confirm same-day.",
    duration: "2 min",
  },
  {
    icon: Truck,
    title: "We arrive",
    description: "Our van pulls up with all equipment inside. No mess in your home — everything stays in the truck.",
    duration: "On time",
  },
  {
    icon: Droplets,
    title: "We clean deep",
    description: "Hot-water steam extraction with plant-based agents. Pulls dirt, oils, dander, and allergens from the fibre.",
    duration: "60–120 min",
  },
  {
    icon: Sofa,
    title: "You enjoy",
    description: "Dry in 4–6 hours. Looks, feels, and smells brand new. We walk you through the work before we leave.",
    duration: "Forever",
  },
];

export function Process() {
  return (
    <section className="py-20 lg:py-32 bg-cream-50 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="font-bold text-xs tracking-[0.2em] uppercase mb-4 text-terracotta-500">
              · How it works
            </p>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-forest-950 leading-[1.02]">
              Four steps. <em className="text-terracotta-500 not-italic font-light italic">One clean couch.</em>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-11 left-[12.5%] right-[12.5%] h-px bg-stone-200 pointer-events-none" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <ScrollReveal key={step.title} delay={i * 0.1}>
                <div className="relative bg-cream-100 rounded-3xl p-7 lg:p-8 h-full border border-stone-200/60 hover:border-forest-300 hover:shadow-lg transition-all duration-300">
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="absolute inset-0 bg-cream-50 rounded-full" />
                    <div className="relative w-full h-full rounded-full bg-cream-50 border-2 border-forest-500/10 flex items-center justify-center shadow-sm">
                      <Icon className="w-8 h-8 text-forest-500" strokeWidth={1.75} />
                    </div>
                    <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-terracotta-500 text-cream-50 font-heading font-bold text-xs flex items-center justify-center shadow">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-forest-950 mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed text-center mb-4">
                    {step.description}
                  </p>
                  <p className="text-center text-[10px] font-bold uppercase tracking-widest text-terracotta-500">
                    {step.duration}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
