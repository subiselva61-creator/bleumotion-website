import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  title?: string
  items: FAQItem[]
}

export default function FAQ({ title, items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div>
      {title && (
        <h2 className="mb-10 text-center text-2xl font-bold text-midnight md:text-3xl">
          {title}
        </h2>
      )}
      <div className="mx-auto max-w-3xl space-y-4">
        {items.map((item, index) => {
          const isOpen = openIndex === index
          const panelId = `faq-panel-${index}`
          const buttonId = `faq-button-${index}`

          return (
            <div
              key={item.question}
              className="rounded-2xl bg-white shadow-md shadow-sky/10"
            >
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-4 rounded-2xl p-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-royal"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
              >
                <span className="text-lg font-semibold text-midnight">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-royal transition-transform ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className="px-6 pb-6"
              >
                <p className="leading-relaxed text-slate">{item.answer}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
