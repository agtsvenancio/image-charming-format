import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage, meta } from "@/components/site/PlaceholderPage";

export const Route = createFileRoute("/quem-somos")({
  head: () => meta("Quem somos", "Conheça a Neide Maria Limpeza, especialista em higienização de ambientes corporativos."),
  component: () => (
    <PlaceholderPage eyebrow="QUEM SOMOS" title="Quem somos" crumbs={[{ label: "Quem somos" }]}></PlaceholderPage>
  ),
});
