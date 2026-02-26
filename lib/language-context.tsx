"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Locale = "fr" | "en"

interface LanguageContextType {
  locale: Locale
  toggleLocale: () => void
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "fr",
  toggleLocale: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("fr")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("locale")
    if (stored === "en" || stored === "fr") {
      setLocale(stored)
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("locale", locale)
      document.documentElement.lang = locale
    }
  }, [locale, mounted])

  function toggleLocale() {
    setLocale((prev) => (prev === "fr" ? "en" : "fr"))
  }

  return (
    <LanguageContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLocale() {
  return useContext(LanguageContext)
}
