import React from 'react';
import axios from 'axios';
import { addtocart } from '../store/user/user.action';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';

const ProductPage = () => {
  const [productData, setproductData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        setproductData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className='flex justify-center text-[30px] font-bold'>
        Product List
      </div>
      {productData.map((post) => {
        const { id, title, price, description } = post;

        const addCartHandler = () => {
          console.log('Product is', post.id, 'has title', post.title);
        };
        return (
          <div className='container mx-auto flex flex-col gap-10 justify-center'>
            <div key={post.id}>
              <h1 className='text-[30px] font-bold'>Product {post.id}</h1>
              <p>Title: {post.title}</p>
              <p>Description: {post.description}</p>
              <p>Price: {post.price}</p>
              <button
                className='bg-blue-700 px-2 py-1'
                onClick={() => dispatch(addtocart(productData))}
              >
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductPage;
