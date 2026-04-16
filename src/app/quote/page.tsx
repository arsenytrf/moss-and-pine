import type { Metadata } from "next";
import { QuoteQuiz } from "@/components/shared/QuoteQuiz";
import { Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Get a Quote in 60 Seconds",
  description:
    "Answer five quick questions and see your price estimate instantly. No calls, no email traps, no pressure.",
};

export default function QuotePage() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 lg:pt-44 lg:pb-28 bg-cream-100 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-forest-500/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-terracotta-300/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 grain pointer-events-none" aria-hidden />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-50 border border-stone-200 shadow-sm mb-6">
            <Leaf className="w-3.5 h-3.5 text-forest-500" />
            <span className="text-stone-700 text-[11px] font-bold uppercase tracking-widest">
              Free · No obligation · 60 seconds
            </span>
          </div>
          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-forest-950 leading-[1.02] mb-5 tracking-tight">
            Get your price.
          </h1>
          <p className="text-stone-500 text-base lg:text-lg">
            Answer five questions and see an honest estimate right now. No email trap, no sales calls, no waiting.
          </p>
        </div>

        <QuoteQuiz />
      </div>
    </section>
  );
}
