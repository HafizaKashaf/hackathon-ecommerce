


import Common from "@/components/HeroSection/Common";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Food } from "@/types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";



interface FoodPageProps{
  params: Promise<{slug:string}>
}
 async function getProduct(slug:string): Promise<Food> {
  return client.fetch(
    groq`*[_type == "food" && slug.current == $slug][0]{
     
    _id,
    name,
    category,
    price,
    originalPrice,
    tags,
    image {
      asset -> {
        _id,
        url
      }
    },
    description,
    available,
   
     
    
    
    }`,{slug}
  )
 }


 export default async function FoodPage({params}:FoodPageProps){
     const {slug} = await params
     const food =await getProduct(slug);
    
  
     
     


     return (
      <div>
       <Common title='Shop Details' subtitle='Shop Details' />
      <div className="bg-white">
     
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {/* Product Image */}
            <Image
              alt={food.name}
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={urlFor(food.image).url()} 
              width={100}
              height={100}
            />
  
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              {/* Product Brand */}
              <div className="mt-4">
    <span
      className={`inline-flex items-center px-4 py-2 text-sm font-semibold  rounded-lg transition-all duration-300 ease-in-out ${food.available
          ? 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-[#FF9F0D] text-white shadow-lg'
          : 'bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white shadow-lg'
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`w-5 h-5 mr-2 ${food
          .available ? 'text-[#FF9F0D]' : 'text-red-800'
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
      {food
      .available ? 'In stock' : 'Not Available'}
    </span>
  </div>
             
              
              {/* Product Title - Wrapped in Link to navigate */}
              <Link href={`/shop/${food
                ._id}`} passHref>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {food
                  .name}
                </h1>
              </Link>
  
             
              {/* Product Description */}
              <p className="leading-relaxed mb-16">{food
              .description}</p>
  
             
  
              {/* Product Price and Add to Cart Button */}
              <div className="flex ">
                <div className="flex flex-col">
              <div className="flex items-center space-x-2 mt-2">
                       <span className="text-xl font-bold text-[#FF9F0D]">${food
                       .price}</span>
                         {food
                         .originalPrice && (
                      <span className="text-sm text-gray-500 line-through">${food
                        .originalPrice}</span>
                    )}
                    </div>
                     {/* Product Ratings */}
              
  
                   
  </div>
  
      {/* Add to Cart Button */}
      <AddToCartButton food={food} />

                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
   
  
      </div>
      </div>
    );
  }
  
 








