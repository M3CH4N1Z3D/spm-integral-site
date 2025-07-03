import { Code, Smartphone, Cloud, Palette, Database, Users, Settings, BarChart } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Desarrollo Web",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: ["React & Next.js", "Node.js & Express", "E-commerce", "CMS Personalizado"],
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Aplicaciones Móviles",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: ["Android Nativo", "iOS Nativo", "React Native", "Flutter"],
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Servicios Cloud",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: ["AWS", "Google Cloud", "Microsoft Azure", "DevOps"],
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UX/UI Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: ["Diseño de Interfaces", "Prototipado", "Design Systems", "User Research"],
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Base de Datos",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: ["MySQL", "PostgreSQL", "MongoDB", "Optimización"],
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Consultoría IT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: ["Auditoría de Código", "Arquitectura", "Migración", "Capacitación"],
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Servicios Backend",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: ["APIs REST", "GraphQL", "Microservicios", "Integración"],
    },
    {
      icon: <BarChart className="w-12 h-12" />,
      title: "Diseño Gráfico",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      features: ["Branding", "Marketing Digital", "Ilustración", "Identidad Visual"],
    },
  ]

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nuestros <span className="text-yellow-400">Servicios</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-yellow-400 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-yellow-400 mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>

              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-white mb-3">Tecnologías:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="px-3 py-1 bg-black border border-yellow-400 text-yellow-400 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-black mb-4">¿Necesitas un Servicio Personalizado?</h2>
            <p className="text-black/80 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contacta con nosotros para discutir tus
              necesidades específicas.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-black text-yellow-400 font-bold rounded-lg hover:bg-gray-900 transition-all duration-300"
            >
              Solicitar Cotización
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
