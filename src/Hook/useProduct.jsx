import { ProductContext} from 'Context/ProductsContext'
import {useContext} from 'react'

export const useProductContext =()=>{
    const context = useContext(ProductContext)

    if(!context){
        throw Error("useproductContext must be in productContext Provider")
    }
    return context
}