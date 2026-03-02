"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "next-intl";

interface FAQSectionProps {
  namespace?: string;
}

export default function FAQSection({ 
  namespace = "default"
}: FAQSectionProps) {
  const t = useTranslations(namespace);
  
  // Helper function for FAQ translations
  const ft = (key: string) => t(`faq.${key}`);

  // Get FAQ items from translations
  const faqItems = t.raw("faq.items") as Array<{
    key: string;
    question: string;
    answer: string;
  }>;

  return (
    <section className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {ft("titlePrefix")} <span className="text-gradient-accent">{ft("titleHighlight")}</span>{ft("titleSuffix")}
          </h2>
          <p className="text-muted-foreground text-lg">{ft("description")}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((faq, i) => (
              <AccordionItem
                key={faq.key}
                value={`faq-${i}`}
                className="bg-card rounded-lg border px-6 shadow-card"
              >
                <AccordionTrigger className="text-left font-display font-semibold hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
