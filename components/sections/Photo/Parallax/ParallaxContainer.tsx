"use client";

import { motion } from "framer-motion";
import ParallaxSection from "@/components/common/ParallaxSection";
import parallaxImage from "@/public/images/PhotoParallax.jpg";

const ParallaxContainer = () => {
  return (
    <ParallaxSection
      backgroundImage={parallaxImage}
      height="40vh"
      ariaLabel="Sekcja z mottem: Chwile przemijają"
    >
      <div className="px-6 text-center">
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-foreground text-center text-2xl tracking-wide italic md:text-3xl md:tracking-wider"
        >
          "Chwile przemijają, zdjęcia pozostają na zawsze"
        </motion.blockquote>
      </div>
    </ParallaxSection>
  );
};

export default ParallaxContainer;
