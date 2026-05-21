"use client";

import { services } from "@/data/content";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ServicesList = () => {
  return (
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
          <service.icon
            className="text-accent mb-6 h-10 w-10"
            aria-label={`Ikona ${service.title}`}
            role="img"
          />
          <h3 className="font-headers text-foreground mb-4 cursor-default text-2xl font-semibold">
            {service.title}
          </h3>
          <p className="font-body text-foreground mb-6 cursor-default">
            {service.description}
          </p>
          <Link
            href={service.link}
            className="text-accent font-body inline-flex items-center gap-2 text-sm tracking-wide transition-all duration-400 hover:gap-4"
          >
            Dowiedz się więcej
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesList;
