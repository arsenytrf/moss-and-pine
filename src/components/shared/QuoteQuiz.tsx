"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, Send, Loader2, Sparkles } from "lucide-react";
import { quizQuestions, calculateEstimate, type QuizAnswers } from "@/data/quiz";
import { company } from "@/data/company";

type Status = "filling" | "contact" | "submitting" | "done";

export function QuoteQuiz({ embedded = false }: { embedded?: boolean }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({ items: [] });
  const [status, setStatus] = useState<Status>("filling");
  const [contact, setContact] = useState({ name: "", phone: "", email: "" });

  const totalSteps = quizQuestions.length;
  const currentQuestion = quizQuestions[step];
  const progress = status === "filling" ? ((step + 1) / (totalSteps + 1)) * 100 : 100;

  function handleSelect(optionId: string) {
    const q = currentQuestion;
    if (q.type === "multi") {
      const existing = (answers[q.id as keyof QuizAnswers] as string[]) ?? [];
      const next = existing.includes(optionId)
        ? existing.filter((id) => id !== optionId)
        : [...existing, optionId];
      setAnswers((a) => ({ ...a, [q.id]: next }));
    } else {
      setAnswers((a) => ({ ...a, [q.id]: optionId }));
      setTimeout(() => next(), 250);
    }
  }

  function next() {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      setStatus("contact");
    }
  }

  function back() {
    if (status === "contact") {
      setStatus("filling");
    } else if (step > 0) {
      setStep(step - 1);
    }
  }

  function canAdvance() {
    const q = currentQuestion;
    if (q.type === "multi") {
      const arr = (answers[q.id as keyof QuizAnswers] as string[]) ?? [];
      return arr.length > 0;
    }
    return !!answers[q.id as keyof QuizAnswers];
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!contact.name || !contact.phone) return;
    setStatus("submitting");

    const estimate = calculateEstimate(answers);
    const summary = [
      `Name: ${contact.name}`,
      `Phone: ${contact.phone}`,
      contact.email ? `Email: ${contact.email}` : "",
      "",
      "--- Quiz Answers ---",
      ...quizQuestions.map((q) => {
        const val = answers[q.id as keyof QuizAnswers];
        if (Array.isArray(val)) return `${q.title}: ${val.join(", ")}`;
        return `${q.title}: ${val}`;
      }),
      "",
      `Estimated range: $${estimate.low}–$${estimate.high}`,
    ]
      .filter(Boolean)
      .join("\n");

    const subject = encodeURIComponent(`Quote Quiz — ${contact.name}`);
    const body = encodeURIComponent(summary);
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;

    setTimeout(() => setStatus("done"), 500);
  }

  const estimate = calculateEstimate(answers);
  const commercial = answers.items.length === 1 && answers.items[0] === "commercial";

  return (
    <div
      className={`relative bg-cream-50 rounded-[32px] border border-stone-200 shadow-[0_20px_60px_-20px_rgba(45,74,62,0.2)] overflow-hidden ${
        embedded ? "" : "max-w-3xl mx-auto"
      }`}
    >
      {/* Progress bar */}
      <div className="h-1.5 bg-stone-100">
        <motion.div
          className="h-full bg-forest-500"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      <div className="p-6 sm:p-10 lg:p-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2 text-forest-500">
            <Sparkles className="w-4 h-4" />
            <p className="font-bold text-xs uppercase tracking-[0.2em]">
              Get your price in 60 seconds
            </p>
          </div>
          {status === "filling" && (
            <p className="text-xs text-stone-400 font-medium">
              {step + 1} / {totalSteps}
            </p>
          )}
        </div>

        <AnimatePresence mode="wait">
          {status === "filling" && (
            <motion.div
              key={`step-${step}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-heading font-bold text-2xl sm:text-3xl lg:text-4xl text-stone-900 mb-3 leading-[1.15]">
                {currentQuestion.title}
              </h3>
              <p className="text-stone-500 text-sm lg:text-base mb-8 max-w-xl">
                {currentQuestion.subtitle}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentQuestion.options.map((opt) => {
                  const selected =
                    currentQuestion.type === "multi"
                      ? ((answers[currentQuestion.id as keyof QuizAnswers] as string[]) ?? []).includes(opt.id)
                      : answers[currentQuestion.id as keyof QuizAnswers] === opt.id;
                  const Icon = opt.icon;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSelect(opt.id)}
                      className={`quiz-card flex items-center gap-4 p-4 lg:p-5 rounded-xl border-2 text-left ${
                        selected
                          ? "selected"
                          : "border-stone-200 bg-cream-50 text-stone-900"
                      }`}
                    >
                      {Icon && (
                        <div
                          className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${
                            selected ? "bg-cream-50/15" : "bg-forest-50"
                          }`}
                        >
                          <Icon
                            className={`w-5 h-5 ${
                              selected ? "text-cream-50" : "text-forest-500"
                            }`}
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm lg:text-base">{opt.label}</p>
                        {opt.description && (
                          <p
                            className={`text-xs mt-0.5 truncate ${
                              selected ? "text-cream-50/70" : "text-stone-500"
                            }`}
                          >
                            {opt.description}
                          </p>
                        )}
                      </div>
                      {currentQuestion.type === "multi" && selected && (
                        <CheckCircle2 className="w-5 h-5 text-cream-50 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Nav */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-stone-100">
                <button
                  type="button"
                  onClick={back}
                  disabled={step === 0}
                  className="flex items-center gap-2 text-stone-500 hover:text-stone-900 text-sm font-medium disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
                <button
                  type="button"
                  onClick={next}
                  disabled={!canAdvance()}
                  className="flex items-center gap-2 bg-forest-500 hover:bg-forest-600 disabled:bg-stone-200 disabled:text-stone-400 disabled:cursor-not-allowed text-cream-50 px-6 py-3 rounded-full text-sm font-bold transition-all"
                >
                  {step === totalSteps - 1 ? "See my quote" : "Next"}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {status === "contact" && (
            <motion.form
              key="contact"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Estimate card */}
              <div className="bg-forest-500 text-cream-50 rounded-2xl p-6 lg:p-8 mb-8 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-terracotta-400/20 rounded-full blur-3xl pointer-events-none" />
                <div className="relative">
                  <p className="text-terracotta-300 text-[11px] font-bold uppercase tracking-widest mb-3">
                    Your estimate
                  </p>
                  {commercial ? (
                    <p className="font-heading font-bold text-2xl lg:text-3xl leading-tight mb-2">
                      Custom quote
                    </p>
                  ) : (
                    <p className="font-heading font-bold text-4xl lg:text-5xl leading-none mb-3">
                      ${estimate.low}–${estimate.high}
                    </p>
                  )}
                  <p className="text-cream-50/75 text-sm leading-relaxed max-w-md">
                    {estimate.note}
                  </p>
                </div>
              </div>

              <h3 className="font-heading font-bold text-2xl lg:text-3xl text-stone-900 mb-3 leading-tight">
                Where should we send it?
              </h3>
              <p className="text-stone-500 text-sm mb-6">
                Drop your contact info and we&apos;ll reach out within minutes to confirm and book.
              </p>

              <div className="space-y-3">
                <input
                  name="name"
                  placeholder="Your name *"
                  required
                  value={contact.name}
                  onChange={(e) => setContact({ ...contact, name: e.target.value })}
                  className="w-full bg-cream-50 border-2 border-stone-200 rounded-xl px-4 py-3.5 text-sm text-stone-900 placeholder:text-stone-400 focus:border-forest-500 focus:outline-none transition-colors"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone number *"
                  required
                  value={contact.phone}
                  onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                  className="w-full bg-cream-50 border-2 border-stone-200 rounded-xl px-4 py-3.5 text-sm text-stone-900 placeholder:text-stone-400 focus:border-forest-500 focus:outline-none transition-colors"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email (optional)"
                  value={contact.email}
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                  className="w-full bg-cream-50 border-2 border-stone-200 rounded-xl px-4 py-3.5 text-sm text-stone-900 placeholder:text-stone-400 focus:border-forest-500 focus:outline-none transition-colors"
                />
                <input name="_honey" type="text" className="hidden" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="flex items-center justify-between mt-8 pt-6 border-t border-stone-100">
                <button
                  type="button"
                  onClick={back}
                  className="flex items-center gap-2 text-stone-500 hover:text-stone-900 text-sm font-medium transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Edit answers
                </button>
                <button
                  type="submit"
                  disabled={status !== "contact" || !contact.name || !contact.phone}
                  className="flex items-center gap-2 bg-terracotta-500 hover:bg-terracotta-600 disabled:bg-stone-200 disabled:text-stone-400 text-cream-50 px-6 py-3 rounded-full text-sm font-bold transition-all"
                >
                  <Send className="w-4 h-4" />
                  Send my quote
                </button>
              </div>
            </motion.form>
          )}

          {status === "submitting" && (
            <motion.div
              key="submitting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Loader2 className="w-8 h-8 animate-spin text-forest-500 mx-auto" />
            </motion.div>
          )}

          {status === "done" && (
            <motion.div
              key="done"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-forest-50 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-forest-500" />
              </div>
              <h3 className="font-heading font-bold text-3xl lg:text-4xl text-stone-900 mb-3">
                You&apos;re in, {contact.name.split(" ")[0]}.
              </h3>
              <p className="text-stone-500 text-base max-w-md mx-auto mb-8">
                We got your info and Andrey will reach out within minutes to confirm timing and book you in. If you want to skip ahead, call us at{" "}
                <a href={company.phoneLink} className="text-forest-500 font-semibold">
                  {company.phone}
                </a>
                .
              </p>
              <button
                onClick={() => {
                  setAnswers({ items: [] });
                  setStep(0);
                  setStatus("filling");
                  setContact({ name: "", phone: "", email: "" });
                }}
                className="text-sm text-stone-500 hover:text-stone-900 font-medium transition-colors"
              >
                Start over
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
