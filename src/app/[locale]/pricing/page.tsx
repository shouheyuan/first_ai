"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useParams } from "next/navigation";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with AI ad tools",
    features: [
      "50 credits/month",
      "AI Image Generator",
      "Ad Copy Tools",
      "Free Calculators",
      "Basic Templates",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For growing businesses and marketers",
    features: [
      "500 credits/month",
      "All AI Generators",
      "AI Video Generator",
      "One Click Ad Launch",
      "Meta & Google Automation",
      "Priority Support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For agencies and large teams",
    features: [
      "Unlimited credits",
      "All Pro features",
      "TikTok Automation",
      "AI Ad Optimization",
      "Custom Integrations",
      "Dedicated Account Manager",
      "SLA & Priority Support",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function PricingPage() {
  const params = useParams();
  const locale = (params.locale as string) as "en" | "cn";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar locale={locale} />
      <main className="flex-1">
        <section className="py-20 lg:py-28">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-14"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Simple, Transparent <span className="text-gradient-accent">Pricing</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Start free. Scale as you grow. No hidden fees.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {plans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`relative rounded-2xl border p-8 flex flex-col ${
                    plan.highlighted
                      ? "bg-hero-gradient text-primary-foreground border-transparent shadow-xl scale-105"
                      : "bg-card shadow-card hover:shadow-card-hover transition-shadow"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-gradient text-accent-foreground px-4 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </div>
                  )}
                  <h3 className="font-display font-bold text-xl mb-1">{plan.name}</h3>
                  <p className={`text-sm mb-4 ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {plan.description}
                  </p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className={`text-sm ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {plan.period}
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className={`h-5 w-5 shrink-0 ${plan.highlighted ? "text-accent" : "text-primary"}`} />
                        <span className={`text-sm ${plan.highlighted ? "text-primary-foreground/90" : "text-foreground/80"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={plan.name === "Enterprise" ? "/contact" : "/signup"}
                    className={`w-full py-3 rounded-lg font-semibold text-center transition-all ${
                      plan.highlighted
                        ? "bg-white text-primary hover:bg-white/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}