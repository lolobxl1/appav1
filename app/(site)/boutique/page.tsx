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
        category="shop"
        titleKey="page_title"
        descriptionKey="page_description"
      />
      <Shop />
    </>
  )
}
