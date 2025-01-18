import Common from '@/components/HeroSection/Common'
import React from 'react';
import Image from 'next/image';


interface Chef {
    id: number;
    Image :string ;
    name:string;
    title :string;
}

const page = () => {

    const chefData: Chef[] =[
        {
            id:1,
            Image :"/images/chef1.png",
            name: "Tahmina Rumi",
            title:"Chef"
        },
        {
            id:2,
            Image :"/images/chef2.png",
            name: "Jorina Begum",
            title:"Chef"
        },
        {
            id:3,
            Image :"/images/chef3.png",
            name: "M.Mohammad",
            title:"Chef"
        },
        {
            id:4,
            Image :"/images/chef4.png",
            name: "Munna Kathy",
            title:"Chef"
        },
        {
            id:5,
            Image :"/images/chef5.png",
            name: "Tahmina Rumi",
            title:"Chef"
        },
        {
            id:6,
            Image :"/images/chef6.png",
            name: "Bisnu devgon",
            title:"Chef"
        },
        {
            id:7,
            Image :"/images/chef7.png",
            name: "MotinMolladsf",
            title:"Chef"
        },
        {
            id:8,
            Image :"/images/chef8.png",
            name: "William Rumi",
            title:"Chef"
        },
        {
            id:9,
            Image :"/images/chef9.png",
            name: "Kets william roy",
            title:"Chef"
        },
        {
            id:10,
            Image :"/images/chef10.png",
            name: "Mahmud Kholil",
            title:"Chef"
        },
        {
            id:11,
            Image :"/images/chef11.png",
            name: "Ataur Rahman",
            title:"Chef"
        },
        {
            id:12,
            Image :"/images/chef12.png",
            name: "Monalisa Holly",
            title:"Chef"
        }
    ]
  return (
    <div>
      <Common title='Our Chef' subtitle='Chef' />
      {/* Content */}

      <div className='w-full flex justify-center  pb-10 bg-white '>
      <div className=' w-[80%] flex justify-center  '>

        <div className='grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center items-center my-12'>
            {chefData.map((item,index) => (
                <div key={index} className='w-auto h-auto p-4 shadow-lg rounded-lg mx-auto '>
                    <Image 
                     src={item.Image}
                     alt={item.name} 
                     width={300}
                     height={380}
                     className='object-cover mb-4  '/>
                     <h2 className='text-bold text-[20px] leading-7 text-center'>{item.name}</h2>
                     <p className='font-normal text-[14px] text-center'>{item.title}</p>

                </div>
            ))
            
            
            }
        </div>





        </div>
      </div>



    </div>
  )
}

export default page
