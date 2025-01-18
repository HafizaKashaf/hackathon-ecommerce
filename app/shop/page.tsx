import Link from 'next/link'
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaRegThumbsUp } from 'react-icons/fa'
import { IoMdShareAlt } from 'react-icons/io'
import { LiaCommentDots } from 'react-icons/lia'



const page = () => {
  return (
    <div className='bg-white'>
         <section className=' w-full bg-cover  bg-center mt-3 '>
       <div className='relative flex justify-center items-center'>
       <img src="/images/bgpages.png" alt='bgpages'/>
      <div className='container absolute mx-auto px-4'>
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white font-bold text-center mb-4 sm:mb-6'>
             Our Shop
          </h1>
          <div className='text-base sm:text-lg md:text-xl flex gap-2 text-center justify-center'>
            <Link href="/" className='text-white hover:text-[#FF9F0D] transition-colors duration-300'>
              Home
            </Link>
            <span className='text-white'>/</span>
            <Link href="/shop" className='text-[#FF9F0D]'>
             Shop
            </Link>
          </div>
        </div>
      </div>
      </div>
    </section>
     {/*  */}
     <div>
     <div className='w-full flex justify-center  pb-10 pt-10 '>
     <div className=' w-[80%] flex justify-between max-sm:flex-col gap-10 '>
        {/* left */}
        <div className='flex flex-col'>
            <div className='flex flex-row gap-10 max-sm:flex-col max-sm:gap-2 items-start'>
                  <div className='flex items-center justify-center gap-[20px]'>
                    <h1 className='max-sm:text-[16px]'>Sort By :</h1>
                        <div className=' h-[46px] max-sm:h-[30px] border-[1.5px]   flex justify-between px-3 items-center gap-5 '>
                        <input type='text' placeholder='Newest' className=' outline-none rounded  placeholder:text-[16px] max-sm:w-[100px] w-[130px] h-[24px]'/>
                               <button>
                                < CiSearch className='w-[24px] h-[20px]'/>
                               </button>
                        </div>
                         </div>
                          <div className='flex items-center justify-center gap-[32px]'>
                            <h1  className='max-sm:text-[16px]'>  Show : </h1>
                                <div className='  h-[46px] max-sm:h-[30px] border-[1.5px]  flex justify-between px-3 items-center gap-5 '>
                                <input type='text' placeholder='Default' className=' outline-none rounded placeholder:text-[16px] max-sm:w-[100px] w-[130px] h-[24px]'/>
                                       <button>
                                        < CiSearch className='w-[24px] h-[20px]'/>
                                       </button>
                                </div>
                                </div>

            </div>
            {/* shop items */}
            <div className='flex flex-col mt-5'>
               {/* products */}
           <div className='flex justify-evenly flex-row gap-[20px]   max-sm:grid max-sm:grid-col-1 md:grid-col-2 lg:grid-cols-3  py-2'>
            {/* product1 */} 
            <div className=' flex justify-center gap-3 items-start  flex-col  '>
                <img src="/images/food1.png" alt='food' className='hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'/>
                <div className='flex flex-col gap-2 
                '><h1 className=' font-bold text-[20px] leading-[32px]'>Chicken Chup</h1>
                    <p className='text-[#FF9F0D]'>12$</p>
                    
                  
                </div>
           
            </div>

            {/* product2 */}
           
            <div className='   flex justify-center gap-3 items-start flex-col '>
           <img src="/images/food2.png"  alt='food2' className='hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'/>
           <div className=' flex flex-col gap-2 
                '><h1 className=' font-bold text-[20px] leading-[32px]'>Country Burger</h1>
                    <p className='text-[#FF9F0D]'>21$</p>
                   
                   
                    </div>
                </div>
            
           
              
           {/* product3 */}
            
           <div className='flex justify-center gap-3 items-start flex-col '>
            <img src="/images/food3.png"  alt='food1' className=' hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'/>
            <div className=' flex flex-col gap-2
                '><h1 className=' font-bold text-[20px] leading-[32px]'>Fresh Lime</h1>
                    <p className='text-[#FF9F0D]'>38$</p>
                    
                    
                </div>
           
            </div>
           </div>
           {/* row2 */}
           <div className='flex justify-evenly flex-row gap-[20px]   max-sm:grid max-sm:grid-col-1 md:grid-col-2 lg:grid-cols-3 py-2'>
            {/* product1 */} 
            <div className='flex justify-center gap-3 items-start flex-col '>
            <img src="/images/food3.png"  alt='food1' className=' hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'/>
            <div className=' flex flex-col gap-2
                '><h1 className=' font-bold text-[20px] leading-[32px]'>Fresh Lime</h1>
                    <p className='text-[#FF9F0D]'>38$</p>
                    
                    
                </div>
           
            </div>

            {/* product2 */}
           
            <div className=' flex justify-center gap-3 items-start  flex-col  '>
                <img src="/images/food1.png" alt='food' className='hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'/>
                <div className='flex flex-col gap-2 
                '><h1 className=' font-bold text-[20px] leading-[32px]'>Chicken Chup</h1>
                    <p className='text-[#FF9F0D]'>12$</p>
                    
                  
                </div>
           
            </div>
           
              
            <div className='   flex justify-center gap-3 items-start flex-col '>
           <img src="/images/food2.png"  alt='food2' className='hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'/>
           <div className=' flex flex-col gap-2 
                '><h1 className=' font-bold text-[20px] leading-[32px]'>Country Burger</h1>
                    <p className='text-[#FF9F0D]'>21$</p>
                   
                   
                    </div>
                </div>
            
          


           </div>
           {/* row3 */}
           <div className='flex justify-evenly flex-row gap-[20px]   max-sm:grid max-sm:grid-col-1 md:grid-col-2 lg:grid-cols-3 py-2'>
                         {/* product1 */} 
                         <div className='flex justify-center gap-3 items-start flex-col'>
            <img src="/images/food3.png"  alt='food1' className=' hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'/>
            <div className=' flex flex-col gap-2
                '><h1 className=' font-bold text-[20px] leading-[32px]'>Fresh Lime</h1>
                    <p className='text-[#FF9F0D]'>38$</p>
                    
                    
                </div>
           
            </div>

            {/* product2 */}
           
            <div className='   flex justify-center gap-3 items-start flex-col '>
           <img src="/images/food2.png"  alt='food2' className='hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'/>
           <div className=' flex flex-col gap-2 
                '><h1 className=' font-bold text-[20px] leading-[32px]'>Country Burger</h1>
                    <p className='text-[#FF9F0D]'>21$</p>
                   
                   
                    </div>
                </div>
            
            
           
              
           {/* product3 */}
            
           <div className=' flex justify-center gap-3 items-start  flex-col  '>
                <img src="/images/food1.png" alt='food' className='hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'/>
                <div className='flex flex-col gap-2 
                '><h1 className=' font-bold text-[20px] leading-[32px]'>Chicken Chup</h1>
                    <p className='text-[#FF9F0D]'>12$</p>
                    
                  
                </div>
           
            </div>
          


           </div>
           {/* row4 */}
           <div className='flex justify-evenly flex-row gap-[20px]   max-sm:grid max-sm:grid-col-1 md:grid-col-2 lg:grid-cols-3 py-2'>
           <div className=' flex justify-center gap-3 items-start  flex-col  '>
                <img src="/images/food1.png" alt='food' className='hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'/>
                <div className='flex flex-col gap-2 
                '><h1 className=' font-bold text-[20px] leading-[32px]'>Chicken Chup</h1>
                    <p className='text-[#FF9F0D]'>12$</p>
                    
                  
                </div>
           
            </div>

            {/* product1 */} 
            <div className='flex justify-center gap-3 items-start flex-col'>
            <img src="/images/food3.png"  alt='food1' className=' hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'/>
            <div className=' flex flex-col gap-2
                '><h1 className=' font-bold text-[20px] leading-[32px]'>Fresh Lime</h1>
                    <p className='text-[#FF9F0D]'>38$</p>
                    
                    
                </div>
           
            </div>
            
           {/* product3 */}
                <div className='   flex justify-center gap-3 items-start flex-col '>
           <img src="/images/food2.png"  alt='food2' className='hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105'/>
           <div className=' flex flex-col gap-2 
                '><h1 className=' font-bold text-[20px] leading-[32px]'>Country Burger</h1>
                    <p className='text-[#FF9F0D]'>21$</p>
                   
                   
                    </div>
                </div>
            
          


           </div>
            </div>

        

        </div>
        
        {/* right */}

        <div className='flex flex-col py-10'>
             <div className='  h-[50px] border-[1.5px]  pl-3 flex justify-between items-center gap-5 '>
                    <input type='text' placeholder='search ...' className='outline-none  placeholder:text-[16px] w-[130px] h-[24px]'/>
                    <button className='bg-[#FF9F0D] px-2 h-full'>
                            < CiSearch className='w-[24px] h-[24px]'/>
                           </button>

                    </div>
                    {/* categary */}
                    <div className='flex flex-col'>
                        <h1 className='font-bold'>Category</h1>

                    </div>
                
        </div>

     </div>
     </div>
      </div>
      </div>
  )
}

export default page
