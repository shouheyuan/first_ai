"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import showcaseCarousel from "@/assets/showcase-carousel.png";
import demoCreative1 from "@/assets/demo-creative-1.jpg";
import demoCreative2 from "@/assets/demo-creative-2.jpg";
import demoCreative3 from "@/assets/demo-creative-3.jpg";

const industries = [
  { label: "E-commerce", img: demoCreative1 },
  { label: "Food & Delivery", img: demoCreative2 },
  { label: "Fashion & Beauty", img: demoCreative3 },
];

export default function ShowcaseSection() {
  return (
    <section className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Creatives for <span className="text-gradient-accent">Every Industry</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            See real examples of AI-generated ads across different verticals.
          </p>
        </motion.div>

        {/* Large hero showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Image
            src={showcaseCarousel}
            alt="AI-generated ad creatives across industries"
            className="w-full rounded-2xl shadow-card"
            width={1200}
            height={600}
          />
        </motion.div>

        {/* Industry cards */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group bg-card rounded-xl border overflow-hidden shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <Image
                  src={ind.img}
                  alt={`AI ad for ${ind.label}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 text-center">
                <p className="font-display font-semibold">{ind.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
