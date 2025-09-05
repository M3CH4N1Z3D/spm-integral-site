"use client";

import { clients, useClientsData } from "@/lib/clients";
import ImageCarousel from "@/components/ui/ImageCarousel";
import SpotlightCard from "@/components/ui/SpotLightCard";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SuccessCases() {
  const { t } = useLanguage();
  const { testimonials } = useClientsData();

  return (
    <div className="pt-20 sm:pt-24 pb-8 sm:pb-16 bg-gradient-to-r from-[#2d3559] to-[#393b49]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center m-4 sm:m-8 lg:m-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            <span className="text-[#bccceb]">Casos de</span>{" "}
            <span className="text-[#a693e5]">Éxito</span>
          </h1>
        </div>

        {/* Client Logos */}
        <div className="mb-20 flex flex-col items-center mx-auto">
          <h2 className="text-3xl font-bold text-[#bccceb] text-center mb-12">
            {t("clients.trustedCompanies")}
          </h2>
          <ImageCarousel
            items={clients}
            autoplay={true}
            transformScale={1.2}
            autoplaySpeed={4000}
            height="40vh"
            width="50vw"
            background="transparent"
          />
        </div>

        {/* Testimonials */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center mb-8 sm:mb-12">
            <span className="text-[#bccceb]">
              {t("clients.testimonials").split(" ").slice(0, -2).join(" ")}
            </span>{" "}
            <span className="text-[#a693e5]">
              {t("clients.testimonials").split(" ").slice(-2).join(" ")}
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <SpotlightCard
                className="custom-spotlight-card"
                spotlightColor="rgba(45, 53, 89, 0.7)"
                key={index}
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#bccceb]">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#6c4fce] text-sm sm:text-base">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-[#bccceb] italic text-sm sm:text-base">
                  "{testimonial.text}"
                </p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}