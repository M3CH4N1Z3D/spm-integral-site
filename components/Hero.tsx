import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Play } from "lucide-react"
import BlurText from "./ui/BlurText"

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
        <div className="max-w-4xl mx-auto text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            <BlurText
              text="Strategic Portfolio Management"
              delay={150}
              animateBy="words"
              direction="top"
              firstLetterClassName="text-[#a693e5]"
              className="text-[#d8d6f2]"
            />
          </h1>

          <div className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#bccceb] mb-6 sm:mb-8 max-w-3xl mx-auto lg:mx-0">
            <BlurText
              text="Impulsamos tu visión con soluciones digitales estratégicas. En SPM INTEGRAL convertimos ideas en resultados reales."
              delay={10}
              animateBy="words"
              direction="bottom"
              className=""
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-[#2d3559] text-[#bccceb] font-bold rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              Ver Servicios
              <ArrowRight className="ml-2" size={20} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex bg-transparent items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#bccceb] text-[#bccceb] font-bold rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              <Play className="mr-2" size={20} />
              Contactar Ahora
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
