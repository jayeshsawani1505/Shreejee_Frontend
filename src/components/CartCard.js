import Image from 'next/image';
import React, { useState } from 'react';
import ProductSlider from './ProductSlider';

const CartCard = ({ id, name, price, image, quantity, details, variations, onIncreaseQuantity, onDecreaseQuantity, onRemoveFromCart, totalPrice }) => {
  const [selectedVariation, setSelectedVariation] = useState(variations.length > 0 ? variations[0] : null);
  const [currentPrice, setCurrentPrice] = useState(price);

  const handleVariationChange = (e) => {
    const variationId = e.target.value;
    const variation = variations.find(v => v._id === variationId);
    setSelectedVariation(variation);
    setCurrentPrice(variation ? variation.price : price);
  };

  console.log(variations)

  return (
    <div className='w-[700px] h-[100%] border-[2px] rounded p-2 flex gap-3 justify-between font-lato md:flex-col md:w-[100%] md:justify-center md:items-center'>
    <div className='w-[300px]'>
     <ProductSlider product={image}/></div>
      <div className='w-full'>
        <h1 className='text-[20px] font-[600]'>{name}</h1>
        <br/>
        <h2 className='text-green-500 text-[19px] font-[600]'>{(currentPrice * quantity).toFixed(2)} Rs</h2>
        <br/>
        <div className="prose ml-2 mr-2" dangerouslySetInnerHTML={{ __html: details }} />
        <br/>
        {variations.length > 0 ? (
          <div>
            <label htmlFor={`variation-${id}`} className='block text-sm font-medium'>Select Variation:</label>
            <select 
              id={`variation-${id}`} 
              value={selectedVariation ? selectedVariation._id : ''} 
              onChange={handleVariationChange}
              className='border p-2 rounded-md mt-1'
            >
              {variations.map(variation => (
                <option key={variation._id} value={variation._id}>
                {variation.quantity}{variation.unit} - Rs.{variation.price}
                </option>
              ))}
            </select>
          </div>
        ) : (
   
          <p>{""}</p>
        )}
        <br/>
        <div className='flex gap-2 items-center md:pl-[70px]'>
          <button 
            className='p-2 bg-brand_colors rounded text-white font-600'
            onClick={() => onDecreaseQuantity(id)}
          >
            -
          </button>
          <p>{quantity}</p>
          <button 
            className='p-2 bg-brand_colors rounded text-white font-600'
            onClick={() => onIncreaseQuantity(id)}
          >
            +
          </button>
          <button 
            className='p-2 bg-red-500 rounded text-white font-600'
            onClick={() => onRemoveFromCart(id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
