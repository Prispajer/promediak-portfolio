import HeroContainer from "@/components/sections/Home/Hero/HeroContainer";
import StatsContainer from "@/components/sections/Home/Stats/StatsContainer";
import ServicesContainer from "@/components/sections/Home/Services/ServicesContainer";
import PortfolioContainer from "@/components/sections/Home/Portfolio/PortfolioContainer";
import CtaContainer from "@/components/sections/Home/Cta/CtaContainer";
import QuoteContainer from "@/components/sections/Home/Quote/QuoteContainer";
import AudienceContainer from "@/components/sections/Home/Audience/AudienceContainer";

const HomeContainer = () => {
  return (
    <>
      <HeroContainer />
      <StatsContainer />
      <ServicesContainer />
      <QuoteContainer />
      <PortfolioContainer />
      <AudienceContainer />
      <CtaContainer />
    </>
  );
};

export default HomeContainer;
