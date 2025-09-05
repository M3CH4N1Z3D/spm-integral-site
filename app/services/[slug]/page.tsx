"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SpotlightCard from "@/components/ui/SpotLightCard";
import StarBorder from "@/components/ui/StarBorder";
import { useLanguage } from "@/contexts/LanguageContext";
import { useServicesData } from "@/lib/services";
import CardSwap, { Card } from "@/components/ui/CardSwap";

export default function ServicePage() {
  const params = useParams();
  const router = useRouter();
  const { t, language } = useLanguage();
  const { services } = useServicesData();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const slug = params.slug as string;

  // Find the service based on the slug
  const service = services.find(
    (s) =>
      s.title
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "") === slug ||
      s.title
        .toLowerCase()
        .replace(/\s+/g, "_")
        .replace(/[^\w_]/g, "") === slug
  );

  // Service images - you'll need to add these to your public folder
  const serviceImages = [
    `/services/${slug}/imagen1.png`,
    `/services/${slug}/imagen2.png`,
    `/services/${slug}/imagen3.png`,
    `/services/${slug}/imagen4.png`,
  ];

  // Fallback images if service-specific images don't exist
  const fallbackImages = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ];

  const images = serviceImages.length > 0 ? serviceImages : fallbackImages;

  useEffect(() => {
    if (!service) {
      router.push("/services");
    }
  }, [service, router]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#2d3559] to-[#393b49]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#bccceb] mb-4">
            Servicio no encontrado
          </h1>
          <Link href="/services" className="text-[#a693e5] hover:underline">
            Volver a servicios
          </Link>
        </div>
      </div>
    );
  }

  const getServiceSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");
  };

  const getDetailedDescription = (serviceTitle: string) => {
    const serviceKeyMap: { [key: string]: string } = {
      "Desarrollo Web": "service.webDev.detailedDescription",
      "Apps Móviles": "service.mobileApps.detailedDescription",
      "Cloud Services": "service.cloudServices.detailedDescription",
      "UX/UI Design": "service.uxui.detailedDescription",
      "Base de Datos": "service.database.detailedDescription",
      "Consultoría": "service.consulting.detailedDescription",
      "Servicios Backend": "service.backend.detailedDescription",
      "Diseño Gráfico": "service.graphicDesign.detailedDescription",
      "Web Development": "service.webDev.detailedDescription",
      "Mobile Apps": "service.mobileApps.detailedDescription",
      "Database": "service.database.detailedDescription",
      "Consulting": "service.consulting.detailedDescription",
      "Backend Services": "service.backend.detailedDescription",
      "Graphic Design": "service.graphicDesign.detailedDescription",
    };

    const translationKey = serviceKeyMap[serviceTitle] || service.description;
    return t(translationKey);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#2d3559] to-[#393b49]">
      {/* Header */}
      <div className="pt-20 sm:pt-24 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-6">
            <Link
              href="/services"
              className="inline-flex items-center text-[#bccceb] hover:text-[#a693e5] transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              {language === "es" ? "Volver a Servicios" : "Back to Services"}
            </Link>
          </div>

          {/* Service Title */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              <span className="text-[#bccceb]">
                {service.title.split(" ")[0]}
              </span>{" "}
              {service.title
                .split(" ")
                .slice(1)
                .map((word, index) => (
                  <span key={index} className="text-[#a693e5]">
                    {word}{" "}
                  </span>
                ))}
            </h1>
          </div>

          {/* Hero Image Carousel */}
          <div className="flex flex-col items-center mb-12 sm:mb-16">
            <div style={{ height: "350px", position: "relative" }}>
              <CardSwap
                cardDistance={500}
                verticalDistance={0}
                delay={3000}
                pauseOnHover={false}
                width={500}
                height={400}
                skewAmount={0}
              >
                {images.map((imgSrc, index) => (
                  <Card key={index}>
                    <div className="w-full h-full flex items-center justify-center overflow-hidden">
                      <Image
                        src={imgSrc || "/placeholder.svg"}
                        alt={`${service.title} - Imagen ${index + 1}`}
                        width={800}
                        height={600}
                        className="object-contain w-full h-full rounded-md transition-transform duration-300 ease-in-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                      />
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>
          </div>

          {/* Service Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
            {/* Main Description */}
            <div className="lg:col-span-2">
              <SpotlightCard
                className="h-full"
                spotlightColor="rgba(45, 53, 89, 0.3)"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-[#bccceb] mb-4 sm:mb-6">
                  {language === "es"
                    ? "Descripción del Servicio"
                    : "Service Description"}
                </h2>
                <p className="text-[#d8d6f2] text-base sm:text-lg leading-relaxed mb-6">
                  {getDetailedDescription(service.title)}
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#bccceb]">
                    {t("services.technologies")}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#2d3559] border border-[#a693e5] text-[#a693e5] rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </div>

            {/* Service Icon & CTA */}
            <div className="space-y-6 sm:space-y-8">
              <SpotlightCard
                className="text-center"
                spotlightColor="rgba(45, 53, 89, 0.3)"
              >
                <div className="text-[#a693e5] mb-4 flex justify-center">
                  <div className="p-4 bg-[#2d3559] rounded-full">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#bccceb] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#d8d6f2] text-sm mb-6">
                  {service.description}
                </p>
              </SpotlightCard>

              {/* CTA Card */}
              <SpotlightCard
                className="text-center"
                spotlightColor="rgba(45, 53, 89, 0.3)"
              >
                <h3 className="text-lg font-bold text-[#bccceb] mb-4">
                  {language === "es"
                    ? "¿Interesado en este servicio?"
                    : "Interested in this service?"}
                </h3>
                <p className="text-[#d8d6f2] text-sm mb-6">
                  {language === "es"
                    ? "Contáctanos para obtener una cotización personalizada"
                    : "Contact us to get a personalized quote"}
                </p>
                <StarBorder
                  as="button"
                  className="w-full"
                  color="#bccceb"
                  speed="2s"
                  thickness={0.1}
                >
                  <Link
                    href={`/contact?service=${encodeURIComponent(
                      service.title
                    )}`}
                    className="inline-flex items-center justify-center w-full px-4 py-3 text-[#bccceb] font-bold rounded-lg text-sm sm:text-base"
                  >
                    {t("services.requestQuote")}
                  </Link>
                </StarBorder>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
