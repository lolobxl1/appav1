import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ExtraScolaireContent } from "@/components/extra-scolaire-content"

export const metadata: Metadata = {
  title: "Extra-scolaire | APPA",
  description: "Les activites extra-scolaires proposees par l'APPA a l'Ecole Internationale Le Verseau.",
}

export default function ExtraScolairePage() {
  return (
    <>
      <PageHeader
        title="Extra-scolaire au Verseau"
        description="Fini les mercredis en mode taxi et « j'sais pas quoi faire » ! Le programme est pret, les activites chauffent, il ne manque plus que vos enfants !"
      />
      <ExtraScolaireContent />
    </>
  )
}
