import { Leaf, TrendingUp, ArrowLeftRight } from "lucide-react"
import PageHero from "../components/PageHero"
import SectionWrapper from "../components/SectionWrapper"
import CTABanner from "../components/CTABanner"

export default function Impact() {
  return (
    <>
      <PageHero
        headline="From Renewable Resource to Investable Asset"
      />

      <SectionWrapper variant="white">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-ice">
            <Leaf className="h-6 w-6 text-royal" aria-hidden="true" />
          </div>
          <p className="text-lg leading-relaxed text-slate">
            Picture a coastal nation in the Global South with world-class wind
            and solar resources and ambitions to become a regional clean-energy
            hub — backed by international development partners. Despite strong
            fundamentals, large-scale renewable infrastructure projects often
            stall at the early planning stage, held back by unpredictable
            revenue streams and inconsistent legal standards across borders.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="ice">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-white p-8 shadow-md shadow-sky/10 md:p-10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ice">
              <ArrowLeftRight
                className="h-6 w-6 text-royal"
                aria-hidden="true"
              />
            </div>
            <h2 className="text-2xl font-bold text-midnight">
              How the New Infrastructure Changes This
            </h2>
            <p className="mt-4 leading-relaxed text-slate">
              By applying a unified green taxonomy and a trusted, shared
              settlement platform, long-term offtake contracts can be bundled
              into tradable, green-backed securities. This reduces the need for
              project-by-project due diligence, reshapes the risk profile, and
              provides the collateral certainty needed to attract private
              capital at scale.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="white">
        <div className="mx-auto flex max-w-3xl items-start gap-6">
          <div className="hidden shrink-0 md:block">
            <TrendingUp
              className="h-10 w-10 text-royal"
              aria-hidden="true"
            />
          </div>
          <p className="text-lg font-medium leading-relaxed text-midnight md:text-xl">
            Multiply this across dozens of countries and sectors, and the case
            for a dedicated Global South market infrastructure becomes clear —
            not as an aspiration, but as an economic necessity.
          </p>
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  )
}
