"use client";

import SectionTitle from "@/components/common/SectionTitle";
import ServicesList from "@/components/sections/Video/Services/ServicesList";

const ServicesContainer = () => {
  return (
    <section className="bg-card py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Co Oferujemy"
          subtitle="Kompleksowa produkcja filmowa od A do Z"
        />
        <ServicesList />
      </div>
    </section>
  );
};

export default ServicesContainer;
