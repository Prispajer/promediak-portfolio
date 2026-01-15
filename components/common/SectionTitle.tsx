import { motion } from "framer-motion";

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    align?: "left" | "center";
}

const SectionTitle = ({ title, subtitle, align = "center" }: SectionTitleProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
        >
            <div
                className={`w-px h-12 bg-gradient-to-b from-transparent via-accent to-transparent mb-6 ${
                    align === "center" ? "mx-auto" : ""
                }`}
            />

            <h2 className="section-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                {title}
            </h2>

            {subtitle && (
                <p className="body-text text-base md:text-lg max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
};

export default SectionTitle;
