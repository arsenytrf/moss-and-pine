import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { Services } from "@/components/home/Services";
import { BeforeAfterShowcase } from "@/components/home/BeforeAfterShowcase";
import { Process } from "@/components/home/Process";
import { WhyUs } from "@/components/home/WhyUs";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { Reviews } from "@/components/home/Reviews";
import { ServiceAreas } from "@/components/home/ServiceAreas";
import { QuoteSection } from "@/components/home/QuoteSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <BeforeAfterShowcase />
      <Process />
      <WhyUs />
      <GalleryPreview />
      <Reviews />
      <ServiceAreas />
      <QuoteSection />
      <FAQSection />
      <CTA />
    </>
  );
}
