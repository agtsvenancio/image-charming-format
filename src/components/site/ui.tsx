import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import selo from "@/assets/selo-metodo.png";
import { cn } from "@/lib/utils";

type BtnVariant = "primary" | "secondary" | "outline" | "whatsapp" | "ghostLight";
const variants: Record<BtnVariant, string> = {
  primary: "bg-cta text-cta-foreground hover:brightness-105 shadow-soft",
  secondary: "bg-navy text-navy-foreground hover:bg-navy-deep",
  outline: "border-2 border-navy text-navy hover:bg-navy hover:text-navy-foreground",
  whatsapp: "bg-whatsapp text-whatsapp-foreground hover:brightness-105",
  ghostLight: "border-2 border-navy-foreground/70 text-navy-foreground hover:bg-navy-foreground/10",
};
export function btn(variant: BtnVariant = "primary", extra?: string) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-display font-semibold text-[0.95rem] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    variants[variant],
    extra,
  );
}

export function SectionHeader({
  eyebrow, title, subtitle, align = "left", light = false,
}: { eyebrow: string; title: ReactNode; subtitle?: ReactNode; align?: "left" | "center"; light?: boolean }) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className={cn("eyebrow", light ? "text-cta" : "text-navy")}>{eyebrow}</p>
      <h2 className={cn("mt-3 text-3xl md:text-4xl font-extrabold leading-tight tracking-tight", light ? "text-navy-foreground" : "text-graphite")}>{title}</h2>
      {subtitle && <p className={cn("mt-4 text-lg", light ? "text-navy-foreground/80" : "text-muted-foreground")}>{subtitle}</p>}
    </div>
  );
}

export function Validar({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-block rounded-md bg-validate px-2 py-0.5 text-xs font-medium text-graphite", className)}>
      [[validar: {children}]]
    </span>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label="Neide Maria Limpeza — início">
      <img src={selo} alt="" width={44} height={44} className="h-11 w-11" />
      <span className={cn("flex flex-col leading-none font-display", light ? "text-navy-foreground" : "text-graphite")}>
        <span className="text-[0.6rem] font-light tracking-[0.3em]">MÉTODO</span>
        <span className="text-lg font-extrabold tracking-tight">Neide Maria</span>
        <span className="text-[0.6rem] font-light tracking-[0.3em]">LIMPEZA</span>
      </span>
    </Link>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Você está em" className="text-sm text-navy-foreground/70">
      <Link to="/" className="hover:text-navy-foreground">Início</Link>
      {items.map((i) => (
        <span key={i.label}> / {i.to ? <a href={i.to} className="hover:text-navy-foreground">{i.label}</a> : <span className="text-navy-foreground">{i.label}</span>}</span>
      ))}
    </nav>
  );
}
