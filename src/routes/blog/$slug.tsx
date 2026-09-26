import { createFileRoute, notFound } from "@tanstack/react-router";
import { PlaceholderPage, meta } from "@/components/site/PlaceholderPage";
import { posts } from "@/data/site";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const item = posts.find((i) => i.slug === params.slug);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => meta(loaderData?.title ?? "Neide Maria", loaderData?.short ?? ""),
  component: Page,
});

function Page() {
  const item = Route.useLoaderData();
  return (
    <PlaceholderPage eyebrow="CONTEÚDO" title={item.title} intro={item.short} crumbs={[{ label: "blog", to: "/blog" }, { label: item.title }]} />
  );
}
