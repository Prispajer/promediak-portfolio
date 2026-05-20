import { Facebook, Mail, MapPin, Phone, Youtube } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/config";

const FooterContact = () => {
  return (
    <div>
      <h4 className="font-body text-foreground mb-6 cursor-default text-lg tracking-wide">
        Kontakt
      </h4>
      <div className="space-y-4">
        <Link
          href="mailto:promediak.studio@gmail.com"
          className="text-muted-foreground hover:text-accent font-body flex items-center gap-3 text-sm transition-colors"
        >
          <Mail size={18} aria-hidden="true" />
          {siteConfig.email}
        </Link>
        <Link
          href="tel:+48796642213"
          className="font-body text-muted-foreground hover:text-accent flex items-center gap-3 text-sm transition-colors"
        >
          <Phone size={18} aria-hidden="true" />
          {siteConfig.phone}
        </Link>
        <Link
          href="https://www.google.com/maps/search/?api=1&query=Krynki,+ul.+Długa+54,+27-230+Brody"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-muted-foreground hover:text-accent flex items-center gap-3 text-sm transition-colors"
        >
          <MapPin size={18} aria-hidden="true" />
          {siteConfig.location}
        </Link>
      </div>
      <div className="mt-6 flex gap-4">
        <Link
          href="https://www.facebook.com/ProMediak"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nasz profil na Facebooku"
          className="border-border/50 text-muted-foreground hover:text-accent hover:border-accent flex h-10 w-10 items-center justify-center border transition-all duration-300"
        >
          <Facebook size={18} aria-hidden="true" />
        </Link>
        <Link
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nasz kanał na YouTube"
          className="border-border/50 hover:text-accent hover:border-accent text-muted-foreground flex h-10 w-10 items-center justify-center border transition-all duration-300"
        >
          <Youtube size={18} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
};

export default FooterContact;
