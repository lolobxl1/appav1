"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const categories = ["Tous", "A la une", "Boutique", "Fondamental", "Secondaire"]

const articles = [
  {
    title: "Marche familiale aux lanternes - Fete des lumieres",
    image: "/images/news-lanterns.jpg",
    tags: ["A la une", "Fondamental"],
  },
  {
    title: "Resultats du sondage Le Verseau Unplugged 2025-2026",
    image: "/images/news-survey.jpg",
    tags: ["A la une", "Fondamental", "Secondaire"],
  },
  {
    title: "Illuminez la saison avec nos goodies de Noel !",
    image: "/images/news-christmas.jpg",
    tags: ["A la une", "Boutique", "Fondamental", "Secondaire"],
  },
  {
    title: "Rallye lecture : une seconde vie pour les livres !",
    image: "/images/news-books.jpg",
    tags: ["A la une", "Fondamental"],
  },
]

export function NewsSection() {
  const [active, setActive] = useState("Tous")

  const filtered =
    active === "Tous"
      ? articles
      : articles.filter((a) => a.tags.includes(active))

  return (
    <section id="news" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <p className="font-mono text-sm uppercase tracking-widest text-primary mb-2">
            A__News
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            A la une
          </h2>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((article) => (
            <article
              key={article.title}
              className="group cursor-pointer overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-medium">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-sm font-semibold leading-snug text-card-foreground group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
