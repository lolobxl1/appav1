import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { About } from "@/components/about"

export const metadata: Metadata = {
  title: "A propos | APPA",
  description: "Decouvrez l'histoire, le role et les objectifs de l'Association des Parents de l'Ecole Internationale Le Verseau.",
}

export default function AProposPage() {
  return (
    <>
      <PageHeader
        title="Notre role, notre fonction"
        description="L'APPA est une garantie de communication et de transparence entre les parents, l'ecole et la communaute."
      />
      <About />
    </>
  )
}
