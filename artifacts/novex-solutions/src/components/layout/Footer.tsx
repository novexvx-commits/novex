import { Link } from "wouter";
import { SiWhatsapp, SiFacebook } from "react-icons/si";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="text-2xl font-black">
              <span className="text-primary">NOV</span>
              <span>EX</span>
              <span className="text-secondary text-sm font-medium ms-1">Solutions</span>
            </span>
            <p className="mt-4 text-sm text-background/70 max-w-xs leading-relaxed">
              {t("footer.desc")}
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://wa.me/96600000000"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-whatsapp"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-colors"
              >
                <SiWhatsapp size={16} />
              </a>
              <a
                href="https://facebook.com/novexsolutions"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="footer-facebook"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-[#1877F2]/20 text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-colors"
              >
                <SiFacebook size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-background/50">
              {t("footer.links")}
            </h3>
            <ul className="space-y-3">
              {[
                { key: "nav.home", href: "/" },
                { key: "nav.about", href: "/about" },
                { key: "nav.services", href: "/services" },
                { key: "nav.projects", href: "/projects" },
                { key: "nav.contact", href: "/contact" },
              ].map(({ key, href }) => (
                <li key={key}>
                  <Link href={href}>
                    <span className="text-sm text-background/70 hover:text-background transition-colors cursor-pointer">
                      {t(key)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider mb-5 text-background/50">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={15} className="mt-0.5 text-primary shrink-0" />
                <a
                  href="mailto:novex.vx@gmail.com"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                  data-testid="footer-email"
                >
                  novex.vx@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="mt-0.5 text-primary shrink-0" />
                <a
                  href="tel:+96655000000"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                  data-testid="footer-phone"
                >
                  {t("contact.phone.value")}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 text-primary shrink-0" />
                <span className="text-sm text-background/70">{t("contact.location.value")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/40">
            &copy; {year} NOVEX Solutions. {t("footer.rights")}.
          </p>
        </div>
      </div>
    </footer>
  );
}
