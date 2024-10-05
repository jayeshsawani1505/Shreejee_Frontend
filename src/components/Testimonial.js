"use client"
import { useRef } from "react";
import { IoMdArrowRoundForward } from "react-icons/io"
import { IoArrowBackOutline } from "react-icons/io5"


const Testimonial = () => {
  const sliderRef = useRef(null);
  const testimoniaal =[
    {
    iframes:<>      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Pdy4ex8qE6M?si=sVZpLGlxVvFSGP6v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></>
    },
    {
    iframes:<><iframe width="100%" height="100%" src="https://www.youtube.com/embed/acgakJt4c7w?si=QdWHGVsNACcGXBuX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></>
  },
  {
    iframes:<><iframe width="100%" height="100%" src="https://youtube.com/embed/KoSCP1pvJtI?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></>
  },
  {
    iframes:<><iframe width="100%" height="100%" src="https://youtube.com/embed/8pG1NFsXUUM?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></>
  },
  {
    iframes:<><iframe width="100%" height="100%" src="https://youtube.com/embed/AgRR19m7DPI?feature=share" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></>
  },
]

const handleScroll = (direction) => {
  if (sliderRef.current) {
    const scrollAmount =window.screen.width<=768?300:400; 
    if (direction === 'left') {
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
};
// KoSCP1pvJtI
  return (
    <section className='w-full h-full py-4 px-10 container_maxWidth_1440 md:px-[10px]'>
       <div className='w-[100%] flex justify-between items-center'>
        <h1 className="text-[25px] font-[600]" data-aos="fade-right">Testimonial</h1>
        <div className='hidden md:flex justify-between gap-3 items-center'>
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
      <div className='w-full overflow-x-auto flex gap-3 py-1 custom_slider' ref={sliderRef}>
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

export default Testimonial