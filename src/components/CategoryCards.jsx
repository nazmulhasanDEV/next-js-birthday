"use client"
import CategoryCard from "./CategoryCard";


const CategoryCards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-5 md:mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Choose a Celebration Type</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <CategoryCard
          title="Husband's Birthday Party"
          bgColor="bg-blue-400"
          to="/category/husbands-birthday"
        />
        <CategoryCard
          title="Wife's Birthday Party"
          bgColor="bg-pink-500"
          to="/category/wifes-birthday"
        />
        <CategoryCard
          title="Kid's Birthday Party"
          bgColor="bg-green-400"
          to="/category/kids-birthday"
        />
      </div>
    </div>
  );
};

export default CategoryCards;
