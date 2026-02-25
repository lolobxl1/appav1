import Image from "next/image"
import { Sprout, Puzzle, Egg } from "lucide-react"

const projects = [
  {
    icon: Sprout,
    title: "Un potager pour eveiller les sens",
    description:
      "Grace a votre generosite, et le dur labeur de parents, nous avons pu installer un magnifique projet de potager en primaire. Cette initiative permet aux enfants de se connecter directement a la nature, d'apprendre d'ou viennent les aliments et de developper une conscience ecologique des leur plus jeune age. Un enrichissement precieux pour leur developpement et leur bien-etre.",
    image: "/images/projet-potager.jpg",
    alt: "Potager scolaire avec des enfants qui jardinent",
  },
  {
    icon: Puzzle,
    title: "Des jeux pour egayer la cour",
    description:
      "Nous avons egalement investi dans de nouveaux jeux et amenagements pour la cour de recreation. Ces equipements offrent aux enfants un espace de jeu stimulant et securise, favorisant l'activite physique, l'imagination et les interactions sociales. Le benefice principal ? Des moments de joie et d'epanouissement pour tous les eleves, jour apres jour.",
    image: "/images/projet-jeux.jpg",
    alt: "Enfants jouant dans la cour de recreation avec de nouveaux equipements",
  },
  {
    icon: Egg,
    title: "La magie de Paques a l'ecole",
    description:
      "Chaque annee, grace aux fonds collectes, nous organisons une memorable chasse aux oeufs de Paques. Cet evenement est une occasion formidable de creer de la magie et de la convivialite au sein de l'ecole. Voir les yeux brillants des enfants cherchant leurs tresors est le plus beau des retours, et nous permet de continuer a faire vivre ces traditions si cheres.",
    image: "/images/projet-paques.jpg",
    alt: "Chasse aux oeufs de Paques dans le jardin de l'ecole",
  },
]

export function ProjectsContent() {
  return (
    <section className="py-10 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Intro statement */}
        <div className="mb-16 text-center">
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            {"Chaque initiative compte et contribue a un environnement scolaire plus riche et epanouissant. Voyez par vous-meme comment vos contributions se transforment en sourires et en apprentissages."}
          </p>
        </div>

        {/* Project cards – alternating layout */}
        <div className="flex flex-col gap-20">
          {projects.map((project, index) => {
            const isReversed = index % 2 !== 0
            return (
              <div
                key={project.title}
                className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16 ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="relative flex-1 overflow-hidden rounded-xl border border-border">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={720}
                    height={480}
                    className="h-auto w-full object-cover"
                  />
                </div>

                {/* Text content */}
                <div className="flex flex-1 flex-col gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <project.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground text-balance">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-xl border border-border bg-card p-10 text-center">
          <p className="mx-auto max-w-xl text-lg font-medium text-card-foreground leading-relaxed">
            {"Vous avez une idee de projet ? L'APPA est toujours a la recherche de nouvelles initiatives pour ameliorer la vie de nos enfants a l'ecole."}
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  )
}
