"use client"

import React, { useRef } from 'react'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { IoArrowBackOutline } from 'react-icons/io5'

const Testimonial2 = () => {
    const sliderRef2 = useRef(null)
    const  testimoniaal =[  {
        iframes:<><iframe width="100%" height="100%" src="https://youtube.com/embed/b0t79BQ9dSg?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></>
      },
      {
        iframes:<><iframe width="100%" height="100%" src="https://youtube.com/embed/gPmIfQx-5GM?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></>
      },
      {
        iframes:<><iframe width="100%" height="100%" src="https://youtube.com/embed/gaZBJ_C4eXI?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></>
      },
      {
        iframes:<><iframe width="100%" height="100%" src="https://youtube.com/embed/7eR33hp5xP4?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></>
      },
    ]
    const handleScroll = (direction) => {
        if (sliderRef2.current) {
            const scrollAmount =window.screen.width<=768?300:400;
          if (direction === 'left') {
            sliderRef2.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
          } else {
            sliderRef2.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          }
        }
      };
  return (
    <section className='w-full h-full pb-[50px] px-10 container_maxWidth_1440 md:px-[10px]'>
    <div className='w-[100%] flex justify-end items-center custom_width_style'>
     <div className='justify-between gap-3 items-center hidden md:flex'>
       <IoArrowBackOutline 
         className='text-[25px] text-brand_color cursor-pointer'
         onClick={() => handleScroll('left')}
       />
       <IoMdArrowRoundForward 
         className='text-[25px] text-brand_color cursor-pointer'
         onClick={() => handleScroll('right')}
       />
     </div>
   </div>
   <br/>
   <div className='w-full overflow-x-auto flex gap-3 custom_slider' ref={sliderRef2}>
     {testimoniaal?.map((item, index) => (
       <div key={index} className='w-[auto] md:w-[300px] h-[auto] py-2 px-2 border-[1px] border-b_color rounded md:flex-shrink-0'>
       <div className='w-[100%] h-[300px] flex justify-center'>
       {item.iframes}
       </div>            
       </div>
     ))}
   </div>
 </section>
  )
}

export default Testimonial2