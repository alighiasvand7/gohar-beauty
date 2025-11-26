import { motion } from "framer-motion";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  brand: string;
  price: string;
  oldPrice?: string;
  rating: number;
  image: string;
  delay?: number;
}

const ProductCard = ({
  name,
  brand,
  price,
  oldPrice,
  rating,
  image,
  delay = 0,
}: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      <div className="glass-luxury rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-gradient-luxury">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Overlay Actions */}
          <div className="absolute inset-0 bg-carbon/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
            <Button
              size="icon"
              className="rounded-full bg-pearl hover:bg-pearl/90 text-mauve shadow-pearl"
            >
              <Heart className="w-5 h-5" />
            </Button>
            <Button
              size="icon"
              className="rounded-full bg-gradient-glam text-pearl shadow-pearl hover-glow"
            >
              <ShoppingCart className="w-5 h-5" />
            </Button>
          </div>

          {/* Discount Badge */}
          {oldPrice && (
            <div className="absolute top-4 left-4 bg-berry text-pearl px-3 py-1 rounded-full text-sm font-semibold shadow-soft">
              تخفیف ویژه
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          {/* Brand */}
          <div className="text-sm text-mauve font-medium">{brand}</div>

          {/* Product Name */}
          <h3 className="font-semibold text-carbon line-clamp-2 min-h-[3rem]">
            {name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < rating
                    ? "fill-rose-gold text-rose-gold"
                    : "text-rose-gold/30"
                }`}
              />
            ))}
            <span className="text-sm text-carbon/60 mr-2">({rating}.۰)</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-shimmer">{price}</span>
            <span className="text-sm text-carbon/60">تومان</span>
            {oldPrice && (
              <span className="text-sm text-carbon/40 line-through mr-auto">
                {oldPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
