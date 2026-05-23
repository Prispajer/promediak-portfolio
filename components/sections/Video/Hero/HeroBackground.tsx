import heroImage from "@/public/assets/content/VideoHero.jpg";
import ImageBackground from "@/components/common/ImageBackground";

const HeroBackground = () => {
  return (
    <>
      <ImageBackground backgroundImage={heroImage}>
        <div className="bg-background/60 absolute inset-0" />;
      </ImageBackground>
    </>
  );
};

export default HeroBackground;
