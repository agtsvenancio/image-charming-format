import { createFileRoute, notFound } from "@tanstack/react-router";
import { PlaceholderPage, meta } from "@/components/site/PlaceholderPage";
import { solucoes } from "@/data/site";

export const Route = createFileRoute("/solucoes/$slug")({
  loader: ({ params }) => {
    const item = solucoes.find((i) => i.slug === params.slug);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => meta(loaderData?.title ?? "Neide Maria", loaderData?.short ?? ""),
  component: Page,
});

function Page() {
  const item = Route.useLoaderData();
  return (
    <PlaceholderPage eyebrow="SOLUÇÃO" title={item.title} intro={item.short} crumbs={[{ label: "solucoes", to: "/solucoes" }, { label: item.title }]} />
  );
}
