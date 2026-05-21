import SectionTitle from "@/components/common/SectionTitle";
import PhilosophyList from "@/components/sections/Home/Philosophy/PhilosophyList";
import PhilosophyOverlay from "@/components/sections/Home/Philosophy/PhilosophyOverlay";

const PhilosophyContainer = () => {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <PhilosophyOverlay />
      <div className="relative container mx-auto px-6">
        <SectionTitle
          title="Filozofia pracy"
          subtitle="Trzy filary, które definiują styl i klimat naszej pracy"
        />
        <PhilosophyList />
      </div>
    </section>
  );
};

export default PhilosophyContainer;
