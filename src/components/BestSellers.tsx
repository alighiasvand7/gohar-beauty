import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import ProductCard from "./ProductCard";

const products = [
  {
    name: "رژ لب مات حرفه‌ای با دوام بالا",
    brand: "برند لوکس",
    price: "۲،۵۰۰،۰۰۰",
    oldPrice: "۳،۰۰۰،۰۰۰",
    rating: 5,
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&q=80",
  },
  {
    name: "پالت سایه چشم ۱۶ رنگ با کیفیت بینظیر",
    brand: "برند پرستیژ",
    price: "۳،۸۰۰،۰۰۰",
    rating: 5,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500&q=80",
  },
  {
    name: "کرم پودر مایع با پوشش کامل",
    brand: "برند الیت",
    price: "۴،۲۰۰،۰۰۰",
    oldPrice: "۵،۰۰۰،۰۰۰",
    rating: 5,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&q=80",
  },
  {
    name: "ست مسواک و برس آرایشی لوکس",
    brand: "برند بیوتی",
    price: "۱،۹۰۰،۰۰۰",
    rating: 4,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&q=80",
  },
];

const BestSellers = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <div className="flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-rose-gold" />
            <h2 className="text-4xl md:text-5xl font-bold text-shimmer">
              پرفروش‌ترین محصولات
            </h2>
            <Sparkles className="w-8 h-8 text-rose-gold" />
          </div>
          <p className="text-lg text-carbon/70 max-w-2xl mx-auto">
            محبوب‌ترین انتخاب‌های مشتریان ما - کیفیت برتر، زیبایی بی‌نظیر
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <ProductCard key={product.name} {...product} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
