import React from 'react'
import Image from 'next/image'

import { IoSearch } from "react-icons/io5";
import { FaStar } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";


interface Data {
    id: number;
    img: string;
    date: string;
    des: string
}
interface Data1 {
    id: number;
    img: string;
    title: string;
    review: number
}
const Rightside = () => {
    const data: Data[] = [
        {
            id: 1,
            img: "/bl-1.png",
            date: "June 22, 2020",
            des: "Lorem ipsum dolor sit cing elit, sed do.",
        },
        {
            id: 2,
            img: "/bl-2.png",
            date: "June 22, 2020",
            des: "Lorem ipsum dolor sit cing elit, sed do.",
        },
        {
            id: 3,
            img: "/bl-3.png",
            date: "June 22, 2020",
            des: "Lorem ipsum dolor sit cing elit, sed do.",
        },
        {
            id: 4,
            img: "/bl-4.png",
            date: "June 22, 2020",
            des: "Lorem ipsum dolor sit cing elit, sed do.",
        }
    ]
    const data1: Data1[] = [
        {
            id: 1,
            img: "/by-1.png",
            title: "Chicken Fry",
            review: 26
        },
        {
            id: 2,
            img: "/by-2.png",
            title: "Burger Food",
            review: 46
        },
        {
            id: 3,
            img: "/by-3.png",
            title: "Pizza",
            review: 16
        },
        {
            id: 4,
            img: "/by-4.png",
            title: "Fresh Fruits",
            review: 36
        },
        {
            id: 5,
            img: "/foodpic3.jpeg",
            title: "Vegetables",
            review: 16
        }
    ]


    return (
        <div className='md:max-w-[424px] h-fit px-8 my-12'>

            <button className='flex md:max-w-[422px] h-[71px] my-4 border-gray-300 border-[1px] rounded-[2px]'><input type='text' placeholder='Search Your Keword..' className='p-5' />
                <span className='w-[77px] h-[70px] bg-[#FF9f0D] text-white ml-10 rounded-[2px]'><IoSearch size={24} className='ml-6 mt-6' /></span></button>

            {/* second div */}
            <div className='md:max-w-[424px] w-full h-[423px] mb-5 p-8 border-2 border-gray-300'>
                <div className='w-[322px] h-[357px] space-y-2 px-4  '>
                    <Image src="/man-business-suit-emotions-different-surfaces-2.png" alt='Client' width={148} height={130} className='rounded-full ml-11'></Image>
                    <h2 className='flex text-center text-[20px] font-bold mt-6 ml-14 '>Prince Miyako
                    </h2>
                    <p className='flex items-center text-[#828282] ml-11'>Blogger/Photographer</p>
                    <p className='flex gap-4 '>
                        <span className='flex gap-1 text-[#FF9f0D] mt-1 ml-11'>
                            <FaStar size={14} />
                            <FaStar size={14} />
                            <FaStar size={14} />
                            <FaStar size={14} />
                            <FaStar size={14} />
                        </span>
                        <span className='text-[#828282]'>( 1 Review)</span>
                    </p>
                    <p className='w-[322px] flex justify-between text-[#828282]'>Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit.Veritatis distinctio, odio
                        eligendi suscipit reprehenderit atque</p>
                    <span className='flex justify-center gap-2 mr-8 '>
                        <FaFacebookF size={20} />
                        <IoLogoTwitter size={20} />
                        <FaInstagram size={20} />
                        <FaPinterest size={20} />
                    </span>
                </div>

            </div>

            {/* third div */}
            <div className='md:max-w-[423px] h-[593px] w-full  border-2 border-gray-300'>
                <h2 className='font-bold w-[116px] h-[28px] ml-8 mt-6 my-2 text-[#333333]'>Recent Post</h2>
                {data.map((item) => (
                    <div key={item.id} className='flex flex-col mx-4 border-b-2 border-gray-300 md:flex-row gap-4 p-4 '>
                        <Image src={item.img} alt={item.date} width={99} height={92} className='w-[99px] h-[92px] rounded-md'></Image>
                        <div>
                            <p className='opacity-30'>{item.date}</p>
                            <p>{item.des}/</p>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>

            {/* forth div */}

            <div className='md:max-w-[423px] h-[700px] w-full mt-5 border-2 border-gray-300'>
                <h2 className='font-bold w-[116px] h-[28px] ml-8 mt-6 my-2 text-[#333333]'>Filter By Menu</h2>
                {data1.map((item) => (
                    <div key={item.id} className='flex justify-evenly flex-col mx-4  border-gray-300 md:flex-row gap-4 p-4 '>
                        <div className='flex gap-4 flex-justify-between'>
                            <Image src={item.img} alt={item.title} width={99} height={92} className='w-[99px] h-[92px] rounded-md'></Image>

                            <h2 className='font-bold text-[16px] mt-8'>{item.title}</h2>
                        </div>
                        <p className='font-semibold mt-8'>{item.review}</p>

                        <hr />
                    </div>
                ))}
            </div>
            {/*fifth div */}
            <div className='md:max-w-[423px] h-[300px] w-full mt-5 border-2 border-gray-300'>
                <h2 className='font-bold w-[116px] h-[28px] ml-8 mt-6 my-2 text-[#333333]'>Photo Gallery</h2>
                <div className='md:max-w-[423px] h-[350px] w-full my-6 gap-4'>
            <div className='flex gap-2 my-2 w-[110px] h-[92px] ml-6'>
                <Image src="/foodpic4.png" alt='Food' width={115} height={92}></Image>
                <Image src="/foodpic1.jpeg" alt='Food' width={200} height={100}></Image>
                <Image src="/foodpic6.png" alt='Food' width={115} height={92}></Image>
            </div>
            <div className='flex gap-2 mt-2 w-[110px] h-[92px] ml-6'>
            <Image src="/foodpic7.png" alt='Food' width={92} height={92}></Image>
            <Image src="/foodpic2.jpeg" alt='Food' width={100} height={92}></Image>
            <Image src="/foodpic8.png" alt='Food' width={92} height={92}></Image>
            </div>
            </div>
            </div>
 
        {/* {/sixth div/} */}
        <div className='md:max-w-[423px] h-[158px] w-full mt-5 border-2 border-gray-300'>
        <h2 className='font-bold w-[116px] h-[28px] ml-8 mt-6 my-2 text-[#333333]'>Follow Us</h2>
        <div className='md:max-w-[308px] h-[94px] w-full my-6 gap-4'>
        <span className='flex justify-center gap-6 ml-12  '>
                        <IoLogoTwitter size={30} className='bg-[#C4C4C4] '/>
                        <FaYoutube size={30} className='bg-[#C4C4C4]'/>
                        <FaPinterest  size={30} className='bg-[#FF9f0D] text-white'/>
                        <FaInstagram size={30} className='bg-[#C4C4C4]' />
                        <FaFacebookF size={30} className='bg-[#C4C4C4]'/>
                    </span>
                    </div>
        </div>
        </div>


    )
}
export default Rightside