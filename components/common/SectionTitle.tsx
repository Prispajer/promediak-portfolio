import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionTitle = ({
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <div
        className={`via-accent mb-6 h-12 w-px bg-gradient-to-b from-transparent to-transparent ${
          align === "center" ? "mx-auto" : ""
        }`}
      />

      <h2 className="section-heading text-foreground mb-4 text-3xl md:text-4xl lg:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="body-text mx-auto max-w-2xl text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
