"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Locale = "fr" | "en"

export interface TranslationEntry {
  category: string
  name: string
  value_fr: string
  value_en: string
}

interface LanguageContextType {
  locale: Locale
  toggleLocale: () => void
  translations: TranslationEntry[]
  isLoading: boolean
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "fr",
  toggleLocale: () => {},
  translations: [],
  isLoading: true,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("fr")
  const [mounted, setMounted] = useState(false)
  const [translations, setTranslations] = useState<TranslationEntry[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem("locale")
    if (stored === "en" || stored === "fr") {
      setLocale(stored)
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    fetch("/php/website.php")
      .then((res) => res.json())
      .then((data: TranslationEntry[]) => {
        setTranslations(data)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
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
    <LanguageContext.Provider value={{ locale, toggleLocale, translations, isLoading }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLocale() {
  return useContext(LanguageContext)
}
