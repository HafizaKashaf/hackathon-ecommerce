import React from 'react'
import hero from '@/public/images/hero.png';
import Image from 'next/image';
import line from '@/public/images/Line.png';
import { RiFacebookLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='w-full  flex justify-center mt-10 lg:mt-20  '>
        <div className=' w-[80%] h-full flex max-sm:flex-col  justify-between items-center '>
           <div className='flex flex-row items-center justify-items-center '>
            {/* bodrer */}
            <div className='text-white flex flex-col items-center justify-center gap-[24px]'>
                <Image src={line} alt='line'/>
                <div >
                    <button className='flex flex-col gap-[24px]'>
                    <RiFacebookLine className='w-[12px] h-[24px]'/>
                    <FaTwitter className='w-[11px] h-[24px] text-[#FF9F0D] '/>
                    <FaPinterestP className='w-[10px] h-[24px]'/>
                    </button>
                </div>
                <Image src={line} alt='line'/>
            </div>
            {/* left Side */}
            <div className='lg:pr-[64px] max-sm:pl-4 pl-10 py-5 flex flex-col gap-10 lg:gap-4 text-[#F7F7F7]'>
                <div className='flex  items-center gap-[24px] text-[14px] md:text-[24px] lg:text-[32px] text-[#FF9F0D] '>
                    <span>Its Quick & Amusing!</span>
                </div>
                <div className='w-[300px] lg:w-[443px] flex flex-col items-start gap-5'>
                    <h1 className='font-semibold text-[36px] lg:text-[48px] leading-[60px]'><span className='text-[#FF9F0D]'>The Art</span> of speed
                    food Quality</h1>
                    <p className='text-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Varius sed pharetra dictum neque massa congue</p>
                    <button className='font-medium text-[16px] leading-[24px] w-[171px] h-[56px] rounded-[30px] bg-[#FF9F0D] hover:bg-yellow-600 '>See more</button>
                    
                   
                </div>
              </div>
              </div>
              
            {/* Right Side */}
            <div>
                <Image  src={hero} alt='hero' width={800} height={600}/>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
