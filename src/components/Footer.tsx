import { motion } from "framer-motion";
import { Sparkles, Instagram, Send, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const footerLinks = [
    {
      title: "دسترسی سریع",
      links: ["درباره ما", "تماس با ما", "فرصت‌های شغلی", "بلاگ"],
    },
    {
      title: "خدمات مشتریان",
      links: ["سوالات متداول", "قوانین بازگشت", "پیگیری سفارش", "راهنمای خرید"],
    },
    {
      title: "حساب کاربری",
      links: ["ورود به حساب", "سفارش‌های من", "علاقه‌مندی‌ها", "آدرس‌ها"],
    },
  ];

  return (
    <footer className="relative mt-24 bg-gradient-luxury border-t border-rose-gold/20">
      {/* Top Glow Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-rose-gold rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-rose-gold" />
              <h3 className="text-2xl font-bold text-shimmer">زیبایی لوکس</h3>
            </div>
            <p className="text-carbon/70 leading-relaxed">
              فروشگاه آنلاین محصولات آرایشی و بهداشتی لوکس با بیش از ۱۰۰ برند معتبر
              جهانی. تجربه‌ای منحصر به فرد از خرید محصولات زیبایی پرمیوم.
            </p>

            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-semibold text-carbon">عضویت در خبرنامه</h4>
              <div className="flex gap-2">
                <Input
                  placeholder="ایمیل شما"
                  className="rounded-xl glass-luxury border-rose-gold/30"
                />
                <Button
                  size="icon"
                  className="rounded-xl bg-gradient-glam text-pearl hover:shadow-pearl"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex gap-3">
              {[Instagram, Send, Phone].map((Icon, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full glass-luxury flex items-center justify-center hover-glow"
                >
                  <Icon className="w-5 h-5 text-mauve" />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, idx) => (
            <div key={section.title} className="space-y-4">
              <h4 className="font-semibold text-lg text-carbon">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <motion.li
                    key={link}
                    whileHover={{ x: -5 }}
                    className="cursor-pointer"
                  >
                    <span className="text-carbon/70 hover:text-mauve transition-colors">
                      {link}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-luxury rounded-2xl p-6 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-right">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Phone className="w-5 h-5 text-rose-gold" />
              <span className="text-carbon/80">۰۲۱-۱۲۳۴۵۶۷۸</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Mail className="w-5 h-5 text-rose-gold" />
              <span className="text-carbon/80">info@luxurybeauty.ir</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <MapPin className="w-5 h-5 text-rose-gold" />
              <span className="text-carbon/80">تهران، خیابان ولیعصر</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-rose-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-carbon/60">
            <p>© ۱۴۰۳ زیبایی لوکس. تمامی حقوق محفوظ است.</p>
            <div className="flex gap-6">
              <span className="hover:text-mauve cursor-pointer transition-colors">
                حریم خصوصی
              </span>
              <span className="hover:text-mauve cursor-pointer transition-colors">
                قوانین و مقررات
              </span>
              <span className="hover:text-mauve cursor-pointer transition-colors">
                شرایط استفاده
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
