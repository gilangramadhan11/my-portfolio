import Image from "next/image";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  logo: string;
}

const educationList: EducationItem[] = [
  {
    id: "1",
    degree: "S1 Teknik Informatika",
    institution: "Universitas Bale Bandung",
    location: "Indonesia",
    period: "2016 - 2020",
    description:
      "Berfokus pada pengembangan perangkat lunak, arsitektur basis data, dan rekayasa web modern.",
    logo: "/unibba.png", // Simpan logo di public/education/
  },
  {
    id: "2",
    degree: "Teknik Komputer dan Jaringan",
    institution: "SMK Negeri 1 Majalaya",
    location: "Indonesia",
    period: "2012 - 2015",
    description:
      "Mempelajari dasar-dasar jaringan komputer, pemrograman dasar, dan sistem operasi.",
    logo: "/logosmk.png",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-neutral-100">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/60 text-indigo-600 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" /> Pendidikan
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Latar Belakang Pendidikan
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base">
            Riwayat pendidikan formal yang membentuk fondasi keahlian teknis saya.
          </p>
        </div>

        {/* Daftar Pendidikan */}
        <div className="space-y-6">
          {educationList.map((item) => (
            <div
              key={item.id}
              className="group p-6 sm:p-8 bg-white rounded-2xl border border-neutral-200/80 shadow-xs hover:shadow-md hover:border-neutral-300 transition-all duration-300 flex flex-col sm:flex-row items-start gap-6"
            >
              {/* Logo Container dengan Filter Grayscale to Color */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-xl bg-neutral-100 border border-neutral-200/60 flex items-center justify-center p-2 overflow-hidden">
                <Image
                  src={item.logo}
                  alt={item.institution}
                  width={64}
                  height={64}
                  className="object-contain w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                />
              </div>

              {/* Detail Konten */}
              <div className="flex-1 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="text-xl font-bold text-neutral-900 group-hover:text-indigo-600 transition-colors">
                    {item.degree}
                  </h3>
                  
                  {/* Periode Tahun */}
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                </div>

                {/* Nama Institusi & Lokasi */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-neutral-600 font-medium">
                  <span className="text-neutral-800 font-semibold">{item.institution}</span>
                  <span className="inline-flex items-center gap-1 text-xs text-neutral-400">
                    <MapPin className="w-3 h-3" />
                    {item.location}
                  </span>
                </div>

                {/* Deskripsi */}
                <p className="text-neutral-600 text-sm leading-relaxed pt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}