interface PullQuoteProps {
  children: string
}

export default function PullQuote({ children }: PullQuoteProps) {
  return (
    <blockquote className="mx-auto max-w-3xl border-l-4 border-royal pl-6 md:pl-8">
      <p className="text-xl font-medium italic leading-relaxed text-midnight md:text-2xl">
        &ldquo;{children}&rdquo;
      </p>
    </blockquote>
  )
}
