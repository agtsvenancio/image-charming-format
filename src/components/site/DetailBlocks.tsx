import { Link } from "@tanstack/react-router";
import { btn, SectionHeader, Validar } from "./ui";
import type { Faq } from "@/data/solucoes";

export function FaqBlock({ faq }: { faq: Faq[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.filter((f) => !f.resposta.includes("[[validar")).map((f) => ({ "@type": "Question", name: f.pergunta, acceptedAnswer: { "@type": "Answer", text: f.resposta } })),
  };
  return (
    <section className="container-site py-16">
      <SectionHeader eyebrow="PERGUNTAS FREQUENTES" title="Dúvidas comuns" />
      <div className="mt-8 max-w-3xl divide-y rounded-2xl border bg-card">
        {faq.map((f) => (
          <details key={f.pergunta} className="group p-5">
            <summary className="cursor-pointer list-none font-display text-lg font-semibold text-graphite marker:hidden">
              <span className="flex items-center justify-between gap-4">{f.pergunta}<span className="text-navy transition group-open:rotate-45">+</span></span>
            </summary>
            <p className="mt-3 text-muted-foreground">{f.resposta}</p>
          </details>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}

export function MetodoMini() {
  const p = [["Química", "bg-m-green"], ["Temperatura", "bg-m-red"], ["Tempo", "bg-m-navy"], ["Ação mecânica", "bg-cta"]];
  return (
    <div className="rounded-2xl bg-navy p-6 text-navy-foreground">
      <p className="eyebrow text-cta">MÉTODO NEIDE MARIA</p>
      <p className="mt-2 text-navy-foreground/80">Cada serviço equilibra os 4 fatores do Círculo de Sinner:</p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {p.map(([n, c]) => (
          <div key={n} className="flex items-center gap-2 font-display font-semibold"><span className={`h-3 w-3 rounded-full ${c}`} />{n}</div>
        ))}
      </div>
    </div>
  );
}

export function ProvaBlock({ imagem, legenda, antesDepois }: { imagem?: string | undefined; legenda?: string | undefined; antesDepois?: boolean | undefined }) {
  return (
    <section className="bg-muted/50 py-16">
      <div className="container-site grid items-center gap-10 lg:grid-cols-2">
        {imagem ? (
          <figure>
            <img src={imagem} alt={legenda ?? "Serviço realizado"} loading="lazy" className="max-h-[520px] w-full rounded-2xl object-cover shadow-soft" />
            <figcaption className="mt-3 text-sm text-muted-foreground">{antesDepois && <strong className="text-graphite">Acima: antes · Abaixo: depois. </strong>}{legenda}</figcaption>
          </figure>
        ) : <div className="rounded-2xl border border-dashed p-10 text-center text-muted-foreground">Foto real em breve <Validar>foto</Validar></div>}
        <div>
          <SectionHeader eyebrow="PROVA REAL" title="Trabalho feito pela nossa equipe" subtitle="Fotos reais de serviços realizados pela Neide Maria Limpeza." />
          <blockquote className="mt-6 rounded-2xl border-l-4 border-cta bg-card p-5 italic text-muted-foreground">
            "Depoimento de cliente deste tipo de serviço." <Validar>depoimento autorizado</Validar>
          </blockquote>
          <p className="mt-4 text-sm text-muted-foreground">Estudo de caso: <Validar>cliente, problema, resultado</Validar></p>
          <Link to="/clientes-e-resultados" className={btn("outline", "mt-6")}>Ver mais resultados</Link>
        </div>
      </div>
    </section>
  );
}
