"use client";

import Hero from "@/components/Hero";
import { ArrowRight, Star, Users, Zap, Shield } from "lucide-react";
import Link from "next/link";
import SpotlightCard from "@/components/ui/SpotLightCard";
import CountUp from "@/components/ui/CountUP";
import ShinyText from "@/components/ui/ShinyText";
import StarBorder from "@/components/ui/StarBorder";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Desarrollo Rápido",
      description:
        "Entregamos soluciones en tiempo récord sin comprometer la calidad.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Seguridad Garantizada",
      description:
        "Implementamos las mejores prácticas de seguridad en todos nuestros proyectos.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Soporte 24/7",
      description:
        "Nuestro equipo está disponible para ayudarte cuando lo necesites.",
    },
  ];

  const testimonials = [
    {
      name: "María González",
      company: "TechStart",
      content:
        "SPM INTEGRAL transformó completamente nuestra presencia digital. Excelente trabajo.",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      company: "InnovaCorp",
      content:
        "Profesionales excepcionales. Cumplieron todos los plazos y superaron nuestras expectativas.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      company: "DigitalFlow",
      content:
        "La calidad de su trabajo es impresionante. Definitivamente los recomendaría.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Hero />
    </div>
  );
}
