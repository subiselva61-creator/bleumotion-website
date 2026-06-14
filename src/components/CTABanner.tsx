import Button from "./Button"

export default function CTABanner() {
  return (
    <section className="bg-gradient-to-r from-royal to-electric px-6 py-16 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
        <h2 className="max-w-2xl text-2xl font-bold text-white md:text-3xl">
          Ready to build the future of green finance with us?
        </h2>
        <Button to="/contact" variant="outline">
          Get in Touch
        </Button>
      </div>
    </section>
  )
}
