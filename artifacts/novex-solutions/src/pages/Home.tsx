import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Code2, Shield, Network, Zap, HeadphonesIcon, BookOpen,
  Award, Clock, Users, CheckCircle2, ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useScrollReveal, useCountUp } from "@/hooks/useScrollReveal";
import ParticleCanvas from "@/components/sections/ParticleCanvas";
import TypewriterText from "@/components/sections/TypewriterText";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
};

function StatCard({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { ref, visible } = useScrollReveal();
  const count = useCountUp(target, visible);
  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-4xl lg:text-5xl font-black text-primary">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground font-medium">{label}</div>
    </div>
  );
}

const services = [
  { icon: Code2, key: "services.sw" },
  { icon: Shield, key: "services.cyber" },
  { icon: Network, key: "services.net" },
  { icon: Zap, key: "services.digital" },
  { icon: BookOpen, key: "services.consult" },
  { icon: HeadphonesIcon, key: "services.support" },
];

const whyItems = [
  { icon: Users, titleKey: "why.expert", descKey: "why.expert.desc" },
  { icon: Clock, titleKey: "why.fast", descKey: "why.fast.desc" },
  { icon: Shield, titleKey: "why.secure", descKey: "why.secure.desc" },
  { icon: HeadphonesIcon, titleKey: "why.support", descKey: "why.support.desc" },
];

const testimonials = [
  {
    name: "أحمد المنصوري",
    nameEn: "Ahmed Al Mansouri",
    role: "مدير تقنية المعلومات",
    roleEn: "CTO",
    company: "شركة التقنية المتقدمة",
    companyEn: "Advanced Tech Co.",
    text: "نوفيكس حولت بنيتنا التحتية بالكامل في وقت قياسي. فريق محترف واحترافية عالية.",
    textEn: "NOVEX transformed our entire infrastructure in record time. A truly professional team.",
  },
  {
    name: "سارة الخالدي",
    nameEn: "Sara Al Khalidi",
    role: "الرئيس التنفيذي",
    roleEn: "CEO",
    company: "مجموعة النخبة",
    companyEn: "Elite Group",
    text: "الدعم المستمر والتزامهم بالمواعيد جعلنا نثق بهم شريكاً استراتيجياً لأعمالنا.",
    textEn: "Their continuous support and commitment to deadlines made them our trusted strategic partner.",
  },
  {
    name: "خالد العمري",
    nameEn: "Khaled Al Omari",
    role: "مدير العمليات",
    roleEn: "Operations Director",
    company: "بنك الرقمي",
    companyEn: "Digital Bank",
    text: "حلول الأمن السيبراني التي قدمتها نوفيكس أنقذت بياناتنا من أكثر من هجمة إلكترونية.",
    textEn: "NOVEX's cybersecurity solutions saved our data from multiple cyber attacks.",
  },
];

const techStack = [
  "React", "Node.js", "Python", "TypeScript", "Docker", "Kubernetes",
  "AWS", "PostgreSQL", "Redis", "GraphQL", "Next.js", "Vue.js",
];

export default function Home() {
  const { t, lang } = useLanguage();
  const heroReveal = useScrollReveal();
  const servicesReveal = useScrollReveal();
  const whyReveal = useScrollReveal();
  const testimonialsReveal = useScrollReveal();

  const heroTypePhrases =
    lang === "ar"
      ? ["تطوير برمجيات متطورة", "حلول أمن سيبراني", "شبكات ذكية", "تحول رقمي حقيقي"]
      : ["Advanced Software Development", "Cybersecurity Solutions", "Smart Networking", "Real Digital Transformation"];

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <ParticleCanvas />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-6 border border-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {t("app.tagline")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight tracking-tight"
          >
            <span className="block text-foreground">{t("hero.title1")}</span>
            <span className="block bg-gradient-to-l from-primary to-secondary bg-clip-text text-transparent">
              {t("hero.title2")}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-4 text-xl sm:text-2xl font-semibold text-primary min-h-[2rem]"
          >
            <TypewriterText phrases={heroTypePhrases} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-6 text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            <Link href="/services">
              <button
                data-testid="hero-cta1"
                className="relative px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl overflow-hidden group transition-all hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
              >
                <span className="relative z-10">{t("hero.cta1")}</span>
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors" />
              </button>
            </Link>
            <Link href="/contact">
              <button
                data-testid="hero-cta2"
                className="px-8 py-3.5 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
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
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-5 h-8 border-2 border-border rounded-full flex justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-card border-y border-border py-8">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 divide-x rtl:divide-x-reverse divide-border">
          <StatCard target={200} suffix="+" label={t("stats.clients")} />
          <StatCard target={450} suffix="+" label={t("stats.projects")} />
          <StatCard target={9} suffix="+" label={t("stats.years")} />
          <StatCard target={99} suffix="%" label={t("stats.uptime")} />
        </div>
      </section>

      {/* Services */}
      <section ref={servicesReveal.ref} className="py-24 px-4 max-w-7xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={servicesReveal.visible ? "show" : "hidden"}
          className="text-center mb-16"
        >
          <motion.p variants={fadeUp} className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            {t("services.title")}
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black text-foreground">
            {t("services.subtitle")}
          </motion.h2>
        </motion.div>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={servicesReveal.visible ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map(({ icon: Icon, key }) => (
            <motion.div
              key={key}
              variants={fadeUp}
              className="group bg-card border border-border rounded-2xl p-7 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 cursor-default"
              style={{ perspective: 1000 }}
              whileHover={{ rotateY: 2, rotateX: -2, scale: 1.02 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Icon size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{t(`${key}.title`)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t(`${key}.desc`)}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="mt-12 text-center">
          <Link href="/services">
            <button data-testid="services-all-btn" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
              {t("services.learnmore")} <ChevronRight size={16} />
            </button>
          </Link>
        </div>
      </section>

      {/* Why NOVEX */}
      <section
        ref={whyReveal.ref}
        className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={whyReveal.visible ? "show" : "hidden"}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              {t("why.title")}
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-black">
              {t("why.subtitle")}
            </motion.h2>
          </motion.div>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={whyReveal.visible ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyItems.map(({ icon: Icon, titleKey, descKey }) => (
              <motion.div
                key={titleKey}
                variants={fadeUp}
                className="bg-card border border-border rounded-2xl p-7 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{t(titleKey)}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{t(descKey)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">{t("projects.title")}</p>
          <h2 className="text-3xl sm:text-4xl font-black">{t("projects.subtitle")}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { titleAr: "منصة إدارة المستشفيات", titleEn: "Hospital Management Platform", cat: "Web", color: "from-blue-500/20 to-indigo-500/20" },
            { titleAr: "تطبيق الخدمات المصرفية", titleEn: "Banking Services App", cat: "Mobile", color: "from-cyan-500/20 to-teal-500/20" },
            { titleAr: "نظام الأمن المتكامل", titleEn: "Integrated Security System", cat: "Security", color: "from-purple-500/20 to-pink-500/20" },
          ].map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className={`h-48 bg-gradient-to-br ${proj.color} flex items-center justify-center`}>
                <Code2 size={48} className="text-primary/40" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                  {proj.cat}
                </span>
                <h3 className="font-bold text-lg text-foreground">
                  {lang === "ar" ? proj.titleAr : proj.titleEn}
                </h3>
              </div>
              <Link href="/projects">
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                  <span className="text-white font-bold text-sm bg-white/20 px-5 py-2.5 rounded-xl backdrop-blur-sm">
                    {t("projects.viewdetails")}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/projects">
            <button data-testid="view-all-projects" className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-primary-foreground transition-all">
              {lang === "ar" ? "كل المشاريع" : "All Projects"}
            </button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={testimonialsReveal.ref} className="py-24 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">{t("testimonials.title")}</p>
            <h2 className="text-3xl sm:text-4xl font-black">{t("testimonials.subtitle")}</h2>
          </div>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={testimonialsReveal.visible ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t_, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-background border border-border rounded-2xl p-7 hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <span key={s} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  "{lang === "ar" ? t_.text : t_.textEn}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-sm">
                    {(lang === "ar" ? t_.name : t_.nameEn).charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{lang === "ar" ? t_.name : t_.nameEn}</p>
                    <p className="text-xs text-muted-foreground">
                      {lang === "ar" ? t_.role : t_.roleEn} — {lang === "ar" ? t_.company : t_.companyEn}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack marquee */}
      <section className="py-16 overflow-hidden bg-background">
        <div className="text-center mb-10 px-4">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">{t("tech.title")}</p>
          <p className="text-muted-foreground text-sm">{t("tech.subtitle")}</p>
        </div>
        <div className="relative flex overflow-hidden">
          <motion.div
            animate={{ x: lang === "ar" ? [0, "50%"] : [0, "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex gap-6 shrink-0"
          >
            {[...techStack, ...techStack].map((tech, i) => (
              <div key={i} className="shrink-0 px-6 py-3 bg-card border border-border rounded-xl text-sm font-semibold text-muted-foreground whitespace-nowrap">
                {tech}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-black mb-4"
          >
            {t("cta.title")}
          </motion.h2>
          <p className="text-white/80 mb-8 text-base max-w-xl mx-auto">{t("cta.subtitle")}</p>
          <Link href="/contact">
            <button
              data-testid="cta-button"
              className="px-10 py-4 bg-white text-primary font-bold rounded-xl hover:bg-white/90 transition-all hover:scale-105 shadow-lg"
            >
              {t("cta.button")}
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
