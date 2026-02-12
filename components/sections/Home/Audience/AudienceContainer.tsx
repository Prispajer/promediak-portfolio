import SectionTitle from "@/components/common/SectionTitle";
import AudienceList from "@/components/sections/Home/Audience/AudienceList";
import AudienceBackground from "@/components/sections/Home/Audience/AudienceBackground";

const AudienceContainer = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <AudienceBackground />
      <div className="relative container mx-auto px-6">
        <SectionTitle
          title="Filozofia pracy"
          subtitle="Trzy filary, które definiują styl i klimat naszej pracy"
        />
        <AudienceList />
      </div>
    </section>
  );
};

export default AudienceContainer;
