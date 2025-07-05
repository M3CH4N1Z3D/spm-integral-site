"use client";
import SpotlightCard from "@/components/ui/SpotLightCard";
import {
  Target,
  Eye,
  Award,
  Users,
  Code,
  Lightbulb,
  Handshake,
  Rocket,
} from "lucide-react";
import ProfileCard from "@/components/ui/ProfileCard";

export default function About() {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excelencia",
      description:
        "Nos esforzamos por superar las expectativas en cada proyecto, entregando soluciones de alta calidad y rendimiento.",
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Colaboración",
      description:
        "Creemos en el trabajo en equipo, tanto con nuestros clientes como dentro de nuestro equipo, para lograr resultados sostenibles.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Innovación",
      description:
        "Adoptamos nuevas tecnologías y enfoques creativos para resolver desafíos complejos con soluciones modernas y efectivas.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creatividad",
      description:
        "Transformamos ideas en experiencias digitales únicas, combinando diseño, funcionalidad y visión estratégica.",
    },
  ];

  const objectives = [
    "Desarrollar soluciones tecnológicas innovadoras que impulsen la eficiencia en la industria y la vida cotidiana.",
    "Brindar servicios de software accesibles, ágiles y personalizados para empresas de todos los tamaños.",
    "Consolidar una cultura de mejora continua, calidad y compromiso con nuestros clientes.",
    "Expandir nuestra presencia en Colombia y Latinoamérica como referentes en desarrollo web, móvil y sistemas de gestión.",
    "Fomentar el crecimiento profesional de nuestro equipo mediante la capacitación constante y el trabajo colaborativo.",
  ];

  return (
    <div className="pt-24 pb-16 bg-gradient-to-r from-[#2c325d] to-[#393b49]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="m-16">
          <h1 className="text-center text-5xl md:text-6xl font-bold text-white mb-6">
            SPM <span className="text-[#5eabd6]">Historia</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto text-justify">
            SPM nació en 2021 como una empresa enfocada en servicios de
            ingeniería industrial, ofreciendo soluciones especializadas para
            maquinaria CNC. Con el tiempo, evolucionamos hacia una compañía
            integral de desarrollo de software, abarcando plataformas web,
            móviles y sistemas integrados de gestión documental orientados a la
            gestión de calidad. Esta transformación refleja nuestro compromiso
            con la innovación y la adaptación a las necesidades tecnológicas del
            entorno industrial y empresarial. Nuestro equipo de expertos seguirá
            innovando y adaptándose para ofrecer soluciones que impulsan el
            éxito de nuestros clientes.
          </p>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-4 text-justify">
            En SPM, creemos en la excelencia, la innovación y el compromiso con
            nuestros clientes. Desde nuestros inicios, hemos trabajado
            incansablemente para ofrecer soluciones de ingeniería industrial y
            software de alta calidad, adaptadas a las necesidades específicas de
            cada proyecto. Nuestro equipo de expertos está siempre listo para
            enfrentar nuevos desafíos y ofrecer soluciones innovadoras que
            impulsan el éxito de nuestros clientes.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(94, 171, 214, 0.5)"
          >
            <div className="flex items-center mb-6">
              <Target className="w-10 h-10 text-[#5eabd6] mr-4" />
              <h2 className="text-3xl font-bold text-white relative hover:cursor-pointer transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#5eabd6] after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                Misión
              </h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed text-justify">
              Nuestra misión es ofrecer soluciones tecnológicas que impacten
              positivamente tanto en la industria como en la vida cotidiana. Nos
              enfocamos en desarrollar herramientas ágiles, accesibles y
              altamente profesionales, que respondan a los desafíos actuales con
              eficiencia, calidad y visión a largo plazo. Nuestro compromiso es
              no solo resolver problemas, sino también crear oportunidades y
              mejorar la calidad de vida de nuestros usuarios.
            </p>
          </SpotlightCard>

          {/* Vision */}
          <SpotlightCard
            className="custom-spotlight-card"
            spotlightColor="rgba(94, 171, 214, 0.5)"
          >
            <div className="flex items-center mb-6">
              <Eye className="w-10 h-10 text-[#5eabd6] mr-4" />
              <h2 className="text-3xl font-bold text-white relative transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#5eabd6] after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100">
                Visión
              </h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed text-justify">
              En SPM, nos proyectamos como una empresa líder en innovación
              tecnológica. Para 2030, aspiramos a consolidarnos como referentes
              en el desarrollo de software en Colombia y Latinoamérica, siendo
              la opción preferida por industrias, empresas y usuarios que
              confían en nuestras aplicaciones para transformar su día a día.
            </p>
          </SpotlightCard>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Nuestros <span className="text-[#5eabd6]">Valores</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center bg-black border border-gray-800 rounded-lg p-6 hover:border-[#5eabd6] transition-all duration-300"
              >
                <div className="text-[#5eabd6] mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Objectives */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-lg p-8 lg:p-12">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Objetivos <span className="text-[#5eabd6]">Empresariales</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              {objectives.map((objective, index) => (
                <div
                  key={index}
                  className="flex items-start bg-black/50 border border-gray-800 rounded-lg p-6"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-[#5eabd6] text-black rounded-full flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <p className="text-gray-300 text-lg">{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20 text-center">
          <div className="flex flex-col items-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              Nuestro <span className="text-[#5eabd6]">Equipo</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 text-justify">
              En SPM INTEGRAL, contamos con un equipo multidisciplinario de
              profesionales apasionados por la tecnología, la ingeniería y la
              innovación. Nuestra experiencia abarca desde el desarrollo de
              software web y móvil hasta la implementación de soluciones
              industriales y sistemas integrados de gestión documental.
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
              ¿Quieres Conocer Más Sobre Nosotros?
            </h3>
            <p className="text-black/80 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contacta
              con nosotros y descubre cómo podemos trabajar juntos.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-black text-[#5eabd6] font-bold rounded-lg hover:bg-gray-900 transition-all duration-300"
            >
              Contactar Ahora
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
