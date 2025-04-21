import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ProductCatalogProps {
  products?: Product[];
}

const ProductCatalog = ({ products = [] }: ProductCatalogProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // Default products if none are provided
  const defaultProducts: Product[] = [
    {
      id: "1",
      name: "Fresh Milk",
      price: 2.99,
      description: "Farm-fresh whole milk, pasteurized and ready to drink.",
      category: "milk",
      image:
        "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80",
    },
    {
      id: "2",
      name: "Greek Yogurt",
      price: 3.49,
      description: "Creamy Greek yogurt made with traditional techniques.",
      category: "yogurt",
      image:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80",
    },
    {
      id: "3",
      name: "Cheddar Cheese",
      price: 4.99,
      description: "Aged cheddar cheese with rich, sharp flavor.",
      category: "cheese",
      image:
        "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&q=80",
    },
    {
      id: "4",
      name: "Butter",
      price: 2.49,
      description: "Creamy butter made from pure cow milk.",
      category: "butter",
      image:
        "https://images.unsplash.com/photo-1589985270958-bf087b2d451d?w=400&q=80",
    },
    {
      id: "5",
      name: "Paneer",
      price: 5.99,
      description: "Fresh homemade paneer, perfect for Indian dishes.",
      category: "cheese",
      image:
        "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80",
    },
    {
      id: "6",
      name: "Flavored Yogurt",
      price: 1.99,
      description: "Delicious fruit-flavored yogurt with real fruit pieces.",
      category: "yogurt",
      image:
        "https://images.unsplash.com/photo-1570696516188-ade861b84a49?w=400&q=80",
    },
  ];

  // Use provided products or default ones
  const displayProducts = products.length > 0 ? products : defaultProducts;

  // Get unique categories for filter tabs
  const categories = [
    "all",
    ...new Set(displayProducts.map((product) => product.category)),
  ];

  // Filter products based on search term and active category
  const filteredProducts = displayProducts.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Products</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our range of fresh, high-quality dairy products made with
          care from the finest ingredients.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="relative w-full md:w-64">
          <Input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>

        <Tabs
          defaultValue="all"
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="w-full md:w-auto"
        >
          <TabsList className="w-full md:w-auto overflow-x-auto flex whitespace-nowrap">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="capitalize"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">
            No products found matching your criteria.
          </p>
          <Button
            onClick={() => {
              setSearchTerm("");
              setActiveCategory("all");
            }}
          >
            Reset Filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductCatalog;
