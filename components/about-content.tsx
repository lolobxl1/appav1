import Image from "next/image"

const paragraphs = [
  {
    id: "activites-midi",
    title: "Au centre, nos enfants",
    text: "Notre premiere priorite est le bien-etre de nos enfants. Toutes les activites de l'APPA sont donc centrees sur eux, et sur leurs parents.\n\nActivite phare pour les enfants, nous organisons des activites ludiques durant la pause de midi avec l'aide de parents motives : bricolage et art, echecs et jeux de societe !\n\nL'APPA organise aussi la Chasse aux oeufs de Paques, en offrant de bons oeufs en chocolat, avec un parent deguise(e) en Lapin de Paques pour venir visiter les classes de maternelles.",
    image: "/images/about-enfants.jpg",
    alt: "Enfants jouant et faisant des activites a l'ecole",
  },
  {
    id: "evenements-scolaires",
    title: "Communaute connectee",
    text: "L'Association des Parents APPA est un pilier essentiel de l'ecole.\n\nNous offrons un soutien concret lors des grands evenements scolaires : organisation du Buffet international, collaboration lors des fetes d'ecole (tenue de stands, etc.) et bien d'autres.\n\nNous organisons egalement des rencontres pour les parents : petits-dejeuners, moments the/cafe, vide-greniers et conferences enrichissantes, pour renforcer les liens et partager des experiences.\n\nEnsemble, nous batissons une communaute solide et bienveillante.",
    image: "/images/about-communaute.jpg",
    alt: "Parents reunis lors d'un evenement communautaire",
  },
  {
    id: "rencontres-parents",
    title: "Votre voix, notre action",
    text: "Nous jouons un role cle dans la democratie de l'ecole. Grace a nos delegues, nous assurons que les questions et les preoccupations des parents sont entendues et prises en compte lors du Conseil de Participation, par la direction de l'ecole, et par les asbl Les Amis du Verseau et VSAL.\n\nL'APPA est la pour vous representer, agir et ameliorer continuellement la vie scolaire pour tous.",
    image: "/images/about-communication.jpg",
    alt: "Parents et enseignants discutant ensemble a l'ecole",
  },
]

export function AboutContent() {
  return (
    <>
      {paragraphs.map((p, i) => (
        <section
          key={p.title}
          id={p.id}
          className={`scroll-mt-24 ${i % 2 === 1 ? "py-20 px-6 bg-muted" : "py-20 px-6"}`}
        >
          <div className="mx-auto max-w-7xl">
            <div
              className={`flex flex-col gap-12 lg:items-center lg:gap-16 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="lg:w-1/2">
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
