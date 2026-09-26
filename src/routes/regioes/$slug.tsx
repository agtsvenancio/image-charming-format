import { createFileRoute, notFound } from "@tanstack/react-router";
import { PlaceholderPage, meta } from "@/components/site/PlaceholderPage";
import { regioes } from "@/data/site";

export const Route = createFileRoute("/regioes/$slug")({
  loader: ({ params }) => {
    const item = regioes.find((i) => i.slug === params.slug);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => meta(loaderData?.title ?? "Neide Maria", loaderData?.short ?? ""),
  component: Page,
});

function Page() {
  const item = Route.useLoaderData();
  return (
    <PlaceholderPage eyebrow="REGIÃO" title={item.title} intro={item.short} crumbs={[{ label: "regioes", to: "/regioes" }, { label: item.title }]} />
  );
}
