import {
  Handshake,
  Building2,
  TrendingUp,
  Globe2,
  Landmark,
  BarChart3,
  ShieldCheck,
  FileCheck,
  Users,
} from "lucide-react"
import PageHero from "../components/PageHero"
import SectionWrapper from "../components/SectionWrapper"
import FeatureCard from "../components/FeatureCard"
import Timeline from "../components/Timeline"
import CTABanner from "../components/CTABanner"

export default function Capital() {
  return (
    <>
      <PageHero
        headline="A Capital Base Built to Signal Credibility"
        subheadline="Structural change requires structural scale. Bleumotion's model is built around an inaugural capital base of roughly €3 trillion — a figure calculated to provide the collateral and liquidity buffer needed to rival established global counterparts from day one."
      />

      <SectionWrapper variant="ice">
        <h2 className="mb-10 text-center text-2xl font-bold text-midnight md:text-3xl">
          Capital Structure — Phased Build-Out
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-md shadow-sky/10 sm:p-8">
            <span className="text-sm font-semibold uppercase tracking-wide text-royal">
              Phase 1
            </span>
            <h3 className="mt-2 text-xl font-semibold text-midnight">
              Founding Capital
            </h3>
            <p className="mt-3 leading-relaxed text-slate">
              Seed contributions from founding central banks and development
              institutions establish initial credibility and operational
              capacity.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-md shadow-sky/10 sm:p-8">
            <span className="text-sm font-semibold uppercase tracking-wide text-royal">
              Phase 2
            </span>
            <h3 className="mt-2 text-xl font-semibold text-midnight">
              Anchor Investment
            </h3>
            <p className="mt-3 leading-relaxed text-slate">
              Large-scale commitments from sovereign wealth funds and
              multilateral development banks build the core collateral and
              liquidity buffer.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-md shadow-sky/10 sm:p-8">
            <span className="text-sm font-semibold uppercase tracking-wide text-royal">
              Phase 3
            </span>
            <h3 className="mt-2 text-xl font-semibold text-midnight">
              Market Opening
            </h3>
            <p className="mt-3 leading-relaxed text-slate">
              Once de-risking mechanisms are operational, private institutional
              capital is invited to participate at scale.
            </p>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="white">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-ice p-6 shadow-md shadow-sky/10 sm:p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white">
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
          <div className="rounded-2xl bg-ice p-6 shadow-md shadow-sky/10 sm:p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white">
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

      <SectionWrapper variant="ice">
        <h2 className="mb-10 text-center text-2xl font-bold text-midnight md:text-3xl">
          Our Partners
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <FeatureCard
            icon={Handshake}
            title="Multilateral Development Banks"
            description="Both established institutions and newer, Southern-led banks, providing de-risking mechanisms and blended finance structuring."
          />
          <FeatureCard
            icon={Landmark}
            title="Central Banks & Sovereign Wealth Funds"
            description="Anchor capital providers and founding members shaping governance and standards."
          />
          <FeatureCard
            icon={BarChart3}
            title="Institutional & Private Investors"
            description="Participants in the resulting green-backed securities once the market is operational."
          />
          <FeatureCard
            icon={FileCheck}
            title="Technical & Standards Bodies"
            description="Partners supporting the design of the unified green taxonomy and Euroclearability frameworks."
          />
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

      <SectionWrapper variant="ice">
        <h2 className="mb-10 text-center text-2xl font-bold text-midnight md:text-3xl">
          Governance & Oversight
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={Users}
            title="Member-State Representation"
            description="Founding governments and central banks hold governance seats proportional to their contributions."
          />
          <FeatureCard
            icon={ShieldCheck}
            title="Independent Risk Committee"
            description="Oversees portfolio composition, de-risking mechanisms, and credit quality."
          />
          <FeatureCard
            icon={FileCheck}
            title="Transparency & Reporting Standards"
            description="Regular public reporting on capital deployment, project pipelines, and climate impact."
          />
        </div>
      </SectionWrapper>

      <SectionWrapper variant="white">
        <Timeline
          title="Roadmap"
          milestones={[
            {
              title: "Foundational Agreements",
              description:
                "Founding members agree on governance structure and the unified green taxonomy.",
            },
            {
              title: "Pilot Issuances",
              description:
                "A small number of pilot green-backed securities are issued to test the model.",
            },
            {
              title: "Operational Launch",
              description:
                "Full settlement infrastructure goes live for member states meeting Euroclearability milestones.",
            },
            {
              title: "Expansion",
              description:
                "Membership and eligible asset classes expand across the Global South.",
            },
          ]}
        />
      </SectionWrapper>

      <CTABanner />
    </>
  )
}
