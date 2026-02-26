"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import { useTranslation } from "@/lib/use-translation"

const productConfigs = [
  {
    nameKey: "product_1_name",
    descKey: "product_1_description",
    priceKey: "product_1_price",
    sizes: "4 ans - XXL",
    image: "/images/sweatshirt.jpg",
    pdf: "/documents/bon-de-commande-sweatshirt.pdf",
  },
  {
    nameKey: "product_2_name",
    descKey: "product_2_description",
    priceKey: "product_2_price",
    sizes: "4 ans - XXL",
    image: "/images/tshirt.jpg",
    pdf: "/documents/bon-de-commande-tshirt.pdf",
  },
  {
    nameKey: "product_3_name",
    descKey: "product_3_description",
    priceKey: "product_3_price",
    sizes: null,
    image: "/images/photos-classe.jpg",
    pdf: "/documents/bon-de-commande-photos.pdf",
  },
]

export function Shop() {
  const { t } = useTranslation()

  return (
    <section className="py-10 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {productConfigs.map((product) => (
            <div
              key={product.nameKey}
              className="group overflow-hidden rounded-xl bg-card border border-border transition-all hover:shadow-lg flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={t("shop", product.nameKey)}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-lg text-card-foreground">{t("shop", product.nameKey)}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t("shop", product.descKey)}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-primary font-mono">{t("shop", product.priceKey)}&euro;</span>
                  {product.sizes && (
                    <span className="text-xs text-muted-foreground">{t("shop", "sizes_label")} : {product.sizes}</span>
                  )}
                </div>
                <Button className="mt-5 w-full" asChild>
                  <Link href={product.pdf} target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4" />
                    {t("shop", "order_button")}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
