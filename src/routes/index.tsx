import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/landing/LandingPage";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Plase Anti-Insecte Iași — Confecționăm și Montăm" },
      {
        name: "description",
        content:
          "Plase anti-țânțari pentru geam și ușă în Iași și împrejurimi. Montaj rapid, materiale de calitate, plase rezistente la pisici și rulouri. Sună 0751 600 281.",
      },
      { name: "keywords", content: "plase tantari Iasi, plase anti insecte Iasi, plasa geam, plasa usa, plase rezistente pisici, rulouri plase Iasi, montaj plase tantari Iasi" },
      { name: "author", content: "Plase Anti-Insecte Iași" },
      { property: "og:title", content: "Plase Anti-Insecte Iași — Montaj rapid, prețuri corecte" },
      { property: "og:description", content: "Confecționăm și montăm plase anti-țânțari în Iași. De la 130 lei. Răspundem pe WhatsApp în maxim 10 minute." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ro_RO" },
      { name: "geo.region", content: "RO-IS" },
      { name: "geo.placename", content: "Iași" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Plase Anti-Insecte Iași",
          image: "/og.jpg",
          telephone: "+40751600281",
          areaServed: "Iași și împrejurimi",
          address: { "@type": "PostalAddress", addressLocality: "Iași", addressCountry: "RO" },
          priceRange: "130–580 RON",
          sameAs: ["https://www.facebook.com/profile.php?id=100063571540381"],
        }),
      },
    ],
  }),
});

function Index() {
  return <LandingPage />;
}
