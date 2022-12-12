import React from 'react';

const CartPage = () => {
  return (
    <div className='my-10'>
      <div className='text-[30px] font-bold flex justify-center'>
        Cart Product
      </div>
      <div className='flex flex-column justify-center gap-5'>
        <h1>Product 1</h1>
        <p>Product title</p>
        <p>product description</p>
        <p>product price</p>
      </div>
    </div>
  );
};

export default CartPage;
