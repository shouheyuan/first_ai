"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

interface CTAConfig {
  textKey: string;
  href: string;
}

interface CTASectionConfig {
  titleKey?: string;
  descriptionKey?: string;
  cta?: CTAConfig;
}

interface CTASectionProps {
  namespace?: string;
  config?: CTASectionConfig;
}

export default function CTASection({ 
  namespace = "cta",
  config 
}: CTASectionProps) {
  const t = useTranslations(namespace);

  // 从 config 获取 key，然后通过 t() 获取实际文本
  const title = config?.titleKey ? t(config.titleKey) : t("title");
  const description = config?.descriptionKey ? t(config.descriptionKey) : t("description");
  
  // CTA 配置
  const ctaText = config?.cta?.textKey ? t(config.cta.textKey) : t("button");
  const ctaHref = config?.cta?.href || "/pricing";

  return (
    <section className="py-20 lg:py-28 bg-hero-gradient text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-accent/10 blur-3xl" />
      </div>
      <div className="container mx-auto relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-xl mx-auto mb-8">
            {description}
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link href={ctaHref}>
              {ctaText} <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
