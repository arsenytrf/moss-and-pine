"use client";
import { useState } from "react";
import {
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle,
  MessageCircle,
  Mail,
  Clock,
} from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { company } from "@/data/company";
import { services } from "@/data/services";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (data.get("_honey")) return;
    setStatus("loading");

    const fields = Object.fromEntries(data.entries());
    const subject = encodeURIComponent(
      `Contact Form — ${fields.firstName} ${fields.lastName}`
    );
    const body = encodeURIComponent(
      Object.entries(fields)
        .filter(([k]) => k !== "_honey")
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n")
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus("success"), 500);
  }

  const inputClass =
    "w-full bg-cream-50 border-2 border-stone-200 rounded-xl px-4 py-3.5 text-sm text-stone-900 placeholder:text-stone-400 focus:border-forest-500 focus:outline-none transition-colors";

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-24 bg-cream-100 overflow-hidden">
        <div className="absolute -top-40 left-1/3 w-[600px] h-[600px] bg-forest-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute inset-0 grain pointer-events-none" aria-hidden />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
          <p className="font-bold text-xs tracking-[0.2em] uppercase mb-4 text-terracotta-500">
            · Say hello
          </p>
          <h1 className="font-heading font-bold text-5xl sm:text-6xl lg:text-[5.5rem] text-forest-950 leading-[0.95] mb-6 max-w-4xl tracking-tight">
            Tell us what you need.<br />
            We&apos;ll <em className="text-terracotta-500 not-italic font-light italic">take it from there.</em>
          </h1>
          <p className="text-stone-600 text-lg lg:text-xl max-w-2xl leading-relaxed">
            Instant quote on the website, instant response here. Call, text, email, or fill out the form — whatever works.
          </p>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-20 lg:py-28 bg-cream-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <ScrollReveal>
                <p className="font-bold text-xs tracking-[0.2em] uppercase mb-4 text-terracotta-500">
                  · Get in touch
                </p>
                <h2 className="font-heading font-bold text-3xl lg:text-4xl text-forest-950 mb-8 leading-[1.05]">
                  Any way that <em className="text-terracotta-500 not-italic font-light italic">works for you.</em>
                </h2>

                <div className="space-y-4 mb-8">
                  {[
                    { icon: Phone, label: "Call us", value: company.phone, href: company.phoneLink },
                    { icon: MessageCircle, label: "Text us", value: company.phone, href: `sms:${company.phone.replace(/[^+\d]/g, "")}` },
                    { icon: Mail, label: "Email us", value: company.email, href: `mailto:${company.email}` },
                    {
                      icon: MapPin,
                      label: "Serving",
                      value: `${company.address.city}, ${company.address.province} + area`,
                    },
                  ].map(({ icon: Icon, label, value, href }) => {
                    const inner = (
                      <div className="flex items-center gap-4 p-4 bg-cream-100 rounded-xl border border-stone-200/50 hover:border-forest-300 hover:bg-cream-50 transition-all">
                        <div className="w-11 h-11 bg-forest-50 rounded-lg flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-forest-500" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[11px] text-stone-500 uppercase tracking-widest font-bold">
                            {label}
                          </p>
                          <p className="font-semibold text-stone-900 truncate">{value}</p>
                        </div>
                      </div>
                    );
                    return href ? (
                      <a key={label} href={href} className="block">
                        {inner}
                      </a>
                    ) : (
                      <div key={label}>{inner}</div>
                    );
                  })}
                </div>

                <div className="bg-forest-500 rounded-2xl p-7 relative overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-terracotta-500/25 rounded-full blur-2xl pointer-events-none" />
                  <div className="relative">
                    <Clock className="w-5 h-5 text-terracotta-300 mb-3" />
                    <h3 className="font-heading text-cream-50 text-xl mb-4">
                      What happens next?
                    </h3>
                    <ol className="space-y-3 text-sm text-cream-50/85">
                      <li className="flex gap-3">
                        <span className="text-terracotta-300 font-bold shrink-0">01</span>
                        <span>We reach out <em className="text-cream-50 not-italic">(within minutes)</em></span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-terracotta-300 font-bold shrink-0">02</span>
                        <span>We follow up with a quote and scheduling</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-terracotta-300 font-bold shrink-0">03</span>
                        <span>We show up on time and get it done</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-8">
              <ScrollReveal delay={0.1}>
                <div className="bg-cream-100 rounded-3xl p-7 lg:p-10 border border-stone-200/60 shadow-sm">
                  {status === "success" ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-forest-50 flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-forest-500" />
                      </div>
                      <h3 className="font-heading font-bold text-3xl text-forest-950 mb-3">
                        Message sent.
                      </h3>
                      <p className="text-stone-600 text-base max-w-md mx-auto">
                        We&apos;ll be in touch within minutes. If you want to skip ahead, call us at{" "}
                        <a href={company.phoneLink} className="text-forest-500 font-semibold">
                          {company.phone}
                        </a>
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <p className="font-bold text-xs tracking-[0.2em] uppercase mb-2 text-terracotta-500">
                          · Send a message
                        </p>
                        <h3 className="font-heading font-bold text-2xl lg:text-3xl text-forest-950">
                          Tell us about your project.
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-bold text-stone-500 uppercase tracking-widest mb-2">
                            First name <span className="text-terracotta-500">*</span>
                          </label>
                          <input name="firstName" required className={inputClass} />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-stone-500 uppercase tracking-widest mb-2">
                            Last name <span className="text-terracotta-500">*</span>
                          </label>
                          <input name="lastName" required className={inputClass} />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[11px] font-bold text-stone-500 uppercase tracking-widest mb-2">
                            Phone <span className="text-terracotta-500">*</span>
                          </label>
                          <input name="phone" type="tel" required className={inputClass} />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-stone-500 uppercase tracking-widest mb-2">
                            Email
                          </label>
                          <input name="email" type="email" className={inputClass} />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-stone-500 uppercase tracking-widest mb-2">
                          What needs cleaning?
                        </label>
                        <select name="serviceType" className={`${inputClass} cursor-pointer`}>
                          <option value="">Select type</option>
                          {services.map((s) => (
                            <option key={s.slug} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                          <option value="Not sure">Not sure yet</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-stone-500 uppercase tracking-widest mb-2">
                          Location / neighbourhood
                        </label>
                        <input
                          name="location"
                          placeholder="e.g. Tuscany, Airdrie, Cochrane..."
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-stone-500 uppercase tracking-widest mb-2">
                          Tell us more
                        </label>
                        <textarea
                          name="details"
                          rows={4}
                          placeholder="Rooms, fabric type, any specific stains or concerns..."
                          className={`${inputClass} resize-none`}
                        />
                      </div>

                      <input
                        name="_honey"
                        type="text"
                        className="hidden"
                        tabIndex={-1}
                        autoComplete="off"
                      />

                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="group w-full bg-forest-500 hover:bg-forest-600 text-cream-50 px-8 py-4 rounded-full font-bold tracking-wide text-sm lg:text-base transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                      >
                        {status === "loading" ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Send className="w-4 h-4" />
                        )}
                        {status === "loading" ? "Sending..." : "Send message"}
                      </button>
                      <p className="text-stone-400 text-xs text-center">
                        Instant response · No pressure · No obligation
                      </p>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-20 lg:py-28 bg-cream-100 border-t border-stone-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="font-bold text-xs tracking-[0.2em] uppercase mb-4 text-terracotta-500">
                · Coverage
              </p>
              <h3 className="font-heading font-bold text-3xl lg:text-4xl text-forest-950 leading-[1.05]">
                Calgary + <em className="text-terracotta-500 not-italic font-light italic">every neighbouring town.</em>
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-stone-200 border border-stone-200 rounded-2xl overflow-hidden max-w-4xl mx-auto">
              {company.areasServed.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 px-5 py-5 bg-cream-50 hover:bg-forest-50 transition-colors group"
                >
                  <MapPin className="w-4 h-4 text-terracotta-500 shrink-0" />
                  <span className="text-sm font-semibold text-stone-800 truncate">{area}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
