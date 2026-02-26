"use client"

import { Mail, Facebook, Instagram } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/use-translation"

const teamConfigs = [
  { titleKey: "team_1_title", membersKey: "team_1_members", emailKey: "team_1_email" },
  { titleKey: "team_2_title", membersKey: "team_2_members", emailKey: "team_2_email" },
]

export function Team() {
  const { t } = useTranslation()

  return (
    <section className="py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 max-w-3xl mx-auto">
          {teamConfigs.map((team) => (
            <div key={team.titleKey} className="rounded-xl border border-border bg-card p-8 text-center">
              <h3 className="text-xl font-bold">{t("contact", team.titleKey)}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{t("contact", team.membersKey)}</p>
              <Link
                href={`mailto:${t("contact", team.emailKey)}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <Mail className="h-4 w-4" />
                {t("contact", team.emailKey)}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">{t("contact", "social_text")}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant="outline" size="lg" asChild>
              <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="mr-2 h-5 w-5" />
                Facebook
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-5 w-5" />
                Instagram
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
