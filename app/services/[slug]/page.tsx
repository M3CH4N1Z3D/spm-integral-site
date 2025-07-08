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
    const descriptions = {
      es: {
        "desarrollo-web":
          "Diseñamos y desarrollamos sitios web modernos, rápidos y escalables utilizando tecnologías de vanguardia como Next.js, React, Tailwind CSS y arquitecturas basadas en componentes. Nuestro enfoque combina diseño centrado en el usuario, rendimiento optimizado y código limpio para garantizar experiencias digitales fluidas y accesibles. Desde sitios corporativos institucionales hasta plataformas de comercio electrónico altamente personalizadas, creamos soluciones web robustas, seguras y preparadas para escalar junto a tu negocio. Cada proyecto es construido con buenas prácticas de desarrollo, integración continua y estándares web actualizados, asegurando calidad, mantenibilidad y resultados medibles.",
        "apps-mviles":
          "Desarrollamos aplicaciones móviles nativas e híbridas con experiencia fluida en Android, iOS y entornos multiplataforma. Utilizamos tecnologías como React Native, Flutter y herramientas nativas para crear apps rápidas, seguras y altamente intuitivas. Nuestro enfoque incluye diseño centrado en el usuario, integración con APIs, pruebas automatizadas y despliegue en tiendas oficiales, garantizando rendimiento, escalabilidad y una experiencia consistente en todos los dispositivos.",
        "cloud-services":
          "Implementamos infraestructuras en la nube seguras, escalables y eficientes utilizando proveedores como AWS, Google Cloud y Microsoft Azure. Diseñamos arquitecturas distribuidas, automatizamos despliegues con pipelines CI/CD y aplicamos políticas de seguridad avanzadas. Optimizamos el uso de recursos, reducimos costos operativos y garantizamos alta disponibilidad, resiliencia y rendimiento para tus servicios digitales.",
        "uxui-design":
          "Diseñamos interfaces intuitivas y atractivas que priorizan la experiencia del usuario. Nuestro proceso incluye investigación de usuarios, arquitectura de información, wireframes, prototipado interactivo y pruebas de usabilidad. Creamos design systems consistentes, accesibles y escalables que refuerzan tu identidad visual, mejoran la navegación y garantizan una experiencia coherente en todos los dispositivos.",
        "base-de-datos":
          "Diseñamos, implementamos y optimizamos bases de datos relacionales y NoSQL para garantizar el máximo rendimiento, disponibilidad y consistencia de tus aplicaciones. Nos especializamos en modelado de datos eficiente, normalización, optimización de consultas, replicación, particionamiento, escalabilidad horizontal y estrategias de respaldo y recuperación ante desastres. Adaptamos cada solución a las necesidades específicas de tu sistema, asegurando integridad y rendimiento sostenido.",
        consultora:
          "Ofrecemos consultoría técnica especializada para ayudarte a tomar decisiones estratégicas en tus proyectos digitales. Realizamos auditorías de código, análisis de arquitectura, evaluación de rendimiento y seguridad, y acompañamos procesos de migración, modernización tecnológica y adopción de nuevas herramientas. Nuestro enfoque se basa en las mejores prácticas de ingeniería, alineadas con tus objetivos de negocio y necesidades operativas.",
        "servicios-backend":
          "Desarrollamos APIs robustas, microservicios y lógica de negocio eficiente que potencian tus aplicaciones. Utilizamos tecnologías como Node.js, Express, NestJS y bases de datos escalables para construir servicios backend seguros, mantenibles y de alto rendimiento. Nuestras soluciones están diseñadas para integrarse fácilmente con sistemas externos, escalar horizontalmente y adaptarse a arquitecturas modernas basadas en eventos o contenedores.",
        "diseo-grfico":
          "Creamos identidades visuales sólidas y piezas gráficas impactantes que comunican efectivamente tu mensaje. Desde branding completo, logotipos y manuales de marca hasta materiales de marketing digital, banners y contenido para redes sociales, desarrollamos soluciones creativas que fortalecen tu presencia visual. Nuestro enfoque combina estrategia, estética y coherencia para transmitir los valores de tu marca de forma memorable y profesional.",
      },
      en: {
        "web-development":
          "We design and develop modern, fast, and scalable websites using cutting-edge technologies such as Next.js, React, Tailwind CSS, and component-based architectures. Our approach blends user-centered design, optimized performance, and clean code to deliver seamless and accessible digital experiences. From institutional corporate sites to highly customized e-commerce platforms, we build robust, secure web solutions that are ready to scale with your business. Every project is crafted with best development practices, continuous integration, and up-to-date web standards to ensure quality, maintainability, and measurable results.",
        "mobile-apps":
          "We develop native and hybrid mobile applications that deliver a smooth experience across Android, iOS, and cross-platform environments. Using technologies like React Native, Flutter, and native SDKs, we build fast, secure, and highly intuitive apps. Our approach includes user-centered design, API integration, automated testing, and deployment to official stores—ensuring performance, scalability, and a consistent experience across all devices.",
        "cloud-services":
          "We implement secure, scalable, and efficient cloud infrastructures using providers such as AWS, Google Cloud, and Microsoft Azure. We design distributed architectures, automate deployments with CI/CD pipelines, and apply advanced security policies. We optimize resource usage, reduce operational costs, and ensure high availability, resilience, and performance for your digital services.",
        "uxui-design":
          "We design intuitive and visually appealing interfaces that prioritize user experience. Our process includes user research, information architecture, wireframing, interactive prototyping, and usability testing. We create consistent, accessible, and scalable design systems that strengthen your visual identity, enhance navigation, and ensure a cohesive experience across all devices.",
        database:
          "We design, implement, and optimize relational and NoSQL databases to ensure maximum performance, availability, and consistency for your applications. We specialize in efficient data modeling, normalization, query optimization, replication, partitioning, horizontal scalability, and disaster recovery strategies. Each solution is tailored to your system’s specific needs, ensuring data integrity and sustained performance.",
        consulting:
          "We offer specialized technical consulting to help you make strategic decisions in your digital projects. We conduct code audits, architecture analysis, performance and security evaluations, and support migration, technological modernization, and the adoption of new tools. Our approach is grounded in engineering best practices, aligned with your business goals and operational needs.",
        "backend-services":
          "We develop robust APIs, microservices, and efficient business logic that power your applications. Using technologies like Node.js, Express, NestJS, and scalable databases, we build secure, maintainable, and high-performance backend services. Our solutions are designed to integrate seamlessly with external systems, scale horizontally, and adapt to modern architectures based on events or containers.",
        "graphic-design":
          "We create strong visual identities and impactful graphic assets that effectively communicate your message. From full branding, logos, and brand guidelines to digital marketing materials, banners, and social media content, we develop creative solutions that strengthen your visual presence. Our approach blends strategy, aesthetics, and consistency to convey your brand values in a memorable and professional way.",
      },
    };

    const serviceKey = getServiceSlug(serviceTitle);
    return (
      (descriptions[language] as Record<string, string>)[serviceKey] ||
      service.description
    );
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
