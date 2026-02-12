"use client";

import { stats } from "@/data/content";
import { motion } from "framer-motion";

const StatsList = () => {
  return (
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
          <stat.icon className="text-accent mx-auto mb-3 h-8 w-8 cursor-default" />
          <p className="font-display text-foreground mb-1 cursor-default text-4xl">
            {stat.number}
          </p>
          <p className="text-muted-foreground font-body cursor-default text-sm tracking-wide uppercase">
            {stat.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsList;
