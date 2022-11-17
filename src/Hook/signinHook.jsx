import React,{useState} from 'react'
import UserHook from "Hook/UserHoook"
import axios from "axios"



function SigninHook() {
    const [isLoading, setisLoading] = useState(false)
    const [error, seterror] = useState(null)
    const {dispatch}=UserHook()

    const signin = async (email,password)=>{
        const url ="http://localhost:5000/api/signup"

        setisLoading(true)
        seterror(null)

        const response = await axios({
            method:"POST",
            url:url,
            headers:{
                "Conten-Type":"application/json",
            },
            body:JSON.stringify({email,password})
        })

        const json =await response.json()

        if(!response.ok){
            setisLoading(false)

            seterror(json.error)
        }

        if (response.ok){
            localStorage.setItem("User", JSON.stringify(json))
        }

        dispatch({type:"Login", payload:json})
    }

  return (
    {signin,isLoading,error}
  )
}

export default SigninHook