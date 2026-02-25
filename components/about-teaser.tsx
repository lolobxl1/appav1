import Link from "next/link"
import { ArrowRight, Users, BookOpen, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  {
    icon: Users,
    label: "Communaute active",
    desc: "Des parents benevoles devoues au bien-etre de tous les eleves.",
  },
  {
    icon: BookOpen,
    label: "Depuis 1997",
    desc: "Plus de 25 ans au service de la communaute scolaire Le Verseau.",
  },
  {
    icon: Heart,
    label: "Ouvert a tous",
    desc: "Chaque parent peut contribuer, meme ponctuellement.",
  },
]

export function AboutTeaser() {
  return (
    <section className="py-24 px-6 bg-muted">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
          <div className="lg:w-1/2">
            <p className="font-mono text-sm uppercase tracking-widest text-primary mb-3">
              Qui sommes-nous ?
            </p>
            <h2 className="text-3xl font-bold md:text-4xl text-balance">
              {"L'APPA, votre lien avec l'ecole"}
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              {"L'Association des Parents est une garantie de communication et de transparence entre les parents, l'ecole et la communaute. Nous collaborons etroitement avec la direction pour ameliorer le quotidien de vos enfants."}
            </p>
            <Button className="mt-8" size="lg" asChild>
              <Link href="/a-propos">
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="lg:w-1/2 grid gap-6">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="flex gap-5 rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <h.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-card-foreground">{h.label}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
