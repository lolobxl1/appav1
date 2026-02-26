export interface Article {
  slug: string
  title: string
  description: string
  content: string[]
  image: string
  date: string
  tags: string[]
}

export const articles: Article[] = [
  {
    slug: "whatsapp-community",
    title: "WhatsApp Community — Restez connectes entre parents !",
    description: "La communication entre parents se fait principalement via la communaute WhatsApp du Verseau. Decouvrez les groupes disponibles et comment les rejoindre.",
    content: [
      "La communaute WhatsApp Le Verseau est le canal principal de communication entre parents. Elle regroupe plusieurs types de groupes pour faciliter les echanges, l'entraide et la coordination au quotidien.",
      "Groupes classes — Chaque classe dispose de son propre groupe prive, permettant aux parents de s'entre-aider sur les activites de la classe : devoirs, excursions, informations pratiques. Les groupes sont organises par niveau : MAT (maternelle), PRI (primaire) et SEC (secondaire).",
      "Networking — Des groupes optionnels sont disponibles pour les parents selon leurs points communs : MAT - Maternelle Parents, PRI - Primary Parents, SEC - Secondary Parents, APPA - Second hands, ALL - CARPOOL, Parents de Ville, et Le Verseau Unplugged (avec un sous-groupe iPad pour le secondaire).",
      "Groupes APPA — Pour un echange plus direct entre les parents et l'association : APPA - Events pour les evenements, APPA - Feedbacks pour vos retours, et APPA - Ideas & Volunteers pour proposer des idees ou se porter volontaire.",
      "Coordination d'activites — Des groupes dedies permettent de coordonner certaines activites APPA, comme les jeux de societe et echecs du midi pour les enfants en primaire (PRI - APPA Lunch Activities) ou le projet potager (PRI - APPA Projet Potager).",
      "N'hesitez pas a rejoindre les groupes qui vous interessent ! Contactez vos delegues de classe ou l'APPA pour recevoir les liens d'invitation.",
    ],
    image: "/images/whatsapp-community.jpg",
    date: "26 Feb 2026",
    tags: ["A la une", "Fondamental", "Secondaire"],
  },
  {
    slug: "marche-familiale-lanternes",
    title: "Marche familiale aux lanternes - Fete des lumieres",
    description: "Rejoignez-nous pour une balade enchantee en famille avec des lanternes faites maison.",
    content: [
      "La traditionnelle marche aux lanternes aura lieu cette annee encore dans le cadre magique du parc de l'ecole. Petits et grands sont invites a confectionner leurs propres lanternes lors des ateliers organises en classe, avant de les porter fierement lors de la balade du soir.",
      "Le depart est prevu a 17h30 depuis l'entree principale de l'ecole. Un parcours securise d'environ 2 km a ete trace a travers le quartier, avec des haltes musicales et des surprises tout au long du chemin.",
      "A l'arrivee, un chocolat chaud et des gaufres seront offerts par l'APPA. N'oubliez pas de vous habiller chaudement et d'apporter une bougie de rechange pour votre lanterne !",
    ],
    image: "/images/lanterns.jpg",
    date: "15 Dec 2025",
    tags: ["A la une", "Fondamental"],
  },
  {
    slug: "sondage-verseau-unplugged",
    title: "Resultats du sondage Le Verseau Unplugged 2025-2026",
    description: "Decouvrez les resultats complets de notre sondage annuel sur la vie scolaire et les activites.",
    content: [
      "Le sondage Le Verseau Unplugged a recueilli cette annee plus de 350 reponses de parents, un record de participation ! Nous vous remercions pour votre engagement et votre confiance.",
      "Parmi les points forts qui ressortent : 87% des parents se declarent satisfaits de la communication entre l'ecole et les familles, et 92% souhaitent voir se poursuivre les activites extrascolaires du midi.",
      "Les principaux axes d'amelioration identifies portent sur la cantine (qualite et variete des menus) et sur le suivi numerique des devoirs. Le comite de l'APPA travaillera avec la direction de l'ecole pour aborder ces points des le prochain trimestre.",
    ],
    image: "/images/survey.jpg",
    date: "10 Dec 2025",
    tags: ["A la une", "Fondamental", "Secondaire"],
  },
  {
    slug: "goodies-noel",
    title: "Illuminez la saison avec nos goodies de Noel !",
    description: "Sweatshirts, t-shirts et plus encore — soutenez l'ecole tout en offrant de beaux cadeaux.",
    content: [
      "Les fetes de fin d'annee approchent et c'est le moment ideal pour decouvrir notre collection speciale Noel ! Cette annee, nous proposons des sweatshirts brodes aux couleurs de l'ecole, des t-shirts serigraphies et des accessoires exclusifs.",
      "Tous les benefices de ces ventes sont directement reinvestis dans les projets de l'APPA : activites du midi, sorties scolaires, materiel pedagogique et evenements festifs.",
      "Les commandes peuvent etre passees en ligne ou directement aupres de vos delegues de classe. Date limite de commande pour une livraison avant Noel : le 8 decembre.",
    ],
    image: "/images/christmas.jpg",
    date: "1 Dec 2025",
    tags: ["A la une", "Boutique", "Fondamental", "Secondaire"],
  },
  {
    slug: "rallye-lecture",
    title: "Rallye lecture : une seconde vie pour les livres !",
    description: "Echangez des livres entre familles et donnez le gout de la lecture a vos enfants.",
    content: [
      "Le rallye lecture est l'une des initiatives les plus appreciees de l'APPA. Le concept est simple : chaque enfant apporte un ou plusieurs livres qu'il a deja lus, et repart avec de nouvelles lectures choisies parmi les dons des autres familles.",
      "Cette annee, nous elargissons le rallye aux bandes dessinees et aux livres en langues etrangeres, pour refleter la diversite linguistique de notre ecole internationale.",
      "L'evenement se tiendra dans la salle polyvalente le vendredi 28 novembre, de 12h a 15h. Les enfants du fondamental seront accompagnes par leurs enseignants. Une belle facon de promouvoir la lecture et le partage !",
    ],
    image: "/images/books.jpg",
    date: "20 Nov 2025",
    tags: ["A la une", "Fondamental"],
  },
  {
    slug: "chasse-oeufs-paques",
    title: "Chasse aux oeufs de Paques 2026",
    description: "Chaque annee, l'APPA organise une chasse aux oeufs geante dans le jardin de l'ecole.",
    content: [
      "Preparez vos paniers ! La grande chasse aux oeufs de Paques de l'APPA revient pour une nouvelle edition haute en couleurs dans les jardins de l'ecole Le Verseau.",
      "Les enfants seront repartis par tranches d'age pour garantir un partage equitable du butin chocolat. Des animations, maquillages et jeux seront egalement proposes tout au long de l'apres-midi.",
      "Rendez-vous le samedi 5 avril 2026 a partir de 14h. En cas de pluie, l'evenement sera deplace dans le gymnase. L'entree est gratuite pour toutes les familles de l'ecole.",
    ],
    image: "/images/easter.jpg",
    date: "15 Nov 2025",
    tags: ["Fondamental"],
  },
  {
    slug: "buffet-international",
    title: "Buffet international — Soiree des cultures",
    description: "Partagez vos specialites culinaires lors de notre grand buffet multiculturel annuel.",
    content: [
      "La Soiree des cultures est l'un des moments forts de l'annee scolaire. Chaque famille est invitee a preparer un plat typique de son pays ou de sa region, transformant le refectoire en un veritable tour du monde culinaire.",
      "L'an dernier, plus de 60 plats differents representant 25 nationalites ont ete partages. De la moussaka grecque au bobotie sud-africain, en passant par les nems vietnamiens et la tarte au sucre quebecoise, chacun y trouve son bonheur.",
      "La soiree sera agrementee de musiques du monde et d'une presentation des traditions de chaque pays participant. Inscription des plats aupres de vos delegues de classe avant le 15 novembre.",
    ],
    image: "/images/buffet.jpg",
    date: "5 Nov 2025",
    tags: ["A la une", "Fondamental", "Secondaire"],
  },
  {
    slug: "atelier-echecs",
    title: "Atelier echecs — Inscriptions ouvertes",
    description: "Les ateliers echecs du midi reprennent ! Inscrivez vos enfants pour ce trimestre.",
    content: [
      "Les ateliers echecs, animes par un maitre federatif benevole, reprennent chaque mardi et jeudi midi pour les eleves de la 3e a la 6e primaire. Debutants et joueurs confirmes sont les bienvenus.",
      "Les echecs developpent la concentration, la logique et la patience. C'est aussi une activite sociale ou les enfants apprennent le fair-play et la gestion des emotions.",
      "L'inscription est gratuite et se fait en ligne via le formulaire de l'APPA. Les places sont limitees a 20 enfants par seance. Un tournoi inter-classes sera organise en fin de trimestre avec des recompenses pour tous les participants.",
    ],
    image: "/images/chess.jpg",
    date: "28 Oct 2025",
    tags: ["Fondamental"],
  },
  {
    slug: "nouvelle-collection-boutique",
    title: "Nouvelle collection boutique disponible",
    description: "Decouvrez les nouveaux sweatshirts et t-shirts officiels Le Verseau pour cette annee.",
    content: [
      "La boutique de l'APPA fait peau neuve ! Nous sommes fiers de vous presenter la nouvelle collection 2025-2026 d'articles aux couleurs de l'ecole Le Verseau.",
      "Au programme : des sweatshirts en coton bio disponibles du 4 ans au XXL adulte, des t-shirts manches courtes et longues, ainsi que des casquettes et des sacs en toile. Tous les articles arborent le nouveau logo de l'ecole.",
      "Les prix restent accessibles grace a notre partenariat avec un fournisseur local engage dans le developpement durable. Les benefices financent directement les activites et projets de l'APPA.",
    ],
    image: "/images/sweatshirt.jpg",
    date: "15 Oct 2025",
    tags: ["Boutique", "Fondamental", "Secondaire"],
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}
