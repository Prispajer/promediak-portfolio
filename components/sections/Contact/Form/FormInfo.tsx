import { siteConfig } from "@/data/links";
import { Clock, Facebook, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const FormInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div>
        <h2 className="font-display text-foreground mb-6 text-2xl">
          Dane Kontaktowe
        </h2>
        <div className="space-y-6">
          <a
            href={`mailto:${siteConfig.email}`}
            className="group flex items-start gap-4"
            aria-label="Wyślij email"
          >
            <div className="border-border/50 group-hover:border-accent flex h-12 w-12 items-center justify-center border transition-colors">
              <Mail
                size={20}
                className="text-muted-foreground group-hover:text-accent transition-colors"
              />
            </div>
            <div>
              <p className="text-muted-foreground mb-1 text-sm">Email</p>
              <p className="text-foreground group-hover:text-accent transition-colors">
                {siteConfig.email}
              </p>
            </div>
          </a>

          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="group flex items-start gap-4"
            aria-label="Zadzwoń"
          >
            <div className="border-border/50 group-hover:border-accent flex h-12 w-12 items-center justify-center border transition-colors">
              <Phone
                size={20}
                className="text-muted-foreground group-hover:text-accent transition-colors"
              />
            </div>
            <div>
              <p className="text-muted-foreground mb-1 text-sm">Telefon</p>
              <p className="text-foreground group-hover:text-accent transition-colors">
                {siteConfig.phone}
              </p>
            </div>
          </a>
          <div className="flex items-start gap-4">
            <div className="border-border/50 flex h-12 w-12 items-center justify-center border">
              <MapPin size={20} className="text-muted-foreground" />
            </div>
            <div>
              <p className="text-muted-foreground mb-1 text-sm">Lokalizacja</p>
              <p className="text-foreground">{siteConfig.location}</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="border-border/50 flex h-12 w-12 items-center justify-center border">
              <Clock size={20} className="text-muted-foreground" />
            </div>
            <div>
              <p className="text-muted-foreground mb-1 text-sm">
                Godziny kontaktu
              </p>
              <p className="text-foreground">{siteConfig.hours}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="font-display text-foreground mb-4 text-lg">
          Social Media
        </h3>
        <div className="flex gap-4">
          <a
            href={siteConfig.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border/50 hover:border-accent hover:text-accent flex h-12 w-12 items-center justify-center border transition-all"
            aria-label="Instagram ProMediak"
          >
            <Facebook size={20} />
          </a>
          <a
            href={siteConfig.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border/50 hover:border-accent hover:text-accent flex h-12 w-12 items-center justify-center border transition-all"
            aria-label="YouTube ProMediak"
          >
            <Youtube size={20} />
          </a>
        </div>
      </div>
      <div className="border-border/30 bg-card border p-6">
        <h3 className="font-display text-foreground mb-3 text-lg">
          Czas Odpowiedzi
        </h3>
        <p className="body-text text-sm">
          Staramy się odpowiadać na wszystkie wiadomości w ciągu 24 godzin. W
          pilnych sprawach prosimy o kontakt telefoniczny.
        </p>
      </div>
    </motion.div>
  );
};

export default FormInfo;
