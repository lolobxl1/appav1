"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from "@/lib/use-translation"

export function BackToNews() {
  const { t } = useTranslation()

  return (
    <Button variant="outline" asChild>
      <Link href="/actualites">
        <ArrowLeft className="mr-2 h-4 w-4" />
        {t("news", "back_button")}
      </Link>
    </Button>
  )
}
