import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage, meta } from "@/components/site/PlaceholderPage";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => meta("Política de Cookies", "Como usamos cookies no site da Neide Maria Limpeza."),
  component: () => (
    <PlaceholderPage eyebrow="LGPD" title="Política de Cookies" crumbs={[{ label: "Política de Cookies" }]}></PlaceholderPage>
  ),
});
