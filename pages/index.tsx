import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import LogInPage from '../components/LogInPage';
import ProductPage from '../components/ProductPage';
import CartPage from '../components/CartPage';

const Home: NextPage = () => {
  return (
    <div>
    
      <LogInPage/>
      <ProductPage/>
      <CartPage/>
    </div>
  )
}

export default Home
