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
// 使用 any 类型来绕过各个组件不同的 props 要求
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ComponentRenderer = React.FC<{ namespace?: string; data?: any }>;

const componentMap: Record<string, ComponentRenderer> = {
  hero: ({ namespace, data }) => <HeroSection namespace={namespace} config={data} />,
  logoCloud: ({ namespace, data }) => <LogoCloud namespace={namespace} config={data} />,
  featureCards: ({ namespace, data }) => <FeatureCards namespace={namespace} config={data} />,
  featureDeepDive: ({ namespace, data }) => <FeatureDeepDive namespace={namespace} config={data} />,
  workflow: ({ namespace }) => <WorkflowSection namespace={namespace} />,
  showcase: ({ namespace }) => <ShowcaseSection namespace={namespace} />,
  useCases: ({ namespace }) => <UseCasesSection namespace={namespace} />,
  testimonials: ({ namespace }) => <TestimonialsSection namespace={namespace} />,
  comparison: ({ namespace }) => <ComparisonSection namespace={namespace} />,
  faq: ({ namespace }) => <FAQSection namespace={namespace} />,
  cta: ({ namespace }) => <CTASection namespace={namespace} />
};

interface SchemaRendererProps {
  schema: PageSchema;
}

export default function SchemaRenderer({ schema }: SchemaRendererProps) {
  const { namespace, config, sections } = schema;

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
            namespace={namespace}
            data={section.props}
          />
        );
      })}
    </main>
  );
}
