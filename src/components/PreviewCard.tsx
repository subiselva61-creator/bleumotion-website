import { Link } from "react-router-dom"
import type { LucideIcon } from "lucide-react"
import { ArrowRight } from "lucide-react"

interface PreviewCardProps {
  title: string
  description: string
  to: string
  icon: LucideIcon
}

export default function PreviewCard({
  title,
  description,
  to,
  icon: Icon,
}: PreviewCardProps) {
  return (
    <Link
      to={to}
      className="group rounded-2xl bg-white p-6 shadow-md shadow-sky/10 transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal"
    >
      <Icon className="mb-4 h-8 w-8 text-royal" aria-hidden="true" />
      <h3 className="text-xl font-semibold text-midnight">{title}</h3>
      <p className="mt-2 text-slate">{description}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-royal group-hover:text-electric">
        Read more <ArrowRight className="h-4 w-4" />
      </span>
    </Link>
  )
}
