"use client"

import { useEffect } from "react"
import { Link2 } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useTranslation } from "@/lib/use-translation"

const faqItems = [
  { id: "appa", category: "General", qKey: "q_appa", aKey: "a_appa" },
  { id: "benevole", category: "General", qKey: "q_benevole", aKey: "a_benevole" },
  { id: "communication", category: "General", qKey: "q_communication", aKey: "a_communication" },
  { id: "anglais", category: "Fondamental", qKey: "q_anglais", aKey: "a_anglais" },
  { id: "toilettes", category: "Fondamental", qKey: "q_toilettes", aKey: "a_toilettes" },
  { id: "gouters", category: "Fondamental", qKey: "q_gouters", aKey: "a_gouters" },
  { id: "secondaire", category: "Secondaire", qKey: "q_secondaire", aKey: "a_secondaire" },
]

const categoryKeys = [
  { key: "General", nameKey: "category_general" },
  { key: "Fondamental", nameKey: "category_fondamental" },
  { key: "Secondaire", nameKey: "category_secondaire" },
]

export function Faq() {
  const { t } = useTranslation()

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash) {
      const el = document.getElementById(hash)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "center" })
        }, 100)
      }
    }
  }, [])

  function copyAnchor(id: string) {
    const url = `${window.location.origin}${window.location.pathname}#${id}`
    navigator.clipboard.writeText(url)
  }

  return (
    <section className="py-10 px-6">
      <div className="mx-auto max-w-3xl space-y-12">
        {categoryKeys.map((cat) => {
          const items = faqItems.filter((item) => item.category === cat.key)
          return (
            <div key={cat.key}>
              <h2 className="mb-6 text-xl font-bold text-foreground">{t("faq", cat.nameKey)}</h2>
              <Accordion type="single" collapsible className="w-full">
                {items.map((item) => (
                  <AccordionItem key={item.id} value={item.id} id={item.id} className="scroll-mt-28">
                    <AccordionTrigger className="text-left text-base font-medium hover:no-underline gap-3">
                      <span>{t("faq", item.qKey)}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      <p>{t("faq", item.aKey)}</p>
                      <button
                        onClick={() => copyAnchor(item.id)}
                        className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                        title={t("faq", "copy_link")}
                      >
                        <Link2 className="h-3.5 w-3.5" />
                        {t("faq", "copy_link")}
                      </button>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )
        })}
      </div>
    </section>
  )
}
