import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SiWhatsapp, SiFacebook } from "react-icons/si";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
});
type FormData = z.infer<typeof schema>;

const WA_MESSAGE = encodeURIComponent("Hello, I'm reaching out via NOVEX Solutions website.");

export default function Contact() {
  const { t, lang } = useLanguage();
  const { toast } = useToast();
  const formReveal = useScrollReveal();
  const [sending, setSending] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = (_data: FormData) => {
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: t("contact.success") });
      form.reset();
    }, 1200);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
            {t("contact.title")}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-foreground mb-4">
            {t("contact.title")}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base max-w-2xl mx-auto">
            {t("contact.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Quick contact chips */}
      <div className="max-w-4xl mx-auto px-4 -mt-6 mb-10 flex flex-wrap gap-3 justify-center">
        <a href="mailto:novex.vx@gmail.com"
          className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground hover:border-primary/40 hover:shadow-md transition-all shadow-sm">
          <Mail size={14} className="text-primary" /> novex.vx@gmail.com
        </a>
        <a href={`https://wa.me/96600000000?text=${WA_MESSAGE}`} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground hover:border-[#25D366]/40 hover:shadow-md transition-all shadow-sm">
          <SiWhatsapp size={14} className="text-[#25D366]" /> WhatsApp
        </a>
        <a href="https://facebook.com/novexsolutions" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground hover:border-[#1877F2]/40 hover:shadow-md transition-all shadow-sm">
          <SiFacebook size={14} className="text-[#1877F2]" /> Facebook
        </a>
      </div>

      {/* Main content */}
      <section ref={formReveal.ref} className="py-6 px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={formReveal.visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* ── FORM (spans 2 cols) ── */}
          <div className="lg:col-span-2 bg-card border border-border rounded-2xl p-8 lg:p-10">
            <h2 className="text-xl font-black text-foreground mb-7">
              {lang === "ar" ? "أرسل لنا رسالة" : "Send us a message"}
            </h2>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.name")}</FormLabel>
                      <FormControl>
                        <Input placeholder={lang === "ar" ? "الاسم الكامل" : "Full Name"}
                          data-testid="input-name" className="h-11" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                  <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.email")}</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="example@email.com"
                          data-testid="input-email" className="h-11" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
                <FormField control={form.control} name="subject" render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.subject")}</FormLabel>
                    <FormControl>
                      <Input placeholder={lang === "ar" ? "موضوع الرسالة" : "Message subject"}
                        data-testid="input-subject" className="h-11" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("contact.message")}</FormLabel>
                    <FormControl>
                      <Textarea rows={6}
                        placeholder={lang === "ar" ? "اكتب رسالتك هنا..." : "Write your message here..."}
                        data-testid="input-message" className="resize-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

                {/* Water / liquid button */}
                <button
                  type="submit"
                  data-testid="button-submit"
                  disabled={sending}
                  className="group relative w-full h-13 h-[52px] overflow-hidden rounded-xl font-bold text-sm text-white transition-all disabled:opacity-60"
                  style={{ background: "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(192,95%,40%) 100%)" }}
                >
                  {/* Liquid wave */}
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "radial-gradient(ellipse 120% 60% at 50% 120%, rgba(255,255,255,0.2) 0%, transparent 70%)",
                    }}
                  />
                  {/* Shimmer sweep */}
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)" }} />

                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {sending ? (
                      <><Loader2 size={16} className="animate-spin" />
                        {lang === "ar" ? "جاري الإرسال..." : "Sending..."}</>
                    ) : (
                      <><Send size={15} />{t("contact.send")}</>
                    )}
                  </span>
                </button>
              </form>
            </Form>
          </div>

          {/* ── SIDEBAR ── */}
          <div className="flex flex-col gap-5">
            {/* Contact info */}
            <div className="bg-card border border-border rounded-2xl p-6 space-y-5">
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                {lang === "ar" ? "معلومات التواصل" : "Contact Info"}
              </h3>
              {[
                { icon: Mail, label: t("contact.email.label"), value: "novex.vx@gmail.com", href: "mailto:novex.vx@gmail.com", color: "text-blue-500", bg: "bg-blue-500/10" },
                { icon: Phone, label: t("contact.phone.label"), value: t("contact.phone.value"), href: "tel:+96655000000", color: "text-cyan-500", bg: "bg-cyan-500/10" },
                { icon: MapPin, label: t("contact.location.label"), value: t("contact.location.value"), href: undefined, color: "text-purple-500", bg: "bg-purple-500/10" },
              ].map(({ icon: Icon, label, value, href, color, bg }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-xl ${bg} flex items-center justify-center shrink-0`}>
                    <Icon size={15} className={color} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm font-semibold text-foreground hover:text-primary transition-colors">{value}</a>
                    ) : (
                      <p className="text-sm font-semibold text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
              <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">
                {t("footer.follow")}
              </h3>
              <a href={`https://wa.me/96600000000?text=${WA_MESSAGE}`}
                target="_blank" rel="noopener noreferrer" data-testid="contact-whatsapp"
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[#25D366]/20 bg-[#25D366]/5 text-[#25D366] font-semibold text-sm hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all">
                <SiWhatsapp size={18} /> WhatsApp
              </a>
              <a href="https://facebook.com/novexsolutions"
                target="_blank" rel="noopener noreferrer" data-testid="contact-facebook"
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[#1877F2]/20 bg-[#1877F2]/5 text-[#1877F2] font-semibold text-sm hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all">
                <SiFacebook size={18} /> Facebook
              </a>
            </div>

            {/* Map placeholder */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden flex-1 min-h-[140px]">
              <div className="relative h-full min-h-[140px] bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                <div className="relative text-center">
                  <MapPin size={28} className="text-primary mx-auto mb-2" />
                  <p className="text-sm font-bold text-foreground">{t("contact.map.title")}</p>
                  <p className="text-xs text-muted-foreground mt-1">{t("contact.location.value")}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <div className="pb-16" />
    </div>
  );
}
