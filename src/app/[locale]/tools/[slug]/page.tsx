"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Upload, Sparkles, Image as ImageIcon, Video, Layers, BookOpen, Eye, EyeOff, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import demoCreative1 from "@/assets/demo-creative-1.jpg";
import demoCreative2 from "@/assets/demo-creative-2.jpg";
import demoCreative3 from "@/assets/demo-creative-3.jpg";

interface ToolPageProps {
  title: string;
  description: string;
  icon?: string;
}

const creativeNavCategories = [
  {
    title: "AI Creative",
    icon: Sparkles,
    items: [
      { label: "AI Image Generator", href: "/tools/ai-image-generator" },
      { label: "AI Video Generator", href: "/tools/ai-video-generator" },
      { label: "Creative Templates", href: "/tools/creative-templates" },
      { label: "Ad Creative Library", href: "/tools/ad-creative-library" },
    ],
  },
  {
    title: "AI Models",
    icon: Layers,
    items: [
      { label: "Sora", href: "/tools/sora" },
      { label: "Kling", href: "/tools/kling" },
      { label: "Seedance", href: "/tools/seedance" },
      { label: "Nano Banana", href: "/tools/nano-banana" },
    ],
  },
  {
    title: "AI Ads",
    icon: Eye,
    items: [
      { label: "One Click Ad Launch", href: "/tools/one-click-ad-launch" },
      { label: "AI Ad Optimization", href: "/tools/ai-ad-optimization" },
      { label: "Meta Ads Automation", href: "/tools/meta-ads-automation" },
      { label: "Google Ads Automation", href: "/tools/google-ads-automation" },
      { label: "TikTok Ads Automation", href: "/tools/tiktok-ads-automation" },
    ],
  },
];

const aiModels = ["Midjourney", "DALL·E 3", "Stable Diffusion XL", "Sora", "Kling"];
const resolutions = ["1:1 (1024×1024)", "16:9 (1920×1080)", "9:16 (1080×1920)", "4:3 (1024×768)", "3:4 (768×1024)"];

export default function ToolPage() {
  const params = useParams();
  const locale = (params.locale as string) as "en" | "cn";
  const slug = params?.slug as string;
  
  // Get tool info based on slug
  const toolInfo = getToolInfo(slug);
  const title = toolInfo.title;
  const description = toolInfo.description;
  const icon = toolInfo.icon;

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [prompt, setPrompt] = useState("");
  const [model, setModel] = useState(aiModels[0]);
  const [resolution, setResolution] = useState(resolutions[0]);
  const [numOutputs, setNumOutputs] = useState(1);
  const [isPublic, setIsPublic] = useState(true);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const credits = numOutputs * 8;

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Navbar locale={locale} />
      <div className="flex-1 flex overflow-hidden">
        {/* Left: Collapsible Sidebar Navigation */}
        <AnimatePresence initial={false}>
          {sidebarOpen && (
            <motion.aside
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 240, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border-r bg-card overflow-hidden shrink-0 hidden md:block"
            >
              <div className="w-[240px] p-4 space-y-4 h-full overflow-y-auto">
                <div className="flex items-center justify-between">
                  <Link href="/" className="font-display font-bold text-sm">
                    <span className="text-primary">Creati</span><span className="text-accent">Ads</span>
                  </Link>
                  <button onClick={() => setSidebarOpen(false)} className="p-1 rounded hover:bg-muted transition-colors">
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                </div>
                {creativeNavCategories.map((cat) => (
                  <div key={cat.title}>
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                      <cat.icon className="h-3.5 w-3.5" />
                      {cat.title}
                    </p>
                    <ul className="space-y-0.5">
                      {cat.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            className={`block w-full text-left px-3 py-1.5 text-sm rounded-md transition-colors ${
                              item.href === `/tools/${slug}`
                                ? "bg-primary text-primary-foreground"
                                : "text-foreground/70 hover:bg-secondary"
                            }`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col lg:flex-row min-h-[calc(100vh-4rem)] h-[calc(100vh-4rem)] overflow-hidden lg:overflow-visible">
          {/* Toggle sidebar when collapsed */}
          {!sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(true)}
              className="hidden md:flex items-center justify-center w-10 border-r bg-card hover:bg-muted transition-colors shrink-0"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          )}

          {/* Middle: Prompt Form */}
          <div className="w-full lg:w-[400px] xl:w-[440px] shrink-0 border-r flex flex-col h-full">
            <div className="flex-1 overflow-y-auto p-6">
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{icon}</span>
                  <h1 className="text-xl font-bold">{title}</h1>
                </div>

                <div className="space-y-5">
                {/* Model Selection */}
                <div>
                  <label className="text-sm font-medium mb-1.5 block">AI Model</label>
                  <Select value={model} onValueChange={setModel}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select AI Model" />
                    </SelectTrigger>
                    <SelectContent>
                      {aiModels.map((m) => (
                        <SelectItem key={m} value={m}>{m}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Reference Image Upload */}
                <div>
                  <label className="text-sm font-medium mb-1.5 block">
                    Reference Images <span className="text-muted-foreground font-normal">(max 5)</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {uploadedImages.map((img, i) => (
                      <div key={i} className="w-16 h-16 rounded-lg border bg-secondary/50 flex items-center justify-center relative group">
                        <ImageIcon className="h-6 w-6 text-primary/40" />
                        <button
                          onClick={() => setUploadedImages(uploadedImages.filter((_, index) => index !== i))}
                          className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md z-10"
                          title="Remove image"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                    {uploadedImages.length < 5 && (
                      <button
                        onClick={() => setUploadedImages([...uploadedImages, "placeholder"])}
                        className="w-16 h-16 rounded-lg border-2 border-dashed border-primary/30 flex flex-col items-center justify-center hover:bg-secondary/50 transition-colors"
                      >
                        <Upload className="h-4 w-4 text-primary/50" />
                        <span className="text-[10px] text-muted-foreground mt-0.5">Upload</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Prompt Input */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-sm font-medium">Prompt</label>
                    <button className="text-xs text-primary hover:underline flex items-center gap-1">
                      <Sparkles className="h-3 w-3" /> AI Generate
                    </button>
                  </div>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe the ad creative you want to generate..."
                    className="w-full min-h-[120px] rounded-lg border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-shadow resize-none"
                  />
                </div>

                {/* Resolution */}
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Resolution</label>
                  <Select value={resolution} onValueChange={setResolution}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Resolution" />
                    </SelectTrigger>
                    <SelectContent>
                      {resolutions.map((r) => (
                        <SelectItem key={r} value={r}>{r}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Number of Outputs */}
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Number of Outputs</label>
                  <Select
                    value={numOutputs.toString()}
                    onValueChange={(value) => setNumOutputs(Number(value))}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select number of outputs" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4].map((n) => (
                        <SelectItem key={n} value={n.toString()}>
                          {n}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Public Visibility Toggle */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Public Visibility</span>
                  <button
                    onClick={() => setIsPublic(!isPublic)}
                    className={`relative w-11 h-6 rounded-full transition-colors ${isPublic ? "bg-primary" : "bg-muted"}`}
                  >
                    <div className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-primary-foreground shadow-sm transition-transform ${isPublic ? "translate-x-5" : ""}`} />
                  </button>
                </div>

                {/* Credits Display */}
                <div className="bg-secondary/50 rounded-lg px-4 py-3 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Credits Cost</span>
                  <span className="font-display font-bold text-primary">{credits} credits</span>
                </div>

              </div>
            </motion.div>
          </div>
          {/* Generate Button - Fixed at bottom */}
          <div className="p-6 border-t bg-background">
            <button className="w-full bg-accent-gradient text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:scale-[1.02] transition-transform shadow-md text-sm">
              Generate
            </button>
          </div>
        </div>

        {/* Right: Result Preview */}
        <div className="flex-1 p-6 lg:p-8 bg-muted/30 overflow-y-auto">
            <motion.div
              key={title + "-preview"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              {prompt ? (
                <div>
                  <h3 className="font-display font-semibold text-lg mb-4">Generated Results</h3>
                  <div className="bg-card rounded-lg border p-6 shadow-card">
                    <p className="text-sm text-muted-foreground italic">
                      AI results will appear here after generation...
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Example Showcase */}
                  <div>
                    <h3 className="font-display font-bold text-xl mb-1">Reference Examples</h3>
                    <p className="text-sm text-muted-foreground mb-4">See what you can create with {title}</p>
                  </div>

                  {/* Example prompt + output */}
                  <div className="bg-card rounded-xl border p-6 shadow-card">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-primary">Example Prompt</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          A minimalist sneaker advertisement with neon blue and orange accents, floating product shot on gradient background, modern typography, social media ad format.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2 text-primary">Generated Output</h4>
                        <Image
                          src={demoCreative1}
                          alt="AI-generated sneaker ad creative"
                          width={400}
                          height={300}
                          className="w-full rounded-lg shadow-card hover:scale-[1.02] transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Gallery */}
                  <div>
                    <h4 className="font-semibold mb-3">More Examples</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <Image
                        src={demoCreative2}
                        alt="AI-generated perfume ad creative"
                        width={400}
                        height={300}
                        className="w-full rounded-lg shadow-card hover:scale-[1.02] transition-transform duration-300"
                      />
                      <Image
                        src={demoCreative3}
                        alt="AI-generated food delivery ad creative"
                        width={400}
                        height={300}
                        className="w-full rounded-lg shadow-card hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                  </div>

                  {/* How it works */}
                  <div className="bg-card rounded-xl border p-6 shadow-card">
                    <h4 className="font-semibold mb-3">How to Use {title}</h4>
                    <ol className="text-sm text-muted-foreground space-y-3 list-decimal list-inside">
                      <li>Select an AI model and upload reference images (optional)</li>
                      <li>Write a detailed prompt describing your desired ad creative</li>
                      <li>Choose resolution and number of outputs</li>
                      <li>Click <strong>Generate</strong> and review your results</li>
                      <li>Download, edit, or regenerate as needed</li>
                    </ol>
                  </div>

                  {/* Tips card */}
                  <div className="bg-secondary/50 rounded-xl border p-6">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-accent" /> Pro Tips
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Be specific about colors, style, and composition</li>
                      <li>• Upload reference images for style consistency</li>
                      <li>• Try different models for varied aesthetic results</li>
                      <li>• Generate multiple outputs to compare options</li>
                    </ul>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function to get tool info based on slug
function getToolInfo(slug: string): { title: string; description: string; icon: string } {
  const toolMap: Record<string, { title: string; description: string; icon: string }> = {
    "ai-image-generator": {
      title: "AI Image Generator",
      description: "Generate stunning ad creatives with AI",
      icon: "✨",
    },
    "ai-video-generator": {
      title: "AI Video Generator",
      description: "Create video ads with AI",
      icon: "🎬",
    },
    "creative-templates": {
      title: "Creative Templates",
      description: "Browse professional ad templates",
      icon: "📐",
    },
    "ad-creative-library": {
      title: "Ad Creative Library",
      description: "Explore ad creative examples",
      icon: "📚",
    },
    "sora": {
      title: "Sora",
      description: "OpenAI's text-to-video model",
      icon: "🎥",
    },
    "kling": {
      title: "Kling",
      description: "Advanced video generation model",
      icon: "🎬",
    },
    "seedance": {
      title: "Seedance",
      description: "AI video creation tool",
      icon: "💃",
    },
    "nano-banana": {
      title: "Nano Banana",
      description: "Compact video generation",
      icon: "🍌",
    },
    "one-click-ad-launch": {
      title: "One Click Ad Launch",
      description: "Launch ads instantly",
      icon: "🚀",
    },
    "ai-ad-optimization": {
      title: "AI Ad Optimization",
      description: "Optimize ad performance",
      icon: "📈",
    },
    "meta-ads-automation": {
      title: "Meta Ads Automation",
      description: "Automate Meta ads",
      icon: "👥",
    },
    "google-ads-automation": {
      title: "Google Ads Automation",
      description: "Automate Google ads",
      icon: "🔍",
    },
    "tiktok-ads-automation": {
      title: "TikTok Ads Automation",
      description: "Automate TikTok ads",
      icon: "🎵",
    },
  };

  return toolMap[slug] || {
    title: slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()),
    description: "AI-powered creative tool",
    icon: "✨",
  };
}
