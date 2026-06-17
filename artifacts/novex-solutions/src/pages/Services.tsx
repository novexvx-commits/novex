import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2, Shield, Network, Zap, BookOpen, HeadphonesIcon, X,
  ChevronRight,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

const serviceData = [
  {
    icon: Code2,
    key: "sw",
    colorClass: "from-blue-500/20 to-indigo-500/20",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
    featuresAr: ["تطبيقات الويب الحديثة", "تطبيقات الجوال iOS & Android", "أنظمة إدارة المحتوى", "حلول التجارة الإلكترونية", "API وخدمات الخلفية"],
    featuresEn: ["Modern web applications", "iOS & Android mobile apps", "Content management systems", "E-commerce solutions", "API & backend services"],
    detailAr: "نطور حلولاً برمجية مخصصة تلبي احتياجاتك الفريدة باستخدام أحدث التقنيات والمنهجيات الرشيقة. فريقنا من المطورين المتخصصين يضمن تسليم منتجات عالية الجودة في الوقت المحدد.",
    detailEn: "We develop custom software solutions that meet your unique needs using the latest technologies and agile methodologies. Our specialized development team guarantees delivery of high-quality products on time.",
  },
  {
    icon: Shield,
    key: "cyber",
    colorClass: "from-red-500/20 to-orange-500/20",
    iconBg: "bg-red-500/10",
    iconColor: "text-red-600 dark:text-red-400",
    featuresAr: ["اختبار الاختراق", "تحليل الثغرات الأمنية", "جدران الحماية المتقدمة", "مراقبة التهديدات 24/7", "الاستجابة للحوادث"],
    featuresEn: ["Penetration testing", "Vulnerability analysis", "Advanced firewalls", "24/7 threat monitoring", "Incident response"],
    detailAr: "نحمي بنيتك التحتية الرقمية من التهديدات المتطورة بأساليب دفاعية متعددة الطبقات. خبراؤنا معتمدون دولياً وعلى اطلاع دائم بآخر التهديدات السيبرانية.",
    detailEn: "We protect your digital infrastructure from sophisticated threats with multi-layered defensive approaches. Our experts are internationally certified and always up-to-date with the latest cyber threats.",
  },
  {
    icon: Network,
    key: "net",
    colorClass: "from-green-500/20 to-teal-500/20",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-600 dark:text-green-400",
    featuresAr: ["تصميم الشبكات المؤسسية", "الشبكات السلكية واللاسلكية", "VPN وشبكات WAN", "شبكات الحوسبة السحابية", "الصيانة والمراقبة"],
    featuresEn: ["Enterprise network design", "Wired and wireless networks", "VPN and WAN networks", "Cloud networking", "Maintenance and monitoring"],
    detailAr: "نصمم وننفذ بنى تحتية للشبكات تتسم بالموثوقية والأداء العالي والقابلية للتوسع. حلولنا مصممة لتلبية احتياجات الأعمال اليوم والمستقبل.",
    detailEn: "We design and implement network infrastructure characterized by reliability, high performance, and scalability. Our solutions are designed to meet current and future business needs.",
  },
  {
    icon: Zap,
    key: "digital",
    colorClass: "from-yellow-500/20 to-amber-500/20",
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-600 dark:text-yellow-400",
    featuresAr: ["تقييم النضج الرقمي", "إدارة التغيير التنظيمي", "أتمتة العمليات", "تحليلات البيانات والذكاء الاصطناعي", "حلول الحوسبة السحابية"],
    featuresEn: ["Digital maturity assessment", "Organizational change management", "Process automation", "Data analytics and AI", "Cloud computing solutions"],
    detailAr: "نساعد مؤسستك على التحول من النماذج التقليدية إلى نماذج رقمية متكاملة تعزز الكفاءة وتفتح آفاقاً جديدة للنمو والابتكار.",
    detailEn: "We help your organization transition from traditional models to integrated digital models that enhance efficiency and open new horizons for growth and innovation.",
  },
  {
    icon: BookOpen,
    key: "consult",
    colorClass: "from-purple-500/20 to-violet-500/20",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-600 dark:text-purple-400",
    featuresAr: ["التخطيط الاستراتيجي التقني", "تقييم البنية التحتية", "اختيار التقنيات المناسبة", "إدارة مشاريع تقنية", "التدريب والتطوير"],
    featuresEn: ["Technical strategic planning", "Infrastructure assessment", "Technology selection", "IT project management", "Training and development"],
    detailAr: "خبراؤنا الاستراتيجيون يعملون معك لفهم تحديات أعمالك وتصميم خارطة طريق تقنية واضحة تحقق أهدافك.",
    detailEn: "Our strategic experts work with you to understand your business challenges and design a clear technology roadmap to achieve your goals.",
  },
  {
    icon: HeadphonesIcon,
    key: "support",
    colorClass: "from-cyan-500/20 to-sky-500/20",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-600 dark:text-cyan-400",
    featuresAr: ["دعم فني 24/7/365", "صيانة وقائية دورية", "تحديثات الأمان", "إدارة الأنظمة عن بُعد", "اتفاقيات مستوى الخدمة SLA"],
    featuresEn: ["24/7/365 technical support", "Periodic preventive maintenance", "Security updates", "Remote systems management", "Service level agreements SLA"],
    detailAr: "لا تقلق بشأن توقف أعمالك. فريق الدعم لدينا متاح دائماً لحل أي مشكلة تقنية وضمان استمرارية عملياتك بأعلى كفاءة.",
    detailEn: "Don't worry about business downtime. Our support team is always available to resolve any technical issue and ensure your operations continue at peak efficiency.",
  },
];

export default function Services() {
  const { t, lang } = useLanguage();
  const [selected, setSelected] = useState<typeof serviceData[0] | null>(null);
  const listReveal = useScrollReveal();

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
            {t("services.title")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-foreground mb-4"
          >
            {t("services.page.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base max-w-2xl mx-auto"
          >
            {t("services.page.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={listReveal.ref} className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={listReveal.visible ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {serviceData.map((svc) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.key}
                variants={fadeUp}
                className="group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-pointer"
                whileHover={{ y: -4 }}
                onClick={() => setSelected(svc)}
                data-testid={`service-card-${svc.key}`}
              >
                <div className={`h-24 bg-gradient-to-br ${svc.colorClass} flex items-center justify-start px-7`}>
                  <div className={`w-12 h-12 rounded-xl ${svc.iconBg} flex items-center justify-center`}>
                    <Icon size={22} className={svc.iconColor} />
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-bold text-foreground mb-2">{t(`services.${svc.key}.title`)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{t(`services.${svc.key}.desc`)}</p>
                  <ul className="space-y-2">
                    {(lang === "ar" ? svc.featuresAr : svc.featuresEn).slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <ChevronRight size={12} className="text-primary shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-5 text-sm text-primary font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    {t("services.learnmore")} <ChevronRight size={14} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Service Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-background border border-border rounded-2xl max-w-lg w-full p-8 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              data-testid="service-modal"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-xl ${selected.iconBg} flex items-center justify-center`}>
                    <selected.icon size={20} className={selected.iconColor} />
                  </div>
                  <h2 className="text-xl font-black text-foreground">{t(`services.${selected.key}.title`)}</h2>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  data-testid="close-service-modal"
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                >
                  <X size={18} className="text-muted-foreground" />
                </button>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {lang === "ar" ? selected.detailAr : selected.detailEn}
              </p>
              <div className="bg-muted/50 rounded-xl p-5">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  {lang === "ar" ? "ما يشمله" : "What's included"}
                </p>
                <ul className="space-y-2">
                  {(lang === "ar" ? selected.featuresAr : selected.featuresEn).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
