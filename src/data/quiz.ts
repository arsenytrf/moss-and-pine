import {
  Sofa,
  Armchair,
  BedDouble,
  Layers3,
  Car,
  Building2,
  Sparkles,
  Droplets,
  AlertTriangle,
  HelpCircle,
  Clock,
  CalendarDays,
  CalendarClock,
  CalendarRange,
  Dog,
  Cat,
  Ban,
  type LucideIcon,
} from "lucide-react";

export interface QuizOption {
  id: string;
  label: string;
  description?: string;
  icon?: LucideIcon;
  priceMod?: number;
  multiplier?: number;
}

export interface QuizQuestion {
  id: string;
  title: string;
  subtitle: string;
  type: "single" | "multi";
  options: QuizOption[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "items",
    title: "What needs cleaning?",
    subtitle: "Pick everything that applies. You can adjust quantities next.",
    type: "multi",
    options: [
      { id: "couch", label: "Couch / Sofa", icon: Sofa, priceMod: 129 },
      { id: "sectional", label: "Sectional", icon: Layers3, priceMod: 189 },
      { id: "armchair", label: "Armchair", icon: Armchair, priceMod: 79 },
      { id: "mattress", label: "Mattress", icon: BedDouble, priceMod: 99 },
      { id: "rug", label: "Area Rug", icon: Sparkles, priceMod: 89 },
      { id: "car", label: "Car Interior", icon: Car, priceMod: 149 },
      { id: "commercial", label: "Commercial / Office", icon: Building2, priceMod: 0 },
    ],
  },
  {
    id: "fabric",
    title: "What's the fabric type?",
    subtitle: "We'll use the right cleaning method for your material.",
    type: "single",
    options: [
      { id: "microfiber", label: "Microfiber / Synthetic", description: "Most common, easy to clean", multiplier: 1 },
      { id: "cotton", label: "Cotton / Linen", description: "Natural fibre, requires care", multiplier: 1.1 },
      { id: "velvet", label: "Velvet / Chenille", description: "Delicate, needs gentle method", multiplier: 1.2 },
      { id: "leather", label: "Leather / Faux Leather", description: "Conditioning included", multiplier: 1.15 },
      { id: "suede", label: "Suede / Nubuck", description: "Specialized treatment", multiplier: 1.25 },
      { id: "unsure", label: "Not sure", description: "We'll identify on arrival", icon: HelpCircle, multiplier: 1 },
    ],
  },
  {
    id: "condition",
    title: "What's the condition?",
    subtitle: "Honest answers help us bring the right tools.",
    type: "single",
    options: [
      { id: "maintenance", label: "Routine maintenance", description: "Looks fine, just want it fresh", icon: Droplets, multiplier: 1 },
      { id: "moderate", label: "Moderate wear & stains", description: "A few years of normal use", icon: Sparkles, multiplier: 1.15 },
      { id: "heavy", label: "Heavy stains / pet accidents", description: "Noticeable, needs real work", icon: AlertTriangle, multiplier: 1.35 },
      { id: "unsure", label: "Not sure yet", description: "We'll inspect on arrival", icon: HelpCircle, multiplier: 1.1 },
    ],
  },
  {
    id: "pets",
    title: "Any pets in the home?",
    subtitle: "We use pet-safe products by default — this just helps us prep.",
    type: "single",
    options: [
      { id: "dog", label: "Dog(s)", icon: Dog, multiplier: 1.05 },
      { id: "cat", label: "Cat(s)", icon: Cat, multiplier: 1.05 },
      { id: "both", label: "Both", icon: Sparkles, multiplier: 1.1 },
      { id: "none", label: "No pets", icon: Ban, multiplier: 1 },
    ],
  },
  {
    id: "timeline",
    title: "When do you need it done?",
    subtitle: "We serve Calgary and surrounding areas — usually available within 48 hours.",
    type: "single",
    options: [
      { id: "asap", label: "ASAP / emergency", description: "Today or tomorrow if we can", icon: Clock, priceMod: 40 },
      { id: "week", label: "This week", description: "Within the next 7 days", icon: CalendarClock, priceMod: 0 },
      { id: "month", label: "This month", description: "Flexible on timing", icon: CalendarDays, priceMod: 0 },
      { id: "browsing", label: "Just getting quotes", description: "Ballpark is fine", icon: CalendarRange, priceMod: 0 },
    ],
  },
];

export interface QuizAnswers {
  items: string[];
  fabric?: string;
  condition?: string;
  pets?: string;
  timeline?: string;
}

export function calculateEstimate(answers: QuizAnswers): { low: number; high: number; note: string } {
  const itemsQuestion = quizQuestions[0];
  const baseTotal = answers.items.reduce((sum, id) => {
    const opt = itemsQuestion.options.find((o) => o.id === id);
    return sum + (opt?.priceMod ?? 0);
  }, 0);

  if (baseTotal === 0 && answers.items.includes("commercial")) {
    return {
      low: 0,
      high: 0,
      note: "Commercial jobs are custom-quoted. We'll be in touch to scope it out properly.",
    };
  }

  const fabricMult =
    quizQuestions[1].options.find((o) => o.id === answers.fabric)?.multiplier ?? 1;
  const conditionMult =
    quizQuestions[2].options.find((o) => o.id === answers.condition)?.multiplier ?? 1;
  const petsMult =
    quizQuestions[3].options.find((o) => o.id === answers.pets)?.multiplier ?? 1;
  const timelineMod =
    quizQuestions[4].options.find((o) => o.id === answers.timeline)?.priceMod ?? 0;

  const adjusted = baseTotal * fabricMult * conditionMult * petsMult + timelineMod;

  const low = Math.round((adjusted * 0.9) / 5) * 5;
  const high = Math.round((adjusted * 1.15) / 5) * 5;

  return {
    low,
    high,
    note:
      "Final price confirmed on arrival after a quick inspection. No surprise charges — if we can't do it for this price, we tell you before we start.",
  };
}
