"use client";

import DescriptionImage from "@/components/sections/About/Description/DescriptionImage";
import DescriptionContent from "@/components/sections/About/Description/DescriptionContent";

const DescriptionContainer = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <DescriptionImage />
          <DescriptionContent />
        </div>
      </div>
    </section>
  );
};

export default DescriptionContainer;
