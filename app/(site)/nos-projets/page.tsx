import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Nos Projets | APPA",
  description: "Decouvrez les projets de l'Association des Parents de l'Ecole Internationale Le Verseau.",
}

export default function NosProjetsPage() {
  return (
    <>
      <PageHeader
        title="Nos Projets"
        description="Decouvrez les initiatives et projets portes par l'APPA pour ameliorer le quotidien de nos enfants."
      />
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <p className="text-muted-foreground text-lg leading-relaxed">
            {"Contenu a venir."}
          </p>
        </div>
      </section>
    </>
  )
}
