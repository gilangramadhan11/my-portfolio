import { Code2, Database, Layout, Server } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-5 h-5 text-indigo-500" />,
    skills: ["HTML/CSS", "JavaScript", "Tailwind CSS", "Bootstrap CSS", "Vue 3", "React", "Next.js" ],
  },
  {
    title: "Backend Development",
    icon: <Server className="w-5 h-5 text-indigo-500" />,
    skills: ["Laravel", "PHP",],
  },
  {
    title: "Database & Tools",
    icon: <Database className="w-5 h-5 text-indigo-500" />,
    skills: ["MySQL", "phpMyAdmin", "XAMPP", "Git", "GitHub", "Supabase"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-neutral-100">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100/60 text-indigo-600 text-xs font-semibold uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" /> Tentang Saya
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
            Membangun Solusi Web Berkinerja Tinggi & Responsif
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
            Saya seorang Web Developer yang berfokus pada pengembangan ekosistem modern berbasis Website. fokus utama saya adalah merancang dan mengimplementasikan sistem yang efisien, terukur, dan stabil menggunakan *full-stack development*.
          </p>
        </div>

        {/* Tech Stack & Skills */}
        <div className="space-y-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-neutral-900">Teknologi & Keahlian</h3>
            <p className="text-neutral-500 text-sm mt-1">
              Tools dan framework yang biasa saya gunakan dalam membangun aplikasi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="p-6 bg-white rounded-2xl border border-neutral-200/80 shadow-sm hover:shadow-md transition-all space-y-4"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-50">
                    {category.icon}
                  </div>
                  <h4 className="font-bold text-neutral-800 text-lg">
                    {category.title}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-semibold bg-neutral-100 text-neutral-700 rounded-lg hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}