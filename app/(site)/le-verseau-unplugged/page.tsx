import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Le Verseau Unplugged | APPA",
  description: "Le Verseau Unplugged - evenements et activites debranchees a l'Ecole Internationale Le Verseau.",
}

export default function LeVerseauUnpluggedPage() {
  return (
    <>
      <PageHeader
        title="Le Verseau Unplugged"
        description="Evenements et moments de convivialite en dehors du numerique."
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
