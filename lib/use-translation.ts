"use client"

import { useLocale } from "./language-context"
import translations from "./translations.json"

interface TranslationEntry {
  category: string
  name: string
  value_fr: string
  value_en: string
}

const data = translations as TranslationEntry[]

export function useTranslation() {
  const { locale } = useLocale()

  function t(category: string, name: string): string {
    const entry = data.find((e) => e.category === category && e.name === name)
    if (!entry) return `[${category}.${name}]`
    return locale === "en" ? entry.value_en : entry.value_fr
  }

  return { t, locale }
}
