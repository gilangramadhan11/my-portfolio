import Image from "next/image";
import { FolderGit2, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Admin Dashboard Football News",
    description: "Dashboard manajemen konten untuk mengelola artikel berita sepak bola, kategori liga, serta integrasi API berita real-time.",
    image: "/portfolio/admin_dashboard_football.png", 
    techStack: ["Laravel", "Tailwind CSS", "MySQL"],
    demoUrl: "https://footballnews-production.up.railway.app/",
    githubUrl: "#",
  },
  {
    id: "2",
    title: "Football News Web Application",
    description: "Platform berita sepak bola modern dengan manajemen artikel interaktif dan integrasi RESTful API.",
    image: "/portfolio/frontend_football.png", 
    techStack: ["React", "Next.js", "Tailwind CSS", "Laravel API"],
    demoUrl: "https://football-news-web-five.vercel.app/",
    githubUrl: "#",
  },
  {
    id: "3",
    title: "Inventory Management System",
    description: "Aplikasi pencatatan stok barang dengan fitur pelacakan barang masuk/keluar, dan dashboard analitik berbasis grafik.",
    image: "/portfolio/inventory.PNG",
    techStack: ["Vue 3", "Tailwind CSS", "Supabase"],
    demoUrl: "https://e-commerce-pc-hardware.vercel.app/",
    githubUrl: "#",
  },
  {
  id: "4",
  title: "Personal Portfolio Website",
  description: "Website portofolio interaktif dan responsif yang dibangun untuk menampilkan profil, keahlian, dan hasil karya web development",
  image: "/portfolio/portfolio.png",
  techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  demoUrl: "https://my-portfolio-phi-drab-17.vercel.app/", 
  githubUrl: "#",
}
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-4 bg-neutral-50">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/60 text-indigo-600 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" /> Portofolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Proyek Pilihan
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base">
            Beberapa hasil karya dan aplikasi web yang telah saya kembangkan.
          </p>
        </div>

        {/* Grid Kartu Proyek */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-neutral-50 rounded-2xl border border-neutral-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image Preview Container */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-neutral-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay Hover Effect */}
                <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-neutral-900 font-semibold text-xs shadow-md hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Live View
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-neutral-900/80 text-white backdrop-blur-md hover:bg-neutral-900 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Konten Teks Kartu */}
              <div className="flex flex-col flex-1 p-6 space-y-4">
                <h3 className="text-xl font-bold text-neutral-900 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-neutral-600 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-semibold bg-white border border-neutral-200 text-neutral-700 rounded-md shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Mobile Direct Action Buttons */}
                <div className="flex items-center gap-4 pt-4 border-t border-neutral-200/60 md:hidden">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:underline"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live Preview
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-600 hover:text-neutral-900"
                    >
                      <FaGithub className="w-3.5 h-3.5" /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}