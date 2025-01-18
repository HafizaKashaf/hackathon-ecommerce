// import Link from 'next/link'
// import React from 'react'
// import { CiSearch } from 'react-icons/ci'


import Common from "@/components/HeroSection/Common";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allfoods } from "@/sanity/lib/queries";
import Image from "next/image";

type FoodImage = {
    asset: {
      _id: string;  // Unique identifier for the image asset
      url: string;  // URL of the image
    };
  };
  
  type Food = {
    _id: string;           // Unique identifier for the food item
    name: string;          // Name of the food item
    category?: string;     // Category of the food item (optional)
    price: number;         // Current price of the food item
    originalPrice?: number; // Original price before discount (optional)
    tags?: string[];       // Tags for categorization (optional)
    image: { asset: { _id: string; url: string } };   // Image associated with the food item (optional)
    description?: string;  // Description of the food item (optional)
    available: boolean;    // Availability status of the food item
  };
  

  export default async function Page() {
     const foods : Food[] = await sanityFetch({query: allfoods})

     return(
       
        <div>
             <Common title='Our Shop' subtitle='shop' />
             <div className='w-full flex justify-center  pb-10 bg-white '>
//       <div className=' w-[80%] flex justify-center  '>

           <div className="grid gap-2 grid-cols-1  md:grid-cols-3 justify-center items-center my-12">
            {
             foods.map((food)=>(
                    <div className=" p-4" key={food._id}>
                        <Image src={food.image.asset.url}  alt={food.name} width={200} height={200} className="w-full h-full rounded object-cover "/>
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
  <button
    className={`w-full py-2 px-4 text-white font-semibold rounded-lg transition duration-300 ease-in-out ${
      food.available
        ? 'bg-[#FF9F0D] hover:bg-[#FF8C00] focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]'
        : 'bg-gray-400 cursor-not-allowed'
    }`}
    disabled={!food.available}
  >
    Add to Cart
  </button>
</div>

                  
                       </div>
                       

                    </div>
                ))
            }
           </div>
           </div>
           </div>
        </div>
     )
  }
  







// const page = () => {
//   return (
//     <div className='bg-white'>
//          <section className=' w-full bg-cover  bg-center mt-3 '>
//        <div className='relative flex justify-center items-center'>
//        <img src="/images/bgpages.png" alt='bgpages'/>
//       <div className='container absolute mx-auto px-4'>
//         <div className='flex flex-col items-center'>
//           <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
//              Our Shop
//           </h1>
//           <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
//             <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
//               Home
//             </Link>
//             <span className='text-white'>/</span>
//             <Link href="/shop" className='text-[#FF9F0D]'>
//              Shop
//             </Link>
//           </div>
//         </div>
//       </div>
//       </div>
//     </section>
//      {/*  */}
//      <div>
//      <div className='w-full flex justify-center  pb-10 pt-10 '>
//      <div className=' w-[80%] flex justify-between max-sm:flex-col gap-10 '>
//         {/* left */}
//         <div className='flex flex-col'>
//             <div className='flex flex-row gap-10 max-sm:flex-col max-sm:gap-2 items-start'>
//                   <div className='flex items-center justify-center gap-[20px]'>
//                     <h1 className='max-sm:text-[16px]'>Sort By :</h1>
//                         <div className=' h-[46px] max-sm:h-[30px] border-[1.5px]   flex justify-between px-3 items-center gap-5 '>
//                         <input type='text' placeholder='Newest' className=' outline-none rounded  placeholder:text-[16px] max-sm:w-[100px] w-[130px] h-[24px]'/>
//                                <button>
//                                 < CiSearch className='w-[24px] h-[20px]'/>
//                                </button>
//                         </div>
//                          </div>
//                           <div className='flex items-center justify-center gap-[32px]'>
//                             <h1  className='max-sm:text-[16px]'>  Show : </h1>
//                                 <div className='  h-[46px] max-sm:h-[30px] border-[1.5px]  flex justify-between px-3 items-center gap-5 '>
//                                 <input type='text' placeholder='Default' className=' outline-none rounded placeholder:text-[16px] max-sm:w-[100px] w-[130px] h-[24px]'/>
//                                        <button>
//                                         < CiSearch className='w-[24px] h-[20px]'/>
//                                        </button>
//                                 </div>
//                                 </div>

//             </div>
//             {/* shop items */}
//             <div className='flex flex-col mt-5'>
//                {/* products */}
//            <div className='flex justify-evenly flex-row gap-[20px]   max-sm:grid max-sm:grid-col-1 md:grid-col-2 lg:grid-cols-3  py-2'>
//             {/* product1 */} 
//             <div className=' flex justify-center gap-3 items-start  flex-col  '>
//                 <img src="/images/food1.png" alt='food' className='hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'/>
//                 <div className='flex flex-col gap-2 
//                 '><h1 className=' font-bold text-[20px] leading-[32px]'>Chicken Chup</h1>
//                     <p className='text-[#FF9F0D]'>12$</p>
                    
                  
//                 </div>
           
//             </div>

//             {/* product2 */}
           
//             <div className='   flex justify-center gap-3 items-start flex-col '>
//            <img src="/images/food2.png"  alt='food2' className='hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'/>
//            <div className=' flex flex-col gap-2 
//                 '><h1 className=' font-bold text-[20px] leading-[32px]'>Country Burger</h1>
//                     <p className='text-[#FF9F0D]'>21$</p>
                   
                   
//                     </div>
//                 </div>
            
           
              
//            {/* product3 */}
            
//            <div className='flex justify-center gap-3 items-start flex-col '>
//             <img src="/images/food3.png"  alt='food1' className=' hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'/>
//             <div className=' flex flex-col gap-2
//                 '><h1 className=' font-bold text-[20px] leading-[32px]'>Fresh Lime</h1>
//                     <p className='text-[#FF9F0D]'>38$</p>
                    
                    
//                 </div>
           
//             </div>
//            </div>
//            {/* row2 */}
//            <div className='flex justify-evenly flex-row gap-[20px]   max-sm:grid max-sm:grid-col-1 md:grid-col-2 lg:grid-cols-3 py-2'>
//             {/* product1 */} 
//             <div className='flex justify-center gap-3 items-start flex-col '>
//             <img src="/images/food3.png"  alt='food1' className=' hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'/>
//             <div className=' flex flex-col gap-2
//                 '><h1 className=' font-bold text-[20px] leading-[32px]'>Fresh Lime</h1>
//                     <p className='text-[#FF9F0D]'>38$</p>
                    
                    
//                 </div>
           
//             </div>

//             {/* product2 */}
           
//             <div className=' flex justify-center gap-3 items-start  flex-col  '>
//                 <img src="/images/food1.png" alt='food' className='hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'/>
//                 <div className='flex flex-col gap-2 
//                 '><h1 className=' font-bold text-[20px] leading-[32px]'>Chicken Chup</h1>
//                     <p className='text-[#FF9F0D]'>12$</p>
                    
                  
//                 </div>
           
//             </div>
           
              
//             <div className='   flex justify-center gap-3 items-start flex-col '>
//            <img src="/images/food2.png"  alt='food2' className='hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'/>
//            <div className=' flex flex-col gap-2 
//                 '><h1 className=' font-bold text-[20px] leading-[32px]'>Country Burger</h1>
//                     <p className='text-[#FF9F0D]'>21$</p>
                   
                   
//                     </div>
//                 </div>
            
          


//            </div>
//            {/* row3 */}
//            <div className='flex justify-evenly flex-row gap-[20px]   max-sm:grid max-sm:grid-col-1 md:grid-col-2 lg:grid-cols-3 py-2'>
//                          {/* product1 */} 
//                          <div className='flex justify-center gap-3 items-start flex-col'>
//             <img src="/images/food3.png"  alt='food1' className=' hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'/>
//             <div className=' flex flex-col gap-2
//                 '><h1 className=' font-bold text-[20px] leading-[32px]'>Fresh Lime</h1>
//                     <p className='text-[#FF9F0D]'>38$</p>
                    
                    
//                 </div>
           
//             </div>

//             {/* product2 */}
           
//             <div className='   flex justify-center gap-3 items-start flex-col '>
//            <img src="/images/food2.png"  alt='food2' className='hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'/>
//            <div className=' flex flex-col gap-2 
//                 '><h1 className=' font-bold text-[20px] leading-[32px]'>Country Burger</h1>
//                     <p className='text-[#FF9F0D]'>21$</p>
                   
                   
//                     </div>
//                 </div>
            
            
           
              
//            {/* product3 */}
            
//            <div className=' flex justify-center gap-3 items-start  flex-col  '>
//                 <img src="/images/food1.png" alt='food' className='hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'/>
//                 <div className='flex flex-col gap-2 
//                 '><h1 className=' font-bold text-[20px] leading-[32px]'>Chicken Chup</h1>
//                     <p className='text-[#FF9F0D]'>12$</p>
                    
                  
//                 </div>
           
//             </div>
          


//            </div>
//            {/* row4 */}
//            <div className='flex justify-evenly flex-row gap-[20px]   max-sm:grid max-sm:grid-col-1 md:grid-col-2 lg:grid-cols-3 py-2'>
//            <div className=' flex justify-center gap-3 items-start  flex-col  '>
//                 <img src="/images/food1.png" alt='food' className='hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'/>
//                 <div className='flex flex-col gap-2 
//                 '><h1 className=' font-bold text-[20px] leading-[32px]'>Chicken Chup</h1>
//                     <p className='text-[#FF9F0D]'>12$</p>
                    
                  
//                 </div>
           
//             </div>

//             {/* product1 */} 
//             <div className='flex justify-center gap-3 items-start flex-col'>
//             <img src="/images/food3.png"  alt='food1' className=' hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'/>
//             <div className=' flex flex-col gap-2
//                 '><h1 className=' font-bold text-[20px] leading-[32px]'>Fresh Lime</h1>
//                     <p className='text-[#FF9F0D]'>38$</p>
                    
                    
//                 </div>
           
//             </div>
            
//            {/* product3 */}
//                 <div className='   flex justify-center gap-3 items-start flex-col '>
//            <img src="/images/food2.png"  alt='food2' className='hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'/>
//            <div className=' flex flex-col gap-2 
//                 '><h1 className=' font-bold text-[20px] leading-[32px]'>Country Burger</h1>
//                     <p className='text-[#FF9F0D]'>21$</p>
                   
                   
//                     </div>
//                 </div>
            
          


//            </div>
//             </div>

        

//         </div>
        
//         {/* right */}

//         <div className='flex flex-col py-10'>
//              <div className='  h-[50px] border-[1.5px]  pl-3 flex justify-between items-center gap-5 '>
//                     <input type='text' placeholder='search ...' className='outline-none  placeholder:text-[16px] w-[130px] h-[24px]'/>
//                     <button className='bg-[#FF9F0D] px-2 h-full'>
//                             < CiSearch className='w-[24px] h-[24px]'/>
//                            </button>

//                     </div>
//                     {/* categary */}
//                     <div className='flex flex-col'>
//                         <h1 className='font-bold'>Category</h1>

//                     </div>
                
//         </div>

//      </div>
//      </div>
//       </div>
//       </div>
//   )
// }

// export default page
