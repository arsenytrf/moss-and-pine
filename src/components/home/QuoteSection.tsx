import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { QuoteQuiz } from "@/components/shared/QuoteQuiz";

export function QuoteSection() {
  return (
    <section id="quote" className="py-20 lg:py-32 bg-gradient-to-b from-cream-100 to-cream-50 relative overflow-hidden">
      <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] bg-forest-500/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-40 right-1/3 w-[500px] h-[500px] bg-terracotta-300/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <p className="font-bold text-xs tracking-[0.2em] uppercase mb-4 text-terracotta-500">
              · Get a price
            </p>
            <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-forest-950 leading-[1.02] mb-5">
              Five questions.<br />
              <em className="text-terracotta-500 not-italic font-light italic">One honest price.</em>
            </h2>
            <p className="text-stone-500 text-base lg:text-lg max-w-md mx-auto">
              No forms to fill, no waiting for a callback. Answer a few questions and see your quote right now.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <QuoteQuiz />
        </ScrollReveal>
      </div>
    </section>
  );
}
