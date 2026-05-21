"use client";

import { motion } from "framer-motion";

const HeroContent = () => {
  const title: string = "Fotografia" as const;

  return (
    <div className="relative z-10 flex h-screen cursor-default items-center">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-3"
          >
            <div className="bg-accent h-px w-12" />
            <span className="text-accent font-body text-sm tracking-[0.3em] uppercase">
              Profesjonalne usługi
            </span>
          </motion.div>
          <h1 aria-label={title} className="mb-8">
            {title.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="font-headers text-foreground mr-4 inline-block text-[40px] leading-none font-[700] sm:text-5xl md:text-7xl lg:text-8xl"
                style={{
                  textShadow: "0 0 60px rgba(139, 162, 133, 0.3)",
                }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-subtitle mb-12 text-left"
          >
            Każde zdjęcie opowiada historię. Uwieczniamy emocje, chwile i
            wspomnienia, które będą towarzyszyć Wam przez całe życie.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
