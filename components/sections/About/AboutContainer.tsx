import HeroContainer from "@/components/sections/About/Hero/HeroContainer";
import DescriptionContainer from "@/components/sections/About/Description/DescriptionContainer";
import QuoteContainer from "@/components/sections/About/Quote/QuoteContainer";
import ValuesContainer from "@/components/sections/About/Values/ValuesContainer";
import CtaContainer from "@/components/sections/About/Cta/CtaContainer";

const AboutContainer = () => {
  return (
    <>
      <HeroContainer />
      <DescriptionContainer />
      <QuoteContainer />
      <ValuesContainer />
      <CtaContainer />
    </>
  );
};

export default AboutContainer;
