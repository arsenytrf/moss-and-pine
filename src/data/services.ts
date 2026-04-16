export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  priceFrom?: string;
  duration?: string;
  popular?: boolean;
  features: string[];
}

export const services: Service[] = [
  {
    slug: "couch",
    title: "Couch & Sofa Cleaning",
    shortDescription: "Deep steam-extraction cleaning that lifts years of dirt, oils, and odours.",
    description:
      "Your couch holds more than memories. Dust mites, food stains, pet dander, and body oils build up week after week. We use hot-water extraction with plant-based cleaning agents to pull all of it out — not just the surface layer. Safe for kids, pets, and every fabric type.",
    image: "/images/couch-clean-1.jpg",
    priceFrom: "$129",
    duration: "60–90 min",
    popular: true,
    features: [
      "Hot-water steam extraction",
      "100% plant-based cleaning agents",
      "Safe for pets and kids",
      "Dry in 4–6 hours",
      "All fabric types including leather and suede",
    ],
  },
  {
    slug: "sectional",
    title: "Sectional Cleaning",
    shortDescription: "Large-format sectionals cleaned piece by piece. No corner missed.",
    description:
      "Sectionals have more fabric, more seams, and more places for grime to hide. We treat every piece individually — underside, cushions, backs, and arms — so nothing gets skipped. Flat-rate pricing based on the number of seats, no surprises.",
    image: "/images/sectional-clean.jpg",
    priceFrom: "$189",
    duration: "90–120 min",
    features: [
      "Per-seat flat pricing",
      "Every piece cleaned individually",
      "Deep extraction on cushions",
      "Sanitizing treatment included",
      "Same-day service available",
    ],
  },
  {
    slug: "armchair",
    title: "Armchair & Recliner",
    shortDescription: "Quick, thorough cleaning for single-seat pieces — back to new in under an hour.",
    description:
      "Accent chairs, reading chairs, recliners — the ones that see the most use and rarely get cleaned. We bring the steam cleaner to you, treat the whole piece, and you're good to go in under an hour. Perfect as a standalone or add-on to a couch clean.",
    image: "/images/armchair-clean.jpg",
    priceFrom: "$79",
    duration: "30–45 min",
    features: [
      "Fast turnaround",
      "Great as add-on service",
      "Recliner mechanisms handled carefully",
      "All fabric types",
      "Spot-treatment included",
    ],
  },
  {
    slug: "mattress",
    title: "Mattress Cleaning",
    shortDescription: "Sanitize the surface you spend a third of your life on.",
    description:
      "Mattresses collect sweat, skin cells, dust mites, and allergens — stuff no amount of washing your sheets will remove. Our deep cleaning service extracts it all, leaving your mattress fresher than the day you bought it. Huge for allergy sufferers.",
    image: "/images/mattress-clean.jpg",
    priceFrom: "$99",
    duration: "45 min",
    features: [
      "Removes dust mites and allergens",
      "Stain and odour treatment",
      "Queen, king, and custom sizes",
      "Great for allergy sufferers",
      "Dries in 4–6 hours",
    ],
  },
  {
    slug: "rug",
    title: "Area Rug Cleaning",
    shortDescription: "On-site cleaning for rugs of any size — wool, synthetic, high-pile, low-pile.",
    description:
      "We clean your rugs in place — no rolling them up and sending them away for two weeks. Same steam-extraction method, adjusted for the pile and fibre. Works on everything from $50 runners to handmade heirlooms.",
    image: "/images/rug-clean.jpg",
    priceFrom: "$89",
    duration: "45–60 min",
    features: [
      "Cleaned on-site — no pickup needed",
      "Wool, synthetic, and natural fibres",
      "Spot treatment for pet accidents",
      "Deodorizing included",
      "Dry the same day",
    ],
  },
  {
    slug: "commercial",
    title: "Commercial & Office",
    shortDescription: "Scheduled cleaning for offices, clinics, restaurants, and short-term rentals.",
    description:
      "Volume pricing for offices, waiting rooms, dental chairs, restaurant booths, Airbnb properties, and more. Set up a recurring schedule and we'll handle it quietly after hours. Invoicing, COIs, and business billing all available.",
    image: "/images/commercial-clean.jpg",
    priceFrom: "Quote",
    duration: "Varies",
    features: [
      "Volume and recurring pricing",
      "After-hours service available",
      "Certificate of insurance provided",
      "Restaurant and hospitality specialists",
      "Business invoicing and billing",
    ],
  },
];
