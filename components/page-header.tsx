import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  description?: string
  variant?: "default" | "primary"
}

export function PageHeader({ title, description, variant = "default" }: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative pt-28 pb-12 px-6 overflow-hidden",
        variant === "primary"
          ? "bg-primary"
          : "bg-foreground"
      )}
    >
      {/* Layered gradient mesh */}
      <div
        className={cn(
          "absolute inset-0",
          variant === "primary"
            ? "bg-[radial-gradient(ellipse_80%_60%_at_10%_90%,hsl(var(--accent)/0.25),transparent),radial-gradient(ellipse_60%_50%_at_80%_20%,hsl(var(--secondary)/0.15),transparent)]"
            : "bg-[radial-gradient(ellipse_80%_60%_at_10%_90%,hsl(var(--primary)/0.2),transparent),radial-gradient(ellipse_60%_50%_at_80%_20%,hsl(var(--accent)/0.08),transparent)]"
        )}
      />

      {/* Decorative floating shapes */}
      <div
        className={cn(
          "absolute -top-16 -right-16 h-64 w-64 rounded-full blur-3xl",
          variant === "primary"
            ? "bg-accent/15"
            : "bg-primary/10"
        )}
      />
      <div
        className={cn(
          "absolute -bottom-20 -left-20 h-48 w-48 rounded-full blur-3xl",
          variant === "primary"
            ? "bg-background/10"
            : "bg-accent/8"
        )}
      />

      {/* Noise texture overlay for depth */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

      {/* Subtle top border highlight */}
      <div
        className={cn(
          "absolute top-0 left-0 right-0 h-px",
          variant === "primary"
            ? "bg-gradient-to-r from-transparent via-accent/30 to-transparent"
            : "bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        )}
      />

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
