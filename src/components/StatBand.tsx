interface Stat {
  value: string
  label: string
}

interface StatBandProps {
  stats: Stat[]
  columns?: 2 | 3 | 4
}

const columnClasses: Record<2 | 3 | 4, string> = {
  2: "sm:grid-cols-2",
  3: "md:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
}

export default function StatBand({ stats, columns = 3 }: StatBandProps) {
  return (
    <div className={`grid gap-8 ${columnClasses[columns]}`}>
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-sky/20 bg-white p-6 text-center shadow-md shadow-sky/10 sm:p-8"
        >
          <p className="text-3xl font-bold text-royal sm:text-4xl md:text-5xl">
            {stat.value}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate md:text-base">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}
