"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useParams } from "next/navigation";

const posts = [
  { title: "10 AI Ad Creative Trends for 2026", category: "Trends", date: "Feb 20, 2026" },
  { title: "How to Launch Facebook Ads in 5 Minutes", category: "Guides", date: "Feb 18, 2026" },
  { title: "ROAS Optimization: The Complete Guide", category: "Performance", date: "Feb 15, 2026" },
  { title: "TikTok Ads vs Meta Ads: Which Converts Better?", category: "Comparison", date: "Feb 12, 2026" },
  { title: "The Rise of AI-Generated UGC Content", category: "AI", date: "Feb 10, 2026" },
  { title: "Dropshipping Ad Strategies That Actually Work", category: "Strategies", date: "Feb 8, 2026" },
];

export default function Blog() {
  const params = useParams();
  const locale = (params.locale as string) as "en" | "cn";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar locale={locale} />
      <main className="flex-1 py-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient-primary">Blog</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Tips, strategies, and insights to level up your ad game.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {posts.map((post, i) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="bg-card rounded-xl border p-6 shadow-card hover:shadow-card-hover hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
              >
                <div className="bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full inline-block mb-3">
                  {post.category}
                </div>
                <h2 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}