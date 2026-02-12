import film from "@/public/images/Film.jpg";
import ImageBackground from "@/components/common/ImageBackground";

const HeroBackground = () => {
  return (
    <>
      <ImageBackground
        backgroundImage={film}
        className="bg-cover bg-center bg-no-repeat"
      >
        <div className="bg-background/60 absolute inset-0" />;
      </ImageBackground>
    </>
  );
};

export default HeroBackground;
