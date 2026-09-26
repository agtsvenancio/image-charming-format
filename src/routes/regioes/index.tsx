import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage, meta, ItemGrid } from "@/components/site/PlaceholderPage";
import { regioes } from "@/data/site";
export const Route = createFileRoute("/regioes/")({
  head: () => meta("Regiões atendidas", "Atendimento em São Paulo, ABC e Alphaville, Barueri e Osasco."),
  component: () => (
    <PlaceholderPage eyebrow="ÁREA ATENDIDA" title="Regiões atendidas" crumbs={[{ label: "Regiões atendidas" }]}><ItemGrid base="regioes" items={regioes} /></PlaceholderPage>
  ),
});
