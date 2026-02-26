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
  },
  {
    name: "T-shirt Le Verseau",
    description: "T-shirt officiel de l'ecole, leger et agreable a porter au quotidien. Disponible en plusieurs tailles.",
    price: "10,00",
    sizes: "4 ans - XXL",
    image: "/images/tshirt.jpg",
  },
]

export function Shop() {
  return (
    <section className="py-10 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 max-w-3xl mx-auto">
          {products.map((product) => (
            <div
              key={product.name}
              className="group overflow-hidden rounded-xl bg-card border border-border transition-all hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-card-foreground">{product.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-primary font-mono">{product.price}&euro;</span>
                  <span className="text-xs text-muted-foreground">Tailles : {product.sizes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="mb-4 text-muted-foreground text-sm leading-relaxed max-w-md mx-auto">
            {"Pour commander, telechargez le bon de commande, remplissez-le et remettez-le a l'ecole avec votre paiement."}
          </p>
          <Button size="lg" asChild>
            <Link href="/documents/bon-de-commande.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-5 w-5" />
              Commander
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
