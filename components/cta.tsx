import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Cta() {
  return (
    <section className="py-24 px-6 bg-muted">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-mono text-sm uppercase tracking-widest text-primary mb-3">Nous avons besoin de vous</p>
        <h2 className="text-3xl font-bold md:text-5xl text-balance">
          {"Rejoignez l'aventure"}
        </h2>
        <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
          {"Nous sommes toujours à la recherche de bénévoles — même si ce n'est que de temps en temps ! Il n'y a aucun engagement à long terme, juste une opportunité d'aider quand vous le pouvez. Chaque aide fait une grande différence !"}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="/contact">
              Nous rejoindre
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
