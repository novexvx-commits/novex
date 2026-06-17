import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeProvider";

const navLinks = [
  { key: "nav.home", href: "/" },
  { key: "nav.about", href: "/about" },
  { key: "nav.services", href: "/services" },
  { key: "nav.projects", href: "/projects" },
  { key: "nav.contact", href: "/contact" },
];

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/">
            <span
              className="text-xl lg:text-2xl font-black tracking-tight cursor-pointer select-none"
              data-testid="logo"
            >
              <span className="text-primary">NOV</span>
              <span className="text-foreground">EX</span>
              <span className="text-secondary text-sm font-medium ms-1">Solutions</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ key, href }) => (
              <Link key={key} href={href}>
                <span
                  className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  data-testid={`nav-link-${key}`}
                >
                  {t(key)}
                  {location === href && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 inset-x-2 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              data-testid="lang-toggle"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all"
            >
              <Globe size={14} />
              {lang === "ar" ? "EN" : "AR"}
            </button>
            <button
              onClick={toggleTheme}
              data-testid="theme-toggle"
              className="p-2 rounded-full border border-border hover:border-primary text-muted-foreground hover:text-primary transition-all"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              className="lg:hidden p-2 rounded-full border border-border text-muted-foreground hover:text-primary transition-all"
              onClick={() => setMenuOpen(!menuOpen)}
              data-testid="mobile-menu-toggle"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {navLinks.map(({ key, href }) => (
                <Link key={key} href={href}>
                  <span
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium cursor-pointer transition-colors ${
                      location === href
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                    data-testid={`mobile-nav-${key}`}
                  >
                    {t(key)}
                  </span>
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
