"use client"

import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"
import { useTranslation } from "@/lib/use-translation"

const footerLinkKeys = [
  { nameKey: "1", href: "/" },
  { nameKey: "2", href: "/a-propos" },
  { nameKey: "3", href: "/actualites" },
  { nameKey: "4", href: "/nos-projets" },
  { nameKey: "5", href: "/faq" },
  { nameKey: "6", href: "/boutique" },
  { nameKey: "7", href: "/contact" },
]

export function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-foreground py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div>
            <span className="text-lg font-bold text-background">
              {t("footer", "org_name")}
            </span>
            <p className="mt-1 text-sm text-background/60">
              {t("footer", "org_description")}
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer navigation">
            {footerLinkKeys.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-background/60 transition-colors hover:text-background">
                {t("menu", link.nameKey)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 text-background/70 transition-colors hover:bg-background/20 hover:text-background"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-background/10 text-background/70 transition-colors hover:bg-background/20 hover:text-background"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-background/10 pt-6 text-center">
          <p className="text-xs text-background/40">
            {`© ${t("footer", "copyright")}`}
          </p>
        </div>
      </div>
    </footer>
  )
}
