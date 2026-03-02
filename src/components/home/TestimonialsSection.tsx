"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";

interface TestimonialsSectionProps {
  namespace?: string;
}

export default function TestimonialsSection({ namespace = "default" }: TestimonialsSectionProps) {
  const t = useTranslations(namespace);
  
  // Helper function for testimonials translations
  const tt = (key: string) => t(`testimonials.${key}`);

  // Get testimonials data from translations
  const testimonialsData = t.raw("testimonials.items") as Array<{
    key: string;
    name: string;
    role: string;
    industry: string;
    quote: string;
    avatar: string;
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
            {tt("titlePrefix")} <span className="text-gradient-primary">{tt("titleHighlight")}</span> {tt("titleSuffix")}
          </h2>
          <p className="text-muted-foreground text-lg">{tt("description")}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonialsData.map((testimonial, i) => (
            <motion.div
              key={testimonial.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-card rounded-xl border p-6 shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 italic leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role} · {testimonial.industry}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
