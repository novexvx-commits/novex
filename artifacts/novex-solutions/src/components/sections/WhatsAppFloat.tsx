import { motion } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";

const WA_NUMBER = "201016058253";
const WA_MESSAGE = encodeURIComponent(
  "Hello, I'm reaching out via NOVEX Solutions website.",
);

export default function WhatsAppFloat() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 group"
      data-testid="whatsapp-float"
    >
      <a
        href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#25D366] to-[#1DA851] text-white shadow-lg shadow-[#25D366]/40 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/50 active:scale-95 transition-all duration-300"
      >
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#25D366] to-[#1DA851] wa-ping" />
        <span className="absolute inset-1 rounded-full bg-white/10 backdrop-blur-sm" />
        <SiWhatsapp size={26} className="relative z-10" />
      </a>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-foreground/10 backdrop-blur-md text-foreground text-sm font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        WhatsApp
      </span>
    </motion.div>
  );
}
