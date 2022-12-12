import React from 'react';
import { useEffect } from 'react';
import { useSelector, usedispatch } from 'react-redux';
import {
  userLoginStart,
  userLoginSuccess,
  userLoginFailure,
} from './store/user/user.action';
import axios from 'axios';

const LogInPage = () => {
  //   useEffect(() => {
  //     axios
  //       .get('https://fakestoreapi.com/users')
  //       .then((res) => console.log('test ', res.data));
  //   }, []);

  return (
    <div>
      <div className='flex justify-center my-20 gap-3'>
        <div>
          <input type='text' placeholder='Enter Your ID'></input>
        </div>
        <div>
          <input type='text' placeholder='Enter Your Password '></input>
        </div>
        <div>
          <button className='bg-red-700 px-2'>Log In My Account</button>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
