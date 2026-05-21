"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mb-12 text-center"
    >
      <div
        aria-hidden="true"
        className="via-accent mx-auto mb-6 h-12 w-px bg-gradient-to-b from-transparent to-transparent"
      />
      <h2 className="section-title mb-4">{title}</h2>
      {subtitle && (
        <p className="section-subtitle mx-auto max-w-3xl">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
