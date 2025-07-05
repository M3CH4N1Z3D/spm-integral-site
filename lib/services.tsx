import {
  Code,
  Smartphone,
  Cloud,
  Palette,
  Database,
  Users,
  Settings,
  BarChart,
} from "lucide-react";
export const services = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Desarrollo Web",
    description:
      "Sitios rápidos, escalables y modernos con tecnologías de última generación.",
    features: [
      "React & Next.js",
      "Node.js & Express",
      "E-commerce",
      "CMS Personalizado",
    ],
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Apps Móviles",
    description:
      "Aplicaciones nativas e híbridas con experiencia fluida en Android, iOS y multiplataforma.",
    features: ["Android Nativo", "iOS Nativo", "React Native", "Flutter"],
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Services",
    description:
      "Infraestructura en la nube segura y escalable con AWS, Google Cloud y Azure.",
    features: ["AWS", "Google Cloud", "Microsoft Azure", "DevOps"],
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "UX/UI Design",
    description:
      "Interfaces intuitivas y atractivas centradas en la experiencia del usuario y la coherencia visual.",
    features: [
      "Diseño de Interfaces",
      "Prototipado",
      "Design Systems",
      "User Research",
    ],
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Base de Datos",
    description:
      "Modelado, gestión y optimización de bases de datos relacionales y NoSQL para alto rendimiento.",
    features: ["MySQL", "PostgreSQL", "MongoDB", "Optimización"],
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Consultoría",
    description:
      "Diagnóstico, arquitectura y acompañamiento técnico para escalar tus proyectos con confianza.",
    features: [
      "Auditoría de Código",
      "Arquitectura",
      "Migración",
      "Capacitación",
    ],
  },
  {
    icon: <Settings className="w-12 h-12" />,
    title: "Servicios Backend",
    description:
      "Desarrollo de APIs robustas, microservicios y lógica de negocio eficiente para tus aplicaciones.",
    features: ["APIs REST", "GraphQL", "Microservicios", "Integración"],
  },
  {
    icon: <BarChart className="w-12 h-12" />,
    title: "Diseño Gráfico",
    description:
      "Identidad visual sólida, branding y piezas creativas que comunican con impacto.",
    features: [
      "Branding",
      "Marketing Digital",
      "Ilustración",
      "Identidad Visual",
    ],
  },
];
