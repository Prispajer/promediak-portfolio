import { Facebook, Mail, Phone, Youtube } from "lucide-react";
import Link from "next/link";

const FooterContact = () => {
  return (
    <div>
      <h4 className="font-display text-foreground mb-6 cursor-default text-lg tracking-wide">
        Kontakt
      </h4>
      <div className="space-y-4">
        <Link
          href="mailto:kontakt@promediak@gmail.com
"
          className="text-muted-foreground hover:text-accent font-body flex items-center gap-3 text-sm transition-colors"
        >
          <Mail size={18} />
          promediak.studio@gmail.com
        </Link>
        <Link
          href="tel:+48796642213"
          className="font-body text-muted-foreground hover:text-accent flex items-center gap-3 text-sm transition-colors"
        >
          <Phone size={18} />
          +48 796 642 213
        </Link>
      </div>
      <div className="mt-6 flex gap-4">
        <Link
          href="https://www.facebook.com/ProMediak"
          target="_blank"
          rel="noopener noreferrer"
          className="border-border/50 text-muted-foreground hover:text-accent hover:border-accent flex h-10 w-10 items-center justify-center border transition-all duration-300"
        >
          <Facebook size={18} />
        </Link>
        <Link
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="border-border/50 hover:text-accent hover:border-accent text-muted-foreground flex h-10 w-10 items-center justify-center border transition-all duration-300"
        >
          <Youtube size={18} />
        </Link>
      </div>
    </div>
  );
};

export default FooterContact;
