import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/landing/LandingPage";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Plase Anti-Insecte Iași — Montaj Rapid | 0751 600 281" },
      {
        name: "description",
        content:
          "Plase anti-insecte în Iași: țânțari, geam, ușă, rulou și plase rezistente la pisici. Montaj rapid în Iași și împrejurimi, de la 140 lei. Sună 0751 600 281.",
      },
      { name: "keywords", content: "plase tantari Iasi, plase anti insecte Iasi, plase tantari ieftine Iasi, montaj plase tantari Iasi, plasa tantari geam Iasi, plasa tantari usa Iasi, plase rulou Iasi, plase rezistente pisici Iasi, plase magnetice Iasi, confectionare plase Iasi" },
      { name: "keywords", content: "plase tantari Iasi, plase anti insecte Iasi, plase tantari ieftine Iasi, plase ieftine Iasi, montaj plase tantari Iasi, plasa tantari geam Iasi, plasa tantari usa Iasi, plase rulou Iasi, plase rezistente pisici Iasi, plase pentru pisici Iasi, plase magnetice Iasi, plase cu magnet Iasi, confectionare plase Iasi, plase anti insecte Bucium, plase tantari Pacurari, plase tantari Tatarasi, plase tantari Copou, plase tantari Nicolina, plase tantari Alexandru cel Bun" },
      { name: "author", content: "Plase Anti-Insecte Iași" },
      { property: "og:title", content: "Plase Anti-Insecte Iași — Montaj rapid, prețuri corecte" },
      { property: "og:description", content: "Confecționăm și montăm plase anti-țânțari în Iași și împrejurimi. De la 140 lei. Răspundem pe WhatsApp în maxim 10 minute." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ro_RO" },
      { property: "og:url", content: "https://plaseieftineiasi.ro/" },
      { property: "og:site_name", content: "Plase Anti-Insecte Iași" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Plase Anti-Insecte Iași — Montaj rapid" },
      { name: "twitter:description", content: "Plase anti-țânțari, rulou și rezistente la pisici. Montaj rapid în Iași. 0751 600 281." },
      { name: "geo.region", content: "RO-IS" },
      { name: "geo.placename", content: "Iași" },
      { name: "geo.position", content: "47.1585;27.6014" },
      { name: "ICBM", content: "47.1585, 27.6014" },
    ],
    links: [{ rel: "canonical", href: "https://plaseieftineiasi.ro/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
          "@id": "https://plaseieftineiasi.ro/#business",
          name: "Plase Anti-Insecte Iași",
          alternateName: ["Plase Țânțari Iași", "Plase Ieftine Iași"],
          description:
            "Confecționăm și montăm plase anti-insecte (țânțari) în Iași: plase pentru geam și ușă, plase tip rulou, plase cu magnet și plase rezistente la pisici. Prețuri ieftine, montaj rapid în Iași și împrejurimi.",
          slogan: "Plase anti-țânțari ieftine, montaj rapid în Iași",
          keywords:
            "plase tantari Iasi, plase anti insecte Iasi, plase ieftine Iasi, plase pentru pisici Iasi, plase rulou Iasi, plase magnetice Iasi, montaj plase tantari Iasi",
          image: [
            "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/a24114b0-c9ab-4dc2-aa8f-dad4a7d5f635",
          ],
          logo: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/a24114b0-c9ab-4dc2-aa8f-dad4a7d5f635",
          url: "https://plaseieftineiasi.ro/",
          telephone: "+40751600281",
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+40751600281",
              contactType: "customer service",
              areaServed: "RO",
              availableLanguage: ["Romanian"],
              contactOption: "TollFree",
            },
            {
              "@type": "ContactPoint",
              telephone: "+40751600281",
              contactType: "sales",
              areaServed: "RO",
              availableLanguage: ["Romanian"],
            },
          ],
          currenciesAccepted: "RON",
          paymentAccepted: "Cash, Card, Transfer bancar",
          areaServed: [
            { "@type": "City", name: "Iași" },
            { "@type": "AdministrativeArea", name: "Județul Iași" },
            { "@type": "Place", name: "Bucium" },
            { "@type": "Place", name: "Păcurari" },
            { "@type": "Place", name: "Tătărași" },
            { "@type": "Place", name: "Copou" },
            { "@type": "Place", name: "Nicolina" },
            { "@type": "Place", name: "Alexandru cel Bun" },
            { "@type": "Place", name: "Galata" },
            { "@type": "Place", name: "Miroslava" },
            { "@type": "Place", name: "Valea Lupului" },
            { "@type": "Place", name: "Rediu" },
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Bd. Independenței nr. 57",
            addressLocality: "Iași",
            addressRegion: "IS",
            postalCode: "700102",
            addressCountry: "RO",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 47.1585,
            longitude: 27.6014,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "08:00",
              closes: "20:00",
            },
          ],
          priceRange: "140–580 RON",
          sameAs: ["https://www.facebook.com/profile.php?id=100063571540381"],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Servicii plase anti-insecte Iași",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Plasă anti-țânțari pentru geam",
                  description:
                    "Plase ieftine anti-țânțari pentru geam, confecționate la dimensiune și montate rapid în Iași.",
                  areaServed: { "@type": "City", name: "Iași" },
                },
                priceCurrency: "RON",
                price: "140",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  price: "140",
                  priceCurrency: "RON",
                  valueAddedTaxIncluded: true,
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Plasă anti-țânțari pentru ușă",
                  description:
                    "Plase anti-insecte pentru ușă (batantă sau cu magnet), montaj rapid în Iași.",
                  areaServed: { "@type": "City", name: "Iași" },
                },
                priceCurrency: "RON",
                price: "230",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  price: "230",
                  priceCurrency: "RON",
                  valueAddedTaxIncluded: true,
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Plasă tip rulou pentru geam și ușă",
                  description:
                    "Plase tip rulou retractabile pentru geam și ușă, soluție discretă și durabilă.",
                  areaServed: { "@type": "City", name: "Iași" },
                },
                priceCurrency: "RON",
                price: "380",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  price: "380",
                  priceCurrency: "RON",
                  valueAddedTaxIncluded: true,
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Plasă rezistentă la pisici (Pet Screen)",
                  description:
                    "Plase întărite, rezistente la zgârieturile pisicilor — protejează animalul și fereastra. Montaj în Iași.",
                  areaServed: { "@type": "City", name: "Iași" },
                },
                priceCurrency: "RON",
                price: "260",
                priceSpecification: {
                  "@type": "PriceSpecification",
                  price: "260",
                  priceCurrency: "RON",
                  valueAddedTaxIncluded: true,
                },
              },
            ],
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "47",
            bestRating: "5",
            worstRating: "1",
          },
        }),
      },
    ],
  }),
});

function Index() {
  return <LandingPage />;
}
