"use client";

import { motion } from "framer-motion";
import ParallaxSection from "@/components/common/ParallaxSection";
import heroImage from "@/public/images/Hero.jpg";

const QuoteContainer = () => {
  return (
    <ParallaxSection backgroundImage={heroImage} height="40vh">
      <div className="px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-foreground text-2xl italic md:text-3xl"
        >
          "Film to emocje zamknięte w ruchu"
        </motion.p>
      </div>
    </ParallaxSection>
  );
};

export default QuoteContainer;
