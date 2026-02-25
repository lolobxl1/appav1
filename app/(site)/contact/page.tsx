import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Team } from "@/components/team"

export const metadata: Metadata = {
  title: "Contact | APPA",
  description: "Contactez l'Association des Parents de l'Ecole Internationale Le Verseau.",
}

export default function ContactPage() {
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
