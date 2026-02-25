import { Mail, Facebook } from "lucide-react"
import Link from "next/link"

const teams = [
  {
    label: "APPA Fondamental",
    members: "Gaia, Vanessa, Margot, Caroline, Stephane",
    email: "appafondamental@eiverseau.be",
  },
  {
    label: "APPA Secondaire",
    members: "Jessica, Caty, Nerea, Maria Fernanda",
    email: "appasecondaire@eiverseau.be",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="bg-muted py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14">
          <p className="font-mono text-sm uppercase tracking-widest text-primary mb-2">
            A__Team
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            {"Une equipe solide a votre service."}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 max-w-3xl">
          {teams.map((team) => (
            <div
              key={team.label}
              className="rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-lg"
            >
              <h3 className="text-lg font-bold text-card-foreground mb-2">
                {team.label}
              </h3>
              <p className="text-muted-foreground mb-5 leading-relaxed">
                {team.members}
              </p>
              <Link
                href={`mailto:${team.email}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <Mail className="h-4 w-4" />
                {team.email}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-4">
          <span className="text-sm font-medium text-muted-foreground">Suivez-nous :</span>
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-80"
            aria-label="Facebook APPA"
          >
            <Facebook className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
