"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ParallaxSection from "@/components/common/ParallaxSection";
import heroImage from "@/public/assets/content/HomeHero.jpg";

const CtaContainer = () => {
  return (
    <ParallaxSection
      backgroundImage={heroImage}
      height="30vh"
      ariaLabel="Sekcja kontaktowa"
    >
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="cta-title mb-4">Gotowy na Współpracę?</h2>
          <p className="cta-subtitle text-foreground/80 mb-8">
            Skontaktuj się z nami i opowiedz o swoich planach. Razem stworzymy
            coś wyjątkowego.
          </p>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact" aria-label="Przejdź do formularza kontaktu">
              NAPISZ DO NAS
            </Link>
          </Button>
        </motion.div>
      </div>
    </ParallaxSection>
  );
};

export default CtaContainer;
