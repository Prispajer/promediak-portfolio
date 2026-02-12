import HeroBackground from "@/components/sections/Photo/Hero/HeroBackground";
import HeroContent from "@/components/sections/Photo/Hero/HeroContent";
import HeroOverlay from "@/components/sections/Photo/Hero/HeroOverlay";
import HeroVerticalText from "@/components/sections/Photo/Hero/HeroVerticalText";
import HeroStatsBar from "@/components/sections/Photo/Hero/HeroStatsBar";

const HeroContainer = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 flex">
        <HeroOverlay />
        <HeroBackground />
      </div>
      <HeroContent />
      <HeroVerticalText />
      <HeroStatsBar />
    </section>
  );
};

export default HeroContainer;
