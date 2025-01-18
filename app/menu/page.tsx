import React from 'react';
import Link from 'next/link';
import Service from '@/components/HeroSection/Service';
import bgpages from '@/public/images/bgpages.png';
import Image from 'next/image'; 
import starter from '@/public/images/starter.png';
import main from '@/public/images/main.png';
import dessert from '@/public/images/dessert.png';
import drink from '@/public/images/drink.png';
import partners from '@/public/images/partners.png';
const page = () => {
  return (
    <div className='bg-white'>
         <section className=' w-full bg-cover  bg-center mt-3 '>
       <div className='relative flex justify-center items-center'>
       <Image src={bgpages} alt='bgpages'/>
      <div className='container absolute mx-auto px-4'>
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
            Our Menu
          </h1>
          <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
            <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
              Home
            </Link>
            <span className='text-white'>/</span>
            <Link href="/menu" className='text-[#FF9F0D]'>
             Menu
            </Link>
          </div>
        </div>
      </div>
      </div>
    </section>
      <div>
        {/* starter */}
        <div className='w-full flex justify-center  pb-10  '>
        <div className=' w-[80%] flex justify-between max-sm:flex-col '>
            <div>
        
            <Image src={starter} alt='starter' className='px-10 max-sm:px-5 py-14'/>
            </div>
            <div className=' flex-col gap-8 flex justify-center items-start  cursor-pointer md:mt-10 '>
            <h1 className='font-bold text-[24px] md:text-[32px]  lg:xl:text-[48px] text-[#333333]'>Starter Menu</h1>
            <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
    
                  
                   <div className='flex flex-col gap-1'>
                    <div className='flex  justify-between w-[280px] md:lg:xl:w-[500px]'>
                      <h1 className='font-bold text-[16px] md:text-[20px] lg:text-[22px] xl:text-[2] leading-[28px] text-[#333333] hover:text-[#FF9F0D]'>Alder Grilled Chinook Salmon</h1>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#FF9F0D]'>32$</p>
                      </div>
                      <p className='font-normal text-[12px] md:text-[14px] lg:xl:text-[16px] text-[#4F4F4F] leading-[22px]'>Toasted French bread topped with romano, cheddar </p>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#828282]'>560 CAL</p>
                   </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                  
                   <div className='flex flex-col gap-1'>
                    <div className='flex justify-between w-[280px] md:lg:xl:w-[500px]'>
                      <h1 className='font-bold text-[16px] md:text-[20px] lg:text-[22px] xl:text-[2] leading-[28px] text-[#333333] hover:text-[#FF9F0D]'>Berries and creme tart</h1>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#FF9F0D]'>43$</p>
                      </div>
                      <p className='font-normal text-[12px] md:text-[14px] lg:xl:text-[16px] text-[#4F4F4F] leading-[22px]'>Gorgonzola, ricotta, mozzarella, taleggio </p>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#828282]'>700 CAL</p>
                   </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                  
                   <div className='flex flex-col gap-1'>
                    <div className='flex justify-between  w-[280px] md:lg:xl:w-[500px]'>
                      <h1 className='font-bold text-[16px] md:text-[20px] lg:text-[22px] xl:text-[2] leading-[28px] text-[#333333] hover:text-[#FF9F0D]'>Tormentoso Bush Pizza Pintoage</h1>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#FF9F0D]'>14$</p>
                      </div>
                      <p className='font-normal text-[12px] md:text-[14px] lg:xl:text-[16px] text-[#4F4F4F] leading-[22px]'>Ground cumin, avocados, peeled and cubed </p>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#828282]'>1000 CAL</p>
                   </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                  
                   <div className='flex flex-col gap-1'>
                    <div className='flex justify-between w-[280px] md:lg:xl:w-[500px]'>
                      <h1 className='font-bold text-[16px] md:text-[20px] lg:text-[22px] xl:text-[2] leading-[28px] text-[#333333] hover:text-[#FF9F0D]'>Spicy Vegan Potato Curry</h1>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#FF9F0D]'>35$</p>
                      </div>
                      <p className='font-normal text-[12px] md:text-[14px] lg:xl:text-[16px] text-[#4F4F4F] leading-[22px]'>Spreadable cream cheese, crumbled blue cheese</p>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#828282]'>560 CAL</p>
                   </div>
                </div>
            </div>


        </div>
    </div>
    {/* Main  */}
    <div className='w-full flex justify-center  pb-10  '>
        <div className=' w-[80%] flex justify-between max-sm:flex-col '>
           
            <div className=' flex-col gap-8 flex justify-center items-start  cursor-pointer md:mt-10 order-1 max-sm:order-2'>
            <h1 className='font-bold text-[24px] md:text-[32px]  lg:xl:text-[48px] text-[#333333]'>Main Course</h1>
            <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
    
                  
                   <div className='flex flex-col gap-1'>
                    <div className='flex  justify-between w-[280px] md:lg:xl:w-[500px]'>
                      <h1 className='font-bold text-[16px] md:text-[20px] lg:text-[22px] xl:text-[2] leading-[28px] text-[#333333] hover:text-[#FF9F0D]'>Optic Big Breakfast Combo Menu</h1>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#FF9F0D]'>32$</p>
                      </div>
                      <p className='font-normal text-[12px] md:text-[14px] lg:xl:text-[16px] text-[#4F4F4F] leading-[22px]'>Toasted French bread topped with romano, cheddar </p>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#828282]'>560 CAL</p>
                   </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                  
                   <div className='flex flex-col gap-1'>
                    <div className='flex justify-between w-[280px] md:lg:xl:w-[500px]'>
                      <h1 className='font-bold text-[16px] md:text-[20px] lg:text-[22px] xl:text-[2] leading-[28px] text-[#333333] hover:text-[#FF9F0D]'>Cashew Chicken With Stir-Fry</h1>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#FF9F0D]'>43$</p>
                      </div>
                      <p className='font-normal text-[12px] md:text-[14px] lg:xl:text-[16px] text-[#4F4F4F] leading-[22px]'>Gorgonzola, ricotta, mozzarella, taleggio </p>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#828282]'>700 CAL</p>
                   </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                  
                   <div className='flex flex-col gap-1'>
                    <div className='flex justify-between  w-[280px] md:lg:xl:w-[500px]'>
                      <h1 className='font-bold text-[16px] md:text-[20px] lg:text-[22px] xl:text-[2] leading-[28px] text-[#333333] hover:text-[#FF9F0D]'> Vegetables & Green Salad</h1>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#FF9F0D]'>14$</p>
                      </div>
                      <p className='font-normal text-[12px] md:text-[14px] lg:xl:text-[16px] text-[#4F4F4F] leading-[22px]'>Ground cumin, avocados, peeled and cubed </p>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#828282]'>1000 CAL</p>
                   </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                  
                   <div className='flex flex-col gap-1'>
                    <div className='flex justify-between w-[280px] md:lg:xl:w-[500px]'>
                      <h1 className='font-bold text-[16px] md:text-[20px] lg:text-[22px] xl:text-[2] leading-[28px] text-[#333333] hover:text-[#FF9F0D]'>Spicy Vegan Potato Curry</h1>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#FF9F0D]'>35$</p>
                      </div>
                      <p className='font-normal text-[12px] md:text-[14px] lg:xl:text-[16px] text-[#4F4F4F] leading-[22px]'>Spreadable cream cheese, crumbled blue cheese</p>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#828282]'>560 CAL</p>
                   </div>
                </div>
            </div>
            <div className='order-2 max-sm:order-1'>
        
        <Image src={main} alt='main' className='px-10 max-sm:px-5 py-14 '/>
        </div>

        </div>
    </div>
    {/* service */}
    <div className='bg-black'>
      <Service />
      </div>
    {/* dessert */}
    <div className='w-full flex justify-center  pb-10  '>
        <div className=' w-[80%] flex justify-between max-sm:flex-col '>
            <div>
        
            <Image src={dessert} alt='dessert' className='px-10 max-sm:px-5 py-14'/>
            </div>
            <div className=' flex-col gap-8 flex justify-center items-start  cursor-pointer md:mt-10 '>
            <h1 className='font-bold text-[24px] md:text-[32px]  lg:xl:text-[48px] text-[#333333]'>Dessert</h1>
            <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
    
                  
                   <div className='flex flex-col gap-1'>
                    <div className='flex  justify-between w-[280px] md:lg:xl:w-[500px]'>
                      <h1 className='font-bold text-[16px] md:text-[20px] lg:text-[22px] xl:text-[2] leading-[28px] text-[#333333] hover:text-[#FF9F0D]'>Fig and lemon cake</h1>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#FF9F0D]'>32$</p>
                      </div>
                      <p className='font-normal text-[12px] md:text-[14px] lg:xl:text-[16px] text-[#4F4F4F] leading-[22px]'>Toasted French bread topped with romano, cheddar </p>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#828282]'>560 CAL</p>
                   </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                  
                   <div className='flex flex-col gap-1'>
                    <div className='flex justify-between w-[280px] md:lg:xl:w-[500px]'>
                      <h1 className='font-bold text-[16px] md:text-[20px] lg:text-[22px] xl:text-[2] leading-[28px] text-[#333333] hover:text-[#FF9F0D]'>Pastry, blueberries, lemon juice</h1>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#FF9F0D]'>43$</p>
                      </div>
                      <p className='font-normal text-[12px] md:text-[14px] lg:xl:text-[16px] text-[#4F4F4F] leading-[22px]'>Gorgonzola, ricotta, mozzarella, taleggio </p>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#828282]'>700 CAL</p>
                   </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                  
                   <div className='flex flex-col gap-1'>
                    <div className='flex justify-between  w-[280px] md:lg:xl:w-[500px]'>
                      <h1 className='font-bold text-[16px] md:text-[20px] lg:text-[22px] xl:text-[2] leading-[28px] text-[#333333] hover:text-[#FF9F0D]'>Pain au chocolat</h1>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#FF9F0D]'>14$</p>
                      </div>
                      <p className='font-normal text-[12px] md:text-[14px] lg:xl:text-[16px] text-[#4F4F4F] leading-[22px]'>Ground cumin, avocados, peeled and cubed </p>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#828282]'>1000 CAL</p>
                   </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                  
                   <div className='flex flex-col gap-1'>
                    <div className='flex justify-between w-[280px] md:lg:xl:w-[500px]'>
                      <h1 className='font-bold text-[16px] md:text-[20px] lg:text-[22px] xl:text-[2] leading-[28px] text-[#333333] hover:text-[#FF9F0D]'>Creamy mascarpone cake</h1>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#FF9F0D]'>35$</p>
                      </div>
                      <p className='font-normal text-[12px] md:text-[14px] lg:xl:text-[16px] text-[#4F4F4F] leading-[22px]'>Spreadable cream cheese, crumbled blue cheese</p>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#828282]'>560 CAL</p>
                   </div>
                </div>
            </div>


        </div>
    </div>
     {/* drinks */}
     <div className='w-full flex justify-center  pb-10  '>
        <div className=' w-[80%] flex justify-between max-sm:flex-col '>
           
            <div className=' flex-col gap-8 flex justify-center items-start  cursor-pointer md:mt-10 order-1 max-sm:order-2'>
            <h1 className='font-bold text-[24px] md:text-[32px]  lg:xl:text-[48px] text-[#333333]'>Drinks</h1>
            <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
    
                  
                   <div className='flex flex-col gap-1'>
                    <div className='flex  justify-between w-[280px] md:lg:xl:w-[500px]'>
                      <h1 className='font-bold text-[16px] md:text-[20px] lg:text-[22px] xl:text-[2] leading-[28px] text-[#333333] hover:text-[#FF9F0D]'>Caffè macchiato</h1>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#FF9F0D]'>32$</p>
                      </div>
                      <p className='font-normal text-[12px] md:text-[14px] lg:xl:text-[16px] text-[#4F4F4F] leading-[22px]'>Toasted French bread topped with romano, cheddar </p>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#828282]'>560 CAL</p>
                   </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                  
                   <div className='flex flex-col gap-1'>
                    <div className='flex justify-between w-[280px] md:lg:xl:w-[500px]'>
                      <h1 className='font-bold text-[16px] md:text-[20px] lg:text-[22px] xl:text-[2] leading-[28px] text-[#333333] hover:text-[#FF9F0D]'>Aperol Spritz Capaciannoy</h1>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#FF9F0D]'>43$</p>
                      </div>
                      <p className='font-normal text-[12px] md:text-[14px] lg:xl:text-[16px] text-[#4F4F4F] leading-[22px]'>Gorgonzola, ricotta, mozzarella, taleggio </p>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#828282]'>700 CAL</p>
                   </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                  
                   <div className='flex flex-col gap-1'>
                    <div className='flex justify-between  w-[280px] md:lg:xl:w-[500px]'>
                      <h1 className='font-bold text-[16px] md:text-[20px] lg:text-[22px] xl:text-[2] leading-[28px] text-[#333333] hover:text-[#FF9F0D]'> Caffe Latte Campuri</h1>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#FF9F0D]'>14$</p>
                      </div>
                      <p className='font-normal text-[12px] md:text-[14px] lg:xl:text-[16px] text-[#4F4F4F] leading-[22px]'>Ground cumin, avocados, peeled and cubed </p>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#828282]'>1000 CAL</p>
                   </div>
                </div>

                <div className='flex flex-row justify-center items-center gap-2 text-[14px] lg:text-[16px] '>
                  
                   <div className='flex flex-col gap-1'>
                    <div className='flex justify-between w-[280px] md:lg:xl:w-[500px]'>
                      <h1 className='font-bold text-[16px] md:text-[20px] lg:text-[22px] xl:text-[2] leading-[28px] text-[#333333] hover:text-[#FF9F0D]'>Tormentoso BushTea Pintoage</h1>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#FF9F0D]'>35$</p>
                      </div>
                      <p className='font-normal text-[12px] md:text-[14px] lg:xl:text-[16px] text-[#4F4F4F] leading-[22px]'>Spreadable cream cheese, crumbled blue cheese</p>
                      <p className='font-bold text-[12px] md:text-[14px] lg:xl:text-[16px] leading-[26px] text-[#828282]'>560 CAL</p>
                   </div>
                </div>
            </div>
            <div className='order-2 max-sm:order-1'>
        
        <Image src={drink} alt='drink' className='px-10 max-sm:px-5 py-14 '/>
        </div>

        </div>
    </div>
    {/* partners */}
    <div className='flex items-center justify-center flex-col gap-16'>
      <div className='flex flex-col gap-4'>
      
        <p className='text-center font-normal text-[12px] md:text-[12px] lg:xl:text-[16px]'>Partners & Clients</p>
        <h1 className=' text-center font-bold text-[26px] md:text-[36px] lg:xl:text-[48px]'>We work with the best people</h1>
      </div>
      <Image src={partners} alt='partners' width={700} height={398} className='pb-10 max-sm:px-3'/>
    </div>

    </div>
      </div>

      
  
  )
}

export default page
