import { motion } from "framer-motion";
import { Award, Target, Eye, Users, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const team = [
  { nameAr: "م. محمد العلي", nameEn: "Eng. Mohammed Al Ali", roleAr: "المدير التنفيذي", roleEn: "CEO & Founder" },
  { nameAr: "م. فاطمة الزهراني", nameEn: "Eng. Fatima Al Zahrani", roleAr: "رئيسة التطوير", roleEn: "Head of Development" },
  { nameAr: "م. عمر السعدي", nameEn: "Eng. Omar Al Saadi", roleAr: "مدير الأمن السيبراني", roleEn: "Cybersecurity Director" },
  { nameAr: "م. نورا الحربي", nameEn: "Eng. Nora Al Harbi", roleAr: "مديرة التصميم", roleEn: "Design Director" },
];

const values = [
  { icon: Award, titleAr: "الجودة", titleEn: "Quality", descAr: "نلتزم بأعلى معايير الجودة في كل ما نقدمه.", descEn: "We commit to the highest quality standards in everything we deliver." },
  { icon: Target, titleAr: "الابتكار", titleEn: "Innovation", descAr: "نبتكر حلولاً إبداعية تواكب آخر التطورات التقنية.", descEn: "We create innovative solutions aligned with the latest technological advances." },
  { icon: CheckCircle2, titleAr: "النزاهة", titleEn: "Integrity", descAr: "نبني علاقاتنا على الصدق والشفافية الكاملة.", descEn: "We build our relationships on complete honesty and transparency." },
  { icon: Users, titleAr: "الشراكة", titleEn: "Partnership", descAr: "نؤمن بأن نجاح عميلنا هو نجاحنا.", descEn: "We believe our client's success is our success." },
];

const timeline = [
  { year: "2015", ar: "تأسيس نوفيكس سولوشنز", en: "NOVEX Solutions Founded" },
  { year: "2017", ar: "الحصول على أول شهادة ISO", en: "First ISO Certification Achieved" },
  { year: "2019", ar: "توسع إلى 5 دول عربية", en: "Expansion to 5 Arab Countries" },
  { year: "2021", ar: "إطلاق قسم الأمن السيبراني", en: "Cybersecurity Division Launched" },
  { year: "2023", ar: "200+ عميل، 450+ مشروع", en: "200+ Clients, 450+ Projects" },
  { year: "2025", ar: "ريادة التحول الرقمي في المنطقة", en: "Leading Digital Transformation in the Region" },
];

export default function About() {
  const { t, lang } = useLanguage();
  const storyReveal = useScrollReveal();
  const teamReveal = useScrollReveal();
  const valuesReveal = useScrollReveal();
  const timelineReveal = useScrollReveal();

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
            {t("about.title")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-foreground mb-6"
          >
            {t("about.subtitle")}
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section ref={storyReveal.ref} className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={storyReveal.visible ? "show" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeUp}>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">{t("about.story.title")}</p>
            <h2 className="text-3xl font-black text-foreground mb-6">{t("app.name")}</h2>
            <p className="text-muted-foreground leading-relaxed text-base mb-8">{t("about.story.text")}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border rounded-xl p-5">
                <div className="text-3xl font-black text-primary mb-1">200+</div>
                <div className="text-sm text-muted-foreground">{t("stats.clients")}</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <div className="text-3xl font-black text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">{lang === "ar" ? "دولة" : "Countries"}</div>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-1 gap-5">
            {[
              { icon: Target, titleKey: "about.mission.title", descKey: "about.mission.text" },
              { icon: Eye, titleKey: "about.vision.title", descKey: "about.vision.text" },
            ].map(({ icon: Icon, titleKey, descKey }) => (
              <div key={titleKey} className="bg-card border border-border rounded-2xl p-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon size={20} className="text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">{t(titleKey)}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{t(descKey)}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Values */}
      <section ref={valuesReveal.ref} className="py-20 bg-card border-y border-border">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">{t("about.values.title")}</p>
          </div>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={valuesReveal.visible ? "show" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {values.map(({ icon: Icon, titleAr, titleEn, descAr, descEn }) => (
              <motion.div
                key={titleEn}
                variants={fadeUp}
                className="text-center p-7 bg-background border border-border rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{lang === "ar" ? titleAr : titleEn}</h3>
                <p className="text-sm text-muted-foreground">{lang === "ar" ? descAr : descEn}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section ref={teamReveal.ref} className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">{t("about.team.title")}</p>
          <h2 className="text-3xl font-black">{t("about.team.subtitle")}</h2>
        </div>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={teamReveal.visible ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {team.map((member, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-card border border-border rounded-2xl p-7 text-center hover:shadow-xl hover:border-primary/30 transition-all"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center mx-auto mb-4 text-2xl font-black text-primary">
                {(lang === "ar" ? member.nameAr : member.nameEn).replace("م. ", "").replace("Eng. ", "").charAt(0)}
              </div>
              <h3 className="font-bold text-foreground mb-1">
                {lang === "ar" ? member.nameAr : member.nameEn}
              </h3>
              <p className="text-sm text-primary font-medium">
                {lang === "ar" ? member.roleAr : member.roleEn}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Timeline */}
      <section ref={timelineReveal.ref} className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">{t("about.timeline.title")}</p>
          </div>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={timelineReveal.visible ? "show" : "hidden"}
            className="relative"
          >
            <div className="absolute start-8 top-0 bottom-0 w-0.5 bg-border" />
            <div className="space-y-8">
              {timeline.map(({ year, ar, en }, i) => (
                <motion.div key={year} variants={fadeUp} className="flex gap-6 items-start">
                  <div className="relative z-10 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-black text-sm shrink-0">
                    {year}
                  </div>
                  <div className="bg-card border border-border rounded-xl p-5 flex-1 mt-3">
                    <p className="font-semibold text-foreground">{lang === "ar" ? ar : en}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
