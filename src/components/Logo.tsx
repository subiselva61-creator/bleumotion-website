import { motion } from "framer-motion"
import { logo } from "../config/site"

interface LogoProps {
  showText?: boolean
  size?: "sm" | "md" | "lg"
  theme?: "dark" | "light"
  className?: string
}

const sizeClasses = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-14 w-14",
}

const textSizeClasses = {
  sm: "text-lg",
  md: "text-xl",
  lg: "text-2xl",
}

export default function Logo({
  showText = true,
  size = "md",
  theme = "dark",
  className = "",
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <motion.img
        src={logo.src}
        alt={logo.alt}
        className={`${sizeClasses[size]} shrink-0 object-contain`}
        whileHover={{ rotate: 45 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />
      {showText && (
        <span
          className={`font-bold tracking-tight ${textSizeClasses[size]} ${
            theme === "dark" ? "text-white" : "text-midnight"
          }`}
        >
          Bleumotion
        </span>
      )}
    </span>
  )
}
