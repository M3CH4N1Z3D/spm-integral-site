import Hero from "@/components/Hero";
import Link from "next/link";
import { services } from "@/lib/services";

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
    </div>
  );
}
