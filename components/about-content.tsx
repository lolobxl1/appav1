import Image from "next/image"
import { Users, BookOpen, Heart } from "lucide-react"

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

const paragraphs = [
  {
    title: "Au centre, nos enfants",
    text: "Notre premiere priorite est le bien-etre de nos enfants. Toutes les activites de l'APPA sont donc centrees sur eux, et sur leurs parents.\n\nActivite phare pour les enfants, nous organisons des activites ludiques durant la pause de midi avec l'aide de parents motives : bricolage et art, echecs et jeux de societe !\n\nL'APPA organise aussi la Chasse aux oeufs de Paques, en offrant de bons oeufs en chocolat, avec un parent deguise(e) en Lapin de Paques pour venir visiter les classes de maternelles.",
    image: "/images/about-enfants.jpg",
    alt: "Enfants jouant et faisant des activites a l'ecole",
  },
  {
    title: "Communaute connectee",
    text: "L'Association des Parents APPA est un pilier essentiel de l'ecole.\n\nNous offrons un soutien concret lors des grands evenements scolaires : organisation du Buffet international, collaboration lors des fetes d'ecole (tenue de stands, etc.) et bien d'autres.\n\nNous organisons egalement des rencontres pour les parents : petits-dejeuners, moments the/cafe, vide-greniers et conferences enrichissantes, pour renforcer les liens et partager des experiences.\n\nEnsemble, nous batissons une communaute solide et bienveillante.",
    image: "/images/about-communaute.jpg",
    alt: "Parents reunis lors d'un evenement communautaire",
  },
  {
    title: "Votre lien avec l'ecole",
    text: "L'Association des Parents est une garantie de communication et de transparence entre les parents, l'ecole et la communaute. Nous collaborons etroitement avec la direction pour ameliorer le quotidien de vos enfants.",
    image: "/images/about-communication.jpg",
    alt: "Reunion entre parents et direction de l'ecole",
  },
]

export function AboutContent() {
  return (
    <>
      {/* Qui sommes-nous hero section */}
      <section className="py-20 px-6 bg-muted">
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

      {/* Alternating paragraphs with images */}
      {paragraphs.map((p, i) => (
        <section
          key={p.title}
          className={i % 2 === 1 ? "py-20 px-6 bg-muted" : "py-20 px-6"}
        >
          <div className="mx-auto max-w-7xl">
            <div
              className={`flex flex-col gap-12 lg:items-center lg:gap-16 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="lg:w-1/2">
                <p className="font-mono text-sm uppercase tracking-widest text-primary mb-3">
                  {`0${i + 1}`}
                </p>
                <h2 className="text-2xl font-bold md:text-3xl text-balance">
                  {p.title}
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground text-base leading-relaxed">
                  {p.text.split("\n\n").map((paragraph, j) => (
                    <p key={j}>{paragraph}</p>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    width={640}
                    height={420}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
