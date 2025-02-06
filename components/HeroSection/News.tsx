import React from 'react';
import Image from 'next/image';
import burger from '@/public/images/burger.png';
import food5 from '@/public/images/food5.png';
import food6 from '@/public/images/food6.png';
import { FaRegThumbsUp } from "react-icons/fa";
import { LiaCommentDots } from "react-icons/lia";
import { IoMdShareAlt } from "react-icons/io";

const News = () => {
  return (
    <div>
      <div className='w-full   flex justify-center items-center mt-10 lg-mt20'>
        <div className='w-[80%] flex flex-col gap-[40px] justify-center items-center text-white'>
         {/*  */}
         <div className=''>
         <div className='flex flex-col justify-center items-center' >
            {/* today */}
            <h1 className='text-[#FF9F0D]' >Blog Post</h1>
            {/* flashsales line */}
            <div className='flex justify-between items-center mt-5'>
            <h2 className='font-semibold text-[20px] md:text-[36px] md:leading-[48px] '><span className='text-[#FF9F0D]'>La</span>test News & Blog</h2>
            
           
            </div>
            </div>
           </div>
           {/* products */}
           <div className='flex justify-between gap-[20px]   max-sm:grid max-sm:grid-col-1 md:grid-col-2 lg:grid-cols-3 '>
            {/* product1 */} 
            <div className='  rounded border  flex justify-center items-center flex-col hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'>
            <Image src={burger} alt='food1'  />
            <div className='w-[338px] flex flex-col gap-4 py-3 px-3
                '>
                    <p className='text-[#FF9F0D]'>10 February 2022</p>
                    <h1 className=' font-bold text-[20px] leading-[32px]'>Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</h1>
                    <div className='flex justify-between items-center'>
                        <p>Learn More</p>
                         <div className='flex flex-row gap-2'>
                            <button>
                                <FaRegThumbsUp />
                            </button>
                            <button>
                                <LiaCommentDots className='text-[#FF9F0D]' />
                            </button>
                            <button>
                                <IoMdShareAlt/>
                            </button>
                         </div>
                    </div>
                </div>
           
            </div>

            {/* product2 */}
           
           <div className=' rounded border  flex justify-center items-center flex-col hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'>
           <Image src={food5} alt='food2' />
           <div className='w-[338px] flex flex-col gap-4 py-3 px-3
                '>
                    <p className='text-[#FF9F0D]'>10 February 2022</p>
                    <h1 className=' font-bold text-[20px] leading-[32px]'>Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A</h1>
                    <div className='flex justify-between items-center'>
                        <p>Learn More</p>
                         <div className='flex flex-row gap-2'>
                            <button>
                                <FaRegThumbsUp />
                            </button>
                            <button>
                                <LiaCommentDots className='text-[#FF9F0D]' />
                            </button>
                            <button>
                                <IoMdShareAlt/>
                            </button>
                         </div>
                    </div>
                </div>
            
            </div>
              
           {/* product3 */}
            
                <div className=' rounded  border  flex justify-center items-center  flex-col hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 gap-4 '>
                <Image src={food6} alt='food3' />
                <div className='w-[338px] flex flex-col gap-4 py-3 px-3
                '>
                    <p className='text-[#FF9F0D]'>10 February 2022</p>
                    <h1 className=' font-bold text-[20px] leading-[32px]'>Curabitur rutrum velit ac congue malesuada</h1>
                    <div className='flex justify-between items-center'>
                        <p>Learn More</p>
                         <div className='flex flex-row gap-2'>
                            <button>
                                <FaRegThumbsUp />
                            </button>
                            <button>
                                <LiaCommentDots className='text-[#FF9F0D]' />
                            </button>
                            <button>
                                <IoMdShareAlt/>
                            </button>
                         </div>
                    </div>
                </div>
           
            </div>
            
          


           </div>
      </div>
      </div>
  
    </div>
  )
}

export default News