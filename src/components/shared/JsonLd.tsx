import { company } from "@/data/company";
import { services } from "@/data/services";

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: company.fullName,
    description: company.tagline,
    telephone: company.phone,
    email: company.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: company.address.city,
      addressRegion: company.address.province,
      addressCountry: "CA",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: company.googleRating,
      reviewCount: company.googleReviewCount,
    },
    areaServed: company.areasServed.map((city) => ({
      "@type": "City",
      name: city,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cleaning Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.shortDescription,
        },
      })),
    },
    sameAs: [company.socials.instagram, company.socials.facebook].filter(
      (s) => s && s !== "#"
    ),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
