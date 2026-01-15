import FooterDescription from "@/components/sections/Footer/FooterDescription";
import FooterLinks from "@/components/sections/Footer/FooterLinks";
import FooterContact from "@/components/sections/Footer/FooterContact";
import FooterCopyright from "@/components/sections/Footer/FooterCopyright";

const FooterContainer = () => {
    return (
        <div className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <FooterDescription/>
                <FooterLinks/>
                <FooterContact/>
            </div>
            <FooterCopyright/>
        </div>
    );
}

export default FooterContainer;