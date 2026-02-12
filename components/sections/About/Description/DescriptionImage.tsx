import { motion } from "framer-motion";
import Image from "next/image";
import film from "@/public/images/Film.jpg";

const DescriptionImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative"
    >
      <Image
        src={film}
        alt="Zespół ProMediak przy pracy"
        loading="lazy"
        className="aspect-[4/5] w-full object-cover"
      />
      <div className="border-accent/50 v absolute -top-4 -left-4 h-24 w-24 border-t border-l" />
      <div className="border-accent/50 absolute -right-4 -bottom-4 h-24 w-24 border-r border-b" />
    </motion.div>
  );
};

export default DescriptionImage;
