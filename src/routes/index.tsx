import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  BadgeCheck, MapPin, Building2, Stethoscope, Hotel, GraduationCap, Store, Users, Factory, Landmark,
  FlaskConical, Thermometer, Clock, Cog, Wrench, ShieldCheck, CalendarClock, Handshake, FileCheck2, Truck, Star, ArrowRight,
} from "lucide-react";
import fotoExtratora from "@/assets/foto-extratora.jpg";
import fotoEnceradeira from "@/assets/foto-enceradeira.jpg";
import fotoCarpete from "@/assets/foto-carpete.jpg";
import selo from "@/assets/selo-metodo.png";
import mascote from "@/assets/mascote.png";
import { posts, solucoes, segmentos, whatsappLink } from "@/data/site";
import { SectionHeader, Validar, btn } from "@/components/site/ui";
import { LeadForm } from "@/components/site/LeadForm";
import { meta } from "@/components/site/PlaceholderPage";

export const Route = createFileRoute("/")({
  head: () => meta("Higienização profissional para empresas", "Higienização de carpetes corporativos, estofados, cadeiras e cortinas para empresas em São Paulo, ABC e Alphaville. Solicite um orçamento."),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Solucoes />
      <Segmentos />
      <Metodo />
      <PorQue />
      <ComoFunciona />
      <Clientes />
      <Planos />
      <Conteudos />
      <section className="border-t bg-surface">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-6 text-sm sm:flex-row">
          <span className="text-muted-foreground">Atende também residências.</span>
          <Link to="/residencial" className="font-display font-semibold text-navy hover:underline">Conheça a linha residencial →</Link>
        </div>
      </section>
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep">
      <img src={fotoExtratora} alt="Profissional da Neide Maria higienizando carpete de escritório corporativo com extratora" width={1400} height={1867} className="absolute inset-0 -z-10 h-full w-full object-cover object-[70%_40%]" fetchPriority="high" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/30" />
      <div className="container-site py-24 md:py-32 lg:py-40">
        <div className="max-w-2xl text-navy-foreground">
          <p className="eyebrow text-cta">Higienização profissional B2B</p>
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">Higienização profissional para ambientes corporativos</h1>
          <p className="mt-6 text-lg text-navy-foreground/85 md:text-xl">Soluções para carpetes, estofados, cadeiras, cortinas e outros itens que fazem parte da rotina da sua empresa, com atendimento em São Paulo, ABC e Alphaville.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/solicite-um-orcamento" className={btn("primary")}>Solicite um orçamento</Link>
            <a href={whatsappLink("Home — hero")} target="_blank" rel="noreferrer" className={btn("ghostLight")}>Fale com a equipe</a>
          </div>
          <p className="mt-10 inline-flex items-center gap-3 rounded-full border border-navy-foreground/20 bg-navy-foreground/10 px-4 py-2 text-sm backdrop-blur">
            <BadgeCheck className="h-4 w-4 text-cta" /> De empresa para empresa, com cuidado em cada detalhe!
          </p>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const items = [
    { icon: FileCheck2, label: "Orçamento gratuito" },
    { icon: Truck, label: "Atendimento no local" },
    { icon: MapPin, label: "São Paulo, ABC e Alphaville" },
    { icon: ShieldCheck, label: <Validar>indicador — ex. anos de experiência</Validar> },
  ];
  return (
    <section className="border-b bg-background">
      <div className="container-site grid grid-cols-2 gap-6 py-8 lg:grid-cols-4">
        {items.map((i, k) => (
          <div key={k} className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent"><i.icon className="h-5 w-5 text-navy" /></span>
            <span className="font-display font-semibold text-graphite">{i.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Solucoes() {
  const destaque = solucoes[0]!;
  const grid = [1, 2, 5, 7, 8].map((i) => solucoes[i]!);
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-site">
        <SectionHeader eyebrow="Soluções para empresas" title="O cuidado técnico que a rotina corporativa exige" subtitle="Cada solução é planejada conforme o material, o fluxo de pessoas e a operação do seu espaço." />
        <a href={`/solucoes/${destaque.slug}`} className="group mt-12 grid overflow-hidden rounded-2xl bg-navy text-navy-foreground shadow-lift md:grid-cols-2">
          <img src={fotoEnceradeira} alt="Enceradeira profissional higienizando carpete corporativo" width={1200} height={1600} loading="lazy" className="h-72 w-full object-cover md:h-full" />
          <div className="flex flex-col justify-center p-8 md:p-12">
            <span className="w-fit rounded-md bg-cta px-2 py-1 text-xs font-bold text-cta-foreground">SERVIÇO EM DESTAQUE</span>
            <h3 className="mt-4 text-3xl font-extrabold md:text-4xl">{destaque.title}</h3>
            <p className="mt-4 text-lg text-navy-foreground/80">{destaque.short}</p>
            <span className="mt-8 inline-flex items-center gap-2 font-display font-semibold text-cta">Conheça a solução <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
          </div>
        </a>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {grid.map((s) => (
            <a key={s.slug} href={`/solucoes/${s.slug}`} className="group flex flex-col rounded-2xl border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
              <h3 className="text-xl font-bold text-navy">{s.title.replace("Higienização de ", "").replace(/^\w/, (c) => c.toUpperCase())}</h3>
              <p className="mt-2 flex-1 text-muted-foreground">{s.short}</p>
              <span className="mt-5 inline-flex items-center gap-2 font-display font-semibold text-graphite group-hover:text-navy">Conheça a solução <ArrowRight className="h-4 w-4" /></span>
            </a>
          ))}
        </div>
        <Link to="/solucoes" className="mt-8 inline-flex items-center gap-2 font-display font-semibold text-navy hover:underline">Ver todas as soluções <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </section>
  );
}

function Segmentos() {
  const icons = [Building2, Stethoscope, Landmark, Hotel, GraduationCap, Store, Users, Factory];
  const names = ["Escritórios", "Clínicas", "Condomínios empresariais", "Hotéis", "Escolas", "Comércios", "Coworkings", "Indústrias"];
  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <SectionHeader eyebrow="Segmentos atendidos" title="Atendemos empresas de diferentes setores" align="center" />
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {segmentos.slice(0, 8).map((s, i) => {
            const Icon = icons[i]!;
            return (
              <a key={s.slug} href={`/segmentos/${s.slug}`} className="group rounded-2xl border bg-card p-6 text-center transition hover:border-navy hover:shadow-soft">
                <Icon className="mx-auto h-8 w-8 text-navy transition group-hover:scale-110" />
                <h3 className="mt-4 font-display font-semibold text-graphite">{names[i]}</h3>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Metodo() {
  const pilares = [
    { icon: FlaskConical, name: "Química", text: "Produtos selecionados conforme a fibra e o tipo de sujidade.", color: "bg-m-green", pos: "lg:col-start-1 lg:row-start-1" },
    { icon: Thermometer, name: "Temperatura", text: "Temperatura ajustada para potencializar a ação sem agredir o material.", color: "bg-m-red", pos: "lg:col-start-3 lg:row-start-1" },
    { icon: Clock, name: "Tempo", text: "Tempo de ação calibrado para cada etapa do processo.", color: "bg-m-navy", pos: "lg:col-start-1 lg:row-start-2" },
    { icon: Cog, name: "Ação mecânica", text: "Extratoras e enceradeiras profissionais para remoção profunda.", color: "bg-m-orange", pos: "lg:col-start-3 lg:row-start-2" },
  ];
  return (
    <section className="relative overflow-hidden bg-navy-deep py-20 text-navy-foreground md:py-28">
      <div className="container-site">
        <SectionHeader light align="center" eyebrow="O Método Neide Maria" title="Quatro fatores técnicos, um resultado equilibrado" subtitle={<>Baseado no Círculo de Sinner, o método equilibra os quatro fatores conforme o material e o nível de sujidade. <Validar>descrição oficial do método</Validar></>} />
        <div className="mt-14 grid items-center gap-6 lg:grid-cols-3 lg:grid-rows-2">
          {pilares.map((p) => (
            <div key={p.name} className={`rounded-2xl border border-navy-foreground/10 bg-navy-foreground/5 p-6 backdrop-blur ${p.pos}`}>
              <span className={`flex h-12 w-12 items-center justify-center rounded-full ${p.color}`}><p.icon className="h-6 w-6 text-navy-foreground" /></span>
              <h3 className="mt-4 text-xl font-bold">{p.name}</h3>
              <p className="mt-2 text-navy-foreground/75">{p.text}</p>
            </div>
          ))}
          <div className="order-first flex justify-center lg:order-none lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <div className="rounded-full bg-background p-6 shadow-lift">
              <img src={selo} alt="Selo do Método Neide Maria com os quatro fatores" width={280} height={280} loading="lazy" className="h-56 w-56 md:h-72 md:w-72" />
            </div>
          </div>
        </div>
        <p className="mt-12 text-center font-display text-2xl font-semibold">Cada superfície recebe o equilíbrio certo entre os quatro fatores.</p>
      </div>
    </section>
  );
}

function PorQue() {
  const items = [
    { icon: MapPin, t: "Atendimento no local do cliente" },
    { icon: Wrench, t: "Equipamentos e processos profissionais: extratoras e enceradeiras industriais" },
    { icon: CalendarClock, t: "Cuidado com a operação e a rotina do espaço" },
    { icon: Building2, t: "Experiência em ambientes corporativos" },
    { icon: Handshake, t: "Manutenção recorrente e relacionamento B2B" },
    { icon: FileCheck2, t: "Orçamento gratuito" },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <img src={fotoCarpete} alt="Higienização de carpete de sisal em sala corporativa com enceradeira" width={1200} height={1600} loading="lazy" className="h-[28rem] w-full rounded-2xl object-cover shadow-lift lg:h-[36rem]" />
        <div>
          <SectionHeader eyebrow="Por que escolher" title="Uma parceira técnica para o seu ambiente de trabalho" />
          <ul className="mt-8 space-y-4">
            {items.map((i) => (
              <li key={i.t} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent"><i.icon className="h-5 w-5 text-navy" /></span>
                <span className="pt-2 text-graphite">{i.t}</span>
              </li>
            ))}
          </ul>
          <Link to="/solicite-um-orcamento" className={btn("primary", "mt-8")}>Solicite um orçamento</Link>
        </div>
      </div>
    </section>
  );
}

function ComoFunciona() {
  const steps = [
    ["Contato", "Você fala com a equipe pelo formulário ou WhatsApp."],
    ["Diagnóstico", "Avaliamos materiais, fluxo e nível de sujidade."],
    ["Proposta", "Enviamos uma proposta adequada à sua rotina."],
    ["Execução", "Equipe uniformizada executa no seu local."],
    ["Orientação de manutenção", "Indicamos cuidados para conservar o resultado."],
  ];
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-site">
        <SectionHeader eyebrow="Como funciona" title="Do primeiro contato à manutenção" subtitle={<Validar>etapas reais</Validar>} />
        <ol className="mt-12 grid gap-6 md:grid-cols-5">
          {steps.map(([t, d], i) => (
            <li key={t} className="relative">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-navy font-display text-lg font-bold text-navy-foreground">{i + 1}</span>
              {i < steps.length - 1 && <span className="absolute left-14 right-0 top-6 hidden h-0.5 bg-border md:block" />}
              <h3 className="mt-4 text-lg font-bold text-graphite">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Clientes() {
  const [pos, setPos] = useState(50);
  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <SectionHeader eyebrow="Clientes e resultados" title="Empresas que confiam no nosso cuidado" subtitle={<Validar>logos e depoimentos autorizados</Validar>} />
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex h-20 items-center justify-center rounded-xl bg-muted text-sm text-muted-foreground">Logo cliente</div>
          ))}
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[1, 2, 3].map((n) => (
            <figure key={n} className="rounded-2xl border bg-card p-6 shadow-soft">
              <div className="flex gap-1">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-cta text-cta" />)}</div>
              <blockquote className="mt-4 text-graphite">"Depoimento do cliente a ser inserido após autorização."</blockquote>
              <figcaption className="mt-4 text-sm"><strong>Nome do cliente</strong> · Empresa <Validar>depoimento {n}</Validar></figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-12">
          <h3 className="text-xl font-bold text-graphite">Antes e depois <Validar>fotos reais antes/depois</Validar></h3>
          <div className="relative mt-4 h-72 overflow-hidden rounded-2xl md:h-96">
            <div className="absolute inset-0 flex items-center justify-center bg-muted-foreground/40 font-display text-2xl font-bold text-background">ANTES</div>
            <div className="absolute inset-y-0 left-0 flex items-center justify-center overflow-hidden bg-accent font-display text-2xl font-bold text-navy" style={{ width: `${pos}%` }}>DEPOIS</div>
            <div className="absolute inset-y-0 w-1 bg-background" style={{ left: `${pos}%` }} />
            <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(+e.target.value)} aria-label="Comparar antes e depois" className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Planos() {
  return (
    <section className="container-site pb-20 md:pb-28">
      <div className="grid items-center gap-8 overflow-hidden rounded-3xl bg-navy p-8 text-navy-foreground md:grid-cols-[1.4fr_1fr] md:p-14">
        <div>
          <p className="eyebrow text-cta">Planos e recorrência</p>
          <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">Manutenção programada para empresas</h2>
          <ul className="mt-6 grid gap-2 text-navy-foreground/85 sm:grid-cols-3">
            <li>✓ Previsibilidade</li><li>✓ Conservação contínua</li><li>✓ Agenda compatível com a operação</li>
          </ul>
        </div>
        <div className="md:text-right">
          <a href="/solucoes/planos-de-manutencao-e-contratos" className={btn("primary")}>Peça uma avaliação</a>
        </div>
      </div>
    </section>
  );
}

function Conteudos() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-site">
        <SectionHeader eyebrow="Conteúdos" title="Conhecimento para quem cuida de ambientes corporativos" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <a key={p.slug} href={`/blog/${p.slug}`} className="group rounded-2xl bg-card p-6 shadow-soft transition hover:-translate-y-1">
              <span className="eyebrow text-navy">{p.tag}</span>
              <h3 className="mt-3 text-xl font-bold text-graphite group-hover:text-navy">{p.title}</h3>
              <p className="mt-2 text-muted-foreground">{p.short}</p>
              <span className="mt-4 inline-block font-display font-semibold text-navy">Ler artigo →</span>
            </a>
          ))}
        </div>

        <div id="orcamento" className="mt-20 grid items-start gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Orçamento gratuito" title="Vamos cuidar do seu ambiente corporativo?" subtitle="Preencha os dados e nossa equipe retorna com uma proposta. Atendemos São Paulo, ABC e Alphaville." />
            <a href={whatsappLink("Home — conversão final")} target="_blank" rel="noreferrer" className={btn("whatsapp", "mt-8")}>Fale com a equipe no WhatsApp</a>
            <img src={mascote} alt="Mascote Neide Maria" width={200} height={190} loading="lazy" className="mt-10 hidden h-40 w-auto lg:block" />
          </div>
          <LeadForm compact origem="Home" />
        </div>
      </div>
    </section>
  );
}
