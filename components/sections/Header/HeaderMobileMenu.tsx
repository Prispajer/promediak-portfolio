import React from "react";
import { navLinks } from "@/data/links";
import Link from "next/link";
import { usePathname } from "next/navigation";

type HeaderMobileMenuProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderMobileMenu = ({ isOpen, setIsOpen }: HeaderMobileMenuProps) => {
  const pathname = usePathname();

  return (
    <div
      className={`bg-card border-border/50 h-full w-full max-w-md border-l duration-500 ${
        isOpen ? "translate-x- fixed top-0 right-0" : "hidden"
      }`}
    >
      <div className="flex h-full flex-col px-8 pt-24">
        <nav className="flex-1">
          <ul className="space-y-6">
            {navLinks.map((link, index) => (
              <li
                key={link.path}
                className={`transition-all duration-500 ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setIsOpen(!isOpen)}
              >
                <Link
                  href={link.path}
                  className={`font-display hover:text-accent block text-xl font-[500] tracking-wide uppercase transition-colors ${
                    pathname === link.path
                      ? "text-accent"
                      : "text-foreground/80"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="border-border/30 border-t py-8">
          <p className="text-muted-foreground font-body text-sm">
            Film & Fotografia Profesjonalna
          </p>
          <p className="text-accent font-body mt-2 text-sm">
            aneta.koziel@op.pl
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobileMenu;
