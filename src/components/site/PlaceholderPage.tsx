import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Breadcrumbs, btn } from "./ui";
import { whatsappLink } from "@/data/site";

export function PageHero({ eyebrow, title, intro, crumbs }: { eyebrow: string; title: string; intro?: string | undefined; crumbs: { label: string; to?: string }[] }) {
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="container-site py-14 md:py-20">
        <Breadcrumbs items={crumbs} />
        <p className="eyebrow mt-6 text-cta">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">{title}</h1>
        {intro && <p className="mt-4 max-w-2xl text-lg text-navy-foreground/80">{intro}</p>}
      </div>
    </section>
  );
}

export function PlaceholderPage({ eyebrow, title, intro, crumbs, children }: { eyebrow: string; title: string; intro?: string | undefined; crumbs: { label: string; to?: string }[]; children?: ReactNode }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} crumbs={crumbs} />
      <section className="container-site py-16">
        {children ?? <p className="text-muted-foreground">Conteúdo completo desta página em preparação.</p>}
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/solicite-um-orcamento" className={btn("primary")}>Solicite um orçamento</Link>
          <a href={whatsappLink(title)} target="_blank" rel="noreferrer" className={btn("outline")}>Fale com a equipe</a>
        </div>
      </section>
    </>
  );
}

export function ItemGrid({ base, items }: { base: string; items: { slug: string; title: string; short: string }[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((i) => (
        <a key={i.slug} href={`/${base}/${i.slug}`} className="group rounded-2xl border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
          <h2 className="text-xl font-bold text-navy">{i.title}</h2>
          <p className="mt-2 text-muted-foreground">{i.short}</p>
          <span className="mt-4 inline-block font-display font-semibold text-graphite group-hover:text-navy">Conheça a solução →</span>
        </a>
      ))}
    </div>
  );
}

export const meta = (title: string, description: string) => ({
  meta: [
    { title: `${title} | Neide Maria Limpeza` },
    { name: "description", content: description },
    { property: "og:title", content: `${title} | Neide Maria Limpeza` },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
