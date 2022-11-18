import { CollectionContext} from 'Context/CollectionContext'
import {useContext} from 'react'

export const useCollectionContext =()=>{
    const context = useContext(CollectionContext)

    if(!context){
        throw Error("useCollectionContext must be in CollectionContext Provider")
    }
    return context
}