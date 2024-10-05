"use client"
import { IoIosArrowRoundBack } from "react-icons/io"


const BackArrow = () => {
  return (
    <IoIosArrowRoundBack className='text-[#ADADAD] text-[70px] cursor-pointer py-3' onClick={()=>{window.history.back()}}/>
  )
}

export default BackArrow