import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Contact | APPA",
  description: "Contactez l'Association des Parents de l'Ecole Internationale Le Verseau.",
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact"
        description="N'hesitez pas a nous contacter pour toute question ou suggestion."
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
