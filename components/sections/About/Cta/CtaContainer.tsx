"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CtaContainer = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="cta-title mb-4">Chcesz nas poznać bliżej?</h2>
          <p className="cta-subtitle mb-8">
            Napisz do nas i umówmy się na spotkanie
          </p>
          <Button asChild variant="outline" size="lg">
            <Link href="/contact">
              Skontaktuj się
              <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaContainer;
