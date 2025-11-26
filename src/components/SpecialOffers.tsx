import { motion } from "framer-motion";
import { Clock, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const SpecialOffers = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-glam opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--rose-gold-mist)) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }} />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-luxury rounded-[3rem] p-12 md:p-16 shadow-elegant"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="flex-1 space-y-6 text-center md:text-right">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block"
              >
                <Gift className="w-16 h-16 text-rose-gold" />
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-shimmer">
                پیشنهادهای شگفت‌انگیز
              </h2>

              <p className="text-xl text-carbon/70 leading-relaxed">
                تخفیف‌های ویژه تا ۵۰٪ روی محصولات منتخب
                <br />
                فرصت طلایی برای خرید محصولات لوکس
              </p>

              <Button
                size="lg"
                className="bg-gradient-glam text-pearl hover:shadow-glow rounded-2xl px-8 py-6 text-lg font-semibold"
              >
                مشاهده تخفیف‌ها
              </Button>
            </div>

            {/* Right - Timer */}
            <div className="flex-1">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Clock className="w-6 h-6 text-berry" />
                <span className="text-lg font-semibold text-berry">
                  زمان باقی‌مانده
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                {[
                  { label: "ساعت", value: timeLeft.hours },
                  { label: "دقیقه", value: timeLeft.minutes },
                  { label: "ثانیه", value: timeLeft.seconds },
                ].map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, type: "spring" }}
                    className="glass-luxury rounded-2xl p-6 shadow-soft text-center"
                  >
                    <motion.div
                      key={item.value}
                      initial={{ scale: 1.2, color: "hsl(var(--berry))" }}
                      animate={{ scale: 1, color: "hsl(var(--carbon-satin))" }}
                      transition={{ duration: 0.3 }}
                      className="text-4xl md:text-5xl font-bold text-shimmer mb-2"
                    >
                      {item.value.toString().padStart(2, "0")}
                    </motion.div>
                    <div className="text-sm text-carbon/60">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialOffers;
