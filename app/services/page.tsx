import ShinyText from "@/components/ui/ShinyText";
import SpotlightCard from "@/components/ui/SpotLightCard";
import StarBorder from "@/components/ui/StarBorder";
import { services } from "@/lib/services";
import Link from "next/link";
export default function Services() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-r from-[#2d3559] to-[#393b49]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center m-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-[#bccceb]">SPM</span>{" "}
            <span className="text-[#a693e5]">Servicios</span>
          </h1>
          <p className="text-xl text-[#bccceb] max-w-3xl mx-auto justify-center">
            En <strong>SPM INTEGRAL</strong>, transformamos ideas en soluciones
            digitales de alto impacto. Nuestro enfoque combina diseño,
            tecnología y estrategia para ayudarte a destacar en un entorno
            competitivo. Ya sea que necesites una presencia web sólida o una app
            móvil de alto rendimiento, tenemos la experiencia para hacerlo
            realidad.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(45, 53, 89, 0.7)"
              key={index}
            >
              <div className="text-[#bccceb] mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-[#d8d6f2] mb-4">
                <Link
                  href={"#"}
                  className="relative hover:cursor-pointer transition-colors font-medium after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#bccceb] after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {service.title}
                </Link>
              </h3>
              <p className="text-[#bccceb] mb-6">{service.description}</p>

              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-[#bccceb] mb-3">
                  Tecnologías:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 bg-[#2d3559] border border-[#a693e5] text-[#a693e5] rounded-full text-sm"
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
        <div className="text-center mt-16">
          <div className="rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4">
              <ShinyText
                text="¿Necesitas un Servicio Personalizado?"
                disabled={false}
                speed={3}
                className="text-[#5eabd6]"
              />
            </h2>
            <p className="text-[#bccceb] mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contacta
              con nosotros para discutir tus necesidades específicas.
            </p>
            <StarBorder
              as="button"
              className="custom-class"
              color="#bccceb"
              speed="2s"
              thickness={0.1}
            >
              <a
                href="/contact"
                className="inline-flex items-center px-2 py-1 text-[#bccceb] font-bold rounded-lg"
              >
                Solicitar Cotización
              </a>
            </StarBorder>
          </div>
        </div>
      </div>
    </div>
  );
}
