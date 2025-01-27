// import React from 'react';
// import Image from 'next/image';
// import card1 from '@/public/images/card1.png';
// import card2 from '@/public/images/card2.png';
// import card3 from '@/public/images/card3.png';
// import card4 from '@/public/images/card4.png';

import { sanityFetch } from "@/sanity/lib/fetch";
import {  fourchefs } from "@/sanity/lib/queries";
import Image from "next/image";



type Chef = {
  _id: string;           // Unique identifier for the chef document
  name: string;          // Chef's name
  position: string;      // Position or role of the chef
 image: { asset: { _id: string; url: string } };          // Image associated with the chef, with optional asset ID and URL
  
};

 export default async function Page() {
     const chefs : Chef[] = await sanityFetch({query: fourchefs})

     return (
      <div>
        <div className="w-full flex justify-center py-10">
          <div className="w-[90%] flex flex-col justify-center items-center">
             {/* today */}
              <h1 className='text-[#FF9F0D]'>Chef</h1>
             {/* flashsales line */}
             <div className='flex justify-between  items-center mt-5'>
            <h2 className='font-semibold text-[20px] md:text-[36px] md:leading-[48px] text-white '><span className='text-[#FF9F0D]'>Me</span>et Our Chef</h2>
            </div> 
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-between items-center my-12"> 
              {chefs.map((chef) => (
                <div className="p-6 relative group" key={chef._id}> 
                  <div className="relative w-full h-64 overflow-hidden rounded-lg">
                    <Image
                      src={chef.image.asset.url}
                      alt={chef.name}
                      width={300}
                      height={300} 
                      className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h2 className="text-xl font-bold text-yellow-400">{chef.name}</h2>
                      <p className="text-sm text-white">{chef.position}</p>
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

// const Chef = () => {
//   return (
//     <div className='w-full   flex justify-center items-center mt-10 lg-mt-20 '>
//         <div className='w-[80%] flex flex-col gap-[40px] justify-center items-center text-white'>
//          {/*  */}
//          <div className=''>
//          <div className='flex flex-col justify-center items-center' >
//             {/* today */}
//              <h1 className='text-[#FF9F0D]'>Chef</h1>
//             {/* flashsales line */}
//             <div className='flex justify-between  items-center mt-5'>
//             <h2 className='font-semibold text-[20px] md:text-[36px] md:leading-[48px] '><span className='text-[#FF9F0D]'>Me</span>et Our Chef</h2>
            
           
//             </div>
//             </div>
//            </div>
//            {/* products */}
//            <div className='flex justify-evenly gap-[20px] max-sm:gap-[40px]  max-sm:grid max-sm:grid-col-1 md:grid-col-2 lg:grid-cols-4 '>
//             {/* product1 */} 
//             <div className='w-[305px] h-[328px]  rounded border border-[#0000004D] flex justify-center items-center hover:bg-[#DB4444] hover:text-white flex-col hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'>
//             <Image src={card1} alt='food1' />
           
//             </div>

//             {/* product2 */}
           
//            <div className='w-[305px] h-[328px] rounded border border-[#0000004D]  flex justify-center items-center  hover:bg-[#DB4444] hover:text-white flex-colhover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'>
//            <Image src={card2} alt='food2' />
            
//             </div>
              
//            {/* product3 */}
            
//                 <div className='w-[305px] h-[328px] rounded  border border-[#0000004D] flex justify-center items-center hover:bg-[#DB4444] hover:text-white flex-col hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'>
//                 <Image src={card3} alt='food3' />
           
//             </div>
            
          
//             {/* product4 */}
            
//             <div className='w-[305px] h-[328px] rounded  border border-[#0000004D] flex justify-center items-center hover:bg-[#DB4444] hover:text-white  flex-col hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'>
//             <Image src={card4} alt='food4' />
            
//             </div>



//            </div>
//       </div>
//       </div>
//   )
// }

// export default Chef
