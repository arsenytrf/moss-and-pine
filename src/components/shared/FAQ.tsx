"use client";
import { useState } from "react";
import { Plus } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-stone-200">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-6 text-left group"
          >
            <span className="font-heading text-stone-900 pr-8 text-lg lg:text-xl">
              {item.question}
            </span>
            <div className="shrink-0 w-9 h-9 rounded-full border border-stone-200 flex items-center justify-center group-hover:border-forest-500 group-hover:bg-forest-500 transition-colors">
              <Plus
                className={`w-4 h-4 text-stone-500 group-hover:text-cream-50 transition-all duration-300 ${
                  open === i ? "rotate-45" : ""
                }`}
              />
            </div>
          </button>
          <div
            className={`grid transition-all duration-300 ${
              open === i ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <p className="text-stone-600 leading-relaxed text-[15px] lg:text-base max-w-2xl">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
