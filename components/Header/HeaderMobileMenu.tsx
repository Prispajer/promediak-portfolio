import React from "react";
import {navLinks} from "@/data/links";
import Link from "next/link";
import HeaderMobileOverlay from "@/components/Header/HeaderMobileOverlay";

type HeaderMobileMenuProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderMobileMenu = ({isOpen, setIsOpen} : HeaderMobileMenuProps)=> {
    return (
        <div
            className={`absolute right-0 top-0 h-full w-full max-w-md bg-card border-l border-border/50 transition-transform duration-500 ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            <div className="flex flex-col h-full pt-24 px-8">
                <nav className="flex-1">
                    <ul className="space-y-6">
                        {navLinks.map((link, index) => (
                            <li
                                key={link.path}
                                className={`transform transition-all duration-500 ${
                                    isOpen
                                        ? "translate-x-0 opacity-100"
                                        : "translate-x-8 opacity-0"
                                }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <Link
                                    href={link.path}
                                    className={`block text-2xl font-display tracking-wide transition-colors hover:text-accent ${
                                        location.pathname === link.path
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
                <div className="py-8 border-t border-border/30">
                    <p className="text-sm text-muted-foreground font-body">
                        Film & Fotografia Profesjonalna
                    </p>
                    <p className="text-sm text-accent mt-2 font-body">
                        kontakt@promediak.pl
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeaderMobileMenu;