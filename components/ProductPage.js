import React from 'react';

const ProductPage = () => {
  return (
    <div>
      <div className='flex justify-center text-[30px] font-bold'>
        Product List
      </div>
      <div className='flex flex-row gap-10 justify-center'>
        <div>
          <h1 className='text-[30px] font-bold'>Product 1</h1>
          <p>Product title</p>
          <p>product description</p>
          <p>product price</p>
          <button className='bg-blue-700 px-2 py-1'>Add to cart</button>
        </div>
        <div>
          <h1 className='text-[30px] font-bold'>Product 2</h1>
          <p>Product title</p>
          <p>product description</p>
          <p>product price</p>
          <button className='bg-blue-700 px-2 py-1'>Add to cart</button>
        </div>
        <div>
          <h1 className='text-[30px] font-bold '>Product 3</h1>
          <p>Product title</p>
          <p>product description</p>
          <p>product price</p>
          <button className='bg-blue-700 px-2 py-1'>Add to cart</button>
        </div>
        <div>
          <h1 className='text-[30px] font-bold '>Product 4</h1>
          <p>Product title</p>
          <p>product description</p>
          <p>product price</p>
          <button className='bg-blue-700 px-2 py-1'>Add to cart</button>
        </div>
        <div>
          <h1 className='text-[30px] font-bold'>Product 5</h1>
          <p>Product title</p>
          <p>product description</p>
          <p>product price</p>
          <button className='bg-blue-700 px-2 py-1'>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
