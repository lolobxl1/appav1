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
        category="about"
        titleKey="page_title"
        descriptionKey="page_description"
      />
      <AboutContent />
    </>
  )
}
