"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/content";
import SectionTitle from "@/components/common/SectionTitle";

const TestimonialsSection = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Opinie Klientów"
          subtitle="Co mówią o nas pary, które nam zaufały"
        />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-border/30 bg-card/50 relative border p-8"
            >
              <div className="text-accent/20 font-display absolute top-4 left-4 text-6xl">
                "
              </div>
              <p className="body-text relative z-10 mb-6 pt-4">
                {testimonial.text}
              </p>
              <div className="border-border/30 border-t pt-4">
                <p className="font-display text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-muted-foreground text-xs tracking-wide uppercase">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
