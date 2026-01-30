import React from "react";

type HeaderMobileOverlayProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeaderMobileOverlay = ({
  isOpen,
  setIsOpen,
}: HeaderMobileOverlayProps) => {
  return (
    <div
      className={`fixed inset-0 transition-all duration-500 lg:hidden ${
        isOpen
          ? "pointer-events-none opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div
        className="bg-background/95 absolute inset-0 backdrop-blur-md"
        onClick={() => setIsOpen(false)}
      />
    </div>
  );
};

export default HeaderMobileOverlay;
