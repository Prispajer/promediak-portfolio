import HeroContainer from "@/components/sections/Home/Hero/HeroContainer";
import StatsContainer from "@/components/sections/Home/Stats/StatsContainer";
import ServicesContainer from "@/components/sections/Home/Services/ServicesContainer";
import PortfolioContainer from "@/components/sections/Home/Portfolio/PortfolioContainer";
import CtaContainer from "@/components/sections/Home/Cta/CtaContainer";
import ParallaxContainer from "@/components/sections/Home/Parallax/ParallaxContainer";
import PhilosophyContainer from "@/components/sections/Home/Philosophy/PhilosophyContainer";

const HomeContainer = () => {
  return (
    <>
      <HeroContainer />
      <StatsContainer />
      <ServicesContainer />
      <ParallaxContainer />
      <PortfolioContainer />
      <PhilosophyContainer />
      <CtaContainer />
    </>
  );
};

export default HomeContainer;
