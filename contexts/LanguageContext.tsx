"use client"

import { createContext } from "react"

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

    // About Values
    "values.excellence.title": "Excelencia",
    "values.excellence.description":
      "Nos esforzamos por superar las expectativas en cada proyecto, entregando soluciones de alta calidad y rendimiento.",
    "values.collaboration.title": "Colaboración",
    "values.collaboration.description":
      "Creemos en el trabajo en equipo, tanto con nuestros clientes como dentro de nuestro equipo, para lograr resultados sostenibles.",
    "values.innovation.title": "Innovación",
    "values.innovation.description":
      "Adoptamos nuevas tecnologías y enfoques creativos para resolver desafíos complejos con soluciones modernas y efectivas.",
    "values.creativity.title": "Creatividad",
    "values.creativity.description":
      "Transformamos ideas en experiencias digitales únicas, combinando diseño, funcionalidad y visión estratégica.",

    // About Objectives
    "objectives.1":
      "Desarrollar soluciones tecnológicas innovadoras que impulsen la eficiencia en la industria y la vida cotidiana.",
    "objectives.2":
      "Brindar servicios de software accesibles, ágiles y personalizados para empresas de todos los tamaños.",
    "objectives.3": "Consolidar una cultura de mejora continua, calidad y compromiso con nuestros clientes.",
    "objectives.4":
      "Expandir nuestra presencia en Colombia y Latinoamérica como referentes en desarrollo web, móvil y sistemas de gestión.",
    "objectives.5":
      "Fomentar el crecimiento profesional de nuestro equipo mediante la capacitación constante y el trabajo colaborativo.",

    // About History
    "history.1":
      "SPM nació en 2021 como una empresa enfocada en servicios de ingeniería industrial, ofreciendo soluciones especializadas para maquinaria CNC. Con el tiempo, evolucionamos hacia una compañía integral de desarrollo de software, abarcando plataformas web, móviles y sistemas integrados de gestión documental orientados a la gestión de calidad. Esta transformación refleja nuestro compromiso con la innovación y la adaptación a las necesidades tecnológicas del entorno industrial y empresarial. Nuestro equipo de expertos seguirá innovando y adaptándose para ofrecer soluciones que impulsan el éxito de nuestros clientes.",
    "history.2":
      "En SPM, creemos en la excelencia, la innovación y el compromiso con nuestros clientes. Desde nuestros inicios, hemos trabajado incansablemente para ofrecer soluciones de ingeniería industrial y software de alta calidad, adaptadas a las necesidades específicas de cada proyecto. Nuestro equipo de expertos está siempre listo para enfrentar nuevos desafíos y ofrecer soluciones innovadoras que impulsan el éxito de nuestros clientes.",

    // About Mission & Vision
    "mission.text":
      "Nuestra misión es ofrecer soluciones tecnológicas que impacten positivamente tanto en la industria como en la vida cotidiana. Nos enfocamos en desarrollar herramientas ágiles, accesibles y altamente profesionales, que respondan a los desafíos actuales con eficiencia, calidad y visión a largo plazo. Nuestro compromiso es no solo resolver problemas, sino también crear oportunidades y mejorar la calidad de vida de nuestros usuarios.",
    "vision.text":
      "En SPM, nos proyectamos como una empresa líder en innovación tecnológica. Para 2030, aspiramos a consolidarnos como referentes en el desarrollo de software en Colombia y Latinoamérica, siendo la opción preferida por industrias, empresas y usuarios que confían en nuestras aplicaciones para transformar su día a día.",
    "team.text":
      "En SPM INTEGRAL, contamos con un equipo multidisciplinario de profesionales apasionados por la tecnología, la ingeniería y la innovación. Nuestra experiencia abarca desde el desarrollo de software web y móvil hasta la implementación de soluciones industriales y sistemas integrados de gestión documental.",

    // Services
    "services.title": "SPM Servicios",
    "services.description":
      "En SPM INTEGRAL, transformamos ideas en soluciones digitales de alto impacto. Nuestro enfoque combina diseño, tecnología y estrategia para ayudarte a destacar en un entorno competitivo. Ya sea que necesites una presencia web sólida o una app móvil de alto rendimiento, tenemos la experiencia para hacerlo realidad.",
    "services.technologies": "Tecnologías:",
    "services.customService": "¿Necesitas un Servicio Personalizado?",
    "services.customServiceDesc":
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Contacta con nosotros para discutir tus necesidades específicas.",
    "services.requestQuote": "Solicitar Cotización",

    // Services Items
    "service.webDev.title": "Desarrollo Web",
    "service.webDev.description": "Sitios rápidos, escalables y modernos con tecnologías de última generación.",
    "service.mobileApps.title": "Apps Móviles",
    "service.mobileApps.description":
      "Aplicaciones nativas e híbridas con experiencia fluida en Android, iOS y multiplataforma.",
    "service.cloudServices.title": "Cloud Services",
    "service.cloudServices.description": "Infraestructura en la nube segura y escalable con AWS, Google Cloud y Azure.",
    "service.uxui.title": "UX/UI Design",
    "service.uxui.description":
      "Interfaces intuitivas y atractivas centradas en la experiencia del usuario y la coherencia visual.",
    "service.database.title": "Base de Datos",
    "service.database.description":
      "Modelado, gestión y optimización de bases de datos relacionales y NoSQL para alto rendimiento.",
    "service.consulting.title": "Consultoría",
    "service.consulting.description":
      "Diagnóstico, arquitectura y acompañamiento técnico para escalar tus proyectos con confianza.",
    "service.backend.title": "Servicios Backend",
    "service.backend.description":
      "Desarrollo de APIs robustas, microservicios y lógica de negocio eficiente para tus aplicaciones.",
    "service.graphicDesign.title": "Diseño Gráfico",
    "service.graphicDesign.description":
      "Identidad visual sólida, branding y piezas creativas que comunican con impacto.",

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
    "clients.description":
      "nos enorgullece colaborar con empresas que comparten nuestra visión de innovación y excelencia. Desde emprendimientos emergentes hasta líderes consolidados en la industria, nuestros clientes confían en nosotros para desarrollar soluciones tecnológicas que impulsan su crecimiento y transformación digital.",

    // Testimonials
    "testimonial.1.name": "Juan Pérez",
    "testimonial.1.company": "Tech Solutions Inc.",
    "testimonial.1.text":
      "Gracias a SPM INTEGRAL, logramos una transformación digital completa. Su enfoque estratégico y su dominio técnico marcaron una gran diferencia en nuestros procesos.",
    "testimonial.2.name": "María González",
    "testimonial.2.company": "Digital Marketing Pro",
    "testimonial.2.text":
      "El equipo de SPM INTEGRAL no solo cumplió, sino que superó nuestras expectativas. Su compromiso, creatividad y atención al detalle fueron clave para el éxito del proyecto.",
    "testimonial.3.name": "Carlos Rodríguez",
    "testimonial.3.company": "StartUp Innovation",
    "testimonial.3.text":
      "Trabajar con SPM INTEGRAL fue una experiencia excepcional. Su profesionalismo, calidad técnica y capacidad de adaptación nos dieron la confianza para escalar rápidamente.",

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

    // About Values
    "values.excellence.title": "Excellence",
    "values.excellence.description":
      "We strive to exceed expectations in every project, delivering high-quality and high-performance solutions.",
    "values.collaboration.title": "Collaboration",
    "values.collaboration.description":
      "We believe in teamwork, both with our clients and within our team, to achieve sustainable results.",
    "values.innovation.title": "Innovation",
    "values.innovation.description":
      "We adopt new technologies and creative approaches to solve complex challenges with modern and effective solutions.",
    "values.creativity.title": "Creativity",
    "values.creativity.description":
      "We transform ideas into unique digital experiences, combining design, functionality and strategic vision.",

    // About Objectives
    "objectives.1": "Develop innovative technological solutions that drive efficiency in industry and daily life.",
    "objectives.2": "Provide accessible, agile and personalized software services for companies of all sizes.",
    "objectives.3": "Consolidate a culture of continuous improvement, quality and commitment to our clients.",
    "objectives.4":
      "Expand our presence in Colombia and Latin America as leaders in web, mobile and management systems development.",
    "objectives.5": "Foster the professional growth of our team through constant training and collaborative work.",

    // About History
    "history.1":
      "SPM was born in 2021 as a company focused on industrial engineering services, offering specialized solutions for CNC machinery. Over time, we evolved into a comprehensive software development company, covering web platforms, mobile and integrated document management systems oriented to quality management. This transformation reflects our commitment to innovation and adaptation to the technological needs of the industrial and business environment. Our team of experts will continue to innovate and adapt to offer solutions that drive our clients' success.",
    "history.2":
      \"At SPM, we believe in excellence, innovation and commitment to our clients. Since our beginnings, we have worked tirelessly to offer high-quality industrial engineering and software solutions, adapted to the specific needs of each project. Our team of experts is always ready to face new
