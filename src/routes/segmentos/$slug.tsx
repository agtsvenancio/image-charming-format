import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { getSegmento } from "@/data/segmentos";
import { getSolucao } from "@/data/solucoes";
import { WHATSAPP_NUMBER } from "@/data/site";
import { Breadcrumbs, btn, SectionHeader, Validar } from "@/components/site/ui";
import { FaqBlock, ProvaBlock } from "@/components/site/DetailBlocks";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/segmentos/$slug")({
  loader: ({ params }) => {
    const s = getSegmento(params.slug);
    if (!s) throw notFound();
    return s;
  },
  head: ({ loaderData: s }) => ({
    meta: s
      ? [
          { title: s.seoTitle },
          { name: "description", content: s.metaDescription },
          { property: "og:title", content: s.seoTitle },
          { property: "og:description", content: s.metaDescription },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Segmento não encontrado" }, { name: "robots", content: "noindex" }],
  }),
  component: Page,
});

function Page() {
  const s = Route.useLoaderData();
  const sols = s.solucoes.map(getSolucao).filter((x) => !!x);
  const wa = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Vim pela página de ${s.nome} e gostaria de uma avaliação.`)}`;
  return (
    <>
      <section className="bg-navy text-navy-foreground">
        <div className="container-site py-14 md:py-20">
          <Breadcrumbs items={[{ label: "Segmentos atendidos", to: "/segmentos" }, { label: s.nome }]} />
          <p className="eyebrow mt-6 text-cta">SEGMENTO</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">{s.h1}</h1>
          {s.contexto.map((c) => <p key={c} className="mt-4 max-w-2xl text-lg text-navy-foreground/85">{c}</p>)}
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#orcamento" className={btn("primary")}>Peça uma avaliação</a>
            <a href={wa} target="_blank" rel="noreferrer" className={btn("ghostLight")}>Fale com a equipe</a>
          </div>
        </div>
      </section>

      <section className="container-site grid gap-10 py-16 lg:grid-cols-2">
        <div>
          <SectionHeader eyebrow="PONTOS DE ATENÇÃO" title="O que pesa na sua rotina" />
          <ul className="mt-6 space-y-3">{s.pontosAtencao.map((p) => <li key={p} className="flex gap-2"><Check className="h-5 w-5 shrink-0 text-cta" />{p}</li>)}</ul>
        </div>
        <div>
          <SectionHeader eyebrow="AMBIENTES" title="Onde atuamos" />
          <div className="mt-6 flex flex-wrap gap-2">{s.ambientes.map((a) => <span key={a} className="rounded-full border bg-card px-4 py-2">{a}</span>)}</div>
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="container-site">
          <SectionHeader eyebrow="SOLUÇÕES RECOMENDADAS" title={`O que indicamos para ${s.nome.toLowerCase()}`} />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sols.map((x) => (
              <Link key={x.slug} to="/solucoes/$slug" params={{ slug: x.slug }} className="group overflow-hidden rounded-2xl bg-card shadow-soft transition hover:-translate-y-1">
                <img src={x.imagem} alt={x.imagemAlt} loading="lazy" className="h-40 w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-bold text-navy">{x.nome}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{x.resumo}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-16">
        <SectionHeader eyebrow="FORMA DE ATENDIMENTO" title="Como trabalhamos com você" subtitle={s.atendimento} />
        <p className="mt-4"><Validar>forma de atendimento e recorrência</Validar></p>
      </section>

      <ProvaBlock />
      <FaqBlock faq={s.faq} />

      <section id="orcamento" className="bg-navy py-16">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <SectionHeader light eyebrow="AVALIAÇÃO" title={`Peça uma avaliação para ${s.nome.toLowerCase()}`} subtitle="Atendemos São Paulo, ABC e Alphaville." />
          <LeadForm origem={s.nome} segmento={s.nome} />
        </div>
      </section>
    </>
  );
}
