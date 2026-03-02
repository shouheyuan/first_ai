"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ImageIcon, Rocket, BarChart3 } from "lucide-react";
import { useTranslations } from "next-intl";
import workflowVisual from "@/assets/workflow-visual.png";

export default function WorkflowSection({ namespace = "default" }: { namespace?: string }) {
  const t = useTranslations(namespace);
  
  // Workflow section translations are under "workflow" key in default namespace
  const wt = (key: string) => t(`workflow.${key}`);

  const steps = [
    {
      icon: ImageIcon,
      key: "creative",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Rocket,
      key: "publishing",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: BarChart3,
      key: "running",
      color: "bg-primary/10 text-primary",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {wt("title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {wt("description")}
          </p>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-14"
        >
          <Image
            src={workflowVisual}
            alt={wt("alt")}
            className="w-full rounded-2xl shadow-card"
            width={1200}
            height={600}
          />
        </motion.div>

        {/* Step cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Link
                href={wt(`steps.${s.key}.href`)}
                className="group block bg-card rounded-xl border p-6 shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300 h-full text-center"
              >
                <div className={`w-14 h-14 rounded-2xl ${s.color} flex items-center justify-center mx-auto mb-4`}>
                  <s.icon className="h-7 w-7" />
                </div>
                <span className="text-xs font-bold text-accent uppercase tracking-widest">{wt("step")} 0{i + 1}</span>
                <h3 className="font-display font-bold text-lg mt-2 mb-2">{wt(`steps.${s.key}.title`)}</h3>
                <p className="text-sm text-muted-foreground mb-3">{wt(`steps.${s.key}.description`)}</p>
                <span className="text-sm font-medium text-primary flex items-center gap-1 justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  {wt("explore")} <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
