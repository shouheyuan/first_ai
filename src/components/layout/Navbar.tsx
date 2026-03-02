"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { type Locale } from "@/i18n/config";
import { Link, usePathname } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownGroup {
  heading?: string;
  items: DropdownItem[];
}

interface NavItem {
  label: string;
  href?: string;
  groups?: DropdownGroup[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "AI Creative",
    groups: [
      {
        heading: "Generators",
        items: [
          { label: "AI Image Generator", href: "/tools/ai-image-generator" },
          { label: "AI Video Generator", href: "/tools/ai-video-generator" },
          { label: "Creative Templates", href: "/tools/creative-templates" },
          { label: "Ad Creative Library", href: "/tools/ad-creative-library" },
        ],
      },
      {
        heading: "AI Models",
        items: [
          { label: "Sora", href: "/tools/sora" },
          { label: "Kling", href: "/tools/kling" },
          { label: "Seedance", href: "/tools/seedance" },
          { label: "Nano Banana", href: "/tools/nano-banana" },
        ],
      },
    ],
  },
  {
    label: "AI Ads",
    groups: [
      {
        items: [
          { label: "One Click Ad Launch", href: "/tools/one-click-ad-launch" },
          { label: "AI Ad Optimization", href: "/tools/ai-ad-optimization" },
          { label: "Meta Ads Automation", href: "/tools/meta-ads-automation" },
          { label: "Google Ads Automation", href: "/tools/google-ads-automation" },
          { label: "TikTok Ads Automation", href: "/tools/tiktok-ads-automation" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    groups: [
      {
        heading: "By Goal",
        items: [
          { label: "Generate More Creatives", href: "/solutions/generate-more-creatives" },
          { label: "Launch Ads Faster", href: "/solutions/launch-ads-faster" },
          { label: "Scale Ads Automatically", href: "/solutions/scale-ads-automatically" },
        ],
      },
      {
        heading: "By Industry",
        items: [
          { label: "E-commerce", href: "/solutions/e-commerce" },
          { label: "Dropshipping", href: "/solutions/dropshipping" },
          { label: "App Marketing", href: "/solutions/app-marketing" },
          { label: "Agencies", href: "/solutions/agencies" },
        ],
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Free Tools", href: "/free-tools" },
  { label: "Blog", href: "/blog" },
];

interface NavbarProps {
  locale: Locale;
}

function DesktopDropdown({ groups, isOpen }: { groups: DropdownGroup[]; isOpen: boolean }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50"
        >
          <div className="bg-card rounded-lg border shadow-card-hover p-4 min-w-[240px] flex gap-6">
            {groups.map((group, gi) => (
              <div key={gi} className="flex-1">
                {group.heading && (
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {group.heading}
                  </p>
                )}
                <ul className="space-y-1">
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block px-3 py-2 text-sm rounded-md text-foreground hover:bg-secondary hover:text-primary transition-colors duration-150"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Navbar({ locale }: NavbarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b">
      <div className="container mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-display font-bold text-xl">
          <span className="text-gradient-primary">Creati</span>
          <span className="text-gradient-accent">Ads</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.groups && handleMouseEnter(item.label)}
              onMouseLeave={item.groups ? handleMouseLeave : undefined}
            >
              {item.href ? (
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md"
                >
                  {item.label}
                </Link>
              ) : (
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md">
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
              )}
              {item.groups && (
                <DesktopDropdown groups={item.groups} isOpen={openDropdown === item.label} />
              )}
            </div>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher currentLocale={locale} />
          <Link
            href="/pricing"
            className="hidden sm:inline-flex bg-accent-gradient text-accent-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition-transform shadow-md"
          >
            Get Started Free
          </Link>
          <button
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t overflow-hidden bg-card"
          >
            <nav className="container mx-auto py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <MobileDropdown item={item} />
                  )}
                </div>
              ))}
              <Link
                href="/pricing"
                className="block mt-3 bg-accent-gradient text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold text-center"
              >
                Get Started Free
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MobileDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary transition-colors"
      >
        {item.label}
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && item.groups && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden pl-4"
          >
            {item.groups.map((group, gi) => (
              <div key={gi} className="py-1">
                {group.heading && (
                  <p className="px-3 py-1 text-xs font-semibold text-muted-foreground uppercase">{group.heading}</p>
                )}
                {group.items.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className="block px-3 py-1.5 text-sm text-foreground/80 hover:text-primary transition-colors"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
