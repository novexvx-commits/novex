import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Calendar, Building2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const categories = ["all", "web", "mobile", "security", "networking"] as const;
type Category = typeof categories[number];

/* ─── Change `image` to your own URL to replace the placeholder ─── */
const projects = [
  {
    id: 1,
    titleAr: "منصة إدارة المستشفيات",
    titleEn: "Hospital Management Platform",
    category: "web" as Category,
    clientAr: "مجموعة الصحة العربية",
    clientEn: "Arab Health Group",
    year: "2024",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80",
    descAr: "منصة متكاملة لإدارة المستشفيات تشمل جدولة المواعيد وإدارة السجلات الطبية والفوترة الإلكترونية.",
    descEn: "An integrated hospital management platform covering appointment scheduling, medical records, and electronic billing.",
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
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
    descAr: "تطبيق جوال متكامل للخدمات المصرفية يدعم التحويلات الفورية وإدارة الحسابات والدفع الإلكتروني.",
    descEn: "A comprehensive mobile banking app supporting instant transfers, account management, and electronic payments.",
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
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&q=80",
    descAr: "نظام أمني شامل متعدد الطبقات يشمل مراقبة التهديدات في الوقت الفعلي وكشف الاختراق.",
    descEn: "A comprehensive multi-layered security system with real-time threat monitoring and intrusion detection.",
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
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    descAr: "تصميم وتنفيذ بنية شبكية متكاملة لمجمع صناعي كبير يشمل أكثر من 2000 نقطة اتصال.",
    descEn: "Design and implementation of integrated network infrastructure for a large industrial complex with 2,000+ connection points.",
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
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80",
    descAr: "منصة تعليمية تفاعلية مع دعم البث الحي وإدارة المحتوى وتتبع التقدم.",
    descEn: "An interactive educational platform with live streaming support, content management, and progress tracking.",
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
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&q=80",
    descAr: "تطبيق لتتبع ومراقبة أسطول المركبات في الوقت الفعلي مع تنبيهات ذكية وتحليل المسارات.",
    descEn: "A real-time fleet tracking app with smart alerts and route analysis.",
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
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            {t("projects.title")}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-foreground mb-4">
            {t("projects.title")}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base max-w-2xl mx-auto">
            {t("projects.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="sticky top-16 lg:top-20 z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
          <div className="flex items-center gap-0 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                data-testid={`filter-${cat}`}
                className={`relative px-6 py-4 text-sm font-semibold transition-colors whitespace-nowrap ${
                  activeFilter === cat
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t(filterKeys[cat])}
                {activeFilter === cat && (
                  <motion.span
                    layoutId="tab-underline"
                    className="absolute bottom-0 inset-x-3 h-0.5 bg-primary rounded-full"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section ref={gridReveal.ref} className="py-16 px-4 max-w-7xl mx-auto">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((proj) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-400 cursor-pointer"
                onClick={() => setSelected(proj)}
                data-testid={`project-card-${proj.id}`}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden bg-muted">
                  <img
                    src={proj.image}
                    alt={lang === "ar" ? proj.titleAr : proj.titleEn}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Category badge */}
                  <div className="absolute top-3 start-3">
                    <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-foreground text-xs font-bold rounded-full capitalize border border-border">
                      {proj.category}
                    </span>
                  </div>
                  {/* Year badge */}
                  <div className="absolute top-3 end-3">
                    <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-foreground text-xs font-semibold rounded-full border border-border flex items-center gap-1">
                      <Calendar size={10} />
                      {proj.year}
                    </span>
                  </div>
                  {/* Hover reveal overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 inset-x-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="inline-flex items-center gap-1.5 text-white text-xs font-semibold bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/30">
                      <ExternalLink size={11} />
                      {t("projects.viewdetails")}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="font-bold text-base text-foreground mb-1.5 group-hover:text-primary transition-colors">
                    {lang === "ar" ? proj.titleAr : proj.titleEn}
                  </h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <Building2 size={11} />
                    {lang === "ar" ? proj.clientAr : proj.clientEn}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Detail Modal */}
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
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="bg-background border border-border rounded-2xl max-w-lg w-full shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              data-testid="project-modal"
            >
              {/* Modal image */}
              <div className="relative h-48 overflow-hidden">
                <img src={selected.image} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  data-testid="close-project-modal"
                  className="absolute top-3 end-3 p-2 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white transition-colors"
                >
                  <X size={16} />
                </button>
                <div className="absolute bottom-4 start-5">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full capitalize border border-white/30">
                    {selected.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-black text-foreground mb-3">
                  {lang === "ar" ? selected.titleAr : selected.titleEn}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {lang === "ar" ? selected.descAr : selected.descEn}
                </p>
                <div className="grid grid-cols-2 gap-3 mb-5">
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
