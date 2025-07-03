import { Target, Eye, Award, Users, Code, Lightbulb } from "lucide-react"

export default function About() {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excelencia",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Colaboración",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Innovación",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Creatividad",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ]

  const objectives = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
  ]

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Acerca de <span className="text-yellow-400">Nosotros</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Somos una empresa comprometida con la excelencia en servicios digitales.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <Target className="w-10 h-10 text-yellow-400 mr-4" />
              <h2 className="text-3xl font-bold text-white">Misión</h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <Eye className="w-10 h-10 text-yellow-400 mr-4" />
              <h2 className="text-3xl font-bold text-white">Visión</h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </p>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Nuestros <span className="text-yellow-400">Valores</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center bg-black border border-gray-800 rounded-lg p-6 hover:border-yellow-400 transition-all duration-300"
              >
                <div className="text-yellow-400 mb-4 flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Business Objectives */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-lg p-8 lg:p-12">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Objetivos <span className="text-yellow-400">Empresariales</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-6">
              {objectives.map((objective, index) => (
                <div key={index} className="flex items-start bg-black/50 border border-gray-800 rounded-lg p-6">
                  <div className="flex-shrink-0 w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center font-bold mr-4">
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
          <h2 className="text-4xl font-bold text-white mb-8">
            Nuestro <span className="text-yellow-400">Equipo</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nuestro equipo está compuesto por profesionales
            altamente calificados y apasionados por la tecnología.
          </p>

          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-8">
            <h3 className="text-3xl font-bold text-black mb-4">¿Quieres Conocer Más Sobre Nosotros?</h3>
            <p className="text-black/80 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contacta con nosotros y descubre cómo podemos
              trabajar juntos.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-black text-yellow-400 font-bold rounded-lg hover:bg-gray-900 transition-all duration-300"
            >
              Contactar Ahora
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
