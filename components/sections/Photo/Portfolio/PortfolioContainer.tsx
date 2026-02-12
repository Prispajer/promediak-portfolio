import { photographyPortfolio } from "@/data/portfolio";
import PortfolioGrid from "@/components/common/PortfolioGrid";

const PortfolioContainer = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <PortfolioGrid items={photographyPortfolio} columns={3} />
      </div>
    </section>
  );
};

export default PortfolioContainer;
