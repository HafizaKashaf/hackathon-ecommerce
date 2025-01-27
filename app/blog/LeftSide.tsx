import React from 'react';
import { IoCalendarNumberOutline } from "react-icons/io5";
import { TbMessages } from "react-icons/tb";
import { PiUserCirclePlusLight } from "react-icons/pi";
import Link from 'next/link';

const Leftside = () => {
  return (
    <div className='mx-auto md:ml-10 my-16 px-4 sm:px-8 lg:px-16'>
      {/* First div */}
      <div className='w-full h-[300px] sm:h-[400px] lg:h-[520px] bg-[url(/images/food6.png)] bg-cover bg-center'>
        <button className='w-[60px] h-[60px] bg-[#FF9f0D] text-white rounded-[6px] ml-4 mt-4'>14 Feb</button>
      </div>

      <p className='flex gap-2 my-6 text-sm sm:text-base'>
        <IoCalendarNumberOutline size={24} className='text-[#FF9F0D] bg-white' />
        <span>Feb 14, 2022 /</span>
        <TbMessages size={24} className='text-[#FF9F0D] bg-white' />
        <span> 3 /</span>
        <PiUserCirclePlusLight size={24} className='text-[#FF9F0D] bg-white' />
        <span>Admin</span>
      </p>

      <h2 className='font-bold text-xl sm:text-2xl lg:text-3xl mb-6'>10 Reasons To Do A Digital Detox Challenge</h2>

      <p className='text-sm sm:text-base text-justify'>
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
      </p>
      
      <Link href="/blogdetail">
        <button className='w-[172px] h-[52px] text-[#FF9F0D] border-[#FF9F0D] border-[2px] rounded-sm my-8 px-8'>
          Read More
        </button>
      </Link>

      {/* Second div */}
      <div className='w-full h-[300px] sm:h-[400px] lg:h-[520px] bg-[url(/images/food5.png)] bg-cover bg-center'>
        <button className='w-[60px] h-[60px] bg-[#FF9f0D] text-white rounded-[6px] ml-4 mt-4'>14 Feb</button>
      </div>

      <p className='flex gap-2 my-6 text-sm sm:text-base'>
        <IoCalendarNumberOutline size={24} className='text-[#FF9F0D] bg-white' />
        <span>Feb 14, 2022 /</span>
        <TbMessages size={24} className='text-[#FF9F0D] bg-white' />
        <span> 3 /</span>
        <PiUserCirclePlusLight size={24} className='text-[#FF9F0D] bg-white' />
        <span>Admin</span>
      </p>

      <h2 className='font-bold text-xl sm:text-2xl lg:text-3xl mb-6'>Traditional Soft Pretzels with Sweet Beer Cheese</h2>

      <p className='text-sm sm:text-base text-justify'>
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
      </p>

      <button className='w-[172px] h-[52px] text-[#FF9F0D] border-[#FF9F0D] border-[2px] rounded-sm my-8 px-8'>
        Read More
      </button>

      {/* Third div */}
      <div className='w-full h-[300px] sm:h-[400px] lg:h-[520px] bg-[url(/images/about2.png)] bg-cover bg-center'>
        <button className='w-[60px] h-[60px] bg-[#FF9f0D] text-white rounded-[6px] ml-4 mt-4'>14 Feb</button>
      </div>

      <p className='flex gap-2 my-6 text-sm sm:text-base'>
        <IoCalendarNumberOutline size={24} className='text-[#FF9F0D] bg-white' />
        <span>Feb 14, 2022 /</span>
        <TbMessages size={24} className='text-[#FF9F0D] bg-white' />
        <span> 3 /</span>
        <PiUserCirclePlusLight size={24} className='text-[#FF9F0D] bg-white' />
        <span>Admin</span>
      </p>

      <h2 className='font-bold text-xl sm:text-2xl lg:text-3xl mb-6'>The Ultimate Hangover Burger: Egg in a Hole Burger</h2>

      <p className='text-sm sm:text-base text-justify'>
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
      </p>

      <button className='w-[172px] h-[52px] text-[#FF9F0D] border-[#FF9F0D] border-[2px] rounded-sm my-8 px-8'>
        Read More
      </button>

      {/* Fourth div */}
      <div className='w-full h-[300px] sm:h-[400px] lg:h-[520px] bg-[url(/images/about3.png)] bg-cover bg-center'>
        <button className='w-[60px] h-[60px] bg-[#FF9f0D] text-white rounded-[6px] ml-4 mt-4'>14 Feb</button>
      </div>

      <p className='flex gap-2 my-6 text-sm sm:text-base'>
        <IoCalendarNumberOutline size={24} className='text-[#FF9F0D] bg-white' />
        <span>Feb 14, 2022 /</span>
        <TbMessages size={24} className='text-[#FF9F0D] bg-white' />
        <span> 3 /</span>
        <PiUserCirclePlusLight size={24} className='text-[#FF9F0D] bg-white' />
        <span>Admin</span>
      </p>

      <h2 className='font-bold text-xl sm:text-2xl lg:text-3xl mb-6'>My Favorite Easy Black Pizza Toast Recipe</h2>

      <p className='text-sm sm:text-base text-justify'>
        At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
      </p>

      <button className='w-[172px] h-[52px] text-[#FF9F0D] border-[#FF9F0D] border-[2px] rounded-sm my-8 px-8'>
        Read More
      </button>

      {/* Pagination */}
      <div className='w-full h-[51px] bg-[url(/pagination.png)] flex justify-center my-11'></div>
    </div>
  );
};

export default Leftside;
