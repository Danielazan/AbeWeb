import React,{useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import {Container,Row,Col,Button,Form} from "react-bootstrap"
import {Link} from "react-router-dom"
import UserHook from "Hook/UserHook"
import axios from "axios"
import { useNavigate } from 'react-router-dom';

function Sign() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  //const {signUp,error,isloading}=SignUpHook()

  const [isLoading, setisLoading] = useState(false)
  const [error, seterror] = useState(null)
  const {dispatch}=UserHook()

  const navigate = useNavigate();

  const handleSubmit=async (e)=>{
    e.preventDefault()

    const url ="https://abe-api.onrender.com/api/signup"

    const obj= {name,email,password}

    console.log(obj)
         setisLoading(true)

        seterror(null)

        const response = await axios({
          method:"post",
          url:url,
         data:JSON.stringify(obj),
         headers:{
           "Content-Type":"application/json"
         }
        })

        const json =await response.data
          setisLoading(true)

        if(!response){
            setisLoading(false)

            seterror(json.error)
        }

        if (response){
            localStorage.setItem("User", JSON.stringify(json))

            setName("")

            setEmail("")
        
            setPassword("")
        
            navigate('/Verify')

        }

        dispatch({type:"Login", payload:json})

        

   
  }

  return (
    <React.Fragment>
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
                  {error && <div className='error'>{error}</div>}
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