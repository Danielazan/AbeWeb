import React,{useContext} from 'react'
import {Collection} from "Context/Collection"

function Context() {

    const NewContext = useContext(Collection)
    
    if(!NewContext){

    }
    return(
        
        NewContext
    )
}

export default Context