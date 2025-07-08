"use client"

import { Award, Handshake, Lightbulb, Rocket } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export function useAboutData() {
  const { t } = useLanguage()

  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: t("values.excellence.title"),
      description: t("values.excellence.description"),
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: t("values.collaboration.title"),
      description: t("values.collaboration.description"),
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: t("values.innovation.title"),
      description: t("values.innovation.description"),
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: t("values.creativity.title"),
      description: t("values.creativity.description"),
    },
  ]

  const objectives = [t("objectives.1"), t("objectives.2"), t("objectives.3"), t("objectives.4"), t("objectives.5")]

  const history = [t("history.1"), t("history.2")]

  const mision = [t("mission.text")]
  const vision = [t("vision.text")]
  const team = [t("team.text")]

  return {
    values,
    objectives,
    history,
    mision,
    vision,
    team,
  }
}
