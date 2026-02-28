"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Sparkles, BookOpen, Lightbulb } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import demoCreative1 from "@/assets/demo-creative-1.jpg";
import demoCreative2 from "@/assets/demo-creative-2.jpg";

interface ToolCategory {
  title: string;
  items: { label: string; href: string }[];
}

const toolCategories: ToolCategory[] = [
  {
    title: "AI Creative",
    items: [
      { label: "AI Image Generator", href: "/tools/ai-image-generator" },
      { label: "AI Video Generator", href: "/ai-video-generator" },
      { label: "Creative Templates", href: "/creative-templates" },
    ],
  },
  {
    title: "Ad Copy Tools",
    items: [
      { label: "Ad Headline Generator", href: "/free-tools" },
      { label: "TikTok Hook Generator", href: "/free-tools" },
      { label: "UGC Ad Script Generator", href: "/free-tools" },
      { label: "CTA Generator", href: "/free-tools" },
      { label: "Product Ad Copy Generator", href: "/free-tools" },
    ],
  },
  {
    title: "Ad Performance Tools",
    items: [
      { label: "ROAS Calculator", href: "/free-tools" },
      { label: "CTR Calculator", href: "/free-tools" },
      { label: "Break-Even ROAS Calculator", href: "/free-tools" },
      { label: "Ad Budget Allocator", href: "/free-tools" },
    ],
  },
  {
    title: "AI Prompt Tools",
    items: [
      { label: "Image Prompt Generator", href: "/free-tools" },
      { label: "Video Prompt Generator", href: "/free-tools" },
      { label: "Prompt Optimizer", href: "/free-tools" },
      { label: "Reverse Prompt Generator", href: "/free-tools" },
    ],
  },
  {
    title: "Ad Optimization",
    items: [
      { label: "Ad Hook Analyzer", href: "/free-tools" },
      { label: "Headline Emotion Analyzer", href: "/free-tools" },
      { label: "CTA Strength Analyzer", href: "/free-tools" },
      { label: "Ad Fatigue Analyzer", href: "/free-tools" },
    ],
  },
  {
    title: "Ad Intelligence",
    items: [
      { label: "Competitor Ad Analyzer", href: "/free-tools" },
      { label: "Ad Inspiration Finder", href: "/free-tools" },
      { label: "Ad Trend Analyzer", href: "/free-tools" },
    ],
  },
];

export default function FreeToolsPage() {
  const params = useParams();
  const locale = (params.locale as string) as "en" | "cn";
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [selectedTool, setSelectedTool] = useState("Ad Headline Generator");
  const [prompt, setPrompt] = useState("");
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar locale={locale} />
      <div className="flex-1 flex">
        {/* Sidebar */}
        <AnimatePresence initial={false}>
          {sidebarOpen && (
            <motion.aside
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 280, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border-r bg-card overflow-hidden shrink-0 hidden md:block"
            >
              <div className="w-[280px] p-4 space-y-4 h-full overflow-y-auto">
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-semibold text-sm">Tools</h3>
                  <button onClick={() => setSidebarOpen(false)} className="p-1 rounded hover:bg-muted transition-colors">
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                </div>
                {toolCategories.map((cat) => (
                  <div key={cat.title}>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">{cat.title}</p>
                    <ul className="space-y-0.5">
                      {cat.items.map((item) => (
                        <li key={item.label}>
                          <button
                            onClick={() => setSelectedTool(item.label)}
                            className={`w-full text-left px-3 py-1.5 text-sm rounded-md transition-colors ${
                              selectedTool === item.label
                                ? "bg-primary text-primary-foreground"
                                : "text-foreground/70 hover:bg-secondary"
                            }`}
                          >
                            {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main */}
        <div className="flex-1 flex flex-col lg:flex-row min-h-[calc(100vh-4rem)]">
          {/* Toggle sidebar when collapsed */}
          {!sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="hidden md:flex items-center justify-center w-10 border-r bg-card hover:bg-muted transition-colors shrink-0"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          )}

          {/* Input area */}
          <div className="flex-1 p-6 lg:p-8 flex flex-col">
            <motion.div
              key={selectedTool}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{selectedTool}</h1>
              <p className="text-muted-foreground mb-6">
                Enter your details below and let AI generate results for you.
              </p>
              <div className="space-y-4 max-w-xl">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder={`Describe your product or enter details for ${selectedTool}...`}
                  className="w-full min-h-[140px] rounded-lg border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow resize-none"
                />
                <button className="bg-accent-gradient text-accent-foreground px-6 py-2.5 rounded-lg text-sm font-semibold hover:scale-105 transition-transform shadow-md">
                  Generate
                </button>
              </div>
            </motion.div>
          </div>

          {/* Preview / Result area */}
          <div className="flex-1 border-t lg:border-t-0 lg:border-l p-6 lg:p-8 bg-muted/30">
            <motion.div
              key={selectedTool + "-preview"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="font-display font-semibold text-lg mb-4">Preview</h3>
              {prompt ? (
                <div className="bg-card rounded-lg border p-6 shadow-card">
                  <p className="text-sm text-muted-foreground italic">
                    AI results will appear here after generation...
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Default guidance content */}
                  <div className="bg-card rounded-xl border p-6 shadow-card">
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb className="h-5 w-5 text-accent" />
                      <h4 className="font-semibold">About {selectedTool}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Use our AI-powered {selectedTool.toLowerCase()} to create professional results in seconds.
                      Simply enter your product details or description and let the AI do the work.
                    </p>
                  </div>

                  {/* Example output images */}
                  <div className="bg-card rounded-xl border p-6 shadow-card">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary" /> Example Output
                    </h4>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <Image
                        src={demoCreative1}
                        alt="Example AI-generated ad creative"
                        width={400}
                        height={300}
                        className="w-full rounded-lg hover:scale-[1.02] transition-transform duration-300"
                      />
                      <Image
                        src={demoCreative2}
                        alt="Example AI-generated ad creative"
                        width={400}
                        height={300}
                        className="w-full rounded-lg hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Above: Sample AI-generated creatives. Your results will appear here after generating.
                    </p>
                  </div>

                  {/* How it works */}
                  <div className="bg-card rounded-xl border p-6 shadow-card">
                    <h4 className="font-semibold mb-3">How It Works</h4>
                    <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside">
                      <li>Enter your product or brand details in the prompt area</li>
                      <li>Select your preferences and tone</li>
                      <li>Click <strong>Generate</strong> to get AI-powered results</li>
                      <li>Copy, edit, or regenerate as needed</li>
                    </ol>
                  </div>

                  {/* Tips */}
                  <div className="bg-secondary/50 rounded-xl border p-6">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-accent" /> Pro Tips
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1.5">
                      <li>• Be specific about your target audience and product</li>
                      <li>• Include key selling points in your description</li>
                      <li>• Mention the platform (Meta, Google, TikTok) for optimized results</li>
                    </ul>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
