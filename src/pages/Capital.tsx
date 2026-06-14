import { Handshake, Building2, TrendingUp, Globe2 } from "lucide-react"
import PageHero from "../components/PageHero"
import SectionWrapper from "../components/SectionWrapper"
import FeatureCard from "../components/FeatureCard"
import CTABanner from "../components/CTABanner"

export default function Capital() {
  return (
    <>
      <PageHero
        headline="A Capital Base Built to Signal Credibility"
        subheadline="Structural change requires structural scale. Bleumotion's model is built around an inaugural capital base of roughly €3 trillion — a figure calculated to provide the collateral and liquidity buffer needed to rival established global counterparts from day one."
      />

      <SectionWrapper variant="ice">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-md shadow-sky/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ice">
              <Handshake className="h-6 w-6 text-royal" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-midnight">
              The Partnership Model
            </h2>
            <p className="mt-4 leading-relaxed text-slate">
              This scale can only be reached through a coalition of Multilateral
              Development Banks — both established institutions and newer,
              Southern-led banks — pooling resources and de-risking mechanisms.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-md shadow-sky/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ice">
              <Building2 className="h-6 w-6 text-royal" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-midnight">
              Collective Credibility
            </h2>
            <p className="mt-4 leading-relaxed text-slate">
              Backed by the financial weight of major central banks across the
              Global South, this collective action transforms the concept from
              an idea into an instantly credible institution.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="white">
        <h2 className="mb-10 text-center text-2xl font-bold text-midnight md:text-3xl">
          Twin Goals
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <FeatureCard
            icon={TrendingUp}
            title="Financial Firepower"
            description='Sufficient capacity to settle transactions and offer guarantees that make climate bonds genuinely "bankable" for global investors.'
          />
          <FeatureCard
            icon={Globe2}
            title="A Geopolitical Signal"
            description="Proof that the Global South, backed by its largest economies, can shape its own financial future on its own terms."
          />
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  )
}
