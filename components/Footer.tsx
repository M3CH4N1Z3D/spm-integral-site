"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react"
import ShinyText from "./ui/ShinyText"
import "@/components/ui/ShinyText.css"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#2d3559] border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Company Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
              <Image src="/SPM_INTEGRAL.png" alt="Logo" width={40} height={40} className="sm:w-12 sm:h-12" />
              <h3 className="text-xl sm:text-2xl font-bold text-yellow-400">
                <ShinyText text="SPM INTEGRAL" disabled={false} speed={3} className="custom-class" />
              </h3>
            </div>
            <div className="text-gray-400 mb-4 max-w-md text-center sm:text-left text-sm sm:text-base">
              <ShinyText text={t("footer.description")} disabled={false} speed={3} className="custom-class" />
            </div>
            <div className="flex justify-center sm:justify-start space-x-4 mt-6 sm:mt-10">
              <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors p-2">
                <ShinyText disabled={false} speed={3}>
                  <Linkedin size={20} />
                </ShinyText>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors p-2">
                <ShinyText disabled={false} speed={3}>
                  <Twitter size={20} />
                </ShinyText>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yellow-400 transition-colors p-2">
                <ShinyText disabled={false} speed={3}>
                  <Github size={20} />
                </ShinyText>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4">
              <ShinyText text={t("footer.quickLinks")} disabled={false} speed={3} className="custom-class" />
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm sm:text-base"
                >
                  <ShinyText text={t("nav.services")} disabled={false} speed={3} className="custom-class" />
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm sm:text-base"
                >
                  <ShinyText text={t("nav.about")} disabled={false} speed={3} className="custom-class" />
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm sm:text-base"
                >
                  <ShinyText text={t("nav.clients")} disabled={false} speed={3} className="custom-class" />
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-yellow-400 transition-colors text-sm sm:text-base"
                >
                  <ShinyText text={t("nav.contact")} disabled={false} speed={3} className="custom-class" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4">
              <ShinyText text={t("footer.contact")} disabled={false} speed={3} />
            </h4>
            <div className="space-y-2">
              <div className="flex items-center justify-center sm:justify-start text-gray-400 text-sm sm:text-base">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <span className="break-all">
                  <ShinyText text="info@spmintegral.com" disabled={false} speed={3} />
                </span>
              </div>
              <div className="flex items-center justify-center sm:justify-start text-gray-400 text-sm sm:text-base">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <span>
                  <ShinyText text="+1 (555) 123-4567" disabled={false} speed={3} />
                </span>
              </div>
              <div className="flex items-center justify-center sm:justify-start text-gray-400 text-sm sm:text-base">
                <MapPin size={16} className="mr-2 flex-shrink-0" />
                <span>
                  <ShinyText text="Bogotá D.C, Colombia" disabled={false} speed={3} />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
          <span>
            <ShinyText disabled={false} speed={3}>
              &copy; {new Date().getFullYear()} SPM INTEGRAL. {t("footer.rights")}
            </ShinyText>
          </span>
        </div>
      </div>
    </footer>
  )
}
