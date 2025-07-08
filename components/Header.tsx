"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import RotatingText from "./ui/RotatingText";
import GooeyNav from "./ui/GooeyNav";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const items = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.services"), href: "/services" },
    { label: t("nav.about"), href: "/about" },
    { label: t("nav.clients"), href: "/clients" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <header className="fixed top-0 w-full bg-[rgba(45,53,59,0.3)] backdrop-blur-sm border-b border-gray-800 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <Link
            href="/"
            className="flex flex-row items-center text-lg sm:text-xl lg:text-2xl font-bold text-[#bccceb]"
          >
            <Image
              src="/SPM_INTEGRAL.png"
              alt="Logo"
              width={90}
              height={90}
              className="drop-shadow-[0px_0px_10px_rgba(216,214,242,1)] m-4 w-[15vw] lg:w-[5vw] h-auto"
            />
            <span className="hidden sm:inline leading-none translate-y-[-2px]">
              SPM
            </span>
            <div className="hidden sm:block items-center">
              <RotatingText
                texts={["INTEGRAL", "CREA", "DISEÑA", "DESARROLLA", "GESTIONA"]}
                mainClassName="px-1 sm:px-2 md:px-3 text-[#a693e5] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-lg sm:text-xl lg:text-2xl font-bold leading-none"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={3000}
              />
            </div>
          </Link>

          <div className="flex items-center space-x-4">
            {/* Desktop Language Switch */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={toggleLanguage}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#2d3559] transition-colors focus:outline-none focus:ring-2 focus:ring-[#a693e5] focus:ring-offset-2"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-[#a693e5] transition-transform ${
                    language === "en" ? "translate-x-6" : "translate-x-1"
                  }`}
                />
                <span className="absolute left-1 text-xs font-medium text-[#bccceb]">
                  ES
                </span>
                <span className="absolute right-1 text-xs font-medium text-[#bccceb]">
                  EN
                </span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div
              className="hidden lg:block"
              style={{ height: "7vh", position: "relative" }}
            >
              <GooeyNav
                items={items}
                particleCount={15}
                particleDistances={[90, 10]}
                particleR={100}
                initialActiveIndex={0}
                animationTime={300}
                timeVariance={300}
                colors={[1, 2, 3, 1, 2, 3, 1, 4]}
              />
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-gray-300 hover:text-yellow-400 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col space-y-2">
              {items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block py-3 px-4 text-gray-300 hover:text-yellow-400 hover:bg-gray-800 rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Language Switch */}
              <div className="flex items-center justify-between py-3 px-4 text-gray-300">
                <span className="text-sm font-medium">Idioma / Language</span>
                <button
                  onClick={toggleLanguage}
                  className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#2d3559] transition-colors focus:outline-none focus:ring-2 focus:ring-[#a693e5] focus:ring-offset-2"
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-[#a693e5] transition-transform ${
                      language === "en" ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                  <span className="absolute left-1 text-xs font-medium text-[#bccceb]">
                    ES
                  </span>
                  <span className="absolute right-1 text-xs font-medium text-[#bccceb]">
                    EN
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
