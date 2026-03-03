/**
 * 页面Schema类型定义
 * 用于通过JSON配置动态渲染页面
 */

// 页面元数据
export interface PageMetadata {
  title: string;
  description?: string;
}

// 页面配置
export interface PageConfig {
  showNavbar?: boolean;
  showFooter?: boolean;
  className?: string;
}

// Hero Section Props
export interface HeroSectionProps {
  badge?: string;
  slogans?: Array<{
    line1: string;
    highlight: string;
  }>;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  trustBadges?: string[];
}

// Logo Cloud Section Props
export interface LogoCloudSectionProps {
  title?: string;
  logos?: Array<{
    name: string;
    url?: string;
  }>;
}

// Feature Cards Section Props
export interface FeatureCardsSectionProps {
  title?: string;
  description?: string;
  features?: Array<{
    icon: string;
    title: string;
    description: string;
    href?: string;
    color?: string;
  }>;
}

// FAQ Section Props
export interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

// CTA Section Props
export interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  badge?: string;
}

// Section Types - 必须是string类型以便兼容JSON
export type SectionType =
  | 'hero'
  | 'logoCloud'
  | 'featureCards'
  | 'faq'
  | 'cta'
  | 'featureDeepDive'
  | 'workflow'
  | 'showcase'
  | 'useCases'
  | 'testimonials'
  | 'comparison';

// Section Interface - 使用string类型兼容JSON
export interface Section {
  type: string;
  props?: Record<string, unknown>;
}

// Page Schema Interface
export interface PageSchema {
  metadata?: PageMetadata;
  config?: PageConfig;
  sections: Array<{
    type: string;
    namespace?: string;
    props?: Record<string, unknown>;
  }>;
}
