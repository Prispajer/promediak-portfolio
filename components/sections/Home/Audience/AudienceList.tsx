"use client";

import { audience } from "@/data/content";
import { motion } from "framer-motion";
import { Users, Heart, Briefcase } from "lucide-react";

const AudienceList = () => {
  const icons = [Users, Heart, Briefcase];

  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
      {audience.map((item, index) => {
        const Icon = icons[index];
        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="border-border/30 from-card/90 to-card/50 hover:border-accent/50 relative h-full cursor-default border bg-gradient-to-br p-8 transition-all duration-500">
              <div className="absolute top-0 right-0 h-16 w-16 overflow-hidden">
                <div className="from-accent/50 absolute top-0 right-0 h-8 w-px bg-gradient-to-b to-transparent" />
                <div className="from-accent/50 absolute top-0 right-0 h-px w-8 bg-gradient-to-l to-transparent" />
              </div>
              <div className="border-accent/30 bg-accent/10 group-hover:bg-accent/20 group-hover:border-accent/50 mb-6 inline-flex h-14 w-14 items-center justify-center border transition-all duration-300">
                <Icon className="text-accent h-6 w-6" />
              </div>
              {/*<div className="font-display text-accent/10 absolute top-6 right-6 text-4xl font-light">*/}
              {/*  0{index + 1}*/}
              {/*</div>*/}
              <h3 className="font-headers text-foreground mb-4 text-lg font-[600] tracking-wide">
                {item.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
              <div className="via-accent/30 absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AudienceList;
