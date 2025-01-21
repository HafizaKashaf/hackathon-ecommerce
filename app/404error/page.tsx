import Common from '@/components/HeroSection/Common'
import React from 'react'

const page = () => {
  return (
    <div>
    <Common title='404 Error' subtitle='404' />
    {/* Content */}

    <div className='w-full flex justify-center  bg-white py-28 '>
    <div className=' w-[80%] flex justify-center items-center '>
        <div className='flex flex-col gap-6  justify-center items-center '>
        <h1 className='font-bold text-[#FF9F0D] text-8xl text-center'>404</h1>
        <h2 className='text-[#333333] font-bold text-[38px] max-sm:text-[28px] text-center'>Oops! Look likes something going wrong</h2>
        <p className='text-[16px] font-normal text-center'>Page Cannot be found! we'll have it figured out in no time.<br/>
        Menwhile, cheek out these fresh ideas:</p>
        <button className='bg-[#FF9F0D] text-white hover:bg-yellow-600 p-3 px-7 rounded '>Go to home</button>
        </div>
    </div>
    </div>  
    </div>
  )
}

export default page


