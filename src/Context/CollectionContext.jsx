import { createContext, useReducer} from 'react'

export const CollectionContext = createContext()

export const CollectionReducer = (state, action)=>{
        switch(action.type){
            case "SET Collection":
                return{
                    Collection:action.payload
                }

            case "CREATE Collection":
                return{
                    Collection:[action.payload, ...state.Collection]
                }

            case "DELETE Collection":
                return{
                    Collection: state.Collection.filter((N)=> N._id !==action.payload._id)
                }

            default:
                return state
        }
}

export const CollectionContextProvider= ({children})=>{
    const [state, dispatch2]= useReducer(CollectionReducer, {Collection:null})
    return(
        <CollectionContext.Provider value={{...state,dispatch2}}>
            {children}
        </CollectionContext.Provider>
    )
}