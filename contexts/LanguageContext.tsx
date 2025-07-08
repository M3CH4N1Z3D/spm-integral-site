"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  es: {
    // Header
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.about": "Nosotros",
    "nav.clients": "Clientes",
    "nav.contact": "Contacto",

    // Hero
    "hero.title": "Strategic Portfolio Management",
    "hero.subtitle":
      "Impulsamos tu visión con soluciones digitales estratégicas. En SPM INTEGRAL convertimos ideas en resultados reales.",
    "hero.viewServices": "Ver Servicios",
    "hero.contactNow": "Contactar Ahora",

    // About Page
    "about.title": "SPM Historia",
    "about.mission": "Misión",
    "about.vision": "Visión",
    "about.values": "Nuestros Valores",
    "about.objectives": "Objetivos Empresariales",
    "about.team": "Nuestro Equipo",
    "about.knowMore": "¿Quieres Conocer Más Sobre Nosotros?",
    "about.knowMoreDesc": "Contacta con nosotros y descubre cómo podemos trabajar juntos.",
    "about.contactNow": "Contactar Ahora",

    // Services Page
    "services.title": "SPM Servicios",
    "services.description":
      "En SPM INTEGRAL, transformamos ideas en soluciones digitales de alto impacto. Nuestro enfoque combina diseño, tecnología y estrategia para ayudarte a destacar en un entorno competitivo. Ya sea que necesites una presencia web sólida o una app móvil de alto rendimiento, tenemos la experiencia para hacerlo realidad.",
    "services.technologies": "Tecnologías:",
    "services.customService": "¿Necesitas un Servicio Personalizado?",
    "services.customServiceDesc":
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contacta con nosotros para discutir tus necesidades específicas.",
    "services.requestQuote": "Solicitar Cotización",

    // Clients Page
    "clients.title": "SPM Clientes",
    "clients.numbers": "Nuestros Números",
    "clients.projectsCompleted": "Proyectos Completados",
    "clients.satisfiedClients": "Clientes Satisfechos",
    "clients.yearsExperience": "Años de Experiencia",
    "clients.technicalSupport": "Soporte Técnico",
    "clients.trustedCompanies": "Empresas que Confían en Nosotros",
    "clients.testimonials": "Lo que Dicen Nuestros Clientes",
    "clients.nextClient": "¿Quieres Ser Nuestro Próximo Cliente?",
    "clients.nextClientDesc":
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Únete a las empresas que ya confían en SPM INTEGRAL para sus proyectos digitales.",
    "clients.startProject": "Comenzar un Proyecto",

    // Contact Page
    "contact.title": "SPM Contacto",
    "contact.description":
      "¿Tienes un proyecto en mente o necesitas una solución a medida? En SPM INTEGRAL estamos listos para escucharte. Completa el formulario o escríbenos directamente y descubre cómo podemos ayudarte a llevar tus ideas al siguiente nivel.",
    "contact.sendMessage": "Envíanos un Mensaje",
    "contact.fullName": "Nombre Completo",
    "contact.email": "Email",
    "contact.company": "Empresa",
    "contact.serviceInterest": "Servicio de Interés",
    "contact.selectService": "Selecciona un servicio",
    "contact.message": "Mensaje",
    "contact.messagePlaceholder": "Cuéntanos sobre tu proyecto...",
    "contact.sendButton": "Enviar Mensaje",
    "contact.contactInfo": "Información de Contacto",
    "contact.phone": "Teléfono",
    "contact.location": "Ubicación",
    "contact.schedule": "Horario",
    "contact.scheduleTime": "Lun - Vie: 24h",
    "contact.scheduleWeekend": "Sáb: 24h Dom: 24h",
    "contact.faq": "Preguntas Frecuentes",
    "contact.faq1Q": "¿Cuánto tiempo toma un proyecto?",
    "contact.faq1A":
      "El tiempo de desarrollo depende de la complejidad y alcance del proyecto. Algunos pueden completarse en pocas semanas, mientras que otros requieren una planificación más extensa. En SPM INTEGRAL te brindamos una estimación clara desde el inicio para que tengas total visibilidad del proceso.",
    "contact.faq2Q": "¿Ofrecen soporte post-lanzamiento?",
    "contact.faq2A":
      "Sí, en SPM INTEGRAL ofrecemos soporte y mantenimiento continuo una vez que el proyecto ha sido entregado. Nos aseguramos de que tu solución funcione correctamente, se mantenga actualizada y evolucione junto a tus necesidades.",
    "contact.faq3Q": "¿Trabajan con empresas internacionales?",
    "contact.faq3A":
      "Sí, en SPM INTEGRAL colaboramos con empresas de distintos países y sectores. Nuestra experiencia en entornos digitales nos permite ofrecer soluciones efectivas sin importar la ubicación geográfica, adaptándonos a diferentes culturas, idiomas y zonas horarias.",
    "contact.speakDirectly": "¿Prefieres Hablar Directamente?",
    "contact.speakDirectlyDesc":
      "¿Tienes preguntas o quieres iniciar tu proyecto en persona? Agenda una llamada gratuita con nuestro equipo y descubre cómo podemos ayudarte a llevar tu idea al siguiente nivel.",
    "contact.callNow": "Llamar Ahora",

    // Footer
    "footer.description":
      "En SPM INTEGRAL, impulsamos la transformación digital de empresas mediante soluciones tecnológicas a medida. Nuestro compromiso es brindar innovación, eficiencia y resultados reales en cada proyecto.",
    "footer.quickLinks": "Enlaces Rápidos",
    "footer.contact": "Contacto",
    "footer.rights": "Todos los derechos reservados.",
  },
  en: {
    // Header
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.clients": "Clients",
    "nav.contact": "Contact",

    // Hero
    "hero.title": "Strategic Portfolio Management",
    "hero.subtitle":
      "We drive your vision with strategic digital solutions. At SPM INTEGRAL we turn ideas into real results.",
    "hero.viewServices": "View Services",
    "hero.contactNow": "Contact Now",

    // About Page
    "about.title": "SPM History",
    "about.mission": "Mission",
    "about.vision": "Vision",
    "about.values": "Our Values",
    "about.objectives": "Business Objectives",
    "about.team": "Our Team",
    "about.knowMore": "Want to Know More About Us?",
    "about.knowMoreDesc": "Contact us and discover how we can work together.",
    "about.contactNow": "Contact Now",

    // Services Page
    "services.title": "SPM Services",
    "services.description":
      "At SPM INTEGRAL, we transform ideas into high-impact digital solutions. Our approach combines design, technology and strategy to help you stand out in a competitive environment. Whether you need a solid web presence or a high-performance mobile app, we have the experience to make it happen.",
    "services.technologies": "Technologies:",
    "services.customService": "Need a Custom Service?",
    "services.customServiceDesc":
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contact us to discuss your specific needs.",
    "services.requestQuote": "Request Quote",

    // Clients Page
    "clients.title": "SPM Clients",
    "clients.numbers": "Our Numbers",
    "clients.projectsCompleted": "Projects Completed",
    "clients.satisfiedClients": "Satisfied Clients",
    "clients.yearsExperience": "Years of Experience",
    "clients.technicalSupport": "Technical Support",
    "clients.trustedCompanies": "Companies That Trust Us",
    "clients.testimonials": "What Our Clients Say",
    "clients.nextClient": "Want to Be Our Next Client?",
    "clients.nextClientDesc":
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Join the companies that already trust SPM INTEGRAL for their digital projects.",
    "clients.startProject": "Start a Project",

    // Contact Page
    "contact.title": "SPM Contact",
    "contact.description":
      "Do you have a project in mind or need a custom solution? At SPM INTEGRAL we are ready to listen to you. Fill out the form or write to us directly and discover how we can help you take your ideas to the next level.",
    "contact.sendMessage": "Send us a Message",
    "contact.fullName": "Full Name",
    "contact.email": "Email",
    "contact.company": "Company",
    "contact.serviceInterest": "Service of Interest",
    "contact.selectService": "Select a service",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Tell us about your project...",
    "contact.sendButton": "Send Message",
    "contact.contactInfo": "Contact Information",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.schedule": "Schedule",
    "contact.scheduleTime": "Mon - Fri: 24h",
    "contact.scheduleWeekend": "Sat: 24h Sun: 24h",
    "contact.faq": "Frequently Asked Questions",
    "contact.faq1Q": "How long does a project take?",
    "contact.faq1A":
      "Development time depends on the complexity and scope of the project. Some can be completed in a few weeks, while others require more extensive planning. At SPM INTEGRAL we provide you with a clear estimate from the beginning so you have full visibility of the process.",
    "contact.faq2Q": "Do you offer post-launch support?",
    "contact.faq2A":
      "Yes, at SPM INTEGRAL we offer continuous support and maintenance once the project has been delivered. We ensure that your solution works correctly, stays updated and evolves with your needs.",
    "contact.faq3Q": "Do you work with international companies?",
    "contact.faq3A":
      "Yes, at SPM INTEGRAL we collaborate with companies from different countries and sectors. Our experience in digital environments allows us to offer effective solutions regardless of geographic location, adapting to different cultures, languages and time zones.",
    "contact.speakDirectly": "Prefer to Speak Directly?",
    "contact.speakDirectlyDesc":
      "Have questions or want to start your project in person? Schedule a free call with our team and discover how we can help you take your idea to the next level.",
    "contact.callNow": "Call Now",

    // Footer
    "footer.description":
      "At SPM INTEGRAL, we drive the digital transformation of companies through custom technological solutions. Our commitment is to provide innovation, efficiency and real results in every project.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["es"]] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
