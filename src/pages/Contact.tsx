import { useState, type FormEvent } from "react"
import { Link } from "react-router-dom"
import { MapPin, Building, Mail, Share2 } from "lucide-react"
import PageHero from "../components/PageHero"
import SectionWrapper from "../components/SectionWrapper"
import FeatureCard from "../components/FeatureCard"
import FAQ from "../components/FAQ"
import Button from "../components/Button"
import Logo from "../components/Logo"
import { companyInfo, contactEmail, socialLinks } from "../config/site"
import { Landmark, Handshake, Zap, BookOpen } from "lucide-react"

export default function Contact() {
  const [formError, setFormError] = useState<string | null>(null)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormError(null)

    if (!contactEmail) {
      setFormError(
        "Our contact email is being finalized. Please check back soon or visit us at our Dubai office."
      )
      return
    }

    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get("name") as string
    const organization = data.get("organization") as string
    const email = data.get("email") as string
    const message = data.get("message") as string

    const subject = encodeURIComponent(
      `Bleumotion Inquiry from ${name}${organization ? ` (${organization})` : ""}`
    )
    const body = encodeURIComponent(
      `Name: ${name}\nOrganization: ${organization}\nEmail: ${email}\n\n${message}`
    )

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
  }

  return (
    <>
      <PageHero
        headline="Let's Build This Together"
        subheadline="Whether you're a government institution, development bank, or private investor exploring the future of Global South climate finance, we'd like to hear from you."
      />

      <SectionWrapper variant="white">
        <h2 className="mb-10 text-center text-2xl font-bold text-midnight md:text-3xl">
          Ways to Get Involved
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <FeatureCard
            icon={Landmark}
            title="Governments & Central Banks"
            description="Join the founding coalition and help shape the unified taxonomy and governance model."
          />
          <FeatureCard
            icon={Handshake}
            title="Development Banks & Investors"
            description="Explore co-investment and de-risking partnership opportunities."
          />
          <FeatureCard
            icon={Zap}
            title="Project Developers"
            description="Submit your climate or infrastructure project for future pipeline consideration."
          />
          <FeatureCard
            icon={BookOpen}
            title="Media & Researchers"
            description="Request briefings, background material, or interviews."
          />
        </div>
      </SectionWrapper>

      <SectionWrapper variant="ice">
        <div className="grid gap-12 md:grid-cols-2">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white p-6 shadow-md shadow-sky/10 sm:p-8"
            noValidate
          >
            <h2 className="text-xl font-semibold text-midnight">
              Send us a message
            </h2>

            <div className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-midnight"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 w-full rounded-lg border border-sky/30 px-4 py-3 text-slate focus:border-royal focus:outline-none focus:ring-2 focus:ring-royal/20"
                />
              </div>

              <div>
                <label
                  htmlFor="organization"
                  className="block text-sm font-medium text-midnight"
                >
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  className="mt-1 w-full rounded-lg border border-sky/30 px-4 py-3 text-slate focus:border-royal focus:outline-none focus:ring-2 focus:ring-royal/20"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-midnight"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-lg border border-sky/30 px-4 py-3 text-slate focus:border-royal focus:outline-none focus:ring-2 focus:ring-royal/20"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-midnight"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1 w-full resize-y rounded-lg border border-sky/30 px-4 py-3 text-slate focus:border-royal focus:outline-none focus:ring-2 focus:ring-royal/20"
                />
              </div>
            </div>

            {formError && (
              <p className="mt-4 text-sm text-royal" role="alert">
                {formError}
              </p>
            )}

            <div className="mt-6">
              <Button type="submit" variant="primary" fullWidth>
                Send Message
              </Button>
            </div>
          </form>

          <div className="flex flex-col justify-center">
            <Logo size="lg" theme="light" className="mb-6" />
            <h2 className="text-xl font-semibold text-midnight">
              Office &amp; Social
            </h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Building
                  className="mt-0.5 h-5 w-5 shrink-0 text-royal"
                  aria-hidden="true"
                />
                <p className="text-slate">{companyInfo.name}</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 h-5 w-5 shrink-0 text-royal"
                  aria-hidden="true"
                />
                <p className="text-slate">{companyInfo.address}</p>
              </div>
              {contactEmail && (
                <div className="flex items-start gap-3">
                  <Mail
                    className="mt-0.5 h-5 w-5 shrink-0 text-royal"
                    aria-hidden="true"
                  />
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-slate transition-colors hover:text-royal"
                  >
                    {contactEmail}
                  </a>
                </div>
              )}
              <div className="flex items-start gap-3">
                <Share2
                  className="mt-0.5 h-5 w-5 shrink-0 text-royal"
                  aria-hidden="true"
                />
                <div className="space-y-1 text-slate">
                  {socialLinks.linkedin ? (
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block transition-colors hover:text-royal"
                    >
                      LinkedIn
                    </a>
                  ) : (
                    <span className="text-slate/60">LinkedIn — coming soon</span>
                  )}
                  {socialLinks.x ? (
                    <a
                      href={socialLinks.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block transition-colors hover:text-royal"
                    >
                      X (Twitter)
                    </a>
                  ) : (
                    <span className="text-slate/60">X (Twitter) — coming soon</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="white">
        <FAQ
          title="Frequently Asked Questions"
          items={[
            {
              question: "How can my country get involved?",
              answer:
                "Reach out via the form above — our team will share details on the founding coalition process and current Euroclearability milestones.",
            },
            {
              question: "Is BleuMotion a bank or financial institution?",
              answer:
                "No. BleuMotion is an advisory firm helping design and convene the infrastructure, governance, and standards needed to bring this institution to life.",
            },
            {
              question: "What's the timeline for getting started?",
              answer:
                'Timelines vary by country readiness — see "The Road Ahead" on Our Vision for the overall phased approach.',
            },
          ]}
        />
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-slate">
          For the full phased roadmap, visit{" "}
          <Link to="/vision" className="font-medium text-royal hover:text-electric">
            Our Vision
          </Link>
          .
        </p>
      </SectionWrapper>
    </>
  )
}
