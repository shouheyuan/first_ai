import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SchemaRenderer from "@/components/schema/SchemaRenderer";
import { pageBData } from "@/data/pageBData";
import { type Locale } from "@/i18n/config";

// 页面B - 创意工作室版配置
export default async function PageB({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar locale={locale} />
      <SchemaRenderer schema={pageBData} />
      <Footer />
    </div>
  );
}
