import React from 'react';
import Image from 'next/image';
import card1 from '@/public/images/card1.png';
import card2 from '@/public/images/card2.png';
import card3 from '@/public/images/card3.png';
import card4 from '@/public/images/card4.png';

const Chef = () => {
  return (
    <div className='w-full   flex justify-center items-center mt-10 lg-mt-20 '>
        <div className='w-[80%] flex flex-col gap-[40px] justify-center items-center text-white'>
         {/*  */}
         <div className=''>
         <div className='flex flex-col justify-center items-center' >
            {/* today */}
             <h1 className='text-[#FF9F0D]'>Chef</h1>
            {/* flashsales line */}
            <div className='flex justify-between  items-center mt-5'>
            <h2 className='font-semibold text-[20px] md:text-[36px] md:leading-[48px] '><span className='text-[#FF9F0D]'>Me</span>et Our Chef</h2>
            
           
            </div>
            </div>
           </div>
           {/* products */}
           <div className='flex justify-evenly gap-[20px] max-sm:gap-[40px]  max-sm:grid max-sm:grid-col-1 md:grid-col-2 lg:grid-cols-4 '>
            {/* product1 */} 
            <div className='w-[305px] h-[328px]  rounded border border-[#0000004D] flex justify-center items-center hover:bg-[#DB4444] hover:text-white flex-col hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'>
            <Image src={card1} alt='food1' />
           
            </div>

            {/* product2 */}
           
           <div className='w-[305px] h-[328px] rounded border border-[#0000004D]  flex justify-center items-center  hover:bg-[#DB4444] hover:text-white flex-colhover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'>
           <Image src={card2} alt='food2' />
            
            </div>
              
           {/* product3 */}
            
                <div className='w-[305px] h-[328px] rounded  border border-[#0000004D] flex justify-center items-center hover:bg-[#DB4444] hover:text-white flex-col hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'>
                <Image src={card3} alt='food3' />
           
            </div>
            
          
            {/* product4 */}
            
            <div className='w-[305px] h-[328px] rounded  border border-[#0000004D] flex justify-center items-center hover:bg-[#DB4444] hover:text-white  flex-col hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'>
            <Image src={card4} alt='food4' />
            
            </div>



           </div>
      </div>
      </div>
  )
}

export default Chef
