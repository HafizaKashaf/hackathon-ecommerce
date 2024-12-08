import React from 'react';
import Image from 'next/image';
import add from '@/public/images/add.png';
import heading from '@/public/images/addhead.png';
import play from '@/public/images/Play.png'

const Add = () => {
  return (
    <div className='w-full  flex justify-center  mt-20  max-sm:pb-12'>
        <div className="relative flex justify-center items-center ">
        <Image src={add} alt='picture' />
        <div className=' text-white absolute max-sm:left-10 right-20 flex flex-col max-sm:2 gap-[16px] items-end lg:w-[50%] '>
            <Image src={heading} alt='heading' className='max-sm:w-[100px] w-[248px] max-sm:h-[20px] h-[40px]' />

          <h1 className='font-semibold max-sm:text-[16px] text-[24px] leading-24px tracking-[3%] lg:text-end'>We Document Every Food
          Bean Process untile it is saved</h1>
          <p className='font-normal text-[14px] leading-[21px] lg:text-end'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, </p>
          <div className='flex flex-row gap-4'>
          <button className='font-medium text-[16px] leading-[24px] w-[171px] h-[56px] rounded-[30px] bg-transparent hover:bg-yellow-600 border border-[#FF9F0D]'>Read More</button>
          <div className='flex flex-row gap-4 justify-center items-center'>
            <Image src={play} alt='play' className='w-[60px] max-sm:w-[30px] max-sm:h-[30px] h-[60px]'/>
            <p className='text-[16px]'>Play Video</p>
          </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Add
