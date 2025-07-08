"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from "lucide-react"
import SpotlightCard from "@/components/ui/SpotLightCard"
import ShinyText from "@/components/ui/ShinyText"
import StarBorder from "@/components/ui/StarBorder"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Contact() {
  const { t, language } = useLanguage()
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

  const services =
    language === "es"
      ? [
          "Desarrollo Web",
          "Aplicaciones Móviles",
          "Servicios Cloud",
          "UX/UI Design",
          "Base de Datos",
          "Consultoría IT",
          "Servicios Backend",
          "Diseño Gráfico",
        ]
      : [
          "Web Development",
          "Mobile Applications",
          "Cloud Services",
          "UX/UI Design",
          "Database",
          "IT Consulting",
          "Backend Services",
          "Graphic Design",
        ]

  return (
    <div className="pt-20 sm:pt-24 pb-8 sm:pb-16 bg-gradient-to-r from-[#2d3559] to-[#393b49]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center m-4 sm:m-8 lg:m-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2d3559] mb-4 sm:mb-6">
            <span className="text-[#bccceb]">SPM</span>{" "}
            <span className="text-[#a693e5]">{t("contact.title").split(" ")[1]}</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-[#bccceb] max-w-3xl mx-auto">{t("contact.description")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16">
          {/* Contact Form */}
          <SpotlightCard className="bg-[#2d3559] border-[#bccceb]" spotlightColor="rgba(45, 53, 89, 0.3)">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#bccceb] mb-4 sm:mb-6">
              {t("contact.sendMessage").split(" ").slice(0, -2).join(" ")}{" "}
              <span className="text-[#a693e5]">{t("contact.sendMessage").split(" ").slice(-1)[0]}</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#bccceb] mb-2">
                    {t("contact.fullName")} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#d8d6f2] border border-gray-700 rounded-lg text-[#2d3559] focus:border-[#bccceb] focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder={language === "es" ? "Tu nombre completo" : "Your full name"}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#bccceb] mb-2">
                    {t("contact.email")} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#d8d6f2] border border-gray-700 rounded-lg text-[#2d3559] focus:border-[#bccceb] focus:outline-none transition-colors text-sm sm:text-base"
                    placeholder={language === "es" ? "tu@email.com" : "your@email.com"}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-[#bccceb] mb-2">
                  {t("contact.company")}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#d8d6f2] border border-gray-700 rounded-lg text-[#2d3559] focus:border-[#bccceb] focus:outline-none transition-colors text-sm sm:text-base"
                  placeholder={language === "es" ? "Nombre de tu empresa" : "Your company name"}
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-[#bccceb] mb-2">
                  {t("contact.serviceInterest")}
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#d8d6f2] border border-gray-700 rounded-lg text-[#2d3559] focus:border-[#bccceb] focus:outline-none transition-colors text-sm sm:text-base"
                >
                  <option value="">{t("contact.selectService")}</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#bccceb] mb-2">
                  {t("contact.message")} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-[#d8d6f2] border border-gray-700 rounded-lg text-[#2d3559] focus:border-[#bccceb] focus:outline-none transition-colors resize-none text-sm sm:text-base"
                  placeholder={t("contact.messagePlaceholder")}
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#2d3559] text-[#bccceb] font-bold rounded-lg transition-all duration-300 transform hover:scale-105 border-[#bccceb] text-sm sm:text-base"
              >
                <Send className="mr-2" size={20} />
                {t("contact.sendButton")}
              </button>
            </form>
          </SpotlightCard>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Details */}
            <SpotlightCard className="bg-[#2d3559] border-[#bccceb]" spotlightColor="rgba(45, 53, 89, 0.3)">
              <h3 className="text-xl sm:text-2xl font-bold text-[#2d3559] mb-4 sm:mb-6">
                {t("contact.contactInfo").split(" ")[0]} de{" "}
                <span className="text-[#a693e5]">{t("contact.contactInfo").split(" ")[2]}</span>
              </h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#a693e5] mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-[#2d3559]">Email</h4>
                    <p className="text-[#d8d6f2] text-sm sm:text-base break-all">spm.integral.colombia@gmail.com</p>
                    <p className="text-[#d8d6f2] text-sm sm:text-base break-all">fmrigueros91@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#a693e5] mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-[#2d3559]">{t("contact.phone")}</h4>
                    <p className="text-[#d8d6f2] text-sm sm:text-base">+57 (350) 308-7606</p>
                    <p className="text-[#d8d6f2] text-sm sm:text-base">+57 (350) 308-7719</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#a693e5] mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-[#2d3559]">{t("contact.location")}</h4>
                    <p className="text-[#d8d6f2] text-sm sm:text-base">Cra 34a # 37 191</p>
                    <p className="text-[#d8d6f2] text-sm sm:text-base">Soacha, Colombia</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#a693e5] mr-3 sm:mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-[#2d3559]">{t("contact.schedule")}</h4>
                    <p className="text-[#d8d6f2] text-sm sm:text-base">{t("contact.scheduleTime")}</p>
                    <p className="text-[#d8d6f2] text-sm sm:text-base">{t("contact.scheduleWeekend")}</p>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* FAQ */}
            <SpotlightCard className="bg-[#2d3559] border-[#bccceb]" spotlightColor="rgba(45, 53, 89, 0.3)">
              <h3 className="text-xl sm:text-2xl font-bold text-[#bccceb] mb-4 sm:mb-6">
                <MessageSquare className="inline-block w-5 h-5 sm:w-6 sm:h-6 text-[#a693e5] mr-2" />
                {t("contact.faq").split(" ")[0]}{" "}
                <span className="text-[#a693e5]">{t("contact.faq").split(" ")[1]}</span>
              </h3>

              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-[#bccceb] mb-2">{t("contact.faq1Q")}</h4>
                  <p className="text-[#d8d6f2] text-sm sm:text-base">{t("contact.faq1A")}</p>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-[#bccceb] mb-2">{t("contact.faq2Q")}</h4>
                  <p className="text-[#d8d6f2] text-sm sm:text-base">{t("contact.faq2A")}</p>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-[#bccceb] mb-2">{t("contact.faq3Q")}</h4>
                  <p className="text-[#d8d6f2] text-sm sm:text-base">{t("contact.faq3A")}</p>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-[#a693e5] to-yellow-500 rounded-lg p-4 sm:p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-3 sm:mb-4">
              <ShinyText text={t("contact.speakDirectly")} disabled={false} speed={3} className="text-[#5eabd6]" />
            </h2>
            <p className="text-[#bccceb] mb-4 sm:mb-6 text-sm sm:text-base max-w-2xl mx-auto">
              {t("contact.speakDirectlyDesc")}
            </p>
            <StarBorder as="button" className="custom-class" color="#bccceb" speed="2s" thickness={0.1}>
              <a
                href="https://wa.me/573503087606"
                className="inline-flex items-center px-3 sm:px-4 py-2 sm:py-3 text-[#bccceb] font-bold rounded-lg text-sm sm:text-base"
              >
                <Phone className="mr-2" size={20} />
                {t("contact.callNow")}
              </a>
            </StarBorder>
          </div>
        </div>
      </div>
    </div>
  )
}
