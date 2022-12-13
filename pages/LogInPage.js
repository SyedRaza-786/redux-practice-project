import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import selectUserReducer from '/store/user/user.selector';
import {
  userLoginStart,
  userLoginSuccess,
  userLoginFailure,
} from '../store/user/user.action';

const LogInPage = () => {
  const [inputId, setinputId] = useState('');
  const [inputPassword, setinputPassword] = useState('');
  // const dispatch = useDispatch();
  // const { user, error, message, loading } = useSelector(selectUserReducer);
  const check = () => {
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
          <button className='bg-red-700 h-10 w-60 ' onClick={check}>
            Log In My Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
