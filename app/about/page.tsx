
import React from 'react';
import Link from 'next/link';
import bgpages from '@/public/images/bgpages.png';
import bgmember from '@/public/images/bgmember.png';
import member from '@/public/images/member.png';
import Image from 'next/image';
import { IoPlayOutline } from "react-icons/io5";
import about4 from '@/public/images/about4.png';
import about7 from '@/public/images/about7.png';
import about8 from '@/public/images/about8.png';
import about9 from '@/public/images/about9.png';
import student from '@/public/images/student.png';
import coffee from '@/public/images/coffee.png';
import person from '@/public/images/person.png';
import testimonial from '@/public/images/testimonial.png';
import { FaStar } from "react-icons/fa";
import menu1 from '@/public/images/menu1.png';
import menu2 from '@/public/images/menu2.png';
import menu3 from '@/public/images/menu3.png';
import menu4 from '@/public/images/menu4.png';






const page = () => {
  return (
    <div className='bg-white'>
       <section className=' w-full bg-cover  bg-center mt-3 '>
       <div className='relative flex justify-center items-center'>
       <Image src={bgpages} alt='bgpages'/>
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
      {/*  */}
      <section className="text-white body-font">
        <div className="container mx-auto flex px-5 py-24">
          {/* left image */}
          <div className=" max-sm:hidden flex flex-col md:flex-row items-center md:space-x-4 mt-2 ml-2">
            <Image
              className="object-cover object-center w-[336px] h-[536px] mt-[530]px ml-300px radius-6px"
              alt="hero"
              src= {about4} width={336} height={536} 
            />
          </div>
          {/* Right Images */}
          <div className=" max-sm:hidden flex flex-col space-y-2 space-x-2 mt-2 ml-2">
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
        {/*  */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center md:lg:py-28">
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
              <button className="inline-flex w-[195px] h-[58px] text-white bg-[#FF9F0D] border-0 py-2 px-3 focus:outline-none rounded text-lg justify-center items-center font-bold">
                Show More
              </button>
              <button className="ml-4 inline-flex text-black  border-0 px-3 focus:outline-none rounded text-lg items-center justify-center gap-2 ">
                <div className='w-[60px] h-[60px] hover:bg-yellow-500 text-white bg-[#FF9F0D] items-center justify-center flex rounded-[50%]'>
                <IoPlayOutline className=" block"  /> {/* Icon on the left */}
                </div> 
                Watch video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="text-white body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col ">
          <div className='w-[579px] flex flex-col items-center justify-center'>
            <h1 className="text-[#333333] text-3xl font-bold mt-3 ">Why Choose Us</h1>
            <p className="text-[#4F4F4F] text-center mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam 
            pellentesque bibendum non dui volutpat fringilla bibendum.</p>
            </div>
          <Image
            className="mb-10 object-cover object-center w-[1320px] h-[386px] mt-1552px ml-300px mt-10"
            alt="hero"
            src = {about9}
            width={1320} height={386}
          />
        </div>
      </section>
      {/* Thrid section */}
      <div className='w-full   flex justify-center items-center pb-10 md:pb-14 lg:xl:pb-20 '>
        <div className='w-[80%] justify-between gap-[40px]  items-center px-10 md:lg:px-20'>
            {/*  */}
            <div className='flex justify-between gap-[20px]   max-sm:grid max-sm:grid-col-1 md:grid-col-2 lg:grid-cols-3 '>
            <div className='flex flex-col gap-3 items-center justify-center'>
                <Image src={student} alt='group'/>
                <p className='font-bold text-[24px] leading-[32px] text-[#333333]'>Best Chef</p>
                <h1 className='font-normal  text-[12px] md:lg:xl:text-[16px] text-[#4F4F4F] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </h1>

            </div>
            <div className='flex flex-col gap-3 items-center justify-center'>
                <Image src={coffee} alt='group'/>
                <p className='font-bold text-[24px] leading-[32px] text-[#333333]'>120 Item food</p>
                <h1 className='font-normal text-[12px] md:lg:xl:text-[16px] text-[#4F4F4F] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </h1>

            </div>
            <div className='flex flex-col gap-3 items-center justify-center'>
                <Image src={person} alt='group'/>
                <p className='font-bold text-[24px] leading-[32px] text-[#333333]'>Clean Environment</p>
                <h1 className='font-normal text-[12px] md:lg:xl:text-[16px] text-[#4F4F4F] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat </h1>

            </div>
           
            </div>
        </div>
      
    </div>
    {/* fourth section */}
    <section className=' w-full bg-cover  bg-center mt-3 py-10 pb-96 max-md:hidden'>
       <div className='relative flex justify-center items-center'>
       <Image src={bgmember} alt='bgpages'/>
      <div className='container absolute mx-auto top-10 '>
        <div className='flex flex-col  items-center justify-center '>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
          Team Member
          </h1>
          <p className='font-normal text-[12px] text-center md:lg:xl:text-[16px] w-[418px] text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Varius sed pharetra dictum neque massa congue</p>
         
        </div>
      </div>
      <div className=' container absolute mx-auto bottom-[-320px]'>
      <div className='flex flex-col  items-center justify-center '>
      <div>
      <div className='w-full   flex justify-center items-center mt-10 lg-mt20'>
        <div className='w-[80%] flex flex-col gap-[40px] justify-center items-center text-white'>
         {/*  */}
         
           {/* products */}
           <div className='flex justify-between gap-[20px]   max-sm:grid max-sm:grid-col-1 md:grid-col-2 lg:grid-cols-3 '>
            {/* product1 */} 
            <div className='  rounded border  flex  flex-col hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105  gap-2-'>
            <Image src={member} alt='food1' />
            <div className='w-[312px] flex flex-col gap-1  items-center justify-center
                '>
                    <p className='text-[#4F4F4F] font-bold sm:text-[12px] md:text-[16px] lg:text-[20px]'>Mark Henry</p>
                    <h1 className=' font-normal sm:text-[12px] md:lg:xl:text-[16px] text-[#828282]'>Owner</h1>
                    
                </div>
           
            </div>

            {/* product2 */}
           
           <div className=' rounded border  flex  flex-col hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105  gap-2'>
           <Image src={member} alt='food2' />
           <div className='w-[312px] flex flex-col gap-1  items-center justify-center
                '>
                    <p className='text-[#4F4F4F] font-bold sm:text-[12px] md:text-[16px] lg:text-[20px]'>Lucky Helen</p>
                    <h1 className=' font-normal sm:text-[12px] md:lg:xl:text-[16px]  text-[#828282]'>Chef</h1>
                    
                </div>
           
            
            </div>
              {/* product4 */}
           
           <div className=' rounded border  flex  flex-col hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105  gap-2'>
           <Image src={member} alt='food2' />
           <div className='w-[312px] flex flex-col gap-1  items-center justify-center
                '>
                    <p className='text-[#4F4F4F] font-bold sm:text-[12px] md:text-[16px] lg:text-[20px]'>Moon Henry</p>
                    <h1 className=' font-normal sm:text-[12px] md:lg:xl:text-[16px]  text-[#828282]'>Founder</h1>
                    
                </div>
           
            
            </div>
              
           {/* product3 */}
            
                <div className=' rounded  border  flex   flex-col hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 gap-2 '>
                <Image src={member} alt='food3' />
                <div className='w-[312px] flex flex-col gap-1  items-center justify-center
                '>
                    <p className=' font-bold text-[#4F4F4F] sm:text-[12px] md:text-[16px] lg:text-[20px]'>Tom Monrow</p>
                    <h1 className=' font-normal sm:text-[12px] md:lg:xl:text-[16px]  text-[#828282] '>Specialist</h1>
                    
                </div>
           
           
            </div>
            
          


           </div>
      </div>
      </div>
  
    </div>
         
        </div>
          
        </div>
      </div>
    </section>
    {/* fifth Testimonials */}
    <div className='w-full  flex justify-center items-center py-10 xl:lg:py-20 '>
        <div className=' w-[80%] h-full flex flex-col justify-center gap-10 text-white '>
            {/* title */}
            <div className='flex flex-col gap-4 text-start'>
                <h1 className='text-[24px] md:lg:text-[32px] leading-[40px] text-[#FF9F0D]'>Testimonials</h1>
                <p className='text-[30px] md:lg:text-[48px] leading-[56px] text-[#333333]'>What our client are saying</p>

            </div>
            {/* testimonial */}
            <div className=' flex flex-col gap-5 lg:gap-10 justify-center items-center  '>
                <div className='flex flex-col gap-5 lg:gap-10 justify-center items-center bg-white mx-10 lg:mx-28 px-5 lg:px-20 py-10 border shadow-lg shadow-gray-700   '>
                <Image  src={testimonial} alt='picture'/>
                <h1 className='text-[#FF9F0D] text-[24px] lgtext-[36px]'>99</h1>
                <p className='text-[#4F4F4F] text-center text-[14px] md:lg:text-[18px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                <div className='flex flex-col gap-4 items-center justify-center'>
                <div className='flex flex-row text-[#FFAD33] '>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar className='text-gray-300'/>
                    </div>
                <h2 className='text-bold text-[14px] lg:text-[24px] leading-[32px] text-black'>Alamin Hasan

                </h2>
                <h3 className='text-[#828282] text-[16px]'>Food Specialist</h3>
                </div>
                </div>
                
            </div>
            {/* button */}
            <div className='flex flex-row gap-3 items-center justify-center'>
                <button className='w-[15px] h-[15px] rounded-[50%] hover:bg-[#FF9F0D] bg-yellow-800'></button>
                <button  className='w-[15px] h-[15px]  rounded-[50%] hover:bg-[#FF9F0D]  bg-yellow-800'></button>
                <button  className='w-[15px] h-[15px] rounded-[50%] hover:bg-[#FF9F0D]  bg-yellow-800'></button>
                <button  className='w-[15px] h-[15px] rounded-[50%] hover:bg-[#FF9F0D]  bg-yellow-800'></button>
            </div>

        </div>
      
    </div>
    {/*  */}
    
    {/* sixth menu */}
    <div className='w-full   flex justify-center items-center mt-10 lg-mt-20 '>
        <div className='w-[80%] flex flex-col gap-[40px] justify-center items-center text-black'>
        {/*  */}
        <div className=' flex flex-col gap-[30px]'>
         <div className='flex flex-col justify-center items-center' >
            {/* today */}
            
            {/* flashsales line */}
            <div className='flex justify-between flex-col  items-center mt-5'>
            <h2 className='font-semibold text-[20px] md:text-[36px] xl:lg:text-[48px] md:leading-[48px] '>Our Food Menu</h2>
            <p className='text-[12px] md:text-[14px] lg:xl:text-[16px] leading-6 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Varius sed pharetra dictum neque massa congue</p>
            </div>
            </div>
            <ul className='lg:flex hidden text-black items-center space-x-6 xl:space-x-10 border-b '>
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
           
           
           <div className='  flex-col gap-8 flex justify-center items-center  cursor-pointer '>
            <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                   <Image src={menu1} alt='menu1' className='w-[80px] h-[80px]' />
                   <div className='flex flex-col gap-1'>
                    <div className='flex justify-between gap-12'>
                      <h1 className='font-bold text-[16px] md:text-[20px] lg:text-[22px] xl:text-[2] leading-[28px] text-[#333333] hover:text-[#FF9F0D]'>Alder Grilled Chinook Salmon</h1>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#FF9F0D]'>12.5$</p>
                      </div>
                      <p className='font-normal text-[12px] md:text-[14px] lg:xl:text-[16px] text-[#4F4F4F] leading-[22px]'>Toasted French bread topped with romano, cheddar </p>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#828282]'>560 CAL</p>
                   </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                   <Image src={menu2} alt='menu1' className='w-[80px] h-[80px]' />
                   <div className='flex flex-col gap-1'>
                    <div className='flex justify-between gap-12'>
                      <h1 className='font-bold text-[16px] md:text-[20px] lg:text-[22px] xl:text-[2] leading-[28px] text-[#333333] hover:text-[#FF9F0D]'>Alder Grilled Chinook Salmon</h1>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#FF9F0D]'>12.5$</p>
                      </div>
                      <p className='font-normal text-[12px] md:text-[14px] lg:xl:text-[16px] text-[#4F4F4F] leading-[22px]'>Toasted French bread topped with romano, cheddar </p>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#828282]'>560 CAL</p>
                   </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                   <Image src={menu3} alt='menu1' className='w-[80px] h-[80px]' />
                   <div className='flex flex-col gap-1'>
                    <div className='flex justify-between gap-12'>
                      <h1 className='font-bold text-[16px] md:text-[20px] lg:text-[22px] xl:text-[2] leading-[28px] text-[#333333] hover:text-[#FF9F0D]'>Alder Grilled Chinook Salmon</h1>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#FF9F0D]'>12.5$</p>
                      </div>
                      <p className='font-normal text-[12px] md:text-[14px] lg:xl:text-[16px] text-[#4F4F4F] leading-[22px]'>Toasted French bread topped with romano, cheddar </p>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#828282]'>560 CAL</p>
                   </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                   <Image src={menu4} alt='menu1' className='w-[80px] h-[80px]' />
                   <div className='flex flex-col gap-1'>
                    <div className='flex justify-between gap-12'>
                      <h1 className='font-bold text-[16px] md:text-[20px] lg:text-[22px] xl:text-[2] leading-[28px] text-[#333333] hover:text-[#FF9F0D]'>Alder Grilled Chinook Salmon</h1>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#FF9F0D]'>12.5$</p>
                      </div>
                      <p className='font-normal text-[12px] md:text-[14px] lg:xl:text-[16px] text-[#4F4F4F] leading-[22px]'>Toasted French bread topped with romano, cheddar </p>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#828282]'>560 CAL</p>
                   </div>
                </div>
            </div>

           
            
           
              
           {/* product3 */}
            
           <div className=' flex-col gap-8 flex justify-center items-center  cursor-pointer '>
            <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                   <Image src={menu3} alt='menu1' className='w-[80px] h-[80px]' />
                   <div className='flex flex-col gap-1'>
                    <div className='flex justify-between gap-12'>
                      <h1 className='font-bold text-[16px] md:text-[20px] lg:text-[22px] xl:text-[2] leading-[28px] text-[#333333] hover:text-[#FF9F0D]'>Alder Grilled Chinook Salmon</h1>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#FF9F0D]'>12.5$</p>
                      </div>
                      <p className='font-normal text-[12px] md:text-[14px] lg:xl:text-[16px] text-[#4F4F4F] leading-[22px]'>Toasted French bread topped with romano, cheddar </p>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#828282]'>560 CAL</p>
                   </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                   <Image src={menu4} alt='menu1' className='w-[80px] h-[80px]' />
                   <div className='flex flex-col gap-1'>
                    <div className='flex justify-between gap-12'>
                      <h1 className='font-bold text-[16px] md:text-[20px] lg:text-[22px] xl:text-[2] leading-[28px] text-[#333333] hover:text-[#FF9F0D]'>Alder Grilled Chinook Salmon</h1>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#FF9F0D]'>12.5$</p>
                      </div>
                      <p className='font-normal text-[12px] md:text-[14px] lg:xl:text-[16px] text-[#4F4F4F] leading-[22px]'>Toasted French bread topped with romano, cheddar </p>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#828282]'>560 CAL</p>
                   </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                   <Image src={menu1} alt='menu1' className='w-[80px] h-[80px]' />
                   <div className='flex flex-col gap-1'>
                    <div className='flex justify-between gap-12'>
                      <h1 className='font-bold text-[16px] md:text-[20px] lg:text-[22px] xl:text-[2] leading-[28px] text-[#333333] hover:text-[#FF9F0D]'>Alder Grilled Chinook Salmon</h1>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#FF9F0D]'>12.5$</p>
                      </div>
                      <p className='font-normal text-[12px] md:text-[14px] lg:xl:text-[16px] text-[#4F4F4F] leading-[22px]'>Toasted French bread topped with romano, cheddar </p>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#828282]'>560 CAL</p>
                   </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                   <Image src={menu2} alt='menu1' className='w-[80px] h-[80px]' />
                   <div className='flex flex-col gap-1'>
                    <div className='flex justify-between gap-12'>
                      <h1 className='font-bold text-[16px] md:text-[20px] lg:text-[22px] xl:text-[2] leading-[28px] text-[#333333] hover:text-[#FF9F0D]'>Alder Grilled Chinook Salmon</h1>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#FF9F0D]'>12.5$</p>
                      </div>
                      <p className='font-normal text-[12px] md:text-[14px] lg:xl:text-[16px] text-[#4F4F4F] leading-[22px]'>Toasted French bread topped with romano, cheddar </p>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#828282]'>560 CAL</p>
                   </div>
                </div>
            </div>

            
          </div>



           </div>

        </div>
      {/* view more */}
     <div className='flex items-center justify-center '>
      <button className='font-normal text-[16px] text-[#FF9F0D] border border-[#FF9F0D] px-4 py-2 mt-10 mb-10 lg:xl:mb-20'>View menu</button>
     </div>
      
</div>
    </div>
  )
}

export default page
