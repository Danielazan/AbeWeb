
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import {ProductContextProvider} from "Context/ProductsContext"
import { CollectionContextProvider} from "Context/CollectionContext"
import UserContextProvider from "Context/UserContext"
import CustomerContextProvider from "Context/CustomerContext"
import ItemContextProvider from "Context/itemContext"
import OrderContextProvider from "Context/PurchasedOrderContext"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <UserContextProvider>
    <CollectionContextProvider>
        <CustomerContextProvider>
        <ItemContextProvider>
          <OrderContextProvider>
                <ProductContextProvider>
                    <App />
                </ProductContextProvider>
            </OrderContextProvider>
            </ItemContextProvider>
          </CustomerContextProvider>
          </CollectionContextProvider>
   </UserContextProvider>
    
  </React.StrictMode>
);


              

