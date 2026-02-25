import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Shop } from "@/components/shop"

export const metadata: Metadata = {
  title: "Boutique | APPA",
  description: "Decouvrez la boutique de l'APPA : sweatshirts, t-shirts et articles officiels Le Verseau.",
}

export default function BoutiquePage() {
  return (
    <>
      <PageHeader
        title="C'est notre boutique"
        description="Soutenez l'ecole et affichez vos couleurs avec nos articles officiels Le Verseau."
      />
      <Shop />
    </>
  )
}
