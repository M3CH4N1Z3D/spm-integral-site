import { clientPageDescription, clients, testimonials } from "@/lib/clients";
import ImageCarousel from "@/components/ui/ImageCarousel";
import SpotlightCard from "@/components/ui/SpotLightCard";
import CountUp from "@/components/ui/CountUP";
import ShinyText from "@/components/ui/ShinyText";
import StarBorder from "@/components/ui/StarBorder";

export default function Clients() {
  return (
    <div className="pt-20 sm:pt-24 pb-8 sm:pb-16 bg-gradient-to-r from-[#2d3559] to-[#393b49]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center m-4 sm:m-8 lg:m-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            <span className="text-[#bccceb]">SPM</span>{" "}
            <span className="text-[#a693e5]">Clientes</span>
          </h1>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-lg p-4 sm:p-6 lg:p-8 xl:p-12 mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
            <span className="text-[#bccceb]">Nuestros</span>{" "}
            <span className="text-[#a693e5]">Números</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <span className="text-[#6c4fce] font-bold text-2xl sm:text-3xl lg:text-4xl">
                  +
                </span>
                <CountUp
                  from={0}
                  to={50}
                  separator=","
                  direction="up"
                  duration={1}
                  className="text-[#6c4fce] font-bold text-2xl sm:text-3xl lg:text-4xl"
                />
              </div>
              <p className="text-[#bccceb] font-normal text-xs sm:text-sm lg:text-base mt-2">
                Proyectos Completados
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <span className="text-[#6c4fce] font-bold text-2xl sm:text-3xl lg:text-4xl">
                  +
                </span>
                <CountUp
                  from={0}
                  to={100}
                  separator=","
                  direction="up"
                  duration={1}
                  className="text-[#6c4fce] font-bold text-2xl sm:text-3xl lg:text-4xl"
                />
              </div>
              <p className="text-[#bccceb] font-normal text-xs sm:text-sm lg:text-base mt-2">
                Clientes Satisfechos
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <span className="text-[#6c4fce] font-bold text-2xl sm:text-3xl lg:text-4xl">
                  +
                </span>
                <CountUp
                  from={0}
                  to={14}
                  separator=","
                  direction="up"
                  duration={1}
                  className="text-[#6c4fce] font-bold text-2xl sm:text-3xl lg:text-4xl"
                />
              </div>
              <p className="text-[#bccceb] font-normal text-xs sm:text-sm lg:text-base mt-2">
                Años de Experiencia
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <CountUp
                  from={0}
                  to={24}
                  separator="/"
                  direction="up"
                  duration={1}
                  className="text-[#6c4fce] font-bold text-2xl sm:text-3xl lg:text-4xl"
                />
                <span className="text-[#6c4fce] font-bold text-2xl sm:text-3xl lg:text-4xl">
                  /
                </span>
                <CountUp
                  from={0}
                  to={7}
                  separator="/"
                  direction="up"
                  duration={1}
                  className="text-[#6c4fce] font-bold text-2xl sm:text-3xl lg:text-4xl"
                />
              </div>
              <p className="text-[#bccceb] font-normal text-xs sm:text-sm lg:text-base mt-2">
                Soporte Técnico
              </p>
            </div>
          </div>
        </div>

        {/* Header Description */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-base sm:text-lg lg:text-xl text-[#bccceb] max-w-3xl mx-auto text-justify">
            En <strong>SPM INTEGRAL</strong>
            {", "}
            {clientPageDescription}
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-20 flex flex-col items-center mx-auto">
          <h2 className="text-3xl font-bold text-[#bccceb] text-center mb-12">
            Empresas que Confían en Nosotros
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
            <span className="text-[#bccceb]">Lo que Dicen Nuestros</span>{" "}
            <span className="text-[#a693e5]">Clientes</span>
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

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-3 sm:mb-4">
              <ShinyText
                text="¿Quieres Ser Nuestro Próximo Cliente?"
                disabled={false}
                speed={3}
                className="text-[#5eabd6]"
              />
            </h2>
            <p className="text-[#bccceb] mb-4 sm:mb-6 text-sm sm:text-base max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Únete a
              las empresas que ya confían en SPM INTEGRAL para sus proyectos
              digitales.
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
                className="inline-flex items-center px-3 sm:px-4 py-2 sm:py-3 text-[#bccceb] font-bold rounded-lg text-sm sm:text-base"
              >
                Comenzar un Proyecto
              </a>
            </StarBorder>
          </div>
        </div>
      </div>
    </div>
  );
}
