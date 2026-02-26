"use client"

import Image from "next/image"
import { Sprout, Puzzle, Egg } from "lucide-react"
import { useTranslation } from "@/lib/use-translation"

const projectConfigs = [
  {
    icon: Sprout,
    titleKey: "project_1_title",
    textKey: "project_1_text",
    image: "/images/projet-potager.jpg",
    alt: "School garden with children gardening",
  },
  {
    icon: Puzzle,
    titleKey: "project_2_title",
    textKey: "project_2_text",
    image: "/images/projet-jeux.jpg",
    alt: "Children playing in playground with new equipment",
  },
  {
    icon: Egg,
    titleKey: "project_3_title",
    textKey: "project_3_text",
    image: "/images/projet-paques.jpg",
    alt: "Easter egg hunt in the school garden",
  },
]

export function ProjectsContent() {
  const { t } = useTranslation()

  return (
    <section className="py-10 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            {t("projects", "intro_text")}
          </p>
        </div>

        <div className="flex flex-col gap-20">
          {projectConfigs.map((project, index) => {
            const isReversed = index % 2 !== 0
            return (
              <div
                key={project.titleKey}
                className={`flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16 ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="relative flex-1 overflow-hidden rounded-xl border border-border">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={720}
                    height={480}
                    className="h-auto w-full object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <project.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground text-balance">
                    {t("projects", project.titleKey)}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("projects", project.textKey)}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-20 rounded-xl border border-border bg-card p-10 text-center">
          <p className="mx-auto max-w-xl text-lg font-medium text-card-foreground leading-relaxed">
            {t("projects", "cta_text")}
          </p>
          <a
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("projects", "cta_button")}
          </a>
        </div>
      </div>
    </section>
  )
}
