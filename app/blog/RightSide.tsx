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
    des: string;
}

interface Data1 {
    id: number;
    img: string;
    title: string;
    review: number;
}

const Rightside = () => {
    const data: Data[] = [
        {
            id: 1,
            img: "/images/dish1.png",
            date: "June 22, 2020",
            des: "Lorem ipsum dolor sit cing elit, sed do.",
        },
        {
            id: 2,
            img: "/images/dish6.png",
            date: "June 22, 2020",
            des: "Lorem ipsum dolor sit cing elit, sed do.",
        },
        {
            id: 3,
            img: "/images/dish5.png",
            date: "June 22, 2020",
            des: "Lorem ipsum dolor sit cing elit, sed do.",
        },
        {
            id: 4,
            img: "/images/dish4.png",
            date: "June 22, 2020",
            des: "Lorem ipsum dolor sit cing elit, sed do.",
        }
    ];

    const data1: Data1[] = [
        {
            id: 1,
            img: "/images/food1.png",
            title: "Chicken Fry",
            review: 26
        },
        {
            id: 2,
            img: "/images/burger.png",
            title: "Burger Food",
            review: 46
        },
        {
            id: 3,
            img: "/images/food5.png",
            title: "Pizza",
            review: 16
        },
        {
            id: 4,
            img: "/images/dish4.png",
            title: "Fresh Fruits",
            review: 36
        },
        {
            id: 5,
            img: "/images/menu.png",
            title: "Vegetables",
            review: 16
        }
    ];

    return (
<<<<<<< HEAD
        <div className='max-w-full md:max-w-[424px] px-4  my-12 mr-4'>
=======
        <div className='max-w-full md:max-w-[424px] px-4 mr-4 my-12'>
>>>>>>> cffb135089cf3d75dc4395088c7bc12c7efc397f

            {/* Search bar */}
            <button className='flex w-full border-gray-300 border-[1px] rounded-[2px]'>
                <input type='text' placeholder='Search Your Keyword..' className='p-5 w-full' />
                <span className='w-[77px] h-[70px] bg-[#FF9f0D] text-white rounded-[2px] flex items-center justify-center'>
                    <IoSearch size={24} />
                </span>
            </button>

            {/* Client Profile */}
            <div className='w-full md:w-[424px] h-[423px] mb-5 p-4 md:p-8 border-2 border-gray-300'>
                <div className='w-full md:w-[322px] space-y-2 px-4'>
                    <Image src="/images/man-business-suit-emotions-different-surfaces-2.png" alt='Client' width={148} height={130} className='rounded-full mx-auto' />
                    <h2 className='text-center text-[20px] font-bold mt-6'>Prince Miyako</h2>
                    <p className='text-center text-[#828282]'>Blogger/Photographer</p>
                    <p className='flex justify-center gap-1 text-[#FF9f0D]'>
                        <FaStar size={14} />
                        <FaStar size={14} />
                        <FaStar size={14} />
                        <FaStar size={14} />
                        <FaStar size={14} />
                    </p>
                    <p className='text-center text-[#828282]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio eligendi suscipit reprehenderit atque.</p>
                    <div className='flex justify-center gap-4'>
                        <FaFacebookF size={20} />
                        <IoLogoTwitter size={20} />
                        <FaInstagram size={20} />
                        <FaPinterest size={20} />
                    </div>
                </div>
            </div>

            {/* Recent Posts */}
            <div className='w-full md:w-[423px] h-auto mb-5 border-2 border-gray-300'>
                <h2 className='font-bold text-[#333333] mb-2'>Recent Post</h2>
                {data.map((item) => (
                    <div key={item.id} className='flex flex-col md:flex-row gap-4 p-4 border-b-2 border-gray-300'>
                        <Image src={item.img} alt={item.date} width={99} height={92} className='rounded-md' />
                        <div>
                            <p className='opacity-30'>{item.date}</p>
                            <p>{item.des}/</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Filter by Menu */}
            <div className='w-full md:w-[423px] h-auto mb-5 border-2 border-gray-300'>
                <h2 className='font-bold text-[#333333] mb-2'>Filter By Menu</h2>
                {data1.map((item) => (
                    <div key={item.id} className='flex flex-col md:flex-row gap-4 p-4 border-b-2 border-gray-300'>
                        <Image src={item.img} alt={item.title} width={99} height={92} className='rounded-md' />
                        <div>
                            <h3 className='font-bold text-[16px]'>{item.title}</h3>
                            <p className='font-semibold'>{item.review} Reviews</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Photo Gallery */}
            <div className='w-full md:w-[423px] h-[380px] mb-5 border-2 border-gray-300'>
                <h2 className='font-bold text-[#333333] mb-2'>Photo Gallery</h2>
                <div className='flex flex-wrap gap-2'>
                    <Image src="/images/starter.png" alt='Food' width={100} height={100} />
                    <Image src="/images/food2.png" alt='Food' width={200} height={100} />
                    <Image src="/images/dish5.png" alt='Food' width={100} height={100} />
                    <Image src="/images/food6.png" alt='Food' width={100} height={100} />
                    <Image src="/images/food4.png" alt='Food' width={100} height={100} />
                    <Image src="/images/dish6.png" alt='Food' width={100} height={100} className='max-sm:hidden' />
                </div>
            </div>

            {/* Follow Us */}
            <div className='w-full md:w-[423px] h-[158px] mb-5 border-2 border-gray-300'>
                <h2 className='font-bold text-[#333333] mb-2'>Follow Us</h2>
                <div className='flex justify-center gap-6'>
                    <IoLogoTwitter size={30} className='bg-[#C4C4C4] p-2 rounded-full' />
                    <FaYoutube size={30} className='bg-[#C4C4C4] p-2 rounded-full' />
                    <FaPinterest size={30} className='bg-[#FF9f0D] text-white p-2 rounded-full' />
                    <FaInstagram size={30} className='bg-[#C4C4C4] p-2 rounded-full' />
                    <FaFacebookF size={30} className='bg-[#C4C4C4] p-2 rounded-full' />
                </div>
            </div>

        </div>
    );
};

export default Rightside;
