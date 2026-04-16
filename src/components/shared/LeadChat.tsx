"use client";

import { useState, useEffect, useRef, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ArrowLeft, Check, Leaf } from "lucide-react";
import { company } from "@/data/company";
import { services } from "@/data/services";

type Step = "service" | "urgency" | "contact" | "done";

const STORAGE_KEY = "mossandpine.leadchat.v1";

const urgencyOptions = [
  { value: "asap", label: "As soon as possible", note: "Emergency stain or pet accident" },
  { value: "week", label: "This week", note: "Need it done in the next 7 days" },
  { value: "month", label: "This month", note: "Flexible on timing" },
  { value: "browsing", label: "Just getting quotes", note: "No rush, ballpark is fine" },
];

interface State {
  step: Step;
  service: string;
  urgency: string;
  name: string;
  phone: string;
  notes: string;
}

const initialState: State = {
  step: "service",
  service: "",
  urgency: "",
  name: "",
  phone: "",
  notes: "",
};

export function LeadChat() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<State>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as State;
        if (parsed.step !== "done") setState(parsed);
      }
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }, [state]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [state.step, state.service, state.urgency]);

  const reset = () => {
    setState(initialState);
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  };

  const back = () => {
    setState((s) => {
      if (s.step === "urgency") return { ...s, step: "service", service: "" };
      if (s.step === "contact") return { ...s, step: "urgency", urgency: "" };
      return s;
    });
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!state.name.trim() || !state.phone.trim()) return;
    setSubmitting(true);

    const summary = [
      `Name: ${state.name}`,
      `Phone: ${state.phone}`,
      `Service: ${state.service}`,
      `Urgency: ${urgencyOptions.find((o) => o.value === state.urgency)?.label}`,
      state.notes ? `Notes: ${state.notes}` : "",
    ].filter(Boolean).join("\n");

    const subject = encodeURIComponent(`Chat Lead — ${state.name}`);
    const body = encodeURIComponent(summary);
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSubmitting(false);
      setState((s) => ({ ...s, step: "done" }));
    }, 500);
  };

  const firstName = state.name.trim().split(" ")[0] || "";

  return (
    <>
      {/* Floating trigger */}
      <AnimatePresence>
        {!open && (
          <motion.button
            key="trigger"
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-6 right-6 z-50 group"
            aria-label="Chat with us"
          >
            <div className="flex items-center gap-3 bg-forest-950 text-cream-50 pl-3 pr-5 py-3 rounded-full shadow-[0_12px_30px_-10px_rgba(45,74,62,0.55)] border border-forest-800/60 hover:bg-forest-900 transition-colors duration-300">
              <span className="relative w-9 h-9 rounded-full bg-forest-500 flex items-center justify-center">
                <Leaf className="w-4 h-4 text-cream-50" strokeWidth={2} />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-terracotta-400 rounded-full border-2 border-forest-950" />
              </span>
              <div className="flex flex-col items-start leading-tight">
                <span className="font-heading font-bold text-[14px]">Chat with us</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-cream-50/70 font-medium">
                  Replies in minutes
                </span>
              </div>
              <MessageCircle className="w-4 h-4 text-cream-50/60 group-hover:text-cream-50 transition-colors" strokeWidth={1.6} />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-forest-950/25 backdrop-blur-[2px] lg:hidden"
              onClick={() => setOpen(false)}
            />

            <motion.div
              key="panel"
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed z-[70] bg-cream-50 rounded-2xl shadow-[0_40px_80px_-30px_rgba(45,74,62,0.5)] border border-stone-200 overflow-hidden flex flex-col
                         bottom-4 right-4 left-4 top-16 max-h-[calc(100dvh-5rem)]
                         lg:inset-auto lg:bottom-6 lg:right-6 lg:top-auto lg:left-auto lg:w-[400px] lg:h-[620px]"
              role="dialog"
              aria-label="Chat with Moss and Pine"
            >
              {/* Header */}
              <div className="relative flex items-center gap-3 bg-forest-500 text-cream-50 px-5 py-4 shrink-0">
                <span className="relative w-11 h-11 rounded-xl bg-cream-50 flex items-center justify-center shrink-0">
                  <Leaf className="w-5 h-5 text-forest-500" strokeWidth={2} />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-terracotta-400 rounded-full border-2 border-forest-500" />
                </span>
                <div className="flex flex-col leading-tight flex-1">
                  <span className="font-heading font-bold text-[16px]">Moss &amp; Pine</span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-cream-50/70 font-medium">
                    Replies in minutes
                  </span>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 -mr-2 text-cream-50/50 hover:text-cream-50 transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Messages */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-6 space-y-5">
                <BotBubble>
                  Hey there! Looking to get something cleaned? Tell us what you&apos;ve got and we&apos;ll get back to you fast.
                </BotBubble>

                <BotBubble delay={0.15}>
                  What needs cleaning?
                </BotBubble>

                {state.service && (
                  <UserBubble delay={0}>{state.service}</UserBubble>
                )}

                {!state.service && (
                  <OptionGrid delay={0.25}>
                    {services.map((svc) => (
                      <OptionChip
                        key={svc.slug}
                        onClick={() => setState((s) => ({ ...s, service: svc.title, step: "urgency" }))}
                      >
                        {svc.title}
                      </OptionChip>
                    ))}
                    <OptionChip
                      onClick={() => setState((s) => ({ ...s, service: "Not sure yet", step: "urgency" }))}
                    >
                      Not sure yet
                    </OptionChip>
                  </OptionGrid>
                )}

                {(state.step === "urgency" || state.step === "contact" || state.step === "done") && (
                  <>
                    <BotBubble delay={0.15}>
                      Nice — {state.service.toLowerCase()}. When do you need it done?
                    </BotBubble>

                    {state.urgency && (
                      <UserBubble delay={0}>
                        {urgencyOptions.find((o) => o.value === state.urgency)?.label}
                      </UserBubble>
                    )}

                    {!state.urgency && (
                      <OptionList delay={0.25}>
                        {urgencyOptions.map((opt) => (
                          <OptionRow
                            key={opt.value}
                            onClick={() => setState((s) => ({ ...s, urgency: opt.value, step: "contact" }))}
                            label={opt.label}
                            note={opt.note}
                          />
                        ))}
                      </OptionList>
                    )}
                  </>
                )}

                {(state.step === "contact" || state.step === "done") && (
                  <>
                    <BotBubble delay={0.15}>
                      Almost done! Drop your name and number and we&apos;ll reach out within minutes.
                    </BotBubble>

                    {state.step === "contact" && (
                      <form onSubmit={submit} className="space-y-3 mt-2">
                        <input
                          type="text"
                          placeholder="Your name"
                          autoComplete="name"
                          value={state.name}
                          onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))}
                          required
                          className="w-full bg-cream-50 border-2 border-stone-200 rounded-xl px-4 py-3 text-[14px] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-forest-500 transition-colors"
                        />
                        <input
                          type="tel"
                          placeholder="Phone number"
                          autoComplete="tel"
                          value={state.phone}
                          onChange={(e) => setState((s) => ({ ...s, phone: e.target.value }))}
                          required
                          className="w-full bg-cream-50 border-2 border-stone-200 rounded-xl px-4 py-3 text-[14px] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-forest-500 transition-colors"
                        />
                        <textarea
                          placeholder="Anything else? (optional)"
                          rows={2}
                          value={state.notes}
                          onChange={(e) => setState((s) => ({ ...s, notes: e.target.value }))}
                          className="w-full bg-cream-50 border-2 border-stone-200 rounded-xl px-4 py-3 text-[14px] text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-forest-500 transition-colors resize-none"
                        />
                        <button
                          type="submit"
                          disabled={submitting || !state.name.trim() || !state.phone.trim()}
                          className="w-full bg-terracotta-500 hover:bg-terracotta-600 text-cream-50 font-bold rounded-full py-3 text-[14px] transition-colors disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2"
                        >
                          {submitting ? (
                            <>
                              <span className="w-4 h-4 border-2 border-cream-50/30 border-t-cream-50 rounded-full animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              Send message
                              <Send className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>
                      </form>
                    )}

                    {state.step === "done" && (
                      <UserBubble delay={0}>
                        {state.name} · {state.phone}
                      </UserBubble>
                    )}
                  </>
                )}

                {state.step === "done" && (
                  <BotBubble delay={0.3}>
                    <span className="flex items-center gap-2 mb-2 text-terracotta-500 font-semibold">
                      <Check className="w-4 h-4" strokeWidth={2.5} /> Got it, {firstName}.
                    </span>
                    We&apos;ll reach out within minutes to confirm and book you in. You can also call us anytime at{" "}
                    <a href={company.phoneLink} className="text-forest-500 underline underline-offset-2 font-semibold">
                      {company.phone}
                    </a>.
                  </BotBubble>
                )}
              </div>

              {/* Footer */}
              <div className="shrink-0 border-t border-stone-200 px-5 py-3 flex items-center justify-between bg-cream-50">
                {state.step !== "service" && state.step !== "done" ? (
                  <button
                    onClick={back}
                    className="flex items-center gap-1.5 text-[12px] text-stone-500 hover:text-stone-900 transition-colors font-medium"
                  >
                    <ArrowLeft className="w-3 h-3" />
                    Back
                  </button>
                ) : state.step === "done" ? (
                  <button
                    onClick={reset}
                    className="text-[12px] text-stone-500 hover:text-stone-900 transition-colors font-medium"
                  >
                    Start over
                  </button>
                ) : (
                  <span />
                )}
                <span className="text-[10px] uppercase tracking-[0.22em] text-stone-400 font-bold">
                  Calgary, AB
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/* ---------- sub-components ---------- */

function BotBubble({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay }}
      className="flex items-start gap-2.5"
    >
      <span className="shrink-0 w-7 h-7 rounded-lg bg-forest-500 text-cream-50 flex items-center justify-center mt-0.5">
        <Leaf className="w-3.5 h-3.5" strokeWidth={2} />
      </span>
      <div className="max-w-[85%] bg-forest-50 border border-forest-200/50 rounded-2xl rounded-tl-md px-4 py-3 text-[14px] text-stone-800 leading-relaxed">
        {children}
      </div>
    </motion.div>
  );
}

function UserBubble({ children, delay = 0.1 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay }}
      className="flex justify-end"
    >
      <div className="max-w-[85%] bg-forest-500 text-cream-50 rounded-2xl rounded-tr-md px-4 py-2.5 text-[14px]">
        {children}
      </div>
    </motion.div>
  );
}

function OptionGrid({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="flex flex-wrap gap-2 pl-9"
    >
      {children}
    </motion.div>
  );
}

function OptionChip({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-3.5 py-1.5 bg-cream-50 border-2 border-stone-200 rounded-full text-[12px] text-stone-700 hover:border-forest-500 hover:text-forest-600 hover:bg-forest-50 transition-colors font-semibold"
    >
      {children}
    </button>
  );
}

function OptionList({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="space-y-2 pl-9"
    >
      {children}
    </motion.div>
  );
}

function OptionRow({ label, note, onClick }: { label: string; note: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left p-3.5 bg-cream-50 border-2 border-stone-200 rounded-xl hover:border-forest-500 hover:bg-forest-50 transition-colors group"
    >
      <span className="block font-heading text-[15px] text-stone-900 font-bold group-hover:text-forest-600 transition-colors">
        {label}
      </span>
      <span className="block text-[12px] text-stone-500 mt-0.5">{note}</span>
    </button>
  );
}
