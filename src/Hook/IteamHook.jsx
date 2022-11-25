import React,{useContext} from 'react'
import {itemContext} from "Context/itemContext"

function IteamHook() {
    const Context = useContext(itemContext)

    if (!Context){
        throw Error ("Iteam provider must be provided")
    }
  return (
    Context
  )
}

export default IteamHook