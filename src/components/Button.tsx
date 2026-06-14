import { Link } from "react-router-dom"
import type { ReactNode } from "react"

type ButtonVariant = "primary" | "secondary" | "outline"

interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  to?: string
  href?: string
  type?: "button" | "submit"
  className?: string
  fullWidth?: boolean
  onClick?: () => void
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-royal text-white hover:bg-electric focus-visible:ring-royal",
  secondary:
    "bg-electric text-white hover:bg-sky focus-visible:ring-electric",
  outline:
    "border-2 border-white/80 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 focus-visible:ring-white",
}

export default function Button({
  children,
  variant = "primary",
  to,
  href,
  type = "button",
  className = "",
  fullWidth = false,
  onClick,
}: ButtonProps) {
  const widthClass = fullWidth ? "w-full sm:w-auto" : ""
  const classes = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variantClasses[variant]} ${widthClass} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
