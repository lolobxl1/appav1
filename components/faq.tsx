"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const generalFaq = [
  {
    q: "Qu'est-ce que l'APPA ?",
    a: "L'APPA (Association des Parents) est une organisation indépendante de parents bénévoles qui collabore avec la direction de l'École Internationale Le Verseau pour améliorer le bien-être des élèves et renforcer la communauté scolaire.",
  },
  {
    q: "Comment puis-je devenir bénévole ?",
    a: "Nous sommes toujours à la recherche de bénévoles — même si ce n'est que de temps en temps ! Il n'y a aucun engagement à long terme, juste une opportunité d'aider quand vous le pouvez. Contactez-nous par e-mail ou remplissez notre formulaire.",
  },
  {
    q: "Comment communiquez-vous avec les parents ?",
    a: "Nous communiquons via e-mail, notre page Facebook, et notre site web. Nous organisons également des réunions régulières ouvertes à tous les parents.",
  },
]

const fondamentalFaq = [
  {
    q: "More English Please — Que fait l'APPA pour augmenter l'exposition à l'anglais ?",
    a: "L'APPA traite cette question en priorité. Des mesures sont en cours : films en anglais pendant les jours pluvieux, expansion des activités extra-scolaires en anglais, et à long terme, des correspondants anglophones et des voyages scolaires.",
  },
  {
    q: "Propreté des toilettes — Quelles mesures sont prises ?",
    a: "Les toilettes sont nettoyées deux fois par jour. L'école dispose de 11 blocs sanitaires avec 33 toilettes individuelles. Un projet de re-décoration proposé par l'APPA a été soumis au vote et pourrait voir le jour via un chantier participatif.",
  },
  {
    q: "Garderie & goûters santé — Quelle cohérence ?",
    a: "L'école encourage les en-cas sains dans les cartables. En garderie, une diversité est maintenue : fruits, crudités, mais aussi biscuits secs. L'objectif est de former des enfants à des choix responsables tout en ne stigmatisant aucun aliment.",
  },
]

const secondaireFaq = [
  {
    q: "Quelles sont les questions traitées pour le secondaire ?",
    a: "Nous regroupons les questions remontées par les parents du secondaire. N'hésitez pas à nous contacter à appasecondaire@eiverseau.be pour nous faire part de vos questions.",
  },
]

function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left text-base font-medium">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export function Faq() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="general">Général</TabsTrigger>
            <TabsTrigger value="fondamental">Fondamental</TabsTrigger>
            <TabsTrigger value="secondaire">Secondaire</TabsTrigger>
          </TabsList>
          <TabsContent value="general">
            <FaqList items={generalFaq} />
          </TabsContent>
          <TabsContent value="fondamental">
            <FaqList items={fondamentalFaq} />
          </TabsContent>
          <TabsContent value="secondaire">
            <FaqList items={secondaireFaq} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
