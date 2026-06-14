import { Link } from "react-router-dom"
import { Scale, ShieldCheck, ArrowRight } from "lucide-react"
import PageHero from "../components/PageHero"
import SectionWrapper from "../components/SectionWrapper"
import CTABanner from "../components/CTABanner"

export default function Vision() {
  return (
    <>
      <PageHero headline="Financial Sovereignty for a Sustainable Future" />

      <SectionWrapper variant="white">
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-slate">
          <p>
            For decades, development finance has often come with conditions
            attached — austerity measures, policy constraints, and limited
            autonomy. Bleumotion believes the Global South's green transition
            shouldn't have to follow that path.
          </p>
          <p>
            By building shared financial infrastructure, backed by their own
            institutions, countries across the Global South can move from being
            recipients of conditional finance to sovereign issuers shaping their
            own liquid, stable markets.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="ice">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-md shadow-sky/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ice">
              <Scale className="h-6 w-6 text-royal" aria-hidden="true" />
            </div>
            <h2 className="text-xl font-semibold text-midnight">
              Economic Autonomy
            </h2>
            <p className="mt-3 leading-relaxed text-slate">
              The ability to attract capital on locally relevant terms,
              governed by a standard designed for the realities of the Global
              South, not imposed from outside.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-md shadow-sky/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ice">
              <ShieldCheck className="h-6 w-6 text-royal" aria-hidden="true" />
            </div>
            <h2 className="text-xl font-semibold text-midnight">
              Sovereign Issuance
            </h2>
            <p className="mt-3 leading-relaxed text-slate">
              Nations gain the tools to define — and finance — their own
              sustainable future, on their own terms.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xl font-medium leading-relaxed text-midnight md:text-2xl">
            This is about more than infrastructure. It's about giving nations
            the tools to define — and finance — their own sustainable future.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 text-lg font-semibold text-royal transition-colors hover:text-electric focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal"
          >
            Partner with Bleumotion to help build this infrastructure
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  )
}
