"use client"

import Hero from "@/components/Hero"
import { ArrowRight, Star, Users, Zap, Shield } from "lucide-react"
import Link from "next/link"
import SpotlightCard from "@/components/ui/SpotLightCard"
import CountUp from "@/components/ui/CountUP"
import ShinyText from "@/components/ui/ShinyText"
import StarBorder from "@/components/ui/StarBorder"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Home() {
  const { t } = useLanguage()

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Desarrollo Rápido",
      description: "Entregamos soluciones en tiempo récord sin comprometer la calidad.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Seguridad Garantizada",
      description: "Implementamos las mejores prácticas de seguridad en todos nuestros proyectos.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Soporte 24/7",
      description: "Nuestro equipo está disponible para ayudarte cuando lo necesites.",
    },
  ]

  const testimonials = [
    {
      name: "María González",
      company: "TechStart",
      content: "SPM INTEGRAL transformó completamente nuestra presencia digital. Excelente trabajo.",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      company: "InnovaCorp",
      content: "Profesionales excepcionales. Cumplieron todos los plazos y superaron nuestras expectativas.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      company: "DigitalFlow",
      content: "La calidad de su trabajo es impresionante. Definitivamente los recomendaría.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#2d3559] to-[#393b49]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              <span className="text-[#bccceb]">¿Por qué elegir</span>{" "}
              <span className="text-[#a693e5]">SPM INTEGRAL?</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#bccceb] max-w-3xl mx-auto">
              Somos más que desarrolladores, somos tus socios estratégicos en la transformación digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <SpotlightCard key={index} className="text-center" spotlightColor="rgba(45, 53, 89, 0.7)">
                <div className="text-[#a693e5] mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#bccceb] mb-3">{feature.title}</h3>
                <p className="text-[#bccceb]">{feature.description}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              <span className="text-[#bccceb]">Nuestros</span> <span className="text-[#a693e5]">Logros</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <span className="text-[#6c4fce] font-bold text-3xl sm:text-4xl lg:text-5xl">+</span>
                <CountUp
                  from={0}
                  to={50}
                  separator=","
                  direction="up"
                  duration={1}
                  className="text-[#6c4fce] font-bold text-3xl sm:text-4xl lg:text-5xl"
                />
              </div>
              <p className="text-[#bccceb] font-medium">Proyectos Completados</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <span className="text-[#6c4fce] font-bold text-3xl sm:text-4xl lg:text-5xl">+</span>
                <CountUp
                  from={0}
                  to={100}
                  separator=","
                  direction="up"
                  duration={1}
                  className="text-[#6c4fce] font-bold text-3xl sm:text-4xl lg:text-5xl"
                />
              </div>
              <p className="text-[#bccceb] font-medium">Clientes Satisfechos</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <span className="text-[#6c4fce] font-bold text-3xl sm:text-4xl lg:text-5xl">+</span>
                <CountUp
                  from={0}
                  to={14}
                  separator=","
                  direction="up"
                  duration={1}
                  className="text-[#6c4fce] font-bold text-3xl sm:text-4xl lg:text-5xl"
                />
              </div>
              <p className="text-[#bccceb] font-medium">Años de Experiencia</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <CountUp
                  from={0}
                  to={24}
                  separator="/"
                  direction="up"
                  duration={1}
                  className="text-[#6c4fce] font-bold text-3xl sm:text-4xl lg:text-5xl"
                />
                <span className="text-[#6c4fce] font-bold text-3xl sm:text-4xl lg:text-5xl">/</span>
                <CountUp
                  from={0}
                  to={7}
                  separator="/"
                  direction="up"
                  duration={1}
                  className="text-[#6c4fce] font-bold text-3xl sm:text-4xl lg:text-5xl"
                />
              </div>
              <p className="text-[#bccceb] font-medium">Soporte Técnico</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-[#2d3559] to-[#393b49]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              <span className="text-[#bccceb]">Lo que dicen nuestros</span>{" "}
              <span className="text-[#a693e5]">clientes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <SpotlightCard key={index} spotlightColor="rgba(45, 53, 89, 0.7)">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-[#bccceb] mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-[#bccceb] font-semibold">{testimonial.name}</p>
                  <p className="text-[#6c4fce] text-sm">{testimonial.company}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#a693e5] to-yellow-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            <ShinyText
              text="¿Listo para transformar tu negocio?"
              disabled={false}
              speed={3}
              className="text-[#5eabd6]"
            />
          </h2>
          <p className="text-lg sm:text-xl text-[#bccceb] mb-6 sm:mb-8 max-w-2xl mx-auto">
            Únete a las empresas que ya confían en SPM INTEGRAL para llevar sus proyectos al siguiente nivel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <StarBorder as="button" className="custom-class" color="#bccceb" speed="2s" thickness={0.1}>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-[#bccceb] font-bold rounded-lg"
              >
                Comenzar Proyecto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </StarBorder>
            <StarBorder as="button" className="custom-class" color="#bccceb" speed="2s" thickness={0.1}>
              <Link
                href="/services"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-[#bccceb] font-bold rounded-lg"
              >
                Ver Servicios
              </Link>
            </StarBorder>
          </div>
        </div>
      </section>
    </div>
  )
}
