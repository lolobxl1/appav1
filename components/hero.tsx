import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Parents and children at Le Verseau international school"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-foreground/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="max-w-2xl">
          <p className="font-mono text-sm uppercase tracking-widest text-secondary mb-4">
            Association des Parents
          </p>
          <h1 className="text-4xl font-bold leading-tight text-background sm:text-5xl lg:text-6xl text-balance">
            Bienvenue !
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-background/90 max-w-xl">
            {"Nous sommes l'equipe dynamique de l'APPA : ensemble, nous promouvons le bien-etre de nos enfants et renforcons une communaute vivante et connectee de parents et d'eleves a l'Ecole Internationale Le Verseau."}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/a-propos">
                {"Decouvrir l'APPA"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-background/10 text-background border-background/30 hover:bg-background/20 hover:text-background" asChild>
              <Link href="mailto:appafondamental@eiverseau.be">
                Nous rejoindre
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
