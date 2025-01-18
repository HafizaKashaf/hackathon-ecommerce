import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


const page = () => {
  return (
    <div className='bg-white'>
         <section className=' w-full bg-cover  bg-center mt-3 '>
       <div className='relative flex justify-center items-center'>
       <img src="/images/bgpages.png" alt='bgpages'/>
      <div className='container absolute mx-auto px-4'>
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
             Blog List
          </h1>
          <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
            <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
              Home
            </Link>
            <span className='text-white'>/</span>
            <Link href="/blog" className='text-[#FF9F0D]'>
             Blog
            </Link>
          </div>
        </div>
      </div>
      </div>
    </section>
     {/*  */}
     <div>
     <div className='w-full flex justify-center  py-10  '>
     <div className=' w-[80%] flex justify-between max-sm:flex-col '>
        {/* left */}
        <div className='w-[80%] flex flex-col'>
          <div className='relative flex '>
            <Image src="/images/food6.png" alt="food" width={500} height={300} className='bg-cover bg-center max-sm:h-[300px] w-full h-[500px]' />
            <div className='absolute mt-4 ml-4'>
              <button className='bg-[#FF9F0D] text-white p-2 rounded-lg'>14 Feb</button>

            </div>
          </div>


        </div>
        
        {/* right */}

     </div>
     </div>
      </div>
      </div>
  )
}

export default page
