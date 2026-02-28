import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
import { type Locale } from "@/i18n/config";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar locale={locale} />
      <main className="flex-1 w-full">
        <HeroSection />
        <LogoCloud />
        <FeatureCards />
        <FeatureDeepDive />
        <WorkflowSection />
        <ShowcaseSection />
        <UseCasesSection />
        <TestimonialsSection />
        <ComparisonSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
