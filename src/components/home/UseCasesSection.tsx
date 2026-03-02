"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Rocket, BarChart3, Users } from "lucide-react";
import { useTranslations } from "next-intl";

interface UseCasesSectionProps {
  namespace?: string;
}

// Icon mapping for serialization
const iconMap: Record<string, React.ElementType> = {
  ShoppingBag,
  Rocket,
  BarChart3,
  Users,
};

export default function UseCasesSection({ namespace = "default" }: UseCasesSectionProps) {
  const t = useTranslations(namespace);
  
  // Helper function for useCases translations
  const ut = (key: string) => t(`useCases.${key}`);

  // Get use cases data from translations
  const useCasesData = t.raw("useCases.items") as Array<{
    key: string;
    iconName: string;
    title: string;
    description: string;
    href: string;
  }>;

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {ut("titlePrefix")} <span className="text-gradient-primary">{ut("titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">{ut("description")}</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCasesData.map((useCase, i) => {
            const Icon = iconMap[useCase.iconName];
            
            return (
              <motion.div
                key={useCase.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={useCase.href}
                  className="group block bg-card rounded-xl border p-6 shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300 h-full"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">{useCase.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{useCase.description}</p>
                  <span className="text-sm font-medium text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {ut("explore")} <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
