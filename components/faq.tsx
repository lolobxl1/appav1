"use client"

import { useEffect } from "react"
import { Link2 } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqItems = [
  {
    id: "appa",
    category: "General",
    q: "Qu'est-ce que l'APPA ?",
    a: "L'APPA (Association des Parents) est une organisation independante de parents benevoles qui collabore avec la direction de l'Ecole Internationale Le Verseau pour ameliorer le bien-etre des eleves et renforcer la communaute scolaire.",
  },
  {
    id: "benevole",
    category: "General",
    q: "Comment puis-je devenir benevole ?",
    a: "Nous sommes toujours a la recherche de benevoles — meme si ce n'est que de temps en temps ! Il n'y a aucun engagement a long terme, juste une opportunite d'aider quand vous le pouvez. Contactez-nous par e-mail ou remplissez notre formulaire.",
  },
  {
    id: "communication",
    category: "General",
    q: "Comment communiquez-vous avec les parents ?",
    a: "Nous communiquons via e-mail, notre page Facebook, et notre site web. Nous organisons egalement des reunions regulieres ouvertes a tous les parents.",
  },
  {
    id: "anglais",
    category: "Fondamental",
    q: "More English Please — Que fait l'APPA pour augmenter l'exposition a l'anglais ?",
    a: "L'APPA traite cette question en priorite. Des mesures sont en cours : films en anglais pendant les jours pluvieux, expansion des activites extra-scolaires en anglais, et a long terme, des correspondants anglophones et des voyages scolaires.",
  },
  {
    id: "toilettes",
    category: "Fondamental",
    q: "Proprete des toilettes — Quelles mesures sont prises ?",
    a: "Les toilettes sont nettoyees deux fois par jour. L'ecole dispose de 11 blocs sanitaires avec 33 toilettes individuelles. Un projet de re-decoration propose par l'APPA a ete soumis au vote et pourrait voir le jour via un chantier participatif.",
  },
  {
    id: "gouters",
    category: "Fondamental",
    q: "Garderie & gouters sante — Quelle coherence ?",
    a: "L'ecole encourage les en-cas sains dans les cartables. En garderie, une diversite est maintenue : fruits, crudites, mais aussi biscuits secs. L'objectif est de former des enfants a des choix responsables tout en ne stigmatisant aucun aliment.",
  },
  {
    id: "secondaire",
    category: "Secondaire",
    q: "Quelles sont les questions traitees pour le secondaire ?",
    a: "Nous regroupons les questions remontees par les parents du secondaire. N'hesitez pas a nous contacter a appasecondaire@eiverseau.be pour nous faire part de vos questions.",
  },
]

export function Faq() {
  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) {
      const el = document.getElementById(hash)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "center" })
        }, 100)
      }
    }
  }, [])

  function copyAnchor(id: string) {
    const url = `${window.location.origin}${window.location.pathname}#${id}`
    navigator.clipboard.writeText(url)
  }

  const categories = ["General", "Fondamental", "Secondaire"] as const

  return (
    <section className="py-10 px-6">
      <div className="mx-auto max-w-3xl space-y-12">
        {categories.map((category) => {
          const items = faqItems.filter((item) => item.category === category)
          return (
            <div key={category}>
              <h2 className="mb-6 text-xl font-bold text-foreground">{category}</h2>
              <Accordion type="single" collapsible className="w-full">
                {items.map((item) => (
                  <AccordionItem key={item.id} value={item.id} id={item.id} className="scroll-mt-28">
                    <AccordionTrigger className="text-left text-base font-medium hover:no-underline gap-3">
                      <span>{item.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      <p>{item.a}</p>
                      <button
                        onClick={() => copyAnchor(item.id)}
                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                        title="Copier le lien vers cette question"
                      >
                        <Link2 className="h-3.5 w-3.5" />
                        Copier le lien
                      </button>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )
        })}
      </div>
    </section>
  )
}
