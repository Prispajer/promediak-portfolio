"use client";

import React from "react";
import { navLinks, siteConfig } from "@/data/config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

type HeaderMobileMenuProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderMobileMenu = ({ isOpen, setIsOpen }: HeaderMobileMenuProps) => {
  const pathname = usePathname();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      className={`bg-card border-border/50 fixed top-0 right-0 z-50 h-full w-full max-w-md border-l transition-transform duration-500 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex h-full flex-col px-8 pt-24">
        {isOpen && (
          <X
            onClick={() => setIsOpen(!isOpen)}
            className="absolute top-7 right-10"
            size={24}
            aria-hidden="true"
          />
        )}
        <nav aria-label="Menu mobilne" className="flex-1">
          <ul className="space-y-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`hover:text-accent text-xl tracking-wide uppercase transition-colors ${
                    pathname === link.path
                      ? "nav-item-active text-foreground font-bold"
                      : "nav-item text-foreground/80"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="border-border/30 border-t py-8">
          <p className="text-muted-foreground font-body cursor-default text-sm">
            Film & Fotografia Profesjonalna
          </p>
          <p className="text-accent font-body mt-2 cursor-default text-sm">
            {siteConfig.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobileMenu;
