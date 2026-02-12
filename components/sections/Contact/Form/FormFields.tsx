import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import React from "react";

type FormFieldsProps = {
  formData: Record<string, string>;
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

const FormFields = ({
  formData,
  handleSubmit,
  handleChange,
}: FormFieldsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
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
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-card border-border/50 focus:border-accent"
            autoComplete="name"
          />
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
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-card border-border/50 focus:border-accent"
              autoComplete="email"
            />
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
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="eventDate"
            className="text-muted-foreground font-body mb-2 block text-sm"
          >
            Planowana data wydarzenia
          </label>
          <Input
            type="date"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className="bg-card border-border/50 focus:border-accent"
          />
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
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="bg-card border-border/50 focus:border-accent resize-none"
            placeholder="Opowiedz nam o swoim projekcie... Jaki rodzaj sesji Cię interesuje? Kiedy planowane jest wydarzenie?"
          />
        </div>
        <Button
          type="submit"
          size="lg"
          className="w-full cursor-pointer shadow-[0_0_8px_var(--color-shadow-glow)] md:w-auto"
        >
          Wyślij Wiadomość
          <Send className="ml-2" size={18} />
        </Button>
      </form>
    </motion.div>
  );
};

export default FormFields;
