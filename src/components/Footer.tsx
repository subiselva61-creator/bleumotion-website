import { Link } from "react-router-dom"
import { Share2, Mail } from "lucide-react"
import { companyInfo, contactEmail, navLinks } from "../config/site"
import Logo from "./Logo"

export default function Footer() {
  return (
    <footer className="bg-midnight px-6 py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <Link
            to="/"
            className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
          >
            <Logo size="md" />
          </Link>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            {companyInfo.name}
          </p>
          <p className="mt-2 text-sm text-white/70">{companyInfo.address}</p>
          {contactEmail && (
            <a
              href={`mailto:${contactEmail}`}
              className="mt-2 inline-block text-sm text-sky hover:text-white"
            >
              {contactEmail}
            </a>
          )}
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
            Navigation
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
            Connect
          </p>
          <div className="mt-4 flex gap-4">
            {contactEmail ? (
              <a
                href={`mailto:${contactEmail}`}
                className="rounded-lg p-2 text-white/75 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
                aria-label="Email Bleumotion"
              >
                <Mail className="h-5 w-5" />
              </a>
            ) : (
              <span
                className="rounded-lg p-2 text-white/40"
                aria-label="Email coming soon"
                title="Email coming soon"
              >
                <Mail className="h-5 w-5" />
              </span>
            )}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-white/75 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
              aria-label="Bleumotion social link"
            >
              <Share2 className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-center text-sm text-white/50">
        &copy; {new Date().getFullYear()} Bleumotion. All rights reserved.
      </div>
    </footer>
  )
}
