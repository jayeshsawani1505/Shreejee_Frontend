"use client";

import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoArrowBackOutline } from 'react-icons/io5';

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

const OurProduct = () => {
  const [allCategory, setAllCategory] = useState([]);
  const [isLoading,setisLoading]=useState(false)
  const sliderRef = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setisLoading(true)
      try {
        const response = await axios.get(`${BASE_URL}/categories`);
        const categoriesSorted = response?.data?.sort((a, b) => {
          return parseInt(a?.squence, 10) - parseInt(b?.squence, 10); 
        });
        setAllCategory(categoriesSorted);
        setisLoading(false)
      } catch (error) {
        console.error('Error fetching categories:', error);
        setisLoading(false)
      }
    };
    fetchCategories();
  }, []);

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 200; 
      if (direction === 'left') {
        sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  return (
    <section className="w-full h-full py-10 px-10 container_maxWidth_1440 md:px-[10px]">
      <div className='w-[100%] flex justify-between items-center'>
        <h1 className="text-[25px] font-[600]" data-aos="fade-right">Our Product Category</h1>
        <div className='flex justify-between gap-3 items-center'>
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
      <br />

      <div ref={sliderRef} className="w-full overflow-x-auto flex gap-3 py-5 custom_slider">
        
      {isLoading ? (
  Array.from({ length: 8 }).map((_, index) => (
    <div
      key={index}
      className="py-3 px-3 w-[150px] h-[40px] bg-gray-200 animate-pulse rounded-md"
    ></div>
  ))
) : (
  allCategory?.map((item, index) => (
    <Link
      href={{
        pathname: "/products",
        query: { categoryId: item?._id },
      }}
      key={index}
      className="w-auto h-auto py-3 px-3 border-[1px] rounded flex-shrink-0 cursor-pointer"
    >
      <p className="mt-1 text-[20px] font-[500]">
        {capitalizeFirstLetter(item?.name)}
      </p>
    </Link>
  ))
)}

      </div>
    </section>
  );
};

export default OurProduct;
