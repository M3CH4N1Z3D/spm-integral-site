"use client"

import { useParams, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import SpotlightCard from "@/components/ui/SpotLightCard"
import ShinyText from "@/components/ui/ShinyText"
import StarBorder from "@/components/ui/StarBorder"
import { useLanguage } from "@/contexts/LanguageContext"
import { useServicesData } from "@/lib/services"

export default function ServicePage() {
  const params = useParams()
  const router = useRouter()
  const { t, language } = useLanguage()
  const { services } = useServicesData()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const slug = params.slug as string

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
        .replace(/[^\w_]/g, "") === slug,
  )

  // Service images - you'll need to add these to your public folder
  const serviceImages = [
    `/services/${slug}/image1.jpg`,
    `/services/${slug}/image2.jpg`,
    `/services/${slug}/image3.jpg`,
    `/services/${slug}/image4.jpg`,
  ]

  // Fallback images if service-specific images don't exist
  const fallbackImages = [
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ]

  const images = serviceImages.length > 0 ? serviceImages : fallbackImages

  useEffect(() => {
    if (!service) {
      router.push("/services")
    }
  }, [service, router])

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#2d3559] to-[#393b49]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#bccceb] mb-4">Servicio no encontrado</h1>
          <Link href="/services" className="text-[#a693e5] hover:underline">
            Volver a servicios
          </Link>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const getServiceSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "")
  }

  const getDetailedDescription = (serviceTitle: string) => {
    const descriptions = {
      es: {
        "desarrollo-web":
          "Creamos sitios web modernos, rápidos y escalables utilizando las últimas tecnologías. Nuestro enfoque se centra en la experiencia del usuario, el rendimiento óptimo y la funcionalidad robusta. Desde sitios corporativos hasta plataformas de e-commerce complejas, desarrollamos soluciones web que impulsan tu negocio hacia el éxito digital.",
        "apps-moviles":
          "Desarrollamos aplicaciones móviles nativas e híbridas que ofrecen experiencias excepcionales en iOS y Android. Nuestro equipo especializado utiliza tecnologías de vanguardia para crear apps intuitivas, rápidas y seguras que conectan con tus usuarios de manera efectiva.",
        "cloud-services":
          "Implementamos infraestructuras en la nube seguras, escalables y eficientes utilizando AWS, Google Cloud y Microsoft Azure. Optimizamos tus recursos, reducimos costos y garantizamos la disponibilidad de tus servicios con soluciones cloud personalizadas.",
        "uxui-design":
          "Diseñamos interfaces intuitivas y atractivas que priorizan la experiencia del usuario. Nuestro proceso incluye investigación de usuarios, prototipado, testing y creación de design systems coherentes que fortalecen tu marca y mejoran la usabilidad.",
        "base-de-datos":
          "Diseñamos, implementamos y optimizamos bases de datos relacionales y NoSQL para garantizar el máximo rendimiento de tus aplicaciones. Nos especializamos en modelado de datos, optimización de consultas y estrategias de backup y recuperación.",
        consultoria:
          "Ofrecemos consultoría técnica especializada para ayudarte a tomar las mejores decisiones tecnológicas. Realizamos auditorías de código, definimos arquitecturas escalables y te acompañamos en procesos de migración y modernización tecnológica.",
        "servicios-backend":
          "Desarrollamos APIs robustas, microservicios y lógica de negocio eficiente que potencian tus aplicaciones. Nos especializamos en arquitecturas escalables, integración de sistemas y desarrollo de servicios backend de alto rendimiento.",
        "diseno-grafico":
          "Creamos identidades visuales sólidas y piezas gráficas impactantes que comunican efectivamente tu mensaje. Desde branding completo hasta materiales de marketing digital, desarrollamos soluciones creativas que fortalecen tu presencia visual.",
      },
      en: {
        "web-development":
          "We create modern, fast and scalable websites using the latest technologies. Our approach focuses on user experience, optimal performance and robust functionality. From corporate sites to complex e-commerce platforms, we develop web solutions that drive your business towards digital success.",
        "mobile-apps":
          "We develop native and hybrid mobile applications that offer exceptional experiences on iOS and Android. Our specialized team uses cutting-edge technologies to create intuitive, fast and secure apps that connect effectively with your users.",
        "cloud-services":
          "We implement secure, scalable and efficient cloud infrastructures using AWS, Google Cloud and Microsoft Azure. We optimize your resources, reduce costs and guarantee the availability of your services with personalized cloud solutions.",
        "uxui-design":
          "We design intuitive and attractive interfaces that prioritize user experience. Our process includes user research, prototyping, testing and creation of coherent design systems that strengthen your brand and improve usability.",
        database:
          "We design, implement and optimize relational and NoSQL databases to guarantee maximum performance of your applications. We specialize in data modeling, query optimization and backup and recovery strategies.",
        consulting:
          "We offer specialized technical consulting to help you make the best technological decisions. We perform code audits, define scalable architectures and accompany you in migration and technological modernization processes.",
        "backend-services":
          "We develop robust APIs, microservices and efficient business logic that power your applications. We specialize in scalable architectures, system integration and high-performance backend service development.",
        "graphic-design":
          "We create solid visual identities and impactful graphic pieces that effectively communicate your message. From complete branding to digital marketing materials, we develop creative solutions that strengthen your visual presence.",
      },
    }

    const serviceKey = getServiceSlug(serviceTitle)
    return descriptions[language][serviceKey] || service.description
  }

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
              <span className="text-[#bccceb]">{service.title.split(" ")[0]}</span>{" "}
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
          <div className="mb-12 sm:mb-16">
            <SpotlightCard className="overflow-hidden" spotlightColor="rgba(45, 53, 89, 0.3)">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px]">
                <Image
                  src={images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${service.title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                />

                {/* Navigation Buttons */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-200 z-10"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-200 z-10"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                  </>
                )}

                {/* Dots Indicator */}
                {images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
                          index === currentImageIndex ? "bg-[#a693e5]" : "bg-white/50 hover:bg-white/70"
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </SpotlightCard>
          </div>

          {/* Service Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
            {/* Main Description */}
            <div className="lg:col-span-2">
              <SpotlightCard className="h-full" spotlightColor="rgba(45, 53, 89, 0.3)">
                <h2 className="text-2xl sm:text-3xl font-bold text-[#bccceb] mb-4 sm:mb-6">
                  {language === "es" ? "Descripción del Servicio" : "Service Description"}
                </h2>
                <p className="text-[#d8d6f2] text-base sm:text-lg leading-relaxed mb-6">
                  {getDetailedDescription(service.title)}
                </p>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#bccceb]">{t("services.technologies")}</h3>
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
              <SpotlightCard className="text-center" spotlightColor="rgba(45, 53, 89, 0.3)">
                <div className="text-[#a693e5] mb-4 flex justify-center">
                  <div className="p-4 bg-[#2d3559] rounded-full">{service.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-[#bccceb] mb-4">{service.title}</h3>
                <p className="text-[#d8d6f2] text-sm mb-6">{service.description}</p>
              </SpotlightCard>

              {/* CTA Card */}
              <SpotlightCard className="text-center" spotlightColor="rgba(45, 53, 89, 0.3)">
                <h3 className="text-lg font-bold text-[#bccceb] mb-4">
                  {language === "es" ? "¿Interesado en este servicio?" : "Interested in this service?"}
                </h3>
                <p className="text-[#d8d6f2] text-sm mb-6">
                  {language === "es"
                    ? "Contáctanos para obtener una cotización personalizada"
                    : "Contact us to get a personalized quote"}
                </p>
                <StarBorder as="button" className="w-full" color="#bccceb" speed="2s" thickness={0.1}>
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center justify-center w-full px-4 py-3 text-[#bccceb] font-bold rounded-lg text-sm sm:text-base"
                  >
                    {t("services.requestQuote")}
                  </Link>
                </StarBorder>
              </SpotlightCard>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-[#a693e5] to-yellow-500 rounded-lg p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-4">
                <ShinyText
                  text={language === "es" ? "¿Listo para comenzar?" : "Ready to get started?"}
                  disabled={false}
                  speed={3}
                  className="text-[#2d3559]"
                />
              </h2>
              <p className="text-[#2d3559] mb-6 text-sm sm:text-base max-w-2xl mx-auto font-medium">
                {language === "es"
                  ? "Transformemos tus ideas en soluciones digitales exitosas. Contáctanos hoy mismo."
                  : "Let's transform your ideas into successful digital solutions. Contact us today."}
              </p>
              <StarBorder as="button" className="custom-class" color="#2d3559" speed="2s" thickness={0.1}>
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  className="inline-flex items-center px-4 sm:px-6 py-3 sm:py-4 text-[#2d3559] font-bold rounded-lg text-sm sm:text-base"
                >
                  {language === "es" ? "Solicitar Cotización" : "Request Quote"}
                </Link>
              </StarBorder>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
