import { Leaf, TrendingUp, ArrowLeftRight, Sprout, Bus } from "lucide-react"
import PageHero from "../components/PageHero"
import SectionWrapper from "../components/SectionWrapper"
import CTABanner from "../components/CTABanner"

function CaseStudyCard({
  icon: Icon,
  title,
  challenge,
  solution,
}: {
  icon: typeof Leaf
  title: string
  challenge: string
  solution: string
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md shadow-sky/10 sm:p-8 md:p-10">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ice">
        <Icon className="h-6 w-6 text-royal" aria-hidden="true" />
      </div>
      <h2 className="text-2xl font-bold text-midnight">{title}</h2>
      {challenge && (
        <p className="mt-4 leading-relaxed text-slate">
          <strong className="text-midnight">The challenge:</strong> {challenge}
        </p>
      )}
      <p className="mt-4 leading-relaxed text-slate">
        <strong className="text-midnight">How the infrastructure helps:</strong>{" "}
        {solution}
      </p>
    </div>
  )
}

export default function Impact() {
  return (
    <>
      <PageHero headline="From Renewable Resource to Investable Asset" />

      <SectionWrapper variant="white">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-ice">
            <Leaf className="h-6 w-6 text-royal" aria-hidden="true" />
          </div>
          <p className="text-base leading-relaxed text-slate md:text-lg">
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
          <CaseStudyCard
            icon={ArrowLeftRight}
            title="How the New Infrastructure Changes This"
            challenge=""
            solution="By applying a unified green taxonomy and a trusted, shared settlement platform, long-term offtake contracts can be bundled into tradable, green-backed securities. This reduces the need for project-by-project due diligence, reshapes the risk profile, and provides the collateral certainty needed to attract private capital at scale."
          />
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

      <SectionWrapper variant="ice">
        <div className="mx-auto max-w-3xl space-y-8">
          <CaseStudyCard
            icon={Sprout}
            title="Sustainable Agriculture & Land Restoration"
            challenge="Smallholder farmer cooperatives across several Global South nations are running reforestation and regenerative agriculture programs with real climate benefits — but each program is too small and too locally regulated to attract international green capital on its own."
            solution="Programs sharing a common environmental standard are bundled into a single diversified portfolio. International investors gain exposure to a continent-spanning land restoration effort through one tradable instrument, while local cooperatives gain access to financing previously out of reach."
          />
          <CaseStudyCard
            icon={Bus}
            title="Urban Clean Transit"
            challenge="Fast-growing cities across the Global South want to electrify bus and rail fleets to cut emissions and congestion, but municipal-level projects are typically too small, and too unfamiliar to international investors, to finance independently."
            solution="Multiple cities' transit upgrade programs — across different countries — are aggregated into one green-backed security under the shared taxonomy, with blended finance guarantees covering early-stage revenue risk. The result: faster fleet electrification, cleaner cities, and an investable asset class for global capital."
          />
        </div>
      </SectionWrapper>

      <SectionWrapper variant="white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-midnight md:text-3xl">
            Projected Impact at Scale
          </h2>
          <ul className="mt-6 space-y-3">
            {[
              "Each aggregated green bond could finance dozens of individual projects spanning multiple countries and sectors",
              'De-risking mechanisms could bring previously "unbankable" projects within reach of mainstream institutional capital',
              "A shared taxonomy could cut due-diligence timelines from years to months for cross-border green investment",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 leading-relaxed text-slate"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-royal" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm italic text-slate/80">
            Illustrative framing only — not based on published projections.
            Verified figures and sources will replace this text once available.
          </p>
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  )
}
