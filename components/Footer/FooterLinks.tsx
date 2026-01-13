import Link from "next/link";

const FooterLinks = () => {
    return (
        <div>
            <h4 className="font-display text-lg tracking-wide mb-6 text-foreground">
                Nawigacja
            </h4>
            <ul className="space-y-3">
                {[
                    { name: "Fotografia", path: "/fotografia" },
                    { name: "Film", path: "/film" },
                    { name: "O Nas", path: "/o-nas" },
                    { name: "Kontakt", path: "/kontakt" },
                ].map((link) => (
                    <li key={link.path}>
                        <Link
                            href={link.path}
                            className="text-muted-foreground hover:text-accent transition-colors text-sm font-body tracking-wide"
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterLinks;