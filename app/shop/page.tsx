


"use client"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import { allfoods } from "@/sanity/lib/queries"
import { Food } from "@/types/products"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"

const FOODS = () => {
  const [ food , setFood] = useState<Food[]>([])


  useEffect(() => {
    async function fetchfood(){
      const fetchedFood : Food[] = await client.fetch(allfoods)
      setFood(fetchedFood)
    }
    fetchfood()
  },[])

  return(
    <div>
           
            <div className='w-full flex justify-center  pb-10 bg-white '>
      <div className=' w-[80%] flex justify-center  '>

            <div className="grid gap-2 grid-cols-1  md:grid-cols-3 justify-center items-center my-12">    
             {
             food.map((food)=>(
              <div className="p-4" key={food._id}>
          <Link href={`/shop/${food.slug.current}`}>
                      <div>
                        <Image src={urlFor(food.image).url()}  alt={food.name} width={200} height={200} className="w-full h-full rounded object-cover "/>
                        <div className="p-2">
                        <h2 className="text-xl font-bold mt-4 mb-2">{food.name}</h2>
                        <p className="text-sm text-gray-600">{food.category}</p>
                      <p className="text-sm text-gray-600">{food.description}</p>
        
                      <div className="flex items-center space-x-2 mt-2">
                     <span className="text-xl font-bold text-[#FF9F0D]">${food.price}</span>
                       {food.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">${food.originalPrice}</span>
                  )}
                  </div>
                  <div className="mt-4">
  <span
    className={`inline-flex items-center px-4 py-2 text-sm font-semibold  rounded-full transition-all duration-300 ease-in-out ${
      food.available
        ? 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-[#FF9F0D] text-white shadow-lg'
        : 'bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white shadow-lg'
    }`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`w-5 h-5 mr-2 ${
        food.available ? 'text-[#FF9F0D]' : 'text-red-800'
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={food.available ? 'M5 13l4 4L19 7' : 'M6 18L18 6M6 6l12 12'}
      />
    </svg>
    {food.available ? 'Available' : 'Not Available'}
  </span>
</div>

        {food.tags && food.tags.length > 0 && (
          <div className="mt-2">
            {food.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-2 py-1 text-xs font-medium text-white bg-blue-500 rounded-full mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div className="mt-4">
 
</div>

                  
                       </div>
                       </div>
                       </Link>
                      
                   </div>
                   
                ))
                
            }
             
           </div>
           </div>
           </div>
        </div>
  )
}
export default FOODS


