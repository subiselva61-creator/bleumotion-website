import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionWrapperProps {
  children: ReactNode
  variant?: "ice" | "white" | "dark"
  className?: string
  id?: string
}

const variantClasses = {
  ice: "bg-ice",
  white: "bg-white",
  dark: "bg-midnight text-white",
}

export default function SectionWrapper({
  children,
  variant = "white",
  className = "",
  id,
}: SectionWrapperProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.section
      id={id}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`py-12 sm:py-16 md:py-24 ${variantClasses[variant]} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
    </motion.section>
  )
}
