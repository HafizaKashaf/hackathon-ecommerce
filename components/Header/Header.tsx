'use client';
// resopnsive
import { useState } from 'react'
import React from 'react';
import Link from 'next/link';
import { CiSearch } from "react-icons/ci";
import { PiHandbag } from "react-icons/pi";
import { IoMdMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: "Home", href: "/", active: true },
    { name: "Menu", href: "/menu"},
    { name: "Blog", href: "/blog" },
    { name: "Pages", href: "/pages" },
    { name: "About", href: "/about" },
    { name: "Shop", href: "/shop" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <div className='w-full flex items-center justify-center mt-10'>
        <div className='w-[80%]'>
        {/* foodtuck */}
        <div className='flex items-center justify-center font-bold text-[24px] leading-[32px]'>
           <p className='text-white'><span className='text-yellow-500'>Food</span>tuck </p>
        </div>
        <button
          className="lg:hidden text-white z-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? < IoIosClose size={24} className='bg-white' /> : <IoMdMenu size={24} />}
        </button>
        {/* navbar */}
        <div className='flex justify-between max-sm:flex-col'>
        <ul className={`
          fixed inset-0 bg-[#0D0D0D] flex flex-col items-center justify-center gap-6 
          lg:static lg:flex-row lg:bg-transparent lg:gap-[32px]
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible lg:opacity-100 lg:visible'}
        `}>
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`text-[16px] leading-6 ${
                  item.active ? "text-[#FF9F0D] font-bold" : "text-white"
                } font-inter hover:text-[#FF9F0D] transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* search bar */}
        <div className='flex items-center justify-center gap-[20px]'>
        <div className='text-white  h-[54px] border-[1.5px] border-[#FF9F0D] rounded-[27px] flex justify-between px-3 items-center gap-5 '>
        <input type='text' placeholder='search ...' className='border-[1.5px] outline-none rounded border-[#0d0d0d] bg-[#0D0D0D] placeholder:text-[16px] w-[130px] h-[24px]'/>
               <button>
                < CiSearch className='w-[24px] h-[24px]'/>
               </button>
        </div>
        <PiHandbag className='w-[24px] h-[24px] text-white' />
        </div>
        </div>
        
        </div>
    </div>
  )
}

export default Header
