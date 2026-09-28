import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ChevronDown, Menu, MessageCircle, X, FileText } from "lucide-react";
import mascote from "@/assets/mascote.png";
import { segmentos, solucoes, whatsappLink } from "@/data/site";
import { Logo, btn, Validar } from "./ui";
import { cn } from "@/lib/utils";

const simpleLinks = [
  { to: "/clientes-e-resultados", label: "Clientes e resultados" },
  { to: "/quem-somos", label: "Quem somos" },
  { to: "/blog", label: "Conteúdos" },
  { to: "/residencial", label: "Residencial" },
  { to: "/solicite-um-orcamento", label: "Contato" },
] as const;

function Mega({ label, base, items }: { label: string; base: "solucoes" | "segmentos"; items: typeof solucoes }) {
  return (
    <div className="group relative">
      <Link to={base === "solucoes" ? "/solucoes" : "/segmentos"} className="flex items-center gap-1 whitespace-nowrap py-6 text-sm font-medium text-graphite hover:text-navy">
        {label} <ChevronDown className="h-4 w-4 transition group-hover:rotate-180" />
      </Link>
      <div className="invisible absolute left-0 top-full z-50 w-[34rem] max-w-[90vw] rounded-2xl border bg-popover p-4 opacity-0 shadow-lift transition group-hover:visible group-hover:opacity-100">
        <div className="grid grid-cols-2 gap-1">
          {items.map((i, idx) => (
            <a key={i.slug} href={`/${base}/${i.slug}`} className={cn("rounded-lg px-3 py-2.5 text-sm hover:bg-accent", idx === 0 && base === "solucoes" && "col-span-2 bg-accent/60")}>
              <span className="font-semibold text-navy">{i.title}</span>
              {idx === 0 && base === "solucoes" && <span className="ml-2 rounded bg-cta px-1.5 py-0.5 text-[0.65rem] font-bold text-cta-foreground">DESTAQUE</span>}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Header({ page }: { page: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 8);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => setOpen(false), [page]);

  return (
    <header className={cn("sticky top-0 z-40 bg-background transition-shadow", scrolled && "shadow-soft")}>
      <div className="container-site flex items-center justify-between gap-4">
        <div className="py-3"><Logo /></div>
        <nav className="hidden items-center gap-3 lg:flex xl:gap-5" aria-label="Principal">
          <Link to="/" className="whitespace-nowrap text-sm font-medium text-graphite hover:text-navy">Início</Link>
          <Mega label="Soluções" base="solucoes" items={solucoes} />
          <Mega label="Segmentos" base="segmentos" items={segmentos} />
          {simpleLinks.map((l) => (
            <Link key={l.to} to={l.to} className="whitespace-nowrap text-sm font-medium text-graphite hover:text-navy">{l.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/solicite-um-orcamento" className={btn("primary", "hidden sm:inline-flex px-5 py-3 whitespace-nowrap")}>
            <span className="hidden 2xl:inline">Solicite um orçamento</span>
            <span className="2xl:hidden">Orçamento</span>
          </Link>
          <button className="rounded-lg p-2 lg:hidden" aria-label="Abrir menu" onClick={() => setOpen(true)}><Menu className="h-6 w-6 text-navy" /></button>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-background lg:hidden">
          <div className="container-site flex items-center justify-between py-3">
            <Logo />
            <button aria-label="Fechar menu" onClick={() => setOpen(false)} className="p-2"><X className="h-6 w-6 text-navy" /></button>
          </div>
          <nav className="container-site space-y-2 pb-28" aria-label="Menu móvel">
            <Link to="/" className="block py-3 font-display text-lg font-semibold">Início</Link>
            <details open className="rounded-xl bg-surface p-3">
              <summary className="cursor-pointer font-display text-lg font-semibold text-navy">Soluções para empresas</summary>
              <div className="mt-2 grid">{solucoes.map((s) => <a key={s.slug} href={`/solucoes/${s.slug}`} className="py-2 text-sm">{s.title}</a>)}</div>
            </details>
            <details className="rounded-xl bg-surface p-3">
              <summary className="cursor-pointer font-display text-lg font-semibold text-navy">Segmentos atendidos</summary>
              <div className="mt-2 grid">{segmentos.map((s) => <a key={s.slug} href={`/segmentos/${s.slug}`} className="py-2 text-sm">{s.title}</a>)}</div>
            </details>
            {simpleLinks.map((l) => <Link key={l.to} to={l.to} className="block py-3 font-display text-lg font-semibold">{l.label}</Link>)}
          </nav>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-site grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <Logo light />
          <p className="mt-4 font-display text-lg font-semibold">De empresa para empresa, com cuidado em cada detalhe!</p>
          <img src={mascote} alt="Mascote Neide Maria" width={120} height={114} loading="lazy" className="mt-6 h-24 w-auto" />
        </div>
        <FooterCol title="Soluções" items={solucoes.slice(0, 6).map((s) => ({ label: s.title, href: `/solucoes/${s.slug}` }))} />
        <FooterCol title="Segmentos" items={segmentos.slice(0, 6).map((s) => ({ label: s.title, href: `/segmentos/${s.slug}` }))} />
        <FooterCol title="Empresa" items={[
          { label: "Quem somos", href: "/quem-somos" }, { label: "Clientes e resultados", href: "/clientes-e-resultados" },
          { label: "Conteúdos", href: "/blog" }, { label: "Regiões atendidas", href: "/regioes" }, { label: "Residencial", href: "/residencial" },
        ]} />
        <div>
          <h3 className="eyebrow text-cta">Contato</h3>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/85">
            <li><a href={whatsappLink("Rodapé")} className="hover:underline">WhatsApp (11) 98045-1944</a></li>
            <li>São Paulo, ABC e Alphaville</li>
            <li>Instagram <Validar>@neidemarialimpeza</Validar></li>
            <li>CNPJ <Validar>CNPJ</Validar></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy-foreground/15">
        <div className="container-site flex flex-col gap-2 py-6 pb-24 text-xs text-navy-foreground/70 md:flex-row md:justify-between md:pb-6">
          <span>© {new Date().getFullYear()} Neide Maria Limpeza. Site por Scase.</span>
          <span className="flex gap-4">
            <a href="/politica-de-privacidade" className="hover:underline">Política de Privacidade</a>
            <a href="/politica-de-cookies" className="hover:underline">Política de Cookies</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="eyebrow text-cta">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-navy-foreground/85">
        {items.map((i) => <li key={i.href}><a href={i.href} className="hover:underline">{i.label}</a></li>)}
      </ul>
    </div>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const page = path === "/" ? "Início" : path;
  return (
    <div className="flex min-h-screen flex-col">
      <Header page={path} />
      <main className="flex-1">{children}</main>
      <Footer />
      <a href={whatsappLink(page)} target="_blank" rel="noreferrer" aria-label="Fale com a equipe pelo WhatsApp"
        className="fixed bottom-20 right-4 z-40 hidden h-16 w-16 items-center justify-center rounded-full bg-whatsapp shadow-lift ring-4 ring-background transition hover:scale-105 md:bottom-6 md:flex">
        <img src={mascote} alt="" width={52} height={50} className="h-12 w-auto" />
        <MessageCircle className="absolute -right-1 -top-1 h-6 w-6 rounded-full bg-whatsapp p-1 text-whatsapp-foreground" />
      </a>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t bg-background p-2 md:hidden">
        <Link to="/solicite-um-orcamento" className={btn("primary", "py-3")}><FileText className="h-4 w-4" /> Orçamento</Link>
        <a href={whatsappLink(page)} target="_blank" rel="noreferrer" className={btn("whatsapp", "py-3")}><MessageCircle className="h-4 w-4" /> WhatsApp</a>
      </div>
    </div>
  );
}
