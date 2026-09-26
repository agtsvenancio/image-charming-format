import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage, meta, ItemGrid } from "@/components/site/PlaceholderPage";
import { solucoes } from "@/data/site";
export const Route = createFileRoute("/solucoes/")({
  head: () => meta("Soluções para empresas", "Higienização profissional de carpetes, estofados, cadeiras, cortinas e mais para ambientes corporativos."),
  component: () => (
    <PlaceholderPage eyebrow="SOLUÇÕES PARA EMPRESAS" title="Soluções para empresas" crumbs={[{ label: "Soluções para empresas" }]}><ItemGrid base="solucoes" items={solucoes} /></PlaceholderPage>
  ),
});
