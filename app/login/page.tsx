"use client";

import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div>
      

      <div className="flex min-h-screen bg-white">
        {/* Left Side - Enhanced Design */}
        <div className="hidden lg:flex flex-col justify-center items-center w-1/2 bg-gradient-to-tl from-yellow-400 via-yellow-500 to-yellow-600 p-10 text-center shadow-xl rounded-l-3xl transform transition-transform duration-500 hover:scale-105">
          <h1 className="text-5xl font-extrabold text-white tracking-tight transition-all duration-300 ease-in-out transform hover:scale-105">
            Welcome to Food Tuck
          </h1>
          <p className="text-white mt-4 text-lg font-medium opacity-90 transition-opacity duration-300 ease-in-out hover:opacity-100">
            Delicious food at your doorstep
          </p>

          <Image 
            src="/images/food-banner.jpg" 
            alt="Food Tuck Banner" 
            width={400} 
            height={300} 
            className="mt-6 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl" 
          />

          <ul className="text-white mt-6 text-lg">
            <li className="flex items-center justify-center gap-2 border-b border-spacing-1">
              <span className="text-xl font-bold">✅</span> Fresh Ingredients
            </li>
            <li className="flex items-center gap-2 border-b border-spacing-1">
              <span className="text-xl font-bold">✅</span> Fast Delivery
            </li>
            <li className="flex items-center gap-2 border-b border-spacing-1">
              <span className="text-xl font-bold">✅</span> Best Prices
            </li>
          </ul>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex justify-center items-center py-10">
          <div className="border rounded-lg shadow-2xl flex flex-col gap-6 px-6 py-8 w-[90%] max-w-sm md:max-w-md lg:max-w-lg bg-white">
            {/* Welcome Message */}
            <SignedIn>
            <div className="text-center bg-yellow-500 py-4 rounded-t-lg">
               
                    <UserButton/>
               
              <h1 className="text-3xl font-bold text-white">Welcome Back!</h1>
              <p className="text-gray-700"> Delicious food at your doorstep</p>
              <p className="mt-4 text-xl text-white font-semibold">Enjoy your meal!</p>
                {/* Coupon Code Section */}
                <div className="mt-6 bg-white p-4 rounded-md shadow-md text-center">
                  <h2 className="text-2xl font-bold text-gray-800">Use Coupon Code:</h2>
                  <p className="text-3xl text-yellow-600 font-semibold">FOODTUCK10</p>
                  <p className="text-sm text-gray-600">Get 10% off on your first order</p>
                </div>
            </div>
            </SignedIn>
            <SignedOut >

            <h1 className="font-bold text-2xl text-center text-gray-800">Login</h1>

            <div className="flex flex-col gap-4">
              {/* Email Input */}
              <div className="flex items-center gap-2 border px-3 py-2 rounded-md focus-within:ring-2 focus-within:ring-yellow-500">
                <MdOutlineMail className="w-[24px] h-[24px] text-gray-500" />
                <input type="email" className="outline-none w-full" placeholder="Email or Phone Number" />
              </div>

              {/* Password Input */}
              <div className="flex items-center gap-2 border px-3 py-2 rounded-md focus-within:ring-2 focus-within:ring-yellow-500">
                <CiLock className="w-[24px] h-[24px] text-gray-500" />
                <input type="password" className="outline-none w-full" placeholder="Password" />
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-2">
                <input type="checkbox" />
                <p className="text-sm">Remember me?</p> 
              </div>

              {/* Forgot Password */}
              <button className="text-end text-gray-600 text-sm">
                Forgot password?
              </button>

              {/* Login Button */}
              <button className="w-full bg-[#FF9F0D] text-white py-2 rounded-md font-semibold hover:bg-yellow-600 transition-colors">
                Login
              </button>
            </div>

            {/* Clerk Sign-In Button */}
            
              <div className="w-full flex justify-center bg-yellow-300 py-2 rounded-md">
                <SignInButton mode="modal"/>
              </div>
           
           

            <p className="flex flex-row items-center justify-center">
              New here? <Link href="#"><strong>Create an account</strong></Link>
            </p>
            </SignedOut>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
