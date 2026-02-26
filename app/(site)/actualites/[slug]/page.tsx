import { notFound } from "next/navigation"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { articles, getArticleBySlug } from "@/lib/articles"
import { BackToNews } from "@/components/back-to-news"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return { title: "Article introuvable | APPA" }
  return {
    title: `${article.title} | APPA`,
    description: article.description,
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  return (
    <>
      {/* Hero banner with article image */}
      <section className="relative pt-24 pb-0">
        <div className="relative aspect-[21/9] max-h-[400px] w-full overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-8">
            <div className="mx-auto max-w-3xl">
              <div className="flex flex-wrap gap-1.5 mb-3">
                {article.tags.map((tag) => (
                  <Badge key={tag} className="bg-background/20 text-background border-background/20 text-xs backdrop-blur-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h1 className="text-2xl font-bold text-background sm:text-4xl text-balance leading-tight">
                {article.title}
              </h1>
              <p className="mt-2 text-sm font-mono text-background/60">{article.date}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article content */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            {article.description}
          </p>
          <div className="space-y-6">
            {article.content.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-foreground/80">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <BackToNews />
          </div>
        </div>
      </section>
    </>
  )
}
