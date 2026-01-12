import Link from "next/link";
import { Instagram, Youtube, Mail, Phone } from "lucide-react";


export default function AppFooter() {
    return (
        <>
        <footer className="bg-card border-t border-border/30">
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Logo & Description */}
                    <div className="space-y-6">
                        {/*<Logo variant="full" />*/}
                        {/*<p className="body-text text-sm max-w-xs">*/}
                        {/*    Profesjonalne usługi filmowe i fotograficzne. Tworzymy*/}
                        {/*    wyjątkowe wspomnienia z najważniejszych chwil Twojego życia.*/}
                        {/*</p>*/}
                    </div>

                    {/* Quick Links */}
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

                    {/* Contact & Social */}
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

                        {/* Social Links */}
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
                </div>

                {/* Copyright */}
                <div className="mt-16 pt-8 border-t border-border/20 text-center">
                    <p className="text-sm text-muted-foreground font-body">
                        © {new Date().getFullYear()} ProMediak. Wszystkie prawa zastrzeżone.
                    </p>
                </div>
            </div>
        </footer>
        <div className="py-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground font-body">
                Film & Fotografia Profesjonalna
            </p>
            <p className="text-sm text-accent mt-2 font-body">
                kontakt@promediak.pl
            </p>
        </div>
        </>
    )
}