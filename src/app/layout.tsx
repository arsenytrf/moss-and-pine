import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyPhone } from "@/components/layout/StickyPhone";
import { LocalBusinessJsonLd } from "@/components/shared/JsonLd";
import { company } from "@/data/company";
import "./globals.css";

const heading = Fraunces({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${company.fullName} — Plant-Based Upholstery Cleaning in Calgary`,
    template: `%s | ${company.name}`,
  },
  description: company.tagline,
  keywords: [
    "couch cleaning Calgary",
    "upholstery cleaning Calgary",
    "mattress cleaning Calgary",
    "pet-safe cleaning",
    "plant-based cleaning",
    "sectional cleaning",
    "eco-friendly cleaning",
  ],
  openGraph: {
    title: company.fullName,
    description: company.tagline,
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <head>
        <LocalBusinessJsonLd />
      </head>
      <body className="font-body antialiased bg-cream-50 text-stone-900">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-forest-500 focus:text-cream-50 focus:px-4 focus:py-2 focus:text-sm focus:rounded-lg"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <StickyPhone phone={company.phone} />
      </body>
    </html>
  );
}
