import {Button} from "@/components/ui/button";
import Link from "next/link";

const HeroButtons = () => {
    return (
        <div className="container mx-auto flex items-center justify-center h-full z-10">
            <Button asChild variant="outline" size="lg" className="group">
                <Link href="/fotografia" className="flex items-center gap-2">
                    <span>Zobacz Portfolio</span>
                </Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="group">
                <Link href="/film" className="flex items-center gap-2">
                    {/*<Play size={18} className="group-hover:text-accent transition-colors" />*/}
                    <span>Obejrzyj Filmy</span>
                </Link>
            </Button>
        </div>
    );
}

export default HeroButtons;