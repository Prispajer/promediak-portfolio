import FooterDescription from "@/components/Footer/FooterDescription";
import FooterLinks from "@/components/Footer/FooterLinks";
import FooterContact from "@/components/Footer/FooterContact";


export default function AppFooter() {
    return (
        <footer className="bg-card border-t border-border/30">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <FooterDescription/>
                    <FooterLinks/>
                    <FooterContact/>
                </div>
                <FooterContact/>
            </div>
        </footer>
    )
}