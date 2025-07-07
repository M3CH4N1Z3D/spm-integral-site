import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";
import ShinyText from "./ui/ShinyText";
import "@/components/ui/ShinyText.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2d3559] border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-row items-center space-x-4 mb-2">
              <Image
                src="/SPM_INTEGRAL.png"
                alt="Logo"
                width={50}
                height={50}
              />
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                <ShinyText
                  text="SPM INTEGRAL"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </h3>
            </div>
            <span className="text-gray-400 mb-4 max-w-md">
              <ShinyText
                text="En SPM INTEGRAL, impulsamos la transformación digital de empresas mediante soluciones tecnológicas a medida. Nuestro compromiso es brindar innovación, eficiencia y resultados reales en cada proyecto."
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </span>
            <div className="flex space-x-4 mt-10">
              <Link
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <ShinyText disabled={false} speed={3}>
                  <Linkedin size={20} />
                </ShinyText>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <ShinyText disabled={false} speed={3}>
                  <Twitter size={20} />
                </ShinyText>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition-colors"
              >
                <ShinyText disabled={false} speed={3}>
                  <Github size={20} />
                </ShinyText>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              <ShinyText
                text="Enlaces Rápidos"
                disabled={false}
                speed={3}
                className="custom-class"
              />
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  <ShinyText
                    text="Servicios"
                    disabled={false}
                    speed={3}
                    className="custom-class"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  <ShinyText
                    text="Nosotros"
                    disabled={false}
                    speed={3}
                    className="custom-class"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  <ShinyText
                    text="Clientes"
                    disabled={false}
                    speed={3}
                    className="custom-class"
                  />
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  <ShinyText
                    text="Contacto"
                    disabled={false}
                    speed={3}
                    className="custom-class"
                  />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              <ShinyText text="Contacto" disabled={false} speed={3} />
            </h4>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                <span>
                  <ShinyText
                    text="info@spmintegral.com"
                    disabled={false}
                    speed={3}
                  />
                </span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2" />
                <span>
                  <ShinyText
                    text="+1 (555) 123-4567"
                    disabled={false}
                    speed={3}
                  />
                </span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-2" />
                <span>
                  <ShinyText
                    text="Bogotá D.C, Colombia"
                    disabled={false}
                    speed={3}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <span>
            <ShinyText disabled={false} speed={3}>
              &copy; {new Date().getFullYear()} SPM INTEGRAL. Todos los derechos
              reservados.
            </ShinyText>
          </span>
        </div>
      </div>
    </footer>
  );
}
