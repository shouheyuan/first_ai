import { motion } from "framer-motion";
import { Pencil, Zap, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Pencil,
    step: "01",
    title: "Describe Your Ad",
    description: "Enter your product details, target audience, or paste a URL. Our AI understands context.",
  },
  {
    icon: Zap,
    step: "02",
    title: "AI Generates Creatives",
    description: "Get dozens of on-brand ad images, videos, and copy variations in seconds.",
  },
  {
    icon: BarChart3,
    step: "03",
    title: "Launch & Optimize",
    description: "Push ads live across Meta, Google, and TikTok. AI optimizes performance automatically.",
  },
];

export default function HowItWorksSection() {
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
            How It <span className="text-gradient-accent">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg">Three simple steps to create and launch high-converting ads.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <s.icon className="h-7 w-7 text-primary" />
              </div>
              <span className="text-xs font-bold text-accent uppercase tracking-widest">Step {s.step}</span>
              <h3 className="font-display font-bold text-lg mt-2 mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
