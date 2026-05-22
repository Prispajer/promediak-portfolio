import ServicesContainer from "@/components/sections/Photo/Services/ServicesContainer";
import HeroContainer from "@/components/sections/Photo/Hero/HeroContainer";
import ParallaxContainer from "@/components/sections/Photo/Parallax/ParallaxContainer";
import CtaContainer from "@/components/sections/Photo/Cta/CtaContainer";
import PortfolioContainer from "@/components/sections/Photo/Portfolio/PortfolioContainer";

const PhotoContainer = () => {
  return (
    <>
      <HeroContainer />
      <PortfolioContainer />
      <ParallaxContainer />
      <ServicesContainer />
      <CtaContainer />
    </>
  );
};

export default PhotoContainer;
