import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { NewsGrid } from "@/components/news-grid"

export const metadata: Metadata = {
  title: "Actualites | APPA",
  description: "Toutes les actualites et evenements de l'Association des Parents de l'Ecole Internationale Le Verseau.",
}

export default function ActualitesPage() {
  return (
    <>
      <PageHeader
        title="Nos actualites"
        description="Retrouvez toutes les dernieres nouvelles, evenements et annonces de l'APPA et de l'ecole Le Verseau."
      />
      <NewsGrid />
    </>
  )
}
