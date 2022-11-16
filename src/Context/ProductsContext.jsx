import { createContext, useReducer} from 'react'

export const ProductContext = createContext()

export const ProductReducer = (state, action)=>{
        switch(action.type){
            case "SET Product":
                return{
                    Product:action.payload
                }

            case "CREATE Product":
                return{
                    Product:[action.payload, ...state.Product]
                }

            case "DELETE Product":
                return{
                    Product: state.Product.filter((N)=> N._id !==action.payload._id)
                }

            default:
                return state
        }
}

export const ProductContextProvider= ({children})=>{
    const [state, dispatch]= useReducer(ProductReducer, {Product:null})
    return(
        <ProductContext.Provider value={{...state,dispatch}}>
            {children}
        </ProductContext.Provider>
    )
}