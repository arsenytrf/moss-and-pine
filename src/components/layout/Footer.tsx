import Link from "next/link";
import { Leaf, Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { company } from "@/data/company";
import { footerLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="bg-forest-950 text-cream-50 relative overflow-hidden">
      {/* subtle leaf pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.6) 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px, 80px 80px",
        }}
      />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-terracotta-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 pt-20 pb-12">
        <div className="grid grid-cols-6 lg:grid-cols-12 gap-x-5 gap-y-12">
          {/* Brand */}
          <div className="col-span-6 lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-lg bg-cream-50 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-forest-500" strokeWidth={2} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading font-bold text-xl">Moss &amp; Pine</span>
                <span className="text-[10px] text-cream-50/50 tracking-widest uppercase">
                  Cleaning Co.
                </span>
              </div>
            </Link>
            <p className="text-cream-50/55 text-sm leading-relaxed max-w-xs mb-6">
              Plant-based upholstery cleaning for Calgary homes. Pet-safe, family-safe, deeply clean.
            </p>
            <div className="flex gap-3">
              <a
                href={company.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-cream-50/15 hover:border-cream-50/40 hover:bg-cream-50/5 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={company.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-cream-50/15 hover:border-cream-50/40 hover:bg-cream-50/5 flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="col-span-3 lg:col-span-3">
            <p className="text-terracotta-300 text-[11px] font-bold uppercase tracking-widest mb-5">
              Services
            </p>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-cream-50/55 hover:text-cream-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-3 lg:col-span-2">
            <p className="text-terracotta-300 text-[11px] font-bold uppercase tracking-widest mb-5">
              Company
            </p>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-cream-50/55 hover:text-cream-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-6 lg:col-span-3">
            <p className="text-terracotta-300 text-[11px] font-bold uppercase tracking-widest mb-5">
              Contact
            </p>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={company.phoneLink}
                  className="flex items-center gap-3 text-cream-50/80 hover:text-cream-50 transition-colors"
                >
                  <Phone className="w-4 h-4 text-terracotta-300 shrink-0" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 text-cream-50/80 hover:text-cream-50 transition-colors"
                >
                  <Mail className="w-4 h-4 text-terracotta-300 shrink-0" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-cream-50/55 leading-relaxed">
                <MapPin className="w-4 h-4 text-terracotta-300 shrink-0 mt-0.5" />
                <span>
                  Serving {company.address.city}, {company.address.province} and surrounding
                  areas
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Areas */}
        <div className="mt-14 pt-8 border-t border-cream-50/10">
          <p className="text-cream-50/30 text-[11px] uppercase tracking-widest mb-3">Areas served</p>
          <p className="text-cream-50/50 text-[13px] leading-relaxed">
            {company.areasServed.join(" · ")}
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-cream-50/5">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-cream-50/30">
            &copy; {new Date().getFullYear()} {company.fullName}
          </p>
          <p className="text-[11px] text-cream-50/25">Calgary, AB, Canada · Plant-based since day one</p>
        </div>
      </div>
    </footer>
  );
}
