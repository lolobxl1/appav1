import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Extra-scolaire | APPA",
  description: "Les activites extra-scolaires proposees par l'APPA a l'Ecole Internationale Le Verseau.",
}

export default function ExtraScolairePage() {
  return (
    <>
      <PageHeader
        title="Extra-scolaire"
        description="Decouvrez les activites extra-scolaires proposees pour les eleves du Verseau."
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
