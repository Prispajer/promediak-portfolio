import React from "react";
import HeroBackground from "@/components/sections/Contact/Hero/HeroBackground";
import HeroContent from "@/components/sections/Contact/Hero/HeroContent";

const HeroContainer = () => {
  return (
    <section className="relative h-[50vh] overflow-hidden">
      <HeroBackground />
      <HeroContent />
    </section>
  );
};

export default HeroContainer;
