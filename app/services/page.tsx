"use client"
import ShinyText from "@/components/ui/ShinyText"
import SpotlightCard from "@/components/ui/SpotLightCard"
import StarBorder from "@/components/ui/StarBorder"
import { services } from "@/lib/services"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Services() {
  const { t } = useLanguage()

  return (
    <div className="pt-20 sm:pt-24 pb-8 sm:pb-16 bg-gradient-to-r from-[#2d3559] to-[#393b49]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center m-4 sm:m-8 lg:m-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            <span className="text-[#bccceb]">SPM</span>{" "}
            <span className="text-[#a693e5]">{t("services.title").split(" ")[1]}</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-[#bccceb] max-w-3xl mx-auto text-center">
            {t("services.description")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(45, 53, 89, 0.7)" key={index}>
              <div className="text-[#bccceb] mb-4 sm:mb-6 flex justify-center lg:justify-start">{service.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#d8d6f2] mb-3 sm:mb-4 text-center lg:text-left">
                <Link
                  href={"#"}
                  className="relative hover:cursor-pointer transition-colors font-medium after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#bccceb] after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {service.title}
                </Link>
              </h3>
              <p className="text-[#bccceb] mb-4 sm:mb-6 text-sm sm:text-base text-center lg:text-left">
                {service.description}
              </p>

              <div className="space-y-2">
                <h4 className="text-base sm:text-lg font-semibold text-[#bccceb] mb-2 sm:mb-3 text-center lg:text-left">
                  {t("services.technologies")}
                </h4>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-2 sm:px-3 py-1 bg-[#2d3559] border border-[#a693e5] text-[#a693e5] rounded-full text-xs sm:text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="rounded-lg p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
              <ShinyText text={t("services.customService")} disabled={false} speed={3} className="text-[#5eabd6]" />
            </h2>
            <p className="text-[#bccceb] mb-4 sm:mb-6 text-sm sm:text-base max-w-2xl mx-auto">
              {t("services.customServiceDesc")}
            </p>
            <StarBorder as="button" className="custom-class" color="#bccceb" speed="2s" thickness={0.1}>
              <a
                href="/contact"
                className="inline-flex items-center px-3 sm:px-4 py-2 sm:py-3 text-[#bccceb] font-bold rounded-lg text-sm sm:text-base"
              >
                {t("services.requestQuote")}
              </a>
            </StarBorder>
          </div>
        </div>
      </div>
    </div>
  )
}
