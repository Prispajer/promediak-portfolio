"use client";

import React from "react";
import HeroContainer from "@/components/sections/Contact/Hero/HeroContainer";
import FormContainer from "@/components/sections/Contact/Form/FormContainer";
import InfoContainer from "@/components/sections/Contact/Info/InfoContainer";
import { Toaster } from "@/components/ui/sonner";

const Contact = () => {
  return (
    <>
      <HeroContainer />
      <FormContainer />
      <InfoContainer />
      <Toaster />
    </>
  );
};

export default Contact;
