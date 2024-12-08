import React from 'react';
import Link from 'next/link';
import bg from '@/public/images/bg.png';
import Image from 'next/image';
import { IoPlayOutline } from "react-icons/io5";
import about4 from '@/public/images/about4.png';
import about7 from '@/public/images/about7.png';
import about8 from '@/public/images/about8.png';
import about9 from '@/public/images/about9.png';





const page = () => {
  return (
    <div className='bg-white'>
       <section className=' w-full bg-cover  bg-center py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28'>
       <div className='relative flex justify-center items-center'>
       <Image src={bg} alt='bg'/>
      <div className='container absolute mx-auto px-4'>
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
            Our About
          </h1>
          <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
            <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
              Home
            </Link>
            <span className='text-white'>/</span>
            <Link href="/about" className='text-[#FF9F0D]'>
              About
            </Link>
          </div>
        </div>
      </div>
      </div>
    </section>
    <div>
      {/* Frist Section: Content and Buttons */}
      <section className="text-white body-font">
        <div className="container mx-auto flex px-5 py-24">
          <div className="flex flex-col md:flex-row items-center md:space-x-4 mt-2 ml-2">
            <Image
              className="object-cover object-center w-[336px] h-[536px] mt-530px ml-300px radius-6px"
              alt="hero"
              src= {about4} width={336} height={536} 
            />
          </div>
          {/* Right Images */}
          <div className="flex flex-col space-y-2 space-x-2 mt-2 ml-2">
            <Image
              className="object-cover object-center w-[309px] h-[271px] mt-584px ml-660px radius-6px"
              alt="image2"
              src={about7}
              width={309} height={271}
            />
            {/* Bottom Image */}
            <Image
              className="object-cover object-center w-[309px] h-[382px] mt-882px ml-660px radius-6px"
              alt="image3"
              src={about8}
              width={309} height={382}
            />
          </div>
          {/* Text Content and Buttons */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="text-sm mb-4 font-medium text-yellow-400 italic">
              About us _____
            </h1>
            <p className="text-black title-font text-3xl font-bold">
              Food is an important part of a balanced Diet
            </p>
            <p className="mb-8 leading-relaxed mt-8 text-[#333333]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-orange-400 border-0 py-2 px-3 focus:outline-none rounded text-lg">
                Show More
              </button>
              <button className="ml-4 inline-flex text-black  border-0 py-2 px-3 focus:outline-none rounded text-lg">
                <IoPlayOutline className="mr-2 block" /> {/* Icon on the left */}
                Watch video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="text-white body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col w-[579px]">
            <h1 className="text-black text-3xl text-bold mt-3">Why Choose Us</h1>
            <p className="text-black text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam 
            pellentesque bibendum non dui volutpat fringilla bibendum.</p>
          <Image
            className="mb-10 object-cover object-center w-[1320px] h-386px mt-1552px ml-300px mt-10"
            alt="hero"
            src = {about9}
            width={1320} height={386}
          />
        </div>
      </section>
      {/* Thrid section */}
     
      
</div>
    </div>
  )
}

export default page
