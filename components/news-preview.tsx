"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { articles } from "@/lib/articles"
import { useTranslation } from "@/lib/use-translation"

const latestArticles = articles.slice(0, 2)

export function NewsPreview() {
  const { t } = useTranslation()

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-12">
          <div>
            <p className="font-mono text-sm uppercase tracking-widest text-primary mb-3">
              {t("home", "news_label")}
            </p>
            <h2 className="text-3xl font-bold md:text-4xl text-balance">
              {t("home", "news_title")}
            </h2>
          </div>
          <Button variant="outline" asChild>
            <Link href="/actualites">
              {t("home", "news_button")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {latestArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/actualites/${article.slug}`}
              className="group overflow-hidden rounded-xl bg-card border border-border transition-all hover:shadow-lg"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-lg font-semibold leading-snug group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
