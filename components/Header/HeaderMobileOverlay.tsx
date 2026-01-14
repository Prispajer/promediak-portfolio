import React from "react";

type HeaderMobileOverlayProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderMobileOverlay = ({isOpen, setIsOpen} : HeaderMobileOverlayProps) => {
    return (
        <div
            className={`fixed inset-0 lg:hidden transition-all duration-500 ${
                isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
        >
            <div
                className="absolute inset-0 bg-background/95 backdrop-blur-md"
                onClick={() => setIsOpen(false)}
            />
        </div>
    )
}

export default HeaderMobileOverlay;