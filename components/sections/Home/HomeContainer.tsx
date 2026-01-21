import HomeBackground from "@/components/sections/Home/HomeBackground";
import HeroButtons from "@/components/sections/Home/HomeButtons";
import HomeHero from "@/components/sections/Home/HomeHero";

const HomeContainer = () => {
    return (
      <section className="relative h-screen w-full overflow-hidden">
          <HomeBackground/>
          <HomeHero/>
      </section>
    );
}

export default HomeContainer;