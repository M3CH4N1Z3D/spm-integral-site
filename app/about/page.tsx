"use client"
import SpotlightCard from "@/components/ui/SpotLightCard"
import { Target, Eye } from "lucide-react"
import ProfileCard from "@/components/ui/ProfileCard"
import { useAboutData } from "@/lib/about"
import ShinyText from "@/components/ui/ShinyText"
import StarBorder from "@/components/ui/StarBorder"
import { useLanguage } from "@/contexts/LanguageContext"

export default function About() {
  const { t } = useLanguage()
  const { values, objectives, history, mision, vision, team } = useAboutData()

  return (
    <div className="pt-20 sm:pt-24 pb-8 sm:pb-16 bg-gradient-to-r from-[#2d3559] to-[#393b49]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="m-4 sm:m-8 lg:m-16">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            <span className="text-[#bccceb]">SPM</span>{" "}
            <span className="text-[#a693e5]">{t("about.title").split(" ")[1]}</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-[#bccceb] max-w-3xl mx-auto text-justify mb-4">
            {history[0]}
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-[#bccceb] max-w-3xl mx-auto text-justify">{history[1]}</p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
          {/* Mission */}
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(45, 53, 89, 0.7)">
            <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 sm:mb-6">
              <Target className="w-8 h-8 sm:w-10 sm:h-10 text-[#6c4fce] mb-2 sm:mb-0 sm:mr-4" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#bccceb] text-center sm:text-left relative hover:cursor-pointer transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#bccceb] after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                {t("about.mission")}
              </h2>
            </div>
            <p className="text-[#bccceb] text-sm sm:text-base lg:text-lg leading-relaxed text-justify">{mision[0]}</p>
          </SpotlightCard>

          {/* Vision */}
          <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(45, 53, 89, 0.7)">
            <div className="flex flex-col sm:flex-row items-center sm:items-start mb-4 sm:mb-6">
              <Eye className="w-8 h-8 sm:w-10 sm:h-10 text-[#6c4fce] mb-2 sm:mb-0 sm:mr-4" />
              <h2 className="text-2xl sm:text-3xl font-bold text-[#bccceb] text-center sm:text-left relative hover:cursor-pointer transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#bccceb] after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                {t("about.vision")}
              </h2>
            </div>
            <p className="text-[#bccceb] text-sm sm:text-base lg:text-lg leading-relaxed text-justify">{vision[0]}</p>
          </SpotlightCard>
        </div>

        {/* Company Values */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-12">
            <span className="text-[#bccceb]">{t("about.values").split(" ")[0]}</span>{" "}
            <span className="text-[#a693e5]">{t("about.values").split(" ")[1]}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center bg-transparent border border-transparent rounded-lg p-4 sm:p-6 hover:border-[#a693e5] transition-all duration-300"
              >
                <div className="text-[#a693e5] mb-3 sm:mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-[#bccceb] mb-2">{value.title}</h3>
                <p className="text-[#bccceb] text-sm sm:text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Objectives */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-lg p-4 sm:p-6 lg:p-8 xl:p-12 mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-12">
            <span className="text-[#bccceb]">{t("about.objectives").split(" ")[0]}</span>{" "}
            <span className="text-[#a693e5]">{t("about.objectives").split(" ")[1]}</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-4 sm:gap-6">
              {objectives.map((objective, index) => (
                <div key={index} className="flex items-start bg-black/50 border border-[#2d3559] rounded-lg p-4 sm:p-6">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-[#a693e5] text-black rounded-full flex items-center justify-center font-bold mr-3 sm:mr-4 text-sm sm:text-base">
                    {index + 1}
                  </div>
                  <p className="text-[#bccceb] text-sm sm:text-base lg:text-lg">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8">
              <span className="text-[#bccceb]">{t("about.team").split(" ")[0]}</span>{" "}
              <span className="text-[#a693e5]">{t("about.team").split(" ")[1]}</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-[#bccceb] max-w-3xl mx-auto mb-8 sm:mb-12 text-justify px-4">
              {team[0]}
            </p>
            <div className="mb-8 sm:mb-12">
              <ProfileCard
                name="Fredy M. Rigueros"
                title="Mechanical Engineer / Full-Stack Developer"
                handle="javicodes"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/fredy.png"
                showUserInfo={false}
                enableTilt={true}
                onContactClick={() => console.log("Contact clicked")}
                showBehindGradient={false}
                iconUrl="/icons/code-icon.svg"
              />
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#5eabd6] to-yellow-500 rounded-lg p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-3 sm:mb-4">
              <ShinyText text={t("about.knowMore")} disabled={false} speed={3} className="custom-class" />
            </h3>
            <p className="text-[#bccceb] mb-4 sm:mb-6 text-sm sm:text-base">{t("about.knowMoreDesc")}</p>
            <StarBorder as="button" className="custom-class" color="#bccceb" speed="2s" thickness={0.1}>
              <a
                href="/contact"
                className="inline-flex items-center px-3 sm:px-4 py-2 sm:py-3 text-[#bccceb] font-bold rounded-lg text-sm sm:text-base"
              >
                {t("about.contactNow")}
              </a>
            </StarBorder>
          </div>
        </div>
      </div>
    </div>
  )
}
