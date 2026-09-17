import Image from "next/image";
import { Briefcase } from "lucide-react";

interface ExperienceItem {
  id: string;
  companyName: string;
  logo: string;
  websiteUrl?: string;
}

const experiences: ExperienceItem[] = [
  {
    id: "1",
    companyName: "PT. Kaldu Sari Nabati Indonesia",
    logo: "/Nabati.png", // Simpan logo di public/experience/
    websiteUrl: "https://www.nabatigroup.com/",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-neutral-50">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/60 text-indigo-600 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" /> Pengalaman
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Pengalaman Kerja & Kolaborasi
          </h2>
        </div>

        {/* Grid Logo Pengalaman */}
        <div className="items-center justify-center">
          {experiences.map((item) => {
            const Content = (
              <div className="group relative h-28 sm:h-32 p-6 transition-all duration-300 flex items-center justify-center overflow-hidden">
                <Image
                  src={item.logo}
                  alt={item.companyName}
                  width={120}
                  height={60}
                  className="object-contain max-h-12 w-auto grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                />
              </div>
            );

            return item.websiteUrl ? (
              <a
                key={item.id}
                href={item.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={item.companyName}
              >
                {Content}
              </a>
            ) : (
              <div key={item.id} title={item.companyName}>
                {Content}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}