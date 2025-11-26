import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Heart, Star, Gift, BookOpen, Phone, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  {
    title: "دسته‌بندی محصولات",
    icon: Sparkles,
    items: ["آرایش صورت", "آرایش چشم", "آرایش لب", "پوست و مو", "عطر و ادکلن", "لوازم آرایشی"],
  },
  {
    title: "برندها",
    icon: Star,
    items: ["برندهای لوکس", "برندهای طبیعی", "برندهای ایرانی", "برندهای جدید"],
  },
  {
    title: "پرفروش‌ترین‌ها",
    icon: Heart,
    items: ["محصولات ویژه", "تخفیف‌های شگفت‌انگیز", "جدیدترین محصولات"],
  },
  {
    title: "مجله زیبایی",
    icon: BookOpen,
    items: ["آموزش آرایش", "مراقبت از پوست", "ترندهای آرایشی", "مشاوره زیبایی"],
  },
  {
    title: "خدمات مشتریان",
    icon: Phone,
    items: ["پشتیبانی آنلاین", "قوانین بازگشت", "سیاست حریم خصوصی", "سوالات متداول"],
  },
  {
    title: "درباره ما",
    icon: Info,
    items: ["داستان ما", "تماس با ما", "همکاری با ما"],
  },
];

const MegaMenu = ({ isOpen, onClose }: MegaMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-carbon/40 backdrop-blur-md z-[60]"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-gradient-luxury shadow-elegant z-[70] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-pearl/95 backdrop-blur-lg p-6 border-b border-rose-gold/20 z-10">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-shimmer">منوی اصلی</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className="hover-glow rounded-full"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
            </div>

            {/* Menu Items */}
            <div className="p-6 space-y-6">
              {menuItems.map((section, idx) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex items-center gap-2 pb-2 border-b border-rose-gold/30">
                    <section.icon className="w-5 h-5 text-mauve" />
                    <h3 className="font-semibold text-lg text-carbon">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="space-y-2 pr-7">
                    {section.items.map((item) => (
                      <motion.li
                        key={item}
                        whileHover={{ x: -5 }}
                        className="cursor-pointer"
                      >
                        <span className="text-carbon/80 hover:text-mauve transition-colors">
                          {item}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Footer CTA */}
            <div className="sticky bottom-0 bg-gradient-glam p-6 border-t border-pearl/20">
              <Button className="w-full bg-pearl text-mauve hover:bg-pearl/90 rounded-2xl py-6 text-lg font-semibold shadow-soft hover-glow">
                <Gift className="w-5 h-5 ml-2" />
                پیشنهادهای ویژه
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;
