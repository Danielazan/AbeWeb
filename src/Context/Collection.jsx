import React, {useReducer} from 'react'
export const Collection = React.createContext()


function Call(state,action){

    switch(action.type){
  
      case "ROOFING" : return {state:action.payload}
  
      case "WATER" : return {state:action.payload}
  
      default : return state
    }
}

export const CallPro= ({children})=>{
    
    const [state, dispatch] = useReducer(Call,{state:null})

    return(
        <Collection.Provider value={{...state,dispatch}}>
            {children}
        </Collection.Provider>
    )

}

