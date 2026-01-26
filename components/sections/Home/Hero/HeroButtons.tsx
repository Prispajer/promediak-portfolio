import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Play } from "lucide-react";

const HeroButtons = () => {
  return (
    <div className="animate-fade-up flex flex-col justify-center gap-4 delay-300 sm:flex-row">
      <Button
        asChild
        variant="outline"
        size="xl"
        className="group cursor-pointer"
      >
        <Link href="/portfolio/photo" className="flex items-center gap-2">
          <span>Zobacz Portfolio</span>
        </Link>
      </Button>
      <Button
        asChild
        variant="ghost"
        size="xl"
        className="group cursor-pointer"
      >
        <Link href="/portfolio/video" className="flex items-center gap-2">
          <Play
            size={18}
            className="group-hover:text-accent transition-colors"
          />
          <span>Obejrzyj Filmy</span>
        </Link>
      </Button>
    </div>
  );
};

export default HeroButtons;
