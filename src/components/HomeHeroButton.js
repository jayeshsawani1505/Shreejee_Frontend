"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const HomeHeroButton = () => {
    const router = useRouter()
  return (
    <>
             <button onClick={()=>{router.push("/products")}} className='py-[8px] shop_btn md:hidden px-[18px] rounded bg-brand_colors text-white'>Shop Now</button>
      <div className='hidden  md:w-[100%] md:flex md:justify-center md:mt-4'>
      <button onClick={()=>{router.push("/products")}} className='py-[8px] shop_btn px-[18px] rounded bg-brand_colors text-white hover:bg-white hover:text-brand_color hover:border-brand_b_color'>Shop Now</button>
      </div>
    </>
  )
}

export default HomeHeroButton