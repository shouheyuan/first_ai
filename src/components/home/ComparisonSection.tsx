"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const competitors = [
  { name: "CreatiAds", highlight: true },
  { name: "ChatGPT" },
  { name: "Meta Ads Mgr" },
  { name: "AdCreative.ai" },
  { name: "Creatify" },
  { name: "Smartly.io" },
];

const features = [
  { name: "AI Image Generation", values: [true, true, false, true, true, false] },
  { name: "AI Video Generation", values: [true, true, false, true, true, false] },
  { name: "One-Click Ad Launch", values: [true, false, true, false, false, true] },
  { name: "Multi-Platform Automation", values: [true, false, false, false, false, true] },
  { name: "AI Ad Optimization", values: [true, false, false, false, false, true] },
  { name: "AI Creative + Ads Closed Loop", values: [true, false, false, false, false, false] },
  { name: "Free Tools & Calculators", values: [true, false, false, false, false, false] },
  { name: "Starting Price", values: ["$0/mo", "—", "Free*", "$29/mo", "$29/mo", "$$$"] },
];

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") return <span className="text-xs font-medium">{value}</span>;
  return value ? <Check className="h-4 w-4 text-primary mx-auto" /> : <X className="h-4 w-4 text-muted-foreground/30 mx-auto" />;
}

export default function ComparisonSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose <span className="text-gradient-accent">CreatiAds</span>?
          </h2>
          <p className="text-muted-foreground text-lg">See how we stack up against the competition.</p>
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
                    <th className="text-left p-3 font-semibold min-w-[160px]">Feature</th>
                    {competitors.map((c) => (
                      <th key={c.name} className={`p-3 text-center min-w-[100px] ${c.highlight ? "font-bold text-primary" : "font-semibold text-muted-foreground text-xs"}`}>
                        {c.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {features.map((row, i) => (
                    <tr key={row.name} className={i % 2 === 0 ? "bg-background" : ""}>
                      <td className="p-3 font-medium text-sm">{row.name}</td>
                      {row.values.map((v, j) => (
                        <td key={j} className={`p-3 text-center ${j === 0 ? "bg-primary/5" : ""}`}>
                          <CellValue value={v} />
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
