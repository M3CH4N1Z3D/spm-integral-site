import Image from "next/image"

export default function Clients() {
  const clients = [
    { name: "Cliente 1", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Cliente 2", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Cliente 3", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Cliente 4", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Cliente 5", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Cliente 6", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Cliente 7", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Cliente 8", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Cliente 9", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Cliente 10", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Cliente 11", logo: "/placeholder.svg?height=100&width=200" },
    { name: "Cliente 12", logo: "/placeholder.svg?height=100&width=200" },
  ]

  const testimonials = [
    {
      name: "Juan Pérez",
      company: "Tech Solutions Inc.",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. SPM INTEGRAL transformó completamente nuestra presencia digital.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "María González",
      company: "Digital Marketing Pro",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. El equipo de SPM INTEGRAL superó todas nuestras expectativas.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Carlos Rodríguez",
      company: "StartUp Innovation",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Profesionalismo y calidad excepcional en cada proyecto.",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Nuestros <span className="text-yellow-400">Clientes</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Trabajamos con empresas de todos los tamaños, desde
            startups hasta corporaciones multinacionales.
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Empresas que Confían en Nosotros</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={150}
                  height={75}
                  className="max-w-full h-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Lo que Dicen Nuestros <span className="text-yellow-400">Clientes</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-gray-800 rounded-lg p-8 hover:border-yellow-400 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                    <p className="text-yellow-400">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-400 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-lg p-8 lg:p-12 mb-20">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Nuestros <span className="text-yellow-400">Números</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">150+</div>
              <p className="text-gray-400">Proyectos Completados</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <p className="text-gray-400">Clientes Satisfechos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">5+</div>
              <p className="text-gray-400">Años de Experiencia</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <p className="text-gray-400">Soporte Técnico</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-black mb-4">¿Quieres Ser Nuestro Próximo Cliente?</h2>
            <p className="text-black/80 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Únete a las empresas que ya confían en SPM
              INTEGRAL para sus proyectos digitales.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-black text-yellow-400 font-bold rounded-lg hover:bg-gray-900 transition-all duration-300"
            >
              Comenzar Proyecto
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
