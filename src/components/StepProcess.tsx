import type { LucideIcon } from "lucide-react"

interface Step {
  icon: LucideIcon
  title: string
  description: string
}

interface StepProcessProps {
  title?: string
  steps: Step[]
}

export default function StepProcess({ title, steps }: StepProcessProps) {
  return (
    <div>
      {title && (
        <h2 className="mb-10 text-center text-2xl font-bold text-midnight md:text-3xl">
          {title}
        </h2>
      )}
      <ol
        className={`grid gap-8 lg:gap-6 ${steps.length > 3 ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-3"}`}
      >
        {steps.map((step, index) => {
          const Icon = step.icon
          return (
            <li
              key={step.title}
              className="relative rounded-2xl bg-white p-6 shadow-md shadow-sky/10 md:p-8"
            >
              <div className="mb-4 flex items-center gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-royal text-sm font-bold text-white">
                  {index + 1}
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ice">
                  <Icon className="h-6 w-6 text-royal" aria-hidden="true" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-midnight">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate">
                {step.description}
              </p>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
