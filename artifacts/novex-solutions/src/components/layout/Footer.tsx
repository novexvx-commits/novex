import { Link } from "wouter";
import { SiWhatsapp, SiFacebook } from "react-icons/si";
import { Mail, Phone, Wifi, ArrowUpRight, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const WA_NUMBER = "201016058253";
const WA_MESSAGE = encodeURIComponent(
  "Hello, I'm reaching out via NOVEX Solutions website.",
);
const FB_URL = "https://www.facebook.com/share/1CZpvVBEp8/";

const navLinks = [
  { key: "nav.home", href: "/" },
  { key: "nav.about", href: "/about" },
  { key: "nav.services", href: "/services" },
  { key: "nav.projects", href: "/projects" },
  { key: "nav.contact", href: "/contact" },
];

const services = [
  { ar: "تطوير البرمجيات", en: "Software Development" },
  { ar: "الأمن السيبراني", en: "Cybersecurity" },
  { ar: "حلول الشبكات", en: "Networking Solutions" },
  { ar: "التحول الرقمي", en: "Digital Transformation" },
  { ar: "الاستشارات التقنية", en: "IT Consulting" },
];

export default function Footer() {
  const { t, lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden border-t border-white/[0.07]"
      style={{
        background:
          "linear-gradient(160deg, #05091a 0%, #070d20 60%, #040810 100%)",
      }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(80,130,255,0.5), rgba(0,210,240,0.4), transparent)",
        }}
      />

      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(80,130,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(80,130,255,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-0 start-1/4 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(80,130,255,0.6) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 end-1/4 w-64 h-64 rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,210,240,0.6) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* CTA strip */}
        <div className="mb-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs text-cyan-400 font-semibold uppercase tracking-widest mb-1">
              {lang === "ar" ? "هل أنت مستعد؟" : "Ready to start?"}
            </p>
            <h3 className="text-xl font-black text-white">
              {lang === "ar"
                ? "ابدأ مشروعك معنا اليوم"
                : "Start your project with us today"}
            </h3>
          </div>
          <Link href="/contact">
            <button className="shrink-0 flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-sm hover:opacity-90 hover:scale-105 transition-all shadow-lg shadow-blue-500/25">
              {lang === "ar" ? "تواصل معنا" : "Get in touch"}
              <ArrowUpRight size={16} />
            </button>
          </Link>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="NOVEX"
                className="w-9 h-9 rounded-lg object-contain"
              />
              <span className="text-xl font-black tracking-tight">
                <span className="text-blue-400">NOV</span>
                <span className="text-white">EX</span>
                <span className="text-cyan-400 text-sm font-medium ms-1">
                  Solutions
                </span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs mb-6">
              {t("footer.desc")}
            </p>
            <div className="flex gap-3">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-whatsapp"
                className="group flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/5 text-[#25D366] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all"
              >
                <SiWhatsapp size={17} />
              </a>
              <a
                href={FB_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-facebook"
                className="group flex items-center justify-center w-10 h-10 rounded-xl border border-white/10 bg-white/5 text-[#4A90D9] hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all"
              >
                <SiFacebook size={17} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">
              {t("footer.links")}
            </h4>
            <ul className="space-y-3">
              {navLinks.map(({ key, href }) => (
                <li key={key}>
                  <Link href={href}>
                    <span className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 group">
                      <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 h-px bg-blue-400" />
                      {t(key)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">
              {t("services.title")}
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.en}>
                  <Link href="/services">
                    <span className="text-sm text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 group">
                      <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 h-px bg-cyan-400" />
                      {lang === "ar" ? s.ar : s.en}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-5">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:novex.vx@gmail.com"
                  data-testid="footer-email"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <Mail size={13} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">
                      {lang === "ar" ? "البريد" : "Email"}
                    </p>
                    <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                      novex.vx@gmail.com
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+201016058253"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                    <Phone size={13} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">
                      {lang === "ar" ? "الهاتف" : "Phone"}
                    </p>
                    <span className="text-sm text-slate-300 group-hover:text-white transition-colors">
                      +20 101 605 8253
                    </span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                  <Wifi size={13} className="text-purple-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">
                    {lang === "ar" ? "طريقة العمل" : "Work Style"}
                  </p>
                  <span className="text-sm text-slate-300">
                    {lang === "ar" ? "عمل عن بُعد" : "Fully Remote"}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            &copy; {year} NOVEX Solutions. {t("footer.rights")}.
          </p>
          <p className="text-xs text-slate-700">
            {lang === "ar"
              ? "مصنوع بشغف لتحقيق التميز التقني"
              : "Crafted with passion for technological excellence"}
          </p>
        </div>
      </div>
    </footer>
  );
}
