import ImageBackground from "@/components/common/ImageBackground";
import heroImage from "@/public/images/Hero.jpg";

const HeroBackground = () => {
  return (
    <>
      <ImageBackground
        backgroundImage={heroImage}
        className="bg-cover bg-center bg-no-repeat"
      />
    </>
  );
};

export default HeroBackground;
