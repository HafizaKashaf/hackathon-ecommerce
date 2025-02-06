"use client";
import Common from "@/components/HeroSection/Common";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2"; // Import SweetAlert2
import { PiUser } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const Page = () => {
  const router = useRouter(); // Router for navigation

  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    remember: false,
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Show SweetAlert UI Message
    Swal.fire({
      title: `Welcome, ${formData.name}!`,
      text: "Your account has been successfully created.",
      icon: "success",
      confirmButtonText: "Go to Home",
      confirmButtonColor: "#FF9F0D",
    }).then(() => {
      // Redirect to Home Page after clicking "Go to Home"
      router.push("/");
    });
  };

  return (
    <div>
      <Common title="Sign Up Page" subtitle="sign up" />

      {/* Content */}
      <div className="w-full flex justify-center pb-10 bg-white py-10">
        <div className="w-[80%] max-w-sm md:max-w-md lg:max-w-lg flex justify-center">
          <div className="border rounded shadow-lg flex flex-col gap-6 px-6 py-8 w-full">
            <h1 className="font-bold text-2xl text-center">Sign Up</h1>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {/* Name */}
              <div className="flex items-center gap-2 border px-3 py-2 rounded-md">
                <PiUser className="w-[24px] h-[24px] text-gray-500" />
                <input
                  type="text"
                  id="name"
                  className="outline-none w-full"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="flex items-center gap-2 border px-3 py-2 rounded-md">
                <MdOutlineMail className="w-[24px] h-[24px] text-gray-500" />
                <input
                  type="email"
                  id="email"
                  className="outline-none w-full"
                  placeholder="Email or Phone Number"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Password */}
              <div className="flex items-center gap-2 border px-3 py-2 rounded-md">
                <CiLock className="w-[24px] h-[24px] text-gray-500" />
                <input
                  type="password"
                  id="password"
                  className="outline-none w-full"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                />
                <p className="text-sm">Remember me?</p>
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                className="w-full bg-[#FF9F0D] text-white py-2 rounded-md font-semibold"
              >
              
              </button>

              {/* Forgot Password */}
              <button className="text-end text-gray-600 text-sm">
                Forgot password?
              </button>
            </form>

            {/* OR Separator */}
            <div className="w-full flex items-center justify-center gap-2">
              <hr className="w-1/3 border-gray-300" />
              <span className="text-gray-700">OR</span>
              <hr className="w-1/3 border-gray-300" />
            </div>

            {/* Social Sign Up Buttons */}
            <div className="flex flex-col gap-2">
              <button className="border flex items-center px-4 py-2 rounded-md">
                <FcGoogle className="w-[24px] h-[24px]" />
                <span className="w-full text-center text-[#4F4F4F]">
                  Sign up with Google
                </span>
              </button>

              <button className="border flex items-center px-4 py-2 rounded-md">
                <FaApple className="w-[24px] h-[24px]" />
                <span className="w-full text-center text-[#4F4F4F]">
                  Sign up with Apple
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
