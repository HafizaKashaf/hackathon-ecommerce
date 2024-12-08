import React from 'react';
import Image from 'next/image';
import group from '@/public/images/group.png';
import group1 from '@/public/images/group1.png';
import group2 from '@/public/images/group2.png';
import group3 from '@/public/images/group3.png';
const Service = () => {
  return (
    <div className='w-full   flex justify-center items-center mt-10 lg:mt-20 my-10 lg:my-20'>
        <div className='w-[80%] justify-between gap-[40px]  items-center text-white px-10 md:lg:px-20'>
            {/*  */}
            <div className='flex justify-between gap-[20px]   max-sm:grid max-sm:grid-col-1 md:grid-col-2 lg:grid-cols-3 '>
            <div className='flex flex-col gap-3 items-center justify-center'>
                <Image src={group} alt='group'/>
                <p className='font-bold text-[24px] leading-[32px]'>Professional Chefs</p>
                <h1 className='font-bold text-[40px]'>420</h1>

            </div>
            <div className='flex flex-col gap-3 items-center justify-center'>
                <Image src={group3} alt='group'/>
                <p className='font-bold text-[24px] leading-[32px]'>Items Of Food</p>
                <h1 className='font-bold text-[40px]'>320</h1>

            </div>
            <div className='flex flex-col gap-3 items-center justify-center'>
                <Image src={group1} alt='group'/>
                <p className='font-bold text-[24px] leading-[32px]'>Years Of Experienced</p>
                <h1 className='font-bold text-[40px]'>30+</h1>

            </div>
            <div className='flex flex-col gap-3 items-center justify-center'>
                <Image src={group2} alt='group'/>
                <p className='font-bold text-[24px] leading-[32px]'>Happy Customers</p>
                <h1 className='font-bold text-[40px]'>220</h1>

            </div>
            </div>
        </div>
      
    </div>
  )
}

export default Service
