import React,{useState} from 'react'
import UserHook from "Hook/UserHook"

function LoginHook() {
    const {dispatch}= UserHook()

    const LogOut=async()=>{
        localStorage.removeItem("User")

        dispatch({type:"Logout"})
    }
  return (
    {LogOut}
  )
}

export default LoginHook