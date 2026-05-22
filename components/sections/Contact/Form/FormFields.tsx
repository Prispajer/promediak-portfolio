"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import React from "react";
import { useContactForm } from "@/hooks/useContactForm";

const FormFields = () => {
  const { errors, loading, formData, handleChange, handleSubmit } =
    useContactForm();

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div>
          <label
            htmlFor="name"
            className="text-muted-foreground font-body mb-2 block text-sm"
          >
            Imię i Nazwisko *
          </label>
          <Input
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="bg-card border-border/50 focus:border-accent"
            autoComplete="name"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <span
              id="name-error"
              className="font-body mt-1 block text-xs text-red-500"
              role="alert"
            >
              {errors.name}
            </span>
          )}
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="text-muted-foreground font-body mb-2 block text-sm"
            >
              Email *
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-card border-border/50 focus:border-accent"
              autoComplete="email"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <span
                id="email-error"
                className="font-body mt-1 block text-xs text-red-500"
                role="alert"
              >
                {errors.email}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="phone"
              className="text-muted-foreground font-body mb-2 block text-sm"
            >
              Telefon
            </label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="bg-card border-border/50 focus:border-accent"
              autoComplete="tel"
              placeholder="+48 123 456 789"
              aria-invalid={errors.phone ? "true" : "false"}
              aria-describedby="phone-hint phone-error"
            />
            <span
              id="phone-hint"
              className="text-muted-foreground/70 mt-1 block text-[11px]"
            >
              Musi zaczynać się od numeru kierunkowego np. +48
            </span>
            {errors.phone && (
              <span
                id="phone-error"
                className="font-body mt-1 block text-xs text-red-500"
                role="alert"
              >
                {errors.phone}
              </span>
            )}
          </div>
        </div>
        <div>
          <label
            htmlFor="eventDate"
            className="text-muted-foreground font-body mb-2 block text-sm"
          >
            Planowana data wydarzenia *
          </label>
          <Input
            type="date"
            id="eventDate"
            name="eventDate"
            required
            value={formData.eventDate}
            onChange={handleChange}
            className="bg-card border-border/50 focus:border-accent"
            aria-invalid={errors.eventDate ? "true" : "false"}
            aria-describedby={errors.eventDate ? "date-error" : undefined}
          />
          {errors.eventDate && (
            <span
              id="date-error"
              className="font-body mt-1 block text-xs text-red-500"
              role="alert"
            >
              {errors.eventDate}
            </span>
          )}
        </div>
        <div>
          <label
            htmlFor="message"
            className="text-muted-foreground font-body mb-2 block text-sm"
          >
            Wiadomość *
          </label>
          <Textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="bg-card border-border/50 focus:border-accent resize-none"
            placeholder="Opowiedz nam o swoim projekcie... Jaki rodzaj sesji Cię interesuje?"
            aria-invalid={errors.message ? "true" : "false"}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          {errors.message && (
            <span
              id="message-error"
              className="font-body mt-1 block text-xs text-red-500"
              role="alert"
            >
              {errors.message}
            </span>
          )}
        </div>
        <Button
          type="submit"
          size="lg"
          variant="secondary"
          disabled={loading}
          className="flex w-full cursor-pointer items-center justify-center gap-2 shadow-[0_0_8px_var(--color-shadow-glow)] md:w-auto"
        >
          {loading ? "Wysyłanie..." : "Wyślij Wiadomość"}
          {!loading && <Send size={18} aria-hidden="true" />}
        </Button>
      </form>
    </motion.div>
  );
};

export default FormFields;
