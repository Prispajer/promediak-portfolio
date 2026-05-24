import React from "react";
import PortfolioGrid from "@/components/sections/Video/Portfolio/PortfolioGrid";

const PortfolioContainer = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-6">
        <PortfolioGrid />
      </div>
    </section>
  );
};

export default PortfolioContainer;
