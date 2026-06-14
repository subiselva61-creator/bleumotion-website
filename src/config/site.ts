export const contactEmail: string | null = "admin@bleumotion.com"

export const companyInfo = {
  name: "Bleumotion — Green Powerhouse FZCO",
  address: "Dubai Silicon Oasis, Dubai, UAE",
}

export const logo = {
  src: "/logo2.png",
  alt: "Bleumotion logo",
}

export const socialLinks = {
  linkedin: null as string | null,
  x: null as string | null,
}

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "The Challenge", path: "/challenge" },
  { label: "Our Solution", path: "/solution" },
  { label: "Impact in Action", path: "/impact" },
  { label: "Capital & Partners", path: "/capital" },
  { label: "Our Vision", path: "/vision" },
  { label: "Contact", path: "/contact" },
] as const
