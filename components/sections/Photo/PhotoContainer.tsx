import CategoriesContainer from "@/components/sections/Photo/Categories/CategoriesContainer";
import HeroContainer from "@/components/sections/Photo/Hero/HeroContainer";
import QuoteContainer from "@/components/sections/Photo/Quote/QuoteContainer";
import CtaContainer from "@/components/sections/Photo/Cta/CtaContainer";
import PortfolioContainer from "@/components/sections/Photo/Portfolio/PortfolioContainer";

const PhotoContainer = () => {
  return (
    <>
      <HeroContainer />
      <PortfolioContainer />
      <QuoteContainer />
      <CategoriesContainer />
      <CtaContainer />
    </>
  );
};

export default PhotoContainer;
