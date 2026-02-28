"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Zap, Shield, Users, BarChart3, Globe } from "lucide-react";
import { useTranslations } from "next-intl";

interface Feature {
  icon: React.ElementType;
  titleKey: string;
  descriptionKey: string;
}

interface FeaturesSectionProps {
  namespace?: string;
  features?: Feature[];
  showCheckmarks?: boolean;
}

const defaultFeatures: Feature[] = [
  {
    icon: Sparkles,
    titleKey: "features.aiCreative",
    descriptionKey: "features.aiCreativeDesc",
  },
  {
    icon: Zap,
    titleKey: "features.fastGeneration",
    descriptionKey: "features.fastGenerationDesc",
  },
  {
    icon: Shield,
    titleKey: "features.enterpriseSecurity",
    descriptionKey: "features.enterpriseSecurityDesc",
  },
  {
    icon: Users,
    titleKey: "features.teamCollaboration",
    descriptionKey: "features.teamCollaborationDesc",
  },
  {
    icon: BarChart3,
    titleKey: "features.analytics",
    descriptionKey: "features.analyticsDesc",
  },
  {
    icon: Globe,
    titleKey: "features.multiPlatform",
    descriptionKey: "features.multiPlatformDesc",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeaturesSection({
  namespace = "featuresSection",
  features = defaultFeatures,
  showCheckmarks = true,
}: FeaturesSectionProps) {
  const t = useTranslations(namespace);

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("description")}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className="group relative p-6 rounded-xl bg-card border shadow-card hover:shadow-card-hover transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {t(feature.titleKey)}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {t(feature.descriptionKey)}
                    </p>
                  </div>
                  {showCheckmarks && (
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-600" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
