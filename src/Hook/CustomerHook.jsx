import React,{useContext} from 'react'
import {CustomerContext} from "Context/CustomerContext"

function CustomerHook() {
    const Context = useContext(CustomerContext)

    if(!Context){
        throw Error("Customer Provider must be Provided")
    }
  return Context
}

export default CustomerHook