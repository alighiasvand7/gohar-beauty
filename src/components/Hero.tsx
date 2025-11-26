import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowLeft } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-rose-gold/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-mauve/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Floating Sparkles */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex justify-center"
          >
            <Sparkles className="w-16 h-16 text-rose-gold" />
          </motion.div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="text-shimmer block mb-4">
              دنیای زیبایی را
            </span>
            <span className="text-carbon">
              تجربه کنید
            </span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-carbon/70 max-w-2xl mx-auto leading-relaxed"
          >
            مجموعه‌ای منحصر به فرد از برترین محصولات آرایشی و بهداشتی لوکس
            <br />
            برای زیبایی شما
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Button
              size="lg"
              className="bg-gradient-glam text-pearl hover:shadow-glow rounded-2xl px-8 py-6 text-lg font-semibold group"
            >
              خرید محصولات
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="glass-luxury hover-glow rounded-2xl px-8 py-6 text-lg font-semibold border-2 border-rose-gold"
            >
              محصولات ویژه
            </Button>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-16"
          >
            {[
              { number: "+۵۰۰", label: "محصول لوکس" },
              { number: "+۱۰۰", label: "برند معتبر" },
              { number: "+۱۰،۰۰۰", label: "مشتری راضی" },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.2 + idx * 0.1, type: "spring" }}
                className="glass-luxury rounded-2xl p-6 shadow-soft"
              >
                <div className="text-3xl font-bold text-shimmer mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-carbon/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-rose-gold rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-rose-gold rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
