import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X, ArrowRight, Sparkles } from "lucide-react"
import { navLinks } from "../config/site"
import GooeyNav from "./GooeyNav"
import Logo from "./Logo"

const gooeyItems = navLinks
  .filter((link) => link.path !== "/contact")
  .map((link) => ({
    label: link.label,
    href: link.path,
  }))

const primaryLinks = navLinks.filter((link) => link.path !== "/contact")

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener("keydown", handleEscape)
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "nav-glass nav-glass-scrolled border-white/10"
          : "nav-glass border-transparent"
      }`}
    >
      <div className="nav-gradient-line pointer-events-none absolute inset-x-0 top-0 h-px" />
      <div className="nav-gradient-glow pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:min-h-[4rem] lg:py-3.5">
        <div className="flex items-center justify-between gap-3 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-6">
          <Link
            to="/"
            className="group relative z-10 shrink-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-midnight lg:justify-self-start"
          >
            <span className="absolute -inset-2 rounded-xl bg-accent-cyan/0 transition-colors group-hover:bg-accent-cyan/10" />
            <Logo size="sm" className="relative [&>span:last-child]:nav-logo-text" />
          </Link>

          <div className="relative z-10 hidden w-full min-w-0 justify-center px-1 lg:flex lg:justify-self-center">
            <div className="w-max max-w-full overflow-x-auto overflow-y-visible rounded-full border border-accent-cyan/25 px-1 py-1 shadow-inner shadow-black/20 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <GooeyNav
                items={gooeyItems}
                particleCount={8}
                particleDistances={[40, 6]}
                particleR={60}
                animationTime={600}
                timeVariance={300}
                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
              />
            </div>
          </div>

          <div className="relative z-10 flex items-center gap-2 lg:justify-self-end">
            <Link
              to="/contact"
              className="nav-gradient-cta group hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent-cyan/20 transition-all hover:scale-[1.02] hover:shadow-accent-indigo/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-midnight lg:inline-flex"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <button
              type="button"
              className={`flex min-h-11 min-w-11 items-center justify-center rounded-full border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric lg:hidden ${
                open
                  ? "border-accent-cyan/40 bg-white/10 text-white"
                  : "border-white/15 bg-white/5 text-white hover:border-accent-cyan/30 hover:bg-white/10"
              }`}
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <>
          <button
            type="button"
            className="fixed inset-0 z-40 bg-midnight/60 backdrop-blur-sm transition-opacity lg:hidden"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          />
          <div className="nav-drawer-panel fixed inset-y-0 right-0 z-50 flex w-[min(100%,20rem)] flex-col border-l border-white/10 bg-midnight/95 shadow-2xl shadow-black/40 backdrop-blur-2xl lg:hidden">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.18),rgba(129,140,248,0.08)_45%,transparent_70%)]" />

            <div className="relative border-b border-white/10 px-5 py-5">
              <div className="flex items-center gap-2 text-accent-cyan">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                  Navigation
                </p>
              </div>
              <p className="mt-2 text-sm text-white/60">
                Green finance infrastructure for the Global South
              </p>
            </div>

            <nav className="relative flex-1 overflow-y-auto px-3 py-4">
              <ul className="flex flex-col gap-1">
                {primaryLinks.map((link, index) => (
                  <li
                    key={link.path}
                    className="nav-drawer-link"
                    style={{ animationDelay: `${index * 45}ms` }}
                  >
                    <NavLink
                      to={link.path}
                      end={link.path === "/"}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `group flex min-h-11 items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                          isActive
                            ? "border-l-2 border-accent-cyan bg-gradient-to-r from-accent-cyan/15 via-accent-indigo/10 to-transparent text-white"
                            : "border-l-2 border-transparent text-white/75 hover:border-accent-indigo/30 hover:bg-white/5 hover:text-white"
                        }`
                      }
                    >
                      {link.label}
                      <ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-60" />
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div
              className="nav-drawer-link relative border-t border-white/10 p-5"
              style={{ animationDelay: `${primaryLinks.length * 45}ms` }}
            >
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="nav-gradient-cta flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-cyan/25 transition-all hover:shadow-accent-indigo/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
