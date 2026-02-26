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
        category="contact"
        titleKey="page_title"
        descriptionKey="page_description"
      />
      <Team />
    </>
  )
}
