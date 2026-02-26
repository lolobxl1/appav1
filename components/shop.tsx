import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

const products = [
  {
    name: "Sweatshirt Le Verseau",
    description: "Sweatshirt confortable aux couleurs de l'ecole, ideal pour les journees fraiches. Disponible en plusieurs tailles enfant et adulte.",
    price: "22,00 - 27,00",
    sizes: "4 ans - XXL",
    image: "/images/sweatshirt.jpg",
    pdf: "/documents/bon-de-commande-sweatshirt.pdf",
  },
  {
    name: "T-shirt Le Verseau",
    description: "T-shirt officiel de l'ecole, leger et agreable a porter au quotidien. Disponible en plusieurs tailles.",
    price: "10,00",
    sizes: "4 ans - XXL",
    image: "/images/tshirt.jpg",
    pdf: "/documents/bon-de-commande-tshirt.pdf",
  },
  {
    name: "Photos de classe",
    description: "Commandez les photos de classe de vos enfants : photo individuelle, photo de classe et photo de fratrie.",
    price: "A partir de 8,00",
    sizes: null,
    image: "/images/photos-classe.jpg",
    pdf: "/documents/bon-de-commande-photos.pdf",
  },
]

export function Shop() {
  return (
    <section className="py-10 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {products.map((product) => (
            <div
              key={product.name}
              className="group overflow-hidden rounded-xl bg-card border border-border transition-all hover:shadow-lg flex flex-col"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-lg text-card-foreground">{product.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-primary font-mono">{product.price}&euro;</span>
                  {product.sizes && (
                    <span className="text-xs text-muted-foreground">Tailles : {product.sizes}</span>
                  )}
                </div>
                <Button className="mt-5 w-full" asChild>
                  <Link href={product.pdf} target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4" />
                    Commander
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
