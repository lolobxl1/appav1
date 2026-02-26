"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/use-translation"

export function Hero() {
  const { t } = useTranslation()

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Parents and children at Le Verseau international school"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-foreground/60" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="max-w-2xl">
          <p className="font-mono text-sm uppercase tracking-widest text-secondary mb-4">
            {t("home", "hero_label")}
          </p>
          <h1 className="text-4xl font-bold leading-tight text-background sm:text-5xl lg:text-6xl text-balance">
            {t("home", "main_title")}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-background/90 max-w-xl">
            {t("home", "main_text")}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/a-propos">
                {t("home", "hero_button")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
