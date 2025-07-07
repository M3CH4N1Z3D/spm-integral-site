"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import RotatingText from "./ui/RotatingText";
import GooeyNav from "./ui/GooeyNav";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const items = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/services" },
    { label: "Nosotros", href: "/about" },
    { label: "Clientes", href: "/clients" },
    { label: "Contacto", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-[rgba(45,53,59,0.3)] backdrop-blur-sm border-b border-gray-800 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="flex flex-row items-center text-2xl font-bold text-[#bccceb]"
          >
            <Image
              src="/SPM_INTEGRAL.png"
              alt="Logo"
              width={100}
              height={100}
              className="drop-shadow-[0px_0px_10px_rgba(216,214,242,1)] m-2"
            />
            SPM
            <RotatingText
              texts={["INTEGRAL", "CREA", "DISEÑA", "DESARROLLA", "GESTIONA"]}
              mainClassName="px-2 sm:px-2 md:px-3 text-[#a693e5] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
          </Link>

          {/* Desktop Navigation */}
          <div style={{ height: "7vh", position: "relative" }}>
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
            className="md:hidden text-gray-300 hover:text-yellow-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            {items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
