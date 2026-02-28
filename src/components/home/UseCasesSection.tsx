"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Rocket, BarChart3, Users } from "lucide-react";

const useCases = [
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description: "Generate product ads that convert shoppers into buyers.",
    href: "/e-commerce",
  },
  {
    icon: Rocket,
    title: "Dropshipping",
    description: "Test products faster with instant ad creative generation.",
    href: "/dropshipping",
  },
  {
    icon: BarChart3,
    title: "App Marketing",
    description: "Drive installs with compelling app install ads.",
    href: "/app-marketing",
  },
  {
    icon: Users,
    title: "Agencies",
    description: "Scale creative output across all your clients.",
    href: "/agencies",
  },
];

export default function UseCasesSection() {
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
            Built for <span className="text-gradient-primary">Every Business</span>
          </h2>
          <p className="text-muted-foreground text-lg">See how teams across industries use CreatiAds to grow.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={uc.href}
                className="group block bg-card rounded-xl border p-6 shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <uc.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{uc.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{uc.description}</p>
                <span className="text-sm font-medium text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
