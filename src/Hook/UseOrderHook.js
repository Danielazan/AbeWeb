import React,{useContext} from 'react'
import {OrderContext} from "Context/PurchasedOrderContext"

function OrderHook() {
    const Context = useContext(OrderContext)

    if (!Context){
        throw Error ("Iteam provider must be provided")
    }
  return (
    Context
  )
}

export default OrderHook