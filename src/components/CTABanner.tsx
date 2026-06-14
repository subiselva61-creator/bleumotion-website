import Button from "./Button"

interface CTABannerProps {
  headline?: string
  buttonLabel?: string
  to?: string
}

export default function CTABanner({
  headline = "Ready to build the future of green finance with us?",
  buttonLabel = "Get in Touch",
  to = "/contact",
}: CTABannerProps) {
  return (
    <section className="bg-gradient-to-r from-royal to-electric px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-stretch justify-between gap-6 sm:items-start md:flex-row md:items-center">
        <h2 className="max-w-2xl text-2xl font-bold text-white md:text-3xl">
          {headline}
        </h2>
        <Button to={to} variant="outline" fullWidth>
          {buttonLabel}
        </Button>
      </div>
    </section>
  )
}
