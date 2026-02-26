"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Facebook, Instagram } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLocale } from "@/lib/language-context"
import { useTranslation } from "@/lib/use-translation"

const navLinkKeys = [
  { nameKey: "1", href: "/" },
  { nameKey: "2", href: "/a-propos" },
  { nameKey: "3", href: "/actualites" },
  { nameKey: "4", href: "/nos-projets" },
  { nameKey: "5", href: "/faq" },
  { nameKey: "6", href: "/boutique" },
  { nameKey: "7", href: "/contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { locale, toggleLocale } = useLocale()
  const { t } = useTranslation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-md border-b border-background/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-background">
            APPA
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinkKeys.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-background",
                  isActive ? "text-secondary" : "text-background/60"
                )}
              >
                {t("menu", link.nameKey)}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-background/60 transition-colors hover:text-secondary"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-background/60 transition-colors hover:text-secondary"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </Link>
          <button
            onClick={toggleLocale}
            className="ml-1 rounded-md border border-background/20 px-2 py-1 text-xs font-bold uppercase text-background/70 transition-colors hover:bg-background/10 hover:text-background"
            aria-label={locale === "fr" ? "Switch to English" : "Passer en francais"}
          >
            {locale === "fr" ? "EN" : "FR"}
          </button>
        </div>

        <button
          className="md:hidden text-background"
          onClick={() => setOpen(!open)}
          aria-label={open ? t("navbar", "close_menu") : t("navbar", "open_menu")}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-background/10 bg-foreground/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col px-6 py-4 gap-3" aria-label="Mobile navigation">
            {navLinkKeys.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-base font-medium transition-colors hover:text-background py-2",
                    isActive ? "text-secondary" : "text-background/60"
                  )}
                >
                  {t("menu", link.nameKey)}
                </Link>
              )
            })}
            <div className="flex items-center gap-3 pt-3 border-t border-background/10">
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/60 transition-colors hover:text-secondary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/60 transition-colors hover:text-secondary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <button
                onClick={toggleLocale}
                className="ml-auto rounded-md border border-background/20 px-2 py-1 text-xs font-bold uppercase text-background/70 transition-colors hover:bg-background/10 hover:text-background"
                aria-label={locale === "fr" ? "Switch to English" : "Passer en francais"}
              >
                {locale === "fr" ? "EN" : "FR"}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
