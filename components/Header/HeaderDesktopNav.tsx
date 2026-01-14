import React from "react";
import Logo from "@/components/Shared/Logo";
import {navLinks} from "@/data/links";
import Link from "next/link";
import HeaderMobileToggle from "@/components/Header/HeaderMobileToggle";

type HeaderDesktopNavProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderDesktopNav = ({isOpen, setIsOpen} : HeaderDesktopNavProps) => {
    return (
        <div className="flex justify-between items-center">
            <Logo variant="full" />
            <ul className="hidden lg:flex items-center gap-8">
                {navLinks.map((link) => (
                    <li key={link.path}>
                        <Link
                            href={link.path}
                            className={`nav-link text-sm font-body font-light tracking-widest uppercase ${
                                location.pathname === link.path ? "active text-foreground" : ""
                            }`}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <HeaderMobileToggle isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
    )
}

export default HeaderDesktopNav;