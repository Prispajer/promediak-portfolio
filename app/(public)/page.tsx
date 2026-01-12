"use client"
import { motion } from "framer-motion";
import { ArrowRight, Camera, Film, Star, Heart, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
// import Navigation from "@/components/Navigation";
// import Footer from "@/components/Footer";
// import HeroSection from "@/components/HeroSection";
// import SectionTitle from "@/components/SectionTitle";
// import ParallaxSection from "@/components/ParallaxSection";
// import SEOHead from "@/components/SEOHead";
import heroImage from "@/assets/hero-main.jpg";
// import wedding1 from "@/assets/portfolio-wedding-1.jpg";
// import wedding2 from "@/assets/portfolio-wedding-2.jpg";
// import event1 from "@/assets/portfolio-event-1.jpg";
// import portrait1 from "@/assets/portfolio-portrait-1.jpg";
import Link from "next/link";
import Image from "next/image";

const portfolioPreview = [
    { id: "1", image: "", title: "Ślub Anny & Marka", category: "Fotografia Ślubna" },
    { id: "2", image: "", title: "Sesja w Lesie", category: "Portret" },
    { id: "3", image: "", title: "Gala Firmowa", category: "Eventy" },
    { id: "4", image: "", title: "Portret Artystyczny", category: "Studio" },
];

const services = [
    {
        icon: Camera,
        title: "Fotografia",
        description: "Uwieczniamy najważniejsze momenty z artystycznym podejściem i dbałością o każdy detal.",
        link: "/fotografia",
    },
    {
        icon: Film,
        title: "Film",
        description: "Tworzymy kinowe produkcje, które opowiadają Waszą historię w poruszający sposób.",
        link: "/film",
    },
];

const testimonials = [
    {
        text: "Absolutnie zachwyceni! Zdjęcia i film z naszego ślubu to prawdziwe dzieła sztuki.",
        author: "Anna & Marek",
        role: "Ślub 2024",
    },
    {
        text: "Profesjonalizm na najwyższym poziomie. Polecam każdemu!",
        author: "Katarzyna",
        role: "Sesja portretowa",
    },
    {
        text: "Perfekcyjne uchwycenie emocji. Każde zdjęcie opowiada historię.",
        author: "Tomasz & Julia",
        role: "Plener ślubny",
    },
];

const stats = [
    { icon: Heart, number: "200+", label: "Szczęśliwych Par" },
    { icon: Award, number: "8", label: "Lat Doświadczenia" },
    { icon: Star, number: "100%", label: "Zadowolonych Klientów" },
];

export default function HomePage() {
    return (
        <div className="min-h-screen bg-background">
            {/*<SEOHead*/}
            {/*    title="Strona Główna"*/}
            {/*    description="ProMediak oferuje profesjonalne usługi fotograficzne i filmowe. Śluby, eventy, portrety. Utrwalamy najważniejsze momenty Twojego życia z pasją i artystyczną wizją."*/}
            {/*    keywords="fotografia ślubna, film ślubny, fotograf, kamerzysta, ProMediak"*/}
            {/*/>*/}
            {/*<Navigation />*/}

            {/*/!* Hero Section *!/*/}
            {/*<HeroSection*/}
            {/*    backgroundImage={heroImage}*/}
            {/*    title="Tworzymy Wspomnienia"*/}
            {/*    subtitle="Profesjonalne usługi filmowe i fotograficzne. Utrwalamy najważniejsze momenty Twojego życia z pasją i artystyczną wizją."*/}
            {/*/>*/}

            {/* Stats Section */}
            <section className="py-16 bg-card border-y border-border/20">
                <div className="container mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-12 md:gap-24">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                                <p className="text-4xl font-display text-foreground mb-1">
                                    {stat.number}
                                </p>
                                <p className="text-sm text-muted-foreground font-body tracking-wide uppercase">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto px-6">
                    {/*<SectionTitle*/}
                    {/*    title="Nasze Usługi"*/}
                    {/*    subtitle="Oferujemy kompleksowe usługi foto-video na najwyższym poziomie"*/}
                    {/*/>*/}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group card-premium p-8 border border-border/30 hover:border-accent/50 transition-all duration-500"
                            >
                                <service.icon className="w-10 h-10 text-accent mb-6" />
                                <h3 className="text-2xl font-display text-foreground mb-4">
                                    {service.title}
                                </h3>
                                <p className="body-text mb-6">{service.description}</p>
                                <Link
                                    href={service.link}
                                    className="inline-flex items-center gap-2 text-accent hover:gap-4 transition-all duration-300 text-sm font-body tracking-wide"
                                >
                                    Dowiedz się więcej
                                    <ArrowRight size={16} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Parallax Quote Section */}
            {/*<ParallaxSection backgroundImage={wedding2} height="50vh">*/}
            {/*    <div className="container mx-auto px-6 py-20">*/}
            {/*        <motion.blockquote*/}
            {/*            initial={{ opacity: 0, scale: 0.95 }}*/}
            {/*            whileInView={{ opacity: 1, scale: 1 }}*/}
            {/*            transition={{ duration: 0.6 }}*/}
            {/*            viewport={{ once: true }}*/}
            {/*            className="text-center max-w-3xl mx-auto"*/}
            {/*        >*/}
            {/*            <div className="w-px h-12 bg-accent mx-auto mb-8" />*/}
            {/*            <p className="text-2xl md:text-3xl font-display text-foreground italic mb-6">*/}
            {/*                "Każde zdjęcie to zatrzymana chwila, każdy film to opowiedziana historia"*/}
            {/*            </p>*/}
            {/*            <p className="text-accent font-body tracking-widest uppercase text-sm">*/}
            {/*                — Filozofia ProMediak*/}
            {/*            </p>*/}
            {/*        </motion.blockquote>*/}
            {/*    </div>*/}
            {/*</ParallaxSection>*/}

            {/* Portfolio Preview */}
            <section className="py-24 md:py-32 bg-card">
                <div className="container mx-auto px-6">
                    {/*<SectionTitle*/}
                    {/*    title="Wybrane Realizacje"*/}
                    {/*    subtitle="Zobacz fragment naszego portfolio i przekonaj się o jakości naszych usług"*/}
                    {/*/>*/}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {portfolioPreview.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative aspect-[4/5] overflow-hidden cursor-pointer"
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-xs text-accent font-body tracking-widest uppercase mb-2">
                                        {item.category}
                                    </p>
                                    <h3 className="text-lg font-display text-foreground">
                                        {item.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button asChild variant="outline" size="lg">
                            <Link href="/fotografia">
                                Zobacz Pełne Portfolio
                                <ArrowRight className="ml-2" size={18} />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 md:py-32">
                <div className="container mx-auto px-6">
                    {/*<SectionTitle*/}
                    {/*    title="Opinie Klientów"*/}
                    {/*    subtitle="Co mówią o nas pary, które nam zaufały"*/}
                    {/*/>*/}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.author}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 border border-border/30 bg-card/50 relative"
                            >
                                <div className="absolute top-4 left-4 text-accent/20 text-6xl font-display">"</div>
                                <p className="body-text mb-6 relative z-10 pt-4">
                                    {testimonial.text}
                                </p>
                                <div className="border-t border-border/30 pt-4">
                                    <p className="font-display text-foreground">{testimonial.author}</p>
                                    <p className="text-xs text-muted-foreground tracking-wide uppercase">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section with Parallax */}
            {/*<ParallaxSection backgroundImage={heroImage} height="60vh">*/}
            {/*    <div className="container mx-auto px-6 py-20">*/}
            {/*        <motion.div*/}
            {/*            initial={{ opacity: 0, y: 20 }}*/}
            {/*            whileInView={{ opacity: 1, y: 0 }}*/}
            {/*            transition={{ duration: 0.6 }}*/}
            {/*            viewport={{ once: true }}*/}
            {/*            className="text-center max-w-3xl mx-auto"*/}
            {/*        >*/}
            {/*            <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">*/}
            {/*                Gotowy na Współpracę?*/}
            {/*            </h2>*/}
            {/*            <p className="body-text text-lg mb-10">*/}
            {/*                Skontaktuj się z nami i opowiedz o swoich planach. Razem stworzymy*/}
            {/*                coś wyjątkowego.*/}
            {/*            </p>*/}
            {/*            <Button asChild size="lg" className="glow-emerald">*/}
            {/*                <Link to="/kontakt">Napisz do Nas</Link>*/}
            {/*            </Button>*/}
            {/*        </motion.div>*/}
            {/*    </div>*/}
            {/*</ParallaxSection>*/}

            {/*<Footer />*/}
        </div>
    );
};