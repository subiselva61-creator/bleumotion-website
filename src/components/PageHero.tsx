import type { ReactNode } from "react"
import Button from "./Button"

interface PageHeroProps {
  headline: string
  subheadline?: string
  children?: ReactNode
  ctas?: { label: string; to: string; variant?: "primary" | "secondary" | "outline" }[]
}

export default function PageHero({
  headline,
  subheadline,
  children,
  ctas,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-midnight via-midnight to-royal px-6 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-12">
          <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">
            {headline}
          </h1>
          {subheadline && (
            <p className="mt-6 text-lg leading-relaxed text-white/85 md:text-xl">
              {subheadline}
            </p>
          )}
          {children}
          {ctas && ctas.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-4">
              {ctas.map((cta) => (
                <Button
                  key={cta.label}
                  to={cta.to}
                  variant={cta.variant ?? "primary"}
                >
                  {cta.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
