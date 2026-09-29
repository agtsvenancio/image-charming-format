import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { segmentos, solucoes } from "@/data/site";
import { btn } from "./ui";

const field = "w-full rounded-xl border border-input bg-background px-4 py-3 text-[0.95rem] focus:outline-none focus:ring-2 focus:ring-ring";

function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export function LeadForm({ compact = false, origem = "site", solucao = "", segmento = "" }: { compact?: boolean; origem?: string; solucao?: string; segmento?: string }) {
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    toast.success("Pedido recebido! Nossa equipe entrará em contato.");
    (e.target as HTMLFormElement).reset();
    setPhone("");
  }

  if (sent) {
    return (
      <div className="rounded-2xl bg-card p-8 text-center shadow-soft">
        <h3 className="text-2xl font-bold text-navy">Obrigado pelo contato!</h3>
        <p className="mt-2 text-muted-foreground">Recebemos seu pedido de orçamento ({origem}). Em breve falaremos com você.</p>
        <button className={btn("outline", "mt-6")} onClick={() => setSent(false)}>Enviar outro pedido</button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl bg-card p-6 md:p-8 shadow-soft sm:grid-cols-2">
      <input required name="nome" placeholder="Nome*" aria-label="Nome" className={field} />
      <input required name="empresa" placeholder="Empresa*" aria-label="Empresa" className={field} />
      <input required name="telefone" inputMode="tel" placeholder="Telefone / WhatsApp*" aria-label="Telefone ou WhatsApp" value={phone} onChange={(e) => setPhone(maskPhone(e.target.value))} className={field} />
      {!compact && <input required type="email" name="email" placeholder="E-mail*" aria-label="E-mail" className={field} />}
      {!compact && <input required name="cidade" placeholder="Cidade / bairro*" aria-label="Cidade ou bairro" className={field} />}
      {!compact && (
        <select name="segmento" aria-label="Segmento" className={field} defaultValue={segmento}>
          <option value="" disabled>Segmento</option>
          {segmentos.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
          <option>Outro</option>
        </select>
      )}
      <select name="solucao" aria-label="Solução de interesse" className={`${field} ${compact ? "" : "sm:col-span-2"}`} defaultValue={solucao}>
        <option value="" disabled>Solução de interesse</option>
        {solucoes.map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
        <option>Residencial</option>
      </select>
      {!compact && <textarea name="mensagem" rows={3} placeholder="Mensagem" aria-label="Mensagem" className={`${field} sm:col-span-2`} />}
      <label className="flex items-start gap-3 text-sm text-muted-foreground sm:col-span-2">
        <input required type="checkbox" className="mt-1 h-4 w-4 accent-[var(--navy)]" />
        <span>Concordo com o uso dos meus dados para contato, conforme a <a href="/politica-de-privacidade" className="underline text-navy">Política de Privacidade</a>.*</span>
      </label>
      <button type="submit" className={btn("primary", "sm:col-span-2")}>Solicite um orçamento</button>
    </form>
  );
}
