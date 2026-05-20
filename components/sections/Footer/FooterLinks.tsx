import Link from "next/link";
import { footerLinks } from "@/data/config";

const FooterLinks = () => {
  return (
    <div>
      <h4 className="font-body text-foreground mb-6 cursor-default text-lg tracking-wide">
        Nawigacja
      </h4>
      <nav aria-label="Nawigacja w stopce">
        <ul className="space-y-3">
          {footerLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className="text-muted-foreground hover:text-accent font-body text-sm tracking-wide transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default FooterLinks;
