import Hero from "./components/Hero"
import Link from "next/link"
import { Code, Smartphone, Cloud, Palette, Database, Users } from "lucide-react"

export default function Home() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Desarrollo Web",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Apps Móviles",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Services",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UX/UI Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Base de Datos",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Consultoría",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ]

  return (
    <div className="pt-16">
      <Hero />

      {/* Services Preview */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Nuestros <span className="text-yellow-400">Servicios</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-black border border-gray-800 rounded-lg p-6 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-yellow-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-all duration-300"
            >
              Ver Todos los Servicios
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">¿Listo para Transformar tu Negocio?</h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contacta con nosotros y descubre cómo podemos
            ayudarte.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-black text-yellow-400 font-bold rounded-lg hover:bg-gray-900 transition-all duration-300"
          >
            Contactar Ahora
          </Link>
        </div>
      </section>
    </div>
  )
}
