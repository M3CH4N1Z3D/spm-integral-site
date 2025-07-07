"use client";

import type React from "react";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotLightCard";
import ShinyText from "@/components/ui/ShinyText";
import StarBorder from "@/components/ui/StarBorder";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const services = [
    "Desarrollo Web",
    "Aplicaciones Móviles",
    "Servicios Cloud",
    "UX/UI Design",
    "Base de Datos",
    "Consultoría IT",
    "Servicios Backend",
    "Diseño Gráfico",
  ];

  return (
    <div className="pt-24 pb-16 bg-gradient-to-r from-[#2d3559] to-[#393b49]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center m-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[#2d3559] mb-6">
            <span className="text-[#bccceb]">SPM</span>{" "}
            <span className="text-[#a693e5]">Contacto</span>
          </h1>
          <p className="text-xl text-[#bccceb] max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente o necesitas una solución a medida? En{" "}
            <strong>SPM INTEGRAL</strong> estamos listos para escucharte.
            Completa el formulario o escríbenos directamente y descubre cómo
            podemos ayudarte a llevar tus ideas al siguiente nivel.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <SpotlightCard
            className="bg-[#2d3559] border-[#bccceb]"
            spotlightColor="rgba(45, 53, 89, 0.3)"
          >
            <h2 className="text-3xl font-bold text-[#bccceb] mb-6">
              Envíanos un <span className="text-[#a693e5]">Mensaje</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#bccceb] mb-2"
                  >
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#d8d6f2] border border-gray-700 rounded-lg text-[#2d3559] focus:border-[#bccceb] focus:outline-none transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#bccceb] mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#d8d6f2] border border-gray-700 rounded-lg text-[#2d3559] focus:border-[#bccceb] focus:outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-[#bccceb] mb-2"
                >
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#d8d6f2] border border-gray-700 rounded-lg text-[#2d3559] focus:border-[#bccceb] focus:outline-none transition-colors"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-[#bccceb] mb-2"
                >
                  Servicio de Interés
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#d8d6f2] border border-gray-700 rounded-lg text-[#2d3559] focus:border-[#bccceb] focus:outline-none transition-colors"
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
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#bccceb] mb-2"
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#d8d6f2] border border-gray-700 rounded-lg text-[#2d3559] focus:border-[#bccceb] focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center px-8 py-4 bg-[#2d3559] text-[#bccceb] font-bold rounded-lg transition-all duration-300 transform hover:scale-105 border-[#bccceb]"
              >
                <Send className="mr-2" size={20} />
                Enviar Mensaje
              </button>
            </form>
          </SpotlightCard>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <SpotlightCard
              className="bg-[#2d3559] border-[#bccceb]"
              spotlightColor="rgba(45, 53, 89, 0.3)"
            >
              <h3 className="text-2xl font-bold text-[#2d3559] mb-6">
                Información de <span className="text-[#a693e5]">Contacto</span>
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-[#a693e5] mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-[#2d3559]">
                      Email
                    </h4>
                    <p className="text-[#d8d6f2]">
                      spm.integral.colombia@gmail.com
                    </p>
                    <p className="text-[#d8d6f2]">fmrigueros91@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-[#a693e5] mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-[#2d3559]">
                      Teléfono
                    </h4>
                    <p className="text-[#d8d6f2]">+57 (350) 308-7606</p>
                    <p className="text-[#d8d6f2]">+57 (350) 308-7719</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-[#a693e5] mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-[#2d3559]">
                      Ubicación
                    </h4>
                    <p className="text-[#d8d6f2]">Cra 34a # 37 191</p>
                    <p className="text-[#d8d6f2]">Soacha, Colombia</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-[#a693e5] mr-4 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-[#2d3559]">
                      Horario
                    </h4>
                    <p className="text-[#d8d6f2]">Lun - Vie: 24h</p>
                    <p className="text-[#d8d6f2]">Sáb: 24h Dom: 24h</p>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* FAQ */}
            <SpotlightCard
              className="bg-[#2d3559] border-[#bccceb]"
              spotlightColor="rgba(45, 53, 89, 0.3)"
            >
              <h3 className="text-2xl font-bold text-[#bccceb] mb-6">
                <MessageSquare className="inline-block w-6 h-6 text-[#a693e5] mr-2" />
                Preguntas <span className="text-[#a693e5]">Frecuentes</span>
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-[#bccceb] mb-2">
                    ¿Cuánto tiempo toma un proyecto?
                  </h4>
                  <p className="text-[#d8d6f2]">
                    El tiempo de desarrollo depende de la complejidad y alcance
                    del proyecto. Algunos pueden completarse en pocas semanas,
                    mientras que otros requieren una planificación más extensa.
                    En SPM INTEGRAL te brindamos una estimación clara desde el
                    inicio para que tengas total visibilidad del proceso.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#bccceb] mb-2">
                    ¿Ofrecen soporte post-lanzamiento?
                  </h4>
                  <p className="text-[#d8d6f2]">
                    Sí, en <strong>SPM INTEGRAL</strong> ofrecemos soporte y
                    mantenimiento continuo una vez que el proyecto ha sido
                    entregado. Nos aseguramos de que tu solución funcione
                    correctamente, se mantenga actualizada y evolucione junto a
                    tus necesidades.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#bccceb] mb-2">
                    ¿Trabajan con empresas internacionales?
                  </h4>
                  <p className="text-[#d8d6f2]">
                    Sí, en <strong>SPM INTEGRAL</strong> colaboramos con
                    empresas de distintos países y sectores. Nuestra experiencia
                    en entornos digitales nos permite ofrecer soluciones
                    efectivas sin importar la ubicación geográfica, adaptándonos
                    a diferentes culturas, idiomas y zonas horarias.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#a693e5] to-yellow-500 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-black mb-4">
              <ShinyText
                text=" ¿Prefieres Hablar Directamente?"
                disabled={false}
                speed={3}
                className="text-[#5eabd6]"
              />
            </h2>
            <p className="text-[#bccceb] mb-6">
              ¿Tienes preguntas o quieres iniciar tu proyecto en persona? Agenda
              una llamada gratuita con nuestro equipo y descubre cómo podemos
              ayudarte a llevar tu idea al siguiente nivel.
            </p>
            <StarBorder
              as="button"
              className="custom-class"
              color="#bccceb"
              speed="2s"
              thickness={0.1}
            >
              <a
                href="https://wa.me/573503087606"
                className="inline-flex items-center px-2 py-1 text-[#bccceb] font-bold rounded-lg"
              >
                <Phone className="mr-2" size={20} />
                Llamar Ahora
              </a>
            </StarBorder>
          </div>
        </div>
      </div>
    </div>
  );
}
