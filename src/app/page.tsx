import { Import } from "lucide-react";
import Image from "next/image";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Portfolio />
      <Education />
      <Experience />
      <Contact />
    </main>
  );
}
