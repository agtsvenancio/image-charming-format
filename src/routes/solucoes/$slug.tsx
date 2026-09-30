import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { getSolucao } from "@/data/solucoes";
import { getSegmento } from "@/data/segmentos";
import { posts, WHATSAPP_NUMBER } from "@/data/site";
import { Breadcrumbs, btn, SectionHeader, Validar } from "@/components/site/ui";
import { FaqBlock, MetodoMini, ProvaBlock } from "@/components/site/DetailBlocks";
import { LeadForm } from "@/components/site/LeadForm";

export const Route = createFileRoute("/solucoes/$slug")({
  loader: ({ params }) => {
    const s = getSolucao(params.slug);
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
      : [{ title: "Solução não encontrada" }, { name: "robots", content: "noindex" }],
  }),
  component: Page,
});

function Page() {
  const s = Route.useLoaderData();
  const wa = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Vim pela página de ${s.nome} e gostaria de um orçamento.`)}`;
  return (
    <>
      <section className="bg-navy text-navy-foreground">
        <div className="container-site grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <Breadcrumbs items={[{ label: "Soluções para empresas", to: "/solucoes" }, { label: s.nome }]} />
            <p className="eyebrow mt-6 text-cta">SOLUÇÃO PARA EMPRESAS</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">{s.h1}</h1>
            <p className="mt-5 text-lg text-navy-foreground/85">{s.problema}</p>
            <p className="mt-4 text-navy-foreground/70"><strong className="text-navy-foreground">Para quem é:</strong> {s.publico}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#orcamento" className={btn("primary")}>Solicite um orçamento</a>
              <a href={wa} target="_blank" rel="noreferrer" className={btn("ghostLight")}>Fale com a equipe</a>
            </div>
          </div>
          <img src={s.imagem} alt={s.imagemAlt} className="max-h-[480px] w-full rounded-2xl object-cover shadow-lift" />
        </div>
      </section>

      <section className="container-site py-16">
        <SectionHeader eyebrow="APLICAÇÕES" title="Ambientes e itens atendidos" />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {s.aplicacoes.map((a) => (
            <li key={a} className="flex items-start gap-2 rounded-xl border bg-card p-4"><Check className="mt-0.5 h-5 w-5 shrink-0 text-m-green" />{a}</li>
          ))}
        </ul>
      </section>

      {s.extra && (
        <section className="bg-muted/50 py-16">
          <div className="container-site grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeader eyebrow="GUIA RÁPIDO" title={s.extra.titulo} />
              {s.extra.paragrafos.map((p) => <p key={p} className="mt-4 text-muted-foreground">{p}</p>)}
            </div>
            <ul className="space-y-3 self-center">
              {s.extra.itens?.map((i) => <li key={i} className="flex gap-3 rounded-xl bg-card p-4 shadow-soft"><Check className="h-5 w-5 shrink-0 text-cta" />{i}</li>)}
            </ul>
          </div>
        </section>
      )}

      <section className="container-site py-16">
        <SectionHeader eyebrow="BENEFÍCIOS" title="O que sua operação ganha" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {s.beneficios.map((b) => (
            <div key={b.titulo} className="rounded-2xl border bg-card p-6 shadow-soft">
              <h3 className="text-lg font-bold text-navy">{b.titulo}</h3>
              <p className="mt-2 text-muted-foreground">{b.texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/50 py-16">
        <div className="container-site">
          <SectionHeader eyebrow="PROCESSO" title="Como o serviço é feito" />
          <ol className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {s.processo.map((p, i) => (
              <li key={p.titulo} className="rounded-2xl bg-card p-6 shadow-soft">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy font-display font-bold text-navy-foreground">{i + 1}</span>
                <h3 className="mt-3 text-lg font-bold">{p.titulo}</h3>
                <p className="mt-1 text-muted-foreground">{p.texto}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6"><Validar>tempo estimado e secagem</Validar></p>
        </div>
      </section>

      <section className="container-site py-16">
        <SectionHeader eyebrow="INDICADO PARA" title="Segmentos que mais usam esta solução" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {s.segmentosRelacionados.map((slug) => {
            const seg = getSegmento(slug);
            return seg ? (
              <Link key={slug} to="/segmentos/$slug" params={{ slug }} className="rounded-2xl border bg-card p-5 font-display font-semibold text-navy shadow-soft transition hover:-translate-y-1">{seg.nome} →</Link>
            ) : null;
          })}
        </div>
      </section>

      <section className="container-site grid gap-8 pb-16 lg:grid-cols-2">
        <div>
          <SectionHeader eyebrow="DIFERENCIAIS" title="Por que a Neide Maria" />
          <ul className="mt-6 space-y-3">
            {s.diferenciais.map((d) => <li key={d} className="flex gap-2"><Check className="h-5 w-5 text-m-green" />{d}</li>)}
          </ul>
        </div>
        <MetodoMini />
      </section>

      <ProvaBlock imagem={s.prova?.imagem} legenda={s.prova?.legenda} antesDepois={s.prova?.antesDepois} />

      <FaqBlock faq={s.faq} />

      <section className="container-site pb-10">
        <p className="eyebrow text-navy">LEIA TAMBÉM</p>
        <div className="mt-3 flex flex-wrap gap-3">
          {posts.map((p) => <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="rounded-full border px-4 py-2 text-sm hover:bg-muted">{p.title}</Link>)}
        </div>
      </section>

      <section id="orcamento" className="bg-navy py-16">
        <div className="container-site grid gap-10 lg:grid-cols-2">
          <SectionHeader light eyebrow="ORÇAMENTO" title={`Peça um orçamento de ${s.nome.toLowerCase()}`} subtitle="Atendemos São Paulo, ABC e Alphaville. Responda em poucos campos e nossa equipe retorna." />
          <LeadForm origem={s.nome} solucao={s.nome} />
        </div>
      </section>
    </>
  );
}
