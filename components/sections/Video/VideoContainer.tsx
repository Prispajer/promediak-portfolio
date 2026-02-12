import HeroContainer from "@/components/sections/Video/Hero/HeroContainer";
import PortfolioContainer from "@/components/sections/Video/Portfolio/PortfolioContainer";
import QuoteContainer from "@/components/sections/Video/Quote/QuoteContainer";
import ServicesContainer from "@/components/sections/Video/Services/ServicesContainer";
import CtaContainer from "@/components/sections/Video/Cta/CtaContainer";

const VideoContainer = () => {
  return (
    <>
      <HeroContainer />
      <PortfolioContainer />
      <QuoteContainer />
      <ServicesContainer />
      <CtaContainer />
    </>
  );
};

export default VideoContainer;
