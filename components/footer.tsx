import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div>
            <span className="text-lg font-bold text-background">
              APPA
            </span>
            <p className="mt-1 text-sm text-background/60">
              {"Association des Parents de l'ecole internationale Le Verseau"}
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6" aria-label="Footer navigation">
            <Link href="/" className="text-sm text-background/60 transition-colors hover:text-background">
              Accueil
            </Link>
            <Link href="/a-propos" className="text-sm text-background/60 transition-colors hover:text-background">
              A propos
            </Link>
            <Link href="/actualites" className="text-sm text-background/60 transition-colors hover:text-background">
              Actualites
            </Link>
            <Link href="/nos-projets" className="text-sm text-background/60 transition-colors hover:text-background">
              Nos Projets
            </Link>
            <Link href="/extra-scolaire" className="text-sm text-background/60 transition-colors hover:text-background">
              Extra-scolaire
            </Link>
            <Link href="/le-verseau-unplugged" className="text-sm text-background/60 transition-colors hover:text-background">
              Le Verseau Unplugged
            </Link>
            <Link href="/faq" className="text-sm text-background/60 transition-colors hover:text-background">
              Questions frequentes
            </Link>
            <Link href="/contact" className="text-sm text-background/60 transition-colors hover:text-background">
              Contact
            </Link>
            <Link href="/boutique" className="text-sm text-background/60 transition-colors hover:text-background">
              Boutique
            </Link>
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
            {"© 2026 APPA. Tous droits reserves."}
          </p>
        </div>
      </div>
    </footer>
  )
}
