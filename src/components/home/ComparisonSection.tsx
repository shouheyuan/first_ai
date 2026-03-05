"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { useTranslations } from "next-intl";

interface ComparisonSectionProps {
  namespace?: string;
}

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") return <span className="text-xs font-medium">{value}</span>;
  return value ? <Check className="h-4 w-4 text-primary mx-auto" /> : <X className="h-4 w-4 text-muted-foreground/30 mx-auto" />;
}

export default function ComparisonSection({ namespace = "default" }: ComparisonSectionProps) {
  const t = useTranslations(namespace);
  
  // Helper function for comparison translations
  const ct = (key: string) => t(`comparison.${key}`);

  // Get competitors data from translations
  const competitorsData = t.raw("comparison.competitors") as Array<{
    key: string;
    name: string;
    highlight?: boolean;
  }>;

  // Get features data from translations
  const featuresData = t.raw("comparison.features") as Array<{
    key: string;
    name: string;
    values: (boolean | string)[];
  }>;

  return (
    <section id="comparison" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {ct("titlePrefix")} 
          </h2>
          <p className="text-muted-foreground text-lg">{ct("description")}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-card rounded-xl border shadow-card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left p-3 font-semibold min-w-[160px]">{ct("featureColumn")}</th>
                    {competitorsData.map((competitor) => (
                      <th key={competitor.key} className={`p-3 text-center min-w-[100px] ${competitor.highlight ? "font-bold text-primary" : "font-semibold text-muted-foreground text-xs"}`}>
                        {competitor.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {featuresData.map((feature, index) => (
                    <tr key={feature.key} className={index % 2 === 0 ? "bg-background" : ""}>
                      <td className="p-3 font-medium text-sm">{feature.name}</td>
                      {feature.values.map((value, valueIndex) => (
                        <td key={valueIndex} className={`p-3 text-center ${valueIndex === 0 ? "bg-primary/5" : ""}`}>
                          <CellValue value={value} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
