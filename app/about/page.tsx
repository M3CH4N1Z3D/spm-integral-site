"use client";
import SpotlightCard from "@/components/ui/SpotLightCard";
import { Target, Eye } from "lucide-react";
import ProfileCard from "@/components/ui/ProfileCard";
import { values, objectives, history, mision, vision, team } from "@/lib/about";
import ShinyText from "@/components/ui/ShinyText";
import StarBorder from "@/components/ui/StarBorder";

export default function About() {
  return (
    <div className="pt-24 pb-16 bg-gradient-to-r from-[#2d3559] to-[#393b49]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="m-16">
          <h1 className="text-center text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-[#bccceb]">SPM</span>{" "}
            <span className="text-[#a693e5]">Historia</span>
          </h1>
          <p className="text-xl text-[#bccceb] max-w-3xl mx-auto text-justify">
            {history[0]}
          </p>
          <p className="text-xl text-[#bccceb] max-w-3xl mx-auto mt-4 text-justify">
            {history[1]}
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(45, 53, 89, 0.7)"
          >
            <div className="flex items-center mb-6">
              <Target className="w-10 h-10 text-[#6c4fce] mr-4" />
              <h2 className="text-3xl font-bold text-[#bccceb] relative hover:cursor-pointer transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#bccceb] after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                Misión
              </h2>
            </div>
            <p className="text-[#bccceb] text-lg leading-relaxed text-justify">
              {mision}
            </p>
          </SpotlightCard>

          {/* Vision */}
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(45, 53, 89, 0.7)"
          >
            <div className="flex items-center mb-6">
              <Eye className="w-10 h-10 text-[#6c4fce] mr-4" />
              <h2 className="text-3xl font-bold text-[#bccceb] relative hover:cursor-pointer transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#bccceb] after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                Visión
              </h2>
            </div>
            <p className="text-[#bccceb] text-lg leading-relaxed text-justify">
              {vision}
            </p>
          </SpotlightCard>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            <span className="text-[bccceb]">Nuestros</span>{" "}
            <span className="text-[#a693e5]">Valores</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center bg-transparent border border-transparent rounded-lg p-6 hover:border-[#a693e5] transition-all duration-300"
              >
                <div className="text-[#a693e5] mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[#bccceb] mb-2">
                  {value.title}
                </h3>
                <p className="text-[#bccceb]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Objectives */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-lg p-8 lg:p-12">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            <span className="text-[#bccceb]">Objetivos</span>{" "}
            <span className="text-[#a693e5]">Empresariales</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              {objectives.map((objective, index) => (
                <div
                  key={index}
                  className="flex items-start bg-black/50 border border-[#2d3559] rounded-lg p-6"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-[#a693e5] text-black rounded-full flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <p className="text-[#bccceb] text-lg">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              <span className="text-[#bccceb]">Nuestro</span>{" "}
              <span className="text-[#a693e5]">Equipo</span>
            </h2>
            <p className="text-xl text-[#bccceb] max-w-3xl mx-auto mb-12 text-justify">
              {team}
            </p>
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

          <div className="bg-gradient-to-r from-[#5eabd6] to-yellow-500 rounded-lg p-8">
            <h3 className="text-3xl font-bold text-black mb-4">
              <ShinyText
                text="¿Quieres Conocer Más Sobre Nosotros?"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </h3>
            <p className="text-[#bccceb] mb-6">
              Contacta con nosotros y descubre cómo podemos trabajar juntos.
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
                Contactar Ahora
              </a>
            </StarBorder>
          </div>
        </div>
      </div>
    </div>
  );
}
