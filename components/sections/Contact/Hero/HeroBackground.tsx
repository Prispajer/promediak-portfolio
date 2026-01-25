import heroImage from "@/public/images/Hero.jpg";
import React from "react";

const HeroBackground = () => {
  return (
    <div
      className="absolute inset-0 bg-cover bg-fixed bg-center"
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      <div className="bg-background/60 absolute inset-0" />
    </div>
  );
};

export default HeroBackground;
