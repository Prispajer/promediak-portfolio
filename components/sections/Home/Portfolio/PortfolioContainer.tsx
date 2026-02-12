"use client";

import SectionTitle from "@/components/common/SectionTitle";
import PortfolioList from "@/components/sections/Home/Portfolio/PortfolioList";
import PortfolioButton from "@/components/sections/Home/Portfolio/PortfolioButton";

const PortfolioContainer = () => {
  return (
    <section className="bg-card py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Wybrane Realizacje"
          subtitle="Zobacz fragment naszego portfolio i przekonaj się o jakości naszych usług"
        />
        <PortfolioList />
        <PortfolioButton />
      </div>
    </section>
  );
};

export default PortfolioContainer;
