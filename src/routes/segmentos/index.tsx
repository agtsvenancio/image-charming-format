import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage, meta, ItemGrid } from "@/components/site/PlaceholderPage";
import { segmentos } from "@/data/site";
export const Route = createFileRoute("/segmentos/")({
  head: () => meta("Segmentos atendidos", "Higienização profissional para escritórios, clínicas, hotéis, escolas, coworkings e outros ambientes corporativos."),
  component: () => (
    <PlaceholderPage eyebrow="SEGMENTOS ATENDIDOS" title="Segmentos atendidos" crumbs={[{ label: "Segmentos atendidos" }]}><ItemGrid base="segmentos" items={segmentos} /></PlaceholderPage>
  ),
});
