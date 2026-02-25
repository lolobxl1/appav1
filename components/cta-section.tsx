import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section id="contact" className="bg-primary py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">
          Nous avons besoin de VOUS !
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
          {"Nous sommes toujours a la recherche de benevoles - meme si ce n'est que de temps en temps ! Il n'y a aucun engagement a long terme, juste une opportunite d'aider quand vous le pouvez."}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" variant="secondary" asChild>
            <Link href="https://forms.gle" target="_blank" rel="noopener noreferrer">
              Je complete le formulaire
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
