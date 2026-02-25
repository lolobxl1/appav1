import {
  Clock,
  Palette,
  Dumbbell,
  Brain,
  BookOpenCheck,
  Theater,
  Globe,
  Users,
  CalendarDays,
  Sunrise,
  ClipboardList,
  ExternalLink,
  Sparkles,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

/* ------------------------------------------------------------------ */
/*  QUAND section data                                                */
/* ------------------------------------------------------------------ */
const schedule = [
  {
    icon: Clock,
    title: "Apres les cours",
    description:
      "Du lundi au vendredi, compatible avec la garderie.",
  },
  {
    icon: CalendarDays,
    title: "Mercredi apres-midi",
    description:
      "Garderie Promosport disponible de 12 h a 14 h pour eviter les allers-retours.",
  },
  {
    icon: Sunrise,
    title: "Samedi matin",
    description:
      "Parce qu'il y a une vie avant le brunch !",
  },
]

/* ------------------------------------------------------------------ */
/*  QUOI section data                                                 */
/* ------------------------------------------------------------------ */
const activities = [
  {
    icon: Globe,
    title: "Langues",
    description:
      "Avec nos super profs ou des experts externes.",
  },
  {
    icon: Palette,
    title: "Arts & Creativite",
    description:
      "Crea'tout, Art club : pinceaux, colle et idees farfelues garanties.",
  },
  {
    icon: Theater,
    title: "Expression & Theatre",
    description:
      "Pour futurs comediens ou petits moulins-a-paroles.",
  },
  {
    icon: Dumbbell,
    title: "Sports & Bien-etre",
    description:
      "Foot, athle, raquettes, gym, VTT, basket, danse, yoga... pour tous les gouts et niveaux.",
  },
  {
    icon: Brain,
    title: "Jeux & Logique",
    description:
      "Echecs, jeux de societe... de quoi muscler les neurones.",
  },
  {
    icon: BookOpenCheck,
    title: "Etudes encadrees",
    description:
      "Pour bosser (un peu) dans le calme.",
  },
]

/* ------------------------------------------------------------------ */
/*  INSCRIPTION section data                                          */
/* ------------------------------------------------------------------ */
const inscriptions = [
  {
    label: "Activites Educ & Sport",
    detail: "Inscriptions sur iClub",
    href: "#",
  },
  {
    label: "Activites Promosport",
    detail: "Inscription sur Mya Sport",
    href: "#",
  },
  {
    label: "Autres activites",
    detail: "Consultez le flyer devant l'ecole",
    href: null,
  },
]

/* ================================================================== */
/*  COMPONENT                                                         */
/* ================================================================== */
export function ExtraScolaireContent() {
  return (
    <>
      {/* ---- QUAND ---- */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <p className="font-mono text-sm uppercase tracking-widest text-primary mb-2">
              Quand ?
            </p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Des creneaux adaptes a votre emploi du temps
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {schedule.map((s) => (
              <div
                key={s.title}
                className="flex flex-col gap-5 rounded-xl border border-border bg-card p-8 transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <s.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- QUOI ---- */}
      <section className="bg-muted py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <p className="font-mono text-sm uppercase tracking-widest text-primary mb-2">
              Quoi ?
            </p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Un programme riche et varie
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((a) => (
              <div
                key={a.title}
                className="rounded-xl border border-border bg-card p-8 transition-shadow hover:shadow-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <a.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-2">
                  {a.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- POUR QUI ---- */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-6 rounded-xl border border-border bg-card p-10 md:flex-row md:gap-10">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
              <Users className="h-8 w-8" />
            </div>
            <div>
              <p className="font-mono text-sm uppercase tracking-widest text-primary mb-2">
                Pour qui ?
              </p>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl text-balance">
                De M1 a P6
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {"Pour petits francophones, anglophones... ou les deux a la fois !"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- INSCRIPTION ---- */}
      <section className="bg-muted py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <p className="font-mono text-sm uppercase tracking-widest text-primary mb-2">
              Inscription
            </p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
              {"Comment inscrire votre champion(ne) ?"}
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {inscriptions.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-4 rounded-xl border border-border bg-card p-8 transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <ClipboardList className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  {item.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.detail}
                </p>
                {item.href && (
                  <Link
                    href={item.href}
                    className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    {"S'inscrire"}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- DETAILS PRATIQUES ---- */}
      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <p className="font-mono text-sm uppercase tracking-widest text-primary mb-2">
              Bon a savoir
            </p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Details pratiques
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              "Tout est liste dans un Google Sheet : Extrascolaire Le Verseau.",
              "Super flexibilite entre partenaires : mixez garderie + sport + activites sans puzzle impossible.",
              "Des stages sont proposes pendant chaque vacances scolaires.",
              "Promosport proposera aussi des journees de garderie pendant les conges pedagogiques.",
            ].map((text, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Sparkles className="h-4 w-4" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                {"Contactez-nous"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
