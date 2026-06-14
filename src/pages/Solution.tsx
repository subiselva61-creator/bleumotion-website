import {
  ShieldCheck,
  ArrowLeftRight,
  TrendingUp,
  Scale,
  Handshake,
  Lock,
  Network,
  FileCheck,
  Zap,
  Leaf,
} from "lucide-react"
import PageHero from "../components/PageHero"
import SectionWrapper from "../components/SectionWrapper"
import FeatureCard from "../components/FeatureCard"
import CTABanner from "../components/CTABanner"

export default function Solution() {
  return (
    <>
      <PageHero
        headline="A New Crossborder Market Infrastructure for the Global South"
        subheadline="Bleumotion is advancing a bold proposition: a dedicated Global South Crossborder Market Infrastructure — conceived and supported by the major economies and governments of the Global South — to fundamentally re-engineer how climate finance flows across borders."
      />

      <SectionWrapper variant="ice">
        <h2 className="mb-10 text-center text-2xl font-bold text-midnight md:text-3xl">
          Three Core Aims
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={ShieldCheck}
            title="Mitigate Risk"
            description="Standardize and simplify post-trade processes, reducing the perceived risk of investing in emerging and frontier markets."
          />
          <FeatureCard
            icon={ArrowLeftRight}
            title="Transcend Hurdles"
            description="Create a single, clear gateway for international capital, bypassing fragmented domestic systems."
          />
          <FeatureCard
            icon={TrendingUp}
            title="Unlock Scale"
            description="Provide a trusted settlement mechanism for green bonds and sustainable assets, connecting available capital with the projects that need it."
          />
        </div>
      </SectionWrapper>

      <SectionWrapper variant="white">
        <h2 className="mb-10 text-center text-2xl font-bold text-midnight md:text-3xl">
          How It Works — Two Structural Remedies
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-ice p-8 shadow-md shadow-sky/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white">
              <Scale className="h-6 w-6 text-royal" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-midnight">
              Taxonomic Simplification &amp; Scale
            </h3>
            <p className="mt-3 leading-relaxed text-slate">
              A single, unified green taxonomy for member states allows diverse
              projects — from solar farms to geothermal plants — to be bundled
              into one liquid, high-grade instrument.
            </p>
          </div>
          <div className="rounded-2xl bg-ice p-8 shadow-md shadow-sky/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white">
              <Handshake className="h-6 w-6 text-royal" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-semibold text-midnight">
              Risk Mitigation via Blended Finance
            </h3>
            <p className="mt-3 leading-relaxed text-slate">
              With the collective backing of sovereign members and development
              institutions, the infrastructure can offer guaranteed
              offtake-style arrangements, turning volatile project revenue into
              stable, predictable cash flows.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="ice">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-midnight md:text-3xl">
            A Catalyst for Domestic Reform
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate">
            To participate, member nations adopt rigorous standards — often
            called <em>Euroclearability</em> — covering:
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={Lock}
            title="Legal Certainty"
            description="Enforceable laws protecting investor property and collateral rights."
          />
          <FeatureCard
            icon={Network}
            title="Operational Efficiency"
            description="Modern, automated clearing and settlement systems."
          />
          <FeatureCard
            icon={FileCheck}
            title="Regulatory Clarity"
            description="Transparent, stable rules on taxation and reporting."
          />
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-slate">
          The payoff: lower borrowing costs, deeper liquidity, and a powerful
          catalyst for broader structural reform.
        </p>
      </SectionWrapper>

      <SectionWrapper variant="white">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ice">
              <Zap className="h-6 w-6 text-royal" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-midnight md:text-3xl">
              The Climate Accelerator Dimension
            </h2>
            <p className="mt-4 leading-relaxed text-slate">
              Beyond settlement, Bleumotion envisions this infrastructure as the
              engine of a climate accelerator — helping fast-track promising
              sustainable projects from early concept toward investment-ready
              status.
            </p>
          </div>
          <div className="flex items-center justify-center rounded-2xl bg-ice p-12">
            <Leaf className="h-24 w-24 text-royal opacity-80" aria-hidden="true" />
          </div>
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  )
}
