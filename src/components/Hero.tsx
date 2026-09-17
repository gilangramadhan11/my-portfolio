import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 bg-neutral-50">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-70"></div>
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Kiri: Teks & Call to Action */}
        <div className="flex-1 text-center md:text-left space-y-6 z-10">
          

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-900 tracking-tight leading-tight">
            Halo, Saya <br />
            <span className="text-indigo-500">Gilang Ramadhan</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Seorang <strong className="text-neutral-800">Web Developer</strong> yang berfokus membangun aplikasi web modern, responsif, dan ramah pengguna dengan performa optimal.
          </p>

          {/* Tombol CTA */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 text-white font-medium text-sm hover:bg-neutral-800 transition-all shadow-md hover:shadow-lg"
            >
              Lihat Proyek <ArrowUpRight className="w-4 h-4" />
            </a>
            
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-300 text-neutral-700 font-medium text-sm hover:bg-neutral-100 hover:text-neutral-900 transition-all"
            >
              Hubungi Saya
            </a>
          </div>

          {/* Sosial Media Icons */}
          <div className="flex items-center justify-center md:justify-start gap-4 pt-4 text-neutral-600">
            <a
              href="https://github.com/gilangramadhan11"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-neutral-200 hover:border-neutral-400 hover:text-neutral-900 transition-all"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-neutral-200 hover:border-neutral-400 hover:text-neutral-900 transition-all"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:gilangramadan1519@gmail.com"
              className="p-2 rounded-full border border-neutral-200 hover:border-neutral-400 hover:text-neutral-900 transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Kanan: Foto Profil */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Dekorasi Background Blob/Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-300 to-violet-400 blur-2xl opacity-40 transform rotate-6"></div>
            
            {/* Container Foto */}
            <div className="relative w-full h-full">
              {/* Masukkan file foto profil kamu di folder public/profile.jpg */}
              <Image
                src="/profile1.png"
                alt="Gilang Ramadhan"
                fill
                priority
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}