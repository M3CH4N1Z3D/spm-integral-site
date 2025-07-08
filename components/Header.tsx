"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es")
  }

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/services", label: t("nav.services") },
    { href: "/about", label: t("nav.about") },
    { href: "/clients", label: t("nav.clients") },
    { href: "/contact", label: t("nav.contact") },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#2d3559]/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10">
              <Image
                src="/SPM_INTEGRAL.png"
                alt="SPM INTEGRAL"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 32px, 40px"
              />
            </div>
            <span className="text-lg sm:text-xl font-bold text-[#bccceb]">SPM INTEGRAL</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#bccceb] hover:text-[#a693e5] transition-colors duration-200 font-medium text-sm xl:text-base"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Language Toggle */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-[#a693e5]/10 hover:bg-[#a693e5]/20 transition-colors duration-200 border border-[#a693e5]/30"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4 text-[#a693e5]" />
              <span className="text-[#a693e5] font-medium text-sm">{language.toUpperCase()}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#bccceb] hover:text-[#a693e5] transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#2d3559]/95 backdrop-blur-md border-t border-[#a693e5]/20">
            <nav className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-2 text-[#bccceb] hover:text-[#a693e5] transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Language Toggle */}
              <div className="pt-3 border-t border-[#a693e5]/20">
                <button
                  onClick={() => {
                    toggleLanguage()
                    setIsMenuOpen(false)
                  }}
                  className="flex items-center space-x-2 py-2 text-[#a693e5] hover:text-[#bccceb] transition-colors duration-200"
                >
                  <Globe className="w-4 h-4" />
                  <span className="font-medium">{language === "es" ? "Cambiar a English" : "Switch to Español"}</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
