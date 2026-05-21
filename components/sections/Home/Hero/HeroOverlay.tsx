const HeroOverlay = () => {
  return (
    <>
      <div
        aria-hidden="true"
        className="via-accent animate-fade-in mx-auto mb-8 h-16 w-[3px] bg-gradient-to-b from-transparent to-transparent"
      />
      <div
        aria-hidden="true"
        className="border-accent/50 absolute top-24 left-6 h-20 w-20 border-t border-l"
      />
      <div
        aria-hidden="true"
        className="border-accent/50 absolute right-6 bottom-24 h-20 w-20 border-r border-b"
      />
    </>
  );
};

export default HeroOverlay;
