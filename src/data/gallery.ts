export interface GalleryItem {
  src: string;
  title: string;
  category: string;
  beforeSrc?: string;
}

export interface BeforeAfterItem {
  title: string;
  beforeSrc: string;
  afterSrc: string;
  category: string;
  note?: string;
}

export const galleryItems: GalleryItem[] = [
  { src: "/images/gallery-1.jpg", title: "Sectional deep clean — Tuscany", category: "Sectional" },
  { src: "/images/gallery-2.jpg", title: "White couch restored — Aspen Woods", category: "Couch" },
  { src: "/images/gallery-3.jpg", title: "Velvet armchair — Mission", category: "Armchair" },
  { src: "/images/gallery-4.jpg", title: "King mattress sanitize — Airdrie", category: "Mattress" },
  { src: "/images/gallery-5.jpg", title: "Wool rug — Elbow Park", category: "Rug" },
  { src: "/images/gallery-6.jpg", title: "SUV interior — Calgary", category: "Car" },
  { src: "/images/gallery-7.jpg", title: "Pet-damaged sofa — Cochrane", category: "Couch" },
  { src: "/images/gallery-8.jpg", title: "Restaurant booths — Downtown", category: "Commercial" },
  { src: "/images/gallery-9.jpg", title: "Microfiber sectional — Legacy", category: "Sectional" },
];

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    title: "Cream sectional — 5 years of daily use",
    beforeSrc: "/images/ba-1-before.jpg",
    afterSrc: "/images/ba-1-after.jpg",
    category: "Sectional",
    note: "Two kids, one golden retriever, zero cleaning in between.",
  },
  {
    title: "Microfiber couch — pet accident",
    beforeSrc: "/images/ba-2-before.jpg",
    afterSrc: "/images/ba-2-after.jpg",
    category: "Couch",
    note: "Same-day service. Stain and odour fully out.",
  },
  {
    title: "Velvet armchair — red wine",
    beforeSrc: "/images/ba-3-before.jpg",
    afterSrc: "/images/ba-3-after.jpg",
    category: "Armchair",
    note: "Three months in. Still came out clean.",
  },
  {
    title: "Queen mattress — years of accumulation",
    beforeSrc: "/images/ba-4-before.jpg",
    afterSrc: "/images/ba-4-after.jpg",
    category: "Mattress",
    note: "Owner's allergies improved within a week.",
  },
];
