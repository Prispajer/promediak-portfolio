import { motion } from "framer-motion";
import { stats } from "@/data/content";

const DescriptionContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h2 className="font-headers text-foreground text-3xl md:text-4xl">
        Pasja, Doświadczenie, Jakość
      </h2>
      <p className="body-text">
        ProMediak to zespół doświadczonych filmowców i fotografów, którzy łączą
        techniczne umiejętności z artystyczną wizją. Od lat dokumentujemy
        najważniejsze momenty w życiu naszych klientów.
      </p>
      <p className="body-text">
        Każdy projekt traktujemy indywidualnie, dostosowując nasze podejście do
        potrzeb i oczekiwań. Pracujemy na profesjonalnym sprzęcie, ale to nie
        technika, a emocje są dla nas najważniejsze.
      </p>
      <p className="body-text">
        Naszą misją jest tworzenie wspomnień, które przetrwają pokolenia — zdjęć
        i filmów, które wzruszą Was za każdym razem, gdy po nie sięgniecie.
      </p>

      <div className="border-border/30 grid grid-cols-3 gap-6 border-t pt-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-display text-accent mb-1 text-3xl">
              {stat.number}
            </p>
            <p className="text-muted-foreground font-body text-xs tracking-wide uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default DescriptionContent;
