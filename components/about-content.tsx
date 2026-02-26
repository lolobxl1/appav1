"use client"

import Image from "next/image"
import { useTranslation } from "@/lib/use-translation"

const paragraphConfigs = [
  {
    id: "activites-midi",
    titleKey: "paragraph_1_title",
    textKeys: ["paragraph_1_text_1", "paragraph_1_text_2", "paragraph_1_text_3"],
    image: "/images/about-enfants.jpg",
    alt: "Children playing and doing activities at school",
  },
  {
    id: "evenements-scolaires",
    titleKey: "paragraph_2_title",
    textKeys: ["paragraph_2_text_1", "paragraph_2_text_2", "paragraph_2_text_3", "paragraph_2_text_4"],
    image: "/images/about-communaute.jpg",
    alt: "Parents gathered at a community event",
  },
  {
    id: "rencontres-parents",
    titleKey: "paragraph_3_title",
    textKeys: ["paragraph_3_text_1", "paragraph_3_text_2"],
    image: "/images/about-communication.jpg",
    alt: "Parents and teachers discussing together at school",
  },
]

export function AboutContent() {
  const { t } = useTranslation()

  return (
    <>
      {paragraphConfigs.map((p, i) => (
        <section
          key={p.id}
          id={p.id}
          className={`scroll-mt-24 ${i % 2 === 1 ? "py-20 px-6 bg-muted" : "py-20 px-6"}`}
        >
          <div className="mx-auto max-w-7xl">
            <div
              className={`flex flex-col gap-12 lg:items-center lg:gap-16 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="lg:w-1/2">
                <h2 className="text-2xl font-bold md:text-3xl text-balance">
                  {t("about", p.titleKey)}
                </h2>
                <div className="mt-6 space-y-4 text-muted-foreground text-base leading-relaxed">
                  {p.textKeys.map((key) => (
                    <p key={key}>{t("about", key)}</p>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    width={640}
                    height={420}
                    className="h-auto w-full object-cover"
                    {...(i === 0 ? { priority: true } : {})}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
