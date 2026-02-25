"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Facebook, Instagram } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "A propos", href: "/a-propos" },
  { label: "Actualites", href: "/actualites" },
  { label: "Nos Projets", href: "/nos-projets" },
  { label: "Questions frequentes", href: "/faq" },
  { label: "Boutique", href: "/boutique" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-md border-b border-background/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/appa-logo.png"
            alt="APPA - Association des Parents du Verseau"
            width={120}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => {
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
                {link.label}
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
        </div>

        <button
          className="md:hidden text-background"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-background/10 bg-foreground/95 backdrop-blur-md md:hidden">
          <nav className="flex flex-col px-6 py-4 gap-3" aria-label="Mobile navigation">
            {navLinks.map((link) => {
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
                  {link.label}
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
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
