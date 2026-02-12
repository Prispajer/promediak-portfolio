import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PortfolioButton = () => {
  return (
    <div className="animate-fade-up mt-12 flex flex-col justify-center delay-300 sm:flex-row">
      <Button asChild variant="outline" size="lg" className="">
        <Link className="inline-block break-words" href="/portfolio/photo">
          <div className="">ZOBACZ PEŁNE PORTFOLIO</div>
          <ArrowRight className="ml-2" size={18} />
        </Link>
      </Button>
    </div>
  );
};

export default PortfolioButton;
