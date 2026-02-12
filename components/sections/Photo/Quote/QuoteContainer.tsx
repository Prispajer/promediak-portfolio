"use client";

import { motion } from "framer-motion";
import ParallaxSection from "@/components/common/ParallaxSection";
import parallax from "@/public/images/1.jpg";

const QuoteContainer = () => {
  return (
    <ParallaxSection backgroundImage={parallax} height="40vh">
      <div className="px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-foreground text-center text-2xl italic md:text-3xl"
        >
          "Chwile przemijają, zdjęcia pozostają na zawsze"
        </motion.p>
      </div>
    </ParallaxSection>
  );
};

export default QuoteContainer;
