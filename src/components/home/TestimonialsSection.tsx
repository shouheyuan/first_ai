"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah K.", role: "E-commerce Owner", industry: "Fashion", quote: "CreatiAds cut our ad production time by 80%. We now test 5x more creatives every week.", avatar: "SK" },
  { name: "Mike L.", role: "Marketing Director", industry: "SaaS", quote: "Managing 20+ clients used to be chaos. Now we deliver fresh creatives for everyone in hours.", avatar: "ML" },
  { name: "Jessica T.", role: "Growth Lead", industry: "App Marketing", quote: "Our CPI dropped 50% after switching to CreatiAds AI-generated video ads.", avatar: "JT" },
  { name: "David W.", role: "Founder", industry: "Dropshipping", quote: "I launched 200 product tests in one month. CreatiAds made me a one-person ad agency.", avatar: "DW" },
  { name: "Linda C.", role: "Agency Owner", industry: "Digital Agency", quote: "Client retention went up 40% — we deliver 10x more creative options now.", avatar: "LC" },
  { name: "Tom R.", role: "Media Buyer", industry: "E-commerce", quote: "The AI ad optimization alone saved us $15K/month in wasted spend.", avatar: "TR" },
];

export default function TestimonialsSection() {
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
            Loved by <span className="text-gradient-primary">10,000+</span> Advertisers
          </h2>
          <p className="text-muted-foreground text-lg">See what marketers say about CreatiAds.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
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
              <p className="text-sm text-muted-foreground mb-4 italic leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role} · {t.industry}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
