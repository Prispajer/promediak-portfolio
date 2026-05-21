import heroImage from "@/public/images/ContactHero.jpg";
import React from "react";
import ImageBackground from "@/components/common/ImageBackground";

const HeroBackground = () => {
  return (
    <ImageBackground backgroundImage={heroImage} isFixed={true}>
      <div className="bg-background/60 absolute inset-0" />
    </ImageBackground>
  );
};

export default HeroBackground;
