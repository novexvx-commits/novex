import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Code2, Shield, Network, Zap, HeadphonesIcon, BookOpen,
  Users, Clock, CheckCircle2, ChevronRight, ArrowUpRight,
  Sparkles, Globe, Lock,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useScrollReveal, useCountUp } from "@/hooks/useScrollReveal";
import ParticleCanvas from "@/components/sections/ParticleCanvas";
import TypewriterText from "@/components/sections/TypewriterText";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

function StatCard({ target, suffix, label, color }: { target: number; suffix: string; label: string; color: string }) {
  const { ref, visible } = useScrollReveal();
  const count = useCountUp(target, visible);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={visible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col items-center justify-center p-8 rounded-2xl border border-border bg-card overflow-hidden group hover:border-primary/40 transition-all"
    >
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${color}`} />
      <div className="relative z-10 text-4xl lg:text-5xl font-black text-primary mb-2">
        {count}<span className="text-secondary">{suffix}</span>
      </div>
      <div className="relative z-10 text-sm text-muted-foreground font-medium text-center">{label}</div>
    </motion.div>
  );
}

const serviceItems = [
  {
    icon: Code2,
    key: "sw",
    span: "lg:col-span-2",
    gradient: "from-blue-500/10 to-indigo-500/5",
    iconGrad: "from-blue-500 to-indigo-600",
    accent: "blue",
    features: { ar: ["تطبيقات ويب", "تطبيقات موبايل", "API & Backend"], en: ["Web Apps", "Mobile Apps", "API & Backend"] },
  },
  {
    icon: Shield,
    key: "cyber",
    span: "lg:col-span-1",
    gradient: "from-red-500/10 to-orange-500/5",
    iconGrad: "from-red-500 to-orange-600",
    accent: "red",
    features: { ar: ["اختبار الاختراق", "مراقبة 24/7"], en: ["Pen Testing", "24/7 Monitoring"] },
  },
  {
    icon: Network,
    key: "net",
    span: "lg:col-span-1",
    gradient: "from-green-500/10 to-teal-500/5",
    iconGrad: "from-green-500 to-teal-600",
    accent: "green",
    features: { ar: ["شبكات مؤسسية", "VPN & WAN"], en: ["Enterprise Networks", "VPN & WAN"] },
  },
  {
    icon: Zap,
    key: "digital",
    span: "lg:col-span-1",
    gradient: "from-amber-500/10 to-yellow-500/5",
    iconGrad: "from-amber-500 to-yellow-500",
    accent: "amber",
    features: { ar: ["أتمتة العمليات", "تحليل البيانات"], en: ["Process Automation", "Data Analytics"] },
  },
  {
    icon: BookOpen,
    key: "consult",
    span: "lg:col-span-1",
    gradient: "from-purple-500/10 to-violet-500/5",
    iconGrad: "from-purple-500 to-violet-600",
    accent: "purple",
    features: { ar: ["التخطيط الاستراتيجي", "إدارة المشاريع"], en: ["Strategic Planning", "Project Management"] },
  },
  {
    icon: HeadphonesIcon,
    key: "support",
    span: "lg:col-span-2",
    gradient: "from-cyan-500/10 to-sky-500/5",
    iconGrad: "from-cyan-500 to-sky-600",
    accent: "cyan",
    features: { ar: ["دعم 24/7/365", "صيانة وقائية", "SLA مضمون"], en: ["24/7/365 Support", "Preventive Maintenance", "Guaranteed SLA"] },
  },
];

const testimonials = [
  { name: "أحمد المنصوري", nameEn: "Ahmed Al Mansouri", role: "CTO", company: "Advanced Tech Co.", text: "نوفيكس حولت بنيتنا التحتية بالكامل في وقت قياسي. فريق محترف يتفهم الاحتياجات التقنية بعمق.", textEn: "NOVEX transformed our entire infrastructure in record time. A team that truly understands technical needs at depth." },
  { name: "سارة الخالدي", nameEn: "Sara Al Khalidi", role: "CEO", company: "Elite Group", text: "الدعم المستمر والالتزام بالمواعيد جعلنا نثق بهم شريكاً استراتيجياً دائماً.", textEn: "Their support and reliability made them our permanent strategic partner of choice." },
  { name: "خالد العمري", nameEn: "Khaled Al Omari", role: "Operations Director", company: "Digital Bank", text: "حلول الأمن السيبراني من نوفيكس أنقذت بياناتنا أكثر من مرة. استثمار يستحق كل ريال.", textEn: "NOVEX's cybersecurity saved our data multiple times. An investment worth every penny." },
];

const techStack = ["React", "Node.js", "Python", "TypeScript", "Docker", "Kubernetes", "AWS", "PostgreSQL", "Redis", "GraphQL", "Next.js", "Vue.js", "Rust", "Go"];

const featuredProjects = [
  { titleAr: "منصة إدارة المستشفيات", titleEn: "Hospital Management Platform", cat: "Web", year: "2024", color: "from-blue-600/30 via-indigo-600/20 to-transparent", icon: Code2 },
  { titleAr: "تطبيق الخدمات المصرفية", titleEn: "Banking Services App", cat: "Mobile", year: "2024", color: "from-cyan-600/30 via-teal-600/20 to-transparent", icon: Globe },
  { titleAr: "نظام الأمن المتكامل", titleEn: "Integrated Security System", cat: "Security", year: "2023", color: "from-purple-600/30 via-violet-600/20 to-transparent", icon: Lock },
];

export default function Home() {
  const { t, lang } = useLanguage();
  const statsReveal = useScrollReveal();
  const servicesReveal = useScrollReveal();
  const whyReveal = useScrollReveal();
  const testimonialsReveal = useScrollReveal();

  const heroTypePhrases =
    lang === "ar"
      ? ["تطوير برمجيات متطورة", "حلول أمن سيبراني", "شبكات ذكية", "تحول رقمي حقيقي"]
      : ["Advanced Software Development", "Cybersecurity Solutions", "Smart Networking", "Real Digital Transformation"];

  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/4 start-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.4), transparent 70%)" }} />
        <ParticleCanvas />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-36 text-center">

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-8 border border-primary/25 backdrop-blur-sm">
              <Sparkles size={12} className="animate-pulse" />
              {t("app.tagline")}
              <Sparkles size={12} className="animate-pulse" />
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-6"
          >
            <span className="block text-foreground">{t("hero.title1")}</span>
            <span className="block gradient-text pb-2">{t("hero.title2")}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl font-semibold text-primary/80 min-h-[1.75rem] mb-4"
          >
            <TypewriterText phrases={heroTypePhrases} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="/services">
              <button
                data-testid="hero-cta1"
                className="group relative px-8 py-4 bg-primary text-primary-foreground font-bold rounded-2xl overflow-hidden transition-all hover:shadow-xl hover:shadow-primary/30 hover:scale-105 text-sm"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-blue-500 to-primary bg-size-200 group-hover:bg-right transition-all duration-500" />
                <span className="relative flex items-center gap-2">
                  {t("hero.cta1")} <ArrowUpRight size={16} />
                </span>
              </button>
            </Link>
            <Link href="/contact">
              <button
                data-testid="hero-cta2"
                className="px-8 py-4 border border-border bg-background/50 backdrop-blur-sm text-foreground font-bold rounded-2xl hover:border-primary/50 hover:bg-primary/5 transition-all text-sm"
              >
                {t("hero.cta2")}
              </button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 start-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-5 h-8 border-2 border-border/60 rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ── STATS ─────────────────────────────────────────── */}
      <section ref={statsReveal.ref} className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard target={200} suffix="+" label={t("stats.clients")} color="from-blue-500/10 to-indigo-500/5" />
          <StatCard target={450} suffix="+" label={t("stats.projects")} color="from-cyan-500/10 to-teal-500/5" />
          <StatCard target={9} suffix="+" label={t("stats.years")} color="from-purple-500/10 to-violet-500/5" />
          <StatCard target={99} suffix="%" label={t("stats.uptime")} color="from-green-500/10 to-emerald-500/5" />
        </div>
      </section>

      {/* ── SERVICES BENTO ────────────────────────────────── */}
      <section ref={servicesReveal.ref} className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={servicesReveal.visible ? "show" : "hidden"}
            className="mb-14 text-center"
          >
            <motion.p variants={fadeUp} className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">
              {t("services.title")}
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl font-black text-foreground mb-4">
              {t("services.subtitle")}
            </motion.h2>
          </motion.div>

          {/* Bento Grid */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={servicesReveal.visible ? "show" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {serviceItems.map(({ icon: Icon, key, span, gradient, iconGrad, features }) => (
              <motion.div
                key={key}
                variants={fadeUp}
                className={`group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-all duration-300 cursor-default ${span}`}
                whileHover={{ y: -3 }}
              >
                {/* Gradient layer */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10 p-7">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${iconGrad} flex items-center justify-center mb-5 shadow-lg`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{t(`services.${key}.title`)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t(`services.${key}.desc`)}</p>
                  <div className="flex flex-wrap gap-2">
                    {(lang === "ar" ? features.ar : features.en).map((f) => (
                      <span key={f} className="inline-flex items-center gap-1 px-2.5 py-1 bg-muted/60 text-muted-foreground text-xs rounded-lg font-medium">
                        <CheckCircle2 size={10} className="text-primary" />
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 inset-x-0 h-0.5 bg-gradient-to-r ${iconGrad} opacity-0 group-hover:opacity-100 transition-opacity`} />
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 text-center">
            <Link href="/services">
              <button data-testid="services-all-btn" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border text-sm font-semibold text-muted-foreground hover:text-foreground hover:border-primary/40 transition-all">
                {t("services.learnmore")} <ChevronRight size={15} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY NOVEX ─────────────────────────────────────── */}
      <section ref={whyReveal.ref} className="py-24 relative overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="absolute inset-0 grid-bg opacity-20" />

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div variants={stagger} initial="hidden" animate={whyReveal.visible ? "show" : "hidden"} className="mb-14 text-center">
            <motion.p variants={fadeUp} className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">{t("why.title")}</motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-5xl font-black">{t("why.subtitle")}</motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            animate={whyReveal.visible ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {[
              { icon: Users, titleKey: "why.expert", descKey: "why.expert.desc", grad: "from-blue-500 to-indigo-600" },
              { icon: Clock, titleKey: "why.fast", descKey: "why.fast.desc", grad: "from-cyan-500 to-teal-600" },
              { icon: Shield, titleKey: "why.secure", descKey: "why.secure.desc", grad: "from-red-500 to-orange-600" },
              { icon: HeadphonesIcon, titleKey: "why.support", descKey: "why.support.desc", grad: "from-purple-500 to-violet-600" },
            ].map(({ icon: Icon, titleKey, descKey, grad }) => (
              <motion.div
                key={titleKey}
                variants={fadeUp}
                className="group bg-card border border-border rounded-2xl p-7 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all"
                whileHover={{ y: -4 }}
              >
                <div className={`w-13 h-13 w-14 h-14 rounded-2xl bg-gradient-to-br ${grad} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-base">{t(titleKey)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(descKey)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ─────────────────────────────── */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 text-center">
            <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">{t("projects.title")}</p>
            <h2 className="text-3xl sm:text-5xl font-black">{t("projects.subtitle")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {featuredProjects.map((proj, i) => {
              const Icon = proj.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.6 }}
                  className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/8 transition-all duration-500 cursor-pointer"
                  whileHover={{ y: -5 }}
                >
                  <div className={`relative h-52 bg-gradient-to-br ${proj.color} flex items-center justify-center overflow-hidden`}>
                    <div className="absolute inset-0 grid-bg opacity-20" />
                    <Icon size={56} className="text-white/20 group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 end-4 flex items-center gap-1.5 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-white/70 text-xs font-medium">{proj.year}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-lg mb-3 uppercase tracking-wide">
                      {proj.cat}
                    </span>
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                      {lang === "ar" ? proj.titleAr : proj.titleEn}
                    </h3>
                  </div>
                  <div className="absolute inset-0 bg-primary/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <Link href="/projects">
                      <span className="flex items-center gap-2 text-white font-bold text-sm bg-white/20 px-5 py-3 rounded-xl border border-white/30">
                        <ArrowUpRight size={16} />
                        {t("projects.viewdetails")}
                      </span>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link href="/projects">
              <button data-testid="view-all-projects" className="px-7 py-3.5 rounded-xl border border-border text-sm font-bold text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all">
                {lang === "ar" ? "كل المشاريع" : "View All Projects"} →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────── */}
      <section ref={testimonialsReveal.ref} className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">{t("testimonials.title")}</p>
            <h2 className="text-3xl sm:text-5xl font-black">{t("testimonials.subtitle")}</h2>
          </div>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={testimonialsReveal.visible ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {testimonials.map((tm, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="relative bg-card border border-border rounded-2xl p-7 hover:border-primary/30 hover:shadow-xl transition-all"
                whileHover={{ y: -3 }}
              >
                {/* Quote mark */}
                <div className="absolute top-5 end-6 text-5xl font-black text-primary/10 leading-none select-none">"</div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => <span key={s} className="text-amber-400 text-sm">★</span>)}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 relative z-10">
                  "{lang === "ar" ? tm.text : tm.textEn}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center font-black text-primary text-sm border border-primary/20">
                    {(lang === "ar" ? tm.name : tm.nameEn).charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{lang === "ar" ? tm.name : tm.nameEn}</p>
                    <p className="text-xs text-muted-foreground">{tm.role} — {tm.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TECH MARQUEE ──────────────────────────────────── */}
      <section className="py-14 overflow-hidden border-y border-border">
        <div className="text-center mb-8 px-4">
          <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-1">{t("tech.title")}</p>
          <p className="text-muted-foreground text-sm">{t("tech.subtitle")}</p>
        </div>
        <div className="relative flex overflow-hidden">
          <motion.div
            animate={{ x: lang === "ar" ? [0, "50%"] : [0, "-50%"] }}
            transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
            className="flex gap-4 shrink-0"
          >
            {[...techStack, ...techStack].map((tech, i) => (
              <div key={i} className="shrink-0 px-5 py-2.5 bg-card border border-border rounded-xl text-sm font-semibold text-muted-foreground whitespace-nowrap hover:border-primary/30 hover:text-foreground transition-colors">
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────── */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(226,80%,55%) 50%, hsl(192,95%,45%) 100%)" }} />
        <div className="absolute inset-0 grid-bg opacity-10" />
        <div className="absolute top-0 start-1/4 w-64 h-64 rounded-full blur-3xl opacity-30" style={{ background: "rgba(255,255,255,0.15)" }} />

        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-black mb-4"
          >
            {t("cta.title")}
          </motion.h2>
          <p className="text-white/75 mb-10 text-base max-w-xl mx-auto">{t("cta.subtitle")}</p>
          <Link href="/contact">
            <button
              data-testid="cta-button"
              className="inline-flex items-center gap-2 px-10 py-4 bg-white text-primary font-black rounded-2xl hover:bg-white/90 transition-all hover:scale-105 shadow-xl text-sm"
            >
              {t("cta.button")} <ArrowUpRight size={18} />
            </button>
          </Link>
        </div>
      </section>

    </div>
  );
}
