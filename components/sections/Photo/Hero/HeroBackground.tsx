import heroImage from "@/public/images/Hero.jpg";

const HeroBackground = () => {
  return (
    <div className="relative w-2/3 md:w-3/5">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      />
      <div className="from-background via-background/60 absolute inset-0 bg-gradient-to-r to-transparent" />
      <div className="from-background/80 to-background/40 absolute inset-0 bg-gradient-to-t via-transparent" />
    </div>
  );
};

export default HeroBackground;
