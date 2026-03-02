"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Zap, TrendingUp, Target } from "lucide-react";
import { useTranslations } from "next-intl";

interface CTAConfig {
  textKey: string;
  href: string;
}

interface HeroSectionProps {
  // 多语言命名空间
  namespace?: string;
  // 配置对象 - 包含所有内容的 key
  config?: {
    cat?: CTAConfig;
    secondaryCTA?: CTAConfig;
  };
}

// 默认标语
const defaultSlogans = [
  { line1: "Your Ad Copilot", highlight: "in the AI Era" },
  { line1: "You Are Your Own", highlight: "Ad Expert" },
  { line1: "No Fear for", highlight: "Meta Ads" },
  { line1: "Create Stunning Ads", highlight: "10x Faster" }
];

export default function HeroSection({
  namespace = "default",
  config
}: HeroSectionProps) {
  const [sloganIdx, setSloganIdx] = useState(0);

  // 使用命名空间获取翻译
  const t = useTranslations(namespace);


  // 从 config 获取 key，然后通过 t() 获取实际文本
  const badge = t("hero.badge");
  const description = t("hero.description");

  // CTA 文本
  const primaryCTAText = t("hero.cta.primary");
  const secondaryCTAText = t("hero.cta.secondary");

  // CTA 链接
  const primaryHref = (config?.cat?.href as string) || "/pricing";
  const secondaryHref =
    (config?.secondaryCTA?.href as string) || "/tools/ai-image-generator";

  // 获取标语 - 尝试从多语言获取，否则使用默认值
  let slogans = defaultSlogans;
  const slogansFromT = t.raw("hero.slogans");
  if (Array.isArray(slogansFromT) && slogansFromT.length > 0) {
    slogans = slogansFromT;
  }

  // 获取信任徽章
  let trustBadges: string[] = [];
  const trustBadgesFromT = t.raw("hero.trustBadges");
  try {
    trustBadges = trustBadgesFromT;
  } catch {
    trustBadges = [];
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSloganIdx((prev) => (prev + 1) % slogans.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slogans.length]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <div className="container mx-auto relative py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium mb-6 border border-white/20">
              <Sparkles className="h-4 w-4 text-orange-400" />
              {badge}
            </div>

            {/* Animated slogan */}
            <div className="h-[140px] md:h-[160px] lg:h-[180px] mb-6">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={sloganIdx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
                >
                  {slogans[sloganIdx]?.line1} <br />
                  <span className="text-orange-400">
                    {slogans[sloganIdx]?.highlight}
                  </span>
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Description */}
            <p className="text-lg text-white/70 max-w-lg mb-8">{description}</p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href={primaryHref}
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg"
              >
                {primaryCTAText}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                {secondaryCTAText}
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex items-center gap-6 text-sm text-white/60">
              {trustBadges.map((badge: string, index: number) => (
                <span key={index}>✓ {badge}</span>
              ))}
            </div>
          </motion.div>

          {/* Right content - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main feature card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">
                      AI Creative Studio
                    </div>
                    <div className="text-white/60 text-sm">
                      Generating ad variations...
                    </div>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-4 w-4 text-green-400" />
                      <span className="text-white/60 text-xs">CTR</span>
                    </div>
                    <div className="text-2xl font-bold text-white">+127%</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-4 w-4 text-blue-400" />
                      <span className="text-white/60 text-xs">ROAS</span>
                    </div>
                    <div className="text-2xl font-bold text-white">4.5x</div>
                  </div>
                </div>

                {/* Preview cards */}
                <div className="space-y-3">
                  <div className="text-xs text-white/40 uppercase tracking-wider">
                    Generated Creatives
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gradient-to-br from-purple-500/80 to-pink-500/80 rounded-lg p-3 aspect-video flex flex-col justify-end">
                      <span className="text-white text-xs font-medium">
                        Summer Sale
                      </span>
                      <span className="text-white/60 text-[10px]">
                        1920x1080
                      </span>
                    </div>
                    <div className="bg-gradient-to-br from-blue-500/80 to-cyan-500/80 rounded-lg p-3 aspect-video flex flex-col justify-end">
                      <span className="text-white text-xs font-medium">
                        New Arrival
                      </span>
                      <span className="text-white/60 text-[10px]">
                        1080x1080
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Conversion Rate</div>
                    <div className="text-lg font-bold text-gray-900">+340%</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Time Saved</div>
                    <div className="text-lg font-bold text-gray-900">
                      40 hrs/week
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
