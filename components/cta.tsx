"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTranslation } from "@/lib/use-translation"

export function Cta() {
  const { t } = useTranslation()

  return (
    <section className="py-24 px-6 bg-muted">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-mono text-sm uppercase tracking-widest text-primary mb-3">{t("home", "cta_label")}</p>
        <h2 className="text-3xl font-bold md:text-5xl text-balance">
          {t("home", "cta_title")}
        </h2>
        <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
          {t("home", "cta_text")}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <Link href="mailto:appasecondaire@eiverseau.be">
              {t("home", "cta_button")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
