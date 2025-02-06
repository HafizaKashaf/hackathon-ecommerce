// import React from 'react';
// import Image from 'next/image';
// import food1 from '@/public/images/food1.png';
// import food2 from '@/public/images/food2.png';
// import food3 from '@/public/images/food3.png';
// import food4 from '@/public/images/food4.png';


"use client"
import { sanityFetch } from "@/sanity/lib/fetch";
import { fourfoods } from "@/sanity/lib/queries";
import type { Food } from "@/types/products";
import Image from "next/image";
import { useState, useEffect } from "react";
import { urlFor } from "@/sanity/lib/image";


export default function Food() {
  const [chefs, setChefs] = useState<Food[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChefs = async () => {
      try {
        const data: Food[] = await sanityFetch({ query: fourfoods });
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
        <div className="w-[90%] flex flex-col justify-center items-center">
          {/* Header Section */}
          <h1 className="text-[#FF9F0D] text-2xl uppercase tracking-wider"> Food Category</h1>
          <h2 className="font-semibold text-[20px] md:text-[36px] md:leading-[48px] text-[#FF9F0D] mt-2">
            Ch<span className="text-white">oose Food Item</span>
          </h2>

          {/* Chef Grid */}
          <div className="grid md:gap-6 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 my-12">
            {chefs.map((food) => (
              <div
                className="lg:p-6 p-2 md:p-4 relative group rounded-lg shadow-lg transition-shadow hover:shadow-xl"
                key={food._id}
              >
                <div className="relative w-full h-64 overflow-hidden rounded-lg">
                  <Image
                  src={urlFor(food.image).url()}
                    alt={`${food.name}'s image`}
                    width={300}
                    height={300}
                    className="w-full h-full max-sm:w-[200px] max-sm:h-[200px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h2 className="text-xl font-bold text-yellow-400">{food.name}</h2>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// const Food = () => {
//   return (
//     <div className='w-full   flex justify-center items-center '>
//         <div className='w-[80%] flex flex-col gap-[40px] justify-center items-center text-white'>
//          {/*  */}
//          <div className=''>
//          <div className='flex flex-col justify-center items-center' >
//             {/* today */}
//             <h1 className='text-[#FF9F0D]' > Food Category</h1>
//             {/* flashsales line */}
//             <div className='flex justify-between items-center mt-5'>
//             <h2 className='font-semibold text-[20px] md:text-[36px] md:leading-[48px] '><span className='text-[#FF9F0D]'>Ch</span>oose Food Iteam</h2>
            
           
//             </div>
//             </div>
//            </div>
//            {/* products */}
//            <div className='flex justify-evenly gap-[20px]   max-sm:grid max-sm:grid-col-1 md:grid-col-1 lg:grid-cols-4 '>
//             {/* product1 */} 
//             <div className='w-[305px] h-[328px]  rounded border border-[#0000004D] flex justify-center items-center hover:text-white flex-col hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'>
//             <Image src={food1} alt='food1' />
           
//             </div>

//             {/* product2 */}
           
//            <div className='w-[305px] h-[328px] rounded border border-[#0000004D]  flex justify-center items-center hover:text-white flex-colhover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'>
//            <Image src={food2} alt='food2' />
            
//             </div>
              
//            {/* product3 */}
            
//                 <div className='w-[305px] h-[328px] rounded  border border-[#0000004D] flex justify-center items-centerhover:text-white flex-col hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'>
//                 <Image src={food3} alt='food3' />
           
//             </div>
            
          
//             {/* product4 */}
            
//             <div className='w-[305px] h-[328px] rounded  border border-[#0000004D] flex justify-center items-center hover:bg-[#DB4444] hover:text-white  flex-col hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'>
//             <Image src={food4} alt='food4' />
            
//             </div>



//            </div>
//       </div>
//       </div>
//   )
// }

// export default Food
