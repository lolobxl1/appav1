import Image from "next/image"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "Sweatshirt Le Verseau",
    image: "/images/shop-sweatshirt.jpg",
    price: "22,00 - 27,00",
    hasOptions: true,
  },
  {
    name: "T-shirt Le Verseau",
    image: "/images/shop-tshirt.jpg",
    price: "10,00",
    hasOptions: false,
  },
]

export function ShopSection() {
  return (
    <section id="shop" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <p className="font-mono text-sm uppercase tracking-widest text-primary mb-2">
            A__Shop
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            {"C'est notre marche, notre boutique."}
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-3xl">
          {products.map((product) => (
            <div
              key={product.name}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-card-foreground mb-1">
                  {product.name}
                </h3>
                <p className="text-lg font-bold text-primary mb-4">
                  {product.price}{"€"}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  {product.hasOptions ? "Choix des options" : "Ajouter au panier"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
