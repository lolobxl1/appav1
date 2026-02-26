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
        category="projects"
        titleKey="page_title"
        descriptionKey="page_description"
      />
      <ProjectsContent />
    </>
  )
}
