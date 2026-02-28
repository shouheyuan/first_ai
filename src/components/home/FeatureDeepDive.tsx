"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Rocket, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import featureCreative from "@/assets/feature-ai-creative.jpg";
import featureLaunch from "@/assets/feature-ad-launch.jpg";
import featureOptimize from "@/assets/feature-ad-optimization.jpg";

// Type for imported images
import { StaticImageData } from "next/image";

const features = [
  {
    title: "AI Creative Generation",
    description:
      "Generate scroll-stopping ad creatives in seconds. Our AI understands your brand, audience, and goals to produce high-converting images and videos across every format.",
    bullets: [
      "Generate 50+ ad variations in one click",
      "Supports Meta, Google, TikTok formats",
      "Brand-consistent visuals every time",
    ],
    img: featureCreative,
    imgAlt: "AI Creative generation dashboard showing multiple ad formats",
    icon: Sparkles,
    cta: { label: "Try AI Creative", href: "/tools/ai-image-generator" },
  },
  {
    title: "One Click Ad Launch",
    description:
      "Publish campaigns across Meta, Google & TikTok with a single click. No more switching between ad managers — CreatiAds handles targeting, budgets, and placements automatically.",
    bullets: [
      "Cross-platform launch in seconds",
      "AI-optimized audience targeting",
      "Automated budget allocation",
    ],
    img: featureLaunch,
    imgAlt: "One-click ad launch dashboard with platform selection",
    icon: Rocket,
    cta: { label: "Launch Ads Now", href: "/one-click-ad-launch" },
  },
  {
    title: "AI Ad Optimization",
    description:
      "Our AI monitors performance 24/7 and automatically adjusts bids, budgets, and creatives to maximize your ROAS — so you can focus on strategy, not spreadsheets.",
    bullets: [
      "Real-time ROAS optimization",
      "Automated bid & budget adjustments",
      "AI-powered creative rotation",
    ],
    img: featureOptimize,
    imgAlt: "AI optimization dashboard with real-time performance charts",
    icon: BarChart3,
    cta: { label: "Optimize Smarter", href: "/ai-ad-optimization" },
  },
];

export default function FeatureDeepDive() {
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
            The Complete AI Ad{" "}
            <span className="text-gradient-accent">Closed Loop</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From creative generation to campaign launch to continuous optimization
            — one intelligent platform powers it all.
          </p>
        </motion.div>

        {/* Feature blocks */}
        <div className="flex flex-col gap-[120px]">
          {features.map((f, i) => {
            const isReversed = i % 2 === 1;
            const Icon = f.icon;

            return (
              <div
                key={f.title}
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
                      src={typeof f.img === 'string' ? f.img : (f.img as StaticImageData).src}
                      alt={f.imgAlt}
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
                    Step 0{i + 1}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {f.title}
                  </h3>

                  <p className="text-muted-foreground text-base leading-relaxed mb-5">
                    {f.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {f.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="default"
                    size="lg"
                    className="group/btn hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
                    asChild
                  >
                    <Link href={f.cta.href}>
                      {f.cta.label}
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
