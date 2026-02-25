interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section
      className="relative pt-28 pb-8 px-6 overflow-hidden bg-primary"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 80% 60% at 30% 70%, hsl(var(--accent) / .10), transparent), radial-gradient(ellipse 100% 50% at 80% 20%, hsl(var(--secondary) / .25), transparent)",
      }}
    >
      <div className="relative mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-background sm:text-4xl text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-background/70">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
