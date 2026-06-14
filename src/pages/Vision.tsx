import {
  Scale,
  ShieldCheck,
  Users,
  Leaf,
  Handshake,
  Eye,
} from "lucide-react"
import PageHero from "../components/PageHero"
import SectionWrapper from "../components/SectionWrapper"
import FeatureCard from "../components/FeatureCard"
import PullQuote from "../components/PullQuote"
import Timeline from "../components/Timeline"
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
        <h2 className="mb-10 text-center text-2xl font-bold text-midnight md:text-3xl">
          Founding Principles
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={Scale}
            title="Sovereignty"
            description="Financial self-determination for the Global South."
          />
          <FeatureCard
            icon={Users}
            title="Inclusion"
            description="Access for nations of all sizes, not just the largest economies."
          />
          <FeatureCard
            icon={Eye}
            title="Transparency"
            description="Open standards, open reporting."
          />
          <FeatureCard
            icon={Leaf}
            title="Sustainability"
            description="Climate impact at the core of every decision."
          />
          <FeatureCard
            icon={Handshake}
            title="Collaboration"
            description="Shared ownership and governance among member states."
          />
        </div>
      </SectionWrapper>

      <SectionWrapper variant="ice">
        <PullQuote>
          We believe the next chapter of global finance should be written by the
          nations it has too often left out. Not as an act of charity, but as a
          recognition that the world's climate future depends on capital reaching
          the places where it's needed most — on terms those nations help define.
        </PullQuote>
      </SectionWrapper>

      <SectionWrapper variant="white">
        <Timeline
          title="The Road Ahead"
          milestones={[
            {
              title: "A founding coalition of Global South governments and development institutions is formed",
              description: "",
            },
            {
              title: "A unified green taxonomy is agreed and published",
              description: "",
            },
            {
              title: "The first pilot green-backed securities are issued",
              description: "",
            },
            {
              title: "Full operational launch, open to all qualifying member states",
              description: "",
            },
            {
              title: "Recognition as a credible peer to existing global settlement infrastructure",
              description: "",
            },
          ]}
        />
      </SectionWrapper>

      <CTABanner
        headline="This is a long-term project — and it starts with the right partners."
        buttonLabel="Join the Conversation"
      />
    </>
  )
}
