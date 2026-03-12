import { Metadata } from "next";
import ServiceClient from "./ServiceClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;

  // Map slugs to titles and descriptions for SEO
  const seoData: Record<string, { title: string; description: string }> = {
    "desarrollo-web": {
      title: "Desarrollo Web",
      description: "Creamos sitios web modernos, rápidos y escalables con las últimas tecnologías.",
    },
    "apps-moviles": {
      title: "Apps Móviles",
      description: "Desarrollo de aplicaciones móviles nativas y multiplataforma para iOS y Android.",
    },
    "cloud-services": {
      title: "Cloud Services",
      description: "Soluciones en la nube seguras y eficientes para optimizar tu infraestructura.",
    },
    "uxui-design": {
      title: "UX/UI Design",
      description: "Diseño de interfaces intuitivas y experiencias de usuario excepcionales.",
    },
    "base-de-datos": {
      title: "Base de Datos",
      description: "Diseño, optimización y gestión de bases de datos relacionales y NoSQL.",
    },
    "consultoria": {
      title: "Consultoría",
      description: "Asesoramiento experto en tecnología y transformación digital para tu negocio.",
    },
    "servicios-backend": {
      title: "Servicios Backend",
      description: "Desarrollo de APIs robustas y arquitecturas escalables para tus aplicaciones.",
    },
    "diseno-grafico": {
      title: "Diseño Gráfico",
      description: "Creación de identidad visual, branding y material gráfico de alta calidad.",
    },
  };

  const data = seoData[slug] || {
    title: "Servicio",
    description: "Descubre nuestros servicios de tecnología y diseño.",
  };

  return {
    title: `${data.title} | SPM INTEGRAL`,
    description: data.description,
    openGraph: {
      title: `${data.title} | SPM INTEGRAL`,
      description: data.description,
      url: `https://spmintegral.com/services/${slug}`,
    },
    alternates: {
      canonical: `https://spmintegral.com/services/${slug}`,
    },
  };
}

export default function Page() {
  return <ServiceClient />;
}
