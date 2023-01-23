import { act } from '@testing-library/react'
import React,{createContext,useReducer} from 'react'

export const OrderContext= createContext()

const OrderReducer = (state, action)=>{
    switch(action.type){
        case "SET iteam":
        return{
            iteam:action.payload
        }

        case "Create item":
        return{
            iteam:[action.payload, ...state.iteam]
        }

        case "DELETE":
        return{
            iteam:action.payload
        }

        case "CLEAR":
        return{
            iteam:action.payload
        }

        default:
            return state
    }
}

function OrderContextProvider({children}) {

    const [state, dispatchOrder] =useReducer(OrderReducer, {Orders:[]})
  return (
    <div>
        <OrderContext.Provider value={{...state,dispatchOrder}}>
            {children}
        </OrderContext.Provider>
    </div>
  )
}

export default OrderContextProvider