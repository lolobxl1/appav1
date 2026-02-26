"use client"

import Link from "next/link"
import { Puzzle, Calendar, Coffee, ArrowRight } from "lucide-react"
import { useTranslation } from "@/lib/use-translation"

const activityKeys = [
  { icon: Puzzle, titleKey: "activity_1_title", textKey: "activity_1_text", href: "/a-propos#activites-midi" },
  { icon: Calendar, titleKey: "activity_2_title", textKey: "activity_2_text", href: "/a-propos#evenements-scolaires" },
  { icon: Coffee, titleKey: "activity_3_title", textKey: "activity_3_text", href: "/a-propos#rencontres-parents" },
]

export function Activities() {
  const { t } = useTranslation()

  return (
    <section className="bg-muted py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <p className="font-mono text-sm uppercase tracking-widest text-primary mb-2">
            {t("home", "activities_label")}
          </p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            {t("home", "activities_title")}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {activityKeys.map((a) => (
            <Link
              key={a.titleKey}
              href={a.href}
              className="group rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <a.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">{t("home", a.titleKey)}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{t("home", a.textKey)}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                {t("home", "activity_card_hover")}
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
