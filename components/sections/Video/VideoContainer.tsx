import HeroContainer from "@/components/sections/Video/Hero/HeroContainer";
import PortfolioContainer from "@/components/sections/Video/Portfolio/PortfolioContainer";
import ParallaxContainer from "@/components/sections/Video/Parallax/ParallaxContainer";
import ServicesContainer from "@/components/sections/Video/Services/ServicesContainer";
import CtaContainer from "@/components/sections/Video/Cta/CtaContainer";

const VideoContainer = () => {
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

export default VideoContainer;
