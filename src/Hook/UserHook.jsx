import React,{useContext} from 'react'
import { UserContext } from 'Context/UserContext'

function UserHook() {
    const context = useContext(UserContext)

   
        if(!context){
            throw Error("UserContext must be in UserContext Provider")
        }

  return (
    context
  )
}

export default UserHook