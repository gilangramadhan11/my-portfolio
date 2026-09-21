import { Mail, MessageSquare } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

interface SocialItem {
  id: string;
  name: string;
  icon: React.ReactNode;
  url: string;
  hoverColorClass: string; // Warna khas brand saat di-hover
}

const socialLinks: SocialItem[] = [
  {
    id: "1",
    name: "GitHub",
    icon: <FaGithub className="w-8 h-8" />,
    url: "https://github.com/gilangramadhan11",
    hoverColorClass: "hover:text-neutral-900 hover:border-neutral-900",
  },
  {
    id: "2",
    name: "LinkedIn",
    icon: <FaLinkedin className="w-8 h-8" />,
    url: "https://www.linkedin.com/in/gilang-ramadan-bb085b222/",
    hoverColorClass: "hover:text-[#0A66C2] hover:border-[#0A66C2]",
  },
  {
    id: "3",
    name: "WhatsApp",
    icon: <FaWhatsapp className="w-8 h-8" />,
    url: "https://wa.me/62895631849680",
    hoverColorClass: "hover:text-[#25D366] hover:border-[#25D366]",
  },
  {
    id: "4",
    name: "Email",
    icon: <Mail className="w-8 h-8" />,
    url: "mailto:gilangramadan1519@gmail.com",
    hoverColorClass: "hover:text-indigo-600 hover:border-indigo-600",
  },
  {
    id: "5",
    name: "Instagram",
    icon: <FaInstagram className="w-8 h-8" />,
    url: "https://www.instagram.com/gilaang90s/",
    hoverColorClass: "hover:text-purple-600 hover:border-purple-600",
  },
  {
    id: "6",
    name: "Facebook",
    icon: <FaFacebook className="w-8 h-8" />,
    url: "https://www.facebook.com/leader197/",
    hoverColorClass: "hover:text-blue-600 hover:border-blue-600",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white border-t border-neutral-100">
      <div className="max-w-4xl mx-auto space-y-12 text-center">
        
        {/* Header Section */}
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Mari Terhubung
          </h2>
          <p className="text-neutral-500 text-sm sm:text-base max-w-md mx-auto">
            Temukan saya di platform berikut atau hubungi langsung untuk kolaborasi proyek.
          </p>
        </div>

        {/* Grid Logo Social Media (Grayscale to Color) */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 pt-4">
          {socialLinks.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              title={item.name}
              aria-label={item.name}
              className={`p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80 text-neutral-400 grayscale transition-all duration-300 hover:grayscale-0 hover:-translate-y-1.5 hover:shadow-lg ${item.hoverColorClass}`}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Simple Footer Text */}
        <div className="pt-12 text-xs text-neutral-400 border-t border-neutral-100">
          <p>© {new Date().getFullYear()} Gilang Ramadhan. Built with Next.js & Tailwind CSS.</p>
        </div>

      </div>
    </section>
  );
}