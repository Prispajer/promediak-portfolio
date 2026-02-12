"use client";

import heroImage from "@/public/images/Hero.jpg";
import { motion } from "framer-motion";
import ParallaxSection from "@/components/common/ParallaxSection";
import React from "react";

const InfoContainer = () => {
  return (
    <ParallaxSection backgroundImage={heroImage} height="40vh">
      <div className="px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="font-headers text-foreground mb-4 text-2xl md:text-3xl">
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
