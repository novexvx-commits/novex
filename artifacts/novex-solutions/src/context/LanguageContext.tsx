import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
  dir: "rtl" | "ltr";
}

export const translations: Record<string, { ar: string; en: string }> = {
  "nav.home": { ar: "الرئيسية", en: "Home" },
  "nav.about": { ar: "من نحن", en: "About Us" },
  "nav.services": { ar: "خدماتنا", en: "Services" },
  "nav.projects": { ar: "مشاريعنا", en: "Projects" },
  "nav.contact": { ar: "تواصل معنا", en: "Contact" },
  "app.name": { ar: "نوفيكس سولوشنز", en: "NOVEX Solutions" },
  "app.tagline": { ar: "نقود مستقبل التقنية", en: "Leading the Future of Technology" },

  "hero.title1": { ar: "حلول تقنية", en: "Technology Solutions" },
  "hero.title2": { ar: "تصنع الفارق", en: "That Make a Difference" },
  "hero.subtitle": { ar: "نقدم خدمات تقنية متكاملة من تطوير البرمجيات إلى الأمن السيبراني وحلول الشبكات لتمكين الشركات من النمو والازدهار في العصر الرقمي.", en: "We deliver comprehensive technology services — from software development to cybersecurity and networking — empowering businesses to grow and thrive in the digital age." },
  "hero.cta1": { ar: "اكتشف خدماتنا", en: "Explore Services" },
  "hero.cta2": { ar: "تواصل معنا", en: "Contact Us" },

  "stats.clients": { ar: "عميل راضٍ", en: "Happy Clients" },
  "stats.projects": { ar: "مشروع منجز", en: "Projects Done" },
  "stats.years": { ar: "سنوات خبرة", en: "Years Experience" },
  "stats.uptime": { ar: "ضمان التشغيل", en: "Uptime Guarantee" },

  "services.title": { ar: "خدماتنا", en: "Our Services" },
  "services.subtitle": { ar: "نقدم مجموعة شاملة من الحلول التقنية المتكاملة التي تلبي احتياجات عملك الرقمي.", en: "We offer a comprehensive suite of integrated tech solutions tailored to your digital business needs." },
  "services.sw.title": { ar: "تطوير البرمجيات", en: "Software Development" },
  "services.sw.desc": { ar: "تطوير تطبيقات ويب وموبايل مخصصة بأحدث التقنيات وأعلى معايير الجودة.", en: "Custom web and mobile application development using the latest technologies and highest quality standards." },
  "services.cyber.title": { ar: "الأمن السيبراني", en: "Cybersecurity" },
  "services.cyber.desc": { ar: "حماية أصولك الرقمية وبياناتك من التهديدات الإلكترونية بحلول أمنية شاملة.", en: "Protect your digital assets and data from cyber threats with comprehensive security solutions." },
  "services.net.title": { ar: "حلول الشبكات", en: "Networking Solutions" },
  "services.net.desc": { ar: "تصميم وتنفيذ بنى تحتية للشبكات موثوقة وعالية الأداء لمؤسستك.", en: "Design and implement reliable, high-performance network infrastructure for your organization." },
  "services.digital.title": { ar: "التحول الرقمي", en: "Digital Transformation" },
  "services.digital.desc": { ar: "مساعدة الشركات في تبني التقنيات الحديثة لتحسين كفاءتها التشغيلية.", en: "Help businesses adopt modern technologies to improve operational efficiency." },
  "services.consult.title": { ar: "الاستشارات التقنية", en: "IT Consulting" },
  "services.consult.desc": { ar: "توجيه استراتيجي متخصص لمساعدتك على اتخاذ القرارات التقنية الصحيحة.", en: "Specialized strategic guidance to help you make the right technology decisions." },
  "services.support.title": { ar: "الدعم والصيانة", en: "Support & Maintenance" },
  "services.support.desc": { ar: "دعم فني متواصل على مدار الساعة لضمان استمرارية أعمالك بلا انقطاع.", en: "Round-the-clock technical support to ensure uninterrupted continuity of your operations." },
  "services.learnmore": { ar: "اعرف المزيد", en: "Learn More" },
  "services.page.title": { ar: "خدماتنا الكاملة", en: "Our Full Services" },
  "services.page.subtitle": { ar: "نقدم طيفاً واسعاً من الحلول التقنية المتكاملة للشركات والمؤسسات.", en: "A wide spectrum of integrated technology solutions for businesses and institutions." },

  "projects.title": { ar: "مشاريعنا", en: "Our Projects" },
  "projects.subtitle": { ar: "نماذج من أعمالنا التي تعكس خبرتنا ومهاراتنا في تنفيذ مشاريع متنوعة.", en: "A showcase of our work reflecting our expertise across diverse project categories." },
  "projects.filter.all": { ar: "الكل", en: "All" },
  "projects.filter.web": { ar: "ويب", en: "Web" },
  "projects.filter.mobile": { ar: "موبايل", en: "Mobile" },
  "projects.filter.security": { ar: "أمن", en: "Security" },
  "projects.filter.networking": { ar: "شبكات", en: "Networking" },
  "projects.viewdetails": { ar: "تفاصيل المشروع", en: "View Details" },
  "projects.close": { ar: "إغلاق", en: "Close" },
  "projects.client": { ar: "العميل", en: "Client" },
  "projects.year": { ar: "السنة", en: "Year" },
  "projects.category": { ar: "التصنيف", en: "Category" },

  "about.title": { ar: "من نحن", en: "About Us" },
  "about.subtitle": { ar: "شركة رائدة في تقديم الحلول التقنية المبتكرة منذ عام 2015.", en: "A leading company in innovative technology solutions since 2015." },
  "about.story.title": { ar: "قصتنا", en: "Our Story" },
  "about.story.text": { ar: "تأسست نوفيكس سولوشنز عام 2015 برؤية واضحة: أن تكون الشريك التقني الأول للشركات في المنطقة العربية. بدأنا بفريق صغير من المهندسين المتحمسين، ولليوم نضم أكثر من 50 متخصصاً يعملون على تقديم حلول تقنية متكاملة لعملاء في أكثر من 15 دولة.", en: "NOVEX Solutions was founded in 2015 with a clear vision: to be the leading technology partner for companies in the Arab region. We started with a small team of passionate engineers, and today we have more than 50 specialists delivering integrated tech solutions to clients in over 15 countries." },
  "about.mission.title": { ar: "رسالتنا", en: "Our Mission" },
  "about.mission.text": { ar: "تمكين الشركات من تحقيق أهدافها من خلال حلول تقنية مبتكرة وموثوقة.", en: "Empowering businesses to achieve their goals through innovative and reliable technology solutions." },
  "about.vision.title": { ar: "رؤيتنا", en: "Our Vision" },
  "about.vision.text": { ar: "أن نكون الشريك التقني الأول والأكثر ثقة في المنطقة العربية وخارجها.", en: "To be the most trusted technology partner in the Arab region and beyond." },
  "about.team.title": { ar: "فريقنا", en: "Our Team" },
  "about.team.subtitle": { ar: "نخبة من المتخصصين ذوي الخبرة العالية.", en: "An elite team of highly experienced specialists." },
  "about.values.title": { ar: "قيمنا", en: "Our Values" },
  "about.timeline.title": { ar: "رحلتنا", en: "Our Journey" },

  "contact.title": { ar: "تواصل معنا", en: "Contact Us" },
  "contact.subtitle": { ar: "نحن هنا لمساعدتك. أرسل لنا رسالة وسنتواصل معك في أقرب وقت.", en: "We are here to help. Send us a message and we will get back to you shortly." },
  "contact.name": { ar: "الاسم الكامل", en: "Full Name" },
  "contact.email": { ar: "البريد الإلكتروني", en: "Email Address" },
  "contact.subject": { ar: "الموضوع", en: "Subject" },
  "contact.message": { ar: "رسالتك", en: "Your Message" },
  "contact.send": { ar: "إرسال الرسالة", en: "Send Message" },
  "contact.success": { ar: "تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.", en: "Your message was sent successfully! We will contact you soon." },
  "contact.email.label": { ar: "البريد الإلكتروني", en: "Email" },
  "contact.phone.label": { ar: "الهاتف", en: "Phone" },
  "contact.whatsapp.label": { ar: "واتساب", en: "WhatsApp" },
  "contact.facebook.label": { ar: "فيسبوك", en: "Facebook" },
  "contact.location.label": { ar: "الموقع", en: "Location" },
  "contact.location.value": { ar: "الرياض، المملكة العربية السعودية", en: "Riyadh, Saudi Arabia" },
  "contact.phone.value": { ar: "+966 55 000 0000", en: "+966 55 000 0000" },
  "contact.map.title": { ar: "موقعنا على الخريطة", en: "Our Location" },

  "footer.desc": { ar: "شريكك التقني الموثوق لتحقيق أهداف أعمالك الرقمية.", en: "Your trusted technology partner for achieving your digital business goals." },
  "footer.links": { ar: "روابط سريعة", en: "Quick Links" },
  "footer.services": { ar: "الخدمات", en: "Services" },
  "footer.contact": { ar: "تواصل معنا", en: "Get In Touch" },
  "footer.rights": { ar: "جميع الحقوق محفوظة", en: "All rights reserved" },
  "footer.follow": { ar: "تابعنا", en: "Follow Us" },

  "why.title": { ar: "لماذا نوفيكس؟", en: "Why NOVEX?" },
  "why.subtitle": { ar: "ما يميزنا عن غيرنا من شركات التقنية.", en: "What sets us apart from other technology companies." },
  "why.expert": { ar: "خبراء متخصصون", en: "Expert Team" },
  "why.expert.desc": { ar: "فريق من أفضل المهندسين والمتخصصين ذوي الخبرة العالمية.", en: "A team of the best engineers and specialists with international expertise." },
  "why.fast": { ar: "تسليم في الوقت المحدد", en: "On-Time Delivery" },
  "why.fast.desc": { ar: "نلتزم بالمواعيد ونضمن تسليم مشاريعك في الوقت المحدد وبأعلى جودة.", en: "We commit to deadlines and guarantee project delivery on time with the highest quality." },
  "why.secure": { ar: "أمان لا يُضاهى", en: "Unmatched Security" },
  "why.secure.desc": { ar: "نتبنى أعلى معايير الأمن لحماية بيانات عملائنا ومشاريعهم.", en: "We adopt the highest security standards to protect our clients' data and projects." },
  "why.support": { ar: "دعم متواصل", en: "24/7 Support" },
  "why.support.desc": { ar: "فريق دعم فني جاهز على مدار الساعة طوال أيام الأسبوع.", en: "A technical support team ready around the clock, 7 days a week." },

  "cta.title": { ar: "هل أنت مستعد لتحويل أعمالك؟", en: "Ready to Transform Your Business?" },
  "cta.subtitle": { ar: "تواصل مع فريق نوفيكس اليوم وابدأ رحلتك نحو التميز التقني.", en: "Contact the NOVEX team today and start your journey toward technological excellence." },
  "cta.button": { ar: "ابدأ الآن", en: "Get Started" },

  "testimonials.title": { ar: "ماذا يقول عملاؤنا", en: "What Our Clients Say" },
  "testimonials.subtitle": { ar: "آراء عملائنا تعكس جودة عملنا والتزامنا بتحقيق توقعاتهم.", en: "Our clients' feedback reflects the quality of our work and our commitment to exceeding expectations." },

  "tech.title": { ar: "تقنياتنا", en: "Our Technologies" },
  "tech.subtitle": { ar: "نستخدم أحدث التقنيات العالمية لبناء حلول متطورة وموثوقة.", en: "We use the latest global technologies to build sophisticated and reliable solutions." },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>("ar");

  useEffect(() => {
    const root = document.documentElement;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    root.lang = lang;
    root.style.setProperty(
      "--app-font-sans",
      lang === "ar" ? "'Cairo', sans-serif" : "'Inter', sans-serif"
    );
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === "ar" ? "en" : "ar"));

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[lang];
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, dir: lang === "ar" ? "rtl" : "ltr" }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
};
