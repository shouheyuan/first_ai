"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

interface Logo {
  name: string;
  url?: string;
}

interface LogoCloudProps {
  namespace?: string;
  config?: {
    logos?: Logo[];
  };
}

const defaultLogos: Logo[] = [
  { name: "Shopify" },
  { name: "Meta" },
  { name: "Google" },
  { name: "TikTok" },
  { name: "Amazon" },
  { name: "Stripe" },
  { name: "Notion" },
  { name: "Figma" }
];

export default function LogoCloud({ namespace = "default", config }: LogoCloudProps) {
  const t = useTranslations(namespace);
  const logos = config?.logos || defaultLogos;

  return (
    <section className="py-16 bg-background border-y">
      <div className="container mx-auto">
        <p className="text-center text-sm font-medium text-muted-foreground mb-8">
          {t("logoCloud.title")}
        </p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
        >
          {logos.map((logo, index) => (
            <span
              key={logo.name + index}
              className="text-lg font-display font-semibold text-muted-foreground/40 hover:text-primary/60 transition-colors duration-200"
            >
              {logo.name}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
