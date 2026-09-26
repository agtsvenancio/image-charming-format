import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage, meta } from "@/components/site/PlaceholderPage";

export const Route = createFileRoute("/clientes-e-resultados")({
  head: () => meta("Clientes e resultados", "Empresas atendidas e resultados da higienização profissional Neide Maria."),
  component: () => (
    <PlaceholderPage eyebrow="CLIENTES E RESULTADOS" title="Clientes e resultados" crumbs={[{ label: "Clientes e resultados" }]}></PlaceholderPage>
  ),
});
