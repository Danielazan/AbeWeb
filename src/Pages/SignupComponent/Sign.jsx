import React,{useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Container,Row,Col,Button,Form} from "react-bootstrap"
import {Link} from "react-router-dom"
import UserHook from "Hook/UserHook"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import Navbar2 from "Components/Navbar2"

function Sign() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState(null)
  //const {signUp,error,isloading}=SignUpHook()

  const [isLoading, setisLoading] = useState(false)
  const [error, seterror] = useState(null)
  const {dispatchU}=UserHook()

  const navigate = useNavigate();

  const handleSubmit=async (e)=>{
    e.preventDefault()

    const url ="https://abe-api.onrender.com/api/signup"

    const obj= {name,email,password}

    console.log(obj)
    setisLoading(true)

    const response = await axios({
      method:"post",
      url:url,
      data:JSON.stringify(obj),
      headers:{
        "Content-Type":"application/json"
      }
    }).catch(datum=>{
      console.log(datum.response.data.error)

      seterror(datum.response.data.error)

      setisLoading(false)
    })

    const json =await response.data
         
    if (response){

      localStorage.setItem("User", JSON.stringify(json))

      setName("")

      setEmail("")
  
      setPassword("")
  
      navigate('/Verify')

    }

    dispatchU({type:"Verify Email", payload:json})
   
  }

  return (
    <React.Fragment>
        <Navbar2/>
        <Container className='sign'>
          <Row>
              <Col xs={12} lg={1}></Col>
              <Col xs={12} lg={10}>
                <h1 className='sign-h1'>Sign Up</h1>

                <p className='form-p'>Start Turning Your Ideas To Reality</p>

                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='form-label'>Name</Form.Label>
                        <Form.Control 
                        type="text" placeholder="Enter Your Name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                         />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='form-label'>Email </Form.Label>
                        <Form.Control 
                        type="email" placeholder="Enter Your Email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                         />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='form-label'>Password </Form.Label>
                        <Form.Control type="password" placeholder="Create Password"
                        onChange={(e)=>setPassword(e.target.value)}
                         />

                        <p className='sign-p form-p mt-1'>Must be at least 8 characters</p>
                    </Form.Group>


                    <Button 
                    disabled={isLoading}
                    className='w-100 mt-5 sign-btn py-2'
                    onClick={handleSubmit}
                    >Create Account</Button>
                </Form>
                {error && <p style={{backgroundColor:"rgb(248, 215, 218)",color:"rgb(132, 32, 41)",border:"2px solid rgb(245, 194, 199)"}} className='py-2 rounded-2 ps-2 mt-3'>{error}</p>}
                <div className="d-flex my-4 justify-content-center">
                  <p className='form-p'>Already have an account?</p>

                  <Link Navigate to="/Login" className='sign-link mx-2'>Log In</Link>
                </div>
              </Col>
              <Col xs={12} lg={1}></Col>
          </Row>
        </Container>  
    </React.Fragment>
  )
}

export default Sign