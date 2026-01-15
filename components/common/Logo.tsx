import Link from "next/link";

interface LogoProps {
    variant?: "full" | "short";
    className?: string;
}

const Logo = ({ variant = "full", className = "" }: LogoProps) => {
    return (
        <Link href="/" className={`group flex items-center gap-3 ${className}`}>
            <div className="relative">
                <div className="w-12 h-12 border border-accent/50 flex items-center justify-center transition-all duration-500 group-hover:border-accent group-hover:shadow-[0_0_20px_hsl(160_70%_35%_/_0.3)]">
          <span className="font-display text-xl font-light tracking-[0.2em] text-foreground">
            PR
          </span>
                </div>
                <div className="absolute -top-px -right-px w-3 h-3 border-t border-r border-accent/70" />
                <div className="absolute -bottom-px -left-px w-3 h-3 border-b border-l border-accent/70" />
            </div>
            {variant === "full" && (
                <div className="flex flex-col">
          <span className="font-display text-lg tracking-[0.3em] text-foreground font-light">
            PROMEDIAK
          </span>
                    <span className="text-[10px] tracking-[0.4em] text-muted-foreground font-body uppercase">
            Film & Fotografia
          </span>
                </div>
            )}
        </Link>
    );
};

export default Logo;