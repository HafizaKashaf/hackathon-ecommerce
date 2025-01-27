'use client';
// responsive
import MobileNav from './MobileNav';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CiSearch } from "react-icons/ci";
import { PiHandbag } from "react-icons/pi";
import { IoMdMenu } from "react-icons/io";
import { PiUser } from "react-icons/pi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const getCartCount = (): number => {
  if (typeof window !== 'undefined') {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    return cart.length;
  }
  return 0; 
};

const Header = () => {
  const [cartCount, setCartCount] = useState<number>(getCartCount);

  // Set cart count on mount
  useEffect(() => {
    // Update cart count when local storage changes
    const handleStorageChange = () => {
      setCartCount(getCartCount());
    };

    // Listen for changes to localStorage
    window.addEventListener('storage', handleStorageChange);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return (
    <div className='w-full flex items-center justify-center mt-10'>
      <div className='w-[80%] pb-2'>
        {/* foodtuck */}
        <div className='flex items-center justify-center font-bold text-[24px] leading-[32px]'>
          <p className='text-white'><span className='text-yellow-500'>Food</span>tuck </p>
        </div>

        {/* navbar */}
        <div className='flex justify-between gap-2 max-sm:flex-col'>
          {/* Nav Links */}
          <ul className='md:flex max-sm:hidden text-white items-center space-x-3 xl:space-x-10'>
            <li className='navlink'>
              <Link href="#">Home</Link>
            </li>
            <li className='navlink'>
              <Link href="/menu">Menu</Link>
            </li>
            <li className='navlink'>
              <Link href="/blog">Blog</Link>
            </li>
            <li className='navlink'>
              <Link href="/chef">Pages</Link>
            </li>
            <li className='navlink'>
              <Link href="/about">About</Link>
            </li>
            <li className='navlink'>
              <Link href="/shop">Shop</Link>
            </li>
            <li className='navlink'>
              <Link href="contact">Contact</Link>
            </li>
          </ul>

          {/* search bar */}
          <div className='flex items-center justify-center gap-[20px]'>
            <div className='text-white h-[54px] border-[1.5px] border-[#FF9F0D] rounded-[27px] flex justify-between px-3 items-center gap-5'>
              <input
                type='text'
                placeholder='search ...'
                className='border-[1.5px] outline-none rounded border-[#0d0d0d] bg-black placeholder:text-[16px] w-[130px] h-[24px]'
              />
              <button>
                <CiSearch className='w-[24px] h-[24px]' />
              </button>
            </div>
            <div className='flex gap-2 items-center justify-center'>
              <Link href="/signUp">
                <PiUser className='w-[24px] h-[24px] text-white' />
              </Link>

              {/* Cart Icon with Count */}
              <Link href="/cart">
                <div className='relative'>
                  <PiHandbag className='w-[24px] h-[24px] text-white' />
                  {cartCount > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
              </Link>

              {/* Mobile Menu */}
              <div className='mt-2'>
                <Sheet>
                  <SheetTrigger><IoMdMenu className='size-7 md:hidden text-white' /></SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle></SheetTitle>
                      <SheetDescription></SheetDescription>
                      <MobileNav />
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
