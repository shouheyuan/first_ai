"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useTranslations } from "next-intl";

interface PricingPageProps {
  params: { locale: string };
}

export default function PricingPage({ params: { locale } }: PricingPageProps) {
  console.log(locale, 'locale')
  const t = useTranslations("pricing");

  const plans = [
    { key: "free", highlighted: false },
    { key: "pro", highlighted: true },
    { key: "enterprise", highlighted: false },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar locale={locale as "en" | "cn"} />
      <main className="flex-1">
        <section className="py-20 lg:py-28">
          <div className="container mx-auto">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-2xl mx-auto mb-14"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {t("hero.titlePrefix")}{" "}
                <span className="text-gradient-accent">{t("hero.titleHighlight")}</span>
              </h1>
              <p className="text-lg text-muted-foreground">{t("hero.description")}</p>
            </motion.div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {plans.map((plan, i) => {
                const planData = t.raw(`plans.${plan.key}`) as {
                  name: string;
                  price: string;
                  period: string;
                  description: string;
                  badge?: string;
                  features: string[];
                  cta: string;
                };

                return (
                  <motion.div
                    key={plan.key}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={`relative rounded-2xl border p-8 flex flex-col ${plan.highlighted
                      ? "bg-hero-gradient text-primary-foreground border-transparent shadow-xl scale-105"
                      : "bg-card shadow-card hover:shadow-card-hover transition-shadow"
                      }`}
                  >
                    {/* Badge */}
                    {plan.highlighted && planData.badge && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-gradient text-accent-foreground px-4 py-1 rounded-full text-xs font-semibold">
                        {planData.badge}
                      </div>
                    )}

                    {/* Plan Info */}
                    <h3 className="font-display font-bold text-xl mb-1">{planData.name}</h3>
                    <p
                      className={`text-sm mb-4 ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"
                        }`}
                    >
                      {planData.description}
                    </p>

                    {/* Price */}
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{planData.price}</span>
                      <span
                        className={`text-sm ${plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"
                          }`}
                      >
                        {planData.period}
                      </span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-8 flex-1">
                      {planData.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check
                            className={`h-5 w-5 shrink-0 ${plan.highlighted ? "text-accent" : "text-primary"
                              }`}
                          />
                          <span
                            className={`text-sm ${plan.highlighted
                              ? "text-primary-foreground/90"
                              : "text-foreground/80"
                              }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                      href={plan.key === "enterprise" ? "/contact" : "/signup"}
                      className={`w-full py-3 rounded-lg font-semibold text-center transition-all ${plan.highlighted
                        ? "bg-white text-primary hover:bg-white/90"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                        }`}
                    >
                      {planData.cta}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
