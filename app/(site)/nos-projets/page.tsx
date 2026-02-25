import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ProjectsContent } from "@/components/projects-content"

export const metadata: Metadata = {
  title: "Nos Projets | APPA",
  description: "Decouvrez les projets concrets finances par l'APPA pour l'Ecole Internationale Le Verseau.",
}

export default function NosProjetsPage() {
  return (
    <>
      <PageHeader
        title="Ensemble, nous faisons la difference"
        description="Decouvrez les projets concrets que nous avons pu financer grace a votre soutien et a l'engagement de notre association. A l'APPA, nous sommes convaincus qu'ensemble, avec un budget leger, nous pouvons faire beaucoup pour notre ecole et creer une reelle plus-value pour nos enfants."
      />
      <ProjectsContent />
    </>
  )
}
