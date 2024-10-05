"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/autoplay';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";

const BannerSlider = () => {
    const images = [
        'https://res.cloudinary.com/dmat13pbd/image/upload/v1725096778/remedy_6_page-0001_uzziil.jpg',
        'https://res.cloudinary.com/dmat13pbd/image/upload/v1725531370/yuvana_remdedy_page-0001_wsrjon.jpg',
        'https://res.cloudinary.com/dmat13pbd/image/upload/v1725096005/remedy_3_page-0001_sdazaa.jpg',
        'https://res.cloudinary.com/drsuiuchs/image/upload/v1725011080/remedy_5_page-0001_qgdxzc.jpg',
        'https://res.cloudinary.com/dmat13pbd/image/upload/v1725096147/remedy_9_page-0001_jgxkzh.jpg',
        'https://res.cloudinary.com/dmat13pbd/image/upload/v1725096291/remedy_12_page-0001_vfo8kn.jpg',
        'https://res.cloudinary.com/dmat13pbd/image/upload/v1725096424/remedy_19_page-0001_mabdbc.jpg',
        'https://res.cloudinary.com/dmat13pbd/image/upload/v1725096549/remedy_29_page-0001_1_af2zqi.jpg',
        'https://res.cloudinary.com/dmat13pbd/image/upload/v1725096669/remedy_26_page-0001_ldnjdd.jpg',





      ];
  return (
    <div className='product_slider md:w-[97%] mr-5 md:mt-10 md:mr-0' data-aos='fade-left'>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: false }}
        navigation={false}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, 
        }}
        modules={[Autoplay]} 
        className='h-full'
      >
        {images.map((imgUrl, index) => (
          <SwiperSlide key={index} className='bg-[#f7f7f7] w-[400px] md:w-[97%]'>
            <img
              src={imgUrl}
              alt={`Slider image ${index + 1}`}
              loading='lazy'
              className='w-[100%] h-[100%] object-fill cursor-pointer'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default BannerSlider