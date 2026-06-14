import { logo } from "../config/site"
import MetallicPaint from "./MetallicPaint"

interface LogoProps {
  showText?: boolean
  size?: "sm" | "md" | "lg"
  theme?: "dark" | "light"
  className?: string
}

const sizeClasses = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-16 w-16",
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
      <span
        className={`${sizeClasses[size]} relative shrink-0 overflow-hidden`}
        role="img"
        aria-label={logo.alt}
      >
        <MetallicPaint
          imageSrc="/logo2.png"
          seed={42}
          scale={4}
          patternSharpness={1}
          noiseScale={0.5}
          speed={0.3}
          liquid={0.75}
          mouseAnimation={false}
          brightness={2}
          contrast={0.5}
          refraction={0.01}
          blur={0.015}
          chromaticSpread={2}
          fresnel={1}
          angle={0}
          waveAmplitude={1}
          distortion={1}
          contour={0.2}
          lightColor="#ffffff"
          darkColor="#0b1e3d"
          tintColor="#60a5fa"
        />
      </span>
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
