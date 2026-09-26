import { createFileRoute, notFound } from "@tanstack/react-router";
import { PlaceholderPage, meta } from "@/components/site/PlaceholderPage";
import { residencial } from "@/data/site";

export const Route = createFileRoute("/residencial/$slug")({
  loader: ({ params }) => {
    const item = residencial.find((i) => i.slug === params.slug);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => meta(loaderData?.title ?? "Neide Maria", loaderData?.short ?? ""),
  component: Page,
});

function Page() {
  const item = Route.useLoaderData();
  return (
    <PlaceholderPage eyebrow="RESIDENCIAL" title={item.title} intro={item.short} crumbs={[{ label: "residencial", to: "/residencial" }, { label: item.title }]} />
  );
}
