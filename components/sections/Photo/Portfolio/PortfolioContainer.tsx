import { photoItems } from "@/data/portfolio";
import PortfolioGrid from "@/components/sections/Photo/Portfolio/PortfolioGrid";

const PortfolioContainer = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32">
      <div className="container mx-auto px-6">
        <PortfolioGrid items={photoItems} />
      </div>
    </section>
  );
};

export default PortfolioContainer;
