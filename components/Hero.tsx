import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import BlurText from "./ui/BlurText";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute top-0 inset-0 z-0">
        <Image
          src="/heroBackground.png?height=1080&width=1920"
          alt="Hero Background"
          fill
          className="object-cover opacity-30 max-h-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <BlurText
              text="Strategic Portfolio Management"
              delay={150}
              animateBy="words"
              direction="top"
              firstLetterClassName="text-[#5eabd6]"
            />
          </h1>

          <span className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
            <BlurText
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Transformamos ideas en soluciones digitales innovadoras que impulsan
            tu negocio hacia el futuro."
              delay={10}
              animateBy="words"
              direction="bottom"
              className="text-2xl mb-8"
            />
          </span>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-[#5eabd6] text-white font-bold rounded-lg hover:bg-[#000957] transition-all duration-300 transform hover:scale-105"
            >
              Ver Servicios
              <ArrowRight className="ml-2" size={20} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex bg-transparent items-center px-8 py-4 border-2 border-[#5eabd6] text-[#5eabd6] font-bold rounded-lg hover:bg-[#000957] hover:text-white transition-all duration-300"
            >
              <Play className="mr-2" size={20} />
              Contactar Ahora
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
