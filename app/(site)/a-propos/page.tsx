import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { AboutContent } from "@/components/about-content"

export const metadata: Metadata = {
  title: "A propos | APPA",
  description: "Decouvrez l'histoire, le role et les objectifs de l'Association des Parents de l'Ecole Internationale Le Verseau.",
}

export default function AProposPage() {
  return (
    <>
      <PageHeader
        title="L'APPA, votre lien avec l'ecole"
        description="L'Association des Parents est une garantie de communication et de transparence entre les parents, l'ecole et la communaute. Nous collaborons etroitement avec la direction pour ameliorer le quotidien de vos enfants."
      />
      <AboutContent />
    </>
  )
}
