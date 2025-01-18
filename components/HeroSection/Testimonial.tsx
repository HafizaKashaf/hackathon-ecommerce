import React from 'react';
import Image from 'next/image';
import testimonial from '@/public/images/testimonial.png';
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div className='w-full  flex justify-center items-center mt-10 lg:mt-20 '>
        <div className=' w-[80%] h-full flex flex-col justify-center max-sm:gap-2 gap-10 text-white mt-10 lg:mt-20'>
            {/* title */}
            <div className='flex flex-col gap-4 text-start'>
                <h1 className='text-[24px] md:lg:text-[32px] leading-[40px] text-[#FF9F0D]'>Testimonials</h1>
                <p className='text-[30px] md:lg:text-[48px] leading-[56px]'>What our client are saying</p>

            </div>
            {/* testimonial */}
            <div className=' flex flex-col gap-5 lg:gap-10 justify-center items-center  '>
                <div className='flex flex-col gap-5 lg:gap-10 justify-center items-center bg-white lg:xl:mx-10 lg:mx-28 lg:xl:px-5 lg:px-20 lg:xl:py-10 border shadow-lg shadow-gray-700   '>
                <Image  src={testimonial} alt='picture'/>
                <h1 className='text-[#FF9F0D] text-[24px] lg:text-[36px]'>99</h1>
                <p className='text-[#4F4F4F] text-center text-[14px] md:lg:text-[18px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                <div className='flex flex-col gap-4 items-center justify-center'>
                <div className='flex flex-row text-[#FFAD33] '>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar className='text-gray-300'/>
                    </div>
                <h2 className='text-bold text-[14px] lg:text-[24px] leading-[32px] text-black'>Alamin Hasan

                </h2>
                <h3 className='text-[#828282] text-[16px]'>Food Specialist</h3>
                </div>
                </div>
                
            </div>
            {/* button */}
            <div className='flex flex-row gap-3 items-center justify-center'>
                <button className='w-[15px] h-[15px] rounded-[50%] hover:bg-[#FF9F0D] bg-yellow-800'></button>
                <button  className='w-[15px] h-[15px]  rounded-[50%] hover:bg-[#FF9F0D]  bg-yellow-800'></button>
                <button  className='w-[15px] h-[15px] rounded-[50%] hover:bg-[#FF9F0D]  bg-yellow-800'></button>
                <button  className='w-[15px] h-[15px] rounded-[50%] hover:bg-[#FF9F0D]  bg-yellow-800'></button>
            </div>

        </div>
      
    </div>
  )
}

export default Testimonial
