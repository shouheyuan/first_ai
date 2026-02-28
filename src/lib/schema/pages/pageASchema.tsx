/**
 * 页面A Schema - 企业版
 */
import { PageSchema } from "@/lib/schema/pageSchema";

export const pageASchema: PageSchema = {
  metadata: {
    titleKey: "pageA.metadata.title",
    descriptionKey: "pageA.metadata.description",
  },
  config: {
    showNavbar: true,
    showFooter: true,
    className: "flex-1 w-full",
  },
  sections: [
    {
      type: "hero",
      props: {
        namespace: "pageA",
        badgeKey: "hero.badge",
        slogansKey: "hero.slogans",
        descriptionKey: "hero.description",
        primaryCTA: {
          textKey: "hero.cta.primary",
          href: "/contact-sales",
        },
        secondaryCTA: {
          textKey: "hero.cta.secondary",
          href: "/demo",
        },
        trustBadgesKey: "hero.trustBadges",
      },
    },
    {
      type: "features",
      props: {
        namespace: "pageA",
        showCheckmarks: true,
      },
    },
  ],
};
