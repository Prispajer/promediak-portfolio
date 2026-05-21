import Image from "next/image";
import heroImage from "@/public/images/PhotoHero.jpg";

const HeroBackground = () => {
  return (
    <div className="relative h-full w-full lg:w-3/5" aria-hidden="true">
      <Image
        src={heroImage}
        alt="Hero background"
        fill
        priority
        className="object-cover object-center"
        placeholder="blur"
      />
      <div
        aria-hidden="true"
        className="from-background via-background/60 absolute inset-0 bg-gradient-to-r to-transparent"
      />
      <div
        aria-hidden="true"
        className="from-background to-background/20 absolute inset-0 bg-gradient-to-t via-transparent"
      />
    </div>
  );
};

export default HeroBackground;
