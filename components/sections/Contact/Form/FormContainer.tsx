"use client";

import React from "react";
import { toast } from "sonner";
import FormInfo from "@/components/sections/Contact/Form/FormInfo";
import FormFields from "@/components/sections/Contact/Form/FormFields";

const FormContainer = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast("Wiadomość wysłana", {
      description: "Odpowiemy najszybciej jak to możliwe.",
    });
    setFormData({ name: "", email: "", phone: "", eventDate: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          <FormInfo />
          <FormFields
            formData={formData}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        </div>
      </div>
    </section>
  );
};

export default FormContainer;
