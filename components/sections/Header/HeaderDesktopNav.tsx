import React from "react";
import Logo from "@/components/common/Logo";
import { navLinks } from "@/data/links";
import Link from "next/link";
import HeaderMobileToggle from "@/components/sections/Header/HeaderMobileToggle";
import { usePathname } from "next/navigation";

type HeaderDesktopNavProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderDesktopNav = ({ isOpen, setIsOpen }: HeaderDesktopNavProps) => {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between">
      <Logo variant="full" />
      <ul className="hidden items-center gap-8 lg:flex">
        {navLinks.map((link) => (
          <li key={link.path}>
            <Link
              href={link.path}
              className={`text-xl font-[400] tracking-widest ${
                pathname === link.path
                  ? "nav-item-active text-foreground"
                  : "nav-item text-foreground/80"
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <HeaderMobileToggle isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default HeaderDesktopNav;
