import { Building2, Globe2, Landmark, Scale, ShieldCheck, BarChart3 } from "lucide-react"
import PageHero from "../components/PageHero"
import SectionWrapper from "../components/SectionWrapper"
import FeatureCard from "../components/FeatureCard"
import CTABanner from "../components/CTABanner"

export default function Challenge() {
  return (
    <>
      <PageHero
        headline="Why the System Needs Rebuilding"
        subheadline="Trillions in private capital are searching for sustainable investments. Meanwhile, critical climate projects across the Global South remain starved of funding. The problem isn't appetite — it's architecture."
      />

      <SectionWrapper variant="white">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-ice p-8 shadow-md shadow-sky/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white">
              <Landmark className="h-6 w-6 text-royal" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-midnight">
              What is a CSD?
            </h2>
            <p className="mt-4 leading-relaxed text-slate">
              Central Securities Depositories are the quiet backbone of global
              finance — they safeguard ownership records and finalize the moment
              a trade settles: securities for cash. Every transaction, however
              large, ultimately depends on this layer for trust and
              traceability.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="ice">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-8 shadow-md shadow-sky/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ice">
              <Building2 className="h-6 w-6 text-royal" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-midnight">The Duopoly</h2>
            <p className="mt-4 leading-relaxed text-slate">
              Two institutions — Euroclear (Belgium) and Clearstream
              (Luxembourg) — handle an estimated €50 trillion in cross-border
              securities settlement. Built for, and largely by, the Global
              North.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 shadow-md shadow-sky/10">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-ice">
              <Globe2 className="h-6 w-6 text-royal" aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-bold text-midnight">The Exclusion</h2>
            <p className="mt-4 leading-relaxed text-slate">
              Strikingly, this system largely bypasses two of the world's three
              largest economies — China and India.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="white">
        <h2 className="mb-10 text-center text-2xl font-bold text-midnight md:text-3xl">
          Three Structural Barriers
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={Scale}
            title="Taxonomic Fragmentation"
            description="Every country defines 'green' differently. Investors face costly, project-by-project due diligence instead of one scalable market."
          />
          <FeatureCard
            icon={ShieldCheck}
            title="Perceived Risk"
            description="Political, currency, and legal uncertainty push risk premiums beyond what most institutional capital will accept — even for strong projects."
          />
          <FeatureCard
            icon={BarChart3}
            title="Lack of Scale"
            description="Individual projects are often too small to justify the transaction costs of major global investors, creating a structural mismatch."
          />
        </div>
      </SectionWrapper>

      <CTABanner />
    </>
  )
}
