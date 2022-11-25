import React,{createContext,useReducer} from 'react'


export const CustomerContext= createContext()

const CusReducer = (state,action)=>{
    switch(action.action){
        case "SET Customer":
                return{
                    Customer:action.payload
                }

        case "Create Customer":
        return{
            Customer:[action.payload, ...state.Customer]
        }

        default:
            return state
    }

}
function CustomerContextProvider({children}) {

    const [state, dispatch3] = useReducer(CusReducer, {Customer:[]})
  return (
    <div>
        <CustomerContext.Provider value={{...state,dispatch3}}>
            {children}
        </CustomerContext.Provider>
    </div>
  )
}

export default CustomerContextProvider