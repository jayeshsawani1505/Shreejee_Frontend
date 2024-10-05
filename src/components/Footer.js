import React from 'react'
import Logo from '../../public/LOGO.svg'
import { FaInstagram } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import { FaYoutube } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
export const Footer = () => {
  return (
    <footer className='w-[100%] py-3 px-4 bg-[#181717] mt-14 '>
    <div className='w-[100%] flex justify-between md:flex-col md:gap-8'>
       <div className='logo flex md:flex-col gap-20'>
       <div className='flex flex-col gap-3'>
       <div className='w-[180px] h-[60px]  py-2 px-3'>
           <Image src={Logo} />
        </div>
        <p className='text-center text-white '>Copyright © 2024 Shreejee Remedies,All Rights Reserved</p>
       </div>
        <div className='flex flex-col  text-white'>
         <h1 className='font-[600] pb-2 underline'>Links</h1>
           <Link href={"/"}>Home</Link>
           <Link href={"/products"}>Product</Link>
           {/* <Link href={"/blogs"}>Blogs</Link> */}
           <Link href={"/aboutus"}>About Us</Link>

           <Link href={"/contactus"}>Contact Us</Link>
           <Link href={"/privacy-policy"}>Privacy Policy</Link>
           <Link href={"/term-and-condition"}>Terms and Conditions</Link>




         </div>

       </div>
       <div className='link flex flex-col justify-between gap-3 md:flex-wrap md:justify-between w-[30%]'>
        
       <div className='flex flex-col justify-end text-white'>
                   <h1 className='font-[600] pb-2 underline'>Address</h1>
                   <a href='https://www.google.com/maps/dir//D%2F9%2F2%2FB,+Diamond+Park,+opposite+cartec+honda,+GIDC+Naroda,+Ahmedabad,+Gujarat+382330/@23.0302,72.5772,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x395e872c00000001:0x7d71ad4ee5c4b717!2m2!1d72.6665734!2d23.0940983?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D' target='_blank'><p className=''>D/9/2/B, Diamond Park, opposite cartec honda, GIDC Naroda, Ahmedabad, Gujarat 382330</p></a>
                   <div className='flex items-center gap-4'>
                   <p>Phone:</p>
                   <a href="tel:+918128126453" className='font-[600]'>
                   <p className='font-[500]'>
  +91 8128126453
  </p>
</a>
                  
                   </div>
                    <div className='flex items-center gap-4'>
                   <p>Email:</p>
                  <a href="mailto:shreejeeremedies@gmail.com"><p className='font-[500]'>shreejeeremedies@gmail.com</p></a> 
                   </div>
         </div>
         <div className='flex flex-col text-white'>
                   <h1 className='font-[600] pb-2 underline'>Follow Us On</h1>
                    <div className='flex items-center gap-3'>
                      <a href='https://www.instagram.com/shreejee.ayurveda/' target='_blank'> <FaInstagram className='text-white'/></a>
                      <a href='https://youtube.com/@yuvanascare' target='_blank'><FaYoutube className='text-white text-[17px]'/></a>
                      <a href="mailto:shreejeeremedies@gmail.com"><IoMdMail className='text-white text-[17px]'/></a>
                    </div>
                   
         </div>
       
       </div>
    </div>
    <br/>
    

   </footer>
  )
}
