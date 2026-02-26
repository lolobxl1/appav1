"use client"

import { useLocale } from "./language-context"

export function useTranslation() {
  const { locale, translations, isLoading } = useLocale()

  function t(category: string, name: string): string {
    const entry = translations.find((e) => e.category === category && e.name === name)
    if (!entry) return isLoading ? "" : `[${category}.${name}]`
    return locale === "en" ? entry.value_en : entry.value_fr
  }

  return { t, locale, isLoading }
}
