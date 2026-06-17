import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SiWhatsapp, SiFacebook } from "react-icons/si";
import { Mail, Phone, MapPin, Send } from "lucide-react";
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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

export default function Contact() {
  const { t, lang } = useLanguage();
  const { toast } = useToast();
  const formReveal = useScrollReveal();

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = (_data: FormData) => {
    setTimeout(() => {
      toast({ title: t("contact.success") });
      form.reset();
    }, 600);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.email.label"),
      value: "novex.vx@gmail.com",
      href: "mailto:novex.vx@gmail.com",
      testId: "contact-email-link",
    },
    {
      icon: Phone,
      label: t("contact.phone.label"),
      value: t("contact.phone.value"),
      href: "tel:+96655000000",
      testId: "contact-phone-link",
    },
    {
      icon: MapPin,
      label: t("contact.location.label"),
      value: t("contact.location.value"),
      href: undefined,
      testId: "contact-location",
    },
  ];

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
            {t("contact.title")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black text-foreground mb-4"
          >
            {t("contact.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-base max-w-2xl mx-auto"
          >
            {t("contact.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Main */}
      <section ref={formReveal.ref} className="py-20 px-4 max-w-7xl mx-auto">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={formReveal.visible ? "show" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-5 gap-10"
        >
          {/* Form */}
          <motion.div variants={fadeUp} className="lg:col-span-3 bg-card border border-border rounded-2xl p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.name")}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={lang === "ar" ? "الاسم الكامل" : "Full Name"}
                            data-testid="input-name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("contact.email")}</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="example@email.com"
                            data-testid="input-email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.subject")}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={lang === "ar" ? "موضوع الرسالة" : "Message subject"}
                          data-testid="input-subject"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("contact.message")}</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder={lang === "ar" ? "اكتب رسالتك هنا..." : "Write your message here..."}
                          data-testid="input-message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <button
                  type="submit"
                  data-testid="button-submit"
                  disabled={form.formState.isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-primary text-primary-foreground font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] transition-all disabled:opacity-60"
                >
                  <Send size={16} />
                  {t("contact.send")}
                </button>
              </form>
            </Form>
          </motion.div>

          {/* Info */}
          <motion.div variants={fadeUp} className="lg:col-span-2 flex flex-col gap-5">
            {/* Contact info */}
            <div className="bg-card border border-border rounded-2xl p-7 space-y-5">
              {contactInfo.map(({ icon: Icon, label, value, href, testId }) => (
                <div key={testId} className="flex items-start gap-4" data-testid={testId}>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="bg-card border border-border rounded-2xl p-7">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                {t("footer.follow")}
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/96600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-whatsapp"
                  className="flex items-center gap-3 px-5 py-3.5 bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] font-semibold rounded-xl hover:bg-[#25D366] hover:text-white transition-all"
                >
                  <SiWhatsapp size={20} />
                  {t("contact.whatsapp.label")}
                </a>
                <a
                  href="https://facebook.com/novexsolutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="contact-facebook"
                  className="flex items-center gap-3 px-5 py-3.5 bg-[#1877F2]/10 border border-[#1877F2]/20 text-[#1877F2] font-semibold rounded-xl hover:bg-[#1877F2] hover:text-white transition-all"
                >
                  <SiFacebook size={20} />
                  {t("contact.facebook.label")}
                </a>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 h-40 flex items-center justify-center relative">
                <div className="text-center">
                  <MapPin size={32} className="text-primary mx-auto mb-2" />
                  <p className="text-sm font-semibold text-foreground">{t("contact.map.title")}</p>
                  <p className="text-xs text-muted-foreground mt-1">{t("contact.location.value")}</p>
                </div>
                {/* Decorative grid */}
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
