"use client";

import { values } from "@/data/content";
import { motion } from "framer-motion";

const ValuesList = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {values.map((value, index) => (
        <motion.article
          key={value.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-accent mx-auto mb-4 h-8 w-px" />
          <h3 className="feature-title mb-3">{value.title}</h3>
          <p className="feature-text">{value.desc}</p>
        </motion.article>
      ))}
    </div>
  );
};

export default ValuesList;
