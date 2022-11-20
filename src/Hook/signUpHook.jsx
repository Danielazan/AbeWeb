import React,{useState} from 'react'
import UserHook from "./UserHook"
import axios from "axios"
import { useNavigate } from 'react-router-dom';



function SignUpHook() {
    const [isLoading, setisLoading] = useState(false)
    const [error, seterror] = useState(null)
    const {dispatch}=UserHook()
    const navigate = useNavigate();

    const signUp = async (email,name,password)=>{
        const url ="https://abe-api.onrender.com/api/signup"

        setisLoading(true)
        seterror(null)

        const response = await axios({
            method:"POST",
            url:url,
            headers:{
                "Conten-Type":"application/json",
            },
            body:JSON.stringify({email,name,password})
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
    {signUp,isLoading,error}
  )
}

export default SignUpHook