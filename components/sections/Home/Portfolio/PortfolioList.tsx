"use client";

import { portfolioPreview } from "@/data/portfolio";
import { motion } from "framer-motion";
import Image from "next/image";

const PortfolioList = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      {portfolioPreview.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group relative aspect-[4/5] cursor-pointer overflow-hidden"
        >
          <Image
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="from-background/90 via-background/20 absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute right-0 bottom-0 left-0 translate-y-full transform p-6 transition-transform duration-500 group-hover:translate-y-0">
            <p className="text-accent font-body mb-2 text-xs tracking-widest uppercase">
              {item.category}
            </p>
            <h3 className="font-display text-foreground text-lg">
              {item.title}
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PortfolioList;
