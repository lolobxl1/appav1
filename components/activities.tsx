import { Puzzle, Calendar, Coffee } from "lucide-react"

const activities = [
  {
    icon: Puzzle,
    title: "Activites a midi",
    description:
      "Bricolage, echecs, musique, jeux de societe et bien plus pour les enfants pendant la pause du midi.",
  },
  {
    icon: Calendar,
    title: "Evenements scolaires",
    description:
      "Buffet international, Chasse aux oeufs de Paques, Marche de Noel et bien d'autres evenements festifs.",
  },
  {
    icon: Coffee,
    title: "Rencontres parents",
    description:
      "Petits-dejeuners, moments the/cafe, vide-greniers et conferences pour renforcer la communaute.",
  },
]

export function Activities() {
  return (
    <section className="bg-muted py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <p className="font-mono text-sm uppercase tracking-widest text-primary mb-2">
            Que fait l{"'"}APPA ?
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Nos activites principales
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {activities.map((a) => (
            <div
              key={a.title}
              className="rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <a.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">{a.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
