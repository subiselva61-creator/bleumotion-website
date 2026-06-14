import { Link } from "react-router-dom"
import { Globe2, Network, ArrowRight } from "lucide-react"
import PageHero from "../components/PageHero"
import SectionWrapper from "../components/SectionWrapper"
import StatBand from "../components/StatBand"
import CTABanner from "../components/CTABanner"

export default function Home() {
  return (
    <>
      <PageHero
        headline="Building the Financial Architecture for a Greener Global South"
        subheadline="Bleumotion partners with governments, central banks and development institutions to design the market infrastructure that unlocks trillions in climate capital — for the countries that need it most."
        ctas={[
          { label: "Explore Our Solution", to: "/solution" },
          { label: "Talk to Us", to: "/contact", variant: "outline" },
        ]}
      />

      <SectionWrapper variant="ice">
        <StatBand
          stats={[
            {
              value: "€50T+",
              label:
                "assets currently settled through existing global depositories",
            },
            {
              value: "€3T",
              label:
                "proposed capital base for a new Global South market infrastructure",
            },
            {
              value: "2 of 3",
              label:
                "of the world's largest economies largely excluded from today's cross-border settlement systems",
            },
          ]}
        />
      </SectionWrapper>

      <SectionWrapper variant="white">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-ice">
            <Network className="h-7 w-7 text-royal" aria-hidden="true" />
          </div>
          <p className="text-lg leading-relaxed text-slate md:text-xl">
            The world has no shortage of capital looking for sustainable
            returns. What's missing is the plumbing that connects it to the
            projects that need it. That's the gap Bleumotion is closing.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="ice">
        <h2 className="mb-10 text-center text-2xl font-bold text-midnight md:text-3xl">
          Explore Bleumotion
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "The Challenge",
              description:
                "Why current global financial infrastructure fails the Global South.",
              to: "/challenge",
              icon: Globe2,
            },
            {
              title: "Our Solution",
              description:
                "A dedicated Global South Crossborder Market Infrastructure.",
              to: "/solution",
              icon: Network,
            },
            {
              title: "Impact in Action",
              description:
                "How unified infrastructure turns resources into investable assets.",
              to: "/impact",
              icon: Globe2,
            },
          ].map((card) => (
            <Link
              key={card.to}
              to={card.to}
              className="group rounded-2xl bg-white p-6 shadow-md shadow-sky/10 transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal"
            >
              <card.icon
                className="mb-4 h-8 w-8 text-royal"
                aria-hidden="true"
              />
              <h3 className="text-xl font-semibold text-midnight">
                {card.title}
              </h3>
              <p className="mt-2 text-slate">{card.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-royal group-hover:text-electric">
                Learn more <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  )
}
