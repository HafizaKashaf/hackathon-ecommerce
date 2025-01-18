// import Common from '@/components/HeroSection/Common'
// import React from 'react';
// import Image from 'next/image';

import Common from "@/components/HeroSection/Common";
import { sanityFetch } from "@/sanity/lib/fetch";
import { allchefs } from "@/sanity/lib/queries";
import Image from "next/image";



type Chef = {
    _id: string;           // Unique identifier for the chef document
    name: string;          // Chef's name
    position: string;      // Position or role of the chef
    experience: number;    // Years of experience the chef has
    specialty: string;     // Chef's area of expertise (e.g., Italian, Pastry)
    image: { asset: { _id: string; url: string } };          // Image associated with the chef, with optional asset ID and URL
    description: string;   // A short bio or description of the chef

  };


  export default async function Page() {
     const chefs : Chef[] = await sanityFetch({query: allchefs})

     return(
       
        <div>
             <Common title='Our Chef' subtitle='Chef' />
             <div className='w-full flex justify-center  pb-10 bg-white '>
//       <div className=' w-[80%] flex justify-center  '>

           <div className="grid gap-2 grid-cols-1  md:grid-cols-3 justify-center items-center my-12">
            {
             chefs.map((chef)=>(
                    <div className=" p-4" key={chef._id}>
                        <Image src={chef.image.asset.url}  alt={chef.name} width={200} height={200} className="w-full h-[80%] object-cover"/>
                        <div className="p-2">
                        <h2 className="text-xl font-bold mt-4 mb-2">{chef.name}</h2>
                        <div className="flex flex-col gap-2 ">
                        <p className="text-sm">
                        <strong className="font-semibold">Position:</strong> {chef.position}
                         </p>
                        <p className="text-sm">
                         <strong className="font-semibold">Experience:</strong> {chef.experience} years
                        </p>
                        <p className="text-sm">
                        <strong className="font-semibold">Specialty:</strong> {chef.specialty}
                        </p>
                       <p className="text-sm">
                       <strong className="font-semibold">Description:</strong> {chef.description}
                       </p>
                       </div>
                       </div>
                       

                    </div>
                ))
            }
           </div>
           </div>
           </div>
        </div>
     )
  }
  


// interface Chef {
//     id: number;
//     Image :string ;
//     name:string;
//     title :string;
// }

// const page = () => {

//     const chefData: Chef[] =[
//         {
//             id:1,
//             Image :"/images/chef1.png",
//             name: "Tahmina Rumi",
//             title:"Chef"
//         },
//         {
//             id:2,
//             Image :"/images/chef2.png",
//             name: "Jorina Begum",
//             title:"Chef"
//         },
//         {
//             id:3,
//             Image :"/images/chef3.png",
//             name: "M.Mohammad",
//             title:"Chef"
//         },
//         {
//             id:4,
//             Image :"/images/chef4.png",
//             name: "Munna Kathy",
//             title:"Chef"
//         },
//         {
//             id:5,
//             Image :"/images/chef5.png",
//             name: "Tahmina Rumi",
//             title:"Chef"
//         },
//         {
//             id:6,
//             Image :"/images/chef6.png",
//             name: "Bisnu devgon",
//             title:"Chef"
//         },
//         {
//             id:7,
//             Image :"/images/chef7.png",
//             name: "MotinMolladsf",
//             title:"Chef"
//         },
//         {
//             id:8,
//             Image :"/images/chef8.png",
//             name: "William Rumi",
//             title:"Chef"
//         },
//         {
//             id:9,
//             Image :"/images/chef9.png",
//             name: "Kets william roy",
//             title:"Chef"
//         },
//         {
//             id:10,
//             Image :"/images/chef10.png",
//             name: "Mahmud Kholil",
//             title:"Chef"
//         },
//         {
//             id:11,
//             Image :"/images/chef11.png",
//             name: "Ataur Rahman",
//             title:"Chef"
//         },
//         {
//             id:12,
//             Image :"/images/chef12.png",
//             name: "Monalisa Holly",
//             title:"Chef"
//         }
//     ]
//   return (
//     <div>
//       <Common title='Our Chef' subtitle='Chef' />
//       {/* Content */}

//       <div className='w-full flex justify-center  pb-10 bg-white '>
//       <div className=' w-[80%] flex justify-center  '>

//         <div className='grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center items-center my-12'>
//             {chefData.map((item,index) => (
//                 <div key={index} className='w-auto h-auto p-4 shadow-lg rounded-lg mx-auto '>
//                     <Image 
//                      src={item.Image}
//                      alt={item.name} 
//                      width={300}
//                      height={380}
//                      className='object-cover mb-4  '/>
//                      <h2 className='text-bold text-[20px] leading-7 text-center'>{item.name}</h2>
//                      <p className='font-normal text-[14px] text-center'>{item.title}</p>

//                 </div>
//             ))
            
            
//             }
//         </div>





//         </div>
//       </div>



//     </div>
//   )
// }

// export default page









