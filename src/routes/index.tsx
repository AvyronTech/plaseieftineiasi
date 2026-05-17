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
          "Plase anti-insecte în Iași: țânțari, geam, ușă, rulou și plase rezistente la pisici. Montaj rapid în Iași și împrejurimi, de la 130 lei. Sună 0751 600 281.",
      },
      { name: "keywords", content: "plase tantari Iasi, plase anti insecte Iasi, plase tantari ieftine Iasi, montaj plase tantari Iasi, plasa tantari geam Iasi, plasa tantari usa Iasi, plase rulou Iasi, plase rezistente pisici Iasi, plase magnetice Iasi, confectionare plase Iasi" },
      { name: "author", content: "Plase Anti-Insecte Iași" },
      { property: "og:title", content: "Plase Anti-Insecte Iași — Montaj rapid, prețuri corecte" },
      { property: "og:description", content: "Confecționăm și montăm plase anti-țânțari în Iași și împrejurimi. De la 130 lei. Răspundem pe WhatsApp în maxim 10 minute." },
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
          "@type": "LocalBusiness",
          "@id": "https://plaseieftineiasi.ro/#business",
          name: "Plase Anti-Insecte Iași",
          image: "https://plaseieftineiasi.ro/og.jpg",
          url: "https://plaseieftineiasi.ro/",
          telephone: "+40751600281",
          areaServed: [
            { "@type": "City", name: "Iași" },
            { "@type": "AdministrativeArea", name: "Județul Iași" },
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Iași",
            addressRegion: "IS",
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
          priceRange: "130–580 RON",
          sameAs: ["https://www.facebook.com/profile.php?id=100063571540381"],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Servicii plase anti-insecte Iași",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "Plasă anti-țânțari pentru geam" },
                priceCurrency: "RON",
                price: "130",
              },
              {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "Plasă anti-țânțari pentru ușă" },
                priceCurrency: "RON",
                price: "230",
              },
              {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "Plasă tip rulou pentru geam și ușă" },
                priceCurrency: "RON",
                price: "380",
              },
              {
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: "Plasă rezistentă la pisici" },
                priceCurrency: "RON",
                price: "260",
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
