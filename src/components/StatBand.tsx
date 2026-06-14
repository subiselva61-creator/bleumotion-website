interface Stat {
  value: string
  label: string
}

interface StatBandProps {
  stats: Stat[]
}

export default function StatBand({ stats }: StatBandProps) {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-sky/20 bg-white p-8 text-center shadow-md shadow-sky/10"
        >
          <p className="text-4xl font-bold text-royal md:text-5xl">
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
