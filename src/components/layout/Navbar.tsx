"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { type Locale } from "@/i18n/config";
import { Link, usePathname } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslations } from "next-intl";

interface NavbarProps {
  locale: Locale;
}

interface NavItem {
  label: string;
  href?: string;
  groups?: {
    heading?: string;
    items: { label: string; href: string }[];
  }[];
}

function DesktopDropdown({ 
  label, 
  groups, 
  isOpen 
}: { 
  label: string;
  groups: { heading?: string; items: { label: string; href: string }[] }[]; 
  isOpen: boolean;
}) {
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
                        className="min-w-[110px] block px-3 py-2 text-sm rounded-md text-foreground hover:bg-secondary hover:text-primary transition-colors duration-150 cursor-pointer"
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
  const t = useTranslations("nav");
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

  const navItems = [
    { label: t("home"), href: "/" },
    {
      label: t("aiCreative"),
      groups: [
        {
          heading: t("generators"),
          items: [
            { label: t("aiImageGenerator"), href: "/tools/ai-image-generator" },
            { label: t("aiVideoGenerator"), href: "/tools/ai-video-generator" },
            { label: t("creativeTemplates"), href: "/tools/creative-templates" },
            { label: t("adCreativeLibrary"), href: "/tools/ad-creative-library" },
          ],
        },
        {
          heading: t("aiModels"),
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
      label: t("aiAds"),
      groups: [
        {
          items: [
            { label: t("oneClickAdLaunch"), href: "/tools/one-click-ad-launch" },
            { label: t("aiAdOptimization"), href: "/tools/ai-ad-optimization" },
            { label: t("metaAdsAutomation"), href: "/tools/meta-ads-automation" },
            { label: t("googleAdsAutomation"), href: "/tools/google-ads-automation" },
            { label: t("tiktokAdsAutomation"), href: "/tools/tiktok-ads-automation" },
          ],
        },
      ],
    },
    {
      label: t("solutions"),
      groups: [
        {
          heading: t("byGoal"),
          items: [
            { label: t("generateMoreCreatives"), href: "/solutions/generate-more-creatives" },
            { label: t("launchAdsFaster"), href: "/solutions/launch-ads-faster" },
            { label: t("scaleAdsAutomatically"), href: "/solutions/scale-ads-automatically" },
          ],
        },
        {
          heading: t("byIndustry"),
          items: [
            { label: t("ecommerce"), href: "/solutions/e-commerce" },
            { label: t("dropshipping"), href: "/solutions/dropshipping" },
            { label: t("appMarketing"), href: "/solutions/app-marketing" },
            { label: t("agencies"), href: "/solutions/agencies" },
          ],
        },
      ],
    },
    { label: t("pricing"), href: "/pricing" },
    { label: t("freeTools"), href: "/free-tools" },
    { label: t("blog"), href: "/blog" },
  ];

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
                  className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md cursor-pointer"
                >
                  {item.label}
                </Link>
              ) : (
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-md cursor-pointer">
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
              )}
              {item.groups && (
                <DesktopDropdown 
                  label={item.label}
                  groups={item.groups} 
                  isOpen={openDropdown === item.label} 
                />
              )}
            </div>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher currentLocale={locale} />
          <Link
            href="/pricing"
            className="hidden sm:inline-flex bg-accent-gradient text-accent-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition-transform shadow-md cursor-pointer"
          >
            Get Started Free
          </Link>
          <button
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors cursor-pointer"
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
                      className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary transition-colors cursor-pointer"
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
                className="block mt-3 bg-accent-gradient text-accent-foreground px-5 py-2.5 rounded-lg text-sm font-semibold text-center cursor-pointer"
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
