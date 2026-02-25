"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const categories = ["Tout", "A la une", "Boutique", "Fondamental", "Secondaire"]

const articles = [
  {
    title: "Marche familiale aux lanternes - Fête des lumières",
    image: "/images/lanterns.jpg",
    tags: ["A la une", "Fondamental"],
  },
  {
    title: "Résultats du sondage Le Verseau Unplugged 2025-2026",
    image: "/images/survey.jpg",
    tags: ["A la une", "Fondamental", "Secondaire"],
  },
  {
    title: "Illuminez la saison avec nos goodies de Noël !",
    image: "/images/christmas.jpg",
    tags: ["A la une", "Boutique", "Fondamental", "Secondaire"],
  },
  {
    title: "Rallye lecture : une seconde vie pour les livres !",
    image: "/images/books.jpg",
    tags: ["A la une", "Fondamental"],
  },
]

export function News() {
  const [active, setActive] = useState("Tout")

  const filtered = active === "Tout"
    ? articles
    : articles.filter((a) => a.tags.includes(active))

  return (
    <section id="news" className="py-24 px-6 bg-secondary">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="font-mono text-sm uppercase tracking-widest text-primary mb-3">Actualités</p>
          <h2 className="text-3xl font-bold md:text-5xl text-balance">À la une</h2>
        </div>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((article) => (
            <article
              key={article.title}
              className="group cursor-pointer overflow-hidden rounded-xl bg-card border border-border transition-all hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-sm font-semibold leading-snug group-hover:text-primary transition-colors">
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
