import { motion } from "framer-motion";
import { Award, Target, Eye, CheckCircle2, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { show: { transition: { staggerChildren: 0.12 } } };

const values = [
  { icon: Award, titleAr: "الجودة", titleEn: "Quality", descAr: "نلتزم بأعلى معايير الجودة في كل ما نقدمه.", descEn: "We commit to the highest quality standards in everything we deliver." },
  { icon: Target, titleAr: "الابتكار", titleEn: "Innovation", descAr: "نبتكر حلولاً إبداعية تواكب آخر التطورات التقنية.", descEn: "We create innovative solutions aligned with the latest technological advances." },
  { icon: CheckCircle2, titleAr: "النزاهة", titleEn: "Integrity", descAr: "نبني علاقاتنا على الصدق والشفافية الكاملة.", descEn: "We build our relationships on complete honesty and transparency." },
  { icon: Users, titleAr: "الشراكة", titleEn: "Partnership", descAr: "نؤمن بأن نجاح عميلنا هو نجاحنا.", descEn: "We believe our client's success is our success." },
];

export default function About() {
  const { t, lang } = useLanguage();
  const storyReveal = useScrollReveal();
  const valuesReveal = useScrollReveal();

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
            {lang === "ar"
              ? "شركاؤك في رحلة التحول التقني"
              : "Your Partner in the Digital Journey"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base max-w-xl mx-auto"
          >
            {lang === "ar"
              ? "نقدم حلولاً تقنية مبتكرة تساعد شركتك على النمو والتميز في السوق الرقمي."
              : "We deliver innovative technology solutions that help your business grow and stand out in the digital market."}
          </motion.p>
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
            <p className="text-muted-foreground leading-relaxed text-base">
              {lang === "ar"
                ? "بدأنا نوفيكس سولوشنز برؤية واضحة: أن نكون الشريك التقني الأول للشركات الناشئة والمؤسسات في المنطقة العربية. يعمل فريقنا من المهندسين المتخصصين على تصميم وتنفيذ حلول تقنية مخصصة تلبي احتياجات كل عميل بشكل فريد، مع التركيز على الجودة والابتكار في كل خطوة."
                : "We started NOVEX Solutions with a clear vision: to be the leading technology partner for startups and enterprises in the Arab region. Our team of specialized engineers designs and implements custom technology solutions tailored uniquely to each client's needs, focusing on quality and innovation at every step."}
            </p>
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
            <h2 className="text-3xl font-black text-foreground">
              {lang === "ar" ? "ما يحركنا كل يوم" : "What Drives Us Every Day"}
            </h2>
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
                className="text-center p-7 bg-background border border-border rounded-2xl hover:shadow-lg hover:border-primary/30 transition-all"
                whileHover={{ y: -4 }}
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

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-black text-foreground mb-4">
              {lang === "ar" ? "مستعد تبدأ مشروعك؟" : "Ready to start your project?"}
            </h2>
            <p className="text-muted-foreground mb-8">
              {lang === "ar"
                ? "فريقنا جاهز لمساعدتك في تحقيق رؤيتك التقنية."
                : "Our team is ready to help you achieve your technology vision."}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all"
            >
              {lang === "ar" ? "تواصل معنا" : "Get in touch"}
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
