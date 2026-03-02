"use client";

import { useState, useRef, useEffect } from "react";
import { locales, type Locale, localeLabels, localeFlags, defaultLocale } from "@/i18n/config";
import { usePathname, useRouter } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleLocaleChange = (newLocale: Locale) => {
    // usePathname 从 next-intl/navigation 返回的是不带 locale 前缀的路径
    // router.replace 会自动处理 locale 前缀的添加/移除
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Button variant="ghost" size="sm" className="gap-2 min-w-[100px] justify-start">
        <Globe className="h-4 w-4 shrink-0" />
        <span className="hidden sm:inline shrink-0">{localeFlags[currentLocale]}</span>
        <span className="hidden md:inline w-12 text-left truncate">{localeLabels[currentLocale]}</span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-full right-0 mt-1 w-40 bg-card rounded-lg border shadow-card-hover py-1 z-50"
          >
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => handleLocaleChange(locale)}
                className={`w-full px-3 py-2 text-sm flex items-center gap-2 hover:bg-secondary transition-colors ${
                  currentLocale === locale ? "text-primary" : "text-foreground"
                }`}
              >
                <span>{localeFlags[locale]}</span>
                <span>{localeLabels[locale]}</span>
                {currentLocale === locale && (
                  <span className="ml-auto text-primary">✓</span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
