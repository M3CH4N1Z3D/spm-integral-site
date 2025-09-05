"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function Blog() {
  const { t } = useLanguage();

  return (
    <div className="pt-20 sm:pt-24 pb-8 sm:pb-16 bg-gradient-to-r from-[#2d3559] to-[#393b49]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center m-4 sm:m-8 lg:m-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            <span className="text-[#bccceb]">Nuestro</span>{" "}
            <span className="text-[#a693e5]">Blog</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-[#bccceb] max-w-3xl mx-auto text-center">
            Próximamente...
          </p>
        </div>
      </div>
    </div>
  );
}