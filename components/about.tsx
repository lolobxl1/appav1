"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function About() {
  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <Tabs defaultValue="histoire" className="mx-auto max-w-4xl">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="histoire">Histoire</TabsTrigger>
            <TabsTrigger value="role">Rôle</TabsTrigger>
            <TabsTrigger value="objectifs">Objectifs</TabsTrigger>
          </TabsList>
          <TabsContent value="histoire" className="rounded-xl border border-border bg-card p-8">
            <p className="text-muted-foreground leading-relaxed">
              {"Créée en 1997 après des discussions entre la Direction, les professeurs et les parents, notre association — également connue sous le nom de GAS — a pour but d'apporter son aide au Pouvoir Organisateur et à la direction de l'école. Le groupe est indépendant du Conseil de Participation, un comité obligatoire imposé par le Ministère de l'Éducation. L'Association des Parents s'est fixée comme objectif unique de contribuer au développement harmonieux de la communauté du Verseau, en rapprochant ses membres et en favorisant leurs relations."}
            </p>
          </TabsContent>
          <TabsContent value="role" className="rounded-xl border border-border bg-card p-8">
            <ul className="space-y-4 text-muted-foreground leading-relaxed">
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>{"Défendre les intérêts de tous les élèves et améliorer la qualité de vie au sein d'une école internationale."}</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>{"Susciter la participation de tous les parents à la vie de l'école et à la scolarité de leur(s) enfant(s)."}</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>{"Recueillir le point de vue des parents et émettre des avis ou propositions constructives."}</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>{"Créer des relations positives entre tous les partenaires de l'école afin de construire une véritable communauté éducative."}</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <span>{"Permettre une meilleure représentation des parents auprès de la direction et du Conseil de participation."}</span>
              </li>
            </ul>
          </TabsContent>
          <TabsContent value="objectifs" className="rounded-xl border border-border bg-card p-8">
            <ul className="space-y-4 text-muted-foreground leading-relaxed">
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span>{"Collaborer avec l'école, les enseignants et la direction via des réunions fréquentes."}</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span>{"Représenter les avis multiculturels des parents sur des sujets importants."}</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span>{"Améliorer la vie des enfants par des actions concrètes : jeux de société, bricolages, ateliers échecs."}</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span>{"Organiser des conférences et débats sur des thèmes éducatifs et de santé."}</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span>{"Organiser des activités pour soutenir financièrement l'école : vente de chocolats, buffet international, échange de livres."}</span>
              </li>
            </ul>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
