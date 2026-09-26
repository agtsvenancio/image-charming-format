import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage, meta } from "@/components/site/PlaceholderPage";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => meta("Política de Privacidade", "Como a Neide Maria Limpeza trata seus dados pessoais."),
  component: () => (
    <PlaceholderPage eyebrow="LGPD" title="Política de Privacidade" crumbs={[{ label: "Política de Privacidade" }]}></PlaceholderPage>
  ),
});
