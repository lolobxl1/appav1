import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"

const products = [
  {
    name: "Sweatshirt Le Verseau",
    price: "22,00 - 27,00",
    image: "/images/sweatshirt.jpg",
  },
  {
    name: "T-shirt Le Verseau",
    price: "10,00",
    image: "/images/tshirt.jpg",
  },
]

export function Shop() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
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
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground font-mono">{product.price}&euro;</p>
                <Button className="mt-4 w-full" variant="outline">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Choix des options
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
