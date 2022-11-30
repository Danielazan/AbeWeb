import { act } from '@testing-library/react'
import React,{createContext,useReducer} from 'react'

export const itemContext= createContext()

const itemReducer = (state, action)=>{
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

function ItemContextProvider({children}) {

    const [state, dispatchItem] =useReducer(itemReducer, {iteam:[]})
  return (
    <div>
        <itemContext.Provider value={{...state,dispatchItem}}>
            {children}
        </itemContext.Provider>
    </div>
  )
}

export default ItemContextProvider