import type { Metadata } from "next"
import { AboutContent } from "@/components/about-content"

export const metadata: Metadata = {
  title: "A propos | APPA",
  description: "Decouvrez l'histoire, le role et les objectifs de l'Association des Parents de l'Ecole Internationale Le Verseau.",
}

export default function AProposPage() {
  return <AboutContent />
}
