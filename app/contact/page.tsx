"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const services = [
    "Desarrollo Web",
    "Aplicaciones Móviles",
    "Servicios Cloud",
    "UX/UI Design",
    "Base de Datos",
    "Consultoría IT",
    "Servicios Backend",
    "Diseño Gráfico",
  ]

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            <span className="text-yellow-400">Contacto</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Estamos aquí para ayudarte a transformar tus ideas
            en realidad digital.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-6">
              Envíanos un <span className="text-yellow-400">Mensaje</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Servicio de Interés
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors"
                >
                  <option value="">Selecciona un servicio</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black font-bold py-4 px-6 rounded-lg hover:bg-yellow-300 transition-all duration-300 flex items-center justify-center"
              >
                <Send className="mr-2" size={20} />
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-black border border-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Información de <span className="text-yellow-400">Contacto</span>
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-yellow-400 mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Email</h4>
                    <p className="text-gray-400">info@spmintegral.com</p>
                    <p className="text-gray-400">contacto@spmintegral.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-yellow-400 mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Teléfono</h4>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-gray-400">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-yellow-400 mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Ubicación</h4>
                    <p className="text-gray-400">123 Tech Street</p>
                    <p className="text-gray-400">Ciudad, País 12345</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-yellow-400 mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Horario</h4>
                    <p className="text-gray-400">Lun - Vie: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-400">Sáb: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                <MessageSquare className="inline-block w-6 h-6 text-yellow-400 mr-2" />
                Preguntas <span className="text-yellow-400">Frecuentes</span>
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">¿Cuánto tiempo toma un proyecto?</h4>
                  <p className="text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. El tiempo varía según la complejidad del
                    proyecto.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">¿Ofrecen soporte post-lanzamiento?</h4>
                  <p className="text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sí, ofrecemos soporte y mantenimiento
                    continuo.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">¿Trabajan con empresas internacionales?</h4>
                  <p className="text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Trabajamos con clientes de todo el mundo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-black mb-4">¿Prefieres Hablar Directamente?</h2>
            <p className="text-black/80 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Agenda una llamada gratuita con nuestro equipo.
            </p>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center px-8 py-4 bg-black text-yellow-400 font-bold rounded-lg hover:bg-gray-900 transition-all duration-300"
            >
              <Phone className="mr-2" size={20} />
              Llamar Ahora
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
