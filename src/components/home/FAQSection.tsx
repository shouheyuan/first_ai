"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  namespace?: string;
  faqs?: FAQItem[];
}

// 默认 FAQ 数据
const defaultFaqs: FAQItem[] = [
  {
    q: "What is CreatiAds?",
    a: "CreatiAds is an AI-powered platform that helps you generate high-converting ad creatives, launch campaigns across multiple platforms, and optimize performance automatically.",
  },
  {
    q: "How does the AI Image Generator work?",
    a: "Simply describe your product or provide a URL, and our AI generates professional ad images optimized for your target platform in seconds.",
  },
  {
    q: "Which ad platforms are supported?",
    a: "CreatiAds supports Meta (Facebook & Instagram), Google Ads, and TikTok Ads with full automation capabilities.",
  },
  {
    q: "Is there a free plan?",
    a: "Yes! We offer a generous free plan with 50 credits per month, plus free tools like ROAS calculators, ad headline generators, and more.",
  },
  {
    q: "How does CreatiAds compare to competitors?",
    a: "Unlike other tools that focus only on creative generation, CreatiAds combines AI creative generation with ad automation and optimization — all in one platform.",
  },
];

export default function FAQSection({ 
  namespace = "faq",
  faqs = defaultFaqs
}: FAQSectionProps) {
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
            Frequently Asked <span className="text-gradient-accent">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">Everything you need to know about CreatiAds.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-lg border px-6 shadow-card"
              >
                <AccordionTrigger className="text-left font-display font-semibold hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
