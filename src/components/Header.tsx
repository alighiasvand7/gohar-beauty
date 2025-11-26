import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Search, ShoppingCart, User, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MegaMenu from "./MegaMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [cartCount] = useState(3);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 glass-luxury border-b border-rose-gold/20"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Right Side - Menu */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(true)}
              className="hover-glow rounded-xl"
            >
              <Menu className="w-6 h-6" />
            </Button>

            {/* Center - Logo & Search */}
            <div className="flex-1 flex flex-col items-center gap-3">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2"
              >
                <Sparkles className="w-6 h-6 text-rose-gold" />
                <h1 className="text-2xl font-bold text-shimmer">
                  زیبایی لوکس
                </h1>
              </motion.div>

              {/* Search Box */}
              <motion.div
                animate={{
                  scale: isSearchFocused ? 1.02 : 1,
                }}
                className="w-full max-w-xl"
              >
                <div className="relative">
                  <Input
                    placeholder="جستجو در محصولات، برندها..."
                    className={`pr-12 pl-4 py-6 rounded-2xl glass-luxury border-2 transition-all ${
                      isSearchFocused
                        ? "border-rose-gold shadow-pearl"
                        : "border-rose-gold/30"
                    }`}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                  />
                  <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                </div>
              </motion.div>
            </div>

            {/* Left Side - User & Cart */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="hover-glow rounded-xl"
              >
                <User className="w-5 h-5" />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="relative hover-glow rounded-xl"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -left-1 bg-gradient-glam text-pearl text-xs w-5 h-5 rounded-full flex items-center justify-center pearl-pulse"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mega Menu Drawer */}
      <MegaMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
