import React from 'react';
import { FaCheck } from "react-icons/fa";
import Image from 'next/image';
import about1 from '@/public/images/about1.png';
import about2 from '@/public/images/about2.png';
import about3 from '@/public/images/about3.png';
const About = () => {
  return (
    <div className='w-full flex justify-center  '>
        <div className=' w-[80%]  flex max-sm:flex-col justify-between items-center  gap-[96px]'>
            {/* leftSide */}
            <div className='pt-[5rem] max-sm:pb-[1rem] pb-[3rem] text-white max-sm:w-[300px] w-[562px]'>
      
            <h2 className='text-[#FF9F0D] text-[20px] md:text-[32px]'>about us</h2>
            <h1 className='text-[20px] md:text-[25px] lg:text-[48px] font-bold leading-[2rem] md:leading-[3rem]'><span className='text-[#FF9F0D]'>We</span> Create the best foody product
            </h1> 
            <p  className='mt-[1.5rem] mb-[1.5rem] opacity-90 text-[15px] md:text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            <div  className="flex items-center mb-[1rem] space-x-3">
                <FaCheck className='w-[1.3rem] h-[1.3rem] ' />
                <p className='text-[18px] font-normal'> Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
            </div>
            <div className="flex items-center mb-[1rem] space-x-3">
                <FaCheck className='w-[1.3rem] h-[1.3rem]' />
                <p className='text-[18px] font-normal'> Quisque diam pellentesque bibendum non dui volutpat fringilla </p>
            </div>
            <div className="flex items-center mb-[1rem] space-x-3">
                <FaCheck className='w-[1.3rem] h-[1.3rem] ' />
                <p className='text-[18px]  font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>

            <button className='font-medium text-[16px] leading-[24px] w-[171px] h-[56px] rounded-[30px] bg-[#FF9F0D] hover:bg-yellow-600 '>See more</button>
        
        </div>
         {/* Right Side */}
         <div className='  grid grid-rows-3 grid-cols-2 w-[80%]   h-full gap-5 max-sm:px-1 max-sm:py-1 px-20 py-20'>
              <div className='flex justify-center items-center row-span-2 col-span-2 bg-'>
                <Image src={about1} alt='about1' className='rounded-[6px]'/>
              </div>
              <div className='flex justify-center items-center  col-span-1 '>
              <Image src={about2} alt='about2' className='rounded-[6px]'/>
              </div>
              <div className='flex justify-center items-center  col-span-1 '>
              <Image src={about3} alt='about3' className='rounded-[6px]'/>
              </div>

             </div>

    

            
            

        </div>
      
    </div>
  )
}

export default About
