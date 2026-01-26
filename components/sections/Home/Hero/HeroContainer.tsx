import HeroOverlay from "@/components/sections/Home/Hero/HeroOverlay";
import HeroButtons from "@/components/sections/Home/Hero/HeroButtons";
import HeroContent from "@/components/sections/Home/Hero/HeroContent";
import HeroBackground from "@/components/sections/Home/Hero/HeroBackground";

const HeroContainer = () => {
  return (
    <section className="h-screen w-full overflow-hidden">
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <HeroBackground />
          <HeroOverlay />
          <HeroContent />
          <HeroButtons />
        </div>
      </div>
    </section>
  );
};

export default HeroContainer;
