"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";
import Modal from 'react-modal';

const ProductSlider = ({ product }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className='w-full h-[300px] mb-2'>
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Navigation]}
          className='h-full'
        >
          {product?.image?.map((imgUrl, index) => (
            <SwiperSlide key={index} onClick={() => openModal(index)} className='bg-[#f7f7f7]'>
              <img
                src={imgUrl}
                alt={`Product image ${index + 1}`}
                loading='lazy'
                className='w-full h-full object-contain cursor-pointer'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal for image zoom */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Product Image"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <Swiper
          initialSlide={activeIndex}
          spaceBetween={10}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          zoom={true}
          modules={[Navigation, Pagination]}
          className='h-[90%]'
        >
          {product?.image?.map((imgUrl, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-zoom-container">
                <img
                  src={imgUrl}
                  alt={`Product image ${index + 1}`}
                  className='w-full h-full object-contain'
                  loading='lazy'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button onClick={closeModal} className="close-modal-btn">Close</button>
      </Modal>
    </>
  );
};

export default ProductSlider;
