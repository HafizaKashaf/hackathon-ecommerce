import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import menu1 from '@/public/images/menu1.png';
import menu2 from '@/public/images/menu2.png';
import menu3 from '@/public/images/menu3.png';
import menu4 from '@/public/images/menu4.png';
import menu from '@/public/images/menu.png';


const Menu = () => {
  return (
    <div className='w-full   flex justify-center items-center mt-10 lg-mt-20 '>
        <div className='w-[80%] flex flex-col gap-[40px] justify-center items-center text-white'>
        {/*  */}
        <div className=' flex flex-col gap-[30px]'>
         <div className='flex flex-col justify-center items-center' >
            {/* today */}
             <h1 className='text-[#FF9F0D]'>Choose & pick</h1>
            {/* flashsales line */}
            <div className='flex justify-between items-center mt-5'>
            <h2 className='font-semibold text-[20px] md:text-[36px] md:leading-[48px] '><span className='text-[#FF9F0D]'>Fr</span>om Our Menu</h2>
            </div>
            </div>
            <ul className='lg:flex hidden text-white  items-center space-x-6 xl:space-x-10'>
            <li className='navlink'>
                <Link href="#">Breakfast</Link>
            </li>
            <li className='navlink'>
                <Link href="#">Lunch</Link>
            </li>

            <li className='navlink'>
                <Link href="#">Dinner</Link>
            </li>

            <li className='navlink'>
                <Link href="#">Dessert</Link>
            </li>

            <li className='navlink'>
                <Link href="#">Drink</Link>
            </li>

            <li className='navlink'>
                <Link href="#">Snacks</Link>
            </li>
            <li className='navlink'>
                <Link href="#">Soups</Link>
            </li>
        </ul>
           </div>
           <div className='flex justify-evenly gap-[20px]   max-sm:grid max-sm:grid-col-1 md:grid-col-1 lg:grid-cols-4 '>
            {/* product1 */} 
            <div className=' w-[376px] h-[406px]  rounded border border-[#0000004D] flex justify-center items-center hover:bg-[#DB4444] hover:text-white flex-col hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'>

            <Image src={menu} alt='food1'  />
            
            </div>

            {/* product2 */}
           
           <div className='w-[376px] h-[406px] rounded border border-[#0000004D] flex-col gap-5 flex justify-center items-center  cursor-pointer '>
            <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                   <Image src={menu1} alt='menu1' className='w-[80px] h-[80px]' />
                   <div className='flex flex-col gap-1'>
                      <h1 className='font-bold text-[20px] leading-[28px]'>Lettuce Leaf</h1>
                      <p className='font-normal text-[14px] leading-[22px]'>Lacus nisi, et ac dapibus velit in consequat. </p>
                      <p className='font-bold text-[18px] leading-[26px] text-[#FF9F0D]'>12.5$</p>
                   </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                   <Image src={menu2} alt='menu1' className='w-[80px] h-[80px]' />
                   <div className='flex flex-col gap-1'>
                      <h1 className='font-bold text-[20px] leading-[28px]'>Fresh Breakfast</h1>
                      <p className='font-normal text-[14px] leading-[22px]'>Lacus nisi, et ac dapibus velit in consequat. </p>
                      <p className='font-bold text-[18px] leading-[26px] text-[#FF9F0D]'>9.5$</p>
                   </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                   <Image src={menu3} alt='menu1' className='w-[80px] h-[80px]' />
                   <div className='flex flex-col gap-1'>
                      <h1 className='font-bold text-[20px] leading-[28px]'>Mild Butter</h1>
                      <p className='font-normal text-[14px] leading-[22px]'>Lacus nisi, et ac dapibus velit in consequat. </p>
                      <p className='font-bold text-[18px] leading-[26px] text-[#FF9F0D]'>18.5$</p>
                   </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                   <Image src={menu4} alt='menu1' className='w-[80px] h-[80px]' />
                   <div className='flex flex-col gap-1'>
                      <h1 className='font-bold text-[20px] leading-[28px]'>Fresh Bread</h1>
                      <p className='font-normal text-[14px] leading-[22px]'>Lacus nisi, et ac dapibus velit in consequat. </p>
                      <p className='font-bold text-[18px] leading-[26px] text-[#FF9F0D]'>11.5$</p>
                   </div>
                </div>
            </div>

           
            
           
              
           {/* product3 */}
            
           <div className='w-[376px] h-[406px] rounded border border-[#0000004D] flex-col gap-5 flex justify-center items-center  cursor-pointer '>
            <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                   <Image src={menu3} alt='menu1' className='w-[80px] h-[80px]' />
                   <div className='flex flex-col gap-1'>
                      <h1 className='font-bold text-[20px] leading-[28px]'>Lettuce Leaf</h1>
                      <p className='font-normal text-[14px] leading-[22px]'>Lacus nisi, et ac dapibus velit in consequat. </p>
                      <p className='font-bold text-[18px] leading-[26px] text-[#FF9F0D]'>12.5$</p>
                   </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                   <Image src={menu4} alt='menu1' className='w-[80px] h-[80px]' />
                   <div className='flex flex-col gap-1'>
                      <h1 className='font-bold text-[20px] leading-[28px]'>Fresh Breakfast</h1>
                      <p className='font-normal text-[14px] leading-[22px]'>Lacus nisi, et ac dapibus velit in consequat. </p>
                      <p className='font-bold text-[18px] leading-[26px] text-[#FF9F0D]'>9.5$</p>
                   </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                   <Image src={menu1} alt='menu1' className='w-[80px] h-[80px]' />
                   <div className='flex flex-col gap-1'>
                      <h1 className='font-bold text-[20px] leading-[28px]'>Mild Butter</h1>
                      <p className='font-normal text-[14px] leading-[22px]'>Lacus nisi, et ac dapibus velit in consequat. </p>
                      <p className='font-bold text-[18px] leading-[26px] text-[#FF9F0D]'>18.5$</p>
                   </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                   <Image src={menu2} alt='menu1' className='w-[80px] h-[80px]' />
                   <div className='flex flex-col gap-1'>
                      <h1 className='font-bold text-[20px] leading-[28px]'>Fresh Bread</h1>
                      <p className='font-normal text-[14px] leading-[22px]'>Lacus nisi, et ac dapibus velit in consequat. </p>
                      <p className='font-bold text-[18px] leading-[26px] text-[#FF9F0D]'>11.5$</p>
                   </div>
                </div>
            </div>

            
          </div>



           </div>

        </div>
      
   
  )
}

export default Menu
