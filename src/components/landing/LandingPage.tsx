import { useEffect, useState } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Wrench,
  Ruler,
  ShieldCheck,
  BadgeCheck,
  Cat,
  Star,
  Facebook,
  Mail,
  CheckCircle2,
  Banknote,
  PaintBucket,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import heroBg from "@/assets/hero-bg.jpg";
import catsMeshBg from "@/assets/cats-mesh-bg.jpg";
import work1 from "@/assets/gallery/work-1.jpg";
import work2 from "@/assets/gallery/work-2.jpg";
import work3 from "@/assets/gallery/work-3.jpg";
import work4 from "@/assets/gallery/work-4.jpg";
import work5 from "@/assets/gallery/work-5.jpg";
import cat1 from "@/assets/gallery/cat-1.jpg";
import cat2 from "@/assets/gallery/cat-2.jpg";
import avyronLogo from "@/assets/avyron-powered-by-tight.jpeg";

const PHONE = "0751 600 281";
const PHONE_INTL = "+40751600281";
const WA_LINK = `https://wa.me/40751600281?text=${encodeURIComponent(
  "Bună ziua! Sunt interesat de plase anti-insecte."
)}`;
const FB_LINK = "https://www.facebook.com/profile.php?id=100063571540381";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
    >
      {children}
    </a>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span
        className={`grid h-10 w-10 place-items-center rounded-md border-2 ${
          light ? "border-white/80 text-white" : "border-foreground text-foreground"
        }`}
        aria-hidden
      >
        <span className="grid h-5 w-5 grid-cols-2 grid-rows-2 gap-px">
          <span className={`${light ? "bg-white/80" : "bg-foreground"}`} />
          <span className={`${light ? "bg-white/80" : "bg-foreground"}`} />
          <span className={`${light ? "bg-white/80" : "bg-foreground"}`} />
          <span className={`${light ? "bg-white/80" : "bg-foreground"}`} />
        </span>
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-lg font-extrabold tracking-tight ${
            light ? "text-white" : "text-foreground"
          }`}
        >
          PLASE <span className="text-primary">IAȘI</span>
        </span>
        <span
          className={`block text-[11px] font-medium ${
            light ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          Plase anti-insecte
        </span>
      </span>
    </a>
  );
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "bg-background/90 shadow-[var(--shadow-card)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Logo light={!scrolled} />
        <nav className="hidden items-center gap-7 lg:flex">
          <NavLink href="#preturi">Prețuri</NavLink>
          <NavLink href="#servicii">Servicii</NavLink>
          <NavLink href="#exemple">Exemple</NavLink>
          <NavLink href="#recenzii">Recenzii</NavLink>
          <NavLink href="#despre">Despre noi</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-semibold text-whatsapp-foreground shadow-[var(--shadow-card)] transition hover:opacity-90 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a
            href={`tel:${PHONE_INTL}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-card)] transition hover:opacity-90"
          >
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
          <a
            href={FB_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pagina Facebook"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-[var(--shadow-card)] transition hover:opacity-90"
          >
            <Facebook className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-24 pb-12 md:pt-28 md:pb-16"
    >
      <img
        src={heroBg}
        alt="Plasă anti-țânțari montată pe geam, cu o pisică pe pervaz"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/80 to-ink/60" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-[1.1fr_0.9fr] md:px-6">
        <div className="text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            <MapPin className="h-3.5 w-3.5" /> Iași și împrejurimi
          </span>
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
            Confecționăm și montăm{" "}
            <span className="text-primary">plase anti-insecte</span> în Iași
          </h1>
          <ul className="mt-5 grid max-w-xl gap-2 text-base text-white/90 sm:text-lg">
            <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-primary" /> Calitate garantată</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-primary" /> Montaj rapid</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-primary" /> Prețuri corecte</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-primary" /> Răspundem pe WhatsApp în maxim 10 minute</li>
          </ul>

          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:max-w-2xl">
            <Feature icon={<Ruler className="h-4 w-4" />} text="Măsurători gratuite" />
            <Feature icon={<Wrench className="h-4 w-4" />} text="Montaj inclus" />
            <Feature icon={<ShieldCheck className="h-4 w-4" />} text="Materiale de calitate" />
            <Feature icon={<Clock className="h-4 w-4" />} text="Soluții personalizate" />
          </div>
        </div>

        {/* Quick contact card */}
        <div className="self-start rounded-2xl bg-card p-6 shadow-[var(--shadow-soft)] md:mt-2">
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Contact rapid
              </p>
              <p className="font-display text-2xl font-extrabold">{PHONE}</p>
              <p className="text-xs text-muted-foreground">SMS / Apel / WhatsApp</p>
            </div>
          </div>

          <div className="mt-5 grid gap-2.5">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-whatsapp/10 px-4 py-3 text-sm font-semibold text-whatsapp transition hover:bg-whatsapp/15"
            >
              <MessageCircle className="h-4 w-4" /> Trimite mesaj pe WhatsApp
            </a>
            <a
              href={`tel:${PHONE_INTL}`}
              className="flex items-center justify-center gap-2 rounded-xl bg-primary/10 px-4 py-3 text-sm font-semibold text-primary transition hover:bg-primary/15"
            >
              <Phone className="h-4 w-4" /> Sună acum
            </a>
            <a
              href={`sms:${PHONE_INTL}`}
              className="flex items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              <Mail className="h-4 w-4" /> Trimite SMS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-lg bg-white/8 px-3 py-2 text-xs font-medium text-white backdrop-blur">
      <span className="text-primary">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function TrustBar() {
  const items = [
    { icon: <BadgeCheck className="h-5 w-5" />, title: "CALITATE GARANTATĂ", text: "Materiale rezistente și durabile" },
    { icon: <Wrench className="h-5 w-5" />, title: "MONTAJ RAPID", text: "Profesioniști cu experiență" },
    { icon: <BadgeCheck className="h-5 w-5" />, title: "PREȚURI CORECTE", text: "Raport calitate-preț excelent" },
    { icon: <MapPin className="h-5 w-5" />, title: "DEPLASARE INCLUSĂ", text: "Iași și comunele din județ" },
    { icon: <Sparkles className="h-5 w-5" />, title: "EXPERIENȚĂ", text: "Sute de plase montate cu succes" },
    { icon: <ShieldCheck className="h-5 w-5" />, title: "SERIOZITATE", text: "Siguranță 100% și seriozitate" },
  ];
  return (
    <section className="border-y border-border bg-background py-6">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 md:grid-cols-3 md:px-6 lg:grid-cols-6">
        {items.map((it) => (
          <div key={it.title} className="text-center">
            <div className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary">
              {it.icon}
            </div>
            <p className="mt-2 text-[11px] font-bold tracking-wider text-foreground">
              {it.title}
            </p>
            <p className="text-xs text-muted-foreground">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

type Price = {
  title: string;
  price: string;
  unit?: string;
  features: string[];
  badge?: string;
  dark?: boolean;
  icon?: React.ReactNode;
  hideCta?: boolean;
};

function PriceCard({ p }: { p: Price }) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl p-4 shadow-[var(--shadow-card)] sm:p-5 md:p-6 ${
        p.dark
          ? "bg-ink/45 text-white backdrop-blur-md border border-white/15"
          : "bg-card text-foreground"
      }`}
    >
      {p.badge && (
        <span className="absolute -top-3 left-4 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold text-primary-foreground sm:left-6 sm:px-3 sm:py-1 sm:text-xs">
          {p.badge}
        </span>
      )}
      <div className="flex items-start justify-between gap-3">
        <h3 className={`font-display text-base font-bold leading-tight sm:text-lg md:text-xl ${p.dark ? "text-white" : ""}`}>
          {p.title}
        </h3>
        {p.icon}
      </div>
      <div className="mt-3 flex items-baseline gap-1">
        <span className="font-display text-3xl font-extrabold text-primary sm:text-4xl">
          {p.price}
        </span>
        <span className={`text-xs sm:text-sm ${p.dark ? "text-white/70" : "text-muted-foreground"}`}>
          lei{p.unit ? ` ${p.unit}` : ""}
        </span>
      </div>
      <ul className="mt-3 space-y-1.5 text-xs sm:text-sm">
        {p.features.map((f) => (
          <li key={f} className="flex gap-1.5">
            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary sm:h-4 sm:w-4" />
            <span className={p.dark ? "text-white/85" : "text-foreground/85"}>{f}</span>
          </li>
        ))}
      </ul>
      {!p.hideCta && (
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition hover:opacity-90 sm:px-5 sm:py-2.5 sm:text-sm"
        >
          Cere ofertă <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
        </a>
      )}
    </div>
  );
}

function Pricing() {
  const standard: Price[] = [
    {
      title: "Plasă pentru geam",
      price: "140",
      features: ["Material anti-insecte", "Cadru aluminiu", "Montaj inclus"],
    },
    {
      title: "Plasă pentru ușă",
      price: "230",
      features: ["Cadru robust", "Balamale rezistente", "Montaj inclus"],
    },
    {
      title: "Încuietori cu magnet",
      price: "+30",
      unit: "/ plasă",
      features: ["Include 2 magneți / plasă", "Sistem eficient de închidere", "Vezi video în secțiunea Exemple"],
      badge: "OPȚIONAL",
      hideCta: true,
    },
  ];
  const cat: Price[] = [
    {
      title: "Plasă rezistentă pisici — Geam",
      price: "300",
      features: [
        "Sistemul de închidere este completat de 2 zăvorâșe, astfel fiind imposibilă deschiderea de către orice animal domestic",
        "Material imposibil de rupt de pisici",
        "Siguranță 100% pentru pisici",
        "Cadru întărit",
      ],
      dark: true,
      icon: <Cat className="h-6 w-6 text-primary" />,
    },
    {
      title: "Plasă rezistentă pisici — Ușă",
      price: "400",
      features: [
        "Sistemul de închidere este completat de 2 zăvorâșe, astfel fiind imposibilă deschiderea de către orice animal domestic",
        "Material imposibil de rupt de pisici",
        "Recomandată pentru balcon",
      ],
      dark: true,
      icon: <Cat className="h-6 w-6 text-primary" />,
    },
  ];
  const rolls: Price[] = [
    {
      title: "Rulou plasă — o singură deschidere",
      price: "330",
      unit: "/ geam",
      features: ["Sistem retractabil", "Discret când e strâns", "Operare ușoară"],
    },
    {
      title: "Rulou plasă — dublă deschidere",
      price: "580",
      unit: "/ geam",
      features: ["Sistem retractabil", "Două panouri", "Pentru deschideri largi"],
    },
  ];

  return (
    <section id="preturi" className="bg-secondary/40 py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Prețuri"
          title="Prețuri corecte, fără costuri ascunse"
          subtitle="Măsurători, montaj, materiale și deplasare incluse în preț."
        />

        <h3 className="mt-8 mb-3 font-display text-base font-bold uppercase tracking-wider text-muted-foreground">
          Plase anti-țânțari
        </h3>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {standard.map((p) => (
            <PriceCard key={p.title} p={p} />
          ))}
        </div>

        <div
          className="relative mt-8 overflow-hidden rounded-3xl p-4 sm:p-6"
          style={{
            backgroundImage: `linear-gradient(135deg, oklch(0.18 0.02 50 / 0.78), oklch(0.18 0.02 50 / 0.55)), url(${catsMeshBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="mb-3 flex items-center gap-2 font-display text-base font-bold uppercase tracking-wider text-white/90">
            <Cat className="h-5 w-5 text-primary" /> Plase rezistente la pisici
          </h3>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {cat.map((p) => (
              <PriceCard key={p.title} p={p} />
            ))}
          </div>
        </div>

        <h3 className="mt-8 mb-3 font-display text-base font-bold uppercase tracking-wider text-muted-foreground">
          Rulouri cu plasă anti-insecte
        </h3>
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {rolls.map((p) => (
            <PriceCard key={p.title} p={p} />
          ))}
        </div>

        {/* Accessories + included */}
        <div className="mt-6 grid gap-3 md:grid-cols-3 md:gap-4">
          <div className="rounded-2xl bg-card p-6 shadow-[var(--shadow-card)]">
            <h4 className="font-display text-lg font-bold">Accesorii</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <PaintBucket className="mt-0.5 h-4 w-4 text-primary" />
                <span>
                  <span className="font-semibold">Mâner aluminiu</span> pentru ușă balcon —{" "}
                  <span className="font-semibold text-primary">30 lei</span>{" "}
                  <span className="text-muted-foreground">(montaj inclus)</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <PaintBucket className="mt-0.5 h-4 w-4 text-primary" />
                <span>Culori diverse, adaptate oricărui stil</span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-card p-6 shadow-[var(--shadow-card)]">
            <h4 className="font-display text-lg font-bold">Ce oferim în preț</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {["Măsurători", "Montaj", "Materiale de calitate", "Timp de execuție: imediat / programat"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-card p-6 shadow-[var(--shadow-card)]">
            <h4 className="flex items-center gap-2 font-display text-lg font-bold">
              <Banknote className="h-5 w-5 text-primary" /> Plată
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" /> Doar numerar (cash)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" /> Acceptăm plata în 2 rate
              </li>
              <li className="text-xs text-muted-foreground">(detalii pe WhatsApp)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      icon: <Ruler className="h-6 w-6" />,
      title: "Măsurători gratuite la domiciliu",
      text: "Venim la apartament sau casă, măsurăm fiecare geam și ușă și îți oferim pe loc o ofertă clară.",
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Confecționare la comandă",
      text: "Plasele sunt confecționate pe dimensiunile exacte ale geamurilor tale, în culoarea aleasă.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Montaj profesional",
      text: "Montaj rapid, curat, fără să afecteze tâmplăria. Programăm execuția când îți este convenabil.",
    },
    {
      icon: <Cat className="h-6 w-6" />,
      title: "Plase rezistente la pisici",
      text: "Material special, imposibil de rupt, cu zăvorașe de siguranță. Liniște pentru tine și pentru pisică.",
    },
  ];
  return (
    <section id="servicii" className="bg-background py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Servicii"
          title="De la măsurători la montaj — totul inclus"
          subtitle="Lucrăm pentru apartamente și case, indiferent de numărul de plase necesare. Deplasare gratuită în Iași și împrejurimi."
        />
        <div className="mx-auto mt-8 grid max-w-5xl justify-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:border-primary/30"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                {s.icon}
              </div>
              <h3 className="mt-3 font-display text-base font-bold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type GalleryItem = { src: string; caption: string };

function Gallery() {
  const items: GalleryItem[] = [
    { src: work1, caption: "Ușă balcon glisantă — plasă pe cadru maro" },
    { src: work5, caption: "Geam dublu — plasă albă, cadru discret" },
    { src: work2, caption: "Plasă pentru geam mansardă, cadru gri" },
    { src: work3, caption: "Ușă dublă cu balamale — montaj curat" },
    { src: work4, caption: "Ușă antracit cu plasă pe două panouri" },
    { src: cat1, caption: "Plasă rezistentă la pisici — testată în condiții reale" },
    { src: cat2, caption: "Plasă pe ușă balcon — siguranță pentru pisici" },
  ];
  const loop = [...items, ...items];
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [lightbox]);
  return (
    <section id="exemple" className="overflow-hidden bg-secondary/40 py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Vezi exemple"
          title="Ultimele lucrări montate în Iași"
          subtitle="Poze din apartamente și case unde am montat plase. Inclusiv plasele speciale, rezistente la pisici, și sistemele cu închidere magnetică."
        />
      </div>
      <div className="marquee-pause mt-8">
        <div className="flex w-max animate-marquee gap-5 px-4">
          {loop.map((it, i) => (
            <figure
              key={i}
              className="w-[280px] shrink-0 cursor-zoom-in overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-card)] sm:w-[340px]"
              onClick={() => setLightbox(it)}
            >
              <img
                src={it.src}
                alt={it.caption}
                loading="lazy"
                className="h-[260px] w-full object-cover sm:h-[320px]"
              />
            </figure>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-6 flex max-w-7xl flex-col items-center gap-3 px-4 text-center md:px-6">
        <a
          href={FB_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#1877F2] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
        >
          <Facebook className="h-4 w-4" /> Mai multe exemple găsiți pe Facebook
        </a>
      </div>
      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 backdrop-blur"
        >
          <button
            aria-label="Închide"
            onClick={() => setLightbox(null)}
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-xl font-bold text-white hover:bg-white/20"
          >
            ×
          </button>
          <figure className="max-h-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.caption}
              className="max-h-[88vh] w-auto max-w-full rounded-xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-white/85">
              {lightbox.caption}
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}

function Reviews() {
  const reviews = [
    {
      name: "Andrei",
      city: "Iași",
      text: "Montaj rapid și foarte profesionist. Plase de calitate, recomand cu încredere!",
    },
    {
      name: "Maria",
      city: "Valea Lupului",
      text: "Seriozitate și promptitudine. Au venit, au măsurat și în 2 zile totul a fost montat perfect.",
    },
    {
      name: "Vlad",
      city: "Miroslava",
      text: "Plasele pentru pisici sunt super rezistente! Pisica nu le poate rupe deloc.",
    },
    {
      name: "Elena",
      city: "Popricani",
      text: "Prețuri corecte și oameni de treabă. Cu siguranță voi mai apela!",
    },
    {
      name: "Cătălin",
      city: "Iași — Tătărași",
      text: "Au venit la timp, montaj curat. Au montat și încuietorile cu magnet, funcționează impecabil.",
    },
    {
      name: "Diana",
      city: "Bârnova",
      text: "Am cerut rulou cu plasă pentru geamul mare — arată elegant și se strânge ușor.",
    },
  ];
  const loop = [...reviews, ...reviews];
  return (
    <section id="recenzii" className="overflow-hidden bg-background py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Recenzii reale"
          title="Părerea ta contează cel mai mult"
          subtitle="Clienții noștri sunt cea mai bună reclamă. Mulțumim pentru fiecare recomandare — ne motivează să facem treabă bună la fiecare montaj."
        />
      </div>
      <div className="marquee-pause mt-8">
        <div className="flex w-max animate-marquee-slow gap-5 px-4">
          {loop.map((r, i) => (
            <article
              key={i}
              className="w-[320px] shrink-0 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:w-[360px]"
            >
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground/85">"{r.text}"</p>
              <p className="mt-4 text-sm font-semibold">
                — {r.name},{" "}
                <span className="font-normal text-muted-foreground">{r.city}</span>
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-7xl px-4 md:px-6">
        <a
          href={FB_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto flex w-fit items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold transition hover:bg-muted"
        >
          <Facebook className="h-4 w-4 text-[#1877F2]" /> Vezi mai multe recenzii pe Facebook
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="despre" className="bg-secondary/40 py-8 md:py-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1fr_1.2fr] md:px-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
            Despre noi
          </p>
          <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
            Sute de plase montate. <br /> Aceeași grijă la fiecare lucrare.
          </h2>
          <div className="mt-6 grid grid-cols-3 gap-4">
            <Stat value="1000+" label="Plase montate" />
            <Stat value="5+" label="Ani experiență" />
            <Stat value="100%" label="Seriozitate" />
          </div>
        </div>
        <div className="space-y-4 text-foreground/85">
          <p>
            Suntem o echipă locală din Iași specializată în confecționarea și montajul
            plaselor anti-insecte pentru geamuri și uși. Lucrăm pentru apartamente și
            case, atât în oraș cât și în comunele din județul Iași.
          </p>
          <p>
            Punem accent pe materiale de calitate, montaj curat și o relație corectă cu
            clientul: spunem din start cât costă, venim la timp și nu lăsăm lucrarea pe
            jumătate.
          </p>
          <p>
            Confecționăm și plase speciale, rezistente la pisici, cu material care nu
            poate fi rupt și cu zăvorașe de siguranță — pentru ca animalul de companie să
            rămână în siguranță în casă.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-whatsapp-foreground transition hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" /> Scrie pe WhatsApp
            </a>
            <a
              href={`tel:${PHONE_INTL}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              <Phone className="h-4 w-4" /> Sună acum
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl bg-card p-4 text-center shadow-[var(--shadow-card)]">
      <div className="font-display text-2xl font-extrabold text-primary">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

function ContactCTA() {
  return (
    <section id="contact" className="bg-ink py-10 text-white md:py-12">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 md:grid-cols-[1.2fr_1fr] md:px-6">
        <div>
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            Ai nevoie de plase anti-insecte?
          </h2>
          <p className="mt-3 text-white/80">
            Contactează-ne acum pentru măsurători gratuite. Răspundem pe WhatsApp în
            maxim 10 minute.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-whatsapp px-5 py-4 text-base font-semibold text-whatsapp-foreground transition hover:opacity-90"
          >
            <MessageCircle className="h-5 w-5" />
            <span className="text-left leading-tight">
              <span className="block text-xs font-medium opacity-80">WhatsApp</span>
              <span className="block">{PHONE}</span>
            </span>
          </a>
          <a
            href={`tel:${PHONE_INTL}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-4 text-base font-semibold text-primary-foreground transition hover:opacity-90"
          >
            <Phone className="h-5 w-5" />
            <span className="text-left leading-tight">
              <span className="block text-xs font-medium opacity-80">Sună acum</span>
              <span className="block">{PHONE}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer({ onOpenCookies }: { onOpenCookies: () => void }) {
  return (
    <footer className="bg-background pt-10 pb-6">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 md:grid-cols-12 md:px-6">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">
              Te-ai săturat de țânțari?
            </span>{" "}
            Suntem la un telefon distanță și te scăpăm! Confecționăm și montăm plase
            anti-insecte în Iași și împrejurimi — calitate, montaj rapid și prețuri
            corecte.
          </p>
          <div className="mt-4 flex gap-2">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-semibold text-whatsapp-foreground transition hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a
              href={`tel:${PHONE_INTL}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              <Phone className="h-4 w-4" /> Sună acum
            </a>
          </div>
        </div>
        <div className="md:col-span-2">
            <h3 className="font-display font-bold">Linkuri utile</h3>
            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              <li><a className="hover:text-primary" href="#preturi">Prețuri</a></li>
              <li><a className="hover:text-primary" href="#servicii">Servicii</a></li>
              <li><a className="hover:text-primary" href="#exemple">Exemple</a></li>
              <li><a className="hover:text-primary" href="#recenzii">Recenzii</a></li>
              <li><a className="hover:text-primary" href="#despre">Despre noi</a></li>
            </ul>
        </div>
        <div className="md:col-span-2">
            <h3 className="font-display font-bold">Contact</h3>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-primary" />
                <a href={`tel:${PHONE_INTL}`} className="font-semibold hover:text-primary">
                  {PHONE}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span className="text-muted-foreground">Iași și împrejurimi</span>
              </li>
              <li className="flex items-center gap-2 pt-1">
                <a
                  href={FB_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#1877F2] text-white transition hover:opacity-90"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <span className="text-xs text-muted-foreground">Urmărește-ne</span>
              </li>
            </ul>
        </div>
        <div className="order-last flex items-start justify-center md:order-none md:col-span-3 md:justify-end">
          <a
            href="https://avyron.ro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Powered by Avyron — avyron.ro"
            className="inline-flex h-fit overflow-hidden rounded-md leading-none transition hover:opacity-90"
          >
            <img
              src={avyronLogo}
              alt="Powered by Avyron"
              loading="lazy"
              className="block h-auto w-[260px] sm:w-[300px] md:w-[280px] lg:w-[320px]"
            />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-border px-4 pt-4 text-xs text-muted-foreground md:px-6">
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Plase Anti-Insecte Iași. Toate drepturile rezervate.</p>
          <div className="flex items-center gap-4">
            <button onClick={onOpenCookies} className="hover:text-primary">
              Politica de cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-border bg-background/95 p-2 backdrop-blur md:hidden">
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-xl bg-whatsapp py-3 text-sm font-semibold text-whatsapp-foreground"
      >
        <MessageCircle className="h-4 w-4" /> WhatsApp
      </a>
      <a
        href={`tel:${PHONE_INTL}`}
        className="flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground"
      >
        <Phone className="h-4 w-4" /> Sună
      </a>
    </div>
  );
}

function CookieBanner({
  open,
  onAccept,
  onClose,
  details,
  onToggleDetails,
}: {
  open: boolean;
  onAccept: () => void;
  onClose: () => void;
  details: boolean;
  onToggleDetails: () => void;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-x-3 bottom-20 z-50 rounded-2xl border border-border bg-card p-4 shadow-[var(--shadow-soft)] md:bottom-4 md:left-4 md:right-auto md:max-w-md">
      <p className="text-sm font-semibold">Folosim doar cookie-uri necesare</p>
      <p className="mt-1 text-xs text-muted-foreground">
        Site-ul folosește doar cookie-uri esențiale pentru funcționare. Nu folosim
        cookie-uri de marketing sau urmărire.
      </p>
      {details && (
        <ul className="mt-3 space-y-1 text-xs text-muted-foreground">
          <li>• Cookie-uri tehnice — necesare pentru funcționarea site-ului.</li>
          <li>• Nu colectăm date personale fără consimțământ.</li>
          <li>
            • Pentru întrebări legate de date, scrie-ne pe WhatsApp la {PHONE}.
          </li>
        </ul>
      )}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
        <button
          onClick={onToggleDetails}
          className="text-xs font-medium text-muted-foreground hover:text-primary"
        >
          {details ? "Ascunde detalii" : "Vezi detalii"}
        </button>
        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="rounded-full border border-border px-3 py-1.5 text-xs font-medium hover:bg-muted"
          >
            Închide
          </button>
          <button
            onClick={onAccept}
            className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground hover:opacity-90"
          >
            Accept necesare
          </button>
        </div>
      </div>
    </div>
  );
}

export function LandingPage() {
  const [cookieOpen, setCookieOpen] = useState(false);
  const [cookieDetails, setCookieDetails] = useState(false);

  // Cookie banner nu mai apare automat — se deschide doar din footer.

  const acceptCookies = () => {
    try {
      localStorage.setItem("cookies-ok", "1");
    } catch {}
    setCookieOpen(false);
  };

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Pricing />
        <Services />
        <Gallery />
        <Reviews />
        <About />
        <ContactCTA />
      </main>
      <Footer onOpenCookies={() => setCookieOpen(true)} />
      <MobileCTA />
      <CookieBanner
        open={cookieOpen}
        details={cookieDetails}
        onAccept={acceptCookies}
        onClose={() => setCookieOpen(false)}
        onToggleDetails={() => setCookieDetails((d) => !d)}
      />
    </div>
  );
}