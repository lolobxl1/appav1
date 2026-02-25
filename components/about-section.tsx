import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function AboutSection() {
  return (
    <section id="about" className="bg-foreground py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <p className="font-mono text-sm uppercase tracking-widest text-secondary mb-2">
            En quelques mots
          </p>
          <h2 className="text-3xl font-bold text-background sm:text-4xl text-balance">
            Notre role, notre fonction.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-background/70">
            {"L'APPA est une garantie de communication et de transparence."}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full max-w-3xl">
          <AccordionItem value="history" className="border-background/20">
            <AccordionTrigger className="text-background hover:text-secondary text-lg font-semibold hover:no-underline">
              Histoire
            </AccordionTrigger>
            <AccordionContent className="text-background/70 leading-relaxed">
              {"Creee en 1997 apres discussions entre la Direction, les professeurs et les parents, notre association a pour but d'apporter son aide au Pouvoir Organisateur et a la direction de l'ecole. L'Association des Parents s'est fixee comme objectif unique de contribuer, par tous les moyens, au developpement harmonieux de la communaute du Verseau, en rapprochant ses membres et en favorisant leurs relations."}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="role" className="border-background/20">
            <AccordionTrigger className="text-background hover:text-secondary text-lg font-semibold hover:no-underline">
              Role
            </AccordionTrigger>
            <AccordionContent className="text-background/70 leading-relaxed">
              <ul className="space-y-3 list-none">
                <li className="flex gap-3 items-start">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  {"Defendre les interets de tous les eleves et ameliorer la qualite de vie au sein d'une ecole internationale."}
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  {"Susciter la participation de tous les parents a la vie de l'ecole."}
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  {"Recueillir le point de vue des parents et emettre des avis ou propositions."}
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  {"Creer des relations positives entre tous les partenaires de l'ecole."}
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  {"Permettre une meilleure representation des parents aupres de la direction."}
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="objectives" className="border-background/20">
            <AccordionTrigger className="text-background hover:text-secondary text-lg font-semibold hover:no-underline">
              {"Objectifs & Actions"}
            </AccordionTrigger>
            <AccordionContent className="text-background/70 leading-relaxed">
              <ul className="space-y-3 list-none">
                <li className="flex gap-3 items-start">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  {"Collaborer avec l'ecole, les enseignants et la direction a travers des reunions frequentes."}
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  {"Representer ouvertement les avis multiculturels des parents de l'ecole."}
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  {"Ameliorer la vie des enfants par des actions concretes : jeux, ateliers, activites du midi."}
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  {"Organiser des conferences et debats sur des themes educatifs importants."}
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary shrink-0" />
                  {"Organiser des activites pour aider l'ecole financierement."}
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
