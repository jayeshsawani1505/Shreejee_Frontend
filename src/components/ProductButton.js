"use client"
import { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } from '@/lib/store/features/cart/cartSlice';
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ProductButton = ({ product }) => {
  const [selectedVariation, setSelectedVariation] = useState(product.variations.length > 0 ? product.variations[0] : null);
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const findQuantity = (productId, variationId) => {
    const item = cartItems.find(item => item._id === productId && item.variation === variationId);
    return item ? item.quantity : 0;
  };

  // Handle Increase/Decrease/Remove actions
  const handleIncreaseQuantity = (id, variationId) => {
    dispatch(increaseQuantity({ _id: id, variation: variationId }));
  };

  const handleDecreaseQuantity = (id, variationId) => {
    dispatch(decreaseQuantity({ _id: id, variation: variationId }));
  };

  const handleRemoveFromCart = (id, variationId) => {
    dispatch(removeFromCart({ _id: id, variation: variationId }));
  };

  const handleAddToCart = () => {
    if (!selectedVariation && product.variations.length > 0) {
      setSelectedVariation(product.variations[0]);
    }

    const productToAdd = selectedVariation 
      ? { ...product, price: selectedVariation.price, variation: selectedVariation._id, minimum: product.minimum } 
      : { ...product, minimum: product.minimum };

    dispatch(addToCart(productToAdd));
  };

  return (
    <div>
      {product.variations.length > 0 ? (
        findQuantity(product._id, selectedVariation?._id) > 0 ? (
          <div className='flex gap-2 items-center md:pl-[70px] mt-3'>
            <button
              className='p-2 bg-brand_colors rounded text-white font-600'
              onClick={() => handleDecreaseQuantity(product._id, selectedVariation._id)}
              disabled={findQuantity(product._id, selectedVariation._id) <= (product.minimum || 1)} // Disable when at minimum
            >
              -
            </button>
            <p>{findQuantity(product._id, selectedVariation?._id)}</p>
            <button
              className='p-2 bg-brand_colors rounded text-white font-600'
              onClick={() => handleIncreaseQuantity(product._id, selectedVariation._id)}
            >
              +
            </button>
            <button
              className='p-2 bg-red-500 rounded text-white font-600'
              onClick={() => handleRemoveFromCart(product._id, selectedVariation._id)}
            >
              Remove
            </button>
          </div>
        ) : (
          <button
            className='w-full text-center py-3 rounded-md bg-brand_colors text-white mt-2'
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        )
      ) : (
        findQuantity(product._id) > 0 ? (
          <div className='flex gap-2 items-center md:pl-[70px] mt-3'>
            <button
              className='p-2 bg-brand_colors rounded text-white font-600'
              onClick={() => handleDecreaseQuantity(product._id)}
              disabled={findQuantity(product._id) <= (product.minimum || 1)}
            >
              -
            </button>
            <p>{findQuantity(product._id)}</p>
            <button
              className='p-2 bg-brand_colors rounded text-white font-600'
              onClick={() => handleIncreaseQuantity(product._id)}
            >
              +
            </button>
            <button
              className='p-2 bg-red-500 rounded text-white font-600'
              onClick={() => handleRemoveFromCart(product._id)}
            >
              Remove
            </button>
            <Link href={"/cart"} className='text-[13px] text-brand_color underline'>View Cart</Link>
          </div>
        ) : (
          <button
            className='w-full text-center py-3 rounded-md bg-brand_colors text-white mt-2'
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        )
      )}
    </div>
  );
};

export default ProductButton;
