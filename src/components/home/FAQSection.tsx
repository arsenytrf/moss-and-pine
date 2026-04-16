import Link from "next/link";
import { Phone } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { FAQ } from "@/components/shared/FAQ";
import { company } from "@/data/company";

const faqs = [
  {
    question: "How long does it take to dry?",
    answer:
      "Most fabrics are dry in 4–6 hours. We use low-moisture hot-water extraction, so nothing stays soaking wet. You can usually sit on a cleaned couch by the end of the same day.",
  },
  {
    question: "Are your cleaning products really safe for pets?",
    answer:
      "Yes. Everything we use is plant-derived, biodegradable, and free of harsh solvents. No phthalates, no chlorine bleach, no ammonia, no fragrance oils. Safe for kids, pets, and people with chemical sensitivities.",
  },
  {
    question: "Will the stain definitely come out?",
    answer:
      "Most stains come out fully. Some don't — set-in dye transfer, old oil stains, or bleached spots can be permanent. We'll always tell you before we start if we think something won't lift completely.",
  },
  {
    question: "Do you move furniture or do I need to?",
    answer:
      "We handle all furniture positioning. Just clear any small items off the piece before we arrive (remotes, blankets, throw pillows) and we'll take care of the rest.",
  },
  {
    question: "What's the process for pet accidents?",
    answer:
      "We use an enzyme-based treatment that breaks down uric acid at the molecular level — so the smell doesn't come back weeks later like it does with most cleaners. For severe accidents, we may need to do a second pass for best results.",
  },
  {
    question: "Do you do commercial / short-term rental cleaning?",
    answer:
      "Yes. We offer recurring scheduling for Airbnbs, offices, restaurants, and clinics. Volume pricing available. Certificate of insurance provided on request.",
  },
];

export function FAQSection() {
  return (
    <section className="py-20 lg:py-32 bg-cream-100 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <ScrollReveal className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="font-bold text-xs tracking-[0.2em] uppercase mb-4 text-terracotta-500">
                · Straight answers
              </p>
              <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-forest-950 leading-[1.02] mb-6">
                Common <em className="text-terracotta-500 not-italic font-light italic">questions.</em>
              </h2>
              <p className="text-stone-500 text-base lg:text-lg mb-8 max-w-md">
                Can&apos;t find what you&apos;re looking for? Give us a call — happy to chat through anything before you book.
              </p>
              <a
                href={company.phoneLink}
                className="inline-flex items-center gap-2 bg-forest-500 hover:bg-forest-600 text-cream-50 px-6 py-3.5 rounded-full font-bold text-sm transition-all"
              >
                <Phone className="w-4 h-4" />
                Call {company.phone}
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="lg:col-span-7">
            <FAQ items={faqs} />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 text-forest-500 hover:text-forest-600 font-bold text-sm transition-colors"
            >
              Ask us anything →
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
