import {Button} from "@/components/ui/button";
import {Play} from "lucide-react";
import Link from "next/link";

const HomeHero = () => {
    return (
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <div className="max-w-4xl mx-auto">
                <div className="w-[3px] h-16 bg-gradient-to-b from-transparent via-accent to-transparent mx-auto mb-8 animate-fade-in" />
                <h1 className="font-headers text-6xl font-medium bg-heading bg-clip-text text-transparent mb-6 animate-fade-up">
                    Tworzymy wspomnienia
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
                    Profesjonalne usługi filmowe i fotograficzne. Utrwalamy najważniejsze momenty Twojego życia z pasją i artystyczną wizją.
                </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
                        <Button asChild variant="outline" size="xl" className="group cursor-pointer">
                            <Link href="/portfolio/photo" className="flex items-center gap-2">
                                <span>Zobacz Portfolio</span>
                            </Link>
                        </Button>
                        <Button asChild variant="ghost" size="xl" className="group cursor-pointer">
                            <Link href="/portfolio/video" className="flex items-center gap-2">
                                <Play size={18} className="group-hover:text-accent transition-colors" />
                                <span>Obejrzyj Filmy</span>
                            </Link>
                        </Button>
                    </div>

                <div className="absolute top-24 left-6 w-20 h-20 border-l border-t border-accent/50" />
                <div className="absolute bottom-24 right-6 w-20 h-20 border-r border-b border-accent/50 " />
            </div>
        </div>
    );
};

export default HomeHero;
