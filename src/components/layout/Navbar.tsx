"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, Leaf } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { company } from "@/data/company";
import { navLinks } from "@/data/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastY = 0;
    const handler = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > 400 && y > lastY);
      lastY = y;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${hidden ? "-translate-y-full" : "translate-y-0"}
        ${scrolled ? "bg-cream-50/90 backdrop-blur-lg shadow-sm border-b border-stone-200/50" : "bg-transparent"}`}
      >
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-forest-500 flex items-center justify-center group-hover:rotate-6 transition-transform">
              <Leaf className="w-5 h-5 text-cream-50" strokeWidth={2} />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-heading font-bold text-lg text-forest-900">
                Moss &amp; Pine
              </span>
              <span className="text-[10px] text-stone-500 tracking-widest uppercase">
                Cleaning Co.
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  pathname === link.href
                    ? "text-forest-500"
                    : "text-stone-700 hover:text-forest-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={company.phoneLink}
              className="flex items-center gap-2 text-sm text-stone-700 hover:text-forest-500 transition-colors font-medium"
            >
              <Phone className="w-4 h-4" />
              {company.phone}
            </a>
            <Link
              href="/quote"
              className="bg-terracotta-500 hover:bg-terracotta-600 text-cream-50 px-5 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all shadow-sm"
            >
              Get a quote
            </Link>
          </div>

          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className="lg:hidden p-2 text-stone-900"
            aria-label="Toggle menu"
          >
            {drawerOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 z-[55] bg-stone-900/40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed z-[60] top-[72px] right-4 left-4 rounded-2xl overflow-hidden shadow-2xl border border-stone-200 bg-cream-50"
            >
              <nav className="flex flex-col p-5 gap-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        pathname === link.href
                          ? "bg-forest-50 text-forest-600"
                          : "text-stone-700 hover:bg-stone-100"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="px-5 pb-5 pt-2 border-t border-stone-200 space-y-3">
                <a
                  href={company.phoneLink}
                  className="text-stone-800 font-semibold flex items-center gap-2 px-4 py-2 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  {company.phone}
                </a>
                <Link
                  href="/quote"
                  className="block w-full text-center py-3 rounded-full font-bold text-sm tracking-wide bg-terracotta-500 hover:bg-terracotta-600 text-cream-50 transition-all"
                >
                  Get a quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
