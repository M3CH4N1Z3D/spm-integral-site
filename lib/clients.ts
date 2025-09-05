"use client"

import { useLanguage } from "@/contexts/LanguageContext"

export const clients = [
  {
    label: "Coninker",
    image: "/clients-logo/coninker.png",
    url: "https://www.coninker.com.co",
  },
  {
    label: "Aceroscol",
    image: "/clients-logo/logo-aceroscol-blanco.svg",
    url: "https://www.aceroscol.com/",
  },
  {
    label: "Ferrocortes",
    image: "/clients-logo/logo-Header-Ferrocortes.webp",
    url: "https://ferrocortes.com.co/",
  },
  {
    label: "AeroMaquinados",
    image: "/clients-logo/aeromaquinados.png",
    url: "https://aeromaquinados.com/",
  },
]

export function useClientsData() {
  const { t } = useLanguage()

  const testimonials = [
    {
      name: t("testimonial.1.name"),
      company: t("testimonial.1.company"),
      text: t("testimonial.1.text"),
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: t("testimonial.2.name"),
      company: t("testimonial.2.company"),
      text: t("testimonial.2.text"),
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: t("testimonial.3.name"),
      company: t("testimonial.3.company"),
      text: t("testimonial.3.text"),
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: t("testimonial.4.name"),
      company: t("testimonial.4.company"),
      text: t("testimonial.4.text"),
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const clientPageDescription = t("clients.description")

  return {
    testimonials,
    clientPageDescription,
  }
}
