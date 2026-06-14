import { Building2, Globe2, Landmark, Scale, ShieldCheck, BarChart3 } from "lucide-react"
import PageHero from "../components/PageHero"
import SectionWrapper from "../components/SectionWrapper"
import StatBand from "../components/StatBand"
import FeatureCard from "../components/FeatureCard"
import FAQ from "../components/FAQ"
import CTABanner from "../components/CTABanner"

const globalNorthAccess = [
  "Unified, mature regulatory standards",
  "Deep liquidity and established settlement rails",
  "Lower risk premiums, larger average deal sizes",
  'Decades of "Euroclearable" market infrastructure',
]

const globalSouthAccess = [
  "Fragmented, country-by-country green taxonomies",
  "Limited or no access to major settlement systems",
  "Higher risk premiums even for strong projects",
  "Smaller individual deal sizes that don't justify investor due diligence costs",
]

export default function Challenge() {
  return (
    <>
      <PageHero
        headline="Why the System Needs Rebuilding"
        subheadline="Trillions in private capital are searching for sustainable investments. Meanwhile, critical climate projects across the Global South remain starved of funding. The problem isn't appetite — it's architecture."
      />

      <SectionWrapper variant="ice">
        <h2 className="mb-10 text-center text-2xl font-bold text-midnight md:text-3xl">
          The Numbers Behind the Gap
        </h2>
        <StatBand
          columns={4}
          stats={[
            {
              value: "€50T+",
              label:
                "settled annually through the two dominant global depositories",
            },
            {
              value: "2 of 3",
              label:
                "of the world's largest economies largely outside that system",
            },
            {
              value: "Trillions",
              label:
                "in private capital seeking sustainable investments — with nowhere efficient to go",
            },
            {
              value: "Dozens",
              label:
                "of national green taxonomies, with little interoperability between them",
            },
          ]}
        />
      </SectionWrapper>

      <SectionWrapper variant="white">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl bg-ice p-6 shadow-md shadow-sky/10 sm:p-8">
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
          <div className="rounded-2xl bg-white p-6 shadow-md shadow-sky/10 sm:p-8">
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
          <div className="rounded-2xl bg-white p-6 shadow-md shadow-sky/10 sm:p-8">
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

      <SectionWrapper variant="ice">
        <h2 className="mb-10 text-center text-2xl font-bold text-midnight md:text-3xl">
          A Tale of Two Systems
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-md shadow-sky/10 sm:p-8">
            <h3 className="text-xl font-semibold text-midnight">
              Global North Access
            </h3>
            <ul className="mt-4 space-y-3">
              {globalNorthAccess.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 leading-relaxed text-slate"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-royal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-md shadow-sky/10 sm:p-8">
            <h3 className="text-xl font-semibold text-midnight">
              Global South Access
            </h3>
            <ul className="mt-4 space-y-3">
              {globalSouthAccess.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 leading-relaxed text-slate"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-royal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-midnight md:text-3xl">
            Why Climate Finance Feels This Most
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate">
            Climate and sustainability projects are especially exposed to this
            gap. They typically involve long payback horizons, cross-border
            equipment and technology financing, and a need for credibly
            "green-labeled" instruments. Without shared standards or a trusted
            settlement layer, even bankable projects struggle to attract the
            long-term, patient capital they need.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="ice">
        <FAQ
          title="Common Questions"
          items={[
            {
              question:
                "Isn't this just about competing with Euroclear and Clearstream?",
              answer:
                "No. The goal is to serve a segment these institutions were never designed for — smaller, fragmented, Southern-originated climate assets — by complementing, not replacing, existing global infrastructure.",
            },
            {
              question:
                "Why can't existing depositories simply expand into the Global South?",
              answer:
                "Different regulatory philosophies, cost structures, and deal-size economics make this a poor fit. The Global South needs infrastructure designed around its own realities from the ground up.",
            },
            {
              question:
                "Does this mean every country has to overhaul its financial system overnight?",
              answer:
                "No. Participation is phased, with countries progressing through Euroclearability milestones at their own pace.",
            },
          ]}
        />
      </SectionWrapper>

      <CTABanner />
    </>
  )
}
