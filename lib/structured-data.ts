export const structuredData = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Khazanah Tours Jakarta",
  description:
    "Agen wisata terpercaya di Jakarta yang menyediakan paket tour dan travel berkualitas dengan harga terjangkau",
  url: "https://khazzanahtoursjakarta.com",
  logo: "https://khazzanahtoursjakarta.com/logo.png",
  image: "https://khazzanahtoursjakarta.com/og-image.jpg",
  telephone: "+62-21-XXXXXXX", // Ganti dengan nomor telepon yang benar
  email: "info@khazzanahtoursjakarta.com", // Ganti dengan email yang benar
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jalan Contoh No. 123", // Ganti dengan alamat yang benar
    addressLocality: "Jakarta",
    addressRegion: "DKI Jakarta",
    postalCode: "12345", // Ganti dengan kode pos yang benar
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-6.2088", // Ganti dengan koordinat yang benar
    longitude: "106.8456", // Ganti dengan koordinat yang benar
  },
  openingHours: "Mo-Su 08:00-17:00",
  priceRange: "$$",
  serviceArea: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "-6.2088",
      longitude: "106.8456",
    },
    geoRadius: "50000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Paket Wisata Jakarta",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Trip",
          name: "Tour Jakarta Klasik",
          description:
            "Paket wisata mengunjungi tempat-tempat bersejarah di Jakarta",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Trip",
          name: "Jakarta Kuliner Tour",
          description: "Wisata kuliner khas Jakarta dan Betawi",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "150",
  },
  sameAs: [
    "https://www.facebook.com/khazzanahtoursjakarta", // Ganti dengan social media yang benar
    "https://www.instagram.com/khazzanahtoursjakarta",
    "https://www.youtube.com/@khazzanahtoursjakarta",
  ],
};

export const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://khazzanahtoursjakarta.com",
    },
  ],
};
