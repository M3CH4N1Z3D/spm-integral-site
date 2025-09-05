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

    // Generic Benefits
    "service.benefit1": "Soluciones a la Medida: No usamos plantillas. Analizamos tus necesidades para construir la solución exacta que tu negocio requiere.",
    "service.benefit2": "Equipo Experto: Cuentas con un equipo de especialistas apasionados por la tecnología y comprometidos con tu éxito.",
    "service.benefit3": "Enfoque en Resultados: Nos obsesionamos con entregar soluciones que no solo funcionan bien, sino que generan un retorno de inversión real.",
    "service.benefit4": "Comunicación Transparente: Te mantenemos informado en cada etapa del proyecto. Somos tus socios, no solo tus proveedores.",

    // Web Development Page Content
    "service.webDev.heroTitle": "Desarrollo Web que Convierte Visitantes en Clientes",
    "service.webDev.heroParagraph": "Tu sitio web no es solo una tarjeta de presentación, es tu principal herramienta de ventas y crecimiento. En SPM INTEGRAL, diseñamos y desarrollamos sitios web rápidos, seguros y optimizados para que no solo te veas bien, sino que generes resultados reales.",
    "service.webDev.solutionsTitle": "Nuestras Soluciones de Desarrollo Web",
    "service.webDev.card1Title": "Sitios Web Corporativos",
    "service.webDev.card1Desc": "Proyecta una imagen profesional y comunica tu valor de forma clara para generar confianza y atraer nuevos prospectos.",
    "service.webDev.card2Title": "Tiendas en Línea (E-commerce)",
    "service.webDev.card2Desc": "Plataformas robustas y fáciles de gestionar para vender tus productos 24/7, con integraciones de pago y logística.",
    "service.webDev.card3Title": "Aplicaciones Web a la Medida",
    "service.webDev.card3Desc": "Desarrollamos herramientas internas, portales de clientes o sistemas complejos que automatizan tus procesos y mejoran tu eficiencia.",
    "service.webDev.card4Title": "Landing Pages de Alta Conversión",
    "service.webDev.card4Desc": "Páginas de aterrizaje enfocadas en un solo objetivo: capturar leads o vender un producto específico para tus campañas de marketing.",
    "service.webDev.whyUsTitle": "¿Por qué nuestro servicio de Desarrollo Web es diferente?",
    "service.webDev.methodologyTitle": "Nuestro Proceso de Desarrollo",
    "service.webDev.step1Title": "01. Descubrimiento y Estrategia",
    "service.webDev.step1Desc": "Analizamos tus objetivos y definimos la estrategia y el alcance del proyecto.",
    "service.webDev.step2Title": "02. Diseño UX/UI y Prototipado",
    "service.webDev.step2Desc": "Creamos la experiencia visual y los flujos de navegación para una usabilidad perfecta.",
    "service.webDev.step3Title": "03. Desarrollo y Pruebas",
    "service.webDev.step3Desc": "Construimos el sitio con código limpio y lo sometemos a pruebas exhaustivas.",
    "service.webDev.step4Title": "04. Lanzamiento y Soporte",
    "service.webDev.step4Desc": "Desplegamos el proyecto en el servidor y te acompañamos para asegurar su éxito.",
    "service.webDev.ctaTitle": "¿Interesado en nuestro servicio de Desarrollo Web?",
    "service.webDev.ctaParagraph": "Hablemos de tu proyecto. Contáctanos para obtener una asesoría y cotización personalizada sin compromiso.",
    "service.webDev.ctaButton": "Solicita tu Cotización",

    // Mobile Apps Page Content
    "service.mobileApps.heroTitle": "Desarrollo de Apps Móviles que Conectan con tus Usuarios",
    "service.mobileApps.heroParagraph": "Una aplicación móvil es el canal más directo para interactuar, fidelizar y ofrecer valor a tus usuarios. Creamos apps intuitivas, de alto rendimiento y seguras para iOS y Android que tus clientes amarán usar.",
    "service.mobileApps.solutionsTitle": "Nuestras Soluciones Móviles",
    "service.mobileApps.card1Title": "Apps Nativas (iOS y Android)",
    "service.mobileApps.card1Desc": "Máximo rendimiento, mejor experiencia de usuario y acceso completo a las funcionalidades del dispositivo. La opción ideal para proyectos exigentes.",
    "service.mobileApps.card2Title": "Apps Híbridas (Multiplataforma)",
    "service.mobileApps.card2Desc": "Optimiza tiempo y costos de desarrollo con una sola base de código para ambas plataformas, sin sacrificar calidad ni funcionalidad esencial.",
    "service.mobileApps.card3Title": "Mantenimiento y Evolución",
    "service.mobileApps.card3Desc": "Nos aseguramos de que tu aplicación se mantenga actualizada, segura y compatible con las nuevas versiones de los sistemas operativos.",
    "service.mobileApps.whyUsTitle": "¿Por qué nuestro servicio de Apps Móviles es diferente?",
    "service.mobileApps.methodologyTitle": "Nuestro Proceso de Creación de Apps",
    "service.mobileApps.step1Title": "01. Ideación y Prototipado",
    "service.mobileApps.step1Desc": "Definimos las funcionalidades clave y creamos un prototipo interactivo.",
    "service.mobileApps.step2Title": "02. Diseño UX/UI",
    "service.mobileApps.step2Desc": "Diseñamos una interfaz atractiva y una experiencia de usuario fluida.",
    "service.mobileApps.step3Title": "03. Desarrollo y QA",
    "service.mobileApps.step3Desc": "Programamos la app para iOS y/o Android y realizamos pruebas de calidad.",
    "service.mobileApps.step4Title": "04. Publicación y Soporte",
    "service.mobileApps.step4Desc": "Gestionamos la publicación en las tiendas y ofrecemos soporte continuo.",
    "service.mobileApps.ctaTitle": "¿Interesado en nuestro servicio de Apps Móviles?",
    "service.mobileApps.ctaParagraph": "Hablemos de tu proyecto. Contáctanos para obtener una asesoría y cotización personalizada sin compromiso.",
    "service.mobileApps.ctaButton": "Convierte tu Idea en Realidad",

    // Cloud Services Page Content
    "service.cloudServices.heroTitle": "Soluciones en la Nube para una Empresa más Ágil y Segura",
    "service.cloudServices.heroParagraph": "Deja atrás las limitaciones de la infraestructura física. Te ayudamos a migrar y gestionar tus operaciones en plataformas líderes como Google Cloud, AWS y Azure para reducir costos, aumentar la seguridad y potenciar la colaboración.",
    "service.cloudServices.solutionsTitle": "Nuestra Experiencia en la Nube",
    "service.cloudServices.card1Title": "Migración a la Nube",
    "service.cloudServices.card1Desc": "Planificamos y ejecutamos una transición segura y sin interrupciones de tus servidores, aplicaciones y datos a la nube.",
    "service.cloudServices.card2Title": "Gestión de Infraestructura (CloudOps)",
    "service.cloudServices.card2Desc": "Administramos tus servicios en la nube para garantizar un rendimiento óptimo, alta disponibilidad y control de costos.",
    "service.cloudServices.card3Title": "Google Workspace y Microsoft Azure",
    "service.cloudServices.card3Desc": "Implementamos y personalizamos las mejores suites de productividad y colaboración para que tu equipo trabaje desde cualquier lugar.",
    "service.cloudServices.card4Title": "Seguridad y Backup en la Nube",
    "service.cloudServices.card4Desc": "Diseñamos arquitecturas seguras y estrategias de respaldo para que tu información crítica esté siempre protegida.",
    "service.cloudServices.whyUsTitle": "¿Por qué nuestro servicio Cloud es diferente?",
    "service.cloudServices.methodologyTitle": "Nuestro Proceso de Implementación Cloud",
    "service.cloudServices.step1Title": "01. Análisis y Estrategia",
    "service.cloudServices.step1Desc": "Evaluamos tu infraestructura actual y diseñamos la estrategia de migración.",
    "service.cloudServices.step2Title": "02. Migración y Despliegue",
    "service.cloudServices.step2Desc": "Ejecutamos el plan de migración minimizando el impacto en tus operaciones.",
    "service.cloudServices.step3Title": "03. Optimización",
    "service.cloudServices.step3Desc": "Ajustamos los recursos para maximizar el rendimiento y optimizar los costos.",
    "service.cloudServices.step4Title": "04. Gestión y Monitoreo",
    "service.cloudServices.step4Desc": "Monitoreamos la infraestructura 24/7 para garantizar su estabilidad y seguridad.",
    "service.cloudServices.ctaTitle": "¿Interesado en nuestros Cloud Services?",
    "service.cloudServices.ctaParagraph": "Hablemos de tu proyecto. Contáctanos para obtener una asesoría y cotización personalizada sin compromiso.",
    "service.cloudServices.ctaButton": "Solicita una Consultoría Gratuita",

    // UX/UI Design Page Content
    "service.uxui.heroTitle": "Diseño UX/UI: Productos Digitales que tus Usuarios Amarán",
    "service.uxui.heroParagraph": "No se trata solo de que se vea bien, se trata de que funcione a la perfección. Creamos interfaces que no solo son visualmente impactantes, sino también fáciles de usar, guiando a tus clientes para que cumplan sus objetivos y tu negocio los suyos.",
    "service.uxui.solutionsTitle": "Nuestro Proceso de Diseño Centrado en el Usuario",
    "service.uxui.card1Title": "Investigación y Estrategia UX",
    "service.uxui.card1Desc": "Entendemos a tus usuarios, sus necesidades y sus puntos de dolor para diseñar una solución que realmente les sirva.",
    "service.uxui.card2Title": "Wireframing y Prototipado",
    "service.uxui.card2Desc": "Creamos el esqueleto y los flujos de navegación de tu aplicación o web, permitiéndonos probar la usabilidad antes de escribir código.",
    "service.uxui.card3Title": "Diseño de Interfaz (UI)",
    "service.uxui.card3Desc": "Aplicamos tu identidad de marca para crear un diseño visual coherente, moderno y atractivo que genera una excelente primera impresión.",
    "service.uxui.card4Title": "Pruebas de Usabilidad",
    "service.uxui.card4Desc": "Validamos el diseño con usuarios reales para identificar y corregir cualquier punto de fricción, garantizando un producto final exitoso.",
    "service.uxui.whyUsTitle": "¿Por qué nuestro servicio de Diseño UX/UI es diferente?",
    "service.uxui.methodologyTitle": "Nuestro Proceso de Diseño",
    "service.uxui.step1Title": "01. Entender",
    "service.uxui.step1Desc": "Investigamos a tu audiencia y definimos los objetivos clave del producto.",
    "service.uxui.step2Title": "02. Explorar",
    "service.uxui.step2Desc": "Creamos wireframes y flujos de usuario para explorar las mejores soluciones.",
    "service.uxui.step3Title": "03. Materializar",
    "service.uxui.step3Desc": "Diseñamos la interfaz visual y creamos un prototipo interactivo.",
    "service.uxui.step4Title": "04. Validar",
    "service.uxui.step4Desc": "Realizamos pruebas con usuarios para refinar y perfeccionar el diseño.",
    "service.uxui.ctaTitle": "¿Interesado en nuestro servicio de Diseño UX/UI?",
    "service.uxui.ctaParagraph": "Hablemos de tu proyecto. Contáctanos para obtener una asesoría y cotización personalizada sin compromiso.",
    "service.uxui.ctaButton": "Mejora la Experiencia de tu Producto",

    // Database Page Content
    "service.database.heroTitle": "Bases de Datos Robustas: El Corazón Seguro de tu Aplicación",
    "service.database.heroParagraph": "Tu información es tu activo más valioso. Nos especializamos en diseñar, implementar y gestionar bases de datos rápidas, escalables y confiables que soportan el crecimiento de tu negocio.",
    "service.database.solutionsTitle": "Servicios de Bases de Datos a tu Medida",
    "service.database.card1Title": "Diseño y Modelado de Datos",
    "service.database.card1Desc": "Creamos la arquitectura de datos perfecta para tus necesidades, ya sea relacional (SQL) o no relacional (NoSQL).",
    "service.database.card2Title": "Optimización de Rendimiento",
    "service.database.card2Desc": "Analizamos y afinamos tus consultas y estructuras para garantizar tiempos de respuesta ultra rápidos, incluso con grandes volúmenes de datos.",
    "service.database.card3Title": "Migración de Bases de Datos",
    "service.database.card3Desc": "Movemos tus datos de forma segura y eficiente desde sistemas legados a plataformas modernas en la nube o en premisa.",
    "service.database.card4Title": "Seguridad y Mantenimiento",
    "service.database.card4Desc": "Implementamos las mejores prácticas de seguridad, backups y realizamos un mantenimiento proactivo para prevenir problemas.",
    "service.database.whyUsTitle": "¿Por qué nuestro servicio de Bases de Datos es diferente?",
    "service.database.methodologyTitle": "Nuestro Proceso de Gestión de Datos",
    "service.database.step1Title": "01. Diagnóstico",
    "service.database.step1Desc": "Evaluamos tu sistema actual para identificar necesidades y cuellos de botella.",
    "service.database.step2Title": "02. Diseño de la Solución",
    "service.database.step2Desc": "Proponemos la arquitectura y tecnología óptima para tu caso de uso.",
    "service.database.step3Title": "03. Implementación",
    "service.database.step3Desc": "Ejecutamos el plan, ya sea creando, migrando u optimizando la base de datos.",
    "service.database.step4Title": "04. Monitoreo Continuo",
    "service.database.step4Desc": "Vigilamos el rendimiento y la seguridad para garantizar la estabilidad a largo plazo.",
    "service.database.ctaTitle": "¿Interesado en nuestro servicio de Base de Datos?",
    "service.database.ctaParagraph": "Hablemos de tu proyecto. Contáctanos para obtener una asesoría y cotización personalizada sin compromiso.",
    "service.database.ctaButton": "Optimiza tu Base de Datos",

    // Consulting Page Content
    "service.consulting.heroTitle": "Consultoría Tecnológica: Tu Hoja de Ruta Hacia la Innovación",
    "service.consulting.heroParagraph": "Tomamos tus objetivos de negocio y los traducimos en una estrategia tecnológica ganadora. Te ayudamos a navegar la complejidad, tomar decisiones informadas y elegir las herramientas correctas para evitar errores costosos e impulsar tu crecimiento.",
    "service.consulting.solutionsTitle": "¿Cómo Podemos Ayudarte?",
    "service.consulting.card1Title": "Transformación Digital",
    "service.consulting.card1Desc": "Analizamos tus procesos actuales y te guiamos en la adopción de nuevas tecnologías para ser más eficiente y competitivo.",
    "service.consulting.card2Title": "Auditoría de Sistemas",
    "service.consulting.card2Desc": "Evaluamos tu infraestructura y software actual para identificar cuellos de botella, brechas de seguridad y oportunidades de mejora.",
    "service.consulting.card3Title": "Hoja de Ruta Tecnológica (Roadmap)",
    "service.consulting.card3Desc": "Creamos un plan estratégico a corto, mediano y largo plazo para que tu tecnología evolucione junto con tu empresa.",
    "service.consulting.card4Title": "Selección de Proveedores y Tecnología",
    "service.consulting.card4Desc": "Te ayudamos a elegir las mejores plataformas y proveedores (Cloud, SaaS, etc.) basándonos en tus necesidades y presupuesto.",
    "service.consulting.whyUsTitle": "¿Por qué nuestra Consultoría Tecnológica es diferente?",
    "service.consulting.methodologyTitle": "Nuestra Metodología de Consultoría",
    "service.consulting.step1Title": "01. Inmersión y Diagnóstico",
    "service.consulting.step1Desc": "Nos reunimos contigo para entender a fondo tu negocio, metas y desafíos.",
    "service.consulting.step2Title": "02. Análisis y Estrategia",
    "service.consulting.step2Desc": "Investigamos el mercado y las opciones tecnológicas para diseñar un plan a medida.",
    "service.consulting.step3Title": "03. Presentación del Plan",
    "service.consulting.step3Desc": "Te entregamos un roadmap claro con acciones, plazos y presupuesto.",
    "service.consulting.step4Title": "04. Acompañamiento",
    "service.consulting.step4Desc": "Te acompañamos durante la implementación para asegurar que la estrategia se ejecute con éxito.",
    "service.consulting.ctaTitle": "¿Interesado en nuestro servicio de Consultoría Tecnológica?",
    "service.consulting.ctaParagraph": "Hablemos de tu proyecto. Contáctanos para obtener una asesoría y cotización personalizada sin compromiso.",
    "service.consulting.ctaButton": "Agenda una Sesión Estratégica",

    // Backend Services Page Content
    "service.backend.heroTitle": "Desarrollo Back-End: El Motor Potente que Impulsa tu Aplicación",
    "service.backend.heroParagraph": "La magia invisible que hace que todo funcione a la perfección. Construimos Back-Ends robustos, escalables y seguros que son la columna vertebral de tu proyecto digital, procesando datos y ejecutando la lógica de tu negocio.",
    "service.backend.solutionsTitle": "Nuestra Expertise en Back-End",
    "service.backend.card1Title": "Desarrollo de APIs (REST/GraphQL)",
    "service.backend.card1Desc": "Creamos APIs seguras y bien documentadas para que tu aplicación móvil, web y otros servicios se comuniquen de forma eficiente.",
    "service.backend.card2Title": "Arquitectura de Microservicios",
    "service.backend.card2Desc": "Diseñamos aplicaciones como un conjunto de servicios pequeños e independientes, facilitando la escalabilidad y el mantenimiento.",
    "service.backend.card3Title": "Lógica de Negocio Compleja",
    "service.backend.card3Desc": "Traducimos tus reglas de negocio y procesos, por más complejos que sean, en código eficiente y confiable.",
    "service.backend.card4Title": "Integración con Servicios de Terceros",
    "service.backend.card4Desc": "Conectamos tu aplicación con pasarelas de pago, sistemas de CRM, ERPs y cualquier otro servicio externo que necesites.",
    "service.backend.whyUsTitle": "¿Por qué nuestro servicio de Back-End es diferente?",
    "service.backend.methodologyTitle": "Nuestro Proceso de Desarrollo Back-End",
    "service.backend.step1Title": "01. Definición de Arquitectura",
    "service.backend.step1Desc": "Elegimos el stack tecnológico y la arquitectura (monolito o microservicios) ideal.",
    "service.backend.step2Title": "02. Desarrollo de APIs y Lógica",
    "service.backend.step2Desc": "Construimos los endpoints y la lógica de negocio que darán vida a tu aplicación.",
    "service.backend.step3Title": "03. Integración y Pruebas",
    "service.backend.step3Desc": "Integramos con la base de datos y el front-end, y realizamos pruebas rigurosas.",
    "service.backend.step4Title": "04. Despliegue y Escalado",
    "service.backend.step4Desc": "Ponemos en producción el back-end y lo preparamos para soportar el crecimiento.",
    "service.backend.ctaTitle": "¿Interesado en nuestros Servicios Back-End?",
    "service.backend.ctaParagraph": "Hablemos de tu proyecto. Contáctanos para obtener una asesoría y cotización personalizada sin compromiso.",
    "service.backend.ctaButton": "Construye una Base Sólida",

    // Graphic Design Page Content
    "service.graphicDesign.heroTitle": "Diseño Gráfico que Construye Marcas Inolvidables",
    "service.graphicDesign.heroParagraph": "Desde el logo hasta tus redes sociales, creamos una identidad visual coherente y profesional que captura la esencia de tu negocio y conecta con tu audiencia.",
    "service.graphicDesign.solutionsTitle": "Nuestras Soluciones de Diseño Gráfico",
    "service.graphicDesign.card1Title": "Identidad de Marca (Branding)",
    "service.graphicDesign.card1Desc": "Diseñamos tu logo, paleta de colores y tipografía para construir una marca sólida, profesional y fácilmente reconocible.",
    "service.graphicDesign.card2Title": "Diseño para Marketing Digital",
    "service.graphicDesign.card2Desc": "Creamos banners, anuncios y posts para redes sociales que capturan la atención y comunican tu mensaje de forma efectiva.",
    "service.graphicDesign.card3Title": "Material Corporativo y Publicitario",
    "service.graphicDesign.card3Desc": "Diseñamos tarjetas de presentación, folletos, catálogos y papelería que reflejan la calidad y el profesionalismo de tu empresa.",
    "service.graphicDesign.whyUsTitle": "¿Por qué nuestro servicio de Diseño Gráfico es diferente?",
    "service.graphicDesign.methodologyTitle": "Nuestro Proceso Creativo",
    "service.graphicDesign.step1Title": "01. Briefing Creativo",
    "service.graphicDesign.step1Desc": "Nos reunimos contigo para entender tu marca, tus valores y los objetivos del proyecto.",
    "service.graphicDesign.step2Title": "02. Conceptualización",
    "service.graphicDesign.step2Desc": "Exploramos ideas y creamos los primeros bocetos y conceptos visuales.",
    "service.graphicDesign.step3Title": "03. Desarrollo de Propuestas",
    "service.graphicDesign.step3Desc": "Presentamos las propuestas de diseño y trabajamos en las revisiones.",
    "service.graphicDesign.step4Title": "04. Entrega de Artes Finales",
    "service.graphicDesign.step4Desc": "Preparamos y entregamos todos los archivos finales en los formatos que necesites.",
    "service.graphicDesign.ctaTitle": "¿Interesado en nuestro servicio de Diseño Gráfico?",
    "service.graphicDesign.ctaParagraph": "Hablemos de tu proyecto. Contáctanos para obtener una asesoría y cotización personalizada sin compromiso.",
    "service.graphicDesign.ctaButton": "Eleva la Imagen de tu Marca",

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

    // Generic Benefits
    "service.benefit1": "Custom Solutions: We don't use templates. We analyze your needs to build the exact solution your business requires.",
    "service.benefit2": "Expert Team: You have a team of specialists passionate about technology and committed to your success.",
    "service.benefit3": "Focus on Results: We are obsessed with delivering solutions that not only work well but also generate a real return on investment.",
    "service.benefit4": "Transparent Communication: We keep you informed at every stage of the project. We are your partners, not just your providers.",

    // Web Development Page Content
    "service.webDev.heroTitle": "Web Development That Converts Visitors into Customers",
    "service.webDev.heroParagraph": "Your website is not just a business card; it's your main tool for sales and growth. At SPM INTEGRAL, we design and develop fast, secure, and optimized websites so you not only look good but also achieve real results.",
    "service.webDev.solutionsTitle": "Our Web Development Solutions",
    "service.webDev.card1Title": "Corporate Websites",
    "service.webDev.card1Desc": "Project a professional image and clearly communicate your value to build trust and attract new prospects.",
    "service.webDev.card2Title": "E-commerce Stores",
    "service.webDev.card2Desc": "Robust and easy-to-manage platforms to sell your products 24/7, with payment and logistics integrations.",
    "service.webDev.card3Title": "Custom Web Applications",
    "service.webDev.card3Desc": "We develop internal tools, customer portals, or complex systems that automate your processes and improve your efficiency.",
    "service.webDev.card4Title": "High-Conversion Landing Pages",
    "service.webDev.card4Desc": "Landing pages focused on a single goal: capturing leads or selling a specific product for your marketing campaigns.",
    "service.webDev.whyUsTitle": "Why is our Web Development service different?",
    "service.webDev.methodologyTitle": "Our Development Process",
    "service.webDev.step1Title": "01. Discovery and Strategy",
    "service.webDev.step1Desc": "We analyze your goals and define the project's strategy and scope.",
    "service.webDev.step2Title": "02. UX/UI Design and Prototyping",
    "service.webDev.step2Desc": "We create the visual experience and navigation flows for perfect usability.",
    "service.webDev.step3Title": "03. Development and Testing",
    "service.webDev.step3Desc": "We build the site with clean code and subject it to exhaustive testing.",
    "service.webDev.step4Title": "04. Launch and Support",
    "service.webDev.step4Desc": "We deploy the project on the server and support you to ensure its success.",
    "service.webDev.ctaTitle": "Interested in our Web Development service?",
    "service.webDev.ctaParagraph": "Let's talk about your project. Contact us for a no-obligation consultation and personalized quote.",
    "service.webDev.ctaButton": "Request Your Quote",

    // Mobile Apps Page Content
    "service.mobileApps.heroTitle": "Mobile App Development That Connects with Your Users",
    "service.mobileApps.heroParagraph": "A mobile app is the most direct channel to interact with, retain, and offer value to your users. We create intuitive, high-performance, and secure apps for iOS and Android that your customers will love to use.",
    "service.mobileApps.solutionsTitle": "Our Mobile Solutions",
    "service.mobileApps.card1Title": "Native Apps (iOS and Android)",
    "service.mobileApps.card1Desc": "Maximum performance, best user experience, and full access to device features. The ideal choice for demanding projects.",
    "service.mobileApps.card2Title": "Hybrid Apps (Cross-Platform)",
    "service.mobileApps.card2Desc": "Optimize development time and costs with a single codebase for both platforms, without sacrificing quality or essential functionality.",
    "service.mobileApps.card3Title": "Maintenance and Evolution",
    "service.mobileApps.card3Desc": "We ensure your application stays up-to-date, secure, and compatible with new operating system versions.",
    "service.mobileApps.whyUsTitle": "Why is our Mobile App service different?",
    "service.mobileApps.methodologyTitle": "Our App Creation Process",
    "service.mobileApps.step1Title": "01. Ideation and Prototyping",
    "service.mobileApps.step1Desc": "We define key functionalities and create an interactive prototype.",
    "service.mobileApps.step2Title": "02. UX/UI Design",
    "service.mobileApps.step2Desc": "We design an attractive interface and a smooth user experience.",
    "service.mobileApps.step3Title": "03. Development and QA",
    "service.mobileApps.step3Desc": "We code the app for iOS and/or Android and perform quality assurance tests.",
    "service.mobileApps.step4Title": "04. Publication and Support",
    "service.mobileApps.step4Desc": "We manage the app store publication and provide ongoing support.",
    "service.mobileApps.ctaTitle": "Interested in our Mobile App service?",
    "service.mobileApps.ctaParagraph": "Let's talk about your project. Contact us for a no-obligation consultation and personalized quote.",
    "service.mobileApps.ctaButton": "Turn Your Idea into Reality",

    // Cloud Services Page Content
    "service.cloudServices.heroTitle": "Cloud Solutions for a More Agile and Secure Business",
    "service.cloudServices.heroParagraph": "Leave the limitations of physical infrastructure behind. We help you migrate and manage your operations on leading platforms like Google Cloud, AWS, and Azure to reduce costs, increase security, and enhance collaboration.",
    "service.cloudServices.solutionsTitle": "Our Cloud Expertise",
    "service.cloudServices.card1Title": "Cloud Migration",
    "service.cloudServices.card1Desc": "We plan and execute a secure and seamless transition of your servers, applications, and data to the cloud.",
    "service.cloudServices.card2Title": "Infrastructure Management (CloudOps)",
    "service.cloudServices.card2Desc": "We manage your cloud services to ensure optimal performance, high availability, and cost control.",
    "service.cloudServices.card3Title": "Google Workspace and Microsoft Azure",
    "service.cloudServices.card3Desc": "We implement and customize the best productivity and collaboration suites for your team to work from anywhere.",
    "service.cloudServices.card4Title": "Cloud Security and Backup",
    "service.cloudServices.card4Desc": "We design secure architectures and backup strategies to keep your critical information always protected.",
    "service.cloudServices.whyUsTitle": "Why is our Cloud service different?",
    "service.cloudServices.methodologyTitle": "Our Cloud Implementation Process",
    "service.cloudServices.step1Title": "01. Analysis and Strategy",
    "service.cloudServices.step1Desc": "We evaluate your current infrastructure and design the migration strategy.",
    "service.cloudServices.step2Title": "02. Migration and Deployment",
    "service.cloudServices.step2Desc": "We execute the migration plan, minimizing the impact on your operations.",
    "service.cloudServices.step3Title": "03. Optimization",
    "service.cloudServices.step3Desc": "We adjust resources to maximize performance and optimize costs.",
    "service.cloudServices.step4Title": "04. Management and Monitoring",
    "service.cloudServices.step4Desc": "We monitor the infrastructure 24/7 to ensure its stability and security.",
    "service.cloudServices.ctaTitle": "Interested in our Cloud Services?",
    "service.cloudServices.ctaParagraph": "Let's talk about your project. Contact us for a no-obligation consultation and personalized quote.",
    "service.cloudServices.ctaButton": "Request a Free Consultation",

    // UX/UI Design Page Content
    "service.uxui.heroTitle": "UX/UI Design: Digital Products Your Users Will Love",
    "service.uxui.heroParagraph": "It's not just about looking good; it's about working perfectly. We create interfaces that are not only visually stunning but also easy to use, guiding your customers to achieve their goals and your business to achieve yours.",
    "service.uxui.solutionsTitle": "Our User-Centered Design Process",
    "service.uxui.card1Title": "UX Research and Strategy",
    "service.uxui.card1Desc": "We understand your users, their needs, and their pain points to design a solution that truly serves them.",
    "service.uxui.card2Title": "Wireframing and Prototyping",
    "service.uxui.card2Desc": "We create the skeleton and navigation flows of your app or website, allowing us to test usability before writing code.",
    "service.uxui.card3Title": "User Interface (UI) Design",
    "service.uxui.card3Desc": "We apply your brand identity to create a coherent, modern, and attractive visual design that makes a great first impression.",
    "service.uxui.card4Title": "Usability Testing",
    "service.uxui.card4Desc": "We validate the design with real users to identify and correct any friction points, ensuring a successful final product.",
    "service.uxui.whyUsTitle": "Why is our UX/UI Design service different?",
    "service.uxui.methodologyTitle": "Our Design Process",
    "service.uxui.step1Title": "01. Understand",
    "service.uxui.step1Desc": "We research your audience and define the key product objectives.",
    "service.uxui.step2Title": "02. Explore",
    "service.uxui.step2Desc": "We create wireframes and user flows to explore the best solutions.",
    "service.uxui.step3Title": "03. Materialize",
    "service.uxui.step3Desc": "We design the visual interface and create an interactive prototype.",
    "service.uxui.step4Title": "04. Validate",
    "service.uxui.step4Desc": "We conduct user testing to refine and perfect the design.",
    "service.uxui.ctaTitle": "Interested in our UX/UI Design service?",
    "service.uxui.ctaParagraph": "Let's talk about your project. Contact us for a no-obligation consultation and personalized quote.",
    "service.uxui.ctaButton": "Enhance Your Product's Experience",

    // Database Page Content
    "service.database.heroTitle": "Robust Databases: The Secure Heart of Your Application",
    "service.database.heroParagraph": "Your information is your most valuable asset. We specialize in designing, implementing, and managing fast, scalable, and reliable databases that support your business growth.",
    "service.database.solutionsTitle": "Custom Database Services",
    "service.database.card1Title": "Data Design and Modeling",
    "service.database.card1Desc": "We create the perfect data architecture for your needs, whether relational (SQL) or non-relational (NoSQL).",
    "service.database.card2Title": "Performance Optimization",
    "service.database.card2Desc": "We analyze and fine-tune your queries and structures to ensure ultra-fast response times, even with large data volumes.",
    "service.database.card3Title": "Database Migration",
    "service.database.card3Desc": "We move your data securely and efficiently from legacy systems to modern on-premise or cloud platforms.",
    "service.database.card4Title": "Security and Maintenance",
    "service.database.card4Desc": "We implement best security practices, backups, and perform proactive maintenance to prevent issues.",
    "service.database.whyUsTitle": "Why is our Database service different?",
    "service.database.methodologyTitle": "Our Data Management Process",
    "service.database.step1Title": "01. Diagnosis",
    "service.database.step1Desc": "We evaluate your current system to identify needs and bottlenecks.",
    "service.database.step2Title": "02. Solution Design",
    "service.database.step2Desc": "We propose the optimal architecture and technology for your use case.",
    "service.database.step3Title": "03. Implementation",
    "service.database.step3Desc": "We execute the plan, whether creating, migrating, or optimizing the database.",
    "service.database.step4Title": "04. Continuous Monitoring",
    "service.database.step4Desc": "We monitor performance and security to ensure long-term stability.",
    "service.database.ctaTitle": "Interested in our Database service?",
    "service.database.ctaParagraph": "Let's talk about your project. Contact us for a no-obligation consultation and personalized quote.",
    "service.database.ctaButton": "Optimize Your Database",

    // Consulting Page Content
    "service.consulting.heroTitle": "Technology Consulting: Your Roadmap to Innovation",
    "service.consulting.heroParagraph": "We take your business goals and translate them into a winning technology strategy. We help you navigate complexity, make informed decisions, and choose the right tools to avoid costly mistakes and drive your growth.",
    "service.consulting.solutionsTitle": "How Can We Help You?",
    "service.consulting.card1Title": "Digital Transformation",
    "service.consulting.card1Desc": "We analyze your current processes and guide you in adopting new technologies to become more efficient and competitive.",
    "service.consulting.card2Title": "System Audits",
    "service.consulting.card2Desc": "We evaluate your current infrastructure and software to identify bottlenecks, security gaps, and improvement opportunities.",
    "service.consulting.card3Title": "Technology Roadmap",
    "service.consulting.card3Desc": "We create a strategic short, medium, and long-term plan so your technology evolves with your company.",
    "service.consulting.card4Title": "Vendor and Technology Selection",
    "service.consulting.card4Desc": "We help you choose the best platforms and providers (Cloud, SaaS, etc.) based on your needs and budget.",
    "service.consulting.whyUsTitle": "Why is our Technology Consulting different?",
    "service.consulting.methodologyTitle": "Our Consulting Methodology",
    "service.consulting.step1Title": "01. Immersion and Diagnosis",
    "service.consulting.step1Desc": "We meet with you to thoroughly understand your business, goals, and challenges.",
    "service.consulting.step2Title": "02. Analysis and Strategy",
    "service.consulting.step2Desc": "We research the market and technology options to design a custom plan.",
    "service.consulting.step3Title": "03. Plan Presentation",
    "service.consulting.step3Desc": "We deliver a clear roadmap with actions, timelines, and budget.",
    "service.consulting.step4Title": "04. Accompaniment",
    "service.consulting.step4Desc": "We support you during implementation to ensure the strategy is successfully executed.",
    "service.consulting.ctaTitle": "Interested in our Technology Consulting service?",
    "service.consulting.ctaParagraph": "Let's talk about your project. Contact us for a no-obligation consultation and personalized quote.",
    "service.consulting.ctaButton": "Schedule a Strategic Session",

    // Backend Services Page Content
    "service.backend.heroTitle": "Back-End Development: The Powerful Engine Driving Your Application",
    "service.backend.heroParagraph": "The invisible magic that makes everything work perfectly. We build robust, scalable, and secure Back-Ends that are the backbone of your digital project, processing data and executing your business logic.",
    "service.backend.solutionsTitle": "Our Back-End Expertise",
    "service.backend.card1Title": "API Development (REST/GraphQL)",
    "service.backend.card1Desc": "We create secure and well-documented APIs so your mobile app, web, and other services can communicate efficiently.",
    "service.backend.card2Title": "Microservices Architecture",
    "service.backend.card2Desc": "We design applications as a set of small, independent services, facilitating scalability and maintenance.",
    "service.backend.card3Title": "Complex Business Logic",
    "service.backend.card3Desc": "We translate your business rules and processes, no matter how complex, into efficient and reliable code.",
    "service.backend.card4Title": "Third-Party Service Integration",
    "service.backend.card4Desc": "We connect your application with payment gateways, CRM systems, ERPs, and any other external service you need.",
    "service.backend.whyUsTitle": "Why is our Back-End service different?",
    "service.backend.methodologyTitle": "Our Back-End Development Process",
    "service.backend.step1Title": "01. Architecture Definition",
    "service.backend.step1Desc": "We choose the ideal technology stack and architecture (monolith or microservices).",
    "service.backend.step2Title": "02. API and Logic Development",
    "service.backend.step2Desc": "We build the endpoints and business logic that will bring your application to life.",
    "service.backend.step3Title": "03. Integration and Testing",
    "service.backend.step3Desc": "We integrate with the database and front-end, and perform rigorous testing.",
    "service.backend.step4Title": "04. Deployment and Scaling",
    "service.backend.step4Desc": "We deploy the back-end to production and prepare it to support growth.",
    "service.backend.ctaTitle": "Interested in our Back-End Services?",
    "service.backend.ctaParagraph": "Let's talk about your project. Contact us for a no-obligation consultation and personalized quote.",
    "service.backend.ctaButton": "Build a Solid Foundation",

    // Graphic Design Page Content
    "service.graphicDesign.heroTitle": "Graphic Design That Builds Unforgettable Brands",
    "service.graphicDesign.heroParagraph": "From the logo to your social media, we create a coherent and professional visual identity that captures the essence of your business and connects with your audience.",
    "service.graphicDesign.solutionsTitle": "Our Graphic Design Solutions",
    "service.graphicDesign.card1Title": "Brand Identity (Branding)",
    "service.graphicDesign.card1Desc": "We design your logo, color palette, and typography to build a solid, professional, and easily recognizable brand.",
    "service.graphicDesign.card2Title": "Digital Marketing Design",
    "service.graphicDesign.card2Desc": "We create banners, ads, and social media posts that capture attention and effectively communicate your message.",
    "service.graphicDesign.card3Title": "Corporate and Advertising Material",
    "service.graphicDesign.card3Desc": "We design business cards, brochures, catalogs, and stationery that reflect the quality and professionalism of your company.",
    "service.graphicDesign.whyUsTitle": "Why is our Graphic Design service different?",
    "service.graphicDesign.methodologyTitle": "Our Creative Process",
    "service.graphicDesign.step1Title": "01. Creative Briefing",
    "service.graphicDesign.step1Desc": "We meet with you to understand your brand, values, and project goals.",
    "service.graphicDesign.step2Title": "02. Conceptualization",
    "service.graphicDesign.step2Desc": "We explore ideas and create the first sketches and visual concepts.",
    "service.graphicDesign.step3Title": "03. Proposal Development",
    "service.graphicDesign.step3Desc": "We present the design proposals and work on revisions.",
    "service.graphicDesign.step4Title": "04. Final Art Delivery",
    "service.graphicDesign.step4Desc": "We prepare and deliver all final files in the formats you need.",
    "service.graphicDesign.ctaTitle": "Interested in our Graphic Design service?",
    "service.graphicDesign.ctaParagraph": "Let's talk about your project. Contact us for a no-obligation consultation and personalized quote.",
    "service.graphicDesign.ctaButton": "Elevate Your Brand's Image",

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
