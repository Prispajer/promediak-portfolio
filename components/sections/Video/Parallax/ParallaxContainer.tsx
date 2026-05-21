"use client";

import { motion } from "framer-motion";
import ParallaxSection from "@/components/common/ParallaxSection";
import heroImage from "@/public/images/VideoParallax.jpg";

const ParallaxContainer = () => {
  return (
    <ParallaxSection
      backgroundImage={heroImage}
      height="40vh"
      ariaLabel="Cytat: Film to emocje"
    >
      <div className="px-6 text-center">
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-foreground text-center text-2xl tracking-wide italic md:text-3xl md:tracking-wider"
        >
          <p>"Film to emocje zamknięte w ruchu"</p>
        </motion.blockquote>
      </div>
    </ParallaxSection>
  );
};

export default ParallaxContainer;
