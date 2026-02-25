import { BookOpen, Users, Target } from "lucide-react"

const cards = [
  {
    icon: BookOpen,
    title: "Histoire",
    description:
      "Creee en 1997 apres des discussions entre la Direction, les professeurs et les parents, notre association — egalement connue sous le nom de GAS — a pour but d'apporter son aide au Pouvoir Organisateur et a la direction de l'ecole. Le groupe est independant du Conseil de Participation. L'Association des Parents s'est fixee comme objectif unique de contribuer au developpement harmonieux de la communaute du Verseau, en rapprochant ses membres et en favorisant leurs relations.",
  },
  {
    icon: Users,
    title: "Role",
    description:
      "Defendre les interets de tous les eleves et ameliorer la qualite de vie au sein d'une ecole internationale. Susciter la participation de tous les parents a la vie de l'ecole. Recueillir le point de vue des parents et emettre des avis ou propositions constructives. Creer des relations positives entre tous les partenaires de l'ecole. Permettre une meilleure representation des parents aupres de la direction.",
  },
  {
    icon: Target,
    title: "Objectifs & Actions",
    description:
      "Collaborer avec l'ecole, les enseignants et la direction via des reunions frequentes. Representer les avis multiculturels des parents. Ameliorer la vie des enfants par des actions concretes : jeux de societe, bricolages, ateliers echecs. Organiser des conferences et debats sur des themes educatifs. Organiser des activites pour soutenir financierement l'ecole.",
  },
]

export function About() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-5 rounded-xl border border-border bg-card p-8 transition-shadow hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <card.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-card-foreground">{card.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
