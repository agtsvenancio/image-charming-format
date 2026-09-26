import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage, meta, ItemGrid } from "@/components/site/PlaceholderPage";
import { residencial } from "@/data/site";
export const Route = createFileRoute("/residencial/")({
  head: () => meta("Residencial", "Higienização de sofás, colchões e tapetes para residências."),
  component: () => (
    <PlaceholderPage eyebrow="LINHA RESIDENCIAL" title="Residencial" crumbs={[{ label: "Residencial" }]}><ItemGrid base="residencial" items={residencial} /></PlaceholderPage>
  ),
});
