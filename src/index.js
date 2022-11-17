
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import {ProductContextProvider} from "Context/ProductsContext"
import { CallPro } from 'Context/Collection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductContextProvider>
      <CallPro>
        <App />
      </CallPro>
    </ProductContextProvider>
    
  </React.StrictMode>
);


              

