"use client"
import ProductCard from '@/components/ProductCard';
import React, { useEffect, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';

const SearchProduct = () => {
    const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;
    const [selectedCategory, setSelectedCategory] = useState('All Products');
    const [selectedCategoryId, setSelectedCategoryId] = useState('All Products');
    const [products, setProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('');
    const [ProductLoading,setProductLoading]=useState(false)

    const handleFetchProducts = async () => {
        setProductLoading(true)
        try {
            const response = await fetch(`${BASE_URL}/products/by-category/${selectedCategoryId}`);
            const data = await response.json();
            setProducts(data);
            setAllProducts(data);
            setProductLoading(false)
        } catch (error) {
            console.error('Error fetching products:', error);
            setProductLoading(false)
        }
    };

    useEffect(() => {
        handleFetchProducts();
    }, [selectedCategoryId]);

    useEffect(() => {
        let filteredProducts = allProducts;

        if (searchTerm) {
            filteredProducts = allProducts.filter(product =>
                product.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            if (sortOption === 'low-to-high') {
                filteredProducts.sort((a, b) => a.price - b.price);
            } else if (sortOption === 'high-to-low') {
                filteredProducts.sort((a, b) => b.price - a.price);
            }
        }

        if(searchTerm===""){
            setSortOption('')
        }
        setProducts(filteredProducts);
        
    }, [searchTerm, allProducts, sortOption]);
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    return (
        <section className='w-full h-full pb-20 pt-32 container_maxWidth_1440 container_maxWidth_14402'>
            <div className='w-[100%] flex justify-center mt-[50px] mb-[50px]'>
                <div className='search'>
                    <div className='w-[300px] p-2 flex border-[2px] rounded-2xl items-center'>
                        <input
                            type='text'
                            placeholder='Type product name'
                            className='border-none outline-none w-[100%]'
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <IoIosSearch className='text-[18px]' />
                    </div>
                </div>
            </div>

            {searchTerm!=="" && (
                <div className='w-[100%] flex justify-end my-7 px-4'>
                    <select
                        value={sortOption}
                        onChange={handleSortChange}
                        className='border border-gray-300 rounded p-2'
                    >
                        <option value=''>Sort by price</option>
                        <option value='low-to-high'>Price: Low to High</option>
                        <option value='high-to-low'>Price: High to Low</option>
                    </select>
                </div>
            )}

            <div className='w-[100%] flex flex-wrap gap-4 px-[50px] justify-center'>
                {ProductLoading?(
                    <div className='flex flex-wrap justify-center gap-4 md:justify-center'>
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className='w-60 h-80 bg-gray-200 animate-pulse rounded-md'></div>
              ))}
            </div>
                )
                :
                    products?.length > 0 ? (
                    products?.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))
                ) : (
                    <p>No products found</p>
                )}
            </div>
        </section>
    );
};

export default SearchProduct;
