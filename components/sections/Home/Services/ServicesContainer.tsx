import SectionTitle from "@/components/common/SectionTitle";
import ServicesList from "@/components/sections/Home/Services/ServicesList";

const ServicesContainer = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Nasze Usługi"
          subtitle="Oferujemy kompleksowe usługi foto-video na najwyższym poziomie"
        />
        <ServicesList />
      </div>
    </section>
  );
};

export default ServicesContainer;
