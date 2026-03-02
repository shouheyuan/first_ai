"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

interface CTASectionProps {
  namespace?: string;
}

export default function CTASection({ 
  namespace = "default"
}: CTASectionProps) {
  const t = useTranslations(namespace);

  const title = t("cta.title");
  const description = t("cta.description");
  const buttonText = t("cta.button");

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
            <Link href="/pricing">
              {buttonText} <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
