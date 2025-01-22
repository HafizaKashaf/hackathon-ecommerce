// import Common from "@/components/HeroSection/Common";
// import { client } from "@/sanity/lib/client";
// import Link from "next/link";

import Common from "@/components/HeroSection/Common";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Food } from "@/types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";


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
     const food =await getProduct(slug)


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
  
                <button className="flex ml-auto h-[100%] text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">
                  Add to Cart
                </button>
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
  
 








// data ...........
// type ItemParams = {
//   params: { id: string }; // Ensure the params has 'id' from the URL
// };

// // Function to fetch item details by id
// async function getItems(id: string) {
//   const fetchResult = await client.fetch(
//     `*[_type == "food" && _id == $id]{
//       "_id": _id,
//       name,
//       description,
//       price,
//       category,
//       originalPrice,
//       tags,
//       "imageUrl": image.asset->url,
//       available,
//       rating,
//       reviews
//     }`,
//     { id }
//   );

//   if (!fetchResult.length) {
//     throw new Error(`No item found with the id "${id}"`);
//   }


//   return fetchResult[0]; // Return the first item found
// }

// export default async function Page({ params }: ItemParams) {
//   const  = await getItems(params.id); // Fetch data using the id from URL
  
 

//   return (
//     <div>
//      <Common title='Shop Details' subtitle='Shop Details' />
//     <div className="bg-white">
   
//     <section className="text-gray-600 body-font overflow-hidden">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="lg:w-4/5 mx-auto flex flex-wrap">
//           {/* Product Image */}
//           <img
//             alt={.name}
//             className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
//             src={.imageUrl}
//           />

//           <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//             {/* Product Brand */}
//             <div className="mt-4">
//   <span
//     className={`inline-flex items-center px-4 py-2 text-sm font-semibold  rounded-lg transition-all duration-300 ease-in-out ${
//       .available
//         ? 'bg-gradient-to-r from-yellow-400 via-yellow-500 to-[#FF9F0D] text-white shadow-lg'
//         : 'bg-gradient-to-r from-red-400 via-red-500 to-red-600 text-white shadow-lg'
//     }`}
//   >
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className={`w-5 h-5 mr-2 ${
//         .available ? 'text-[#FF9F0D]' : 'text-red-800'
//       }`}
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d={.available ? 'M5 13l4 4L19 7' : 'M6 18L18 6M6 6l12 12'}
//       />
//     </svg>
//     {.available ? 'In stock' : 'Not Available'}
//   </span>
// </div>
           
            
//             {/* Product Title - Wrapped in Link to navigate */}
//             <Link href={`/shop/${._id}`} passHref>
//               <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
//                 {.name}
//               </h1>
//             </Link>

           
//             {/* Product Description */}
//             <p className="leading-relaxed mb-16">{.description}</p>

           

//             {/* Product Price and Add to Cart Button */}
//             <div className="flex ">
//               <div className="flex flex-col">
//             <div className="flex items-center space-x-2 mt-2">
//                      <span className="text-xl font-bold text-[#FF9F0D]">${.price}</span>
//                        {.originalPrice && (
//                     <span className="text-sm text-gray-500 line-through">${.originalPrice}</span>
//                   )}
//                   </div>
//                    {/* Product Ratings */}
//             <div className="flex mb-4">
//               <span className="flex items-center">
//                 {/* Render the rating stars dynamically */}
//                 {Array(5)
//                   .fill(0)
//                   .map((_, index) => (
//                     <svg
//                       key={index}
//                       fill={index < .rating ? "currentColor" : "none"}
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       className="w-4 h-4 text-yellow-500"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                     </svg>
//                   ))}
//                 <span className="text-gray-600 ml-3">  {.reviews || 0} Reviews Reviews</span>
//               </span>
//             </div>

                 
// </div>

//               <button className="flex ml-auto h-[100%] text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">
//                 Add to Cart
//               </button>
//               <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
//                 <svg
//                   fill="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   className="w-5 h-5"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
 

//     </div>
//     </div>
//   );
// }
