"use client";

import { filmServices } from "@/data/content";
import { motion } from "framer-motion";

const ServicesList = () => {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {filmServices.map((service, index) => (
        <motion.article
          key={service.title}
          aria-label={`Usługa: ${service.title}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group border-border/30 hover:border-accent/50 border p-6 transition-all duration-500"
        >
          <h3 className="feature-title mb-2">{service.title}</h3>
          <p className="feature-lead mb-2 font-medium">{service.desc}</p>
          <p className="feature-text">{service.details}</p>
        </motion.article>
      ))}
    </div>
  );
};

export default ServicesList;
