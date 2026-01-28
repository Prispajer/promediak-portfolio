import React from "react";
import { Menu, X } from "lucide-react";

type HeaderDesktopNavProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderMobileToggle = ({ isOpen, setIsOpen }: HeaderDesktopNavProps) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="text-foreground hover:text-accent p-2 transition-colors lg:hidden"
      aria-label="Menu"
    >
      {isOpen ? (
        <X className="absolute top-7 right-10 z-10" size={24} />
      ) : (
        <Menu size={24} />
      )}
    </button>
  );
};

export default HeaderMobileToggle;
