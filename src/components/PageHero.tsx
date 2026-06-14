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
    <section className="relative overflow-hidden bg-gradient-to-br from-midnight via-midnight to-royal px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 md:pb-[148px] md:pt-[148px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="hero-glass mx-auto max-w-4xl rounded-2xl border border-white/12 p-6 text-center sm:p-8 md:p-12">
          <h1 className="text-2xl font-bold leading-tight text-white sm:text-3xl md:text-5xl">
            {headline}
          </h1>
          {subheadline && (
            <p className="mt-6 text-base leading-relaxed text-white/85 sm:text-lg md:text-xl">
              {subheadline}
            </p>
          )}
          {children}
          {ctas && ctas.length > 0 && (
            <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
              {ctas.map((cta) => (
                <Button
                  key={cta.label}
                  to={cta.to}
                  variant={cta.variant ?? "primary"}
                  fullWidth
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
