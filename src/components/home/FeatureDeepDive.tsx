"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Rocket, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import featureCreative from "@/assets/feature-ai-creative.jpg";
import featureLaunch from "@/assets/feature-ad-launch.jpg";
import featureOptimize from "@/assets/feature-ad-optimization.jpg";

// Type for imported images
import { StaticImageData } from "next/image";

// Icon mapping for serialization
const iconMap: Record<string, React.ElementType> = {
  Sparkles,
  Rocket,
  BarChart3,
};

const imageMap: Record<string, StaticImageData> = {
  featureCreative,
  featureLaunch,
  featureOptimize,
};

interface DeepDiveFeature {
  key: string;
  iconName: string;
  imageKey: string;
  ctaHref: string;
}

const defaultFeatures: DeepDiveFeature[] = [
  {
    key: "aiCreative",
    iconName: "Sparkles",
    imageKey: "featureCreative",
    ctaHref: "/tools/ai-image-generator",
  },
  {
    key: "adLaunch",
    iconName: "Rocket",
    imageKey: "featureLaunch",
    ctaHref: "/one-click-ad-launch",
  },
  {
    key: "adOptimization",
    iconName: "BarChart3",
    imageKey: "featureOptimize",
    ctaHref: "/ai-ad-optimization",
  },
];

export default function FeatureDeepDive({ namespace = "default" , config = {} }: { namespace?: string , config?: Record<string, string> }) {
  const t = useTranslations(namespace);

  // Get section title and subtitle
  const sectionTitle = t("featureDeepDive.title");
  const sectionSubtitle = t("featureDeepDive.subtitle");
  const stepLabel = t("featureDeepDive.stepLabel");

  return (
    <section className="py-[140px] bg-muted/20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-[1200px] relative">
        {/* Section H2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {sectionTitle.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="text-gradient-accent">
              {sectionTitle.split(" ").slice(-2).join(" ")}
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {sectionSubtitle}
          </p>
        </motion.div>

        {/* Feature blocks */}
        <div className="flex flex-col gap-[120px]">
          {defaultFeatures.map((feature, i) => {
            const isReversed = i % 2 === 1;
            const Icon = iconMap[feature.iconName];
            const img = imageMap[feature.imageKey];

            // Get translated content for this feature
            const title = t(`featureDeepDive.features.${feature.key}.title`);
            const description = t(`featureDeepDive.features.${feature.key}.description`);
            const bullets = t.raw(`featureDeepDive.features.${feature.key}.bullets`) as string[];
            const imgAlt = t(`featureDeepDive.features.${feature.key}.imgAlt`);
            const ctaLabel = t(`featureDeepDive.features.${feature.key}.ctaLabel`);

            return (
              <div
                key={feature.key}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  isReversed ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Image — always first on mobile, alternates on desktop */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`${isReversed ? "lg:order-2" : "lg:order-1"}`}
                >
                  <div className="group relative rounded-2xl overflow-hidden shadow-card-hover border border-border/50 bg-card">
                    <img
                      src={typeof img === 'string' ? img : (img as StaticImageData).src}
                      alt={imgAlt}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                    {/* Overlay glow on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </motion.div>

                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className={`${isReversed ? "lg:order-1" : "lg:order-2"}`}
                >
                  <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest mb-4">
                    <Icon className="h-3.5 w-3.5" />
                    {stepLabel} 0{i + 1}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {title}
                  </h3>

                  <p className="text-muted-foreground text-base leading-relaxed mb-5">
                    {description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="default"
                    size="lg"
                    className="group/btn hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                    asChild
                  >
                    <Link href={feature.ctaHref}>
                      {ctaLabel}
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
