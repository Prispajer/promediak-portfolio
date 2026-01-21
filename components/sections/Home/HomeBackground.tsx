import ImageBackground from "@/components/common/ImageBackground";
import heroImage from "@/public/images/Hero.jpg";

const HomeBackground = () => {
    return (
        <>
            <ImageBackground backgroundImage={heroImage} className="bg-cover bg-center bg-no-repeat" />
        </>
    );
}

export default HomeBackground;