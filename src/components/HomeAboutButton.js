"use client"

import { useRouter } from "next/navigation"

const HomeAboutButton = () => {
    const router = useRouter()
  return (
    <button className='py-[8px] px-[18px] shop_btn rounded bg-brand_colors text-white' onClick={()=>router.push('/aboutus')}>View More</button>
  )
}

export default HomeAboutButton