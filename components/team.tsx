import { Mail, Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const teams = [
  {
    title: "APPA Fondamental",
    members: "Gaia, Vanessa, Margot, Caroline, Stéphane",
    email: "appafondamental@eiverseau.be",
  },
  {
    title: "APPA Secondaire",
    members: "Jessica, Caty, Nerea, Maria Fernanda",
    email: "appasecondaire@eiverseau.be",
  },
]

export function Team() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 max-w-3xl mx-auto">
          {teams.map((team) => (
            <div key={team.title} className="rounded-xl border border-border bg-card p-8 text-center">
              <h3 className="text-xl font-bold">{team.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{team.members}</p>
              <Link
                href={`mailto:${team.email}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <Mail className="h-4 w-4" />
                {team.email}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Suivez-nous sur les réseaux</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="outline" size="lg" asChild>
              <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="mr-2 h-5 w-5" />
                Facebook
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-5 w-5" />
                Instagram
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
