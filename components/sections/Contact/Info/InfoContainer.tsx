"use client";

import heroImage from "@/public/assets/content/ContactParallax.jpg";
import { motion } from "framer-motion";
import ParallaxSection from "@/components/common/ParallaxSection";
import React from "react";

const InfoContainer = () => {
  return (
    <ParallaxSection
      backgroundImage={heroImage}
      height="40vh"
      ariaLabel="Informacja o zasięgu terytorialnym"
    >
      <div className="px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          role="group"
        >
          <p className="font-display text-foreground t mb-4 text-2xl tracking-wide md:text-3xl md:tracking-wider">
            Dojeżdżamy w każdy zakątek Polski
          </p>
          <p className="text-muted-foreground">
            Nie ograniczamy się — zrealizujemy Wasz projekt gdziekolwiek
            jesteście
          </p>
        </motion.div>
      </div>
    </ParallaxSection>
  );
};

export default InfoContainer;
