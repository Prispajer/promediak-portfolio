"use client";

import { motion } from "framer-motion";
import ParallaxSection from "@/components/common/ParallaxSection";
import film from "@/public/images/Film.jpg";

const QuoteContainer = () => {
  return (
    <ParallaxSection backgroundImage={film} height="40vh">
      <div className="px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-display text-foreground text-2xl italic md:text-3xl"
        >
          "Nie robimy zdjęć ani filmów — tworzymy wspomnienia"
        </motion.p>
      </div>
    </ParallaxSection>
  );
};

export default QuoteContainer;
