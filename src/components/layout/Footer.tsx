"use client";

import Link from "next/link";

const footerLinks = [
  {
    title: "AI Creative",
    links: [
      { label: "AI Image Generator", href: "/tools/ai-image-generator" },
      { label: "AI Video Generator", href: "/tools/ai-video-generator" },
      { label: "Creative Templates", href: "/tools/creative-templates" },
      { label: "Ad Creative Library", href: "/tools/ad-creative-library" },
    ],
  },
  {
    title: "AI Ads",
    links: [
      { label: "One Click Ad Launch", href: "/tools/one-click-ad-launch" },
      { label: "AI Ad Optimization", href: "/tools/ai-ad-optimization" },
      { label: "Meta Ads Automation", href: "/tools/meta-ads-automation" },
      { label: "Google Ads Automation", href: "/tools/google-ads-automation" },
      { label: "TikTok Ads Automation", href: "/tools/tiktok-ads-automation" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "E-commerce", href: "/solutions/e-commerce" },
      { label: "Dropshipping", href: "/solutions/dropshipping" },
      { label: "App Marketing", href: "/solutions/app-marketing" },
      { label: "Agencies", href: "/solutions/agencies" },
    ],
  },
  {
    title: "Free Tools",
    links: [
      { label: "Ad Headline Generator", href: "/free-tools" },
      { label: "ROAS Calculator", href: "/free-tools" },
      { label: "Ad Hook Analyzer", href: "/free-tools" },
      { label: "Prompt Optimizer", href: "/free-tools" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="font-display font-bold text-xl inline-block mb-3">
              <span className="text-primary">Creati</span>
              <span className="text-accent">Ads</span>
            </Link>
            <p className="text-sm text-background/50 max-w-xs">
              AI-powered ad creative generation and campaign automation platform.
            </p>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold text-sm text-background mb-3">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-background/50 hover:text-accent transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/40">© {new Date().getFullYear()} CreatiAds. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {["Twitter", "LinkedIn", "YouTube"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-background/40 hover:text-accent hover:scale-110 transition-all duration-200"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
