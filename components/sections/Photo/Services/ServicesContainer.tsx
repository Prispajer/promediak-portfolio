import SectionTitle from "@/components/common/SectionTitle";
import ServicesList from "@/components/sections/Photo/Services/ServicesList";

const ServicesContainer = () => {
  return (
    <section className="bg-card py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Nasze Specjalizacje"
          subtitle="Oferujemy szeroki zakres usług fotograficznych"
        />
        <ServicesList />
      </div>
    </section>
  );
};

export default ServicesContainer;
