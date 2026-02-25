import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Faq } from "@/components/faq"

export const metadata: Metadata = {
  title: "FAQ | APPA",
  description: "Trouvez les reponses aux questions les plus frequentes sur l'APPA et l'ecole Le Verseau.",
}

export default function FaqPage() {
  return (
    <>
      <PageHeader
        title="Questions frequentes"
        description="Une question merite une reponse. C'est certain !"
      />
      <Faq />
    </>
  )
}
