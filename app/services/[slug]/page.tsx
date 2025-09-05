"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useServicesData } from "@/lib/services";
import SpotlightCard from "@/components/ui/SpotLightCard";
import StarBorder from "@/components/ui/StarBorder";
import Image from "next/image";
import CardSwap, { Card } from "@/components/ui/CardSwap";

export default function ServicePage() {
  const params = useParams();
  const router = useRouter();
  const { t, language } = useLanguage();
  const { services } = useServicesData();

  const slug = params.slug as string;

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

  if (!service) {
    // Redirect or show a not found page if the service doesn't exist
    if (typeof window !== "undefined") {
      router.push("/services");
    }
    return null; // Render nothing on the server or during the redirect
  }

  const serviceKeyMap: { [key: string]: string } = {
    "Desarrollo Web": "webDev",
    "Apps Móviles": "mobileApps",
    "Cloud Services": "cloudServices",
    "UX/UI Design": "uxui",
    "Base de Datos": "database",
    "Consultoría": "consulting",
    "Servicios Backend": "backend",
    "Diseño Gráfico": "graphicDesign",
    "Web Development": "webDev",
    "Mobile Apps": "mobileApps",
    Database: "database",
    Consulting: "consulting",
    "Backend Services": "backend",
    "Graphic Design": "graphicDesign",
  };

  const key = serviceKeyMap[service.title];

  const serviceImages = [
    `/services/${slug}/imagen1.png`,
    `/services/${slug}/imagen2.png`,
    `/services/${slug}/imagen3.png`,
    `/services/${slug}/imagen4.png`,
  ];

  const fallbackImages = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ];

  const images = serviceImages.length > 0 ? serviceImages : fallbackImages;

  const benefits = [
    t("service.benefit1"),
    t("service.benefit2"),
    t("service.benefit3"),
    t("service.benefit4"),
  ];

  const methodology = [
    { title: t(`service.${key}.step1Title`), description: t(`service.${key}.step1Desc`) },
    { title: t(`service.${key}.step2Title`), description: t(`service.${key}.step2Desc`) },
    { title: t(`service.${key}.step3Title`), description: t(`service.${key}.step3Desc`) },
    { title: t(`service.${key}.step4Title`), description: t(`service.${key}.step4Desc`) },
  ];

  const solutions = [
    { title: t(`service.${key}.card1Title`), description: t(`service.${key}.card1Desc`), icon: service.icon },
    { title: t(`service.${key}.card2Title`), description: t(`service.${key}.card2Desc`), icon: service.icon },
    { title: t(`service.${key}.card3Title`), description: t(`service.${key}.card3Desc`), icon: service.icon },
    key !== 'mobileApps' && key !== 'graphicDesign' ? { title: t(`service.${key}.card4Title`), description: t(`service.${key}.card4Desc`), icon: service.icon } : null,
  ].filter(Boolean) as { title: string; description: string; icon: React.ReactNode }[];


  return (
    <div className="min-h-screen bg-gradient-to-r from-[#2d3559] to-[#393b49] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/services" className="inline-flex items-center text-[#bccceb] hover:text-[#a693e5] transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            {language === "es" ? "Volver a Servicios" : "Back to Services"}
          </Link>
        </div>

        {/* Section 1: Hero */}
        <section className="text-center py-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t(`service.${key}.heroTitle`).split(' ').map((word, index) => (
              <span key={index}>
                <span className="text-[#a693e5]">{word.charAt(0)}</span>
                {word.slice(1)}{' '}
              </span>
            ))}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#bccceb]">{t(`service.${key}.heroParagraph`)}</p>
        </section>

        {/* Image Carousel - Moved here as it's a key visual element */}
        <section className="flex flex-col items-center mb-12 sm:mb-16">
            <div style={{ height: "350px", position: "relative" }}>
              <CardSwap cardDistance={500} verticalDistance={0} delay={3000} pauseOnHover={false} width={500} height={400} skewAmount={0}>
                {images.map((imgSrc, index) => (
                  <Card key={index}>
                    <div className="w-full h-full flex items-center justify-center overflow-hidden">
                      <Image src={imgSrc || "/placeholder.svg"} alt={service ? `${service.title} - Imagen ${index + 1}` : `Placeholder Image ${index + 1}`} width={800} height={600} className="object-contain w-full h-full rounded-md" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw" />
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>
        </section>

        {/* Section 2: "Lo que ofrecemos" */}
        <section className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-[#a693e5]">{t(`service.${key}.solutionsTitle`).split(' ')[0]}</span>
            {' '}{t(`service.${key}.solutionsTitle`).split(' ').slice(1).join(' ')}
          </h2>
          <div className="flex flex-wrap gap-8 justify-center">
            {solutions.map((solution, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/4">
                <SpotlightCard className="p-6 text-center h-full" spotlightColor="rgba(166, 147, 229, 0.2)">
                  <div className="flex justify-center mb-4 text-[#a693e5]">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-[#d8d6f2]">{solution.title}</h3>
                  <p className="text-[#bccceb]">{solution.description}</p>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: "¿Por qué elegirnos?" */}
        <section className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t(`service.${key}.whyUsTitle`)}</h2>
          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                <p className="text-[#bccceb]" dangerouslySetInnerHTML={{ __html: benefit.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }} />
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: "Nuestra Metodología" */}
        <section className="py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t(`service.${key}.methodologyTitle`)}</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 hidden md:block" />
            {methodology.map((step, index) => (
              <div key={index} className={`flex items-center mb-8 md:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="flex-1 md:w-1/2 p-4">
                  <div className={`bg-[#2d3559] p-6 rounded-lg border border-gray-700 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="text-2xl font-bold text-[#a693e5] mb-2">{step.title}</h3>
                    <p className="text-[#bccceb]">{step.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-center w-12 h-12 bg-[#a693e5] rounded-full text-black font-bold text-xl z-10">
                  {index + 1}
                </div>
                 <div className="flex-1 md:w-1/2 p-4 md:block hidden" />
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: CTA Final */}
        <section className="py-16">
          <SpotlightCard className="text-center p-8 md:p-12" spotlightColor="rgba(166, 147, 229, 0.3)">
            <h2 className="text-3xl font-bold mb-4">{t(`service.${key}.ctaTitle`)}</h2>
            <p className="text-lg text-[#bccceb] max-w-2xl mx-auto mb-8">{t(`service.${key}.ctaParagraph`)}</p>
            <StarBorder as="button" color="#bccceb" speed="2s" thickness={0.1}>
              <Link href={service ? `/contact?service=${encodeURIComponent(service.title)}` : '/contact'} className="inline-flex items-center justify-center px-8 py-4 text-[#bccceb] font-bold rounded-lg text-lg">
                {t(`service.${key}.ctaButton`)}
              </Link>
            </StarBorder>
          </SpotlightCard>
        </section>
      </div>
    </div>
  );
}
