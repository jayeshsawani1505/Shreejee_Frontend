
// "use client";
import React from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import CategoryList from '@/components/CategoryList';
import axios from 'axios';
// import { useEffect, useState } from 'react';

const Product = async ({ searchParams }) => {
  const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
  console.log("searchParams",searchParams);
  const categoryId = searchParams.categoryId || "All Products";
  console.log("categoryId",categoryId);
  // const [initialProducts, setinitialProducts]=useState();
  const productsRes = await axios.get(`${BASE_URL}/products/by-category/${categoryId}`);
  console.log("productsRes.data",productsRes.data);
  const initialProducts = await productsRes.data;
  // useEffect(()=>{
  //   // const productsRes =  axios.get(`${BASE_URL}/products/by-category/${categoryId}`).then((res)=>{
  //   //   setinitialProducts(res.data);
  //   // });
  //   const fetchProducts = async () => {
  //     try {
  //       const productsRes = await axios.get(`${BASE_URL}/products/by-category/${categoryId}`);
  //       setinitialProducts(productsRes.data);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };

  //   fetchProducts();

  // },[categoryId])
   
  return (
    <section className='w-full pb-20 pt-32 container_maxWidth_1440 container_maxWidth_14402'>
      <div className='w-full flex flex-col'>
        <CategoryList categoryId={categoryId} />
        <div className='w-full flex flex-wrap px-[100px] md:px-[20px] gap-3 pt-10 justify-center'>
          {initialProducts?.length > 0 ? (
            initialProducts?.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p>No Product Found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export async function generateMetadata({ searchParams }) {
  const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
  const categoryId = searchParams.categoryId || "All Products";

  return {
    title: "Products",
    description: `Products for category ${categoryId}`,
  };
}

export default Product;
