import {Instagram, Mail, Phone, Youtube} from "lucide-react";

const FooterContact = () => {
    return (
        <div>
            <h4 className="font-display text-lg tracking-wide mb-6 text-foreground">
                Kontakt
            </h4>
            <div className="space-y-4">
                <a
                    href="mailto:kontakt@promediak.pl"
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors text-sm font-body"
                >
                    <Mail size={18} />
                    kontakt@promediak.pl
                </a>
                <a
                    href="tel:+48123456789"
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors text-sm font-body"
                >
                    <Phone size={18} />
                    +48 123 456 789
                </a>
            </div>
            <div className="flex gap-4 mt-6">
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300"
                >
                    <Instagram size={18} />
                </a>
                <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent transition-all duration-300"
                >
                    <Youtube size={18} />
                </a>
            </div>
        </div>
    )
}

export default FooterContact;