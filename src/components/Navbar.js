"use client"

import React, { useState } from 'react'
import Logo from '../../public/LOGO.svg'
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
  const [MobileNavbar,setMobileNavbar]=useState(false)
    const router = useRouter();
  return (
    <>
    <header className='w-[100%] py-[30px] px-[40px] border-b-[1px] fixed bg-white z-[99] '>
        <nav className='w-[100%] flex justify-between md:items-center container_maxWidth_1440'>
            <div className='logo'>
                <Image onClick={()=>router.push("/")} src={Logo} className='w-[120px] h-[50px]' alt='company logo'/>
            </div>
            <div className='links flex gap-3 items-center md:hidden'>
            <button onClick={()=>router.push("/")} className='py-[9px] px-[15px] rounded transition-colors duration-300 hover:bg-brand_colors hover:text-white'>
  Home
</button>

              <button onClick={()=>router.push("/products")} className='py-[9px] px-[15px] rounded transition-colors duration-300 hover:bg-brand_colors hover:text-white'>Products</button>
              {/* <button onClick={()=>router.push("/blogs")} className='py-[9px] px-[15px] rounded transition-colors duration-300 hover:bg-brand_colors hover:text-white'>Blogs</button> */}
              <button onClick={()=>router.push("/aboutus")} className='py-[9px] px-[15px] rounded transition-colors duration-300 hover:bg-brand_colors hover:text-white'>About Us</button>
              <button onClick={()=>router.push("/contactus")} className='py-[9px] px-[15px] rounded transition-colors duration-300 hover:bg-brand_colors hover:text-white'>Contact Us</button>
              <button className='py-[9px] px-[15px] rounded transition-colors duration-300 bg-brand_colors text-white'>Download Brochure</button>
              <button onClick={()=>router.push("/searchProduct")} className='py-[9px] px-[15px] rounded transition-colors duration-300 hover:bg-brand_colors hover:text-white text-[20px]'><IoIosSearch/></button>
              <button onClick={()=>router.push("/cart")} className='py-[9px] px-[15px] rounded transition-colors duration-300 hover:bg-brand_colors hover:text-white'><FaShoppingCart/></button>

            </div>
            <div className='hidden md:flex items-center gap-3 '>
            <button onClick={()=>router.push("/searchProduct")} className='py-[9px] px-[15px] rounded transition-colors duration-300 hover:bg-brand_colors hover:text-white text-[20px]'><IoIosSearch/></button>
            <button onClick={()=>router.push("/cart")} className='py-[9px] px-[15px] rounded transition-colors duration-300 hover:bg-brand_colors hover:text-white'><FaShoppingCart/></button>
            <IoMdMenu onClick={()=>setMobileNavbar(!MobileNavbar)} className='hidden md:block font-[600] text-brand_color text-[20px] cursor-pointer'/>
            </div>
        </nav>
    </header>
    {MobileNavbar && 
      <div className='w-full h-full fixed top-0 left-0 right-0 bottom-0 py-[30px] px-[40px] z-[100] bg-white'>
    <div className='w-[100%] flex justify-end'>
    <RxCross1 onClick={()=>setMobileNavbar(!MobileNavbar)} className='text-brand_color text-[20px] font-[600] cursor-pointer'/>    </div>
    <br/>
    <br/>
    <div className='w-[100%] flex justify-center h-[100%] pt-[50%] items-center'>
      <div className='flex flex-col h-[100%]'>
      <button onClick={()=>{router.push("/");setMobileNavbar(!MobileNavbar)}} className='py-[9px] px-[15px] rounded transition-colors duration-300 hover:bg-brand_colors hover:text-white'>
  Home
</button>

              <button onClick={()=>{router.push("/products");setMobileNavbar(!MobileNavbar)}} className='py-[9px] px-[15px] rounded transition-colors duration-300 hover:bg-brand_colors hover:text-white'>Products</button>
              {/* <button onClick={()=>{router.push("/blogs");setMobileNavbar(!MobileNavbar)}} className='py-[9px] px-[15px] rounded transition-colors duration-300 hover:bg-brand_colors hover:text-white'>Blogs</button> */}
              <button onClick={()=>{router.push("/aboutus");setMobileNavbar(!MobileNavbar)}} className='py-[9px] px-[15px] rounded transition-colors duration-300 hover:bg-brand_colors hover:text-white'>About Us</button>
              <button onClick={()=>{router.push("/contactus");setMobileNavbar(!MobileNavbar)}} className='py-[9px] px-[15px] rounded transition-colors duration-300 hover:bg-brand_colors hover:text-white'>Contact Us</button>
              <button className='py-[9px] mt-3 px-[15px] rounded transition-colors duration-300 bg-brand_colors text-white'>Download Brochure</button>
      </div>
    </div>




    </div>

    }

    </>
  )
}

export default Navbar