import HeroBackground from "@/components/sections/About/Hero/HeroBackground";
import HeroContent from "@/components/sections/About/Hero/HeroContent";

const HeroContainer = () => {
  return (
    <section className="relative h-[60vh] overflow-hidden">
      <HeroBackground />
      <HeroContent />
    </section>
  );
};

export default HeroContainer;
