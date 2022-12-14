import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { persistor, store } from '../store/store';
import {Provider} from 'react-redux';
import userLayout from '../layout/userLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Provider store={store}>
       
       <Component {...pageProps} />
      
    </Provider>
  )
}

export default MyApp
