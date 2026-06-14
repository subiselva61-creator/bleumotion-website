interface Milestone {
  title: string
  description: string
}

interface TimelineProps {
  title?: string
  milestones: Milestone[]
}

export default function Timeline({ title, milestones }: TimelineProps) {
  return (
    <div>
      {title && (
        <h2 className="mb-10 text-center text-2xl font-bold text-midnight md:text-3xl">
          {title}
        </h2>
      )}
      <ol className="relative mx-auto max-w-3xl">
        {milestones.map((milestone, index) => (
          <li
            key={milestone.title}
            className={`relative pl-12 ${index < milestones.length - 1 ? "pb-10" : ""}`}
          >
            {index < milestones.length - 1 && (
              <span
                className="absolute left-[15px] top-8 h-full w-0.5 bg-royal/30"
                aria-hidden="true"
              />
            )}
            <span
              className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-royal text-sm font-bold text-white"
              aria-hidden="true"
            >
              {index + 1}
            </span>
            <h3 className="text-lg font-semibold text-midnight">
              {milestone.title}
            </h3>
            {milestone.description && (
              <p className="mt-2 leading-relaxed text-slate">
                {milestone.description}
              </p>
            )}
          </li>
        ))}
      </ol>
    </div>
  )
}
