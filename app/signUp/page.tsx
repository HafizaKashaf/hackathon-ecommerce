import Common from '@/components/HeroSection/Common'
import React from 'react';
import { PiUser } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <Common title='Sign Up Page' subtitle='sign up' />
      {/* Content */}

      <div className='w-full flex justify-center  pb-10 bg-white py-10'>
      <div className=' w-[80%] flex justify-center  '>
        <div className='border rounded shadow-lg flex justify-center flex-col gap-6 px-10 py-10'>
            <h1 className='font-bold text-2xl '>Sign Up</h1>
            <form className='flex flex-col gap-4'>
                {/* name */}
                <div className='flex flex-row gap-2 border px-2 py-2'>
                 <PiUser className='w-[24px] h-[24px]  text-gray-500'/>
                 <input type="text"
                 id='name'
                 className='outline-none'
                 placeholder='Name' />
                </div>
                {/* email */}
                <div className='flex flex-row gap-2 border px-2 py-2'>
                 < MdOutlineMail className='w-[24px] h-[24px]  text-gray-500'/>
                 <input type="email"
                 id='email'
                 className='outline-none'
                 placeholder='Email or Phone Number' />
                </div>

                {/* password */}
                <div className='flex flex-row gap-2 border px-2 py-2'>
                 <CiLock className='w-[24px] h-[24px] text-gray-500'/>
                 <input type="password"
                 id='password'
                 className='outline-none'
                 placeholder='Password' />
                </div>
                {/* remember */}
                <div className='flex flex-row gap-2 '>
                    <input type="checkbox"  /><p className=''>Remember me?</p>
                </div>
            </form>
            <div className='flex flex-col gap-2'>
            <button className='w-full bg-[#FF9F0D] text-white py-2'>Sign Up</button>
            <button className='text-end text-gray-600'>Forget password?</button>
           
            </div>
             <div className='w-full flex items-center justify-center'>
                <hr  className='w-1/3 bg-gray-500'/>
                <span className='text-gray-700 border p-2 '>OR</span>
                <hr className='w-1/3 bg-gray-500'/>
             </div>
             <div className='flex flex-col gap-2'>
                <div className='border flex flex-row items-center px-1'>
                    <FcGoogle  className='w-[24px] h-[24px]' />
                    <button className='w-full  py-2 text-[#4F4F4F]'>Sign up with Google</button>
                    </div>
            
                <div className='border flex flex-row items-center px-1'>
                    <FaApple   className='w-[24px] h-[24px]'/>
                    <button className='w-full   py-2 text-[#4F4F4F]'>Sign up with Apple</button>
                    </div>
           
            </div>
        </div>
        </div>
        </div>

    </div>
  )
}

export default page
