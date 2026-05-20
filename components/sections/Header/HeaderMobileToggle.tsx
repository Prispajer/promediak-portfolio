import React from "react";
import { Menu } from "lucide-react";

type HeaderDesktopNavProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderMobileToggle = ({ isOpen, setIsOpen }: HeaderDesktopNavProps) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="text-foreground hover:text-accent p-2 transition-colors lg:hidden"
      aria-expanded={isOpen}
      aria-haspopup="true"
      aria-label={isOpen ? "Zamknij menu" : "Otwórz menu"}
    >
      {!isOpen && <Menu size={24} aria-hidden="true" />}
    </button>
  );
};

export default HeaderMobileToggle;
