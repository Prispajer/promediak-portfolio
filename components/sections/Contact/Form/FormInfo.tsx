"use client";

import { siteConfig } from "@/data/config";
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
        <h2 className="font-headers text-foreground mb-6 cursor-default text-2xl">
          Dane Kontaktowe
        </h2>
        <dl className="space-y-6">
          <div className="flex items-start gap-4">
            <dt className="border-border/50 flex h-12 w-12 shrink-0 items-center justify-center border">
              <Mail size={20} className="text-muted-foreground" />
            </dt>
            <dd>
              <span className="text-muted-foreground block cursor-default text-sm">
                Email
              </span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-foreground hover:text-accent transition-colors"
                aria-label={`Wyślij wiadomość e-mail na adres ${siteConfig.email}`}
              >
                {siteConfig.email}
              </a>
            </dd>
          </div>
          <div className="flex items-start gap-4">
            <dt className="border-border/50 flex h-12 w-12 shrink-0 items-center justify-center border">
              <Phone size={20} className="text-muted-foreground" />
            </dt>
            <dd>
              <span className="text-muted-foreground block cursor-default text-sm">
                Telefon
              </span>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="text-foreground hover:text-accent transition-colors"
                aria-label={`Zadzwoń pod numer ${siteConfig.phone}`}
              >
                {siteConfig.phone}
              </a>
            </dd>
          </div>
          <div className="flex items-start gap-4">
            <dt className="border-border/50 flex h-12 w-12 shrink-0 items-center justify-center border">
              <MapPin size={20} className="text-muted-foreground" />
            </dt>
            <dd>
              <span className="text-muted-foreground block cursor-default text-sm">
                Lokalizacja
              </span>
              <p className="text-foreground">{siteConfig.location}</p>
            </dd>
          </div>
          <div className="flex items-start gap-4">
            <dt className="border-border/50 flex h-12 w-12 shrink-0 items-center justify-center border">
              <Clock size={20} className="text-muted-foreground" />
            </dt>
            <dd>
              <span className="text-muted-foreground block cursor-default text-sm">
                Godziny kontaktu
              </span>
              <p className="text-foreground">{siteConfig.hours}</p>
            </dd>
          </div>
        </dl>
      </div>
      <div>
        <h3 className="font-headers text-foreground mb-4 cursor-default text-lg">
          Social Media
        </h3>
        <div className="flex gap-4">
          <a
            href={siteConfig.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border/50 hover:border-accent hover:text-accent flex h-12 w-12 items-center justify-center border transition-all"
            aria-label="Odwiedź nasz profil na Facebooku"
          >
            <Facebook size={20} aria-hidden="true" />
          </a>
          <a
            href={siteConfig.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border/50 hover:border-accent hover:text-accent flex h-12 w-12 items-center justify-center border transition-all"
            aria-label="Odwiedź nasz kanał YouTube"
          >
            <Youtube size={20} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div
        className="border-border/30 bg-card border p-6"
        role="note"
        aria-label="Informacja o czasie odpowiedzi"
      >
        <h3 className="font-headers text-foreground mb-3 cursor-default text-lg">
          Czas Odpowiedzi
        </h3>
        <p className="body-text text-foreground/80 cursor-default text-sm leading-relaxed">
          Staramy się odpowiadać na wszystkie wiadomości w ciągu 24 godzin. W
          pilnych sprawach prosimy o kontakt telefoniczny.
        </p>
      </div>
    </motion.div>
  );
};

export default FormInfo;
