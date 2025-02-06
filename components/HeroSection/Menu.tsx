



"use client";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allfoods } from "@/sanity/lib/queries";
import type { Food } from "@/types/products";
import Image from "next/image";
import { useState, useEffect } from "react";
import { urlFor } from "@/sanity/lib/image";
import menu from '@/public/images/menu.png';
import Link from "next/link";

export default function Menu() {
  const [chefs, setChefs] = useState<Food[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    const fetchChefs = async () => {
      try {
        const data: Food[] = await sanityFetch({ query: allfoods });
        setChefs(data);
      } catch (err) {
        setError("Failed to load chefs. Please try again later.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchChefs();
  }, []);

  // Filter chefs based on selected category
  const filteredChefs = category
    ? chefs.filter((food) => food.category === category)
    : chefs;

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center py-10">
        <p className="text-white">Loading chefs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex justify-center items-center py-10">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="w-full flex justify-center py-10 ">
        <div className="w-[80%] flex flex-col justify-center items-center">
          {/* Header Section */}
          <h1 className="text-[#FF9F0D] text-2xl uppercase tracking-wider">Food Category</h1>
          <h2 className="font-semibold text-[20px] md:text-[36px] md:leading-[48px] text-[#FF9F0D] mt-2">
            Ch<span className="text-white">oose Food Item</span>
          </h2>

          {/* Category Navigation */}
          <ul className='lg:flex hidden text-white items-center space-x-6 xl:space-x-10 mt-3'>
          <li className='navlink' onClick={() => setCategory("")}>
              <p>All</p>
            </li>
            <li className='navlink' onClick={() => setCategory("Breakfast")}>
              <p>Breakfast</p>
            </li>
            <li className='navlink' onClick={() => setCategory("Lunch")}>
              <p>Lunch</p>
            </li>
            <li className='navlink' onClick={() => setCategory("Dinner")}>
              <p>Dinner</p>
            </li>
            <li className='navlink' onClick={() => setCategory("Dessert")}>
              <p>Dessert</p>
            </li>
            <li className='navlink' onClick={() => setCategory("Drink")}>
              <p>Drink</p>
            </li>
            <li className='navlink' onClick={() => setCategory("Snacks")}>
              <p>Snacks</p>
            </li>
            <li className='navlink' onClick={() => setCategory("Soups")}>
              <p>Soups</p>
            </li>
          </ul>

          {/* Chef Grid */}
          <div className="grid gap-10 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 my-12">
            {/* Static Image */}
            <Image src={menu} alt='food1' width={340} className='hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105' />
            <div className="grid grid-cols-1">
              {filteredChefs.map((food) => (
                <div
                  className="rounded flex items-start justify-center flex-col hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 border-b p-1"
                  key={food._id}
                > 
                <Link href={`/shop/${food.slug.current}`}>
                  <div className="flex flex-row gap-2 items-center justify-center">
                    <Image
                      src={urlFor(food.image).url()}
                      alt={`${food.name}'s image`}
                      width={80}
                      height={80}
                      className="w-[80px] h-[80px] rounded"
                    />
                    <div className='flex flex-col gap-1 items-start justify-center'>
                      <h1 className='font-bold text-[16px] leading-[28px] text-white'>{food.name}</h1>
                      <p className='font-light text-[12px] leading-[22px] text-white'>{food.description} </p>
                      <div className="flex flex-row justify-between w-[80%] text-white">
                        <p className='font-bold text-[18px] leading-[26px] text-[#FF9F0D]'>${food.price}</p>
                        <p className="line-through">${food.originalPrice}</p>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1">
              {filteredChefs.map((food) => (
                <div
                  className="rounded flex items-start justify-center flex-col hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 border-b p-1"
                  key={food._id}
                > <Link href={`/shop/${food.slug.current}`}>
                  <div className="flex flex-row gap-2 items-center justify-center">
                    <Image
                      src={urlFor(food.image).url()}
                      alt={`${food.name}'s image`}
                      width={80}
                      height={80}
                      className="w-[80px] h-[80px] rounded"
                    />
                    <div className='flex flex-col gap-1 items-start justify-center'>
                      <h1 className='font-bold text-[16px] leading-[28px] text-white'>{food.name}</h1>
                      <p className='font-light text-[12px] leading-[22px] text-white'>{food.description} </p>
                      <div className="flex flex-row justify-between w-[80%] text-white">
                        <p className='font-bold text-[18px] leading-[26px] text-[#FF9F0D]'>${food.price}</p>
                        <p className="line-through">${food.originalPrice}</p>
                      </div>
                    </div>
                  </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


