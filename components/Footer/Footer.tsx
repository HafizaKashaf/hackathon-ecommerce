import React from 'react';
import Image from 'next/image';
import watch from '@/public/images/Watch.png';
import post1 from '@/public/images/post1.png';
import post2 from '@/public/images/post2.png';
import post3 from '@/public/images/post3.png';
import { FaTwitter } from "react-icons/fa";
import { RiFacebookLine } from "react-icons/ri";
import { CiInstagram } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center text-white mt-20'>
        <div className='w-[80%] '>
            {/* news letter */}
            <div className=" flex lg:flex-row flex-col gap-3 justify-between max-sm:flex-col max-sm:w-[380px] max-sm:h-[261px] border-b border-[#FF9F0D] pb-5 lg:pb-10">
                  <div className="max-sm:w-[380px] max-sm:h-[91px] flex flex-col gap-3 ">
                     <p className="text-[18px] lg:text-[32px] lg:leading-[40px] leading-[27px] font-semibold lg:font-bold max-sm:text-center">Still You Need Our Support ?</p>
                     <p className="text-[16px] leading-[24px] max-sm:text-center">Don't wait make a smart & logical quote here. Its pretty easy.</p>
                  </div>
                  <div className=" flex flex-col gap-[16px] max-sm:w-[380px] max-sm:h-[146px]">
                      <div className='flex w-[400px]   max-sm:flex-col  max-sm:h-[112px]'>
                         <input className='h-[48px] w-[256px] border-solid border-black border-[1px] rounded-[5px] p-3 placeholder-[#FAFAFA] max-sm:w-[380px] max-sm:h-[48px] bg-[#FF9F0D] outline-none' placeholder='Enter your email' type="text"  />
                         <button className=' text-[16px] leading-[24px] border-solid rounded-[5px] border-black border-[1px] max-sm:w-[380px] max-sm:h-[48px] bg-white text-[#FF9F0D] font-normal px-2'>Subscribe Now</button>
                       </div>
                          
                   </div>
                </div>
                {/*  */}
                <div className="flex lg:gap-20 gap-2 justify-evenly max-sm:flex max-sm:flex-col  max-sm:gap-[32px] mt-10 lg:mt-20 mb-10 lg:mb-20  ">
                <div className="  w-[312px] flex flex-col gap-[16px] max-sm:text-center max-sm:hidden">
                <p className="text-[24px] leading-[24px] bold">About Us</p>
                <p className=" text-[8px] lg:text-[16px] leading-[21px]">orporate clients and leisure travelers has been relying on Groundlink for dependab safe, and professional chauffeured car service in major cities across World.</p>
                <div className='flex flex-row gap-2'>
                    <Image src={watch} alt='watch'/>
                    <div className='flex flex-col gap-1'>
                        <p>Opening Houres</p>
                        <p>Mon - Sat(8.00 - 6.00)</p>
                        <p>Sunday - Closed</p>
                    </div>
                </div>
            </div>
           
            <div className="flex flex-col gap-[16px] max-sm:text-center ">
                <p className="text-[16px] lg:text-[24px] leading-[24px] font-semibold">Useful Links</p>
                <p className="text-[14px]  lg:text-[16px] leading-[21px]">About</p>
                <p className="text-[14px]  lg:text-[16px] leading-[21px]">News</p>
                <p className="text-[14px]  lg:text-[16px] leading-[21px]">Partners</p>
                <p className="text-[14px]  lg:text-[16px] leading-[21px]">Team</p>
                <p className="text-[14px]  lg:text-[16px] leading-[21px]">Menu</p>
                <p className="text-[14px]  lg:text-[16px] leading-[21px]">Contacts</p>
            </div>
            <div className="flex flex-col gap-[16px] max-sm:text-center ">
                <p className="text-[16px]  lg:text-[24px]  leading-[24px] font-semibold">Help?</p>
                <p className="text-[14px]  lg:text-[16px] leading-[21px]">FAQ</p>
                <p className="text-[14px] lg:text-[16px]  leading-[21px]">Terms & Conditions</p>
                <p className="text-[14px] lg:text-[16px]  leading-[21px]">Reporting</p>
                <p className="text-[14px] lg:text-[16px]  leading-[21px]">Documentation</p>
                <p className="text-[14px] lg:text-[16px]  leading-[21px]">Support Policy</p>
                <p className="text-[14px] lg:text-[16px]  leading-[21px]">Privacy</p>
            </div>
            <div className=" flex flex-col gap-[16px]">
                <p className="text-[16px]  lg:text-[24px] leading-[24px] font-semibold">Resent Post</p>
                <div className='flex flex-row gap-2 text-[14px] lg:text-[16px] '>
                   <Image src={post1} alt='post1' />
                   <div className='flex flex-col gap-1 '>
                      <p>20 Feb 2022</p>
                      <p>Keep Your Business </p>
                   </div>
                </div>
                <div className='flex flex-row gap-2 text-[14px] lg:text-[16px] '>
                   <Image src={post2} alt='post2' />
                   <div className='flex flex-col gap-1'>
                      <p>20 Feb 2022</p>
                      <p>Keep Your Business </p>
                   </div>
                </div>
                <div className='flex flex-row gap-2 text-[14px] lg:text-[16px] '>
                   <Image src={post3} alt='post3' />
                   <div className='flex flex-col gap-1'>
                      <p>20 Feb 2022</p>
                      <p>Keep Your Business </p>
                   </div>
                </div>
            </div>
        </div>

        </div>
      {/* Credit */}
      <div className='w-full flex justify-center items-center bg-[#FF9F0D] py-5 '>
             <div className='w-[80%] flex justify-between items-center '>
                <p>Copyright © 2022 by Ayeman. All Rights Reserved.</p>
                <div className='flex flex-row gap-3 text-black'>
                    <button className='flex flex-row gap-4'>
                       
                        <RiFacebookLine className='bg-white w-[34px] h-[34px]' />
                        <FaTwitter className='bg-white w-[34px] h-[34px]' />
                        <CiInstagram  className='bg-white w-[34px] h-[34px]'/>
                         <AiOutlineYoutube className='bg-white text-[#FF9F0D] w-[34px] h-[34px]' />
                         <FaPinterest className='bg-white w-[34px] h-[34px]'/>
                         </button>
                                              
                </div>

             </div>
      </div>
    </div>
  )
}

export default Footer
