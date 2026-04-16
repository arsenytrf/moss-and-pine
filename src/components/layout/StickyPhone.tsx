"use client";
import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function StickyPhone({ phone }: { phone: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = () => setShow(window.scrollY > window.innerHeight * 0.5);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={`tel:${phone.replace(/[^+\d]/g, "")}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          whileHover={{ scale: 1.05 }}
          className="fixed bottom-6 left-6 z-40 w-14 h-14 bg-terracotta-500 text-cream-50 rounded-full shadow-xl flex items-center justify-center transition-colors hover:bg-terracotta-600"
          aria-label={`Call ${phone}`}
        >
          <Phone className="w-5 h-5" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
