import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, meta } from "@/components/site/PlaceholderPage";
import { solucoesDetalhadas } from "@/data/solucoes";
import { btn } from "@/components/site/ui";

export const Route = createFileRoute("/solucoes/")({
  head: () => meta("Soluções para empresas", "Higienização profissional de carpetes, estofados, cadeiras, cortinas e mais para ambientes corporativos."),
  component: Page,
});

function Page() {
  const [destaque, ...resto] = solucoesDetalhadas;
  return (
    <>
      <PageHero eyebrow="SOLUÇÕES PARA EMPRESAS" title="Soluções para empresas" intro="Higienização técnica de carpetes, estofados e mobiliário corporativo, com planejamento que respeita a sua operação." crumbs={[{ label: "Soluções para empresas" }]} />
      <section className="container-site py-16">
        <Link to="/solucoes/$slug" params={{ slug: destaque.slug }} className="grid overflow-hidden rounded-2xl bg-card shadow-lift md:grid-cols-2">
          <img src={destaque.imagem} alt={destaque.imagemAlt} className="h-72 w-full object-cover md:h-full" />
          <div className="p-8">
            <p className="eyebrow text-cta">SOLUÇÃO PRINCIPAL</p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy">{destaque.nome}</h2>
            <p className="mt-3 text-muted-foreground">{destaque.problema.slice(0, 220)}…</p>
            <span className={btn("primary", "mt-6")}>Conheça a solução</span>
          </div>
        </Link>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {resto.map((s) => (
            <Link key={s.slug} to="/solucoes/$slug" params={{ slug: s.slug }} className="group overflow-hidden rounded-2xl border bg-card shadow-soft transition hover:-translate-y-1">
              <img src={s.imagem} alt={s.imagemAlt} loading="lazy" className="h-40 w-full object-cover" />
              <div className="p-5">
                <h3 className="font-bold text-navy">{s.nome}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.resumo}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center"><Link to="/solicite-um-orcamento" className={btn("primary")}>Solicite um orçamento</Link></div>
      </section>
    </>
  );
}
