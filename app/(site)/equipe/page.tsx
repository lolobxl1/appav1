import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Team } from "@/components/team"

export const metadata: Metadata = {
  title: "Equipe | APPA",
  description: "Rencontrez l'equipe de benevoles de l'APPA, dediee au bien-etre des eleves de Le Verseau.",
}

export default function EquipePage() {
  return (
    <>
      <PageHeader
        title="Une equipe solide"
        description="Une chaine faite de maillons qui forment une equipe devouee au bien-etre de vos enfants."
      />
      <Team />
    </>
  )
}
