import { Network, Scale, ArrowLeftRight, Globe2, Landmark, Handshake, BarChart3, Zap } from "lucide-react"
import PageHero from "../components/PageHero"
import SectionWrapper from "../components/SectionWrapper"
import StatBand from "../components/StatBand"
import StepProcess from "../components/StepProcess"
import PreviewCard from "../components/PreviewCard"
import PullQuote from "../components/PullQuote"
import FeatureCard from "../components/FeatureCard"
import CTABanner from "../components/CTABanner"

const previewCards = [
  {
    title: "The Challenge",
    description:
      "Discover why €50 trillion in global settlement infrastructure still leaves out two of the world's three largest economies.",
    to: "/challenge",
    icon: Globe2,
  },
  {
    title: "Our Solution",
    description:
      "See how a new crossborder market infrastructure turns fragmented climate projects into investable, liquid assets.",
    to: "/solution",
    icon: Network,
  },
  {
    title: "Impact in Action",
    description:
      "Explore illustrative case studies of how this infrastructure could transform real projects on the ground.",
    to: "/impact",
    icon: Globe2,
  },
  {
    title: "Capital & Partners",
    description:
      "Learn what it takes to build a €3 trillion institution — and who's stepping up to fund it.",
    to: "/capital",
    icon: Landmark,
  },
  {
    title: "Our Vision",
    description:
      "Understand the bigger picture: financial sovereignty for the Global South's green transition.",
    to: "/vision",
    icon: Handshake,
  },
]

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

      <SectionWrapper variant="white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-slate md:text-xl">
            The world is racing to close a climate finance gap measured in
            trillions, not billions. Every year of delay locks in higher
            emissions and higher costs. The infrastructure to move capital at the
            speed and scale this moment demands doesn't yet exist for most of the
            Global South — and building it is no longer optional.
          </p>
        </div>
      </SectionWrapper>

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
        <StepProcess
          title="How It Works"
          steps={[
            {
              icon: Scale,
              title: "Standardize",
              description:
                "Member states adopt a single, unified green taxonomy, replacing dozens of conflicting national definitions.",
            },
            {
              icon: Network,
              title: "Aggregate",
              description:
                "Individual projects are bundled into diversified baskets, turning small, fragmented deals into large, tradable instruments.",
            },
            {
              icon: ArrowLeftRight,
              title: "Settle",
              description:
                "A dedicated cross-border settlement layer issues and trades green-backed securities with the same trust and efficiency as global markets.",
            },
          ]}
        />
      </SectionWrapper>

      <SectionWrapper variant="white">
        <h2 className="mb-10 text-center text-2xl font-bold text-midnight md:text-3xl">
          Explore Bleumotion
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {previewCards.map((card) => (
            <PreviewCard key={card.to} {...card} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="ice">
        <PullQuote>
          A sustainable future shouldn't be a privilege reserved for nations
          with mature capital markets. It should be within reach of every nation
          with the resources, the ambition, and the will to build it.
        </PullQuote>
      </SectionWrapper>

      <SectionWrapper variant="white">
        <h2 className="mb-10 text-center text-2xl font-bold text-midnight md:text-3xl">
          Who We Work With
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <FeatureCard
            icon={Landmark}
            title="Governments & Central Banks"
            description="Shaping taxonomy standards and adopting Euroclearability milestones."
          />
          <FeatureCard
            icon={Handshake}
            title="Multilateral Development Banks"
            description="Structuring blended finance and de-risking mechanisms."
          />
          <FeatureCard
            icon={BarChart3}
            title="Institutional Investors"
            description="Accessing scalable, de-risked green assets at investment grade."
          />
          <FeatureCard
            icon={Zap}
            title="Project Developers"
            description="Moving from early-stage concept to investment-ready faster."
          />
        </div>
      </SectionWrapper>

      <CTABanner
        headline="Ready to help build the financial architecture for a greener Global South?"
        buttonLabel="Get in Touch"
      />
    </>
  )
}
