"use client";

import React from "react";
import FormInfo from "@/components/sections/Contact/Form/FormInfo";
import FormFields from "@/components/sections/Contact/Form/FormFields";

const FormContainer = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          <FormInfo />
          <FormFields />
        </div>
      </div>
    </section>
  );
};

export default FormContainer;
