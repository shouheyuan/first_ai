import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SchemaRenderer from "@/components/schema/SchemaRenderer";
import { pageAData } from "@/data/pageAData";
import { type Locale } from "@/i18n/config";

// 页面A - 企业版配置
export default async function PageA({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar locale={locale} />
      <SchemaRenderer schema={pageAData} />
      <Footer />
    </div>
  );
}
