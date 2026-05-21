import Link from "next/link";

const Logo = () => {
  return (
    <Link
      aria-label="PROMEDIAK - Strona główna"
      href="/"
      className="group flex items-center gap-3"
    >
      <div className="relative" aria-hidden="true">
        <div className="border-accent/50 group-hover:border-accent flex h-12 w-12 items-center justify-center space-x-1 border duration-500 group-hover:shadow-[0_0_20px_hsl(160_70%_35%_/_0.3)] md:h-14 md:w-14">
          <span className="font-logo text-foreground text-xl font-medium md:text-2xl">
            P
          </span>
          <span className="font-logo text-foreground text-2xl font-medium">
            R
          </span>
        </div>
        <div className="border-accent/70 absolute -top-px -right-px h-3 w-3 border-t border-r" />
        <div className="border-accent/70 absolute -bottom-px -left-px h-3 w-3 border-b border-l" />
      </div>
      <div className="flex flex-col">
        <span className="font-logo text-foreground text-lg font-[400] tracking-[0.3em] md:text-xl">
          PROMEDIAK
        </span>
        <span className="font-logo text-muted-foreground text-[10px] font-[400] tracking-[0.4em] uppercase md:text-[12px]">
          Film & Fotografia
        </span>
      </div>
    </Link>
  );
};

export default Logo;
