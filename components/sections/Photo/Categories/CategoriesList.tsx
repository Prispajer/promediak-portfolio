"use client";

import { photographyCategories } from "@/data/content";
import { motion } from "framer-motion";

const CategoriesList = () => {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
      {photographyCategories.map((cat, index) => (
        <motion.article
          key={cat.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group border-border/30 hover:border-accent/50 cursor-default border p-8 text-center transition-all duration-500"
        >
          <h3 className="feature-title mb-2">{cat.title}</h3>
          <p className="feature-lead mb-3">{cat.desc}</p>
          <p className="feature-text">{cat.details}</p>
        </motion.article>
      ))}
    </div>
  );
};

export default CategoriesList;
