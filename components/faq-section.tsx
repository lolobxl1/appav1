import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    category: "General",
    question: "Comment contacter l'APPA ?",
    answer:
      "Vous pouvez nous contacter via email : appafondamental@eiverseau.be pour le fondamental et appasecondaire@eiverseau.be pour le secondaire. Nous essaierons de remonter vos questions a la direction lors de nos prochaines reunions.",
  },
  {
    category: "Fondamental",
    question: "Plus d'anglais - \"More English Please\" ?",
    answer:
      "L'APPA traite cette question en priorite. A court terme, les films en garderie seront diffuses en anglais. A moyen terme, l'offre d'activites extra-scolaires en anglais est a l'etude. A long terme, des programmes de correspondants anglophones, voyages scolaires et recrutement de profils anglophones sont en reflexion.",
  },
  {
    category: "Fondamental",
    question: "Proprete des toilettes - Quelles mesures sont prises ?",
    answer:
      "Les toilettes sont nettoyees deux fois par jour. L'ecole dispose de 11 blocs sanitaires avec 33 toilettes individuelles, equipes de diffuseurs d'odeurs et seche-mains automatiques. Un projet de re-decoration propose par l'APPA a ete soumis au vote.",
  },
  {
    category: "Extra-scolaire",
    question: "Garderie & gouters sante - Quelle coherence ?",
    answer:
      "L'ecole encourage les en-cas sains dans les cartables. En garderie, une diversite est maintenue : fruits, crudites, mais aussi biscuits secs. L'objectif est de former les enfants a des choix responsables en matiere de sante.",
  },
  {
    category: "Fondamental",
    question: "Des activites sur les differences sont-elles organisees ?",
    answer:
      "Ces thematiques sont integrees de maniere transversale dans les 3h hebdomadaires de morale et d'eveil aux langues. L'accent est mis sur l'ecoute, le respect des differences et le developpement de l'empathie.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <p className="font-mono text-sm uppercase tracking-widest text-primary mb-2">
              A__FAQ
            </p>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
              Une question merite une reponse.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {"Retrouvez les reponses aux questions les plus frequentes. N'hesitez pas a nous contacter si vous ne trouvez pas ce que vous cherchez."}
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="text-foreground hover:text-primary text-left text-base font-semibold hover:no-underline">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                      {item.category}
                    </span>
                    <span>{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
