"use client";

import { motion } from "framer-motion";
import { ImageIcon, Video, Wand2, Zap, BarChart3, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

interface FeatureItem {
  icon: React.ElementType;
  key: string;
  color: string;
  href: string;
}

interface FeatureCardsProps {
  namespace?: string;
  features?: FeatureItem[];
}

const defaultFeatures: FeatureItem[] = [
  {
    icon: ImageIcon,
    key: "aiImage",
    color: "text-primary",
    href: "/tools/ai-image-generator",
  },
  {
    icon: Video,
    key: "aiVideo",
    color: "text-accent",
    href: "/ai-video-generator",
  },
  {
    icon: Wand2,
    key: "templates",
    color: "text-primary",
    href: "/creative-templates",
  },
  {
    icon: Zap,
    key: "adLaunch",
    color: "text-accent",
    href: "/one-click-ad-launch",
  },
  {
    icon: BarChart3,
    key: "optimization",
    color: "text-primary",
    href: "/ai-ad-optimization",
  },
  {
    icon: Globe,
    key: "multiPlatform",
    color: "text-accent",
    href: "/meta-ads-automation",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeatureCards({ 
  namespace = "features",
  features = defaultFeatures
}: FeatureCardsProps) {
  const t = useTranslations(namespace);

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("description")}
          </p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((f) => (
            <motion.div key={f.key} variants={item}>
              <Link
                href={f.href}
                className="group block bg-card rounded-xl border p-6 shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary mb-4 ${f.color}`}>
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{t(`items.${f.key}.title`)}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{t(`items.${f.key}.description`)}</p>
                <span className="text-sm font-medium text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {t("learnMore")} <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
