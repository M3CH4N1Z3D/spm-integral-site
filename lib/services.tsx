"use client"

import { Code, Smartphone, Cloud, Palette, Database, Users, Settings, BarChart } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export function useServicesData() {
  const { t } = useLanguage()

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: t("service.webDev.title"),
      description: t("service.webDev.description"),
      features: ["React & Next.js", "Node.js & Express", "E-commerce", "CMS Personalizado"],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: t("service.mobileApps.title"),
      description: t("service.mobileApps.description"),
      features: ["Android Nativo", "iOS Nativo", "React Native", "Flutter"],
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: t("service.cloudServices.title"),
      description: t("service.cloudServices.description"),
      features: ["AWS", "Google Cloud", "Microsoft Azure", "DevOps"],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: t("service.uxui.title"),
      description: t("service.uxui.description"),
      features: ["Diseño de Interfaces", "Prototipado", "Design Systems", "User Research"],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: t("service.database.title"),
      description: t("service.database.description"),
      features: ["MySQL", "PostgreSQL", "MongoDB", "Optimización"],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t("service.consulting.title"),
      description: t("service.consulting.description"),
      features: ["Auditoría de Código", "Arquitectura", "Migración", "Capacitación"],
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: t("service.backend.title"),
      description: t("service.backend.description"),
      features: ["APIs REST", "GraphQL", "Microservicios", "Integración"],
    },
    {
      icon: <BarChart className="w-12 h-12" />,
      title: t("service.graphicDesign.title"),
      description: t("service.graphicDesign.description"),
      features: ["Branding", "Marketing Digital", "Ilustración", "Identidad Visual"],
    },
  ]

  return { services }
}
