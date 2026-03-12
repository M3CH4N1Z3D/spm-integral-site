import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "SPM INTEGRAL - Soluciones Digitales Estratégicas",
    template: "%s | SPM INTEGRAL",
  },
  description:
    "Transformamos ideas en soluciones digitales de alto impacto. Desarrollo web, apps móviles, cloud services y más.",
  generator: "v0.dev",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://spmintegral.com",
    title: "SPM INTEGRAL - Soluciones Digitales Estratégicas",
    description: "Transformamos ideas en soluciones digitales de alto impacto. Desarrollo web, apps móviles, cloud services y más.",
    siteName: "SPM INTEGRAL",
  },
  twitter: {
    card: "summary_large_image",
    title: "SPM INTEGRAL - Soluciones Digitales Estratégicas",
    description: "Transformamos ideas en soluciones digitales de alto impacto. Desarrollo web, apps móviles, cloud services y más.",
  },
  alternates: {
    canonical: "https://spmintegral.com",
  },
  verification: {
    google: "2AgS4pXsRFL75HvR6vqggoh5EyCf4Y1Zvhp0-8fcHis",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ITUtility",
      "@id": "https://www.spmintegral.com/#organization",
      "name": "SPM INTEGRAL",
      "url": "https://www.spmintegral.com",
      "logo": "https://www.spmintegral.com/SPM_INTEGRAL.webp",
      "image": "https://www.spmintegral.com/heroBackground.webp",
      "description": "Empresa de tecnología especializada en desarrollo web, desarrollo móvil, servicios cloud, automatización de procesos, consultoría, diseño gráfico y marketing.",
      "founder": {
        "@type": "Person",
        "name": "Fredy Mauricio Trigueros"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bogotá D.C.",
        "addressCountry": "CO"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+573503087606",
        "contactType": "customer service",
        "email": "spm.integral.colombia@gmail.com"
      }
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.spmintegral.com/#spot-on",
      "name": "SPOT-ON",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, Android, iOS",
      "description": "Aplicación avanzada de Punto de Venta (POS) y sistema de gestión de inventario.",
      "author": {
        "@id": "https://www.spmintegral.com/#organization"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Header />
            <main>{children}</main>
            <Analytics />
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
