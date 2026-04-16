import Image from "@/components/shared/Img";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { galleryItems } from "@/data/gallery";

export function GalleryPreview() {
  const preview = galleryItems.slice(0, 6);

  return (
    <section className="py-20 lg:py-32 bg-cream-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div>
              <p className="font-bold text-xs tracking-[0.2em] uppercase mb-4 text-terracotta-500">
                · Recent work
              </p>
              <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl text-forest-950 leading-[1.02]">
                Real couches.<br />
                <em className="text-terracotta-500 not-italic font-light italic">Real transformations.</em>
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 text-forest-500 hover:text-forest-600 font-bold text-sm group shrink-0"
            >
              View full gallery
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5">
          {preview.map((item, i) => (
            <ScrollReveal key={item.src} delay={i * 0.06}>
              <Link
                href="/gallery"
                className="group relative block aspect-square rounded-2xl overflow-hidden"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-terracotta-300 text-[10px] font-bold uppercase tracking-widest mb-1">
                    {item.category}
                  </p>
                  <p className="text-cream-50 text-sm font-medium">{item.title}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
