import { createFileRoute, notFound } from "@tanstack/react-router";
import { PlaceholderPage, meta } from "@/components/site/PlaceholderPage";
import { segmentos } from "@/data/site";

export const Route = createFileRoute("/segmentos/$slug")({
  loader: ({ params }) => {
    const item = segmentos.find((i) => i.slug === params.slug);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => meta(loaderData?.title ?? "Neide Maria", loaderData?.short ?? ""),
  component: Page,
});

function Page() {
  const item = Route.useLoaderData();
  return (
    <PlaceholderPage eyebrow="SEGMENTO" title={item.title} intro={item.short} crumbs={[{ label: "segmentos", to: "/segmentos" }, { label: item.title }]} />
  );
}
