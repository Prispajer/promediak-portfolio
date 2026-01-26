"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/content";
import SectionTitle from "@/components/common/SectionTitle";

const ServicesContainer = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Nasze Usługi"
          subtitle="Oferujemy kompleksowe usługi foto-video na najwyższym poziomie"
        />

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group card-premium border-border/30 hover:border-accent/50 border p-8 transition-all duration-500"
            >
              <service.icon className="text-accent mb-6 h-10 w-10" />
              <h3 className="font-display text-foreground mb-4 text-2xl">
                {service.title}
              </h3>
              <p className="body-text mb-6">{service.description}</p>
              <Link
                href={service.link}
                className="text-accent font-body inline-flex items-center gap-2 text-sm tracking-wide transition-all duration-300 hover:gap-4"
              >
                Dowiedz się więcej
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesContainer;
