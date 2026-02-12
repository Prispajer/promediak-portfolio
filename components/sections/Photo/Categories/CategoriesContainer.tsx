import SectionTitle from "@/components/common/SectionTitle";
import CategoriesList from "@/components/sections/Photo/Categories/CategoriesList";

const CategoriesContainer = () => {
  return (
    <section className="bg-card py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Nasze Specjalizacje"
          subtitle="Oferujemy szeroki zakres usług fotograficznych"
        />
        <CategoriesList />
      </div>
    </section>
  );
};

export default CategoriesContainer;
