import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="rounded-2xl bg-ice p-6 shadow-md shadow-sky/10 md:p-8">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
        <Icon className="h-6 w-6 text-royal" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-midnight">{title}</h3>
      <p className="mt-3 leading-relaxed text-slate">{description}</p>
    </div>
  )
}
