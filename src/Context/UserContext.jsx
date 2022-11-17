import React,{createContext,useReducer} from 'react'

export const UserContext= createContext()

    export const reducer=(state,action)=>{
        switch(action.type){
            case "Login":
                return {User:action.payload}
                

            case "Verify Email":
                return{
                    User:action.payload
                }

            case "Logout":
                return{
                    User:null
                }

            default:
                return state
        }
    }
function UserContextProvider({children}) {

    const [state,dispatch]=useReducer(reducer,{User:null})

  return (
    <UserContext.Provider value={{...state,dispatch}}>
            {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider