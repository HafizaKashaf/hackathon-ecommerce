import React from 'react';
import Image from 'next/image';
import experienced from '@/public/images/experienced.png';
import cookie from '@/public/images/Cookie.png';

import hamburger from '@/public/images/hamburger.png';






const Experienced = () => {
  return (
    <div className='w-full  flex justify-center mt-10 lg:mt-20  '>
        <div className=" w-[80%] flex max-sm:flex-col justify-between gap-[50px] items-center  text-white ">
            {/* left Side */}
           <div>
            <Image src={experienced} alt='food'/>
           </div>

            {/* Right Side */}
            <div className='flex flex-col gap-7 w-[300px] lg:w-[526px]'>
                <h1 className='text-[#FF9F0D]'>Why Choose us</h1>
                <h2 className='font-bold text-[24px] lg:text-[48px] leading-[56px]'>Exta ordinary taste
                And Experienced </h2>
                <p className='font-normal text-[10px] lg:text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                <div className='flex flex-row gap-10'>
                    <div>
                        <button className='lg:w-[100px] lg:h-[100px] w-[64px] h-[64px] bg-[#FF9F0D] flex justify-center items-center'>
                            <Image src={hamburger} alt='hamburger'/>
                        </button>
                        <p className='text-center'>Fast Food</p>
                    </div>
                    <div>
                        <button className='lg:w-[100px] lg:h-[100px] w-[64px] h-[64px] bg-[#FF9F0D] flex justify-center items-center'>
                            <Image src={cookie} alt='hamburger'/>
                        </button>
                        <p className='text-center'>Lunch</p>
                    </div>

                    <div >
                        <button className='lg:w-[100px] lg:h-[100px] w-[64px] h-[64px] bg-[#FF9F0D]  flex justify-center items-center'>
                            <Image src='/images/Wine.png' alt='hamburger' width={64} height={64}/>
                        </button>
                        <p className='text-center'>Dinner</p>
                    </div>

                </div>
                <div className='w-full'>
                    <Image  src='/images/yearexperience.png' alt='year of experience' width={374} height={92}/>

                </div>


            </div>

        </div>
      
    </div>
  )
}

export default Experienced
