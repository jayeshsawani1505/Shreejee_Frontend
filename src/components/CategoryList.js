"use client";

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowBackOutline } from "react-icons/io5";

const CategoryList = ({ categoryId }) => {
  const [initialCategories, setInitialCategories] = useState([]);
  const sliderRef = useRef(null);
  const selectedCategoryRef = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
      const categoriesRes = await fetch(`${BASE_URL}/categories`);
      const categories = await categoriesRes.json();
      console.log("this is categories before",categories)
      const categoriesSorted = categories?.sort((a, b) => {
        return parseInt(a?.squence, 10) - parseInt(b?.squence, 10); 
      });
      console.log(categoriesSorted)
      setInitialCategories(categoriesSorted);
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategoryRef.current && sliderRef.current) {
      const selectedCategoryElement = selectedCategoryRef.current;
      const sliderElement = sliderRef.current;

      const selectedRect = selectedCategoryElement.getBoundingClientRect();
      const sliderRect = sliderElement.getBoundingClientRect();

      if (
        selectedRect.left < sliderRect.left ||
        selectedRect.right > sliderRect.right
      ) {
        const scrollAmount = selectedRect.left - sliderRect.left;
        sliderElement.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  }, [initialCategories, categoryId]);

  const capitalizeFirstLetter = (string) => {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

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

  return (
    <div className='w-[100%] flex justify-around items-center px-2'>
      <IoArrowBackOutline 
        className='text-[25px] text-brand_color cursor-pointer'
        onClick={() => handleScroll('left')}
      />
      <div 
        ref={sliderRef}
        className='category w-[88%] overflow-x-auto flex py-4 bg-white border-b-2 custom_slider'
      >
        <Link
          href="/products" 
          className={`${categoryId === "All Products" ? "text-brand_color font-semibold" : ""} cursor-pointer px-4 flex-shrink-0`}
        >
          {'All Products'}
        </Link>
        {initialCategories?.map((item, index) => (
          <Link
            key={index}
            href={`/products?categoryId=${item?._id}`} 
            className={`${categoryId === item._id ? "text-brand_color font-semibold" : ""} cursor-pointer px-4 flex-shrink-0`}
            ref={categoryId === item._id ? selectedCategoryRef : null}
          >
            {capitalizeFirstLetter(item?.name)}
          </Link>
        ))}
      </div>
      <IoMdArrowRoundForward 
        className='text-[25px] text-brand_color cursor-pointer'
        onClick={() => handleScroll('right')}
      />
    </div>
  );
};

export default CategoryList;
