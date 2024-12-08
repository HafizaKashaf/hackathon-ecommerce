import React from 'react';
import Image from 'next/image';
import food1 from '@/public/images/food1.png';
import food2 from '@/public/images/food2.png';
import food3 from '@/public/images/food3.png';
import food4 from '@/public/images/food4.png';

const Food = () => {
  return (
    <div className='w-full   flex justify-center items-center '>
        <div className='w-[80%] flex flex-col gap-[40px] justify-center items-center text-white'>
         {/*  */}
         <div className=''>
         <div className='flex flex-col justify-center items-center' >
            {/* today */}
            <h1 className='text-[#FF9F0D]' > Food Category</h1>
            {/* flashsales line */}
            <div className='flex justify-between items-center mt-5'>
            <h2 className='font-semibold text-[20px] md:text-[36px] md:leading-[48px] '><span className='text-[#FF9F0D]'>Ch</span>oose Food Iteam</h2>
            
           
            </div>
            </div>
           </div>
           {/* products */}
           <div className='flex justify-evenly gap-[20px]   max-sm:grid max-sm:grid-col-1 md:grid-col-1 lg:grid-cols-4 '>
            {/* product1 */} 
            <div className='w-[305px] h-[328px]  rounded border border-[#0000004D] flex justify-center items-center hover:bg-[#DB4444] hover:text-white flex-col hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'>
            <Image src={food1} alt='food1' />
           
            </div>

            {/* product2 */}
           
           <div className='w-[305px] h-[328px] rounded border border-[#0000004D]  flex justify-center items-center  hover:bg-[#DB4444] hover:text-white flex-colhover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'>
           <Image src={food2} alt='food2' />
            
            </div>
              
           {/* product3 */}
            
                <div className='w-[305px] h-[328px] rounded  border border-[#0000004D] flex justify-center items-center hover:bg-[#DB4444] hover:text-white flex-col hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'>
                <Image src={food3} alt='food3' />
           
            </div>
            
          
            {/* product4 */}
            
            <div className='w-[305px] h-[328px] rounded  border border-[#0000004D] flex justify-center items-center hover:bg-[#DB4444] hover:text-white  flex-col hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'>
            <Image src={food4} alt='food4' />
            
            </div>



           </div>
      </div>
      </div>
  )
}

export default Food
