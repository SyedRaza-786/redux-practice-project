import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, usedispatch } from 'react-redux';
import {
  userLoginStart,
  userLoginSuccess,
  userLoginFailure,
} from '../store/user/user.action';
import axios from 'axios';

const LogInPage = () => {
  //   useEffect(() => {
  //     axios
  //       .get('https://fakestoreapi.com/users')
  //       .then((res) => console.log('test ', res.data));
  //   }, []);
  const [inputId, setinputId] = useState('');
  const [inputPassword, setinputPassword] = useState('');

  const test = () => {
    console.log(inputId, inputPassword);
  };
  return (
    <div>
      <div className='flex justify-center my-60 gap-3 '>
        <div>
          <input
            className='h-10 w-60 '
            type='text'
            value={inputId}
            placeholder='Enter Your ID'
            onChange={(e) => setinputId(e.target.value)}
          ></input>
        </div>
        <div>
          <input
            className='h-10 w-60 '
            type='password'
            value={inputPassword}
            placeholder='Enter Your Password '
            onChange={(e) => setinputPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <button onClick={test} className='bg-red-700 h-10 w-60 '>
            Log In My Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
