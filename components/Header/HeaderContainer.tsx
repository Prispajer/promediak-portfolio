import React from "react";
import HeaderDesktopNav from "@/components/Header/HeaderDesktopNav";
import HeaderMobileMenu from "@/components/Header/HeaderMobileMenu";
import HeaderMobileOverlay from "@/components/Header/HeaderMobileOverlay";

const HeaderContainer = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        const handleResize = () => isOpen && window.innerWidth > 1024 && setIsOpen(false);

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize)};
    }, [isOpen])

    return (
            <div className="fixed inset-0 z-40 transition-all duration-500 opacity-100 pointer-events-auto">
                 <HeaderMobileOverlay isOpen={isOpen} setIsOpen={setIsOpen} />
                 <nav className="container mx-auto px-6 py-4">
                    <HeaderDesktopNav isOpen={isOpen} setIsOpen={setIsOpen} />
                 </nav>
                <HeaderMobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
    )
}

export default HeaderContainer;