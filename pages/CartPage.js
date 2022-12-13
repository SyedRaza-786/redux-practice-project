import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userReducer } from '../store/user/user.reducer';

const CartPage = () => {
  const list = useSelector((state) => state.user.cartList);

  return (
    <div className='my-10'>
      <div className='text-[30px] font-bold flex justify-center'>
        Cart Product
      </div>
      {list.map((cart) => {
        return (
          <div>
            <div
              className='flex flex-column justify-center gap-5'
              key={cart.id}
            >
              <h1>Product 1 {cart.id}</h1>
              <p>Title {cart.title} </p>
              <p>Description {cart.description}</p>
              <p>Price {cart.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartPage;
