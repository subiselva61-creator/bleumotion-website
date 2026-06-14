import { useState, type FormEvent } from "react"
import { MapPin, Building } from "lucide-react"
import PageHero from "../components/PageHero"
import SectionWrapper from "../components/SectionWrapper"
import Button from "../components/Button"
import Logo from "../components/Logo"
import { companyInfo, contactEmail } from "../config/site"

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

      <SectionWrapper variant="ice">
        <div className="grid gap-12 lg:grid-cols-2">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-white p-8 shadow-md shadow-sky/10"
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
              <Button type="submit" variant="primary">
                Send Message
              </Button>
            </div>
          </form>

          <div className="flex flex-col justify-center">
            <Logo size="lg" theme="light" className="mb-6" />
            <h2 className="text-xl font-semibold text-midnight">
              Company Details
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
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
