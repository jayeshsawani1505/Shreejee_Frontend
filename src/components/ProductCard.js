import React from 'react';
import ProductButton from './ProductButton';
import ProductSlider from './ProductSlider';

const ProductCard = ({ product }) => {
  function capitalizeWords(str) {
    return str.replace(/\b\w+/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
  }
  
  const formattedDetails = product?.details ? capitalizeWords(product.details) : '';

  return (
    <div 
      key={product._id} 
      className='w-64 min-h-[300px] p-2 rounded flex flex-col justify-between' 
    >
      <ProductSlider product={product} />

      <div className='flex flex-col flex-grow'>
        <p className='ml-2 font-medium text-lg'>
          {product.name.replace(/\b\w+/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())}
        </p>
        <div className="prose ml-2 mr-2 mt-2" dangerouslySetInnerHTML={{ __html: formattedDetails }} />
        <p className='ml-2 font-semibold text-lg text-green-600 mt-2'>₹{product.price}</p>
       {product?.minimum>1&& <p className='pt-[3px] pl-[5px] font-[500]'>minimum order {product?.minimum}</p>

       }
      </div>

      {/* Container to align the button */}
      <div className=''>
        <ProductButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
