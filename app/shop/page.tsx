"use client";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { allfoods } from "@/sanity/lib/queries";
import { Food } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { addToCart } from "../actions/actions";
import Swal from "sweetalert2";
import { CiSearch } from "react-icons/ci";

const FOODS = () => {
  const [food, setFood] = useState<Food[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // List of categories and price ranges
  const categories = ["All", "Sandwich", "Burger", "Pizza", "Chicken", "Drink","Main Course","Dessert","Appetizer"];
  const priceRanges = ["All", "$0 - $10", "$10 - $20", "$20 - $30", "$30+"];

  useEffect(() => {
    async function fetchFood() {
      const fetchedFood: Food[] = await client.fetch(allfoods);
      setFood(fetchedFood);
    }
    fetchFood();
  }, []);

  // Filter food items by category
  const filteredByCategory =
    selectedCategory === "All"
      ? food
      : food.filter((item) => item.category === selectedCategory);

  // Filter food items by price range
  const filteredByPrice =
    selectedPriceRange === "All"
      ? filteredByCategory
      : filteredByCategory.filter((item) => {
          const price = item.price;
          switch (selectedPriceRange) {
            case "$0 - $10":
              return price >= 0 && price <= 10;
            case "$10 - $20":
              return price > 10 && price <= 20;
            case "$20 - $30":
              return price > 20 && price <= 30;
            case "$30+":
              return price > 30;
            default:
              return true;
          }
        });

  // Filter food items by search query (name or tags)
  const filteredFood = searchQuery
    ? filteredByPrice.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (item.tags &&
            item.tags.some((tag) =>
              tag.toLowerCase().includes(searchQuery.toLowerCase())
            ))
      )
    : filteredByPrice;

  const handleAddToCart = (e: React.MouseEvent, product: Food) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    addToCart(product);
  };

  return (
    <div>
      <div className="w-full flex justify-center pb-10 bg-white">
        <div className="w-[80%] flex max-sm:flex-col md:justify-between">
          {/* Product Grid */}
          <div className="grid gap-2 grid-cols-1 md:grid-cols-3 justify-center items-center my-12  w-full md:w-[80%]">
            {filteredFood.map((food) => (
              <div className="p-4" key={food._id}>
                <Link href={`/shop/${food.slug.current}`}>
                  <div>
                    <Image
                      src={urlFor(food.image).url()}
                      alt={food.name}
                      width={200}
                      height={200}
                      className="w-full h-full rounded object-cover"
                    />
                    <div className="p-2">
                      <h2 className="text-xl font-bold mt-4 mb-2">{food.name}</h2>
                      <p className="text-sm text-gray-600">{food.category}</p>
                      <p className="text-sm text-gray-600">{food.description}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="text-xl font-bold text-[#FF9F0D]">
                          ${food.price}
                        </span>
                        {food.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ${food.originalPrice}
                          </span>
                        )}
                      </div>
                      <div className="mt-2">
                        <button
                          className="bg-gradient-to-r from-yellow-500 to-yellow-800 text-white font-semibold py-2 px-4 rounded shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out"
                          onClick={(e) => handleAddToCart(e, food)}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
             {filteredFood.map((food) => (
              <div className="p-4" key={food._id}>
                <Link href={`/shop/${food.slug.current}`}>
                  <div>
                    <Image
                      src={urlFor(food.image).url()}
                      alt={food.name}
                      width={200}
                      height={200}
                      className="w-full h-full rounded object-cover"
                    />
                    <div className="p-2">
                      <h2 className="text-xl font-bold mt-4 mb-2">{food.name}</h2>
                      <p className="text-sm text-gray-600">{food.category}</p>
                      <p className="text-sm text-gray-600">{food.description}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="text-xl font-bold text-[#FF9F0D]">
                          ${food.price}
                        </span>
                        {food.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">
                            ${food.originalPrice}
                          </span>
                        )}
                      </div>
                      <div className="mt-2">
                        <button
                          className="bg-gradient-to-r from-yellow-500 to-yellow-800 text-white font-semibold py-2 px-4 rounded shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-200 ease-in-out"
                          onClick={(e) => handleAddToCart(e, food)}
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Sidebar: Category, Price Range, and Search Bar */}
          <div className="w-[200px]  md:bg-gray-100 md:py-12 ">
            {/* Search bar */}
            <div className="h-[54px] border-[1.5px] border-[#FF9F0D] my-12 rounded flex justify-between pl-3 items-center gap-5">
              <input
                type="text"
                placeholder="Search by name or tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-100 outline-none rounded placeholder:text-[16px] w-[130px] h-[24px]"
              />
              <button className="w-[54px] h-[54px] bg-yellow-500 flex items-center justify-center">
                <CiSearch className="w-[24px] h-[24px] text-white" />
              </button>
            </div>

            {/* Category Filter */}
            <div className="px-2">
              <h2 className="font-bold mb-4">Categories</h2>
              <div className="flex flex-col gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-left ${
                      selectedCategory === category
                        ? "bg-orange-500 text-white"
                        : "hover:bg-gray-200"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            {/* banner */}
            <Image
            src="/images/banner.png" alt="image" width={200} height={300}/>

             {/* price range */}
           <div className="px-2 mt-6">
  <h2 className="font-bold mb-4">Price Range</h2>
  <div className="flex items-center gap-4">
    <span>{priceRanges[0]}</span>
    <input
      type="range"
      min={0}
      max={priceRanges.length - 1}
      step={1}
      value={priceRanges.indexOf(selectedPriceRange)}
      className="slider w-full"
      onChange={(e) => setSelectedPriceRange(priceRanges[Number(e.target.value)])}
    />
    <span>{priceRanges[priceRanges.length - 1]}</span>
  </div>
  <p className="mt-2 text-sm">
    Selected Range: <strong>{selectedPriceRange}</strong>
  </p>
</div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default FOODS;
