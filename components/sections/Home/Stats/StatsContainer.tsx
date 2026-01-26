"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/content";

const StatsContainer = () => {
  return (
    <section className="bg-card border-border/20 border-y py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <stat.icon className="text-accent mx-auto mb-3 h-8 w-8" />
              <p className="font-display text-foreground mb-1 text-4xl">
                {stat.number}
              </p>
              <p className="text-muted-foreground font-body text-sm tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsContainer;
