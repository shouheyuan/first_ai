"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Star, ImageIcon, Rocket, BarChart3 } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQSection from "@/components/home/FAQSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import demoCreative1 from "@/assets/demo-creative-1.jpg";
import demoCreative2 from "@/assets/demo-creative-2.jpg";
import demoCreative3 from "@/assets/demo-creative-3.jpg";
import workflowVisual from "@/assets/workflow-visual.png";

interface SolutionData {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  useCases: string[];
  benefits: string[];
}

const solutionsData: Record<string, SolutionData> = {
  "e-commerce": {
    title: "E-commerce",
    subtitle: "Supercharge your online store ads",
    description: "Generate product-focused ad creatives that convert shoppers into buyers. CreatiAds understands e-commerce and creates scroll-stopping visuals for your products.",
    features: ["Product image enhancement", "Dynamic ad creative generation", "Multi-format support (carousel, video, static)", "Automated A/B testing"],
    useCases: ["Product launches", "Seasonal campaigns", "Retargeting creatives", "Brand awareness"],
    benefits: ["3x faster creative production", "40% higher CTR on average", "Save $2,000+/month on design costs"],
  },
  dropshipping: {
    title: "Dropshipping",
    subtitle: "Test products faster with AI ads",
    description: "Launch and test dropshipping products at lightning speed. Generate ads from product URLs and automate campaigns across platforms.",
    features: ["URL-to-ad generation", "Rapid creative testing", "Budget optimization", "Winning ad identification"],
    useCases: ["Product testing", "Scaling winners", "Multi-product campaigns", "International expansion"],
    benefits: ["Test 10x more products", "Find winners 5x faster", "Reduce CPA by 35%"],
  },
  "app-marketing": {
    title: "App Marketing",
    subtitle: "Drive installs with AI-powered creatives",
    description: "Create compelling app install ads that showcase your app's value proposition and drive high-quality downloads.",
    features: ["App store screenshot ads", "Video preview generation", "Install campaign automation", "ROAS optimization"],
    useCases: ["App launches", "User acquisition", "Re-engagement campaigns", "Feature announcements"],
    benefits: ["50% lower CPI", "2x install rate improvement", "Automated UA scaling"],
  },
  agencies: {
    title: "Agencies",
    subtitle: "Scale creative output for all your clients",
    description: "Manage multiple client accounts from one platform. Generate on-brand creatives and automate campaigns for every client.",
    features: ["Multi-client workspace", "Brand kit management", "White-label reports", "Team collaboration"],
    useCases: ["Client onboarding", "Monthly creative refreshes", "Cross-platform campaigns", "Performance reporting"],
    benefits: ["Handle 5x more clients", "80% less creative turnaround time", "Higher client retention"],
  },
  "generate-more-creatives": {
    title: "Generate More Creatives",
    subtitle: "Never run out of fresh ad ideas",
    description: "Use AI to generate hundreds of unique ad variations in minutes. Test more, learn faster, and find your winning creative.",
    features: ["Bulk creative generation", "Style variations", "Copy alternatives", "Format adaptation"],
    useCases: ["Creative testing at scale", "Fighting ad fatigue", "Seasonal refreshes", "A/B testing"],
    benefits: ["100+ variations in minutes", "Beat ad fatigue permanently", "Data-driven creative decisions"],
  },
  "launch-ads-faster": {
    title: "Launch Ads Faster",
    subtitle: "From idea to live ad in minutes",
    description: "Eliminate the creative bottleneck. Generate ads and launch campaigns across platforms with a single click.",
    features: ["One-click launch", "Auto-formatted creatives", "Campaign templates", "Instant preview"],
    useCases: ["Time-sensitive promotions", "Flash sales", "Trending content", "Competitor response"],
    benefits: ["Launch in under 5 minutes", "Zero design wait time", "React to trends instantly"],
  },
  "scale-ads-automatically": {
    title: "Scale Ads Automatically",
    subtitle: "Let AI handle the optimization",
    description: "Automatically scale winning campaigns, pause underperformers, and reallocate budgets for maximum ROAS.",
    features: ["Auto-scaling rules", "Budget reallocation", "Performance alerts", "Predictive optimization"],
    useCases: ["Campaign scaling", "Budget optimization", "Multi-market expansion", "Performance management"],
    benefits: ["3.5x average ROAS", "24/7 automated optimization", "Budget waste eliminated"],
  },
};

const demoImages = [demoCreative1, demoCreative2, demoCreative3];

export default function SolutionPage({ params: pageParams }: { params?: { slug?: string } }) {
  const routeParams = useParams();
  const locale = (routeParams?.locale as string) as "en" | "cn";
  // In Next.js App Router, we can get the slug from params prop or from URL params
  const slug = pageParams?.slug || (routeParams?.slug as string);
  const data = solutionsData[slug];

  if (!data) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar locale={locale} />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-muted-foreground">Solution not found.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar locale={locale} />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-hero-gradient text-primary-foreground py-20 lg:py-28">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <p className="text-sm font-medium text-accent mb-3 uppercase tracking-wider">Solutions</p>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h1>
                <p className="text-xl text-primary-foreground/70 mb-6">{data.subtitle}</p>
                <p className="text-primary-foreground/60 max-w-2xl mb-8">{data.description}</p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/pricing" className="inline-flex items-center gap-2 bg-accent-gradient text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform shadow-lg">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/tools/ai-image-generator" className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 backdrop-blur-sm px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/20 transition-all">
                    Try AI Generator
                  </Link>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden lg:block">
                <img src={demoCreative1.src} alt={`${data.title} ad creative example`} className="rounded-2xl shadow-2xl animate-float" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-background">
          <div className="container mx-auto">
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {data.benefits.map((b, i) => (
                <motion.div key={b} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center bg-card rounded-xl border p-6 shadow-card">
                  <p className="font-display font-bold text-lg text-primary">{b}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow visual */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-3xl font-bold mb-4">The AI Ad <span className="text-gradient-accent">Closed Loop</span></h2>
              <p className="text-muted-foreground">AI Creative → AI Ads Publishing → AI Ads Running</p>
            </motion.div>
            <motion.img initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} src={workflowVisual.src} alt="AI workflow" className="max-w-4xl mx-auto w-full rounded-2xl shadow-card" />
          </div>
        </section>

        {/* Features + Use Cases */}
        <section className="py-20 container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <ul className="space-y-4">
                {data.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-foreground/80">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold mb-6">Use Cases</h2>
              <div className="grid grid-cols-2 gap-3">
                {data.useCases.map((uc) => (
                  <div key={uc} className="bg-card rounded-lg border p-4 shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300">
                    <p className="text-sm font-medium">{uc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto">
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-3xl font-bold mb-4">See It in Action</h2>
              <p className="text-muted-foreground">AI-generated ad creatives tailored for {data.title.toLowerCase()} campaigns.</p>
            </motion.div>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {demoImages.map((img, i) => (
                <motion.img key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} src={img.src} alt={`Demo creative ${i + 1}`} className="rounded-xl shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300" />
              ))}
            </div>
          </div>
        </section>

        <TestimonialsSection />
        <ComparisonSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
