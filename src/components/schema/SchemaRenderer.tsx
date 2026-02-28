"use client";

import HeroSection from "@/components/home/HeroSection";
import LogoCloud from "@/components/home/LogoCloud";
import FeatureCards from "@/components/home/FeatureCards";
import FeatureDeepDive from "@/components/home/FeatureDeepDive";
import WorkflowSection from "@/components/home/WorkflowSection";
import ShowcaseSection from "@/components/home/ShowcaseSection";
import UseCasesSection from "@/components/home/UseCasesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import { PageSchema } from "@/lib/schema/pageSchema";

// 组件映射表 - 复用现有组件
type ComponentRenderer = React.FC<{ data?: unknown }>;

const componentMap: Record<string, ComponentRenderer> = {
  hero: ({ data }) => <HeroSection {...(data || {})} />,
  logoCloud: ({ data }) => <LogoCloud {...(data || {})} />,
  featureCards: ({ data }) => <FeatureCards {...(data || {})} />,
  featureDeepDive: ({ data }) => <FeatureDeepDive {...(data || {})} />,
  workflow: ({ data }) => <WorkflowSection {...(data || {})} />,
  showcase: ({ data }) => <ShowcaseSection {...(data || {})} />,
  useCases: ({ data }) => <UseCasesSection {...(data || {})} />,
  testimonials: ({ data }) => <TestimonialsSection {...(data || {})} />,
  comparison: ({ data }) => <ComparisonSection {...(data || {})} />,
  faq: ({ data }) => <FAQSection {...(data || {})} />,
  cta: ({ data }) => <CTASection {...(data || {})} />,
};

interface SchemaRendererProps {
  schema: PageSchema;
}

export default function SchemaRenderer({ schema }: SchemaRendererProps) {
  const { sections, config } = schema;

  return (
    <main className={config?.className || "flex-1 w-full"}>
      {sections.map((section, index) => {
        const Component = componentMap[section.type];
        
        if (!Component) {
          console.warn(`Unknown section type: ${section.type}`);
          return null;
        }

        return (
          <Component
            key={`${section.type}-${index}`}
            data={section.props}
          />
        );
      })}
    </main>
  );
}
