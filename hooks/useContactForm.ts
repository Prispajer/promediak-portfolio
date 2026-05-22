import React from "react";
import { toast } from "sonner";

const emailRegex = /^\S+@\S+\.\S+$/;
const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

export const useContactForm = () => {
  const [formData, setFormData] = React.useState<Record<string, string>>({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    message: "",
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [loading, setLoading] = React.useState<boolean>(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Imię i nazwisko jest wymagane";
    } else if (formData.name.length < 8 || formData.name.length > 50) {
      newErrors.name = "Imię i nazwisko musi mieć od 8 do 50 znaków";
    }

    if (!formData.email) {
      newErrors.email = "Email jest wymagany";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Niepoprawny format email";
    }

    if (!formData.phone) {
      newErrors.phone = "Telefon jest wymagany";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Niepoprawny format telefonu";
    }

    if (!formData.eventDate) {
      newErrors.eventDate = "Data wydarzenia jest wymagana";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Wiadomość nie może być pusta";
    } else if (formData.message.length < 20 || formData.message.length > 400) {
      newErrors.message = "Wiadomość musi mieć od 20 do 400 znaków";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          eventDate: formData.eventDate,
          message: formData.message,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();

      if (response.ok) {
        toast.success("Wysłano!", { description: data.message });
        setFormData({
          name: "",
          email: "",
          phone: "",
          eventDate: "",
          message: "",
        });
      } else {
        toast.error("Błąd", {
          description: data.message || "Coś poszło nie tak",
        });
      }
    } catch (err) {
      toast.error("Błąd sieci", { description: "Spróbuj ponownie później." });
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    console.log(formData);
    console.log(errors);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return { loading, errors, formData, setFormData, handleSubmit, handleChange };
};
