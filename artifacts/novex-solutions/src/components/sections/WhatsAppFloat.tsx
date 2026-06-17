import { motion } from "framer-motion";
import { SiWhatsapp } from "react-icons/si";

export default function WhatsAppFloat() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 end-6 z-50"
      data-testid="whatsapp-float"
    >
      <a
        href="https://wa.me/96600000000"
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/50 transition-all duration-300"
        aria-label="WhatsApp"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] wa-ping" />
        <SiWhatsapp size={26} className="relative z-10" />
      </a>
    </motion.div>
  );
}
