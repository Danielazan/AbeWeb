
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import {ProductContextProvider} from "Context/ProductsContext"
import { CollectionContextProvider} from "Context/CollectionContext"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CollectionContextProvider>
    <ProductContextProvider>
      
        <App />
      
    </ProductContextProvider>
    </CollectionContextProvider>
    
  </React.StrictMode>
);


              

