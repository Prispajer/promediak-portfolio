"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ParallaxSection from "@/components/common/ParallaxSection";
import heroImage from "@/public/images/Hero.jpg";
import SectionTitle from "@/components/common/SectionTitle";

const CtaContainer = () => {
  return (
    <ParallaxSection backgroundImage={heroImage} height="60vh">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <SectionTitle
            title="Gotowy na Współpracę?"
            subtitle="Skontaktuj się z nami i opowiedz o swoich planach. Razem stworzymy
            coś wyjątkowego."
          />
          <Button
            asChild
            className="bg-accent shadow-[0_0_8px_var(--color-shadow-glow)]"
          >
            <Link href="/contact">NAPISZ DO NAS</Link>
          </Button>
        </motion.div>
      </div>
    </ParallaxSection>
  );
};

export default CtaContainer;
