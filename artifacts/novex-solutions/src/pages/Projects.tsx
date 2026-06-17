import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Code2, Shield, Network, Smartphone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categories = ["all", "web", "mobile", "security", "networking"] as const;
type Category = typeof categories[number];

const projects = [
  {
    id: 1,
    titleAr: "منصة إدارة المستشفيات",
    titleEn: "Hospital Management Platform",
    category: "web" as Category,
    clientAr: "مجموعة الصحة العربية",
    clientEn: "Arab Health Group",
    year: "2024",
    colorClass: "from-blue-500/20 to-indigo-600/20",
    icon: Code2,
    descAr: "منصة متكاملة لإدارة المستشفيات تشمل جدولة المواعيد، إدارة السجلات الطبية، والفوترة الإلكترونية. تخدم أكثر من 50 مستشفى في المنطقة.",
    descEn: "An integrated hospital management platform covering appointment scheduling, medical records management, and electronic billing. Serving over 50 hospitals in the region.",
    techStack: ["React", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    id: 2,
    titleAr: "تطبيق الخدمات المصرفية",
    titleEn: "Banking Services App",
    category: "mobile" as Category,
    clientAr: "بنك الأفق",
    clientEn: "Horizon Bank",
    year: "2024",
    colorClass: "from-cyan-500/20 to-teal-600/20",
    icon: Smartphone,
    descAr: "تطبيق جوال متكامل للخدمات المصرفية يدعم التحويلات الفورية، إدارة الحسابات، والدفع الإلكتروني. حائز على جائزة أفضل تطبيق مصرفي عربي 2024.",
    descEn: "A comprehensive mobile banking app supporting instant transfers, account management, and electronic payments. Winner of Best Arab Banking App 2024.",
    techStack: ["React Native", "TypeScript", "Node.js", "Redis"],
  },
  {
    id: 3,
    titleAr: "نظام الأمن المتكامل",
    titleEn: "Integrated Security System",
    category: "security" as Category,
    clientAr: "وزارة التقنية",
    clientEn: "Ministry of Technology",
    year: "2023",
    colorClass: "from-red-500/20 to-orange-600/20",
    icon: Shield,
    descAr: "نظام أمني شامل متعدد الطبقات يشمل مراقبة التهديدات في الوقت الفعلي، كشف الاختراق، والاستجابة التلقائية للحوادث.",
    descEn: "A comprehensive multi-layered security system including real-time threat monitoring, intrusion detection, and automatic incident response.",
    techStack: ["Python", "Machine Learning", "Elasticsearch", "Kibana"],
  },
  {
    id: 4,
    titleAr: "بنية شبكية للمؤسسة",
    titleEn: "Enterprise Network Infrastructure",
    category: "networking" as Category,
    clientAr: "شركة الطاقة العربية",
    clientEn: "Arab Energy Company",
    year: "2023",
    colorClass: "from-green-500/20 to-emerald-600/20",
    icon: Network,
    descAr: "تصميم وتنفيذ بنية شبكية متكاملة لمجمع صناعي كبير بمساحة 500,000 متر مربع يشمل أكثر من 2000 نقطة اتصال.",
    descEn: "Design and implementation of integrated network infrastructure for a large industrial complex spanning 500,000 sqm with over 2,000 connection points.",
    techStack: ["Cisco", "Juniper", "SD-WAN", "VPN"],
  },
  {
    id: 5,
    titleAr: "منصة التعليم الإلكتروني",
    titleEn: "E-Learning Platform",
    category: "web" as Category,
    clientAr: "أكاديمية المستقبل",
    clientEn: "Future Academy",
    year: "2023",
    colorClass: "from-purple-500/20 to-violet-600/20",
    icon: Code2,
    descAr: "منصة تعليمية تفاعلية تخدم أكثر من 100,000 طالب في العالم العربي، مع دعم للبث الحي، وإدارة المحتوى، وتتبع التقدم.",
    descEn: "An interactive educational platform serving over 100,000 students in the Arab world, with live streaming support, content management, and progress tracking.",
    techStack: ["Next.js", "WebRTC", "AWS", "PostgreSQL"],
  },
  {
    id: 6,
    titleAr: "تطبيق تتبع الأسطول",
    titleEn: "Fleet Tracking App",
    category: "mobile" as Category,
    clientAr: "شركة اللوجستيات",
    clientEn: "Logistics Company",
    year: "2022",
    colorClass: "from-amber-500/20 to-yellow-600/20",
    icon: Smartphone,
    descAr: "تطبيق لتتبع ومراقبة أسطول المركبات في الوقت الفعلي مع خصائص التنبيهات الذكية وتحليل مسارات السير.",
    descEn: "An app for real-time fleet vehicle tracking and monitoring with smart alert features and route analysis.",
    techStack: ["React Native", "Google Maps API", "WebSocket", "Node.js"],
  },
];

const filterKeys: Record<Category, string> = {
  all: "projects.filter.all",
  web: "projects.filter.web",
  mobile: "projects.filter.mobile",
  security: "projects.filter.security",
  networking: "projects.filter.networking",
};

export default function Projects() {
  const { t, lang } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);
  const gridReveal = useScrollReveal();

  const filtered = projects.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-semibold text-sm uppercase tracking-widest mb-4"
          >
            {t("projects.title")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-foreground mb-4"
          >
            {t("projects.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base max-w-2xl mx-auto"
          >
            {t("projects.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-16 lg:top-20 z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              data-testid={`filter-${cat}`}
              className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeFilter === cat
                  ? "text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeFilter === cat && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 bg-primary rounded-full"
                />
              )}
              <span className="relative z-10">{t(filterKeys[cat])}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section ref={gridReveal.ref} className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((proj) => {
              const Icon = proj.icon;
              return (
                <motion.div
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer"
                  style={{ perspective: 1200 }}
                  whileHover={{ rotateY: lang === "ar" ? -3 : 3, rotateX: -2, scale: 1.02 }}
                  onClick={() => setSelected(proj)}
                  data-testid={`project-card-${proj.id}`}
                >
                  <div className={`h-44 bg-gradient-to-br ${proj.colorClass} flex items-center justify-center relative`}>
                    <Icon size={52} className="text-foreground/10" />
                    <div className="absolute top-3 end-3">
                      <span className="px-3 py-1 bg-background/80 backdrop-blur-sm text-foreground text-xs font-semibold rounded-full">
                        {proj.year}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3 capitalize">
                      {proj.category}
                    </span>
                    <h3 className="font-bold text-lg text-foreground mb-1">
                      {lang === "ar" ? proj.titleAr : proj.titleEn}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {lang === "ar" ? proj.clientAr : proj.clientEn}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-primary/85 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-bold text-sm bg-white/20 px-5 py-2.5 rounded-xl backdrop-blur-sm flex items-center gap-2">
                      <ExternalLink size={14} />
                      {t("projects.viewdetails")}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
            data-testid="project-modal-backdrop"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-background border border-border rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              data-testid="project-modal"
            >
              <div className={`h-32 bg-gradient-to-br ${selected.colorClass} flex items-center justify-between px-7`}>
                <selected.icon size={40} className="text-foreground/20" />
                <button
                  onClick={() => setSelected(null)}
                  data-testid="close-project-modal"
                  className="p-2 rounded-full bg-background/20 hover:bg-background/40 transition-colors"
                >
                  <X size={18} className="text-foreground" />
                </button>
              </div>
              <div className="p-7">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3 capitalize">
                  {selected.category}
                </span>
                <h2 className="text-xl font-black text-foreground mb-4">
                  {lang === "ar" ? selected.titleAr : selected.titleEn}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {lang === "ar" ? selected.descAr : selected.descEn}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-muted/50 rounded-xl p-4">
                    <p className="text-xs text-muted-foreground mb-1">{t("projects.client")}</p>
                    <p className="text-sm font-semibold text-foreground">
                      {lang === "ar" ? selected.clientAr : selected.clientEn}
                    </p>
                  </div>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <p className="text-xs text-muted-foreground mb-1">{t("projects.year")}</p>
                    <p className="text-sm font-semibold text-foreground">{selected.year}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selected.techStack.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-lg">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
