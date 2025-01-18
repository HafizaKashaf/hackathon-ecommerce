import React from 'react'
import bgpages from '@/public/images/bgpages.png';
import Link from 'next/link';
import Image from 'next/image';


interface propstype {
    title: string;
    subtitle:string;
}
const Common: React.FC<propstype>= ({title,subtitle}:propstype) => {
  return (
    <div>
      <section className=' w-full bg-cover  bg-center mt-3 '>
       <div className='relative flex justify-center items-center'>
       <Image src={bgpages} alt='bgpages'/>
      <div className='container absolute mx-auto px-4'>
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
           {title}
          </h1>
          <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
            <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
              Home
            </Link>
            <span className='text-white'>/</span>
            <h1 className='text-[#FF9F0D]'>
             {subtitle}
            </h1>
          </div>
        </div>
      </div>
      </div>
    </section> 
    </div>
  )
}

export default Common
