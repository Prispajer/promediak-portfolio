"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/common/SectionTitle";
import { filmServices } from "@/data/content";

const ServicesContainer = () => {
  return (
    <section className="bg-card py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Co Oferujemy"
          subtitle="Kompleksowa produkcja filmowa od A do Z"
        />

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filmServices.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-border/30 hover:border-accent/50 border p-6 transition-all duration-500"
            >
              <h3 className="feature-title mb-2">{service.title}</h3>
              <p className="feature-lead mb-2">{service.desc}</p>
              <p className="feature-text">{service.details}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesContainer;
