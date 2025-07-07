import Image from "next/image";
import { clientPageDescription, clients, testimonials } from "@/lib/clients";
import ImageCarousel from "@/components/ui/ImageCarousel";
import Link from "next/link";
import SpotlightCard from "@/components/ui/SpotLightCard";
import CountUp from "@/components/ui/CountUP";
import ShinyText from "@/components/ui/ShinyText";
import StarBorder from "@/components/ui/StarBorder";

export default function Clients() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-r from-[#2d3559] to-[#393b49]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center m-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-[#bccceb]">SPM</span>{" "}
            <span className="text-[#a693e5]">Clientes</span>
          </h1>
        </div>
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-lg p-8 lg:p-12 mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-[#bccceb] ">Nuestros</span>{" "}
            <span className="text-[#a693e5]">Números</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <span className="text-[#6c4fce] font-bold mb-2 text-4xl">+</span>
              <CountUp
                from={0}
                to={50}
                separator=","
                direction="up"
                duration={1}
                className="text-[#6c4fce] font-bold mb-2 text-4xl"
              />
              <p className="text-[#bccceb] font-normal">
                Proyectos Completados
              </p>
            </div>
            <div className="text-center">
              <span className="text-[#6c4fce] font-bold mb-2 text-4xl">+</span>
              <CountUp
                from={0}
                to={100}
                separator=","
                direction="up"
                duration={1}
                className="text-[#6c4fce] font-bold mb-2 text-4xl"
              />
              <p className="text-[#bccceb] font-normal">Clientes Satisfechos</p>
            </div>
            <div className="text-center">
              <span className="text-[#6c4fce] font-bold mb-2 text-4xl">+</span>
              <CountUp
                from={0}
                to={14}
                separator=","
                direction="up"
                duration={1}
                className="text-[#6c4fce] font-bold mb-2 text-4xl"
              />
              <p className="text-[#bccceb] font-normal">Años de Experiencia</p>
            </div>
            <div className="text-center">
              <CountUp
                from={0}
                to={24}
                separator="/"
                direction="up"
                duration={1}
                className="text-[#6c4fce] font-bold mb-2 text-4xl"
              />
              <span className="text-[#6c4fce] font-bold mb-2 text-4xl">/</span>{" "}
              <CountUp
                from={0}
                to={7}
                separator="/"
                direction="up"
                duration={1}
                className="text-[#6c4fce] font-bold mb-2 text-4xl"
              />
              <p className="text-[#bccceb] font-normal">Soporte Técnico</p>
            </div>
          </div>
        </div>
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xl text-[#bccceb] max-w-3xl mx-auto text-justify">
            En <strong>SPM INTEGRAL</strong>
            {", "}
            {clientPageDescription}
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-20 flex flex-col items-center mx-auto ">
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
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            <span className="text-[#bccceb]">Lo que Dicen Nuestros</span>{" "}
            <span className="text-[#a693e5]">Clientes</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <SpotlightCard
                className="custom-spotlight-card"
                spotlightColor="rgba(45, 53, 89, 0.7)"
                key={index}
              >
                <div className="flex items-center mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-[#bccceb]">
                      {testimonial.name}
                    </h3>
                    <p className="text-[#6c4fce]">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-[#bccceb] italic">"{testimonial.text}"</p>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* Stats */}

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-black mb-4">
              <ShinyText
                text="¿Quieres Ser Nuestro Próximo Cliente?"
                disabled={false}
                speed={3}
                className="text-[#5eabd6]"
              />
            </h2>
            <p className="text-[#bccceb] mb-6">
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
                className="inline-flex items-center px-2 py-1 text-[#bccceb] font-bold rounded-lg"
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
