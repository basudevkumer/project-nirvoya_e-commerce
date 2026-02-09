import React from "react";
import {
  Heart,
  Shirt,
  Baby,
  ToyBrick,
  ShoppingBasket,
  Home,
  Watch,
  BookOpen,
  Hammer,
  PawPrint,
  Gift,
  Gem,
} from "lucide-react";

const Categeory = () => {
  const categories = [
    { name: "Health & Household", icon: Heart },
    { name: "Men Fashion", icon: Shirt },
    { name: "Kids Fashion", icon: Baby },
    { name: "Toys", icon: ToyBrick },
    { name: "Groceries", icon: ShoppingBasket },
    { name: "Home & Lifestyle", icon: Home },
    { name: "Watches", icon: Watch },
    { name: "Stationery & Books", icon: BookOpen },
    { name: "Tools & Hardware", icon: Hammer },
    { name: "Pet Supplies", icon: PawPrint },
    { name: "Seasonal", icon: Gift },
    { name: "Jewelleries", icon: Gem },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="mb-4 text-lg font-semibold text-gray-800">
        Category
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {categories.map((cat, index) => {
          const Icon = cat.icon;
          return (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 hover:shadow-sm cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">
                  {cat.name}
                </span>
              </div>
              <span className="text-gray-400">{">"}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categeory;
