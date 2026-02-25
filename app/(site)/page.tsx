import { Hero } from "@/components/hero"
import { Activities } from "@/components/activities"
import { NewsPreview } from "@/components/news-preview"
import { AboutTeaser } from "@/components/about-teaser"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Activities />
      <NewsPreview />
      <AboutTeaser />
    </>
  )
}
