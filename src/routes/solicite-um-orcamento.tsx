import { createFileRoute } from "@tanstack/react-router";
import { PageHero, meta } from "@/components/site/PlaceholderPage";
import { LeadForm } from "@/components/site/LeadForm";
import { whatsappLink } from "@/data/site";
import { btn } from "@/components/site/ui";

export const Route = createFileRoute("/solicite-um-orcamento")({
  head: () => meta("Solicite um orçamento", "Peça seu orçamento gratuito de higienização profissional para empresas em São Paulo, ABC e Alphaville."),
  component: () => (
    <>
      <PageHero eyebrow="ORÇAMENTO GRATUITO" title="Solicite um orçamento" intro="Conte sobre o seu espaço. Nossa equipe retorna com uma proposta adequada à rotina da sua empresa." crumbs={[{ label: "Solicite um orçamento" }]} />
      <section className="container-site grid gap-10 py-16 lg:grid-cols-[2fr_1fr]">
        <LeadForm origem="Página de orçamento" />
        <aside className="rounded-2xl bg-surface p-6">
          <h2 className="text-xl font-bold text-navy">Prefere conversar?</h2>
          <p className="mt-2 text-muted-foreground">Fale direto com a equipe pelo WhatsApp.</p>
          <a href={whatsappLink("Solicite um orçamento")} target="_blank" rel="noreferrer" className={btn("whatsapp", "mt-5 w-full")}>Fale com a equipe</a>
          <p className="mt-6 text-sm text-muted-foreground">Atendemos São Paulo, ABC e Alphaville.</p>
        </aside>
      </section>
    </>
  ),
});
