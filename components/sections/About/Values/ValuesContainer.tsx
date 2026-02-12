import ValuesList from "@/components/sections/About/Values/ValuesList";
import ValuesHeading from "@/components/sections/About/Values/ValuesHeading";

const ValuesContainer = () => {
  return (
    <section className="bg-card py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <ValuesHeading />
          <ValuesList />
        </div>
      </div>
    </section>
  );
};

export default ValuesContainer;
