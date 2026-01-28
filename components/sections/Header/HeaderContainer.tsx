import React from "react";
import HeaderDesktopNav from "@/components/sections/Header/HeaderDesktopNav";
import HeaderMobileMenu from "@/components/sections/Header/HeaderMobileMenu";
import HeaderMobileOverlay from "@/components/sections/Header/HeaderMobileOverlay";

const HeaderContainer = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () =>
      isOpen && window.innerWidth > 1024 && setIsOpen(false);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  return (
    <div
      className={`w-full transition-all duration-500 ${isScrolled ? "bg-background/95 border-border/50 border-b" : ""}`}
    >
      <HeaderMobileOverlay isOpen={isOpen} setIsOpen={setIsOpen} />
      <nav className="container mx-auto px-6 py-4">
        <HeaderDesktopNav isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
      <HeaderMobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default HeaderContainer;
