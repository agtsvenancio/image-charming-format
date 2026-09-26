import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage, meta, ItemGrid } from "@/components/site/PlaceholderPage";
import { posts } from "@/data/site";
export const Route = createFileRoute("/blog/")({
  head: () => meta("Conteúdos", "Artigos sobre higienização profissional e manutenção de ambientes corporativos."),
  component: () => (
    <PlaceholderPage eyebrow="CONTEÚDOS" title="Conteúdos" crumbs={[{ label: "Conteúdos" }]}><ItemGrid base="blog" items={posts} /></PlaceholderPage>
  ),
});
