"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

type Language = "es" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const translations = {
  es: {
    // Header
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.about": "Nosotros",
    "nav.clients": "Clientes",
    "nav.contact": "Contacto",
    "nav.successCases": "Casos de Éxito",
    "nav.blog": "Blog",

    // Hero
    "hero.title": "Transformamos tu negocio con tecnología a la medida: Desarrollo Web, Apps Móviles y Soluciones en la Nube",
    "hero.viewServices": "Descubre nuestros Proyectos",
    "hero.contactNow": "Solicita una Consultoría Gratuita",

    // About Page
    "about.title": "SPM Historia",
    "about.mission": "Misión",
    "about.vision": "Visión",
    "about.values": "Nuestros Valores",
    "about.objectives": "Objetivos Empresariales",
    "about.team": "Nuestro Equipo",
    "about.knowMore": "¿Quieres Conocer Más Sobre Nosotros?",
    "about.knowMoreDesc":
      "Contacta con nosotros y descubre cómo podemos trabajar juntos.",
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
    "objectives.3":
      "Consolidar una cultura de mejora continua, calidad y compromiso con nuestros clientes.",
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
      "Contacta con nosotros para discutir tus necesidades específicas.",
    "services.requestQuote": "Solicitar Cotización",

    // Services Items
    "service.webDev.title": "Desarrollo Web",
    "service.webDev.description":
      "Sitios rápidos, escalables y modernos con tecnologías de última generación.",
    "service.mobileApps.title": "Apps Móviles",
    "service.mobileApps.description":
      "Aplicaciones nativas e híbridas con experiencia fluida en Android, iOS y multiplataforma.",
    "service.cloudServices.title": "Cloud Services",
    "service.cloudServices.description":
      "Infraestructura en la nube segura y escalable con AWS, Google Cloud y Azure.",
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

    // Detailed Service Descriptions
    "service.webDev.detailedDescription": "Diseñamos y desarrollamos sitios web modernos, rápidos y escalables utilizando tecnologías de vanguardia como Next.js, React, Tailwind CSS y arquitecturas basadas en componentes. Nuestro enfoque combina diseño centrado en el usuario, rendimiento optimizado y código limpio para garantizar experiencias digitales fluidas y accesibles. Desde sitios corporativos institucionales hasta plataformas de comercio electrónico altamente personalizadas, creamos soluciones web robustas, seguras y preparadas para escalar junto a tu negocio. Cada proyecto es construido con buenas prácticas de desarrollo, integración continua y estándares web actualizados, asegurando calidad, mantenibilidad y resultados medibles.",
    "service.mobileApps.detailedDescription": "Desarrollamos aplicaciones móviles nativas e híbridas con experiencia fluida en Android, iOS y entornos multiplataforma. Utilizamos tecnologías como React Native, Flutter y herramientas nativas para crear apps rápidas, seguras y altamente intuitivas. Nuestro enfoque incluye diseño centrado en el usuario, integración con APIs, pruebas automatizadas y despliegue en tiendas oficiales, garantizando rendimiento, escalabilidad y una experiencia consistente en todos los dispositivos.",
    "service.cloudServices.detailedDescription": "Implementamos infraestructuras en la nube seguras, escalables y eficientes utilizando proveedores como AWS, Google Cloud y Microsoft Azure. Diseñamos arquitecturas distribuidas, automatizamos despliegues con pipelines CI/CD y aplicamos políticas de seguridad avanzadas. Optimizamos el uso de recursos, reducimos costos operativos y garantizamos alta disponibilidad, resiliencia y rendimiento para tus servicios digitales.",
    "service.uxui.detailedDescription": "Diseñamos interfaces intuitivas y atractivas que priorizan la experiencia del usuario. Nuestro proceso incluye investigación de usuarios, arquitectura de información, wireframes, prototipado interactivo y pruebas de usabilidad. Creamos design systems consistentes, accesibles y escalables que refuerzan tu identidad visual, mejoran la navegación y garantizan una experiencia coherente en todos los dispositivos.",
    "service.database.detailedDescription": "Diseñamos, implementamos y optimizamos bases de datos relacionales y NoSQL para garantizar el máximo rendimiento, disponibilidad y consistencia de tus aplicaciones. Nos especializamos en modelado de datos eficiente, normalización, optimización de consultas, replicación, particionamiento, escalabilidad horizontal y estrategias de respaldo y recuperación ante desastres. Adaptamos cada solución a las necesidades específicas de tu sistema, asegurando integridad y rendimiento sostenido.",
    "service.consulting.detailedDescription": "Ofrecemos consultoría técnica especializada para ayudarte a tomar decisiones estratégicas en tus proyectos digitales. Realizamos auditorías de código, análisis de arquitectura, evaluación de rendimiento y seguridad, y acompañamos procesos de migración, modernización tecnológica y adopción de nuevas herramientas. Nuestro enfoque se basa en las mejores prácticas de ingeniería, alineadas con tus objetivos de negocio y necesidades operativas.",
    "service.backend.detailedDescription": "Desarrollamos APIs robustas, microservicios y lógica de negocio eficiente que potencian tus aplicaciones. Utilizamos tecnologías como Node.js, Express, NestJS y bases de datos escalables para construir servicios backend seguros, mantenibles y de alto rendimiento. Nuestras soluciones están diseñadas para integrarse fácilmente con sistemas externos, escalar horizontalmente y adaptarse a arquitecturas modernas basadas en eventos o contenedores.",
    "service.graphicDesign.detailedDescription": "Creamos identidades visuales sólidas y piezas gráficas impactantes que comunican efectivamente tu mensaje. Desde branding completo, logotipos y manuales de marca hasta materiales de marketing digital, banners y contenido para redes sociales, desarrollamos soluciones creativas que fortalecen tu presencia visual. Nuestro enfoque combina estrategia, estética y coherencia para transmitir los valores de tu marca de forma memorable y profesional.",

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
      "Únete a las empresas que ya confían en SPM INTEGRAL para sus proyectos digitales.",
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
    "testimonial.4.name": "Ana Martínez",
    "testimonial.4.company": "InnovaCorp",
    "testimonial.4.text":
      "El equipo de SPM INTEGRAL es increíblemente talentoso y dedicado. Nos ayudaron a lanzar nuestro producto en tiempo récord y con una calidad excepcional.",

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
    "contact.sendButton": "Enviar mi Solicitud",
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
    "nav.successCases": "Success Cases",
    "nav.blog": "Blog",

    // Hero
    "hero.title": "We transform your business with custom technology: Web Development, Mobile Apps, and Cloud Solutions",
    "hero.viewServices": "Discover our Projects",
    "hero.contactNow": "Request a Free Consultation",

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
    "objectives.1":
      "Develop innovative technological solutions that drive efficiency in industry and daily life.",
    "objectives.2":
      "Provide accessible, agile and personalized software services for companies of all sizes.",
    "objectives.3":
      "Consolidate a culture of continuous improvement, quality and commitment to our clients.",
    "objectives.4":
      "Expand our presence in Colombia and Latin America as leaders in web, mobile and management systems development.",
    "objectives.5":
      "Foster the professional growth of our team through constant training and collaborative work.",

    // About History
    "history.1":
      "SPM was born in 2021 as a company focused on industrial engineering services, offering specialized solutions for CNC machinery. Over time, we evolved into a comprehensive software development company, covering web platforms, mobile and integrated document management systems oriented to quality management. This transformation reflects our commitment to innovation and adaptation to the technological needs of the industrial and business environment. Our team of experts will continue to innovate and adapt to offer solutions that drive our clients' success.",
    "history.2":
      "At SPM, we believe in excellence, innovation and commitment to our clients. Since our beginnings, we have worked tirelessly to offer high-quality industrial engineering and software solutions, adapted to the specific needs of each project. Our team of experts is always ready to face new challenges and offer innovative solutions that drive our clients' success.",

    // About Mission & Vision
    "mission.text":
      "Our mission is to offer technological solutions that positively impact both industry and daily life. We focus on developing agile, accessible and highly professional tools that respond to current challenges with efficiency, quality and long-term vision. Our commitment is not only to solve problems, but also to create opportunities and improve the quality of life of our users.",
    "vision.text":
      "At SPM, we project ourselves as a leading company in technological innovation. By 2030, we aspire to consolidate ourselves as leaders in software development in Colombia and Latin America, being the preferred choice for industries, companies and users who trust our applications to transform their daily lives.",
    "team.text":
      "At SPM INTEGRAL, we have a multidisciplinary team of professionals passionate about technology, engineering and innovation. Our experience ranges from web and mobile software development to the implementation of industrial solutions and integrated document management systems.",

    // Services
    "services.title": "SPM Services",
    "services.description":
      "At SPM INTEGRAL, we transform ideas into high-impact digital solutions. Our approach combines design, technology and strategy to help you stand out in a competitive environment. Whether you need a solid web presence or a high-performance mobile app, we have the experience to make it happen.",
    "services.technologies": "Technologies:",
    "services.customService": "Need a Custom Service?",
    "services.customServiceDesc": "Contact us to discuss your specific needs.",
    "services.requestQuote": "Request Quote",

    // Services Items
    "service.webDev.title": "Web Development",
    "service.webDev.description":
      "Fast, scalable and modern sites with cutting-edge technologies.",
    "service.mobileApps.title": "Mobile Apps",
    "service.mobileApps.description":
      "Native and hybrid applications with smooth experience on Android, iOS and cross-platform.",
    "service.cloudServices.title": "Cloud Services",
    "service.cloudServices.description":
      "Secure and scalable cloud infrastructure with AWS, Google Cloud and Azure.",
    "service.uxui.title": "UX/UI Design",
    "service.uxui.description":
      "Intuitive and attractive interfaces focused on user experience and visual consistency.",
    "service.database.title": "Database",
    "service.database.description":
      "Modeling, management and optimization of relational and NoSQL databases for high performance.",
    "service.consulting.title": "Consulting",
    "service.consulting.description":
      "Diagnosis, architecture and technical support to scale your projects with confidence.",
    "service.backend.title": "Backend Services",
    "service.backend.description":
      "Development of robust APIs, microservices and efficient business logic for your applications.",
    "service.graphicDesign.title": "Graphic Design",
    "service.graphicDesign.description":
      "Solid visual identity, branding and creative pieces that communicate with impact.",

    // Detailed Service Descriptions
    "service.webDev.detailedDescription": "We design and develop modern, fast, and scalable websites using cutting-edge technologies such as Next.js, React, Tailwind CSS, and component-based architectures. Our approach blends user-centered design, optimized performance, and clean code to deliver seamless and accessible digital experiences. From institutional corporate sites to highly customized e-commerce platforms, we build robust, secure web solutions that are ready to scale with your business. Every project is crafted with best development practices, continuous integration, and up-to-date web standards to ensure quality, maintainability, and measurable results.",
    "service.mobileApps.detailedDescription": "We develop native and hybrid mobile applications that deliver a smooth experience across Android, iOS, and cross-platform environments. Using technologies like React Native, Flutter, and native SDKs, we build fast, secure, and highly intuitive apps. Our approach includes user-centered design, API integration, automated testing, and deployment to official stores—ensuring performance, scalability, and a consistent experience across all devices.",
    "service.cloudServices.detailedDescription": "We implement secure, scalable, and efficient cloud infrastructures using providers such as AWS, Google Cloud, and Microsoft Azure. We design distributed architectures, automate deployments with CI/CD pipelines, and apply advanced security policies. We optimize resource usage, reduce operational costs, and ensure high availability, resilience, and performance for your digital services.",
    "service.uxui.detailedDescription": "We design intuitive and visually appealing interfaces that prioritize user experience. Our process includes user research, information architecture, wireframing, interactive prototyping, and usability testing. We create consistent, accessible, and scalable design systems that strengthen your visual identity, enhance navigation, and a cohesive experience across all devices.",
    "service.database.detailedDescription": "We design, implement, and optimize relational and NoSQL databases to ensure maximum performance, availability, and consistency for your applications. We specialize in efficient data modeling, normalization, query optimization, replication, partitioning, horizontal scalability, and disaster recovery strategies. Each solution is tailored to your system’s specific needs, ensuring data integrity and sustained performance.",
    "service.consulting.detailedDescription": "We offer specialized technical consulting to help you make strategic decisions in your digital projects. We conduct code audits, architecture analysis, performance and security evaluations, and support migration, technological modernization, and the adoption of new tools. Our approach is grounded in engineering best practices, aligned with your business goals and operational needs.",
    "service.backend.detailedDescription": "We develop robust APIs, microservices, and efficient business logic that power your applications. Using technologies like Node.js, Express, NestJS, and scalable databases, we build secure, maintainable, and high-performance backend services. Our solutions are designed to integrate seamlessly with external systems, scale horizontally, and adapt to modern architectures based on events or containers.",
    "service.graphicDesign.detailedDescription": "We create strong visual identities and impactful graphic assets that effectively communicate your message. From full branding, logos, and brand guidelines to digital marketing materials, banners, and social media content, we develop creative solutions that strengthen your visual presence. Our approach blends strategy, aesthetics, and consistency to convey your brand values in a memorable and professional way.",

    // Clients Page
    "clients.title": "SPM Clients",
    "clients.numbers": "Our Numbers",
    "clients.projectsCompleted": "Completed Projects",
    "clients.satisfiedClients": "Satisfied Clients",
    "clients.yearsExperience": "Years of Experience",
    "clients.technicalSupport": "Technical Support",
    "clients.trustedCompanies": "Companies That Trust Us",
    "clients.testimonials": "What Our Clients Say",
    "clients.nextClient": "Want to Be Our Next Client?",
    "clients.nextClientDesc":
      "Join the companies that already trust SPM INTEGRAL for their digital projects.",
    "clients.startProject": "Start a Project",
    "clients.description":
      "we are proud to collaborate with companies that share our vision of innovation and excellence. From emerging startups to established industry leaders, our clients trust us to develop technological solutions that drive their growth and digital transformation.",

    // Testimonials
    "testimonial.1.name": "John Pérez",
    "testimonial.1.company": "Tech Solutions Inc.",
    "testimonial.1.text":
      "Thanks to SPM INTEGRAL, we achieved a complete digital transformation. Their strategic approach and technical mastery made a big difference in our processes.",
    "testimonial.2.name": "Mary González",
    "testimonial.2.company": "Digital Marketing Pro",
    "testimonial.2.text":
      "The SPM INTEGRAL team not only met, but exceeded our expectations. Their commitment, creativity and attention to detail were key to the project's success.",
    "testimonial.3.name": "Carlos Rodríguez",
    "testimonial.3.company": "StartUp Innovation",
    "testimonial.3.text":
      "Working with SPM INTEGRAL was an exceptional experience. Their professionalism, technical quality and adaptability gave us the confidence to scale quickly.",
    "testimonial.4.name": "Ana Martinez",
    "testimonial.4.company": "InnovaCorp",
    "testimonial.4.text":
      "The SPM INTEGRAL team is incredibly talented and dedicated. They helped us launch our product in record time and with exceptional quality.",

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
    "contact.sendButton": "Send my Request",
    "contact.contactInfo": "Contact Information",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.schedule": "Schedule",
    "contact.scheduleTime": "Mon - Fri: 24h",
    "contact.scheduleWeekend": "Sat: 24h Sun: 24h",
    "contact.faq": "Frequently Asked",
    "contact.faq1Q": "How long does a project take?",
    "contact.faq1A":
      "Development time depends on the complexity and scope of the project. Some can be completed in a few weeks, while others require more extensive planning. At SPM INTEGRAL we provide you with a clear estimate from the beginning so you have full visibility of the process.",
    "contact.faq2Q": "Do you offer post-launch support?",
    "contact.faq2A":
      "Yes, at SPM INTEGRAL we offer continuous support and maintenance once the project has been delivered. We ensure that your solution works correctly, stays updated and evolves along with your needs.",
    "contact.faq3Q": "Do you work with international companies?",
    "contact.faq3A":
      "Yes, at SPM INTEGRAL we collaborate with companies from different countries and sectors. Our experience in digital environments allows us to offer effective solutions regardless of geographical location, adapting to different cultures, languages and time zones.",
    "contact.speakDirectly": "Prefer to Speak Directly?",
    "contact.speakDirectlyDesc":
      "Do you have questions or want to start your project in person? Schedule a free call with our team and discover how we can help you take your idea to the next level.",
    "contact.callNow": "Call Now",

    // Footer
    "footer.description":
      "At SPM INTEGRAL, we drive the digital transformation of companies through custom technological solutions. Our commitment is to provide innovation, efficiency and real results in every project.",
    "footer.quickLinks": "Quick Links",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    return (translations[language] as { [key: string]: string })[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: changeLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
